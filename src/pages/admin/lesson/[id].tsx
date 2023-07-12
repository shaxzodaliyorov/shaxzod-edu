import { withAdminLayout } from '../../../layouts/admin/admin.layout';
import { AdminAddLessonPage } from '../../../page-components';

const AddLesson = () => {
	return <AdminAddLessonPage />;
};

export default withAdminLayout(AddLesson);
