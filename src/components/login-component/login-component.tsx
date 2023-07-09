import {
	Box,
	Button,
	Divider,
	Heading,
	Spinner,
	Stack,
	Text,
	useColorModeValue,
	useToast,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { EmailAndPassword } from '../../interfaces/user';
import AUTH from '../../services/auth.services';
import { clearError, errorLogin, isLoadingLogin, successLogin } from '../../store/user/user.slice';
import AuthValidtions from '../../validations/auth.validation';
import ErrorAlert from '../error-alert/error-alert';
import SocialMedia from '../social-media/social-media';
import TextFeild from '../TextFeild/TextFeild';
import { LoginComponentProps } from './login-component.props';
export default function LoginComponent({ ChangeAuthPage }: LoginComponentProps) {
	const { t } = useTranslation();
	const { isloading, error } = useAppSelector(state => state.auth);
	const router = useRouter();
	const dispatch = useAppDispatch();
	const toast = useToast();
	const LoginHandeler = async ({ email, password }: EmailAndPassword) => {
		try {
			dispatch(isLoadingLogin(true));
			const response = await AUTH.LoginUser({ email, password });
			dispatch(isLoadingLogin(false));
			dispatch(successLogin(response?.user));
			router.push('/');
			toast({
				title: 'Dasurga Kirdingiz',
				position: 'top-right',
				status: 'success',
				isClosable: true,
				duration: 3000,
			});
		} catch (error) {
			const err: any = error;
			dispatch(isLoadingLogin(false));
			dispatch(errorLogin(err?.response.data?.err));
		}
	};

	const clearErrorClose = () => {
		dispatch(clearError(false));
	};

	return (
		<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
			<Stack align={'center'}>
				<Heading fontSize={'4xl'} textAlign='center'>
					{t('sign_in_to_your_account', { ns: 'auth' })}
				</Heading>
				<Text fontSize={'lg'} color={'gray.600'}>
					{t('not_account_yet', { ns: 'auth' })}
					<Box
						as='span'
						cursor={'pointer'}
						_hover={{ textDecoration: 'underline' }}
						color={'blue.400'}
						onClick={() => ChangeAuthPage('register')}
					>
						{t('register_btn', { ns: 'auth' })}
					</Box>
				</Text>
			</Stack>
			<Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
				<Stack spacing={4}>
					<>{error && <ErrorAlert title={error as string} clearError={clearErrorClose} />}</>
					<Formik
						initialValues={{ email: '', password: '' }}
						validationSchema={AuthValidtions.Login()}
						onSubmit={LoginHandeler}
					>
						<Form>
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
							<Box
								textAlign={'end'}
								mb={2}
								color={'blue.400'}
								cursor='pointer'
								_hover={{ textDecoration: 'underline' }}
								onClick={() => ChangeAuthPage('acccountrecovery')}
							>
								Parolingizni unutdingzimi?
							</Box>
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
					<Link style={{ textDecoration: 'underline' }} href='/'>
						{t('home', { ns: 'auth' })}
					</Link>
				</Box>
			</Box>
		</Stack>
	);
}
