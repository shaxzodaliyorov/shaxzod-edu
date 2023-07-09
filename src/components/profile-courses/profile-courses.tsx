import {
	Box,
	Button,
	Card,
	CardBody,
	Flex,
	Grid,
	Heading,
	Image,
	Stack,
	useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { allCoursesType } from '../../interfaces/courses';
import USER from '../../services/user.services';
import SectionTitle from '../section-title/section-title';
import SkeletonCard from '../Skeletons/Skeleton-Card';
const ProfileCourses = () => {
	const [myCourses, setMyCourses] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const { user } = useAppSelector(state => state.auth);
	const { courses } = useAppSelector(state => state.course);
	const getMyCourse = async () => {
		setIsLoading(true);
		const response = await USER.MyCourses(user?._id as string);
		setMyCourses(response);
		setIsLoading(false);
	};

	const router = useRouter();

	useEffect(() => {
		if (user?._id?.length) {
			getMyCourse();
		}
	}, [user, user?._id]);

	return (
		<Box>
			<SectionTitle title='Kusrlar !' subtitle='Sizng kurslaringiz .' />
			<Grid
				templateColumns={{
					base: 'repeat(1, 1fr)',
					md: 'repeat(2, 1fr)',
				}}
				gap={2}
				border={1}
			>
				{!myCourses.length && <Heading>Kurslar yo'q</Heading>}
				{isLoading
					? courses.map((item, index) => <SkeletonCard key={index} />)
					: myCourses.map((item: allCoursesType, index: number) => (
							<>
								<Card
									key={index}
									border={'1px'}
									borderColor={useColorModeValue('gray.200', 'gray.700')}
								>
									<CardBody>
										<Flex gap={2} flexWrap='wrap'>
											<Box w={'100%'}>
												<Image
													w={'full'}
													h={{ base: 250, md: 350 }}
													rounded='md'
													src={item.courseImg}
													alt={item.title}
												/>
											</Box>
											<Stack display={'flex'} w={'100%'} h={'full'} justifyContent={'flex-start'}>
												<Heading size={'lg'}>{item.title}</Heading>
												<Button
													w={'full'}
													variant='outline'
													onClick={() => router.push(`/course/${item.slug}`)}
												>
													Ko'rish
												</Button>
											</Stack>
										</Flex>
									</CardBody>
								</Card>
							</>
					  ))}
			</Grid>
		</Box>
	);
};

export default ProfileCourses;
