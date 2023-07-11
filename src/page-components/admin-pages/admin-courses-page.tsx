import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { BiAddToQueue } from 'react-icons/bi';
import { AdminAddCourseForm, CourseAdminCard, SectionTitle } from '../../components';
import { useAppSelector } from '../../hooks/redux';

const AdminCoursesPage = () => {
	const [show, setShow] = useState(false);
	const { courses } = useAppSelector(state => state.course);
	return (
		<>
			<SectionTitle title='Course Dashboard' subtitle="bu sahifada kurslar qo'shingiz mumkin" />
			{courses?.map((course, index) => (
				<CourseAdminCard course={course} key={index} />
			))}

			<Button my={4} w={'full'} leftIcon={<BiAddToQueue />} onClick={() => setShow(prev => !prev)}>
				yangi Kusr Yaratish
			</Button>

			{show && <AdminAddCourseForm setShow={setShow} />}
		</>
	);
};

export default AdminCoursesPage;
