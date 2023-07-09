import { GetServerSideProps } from 'next';
import { useAppDispatch } from '../../hooks/redux';
import { allCoursesType } from '../../interfaces/courses';
import { WithLayout } from '../../layouts/layout';
import Seo from '../../layouts/seo/seo';
import { CourseItemPage } from '../../page-components';
import { GET_ALL_COURSES } from '../../services/courses.services';
const CourseItem = ({ course }: CourseItemProps) => {
	const dispatch = useAppDispatch();
	return (
		<Seo metaTitle={`Shaxzod | ${course?.title}`} ogImage={course?.courseImg}>
			<CourseItemPage />
		</Seo>
	);
};

export default WithLayout(CourseItem);

export const getServerSideProps: GetServerSideProps<CourseItemProps> = async ({ query }) => {
	const slug: string = query.slug as string;
	const course = await GET_ALL_COURSES.GET_ONE(slug);
	return {
		props: {
			course,
		},
	};
};

export interface CourseItemProps extends Record<string, unknown> {
	course: allCoursesType;
}
