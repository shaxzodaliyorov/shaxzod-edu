import {
	Button,
	Card,
	CardBody,
	Spinner,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
	useDisclosure
} from '@chakra-ui/react';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BiAddToQueue } from 'react-icons/bi';
import { FaPen } from 'react-icons/fa';
import { AdminAddLessonFrom, AdminEditLessonModal, SectionTitle } from '../../components';
import { TimeHelper } from '../../helper/time';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { lessonFormType } from '../../interfaces/admin';
import { LessonType } from '../../interfaces/lesson';
import Admin from '../../services/admin.services';
import Lesson from '../../services/lesson.services';
import { getLessons } from '../../store/lessons/lessons.slice';

const AdminAddLessonPage = (): JSX.Element | undefined => {
	const { lessons } = useAppSelector(state => state.lesson);
	const { user } = useAppSelector(state => state.auth);
	const { course } = useAppSelector(state => state.course);
	const [initialValues, setInitialValues] = useState({});
	const [discription, setDiscription] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [show, setShow] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const dispatch = useAppDispatch();

	const getAlltLessons = async () => {
		const response = await Lesson.getLessons(course?._id as string);
		dispatch(getLessons(response));
	};

	const deleteLesson = async (id: string) => {
		const status = confirm("dars o'chirilsinmi ?");
		if (status) {
			setIsLoading(true);
			try {
				const response = await Admin.Delete_Lesson(id, user?._id as string);
				console.log(response);
				setIsLoading(false);
				getAlltLessons();
			} catch (error) {
				console.log(error);
				setIsLoading(false);
			}
		}
	};

	const opEditModal = (item: LessonType) => {
		onOpen();
		const { __v, course, coursetitle, createdAt, updatedAt, ...data } = item;
		setInitialValues(data);
		setDiscription(item?.videoDisc);
	};

	return (
		<>
			<SectionTitle
				title={course?.title as string}
				subtitle={course?.discription.slice(0, 80) as string}
			/>
			<Card my={2}>
				<CardBody>
					<TableContainer>
						<Table variant='simple' size={'sm'}>
							<Thead>
								<Tr>
									<Th>№</Th>
									<Th>Lesson name</Th>
									<Th>vaqt</Th>
									<Th isNumeric></Th>
									<Th isNumeric></Th>
								</Tr>
							</Thead>
							<Tbody>
								{lessons?.map((item: LessonType, index: number) => (
									<Tr key={index}>
										<Td>{index + 1}</Td>
										<Td>{item?.title}</Td>
										<Td>
											{TimeHelper(
												Number(item?.hours),
												Number(item?.minutus),
												Number(item?.seconds)
											)}
										</Td>
										<Td isNumeric>
											<Button
												colorScheme={'blue'}
												variant={'outline'}
												onClick={() => opEditModal(item)}
											>
												<FaPen />
											</Button>
										</Td>
										<Td isNumeric>
											<Button
												colorScheme={'red'}
												variant={'outline'}
												onClick={() => deleteLesson(item?._id as string)}
												isLoading={isLoading}
											>
												{isLoading ? <Spinner /> : <AiFillDelete />}
											</Button>
										</Td>
									</Tr>
								))}
							</Tbody>
						</Table>
					</TableContainer>
				</CardBody>
			</Card>

			<Button my={4} w={'full'} leftIcon={<BiAddToQueue />} onClick={() => setShow(prev => !prev)}>
				Dars qo'shish
			</Button>

			{show && <AdminAddLessonFrom setShow={setShow} />}
			<AdminEditLessonModal
				isOpen={isOpen}
				onClose={onClose}
				initialValues={initialValues as lessonFormType}
				discription={discription}
				setDiscription={setDiscription}
			/>
		</>
	);
};

export default AdminAddLessonPage;
