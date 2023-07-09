import { Box, Button, Divider, Heading, Spinner, Stack, useColorModeValue } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import USER from '../../services/user.services';
import { Verifyiction } from '../../store/user/user.slice';
import AuthValidtions from '../../validations/auth.validation';
import SocialMedia from '../social-media/social-media';
import TextFeild from '../TextFeild/TextFeild';
import { newPasswordProps } from './new-password.props';

const NewPasswordComponent = ({ ChangeAuthPage }: newPasswordProps) => {
	const { t } = useTranslation();
	const { user, isloading } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();
	const NewPasswordSubmit = async (formData: { password: string }) => {
		dispatch(Verifyiction({ user, error: null, isloading: true }));
		const response = await USER.UpdatePassword(user?.email as string, formData.password);
		if (response === 'success') {
			dispatch(Verifyiction({ user, error: null, isloading: false }));
			ChangeAuthPage('login');
		}
	};

	return (
		<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
			<Stack align={'center'}>
				<Box
					rounded={'lg'}
					w={'450px'}
					bg={useColorModeValue('white', 'gray.700')}
					boxShadow={'lg'}
					p={8}
				>
					<Stack spacing={4}>
						<Heading fontSize={'4xl'} textAlign='center'>
							Yanagi Parol o'ylab toping !
						</Heading>
						<Formik
							initialValues={{ password: '' }}
							validationSchema={AuthValidtions.UpdatePassword()}
							onSubmit={NewPasswordSubmit}
						>
							<Form>
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
									{isloading ?  <Spinner /> : t('login_btn', { ns: 'auth' })}
								</Button>
							</Form>
						</Formik>
						<Divider my={4} />

						<SocialMedia />
					</Stack>
				</Box>
			</Stack>
		</Stack>
	);
};

export default NewPasswordComponent;
