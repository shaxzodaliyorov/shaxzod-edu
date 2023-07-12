import { GetServerSideProps } from 'next';
import { allCoursesType } from '../../../../interfaces/courses';
import { LessonType } from '../../../../interfaces/lesson';
import { withAdminLayout } from '../../../../layouts/admin/admin.layout';
import Seo from '../../../../layouts/seo/seo';
import { AdminAddLessonPage } from '../../../../page-components';
import GET_ALL_COURSES from '../../../../services/courses.services';
import Lesson from '../../../../services/lesson.services';
import USER from '../../../../services/user.services';
const AddLesson = ({ Lessons,course }: LessonPropsType) => {
	return (
		<Seo metaTitle='Admin Lesson Dashboard'>
			<AdminAddLessonPage />
		</Seo>
	);
};

export default withAdminLayout(AddLesson);

export const getServerSideProps: GetServerSideProps<LessonPropsType> = async ({ req, query }) => {
	const user = await USER.GetMyUser(req.cookies.token as string);
	const Lessons = await Lesson.getLessons(query.id as string);
	const course = await GET_ALL_COURSES.GET_ONE(query.slug as string);
	if (!user.isadmin) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: { Lessons, course },
	};
};

interface LessonPropsType extends Record<string, unknown> {
	Lessons: LessonType[];
	course: allCoursesType[];
}
