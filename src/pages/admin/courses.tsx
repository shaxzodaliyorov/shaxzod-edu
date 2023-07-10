import { withAdminLayout } from '../../layouts/admin/admin.layout';
import { AdminCoursesPage } from '../../page-components';

const AdminCourses = () => {
	return <AdminCoursesPage />;
};

export default withAdminLayout(AdminCourses);
