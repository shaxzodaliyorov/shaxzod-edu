import { GetServerSideProps } from 'next';
import { allCoursesType } from '../../interfaces/courses';
import { withAdminLayout } from '../../layouts/admin/admin.layout';
import { AdminCoursesPage } from '../../page-components';
import GET_ALL_COURSES from '../../services/courses.services';
import USER from '../../services/user.services';

const AdminCourses = ({ courses }: CoursesProps) => {
	console.log(courses);

	return <AdminCoursesPage />;
};

export default withAdminLayout(AdminCourses);

export const getServerSideProps: GetServerSideProps<CoursesProps> = async ({ req }) => {
	const user = await USER.GetMyUser(req.cookies.token as string);
	const courses = await GET_ALL_COURSES.GET();
	if (!user.isadmin) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: { courses },
	};
};

interface CoursesProps extends Record<string, unknown> {
	courses: allCoursesType[];
}
