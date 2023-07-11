import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { BiAddToQueue } from 'react-icons/bi';
import { AdminAddCourseForm, CourseAdminCard, SectionTitle } from '../../components';

const AdminCoursesPage = () => {
	const [show, setShow] = useState(false);

	return (
		<>
			<SectionTitle title='Course Dashboard' subtitle="bu sahifada kurslar qo'shingiz mumkin" />
			{[1, 3, 3].map((_, index) => (
				<CourseAdminCard key={index} />
			))}

			<Button my={4} w={'full'} leftIcon={<BiAddToQueue />} onClick={() => setShow(prev => !prev)}>
				yangi Kusr Yaratish
			</Button>

			{show && <AdminAddCourseForm setShow={setShow} />}
		</>
	);
};

export default AdminCoursesPage;
