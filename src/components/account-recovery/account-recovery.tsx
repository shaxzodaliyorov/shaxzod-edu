import { Box, Button, Divider, Heading, Spinner, Stack, useColorModeValue } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import AUTH from '../../services/auth.services';
import { Verifyiction } from '../../store/user/user.slice';
import AuthValidtions from '../../validations/auth.validation';
import ErrorAlert from '../error-alert/error-alert';
import NewPasswordComponent from '../new-password/new-password';
import SocialMedia from '../social-media/social-media';
import TextFeild from '../TextFeild/TextFeild';
import Verification from '../verification-component/verification';
import { AccountRecoveryProps } from './account-recovery.props';

const AccountRecovery = ({ ChangeAuthPage }: AccountRecoveryProps) => {
	const [accountReacoveryStep, setAccountReacoveryStep] = useState<
		'verification' | 'new-password' | 'send-email'
	>('send-email');

	const changeRecovery = (statecomp: 'verification' | 'new-password' | 'send-email') => {
		setAccountReacoveryStep(statecomp);
	};

	const { isloading, error, user } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();

	const { t } = useTranslation();
	const SubmitAccountRecovery = async (formdata: { email: string }) => {
		try {
			dispatch(Verifyiction({ user: { email: formdata.email }, isloading: true, error: null }));
			const response = await AUTH.SendOtpVerification(formdata.email as string, true);
			if (response === 'success') {
				changeRecovery('verification');
			}
			dispatch(Verifyiction({ user: { email: formdata.email }, isloading: false, error: null }));
		} catch (error) {
			console.log(error);
			const err: any = error;
			dispatch(
				Verifyiction({
					user: { email: formdata.email },
					isloading: false,
					error: err?.response.data?.err,
				})
			);
		}
	};

	const CloseError = () => dispatch(Verifyiction({ user, isloading: false, error: null }));

	return (
		<>
			{accountReacoveryStep === 'send-email' && (
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
									Parolni tiklash
								</Heading>
								<>{error && <ErrorAlert title={error as string} clearError={CloseError} />}</>
								<Formik
									initialValues={{ email: '' }}
									validationSchema={AuthValidtions.AccountRecovery()}
									onSubmit={SubmitAccountRecovery}
								>
									<Form>
										<TextFeild
											label={t('auth_email_address', { ns: 'auth' })}
											type='email'
											name='email'
											placeholder='omar@gmail.com'
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
											{isloading ? <Spinner /> : 'Boshlash' }
										</Button>
									</Form>
								</Formik>
								<Divider my={4} />
								<SocialMedia />
							</Stack>
						</Box>
					</Stack>
				</Stack>
			)}
			{accountReacoveryStep === 'verification' && (
				<Verification accountRecovery changeRecovery={changeRecovery} />
			)}
			{accountReacoveryStep === 'new-password' && <NewPasswordComponent ChangeAuthPage={ChangeAuthPage} />}
		</>
	);
};

export default AccountRecovery;
