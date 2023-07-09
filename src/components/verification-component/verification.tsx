import {
	Button,
	Center,
	Divider,
	Flex,
	Heading,
	PinInput,
	PinInputField,
	Spinner,
	Stack,
	Text,
	useColorModeValue,
	useToast,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import AUTH from '../../services/auth.services';
import { successRegister, Verifyiction } from '../../store/user/user.slice';
import AuthValidtions from '../../validations/auth.validation';
import ErrorAlert from '../error-alert/error-alert';
import SocialMedia from '../social-media/social-media';
import { VerificationProps } from './verification.props';

const Verification = ({ accountRecovery, changeRecovery }: VerificationProps) => {
	const { user, isloading, error } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();
	const router = useRouter();
	const toast = useToast();

	const SubmitVerification = async (formData: { otp: string }) => {
		const { otp } = formData;
		if (accountRecovery) {
			try {
				dispatch(Verifyiction({ user, error: null, isloading: true }));
				const response = await AUTH.VerifyOtpVerification(user?.email as string, otp);
				response === 'success' && changeRecovery('new-password');
				dispatch(Verifyiction({ user, error: null, isloading: false }));
			} catch (error) {
				const err: any = error;
				dispatch(Verifyiction({ user, error: err.response.data?.err, isloading: false }));
			}
		} else {
			try {
				dispatch(Verifyiction({ user, error: null, isloading: true }));
				const response = await AUTH.VerifyOtpVerification(String(user?.email), otp);
				dispatch(Verifyiction({ user, error: null, isloading: false }));
				if (response === 'success') {
					const data = {
						email: user?.email,
						password: user?.password,
						firstname: user?.firstname,
						lastname: user?.lastname,
					};
					const registerResponse = await AUTH.CreateUser(data);
					dispatch(successRegister(registerResponse.user));
					router.push('/');

					toast({
						title: 'Dasurga Kirdingiz',
						position: 'top-right',
						status: 'success',
						isClosable: true,
						duration: 3000,
					});
				}
			} catch (error) {
				const err: any = error;
				dispatch(Verifyiction({ user, error: err.response.data?.err, isloading: false }));
			}
		}
	};

	const CloseError = () => dispatch(Verifyiction({ user, error: null, isloading: false }));

	return (
		<Flex
			minH={'100vh'}
			align={'center'}
			justify={'center'}
			bg={useColorModeValue('gray.50', 'gray.800')}
		>
			<Stack spacing={4} bg={useColorModeValue('white', 'gray.700')} p={4} rounded={'lg'}>
				<Heading
					color={useColorModeValue('gray.700', 'gray.200')}
					lineHeight={1.1}
					fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
				>
					Tasiqlash
					<Text as={'span'} bgGradient='linear(to-r, gray.400,facebook.400)' bgClip='text'>
						!
					</Text>
				</Heading>
				<Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
					{user?.email} <br /> Shu email manzilga Tasiqlash kodini yubordik
				</Text>
				<>{error && <ErrorAlert title={error as string} clearError={CloseError} />}</>
				<Formik
					onSubmit={SubmitVerification}
					initialValues={{ otp: '' }}
					validationSchema={AuthValidtions.otp()}
				>
					{formik => (
						<Form>
							<Center>
								<PinInput
									onChange={val => formik.setFieldValue('otp', val)}
									otp
									size={'lg'}
									colorScheme={'facebook'}
									focusBorderColor={'facebook.500'}
								>
									{new Array(4).fill(1).map((_, idx) => (
										<PinInputField
											borderColor={
												formik.errors.otp && formik.touched.otp ? 'red.500' : 'facebook.500'
											}
											mx={4}
											key={idx}
										/>
									))}
								</PinInput>
							</Center>
							{formik.errors.otp && formik.touched.otp && (
								<Text textAlign='center' mt={2} fontSize='14px' color='red.500'>
									{formik.errors.otp as string}
								</Text>
							)}
							<Button
								mt={4}
								w={'full'}
								bg='green.400'
								color={'white'}
								colorScheme={'green'}
								h={14}
								type={'submit'}
								isDisabled={isloading}
							>
								{isloading ? <Spinner /> : 'Tasiqlash'}
							</Button>
						</Form>
					)}
				</Formik>
				<Divider />
				<SocialMedia />
			</Stack>
		</Flex>
	);
};

export default Verification;
