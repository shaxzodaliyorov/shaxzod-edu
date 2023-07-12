import {
	Button,
	HStack,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Spinner,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { CourseSelectDagrees, CourseSelectlanguages } from '../../config/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { FormCourseInittionValueType } from '../../interfaces/courses';
import Admin from '../../services/admin.services';
import GET_ALL_COURSES from '../../services/courses.services';
import { getCourses } from '../../store/courses/course.slice';
import AdminValidtions from '../../validations/admin.validation';
import TextOptionalFailed from '../text-optional-failed/text-optional-failed';
import TextareaFeild from '../textarea-feild/textarea-feild';
import TextFeild from '../TextFeild/TextFeild';
import { AdminEditCourseModalProps } from './admin-edit-course-modal.props';

const AdminEditCourseModal = ({ isOpen, onClose, values }: AdminEditCourseModalProps) => {
	const [islaoding, setIslaoding] = useState(false);
	const { user } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();

	const getAllCourses = async () => {
		const response = await GET_ALL_COURSES.GET();
		dispatch(getCourses(response));
	};

	const updateSubmit = async (formdata: FormCourseInittionValueType) => {
		setIslaoding(true);
		const data = { ...formdata, userid: user?._id as string };
		const response = await Admin.Edit_Course(String(values._id), data);
		setIslaoding(false);
		getAllCourses();
		onClose();
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} size={{ base: '2xl', md: '4xl' }}>
				<ModalOverlay />
				<ModalContent minWidth='fit-content' height='fit-content'>
					<ModalHeader>Kursni Tahrirlash</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Formik
							onSubmit={updateSubmit}
							validationSchema={AdminValidtions.CreateCourse()}
							initialValues={values}
						>
							<Form>
								<TextFeild w='full' label='Ustoz' type='text' name='tech' placeholder='Ustoz' />
								<HStack flexWrap={{ base: 'wrap', md: 'initial' }}>
									<TextFeild
										w='full'
										label='Kursni nomi'
										type='text'
										name='title'
										placeholder='Kursni nomi'
									/>
									<TextFeild
										w='full'
										label='Kurs narxi'
										type='number'
										name='price'
										placeholder='Kurs narxi'
									/>
								</HStack>
								<HStack flexWrap={{ base: 'wrap', md: 'initial' }}>
									<TextOptionalFailed
										placeholder='tilni tanlang'
										name='language'
										label='tillar'
										intgredients={CourseSelectlanguages}
									/>
									<TextOptionalFailed
										placeholder='darajani tanlang'
										name='dagree'
										label='Darajalar'
										intgredients={CourseSelectDagrees}
									/>
								</HStack>
								<TextareaFeild name='discription' label='Discription' />
								<TextareaFeild label="Nimlarni o'rganasiz" name='tutorial' />
								<Button
									isDisabled={islaoding}
									type='submit'
									colorScheme={'green'}
									w={'full'}
									h={12}
								>
									{islaoding ? <Spinner /> : 'Saqlash'}
								</Button>
							</Form>
						</Formik>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AdminEditCourseModal;
