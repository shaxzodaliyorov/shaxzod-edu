import {
	Avatar,
	Button,
	Flex,
	FormControl,
	Heading,
	HStack,
	Spinner,
	Text,
	useToast,
	VStack,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { UpdateUserType } from '../../interfaces/user';
import USER from '../../services/user.services';
import { successLogin } from '../../store/user/user.slice';
import TextareaFeild from '../textarea-feild/textarea-feild';
import TextFeild from '../TextFeild/TextFeild';

const ProfileSetting = () => {
	const { user } = useAppSelector(state => state.auth);
	const [avatar, setAvatar] = useState('');
	const [valuses, setValuses] = useState(data);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const FileChange = async (files: FileList | null) => {
		if (files) {
			const fileRef = files[0] || '';
			if (Math.floor(fileRef.size / 1024) < 1024) {
				const reader = new FileReader();
				reader.readAsDataURL(await fileRef);
				reader.onload = () => {
					setAvatar(reader.result as string);
				};
			} else {
				alert("iltimos 1mb dan kichik bo'lgan rasm yuklang !");
			}
		}
	};

	const dispatch = useAppDispatch();

	const toast = useToast();

	const GetMyProfile = async (token: string) => {
		const response = await USER.GetMyUser(token);
		dispatch(successLogin(response));
	};

	const changeProfileSubmit = async (formdata: UpdateUserType) => {
		setIsLoading(true);
		try {
			const data = { profilepic: avatar, ...formdata };
			const response = await USER.UpdateUser(user?._id as string, data);
			if (response) {
				setIsLoading(false);
				const token = Cookies.get('token');
				GetMyProfile(token as string);
				toast({
					title: "Profile muafaqiyatli o'zgartirildi !",
					position: 'top-right',
					status: 'success',
					isClosable: true,
					duration: 3000,
				});
			}
		} catch (error) {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (user) {
			setValuses({
				firstname: user.firstname as string,
				lastname: user.lastname as string,
				aboutme: user.aboutme as string,
				country: user.country as string,
				email: user.email as string,
			});
			setAvatar(user.profilepic as string);
		}
	}, [user]);

	const update = user ? new Date(user?.updatedAt as Date) : new Date();

	return (
		<>
			<Flex alignItems={'center'} flexWrap={'wrap'}>
				<Avatar size='2xl' src={avatar?.length ? avatar : user?.profilepic} />
				<FormControl my={4} display={{ base: 'block', md: 'none' }}>
					<label htmlFor='file' style={{ cursor: 'pointer' }}>
						<input
							type='file'
							hidden
							id='file'
							onChange={e => FileChange(e.target.files)}
							accept='.png, .jpg, .jpeg, .webp'
						/>
						<AiOutlineCloudUpload size={'4rem'} />
					</label>
				</FormControl>
				<VStack alignItems={'flex-start'} spacing={0} px={4} w={{ base: '100%', md: 'inherit' }}>
					<Heading fontSize={{ base: '2xl', md: '3xl' }} color={'green.400'}>
						{user?.firstname}&nbsp;{user?.lastname}
					</Heading>
					<Text textAlign={'start'} color={'gray.400'} fontSize={{ base: 'sm', md: 'xl' }}>
						{user?.email}
					</Text>
					<Text color={'gray.400'}>Oxirgi yangilanish ● {format(update, 'dd MMM yyyy')}</Text>
				</VStack>
			</Flex>
			<FormControl my={4} display={{ base: 'none', md: 'block' }}>
				<label htmlFor='file' style={{ cursor: 'pointer' }}>
					<input
						type='file'
						hidden
						id='file'
						onChange={e => FileChange(e.target.files)}
						accept='.png, .jpg, .jpeg, .webp'
					/>
					<AiOutlineCloudUpload size={'4rem'} />
				</label>
			</FormControl>
			<Formik onSubmit={changeProfileSubmit} initialValues={valuses} enableReinitialize>
				<Form>
					<HStack flexWrap={{ base: 'wrap', md: 'initial' }}>
						<TextFeild
							w='full'
							label='firstname'
							type='text'
							name='firstname'
							placeholder='firstname'
						/>
						<TextFeild
							w='full'
							label='lastname'
							type='text'
							name='lastname'
							placeholder='lastname'
						/>
					</HStack>
					<HStack flexWrap={{ base: 'wrap', md: 'initial' }}>
						<TextFeild label='Country' type='text' name='country' placeholder='country' />
						<TextFeild label='Email' type='email' name='email' placeholder='Email' ISDIsabled />
					</HStack>
					<TextareaFeild name='aboutme' label='' />
					<Button isDisabled={isLoading} type='submit' colorScheme={'green'} w={'full'} h={12}>
						{isLoading ? <Spinner /> : 'Saqlash'}
					</Button>
				</Form>
			</Formik>
		</>
	);
};

export default ProfileSetting;

const data = {
	firstname: '',
	lastname: '',
	country: '',
	aboutme: '',
	email: '',
};
