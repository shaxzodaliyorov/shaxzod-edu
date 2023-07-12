import { Button, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { BiAddToQueue } from 'react-icons/bi';
import {
	AdminAddCourseForm,
	AdminEditCourseModal,
	CourseAdminCard,
	SectionTitle,
} from '../../components';
import { useAppSelector } from '../../hooks/redux';
import { FormCourseInittionValueType } from '../../interfaces/courses';

const AdminCoursesPage = () => {
	const [show, setShow] = useState(false);
	const { courses } = useAppSelector(state => state.course);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [values, setValues] = useState({});
	
	return (
		<>
			<SectionTitle title='Course Dashboard' subtitle="bu sahifada kurslar qo'shingiz mumkin" />
			{courses?.map((course, index) => (
				<CourseAdminCard course={course} key={index} onOpen={onOpen} setValues={setValues} />
			))}

			<Button my={4} w={'full'} leftIcon={<BiAddToQueue />} onClick={() => setShow(prev => !prev)}>
				yangi Kusr Yaratish
			</Button>

			{show && <AdminAddCourseForm setShow={setShow} />}
			<AdminEditCourseModal
				isOpen={isOpen}
				onClose={onClose}
				values={values as FormCourseInittionValueType}
			/>
		</>
	);
};

export default AdminCoursesPage;
