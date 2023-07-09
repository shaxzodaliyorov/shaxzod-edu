import {
	Box,
	Button,
	Divider,
	Heading,
	HStack,
	Spinner,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { RegisterTypes } from '../../interfaces/user';
import AUTH from '../../services/auth.services';
import { clearError, isLoadingLogin, Verifyiction } from '../../store/user/user.slice';
import AuthValidtions from '../../validations/auth.validation';
import ErrorAlert from '../error-alert/error-alert';
import SocialMedia from '../social-media/social-media';
import TextFeild from '../TextFeild/TextFeild';
import { RegisterComponentProps } from './register-component.props';

export default function RegisterComponent({ ChangeAuthPage }: RegisterComponentProps) {
	const [showPassword, setShowPassword] = useState(false);
	const { isloading, error } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const router = useRouter();
	const registerHandeler = async ({ email, password, firstname, lastname }: RegisterTypes) => {
		const data = { email, password, firstname, lastname };
		try {
			dispatch(isLoadingLogin(true));
			const response = await AUTH.SendOtpVerification(email as string, false);
			dispatch(Verifyiction({ user: data, isloading: false, error: null }));
			ChangeAuthPage('verification');
		} catch (error) {
			const err: any = error;
			dispatch(Verifyiction({ user: data, isloading: false, error: err?.response.data?.err }));
		}
	};

	const CloseError = () => dispatch(clearError(false));

	return (
		<Stack spacing={8} mx={'auto'} w={'450px'} py={12} px={6}>
			<Stack align={'center'}>
				<Heading fontSize={'4xl'} textAlign={'center'}>
					{t('Sign_up', { ns: 'auth' })}
				</Heading>
				<Text fontSize={'lg'} color={'gray.600'}>
					{t('to_enjoy_all_of_our_cool_features', { ns: 'auth' })}
				</Text>
			</Stack>
			<Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
				<Stack spacing={4}>
					<>{error && <ErrorAlert title={error as string} clearError={CloseError} />}</>
					<Formik
						initialValues={{ email: '', password: '', firstname: '', lastname: '' }}
						validationSchema={AuthValidtions.Register()}
						onSubmit={registerHandeler}
					>
						<Form>
							<HStack p={0} m={0}>
								<TextFeild
									m={0}
									label={t('First_Name', { ns: 'auth' })}
									type='text'
									name='firstname'
									placeholder={t('First_Name', { ns: 'auth' }) as string}
								/>

								<TextFeild
									label={t('Last_Name', { ns: 'auth' })}
									type='text'
									name='lastname'
									placeholder={t('Last_Name', { ns: 'auth' }) as string}
								/>
							</HStack>
							<TextFeild
								label={t('auth_email_address', { ns: 'auth' })}
								type='email'
								name='email'
								placeholder='omar@gmail.com'
							/>
							<TextFeild
								label={t('password', { ns: 'auth' })}
								type='password'
								name='password'
								placeholder='****'
							/>
							<Button
								w='full'
								mt={2}
								h={12}
								bg='green.400'
								color={'white'}
								colorScheme={'green'}
								type={'submit'}
								isDisabled={isloading}
							>
								{isloading ? <Spinner size={'md'} /> : t('login_btn', { ns: 'auth' })}
							</Button>
						</Form>
					</Formik>
				</Stack>
				<Divider my={4} />
				<SocialMedia />
				<Box mt={2}>
					<Box
						as='span'
						_hover={{ textDecoration: 'underline' }}
						cursor='pointer'
						onClick={() => ChangeAuthPage('login')}
						color={'blue.400'}
					>
						{t('login_btn', { ns: 'auth' })}{' '}
					</Box>
					<Box as='span'>{t('already_a_user', { ns: 'auth' })}</Box>
				</Box>
			</Box>
		</Stack>
	);
}
