import {
	Avatar,
	Button,
	Card,
	CardBody,
	Divider,
	Flex,
	Grid,
	Heading,
	HStack,
	Image,
	Skeleton,
	Spinner,
	Stack,
	Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BiAddToQueue } from 'react-icons/bi';
import { BsCardList, BsFillBarChartFill } from 'react-icons/bs';
import { FaPen } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { allCoursesType, FormCourseInittionValueType } from '../../interfaces/courses';
import Admin from '../../services/admin.services';
import GET_ALL_COURSES from '../../services/courses.services';
import { getCourses } from '../../store/courses/course.slice';
import { courseAdminCardProps } from './course-admin-card.props';

const CourseAdminCard = ({ course, onOpen, setValues }: courseAdminCardProps) => {
	const { isloading } = useAppSelector(state => state.auth);
	const { user } = useAppSelector(state => state.auth);
	const [isLaoding, setIsLaoding] = useState(false);
	const dispatch = useAppDispatch();
	const getAllCourses = async () => {
		const courses = await GET_ALL_COURSES.GET();
		dispatch(getCourses(courses));
	};

	const DeleteCourse = async (courseId: string) => {
		const isStatus = confirm("Kursni o'chirilsinmi ?");
		if (isStatus) {
			setIsLaoding(true);
			const response = await Admin.Delete_Course(user?._id as string, courseId);
			getAllCourses();
			setIsLaoding(false);
		}
	};

	const OpenEditModal = (course: allCoursesType) => {
		const { __v, createdAt, courseImg, slug, updatedAt, videos, students, hours, ...item } = course;
		setValues(item as FormCourseInittionValueType);
		onOpen();
	};
			
	const router = useRouter();

	return (
		<Skeleton isLoaded={!isloading}>
			<Card h={{ base: 'full', md: '350px' }} my={2}>
				<CardBody>
					<Flex flexWrap={{ base: 'wrap', md: 'nowrap' }}>
						<Image
							w={{ base: '100%', md: '380px' }}
							h={'300px'}
							src={course?.courseImg}
							alt={'shaxzod'}
							objectFit={'fill'}
							rounded={'md'}
						/>
						<Stack w={'full'} justifyContent={'center'} pl={{ base: 0, md: 4 }}>
							<Heading textAlign={'start'} color={'gray.100'} fontWeight='bold' fontSize={'3xl'}>
								{course.title}
							</Heading>
							<Text color={'gray.400'}>{course.discription.slice(0, 200)}...</Text>
							<HStack alignItems='center' my={4} spacing={8}>
								<Flex alignItems={'center'}>
									<BsFillBarChartFill />
									<Text ml={2}>{course.dagree}</Text>
								</Flex>
								<Flex alignItems={'center'}>
									<BsCardList />
									<Text ml={2}>{course?.videos?.length} Darslar</Text>
								</Flex>
							</HStack>
							<Divider />
							<HStack py={2} justifyContent={'space-between'}>
								<Flex alignItems={'center'}>
									<Avatar src={course.techimg} size={'md'} />
									<Text fontWeight={'bold'} ml={2}>
										{course?.tech}
									</Text>
								</Flex>
								<Text as='del'>{course?.price} $</Text>
							</HStack>
							<Grid
								templateColumns={{
									base: 'repeat(1, 1fr)',
									md: 'repeat(2, 1fr)',
									lg: 'repeat(3, 1fr)',
								}}
								gap={2}
							>
								<Button
									colorScheme={'blue'}
									variant='outline'
									leftIcon={<FaPen />}
									onClick={() => OpenEditModal(course)}
								>
									Tahrirlash
								</Button>
								<Button
									colorScheme={'red.400'}
									variant='outline'
									leftIcon={<AiFillDelete />}
									onClick={() => DeleteCourse(course._id as string)}
								>
									{isLaoding ? <Spinner /> : "O'chirish"}
								</Button>
								<Button
									w={'full'}
									colorScheme={'green'}
									variant='outline'
									leftIcon={<BiAddToQueue />}
									onClick={() => router.push(`/admin/lesson/${course._id}`)}
								>
									Dars Qo'shish
								</Button>
							</Grid>
						</Stack>
					</Flex>
				</CardBody>
			</Card>
		</Skeleton>
	);
};

export default CourseAdminCard;
