import { Box, Button, Card, Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { CourseComments, CourseItemDetails, SectionTitle } from '../../components';
import CourseItemCard from '../../components/course-item-card/course-item-card';
import { useAppSelector } from '../../hooks/redux';
import { GET_ALL_COURSES } from '../../services/courses.services';
const CourseItemPage = () => {
	const { course } = useAppSelector(state => state.course);
	const [comments, setComments] = useState([]);
	const [readmore, setReadmore] = useState(2);
	const [isloading, setIsloading] = useState(false);
	const [viewcomments, setViewcomments] = useState(false);

	const getComments = async () => {
		setIsloading(true);
		const response = await GET_ALL_COURSES.Comments(readmore, course?._id as string);
		setComments(response);
		setIsloading(false);
	};

	useEffect(() => {
		getComments();
	}, [viewcomments, readmore]);

	return (
		<>
			<SectionTitle
				title={course?.title as string}
				subtitle={`${course?.discription.slice(0, 50)}` as string}
			/>
			<Box py={4}>
				<Grid
					templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}
					gap={4}
					justifyContent={'space-between'}
				>
					<CourseItemCard />
					<CourseItemDetails />
				</Grid>
				<Card w={'full'} p={4} mt={2}>
					<Button onClick={() => setViewcomments(prev => !prev)} colorScheme={'green'}>
						{!viewcomments ? 'Fikrlar' : 'Yopish'}
					</Button>
				</Card>
				{viewcomments && (
					<CourseComments
						comments={comments}
						getComments={getComments}
						setReadmore={setReadmore}
						readmore={readmore}
						isloading={isloading}
						setViewcomments={setViewcomments}
					/>
				)}
			</Box>
		</>
	);
};

export default CourseItemPage;
