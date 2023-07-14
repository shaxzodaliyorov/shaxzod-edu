import {
	Avatar,
	Box,
	Button,
	Card,
	CardBody,
	Image,
	Input,
	Spinner,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
	useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FaPen } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { EditUserModal, SectionTitle } from '../../components';
import { useAppSelector } from '../../hooks/redux';
import { AdminUserUpdateInitiolState, UserType } from '../../interfaces/user';
import Admin from '../../services/admin.services';
import { getAllUsers } from '../../store/admin/admin.slice';
const AdminUserPage = () => {
	const { users } = useAppSelector(state => state.admin);
	const { user } = useAppSelector(state => state.auth);
	const [limit, setLimit] = useState(4);
	const [isLoading, setIsLoading] = useState(false);
	const [isBtnLoading, setBtnIsLoading] = useState(false);
	const [search, setSearch] = useState('');
	const [values, setValues] = useState<AdminUserUpdateInitiolState>(data);
	const dispatch = useDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [userid, setUserid] = useState<string>('');
	const getUsers = async () => {
		const response = await Admin.all_users(user?._id as string, limit);
		if (response) {
			dispatch(getAllUsers(response));
			setIsLoading(false);
		}
	};

	const MoreUsers = async () => {
		setIsLoading(true);
		setLimit(prev => prev + 2);
		await getUsers();
	};

	const deleteUser = async (currentUserId: string) => {
		const IsStatus = confirm("User o'chirilsinmi ? ");
		if (IsStatus) {
			setBtnIsLoading(true);
			const response = await Admin.Delete_user(user?._id as string, currentUserId);
			await getUsers();
			setBtnIsLoading(false);
		}
	};

	const EditOpenModal = (user: UserType) => {
		onOpen();
		const { firstname, lastname, email, country, aboutme, profilepic } = user;
		const data = { firstname, lastname, email, country, aboutme };
		setValues(data as AdminUserUpdateInitiolState);
		setUserid(user?._id as string);
	};

	useEffect(() => {
		dispatch(getAllUsers(users));
	}, [isLoading]);

	return (
		<>
			<Card>
				<CardBody>
					<Image
						w={'full'}
						h={{ base: '250px', sm: '350px', md: '500px' }}
						objectFit={'fill'}
						src='/images/img-5.png'
						alt='admin dashboard'
						rounded={'md'}
					/>
				</CardBody>
			</Card>
			<SectionTitle title='Barcha Foydalanuvchilar' subtitle='' />
			<Box pos='relative'>
				<Input
					h={{ base: 10, md: 14 }}
					placeholder={'Search...'}
					onChange={e => setSearch(e.target.value)}
				/>
				<Button pos='absolute' h={'full'} right={0} colorScheme='green' zIndex={9}>
					Search
				</Button>
			</Box>
			<Card my={5}>
				<CardBody>
					<TableContainer>
						<Table variant='simple' size={'sm'}>
							<Thead>
								<Tr>
									<Th>№</Th>
									<Th>Avatar</Th>
									<Th>Full Name</Th>
									<Th>Email</Th>
									<Th isNumeric>Courses</Th>
									<Th isNumeric></Th>
									<Th isNumeric></Th>
								</Tr>
							</Thead>
							<Tbody>
								{users
									?.filter(
										c => c.firstname?.includes(search.trim()) || c.email?.includes(search.trim())
									)
									.map((item: UserType, index: number) => {
										return (
											<Tr key={index}>
												<Td>{index + 1}</Td>
												<Td>
													<Avatar src={item?.profilepic} size='sm' />
												</Td>
												<Td>{`${item.firstname} ${item.lastname}`}</Td>
												<Td>{item?.email}</Td>
												<Td isNumeric>{item?.mycourses?.length}</Td>
												<Td isNumeric>
													<Button
														colorScheme={'blue'}
														variant={'outline'}
														onClick={() => EditOpenModal(item as UserType)}
														isDisabled={item._id === user?._id}
													>
														<FaPen />
													</Button>
												</Td>
												<Td isNumeric>
													<Button
														colorScheme={'red'}
														variant={'outline'}
														isDisabled={item._id === user?._id || isBtnLoading}
														onClick={() => deleteUser(item._id as string)}
													>
														{isBtnLoading ? <Spinner /> : <AiFillDelete />}
													</Button>
												</Td>
											</Tr>
										);
									})}
							</Tbody>
						</Table>
					</TableContainer>
					<Button
						colorScheme={'green'}
						w={'full'}
						variant={'outline'}
						onClick={MoreUsers}
						isDisabled={isLoading}
					>
						{isLoading ? <Spinner /> : "ko'proq"}
					</Button>
				</CardBody>
			</Card>
			<EditUserModal
				isOpen={isOpen}
				onClose={onClose}
				values={values}
				userid={userid}
				getUsers={getUsers}
			/>
		</>
	);
};

export default AdminUserPage;

const data = { firstname: '', lastname: '', country: '', aboutme: '', email: '' };
