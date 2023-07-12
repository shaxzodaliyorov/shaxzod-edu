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
	Stack,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { lessonFormType } from '../../interfaces/admin';
import Admin from '../../services/admin.services';
import Lesson from '../../services/lesson.services';
import { getLessons } from '../../store/lessons/lessons.slice';
import TextFeild from '../TextFeild/TextFeild';
import { adminEditLessonModalProps } from './admin-edit-lesson-modal.props';
const ReactQuill = dynamic(import('react-quill'), { ssr: false });

const AdminEditLessonModal = ({
	isOpen,
	onClose,
	initialValues,
	discription,
	setDiscription,
}: adminEditLessonModalProps) => {
	const [islaoding, setIslaoding] = useState(false);

	const { user } = useAppSelector(state => state.auth);
	const { course } = useAppSelector(state => state.course);
	const dispatch = useAppDispatch();
	const getAlltLessons = async () => {
		const response = await Lesson.getLessons(course?._id as string);
		dispatch(getLessons(response));
	};

	const UpdateLesson = async (formdata: lessonFormType) => {
		const data = { ...formdata };
		setIslaoding(true);
		const response = await Admin.Edit_lesson(formdata?.id as string, user?._id as string, data);
		setIslaoding(false);
		getAlltLessons();
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} size={{ base: '2xl', md: '4xl' }}>
				<ModalOverlay />
				<ModalContent minWidth='fit-content' height='fit-content'>
					<ModalHeader>Darsni Tahrirlash</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Formik onSubmit={UpdateLesson} initialValues={initialValues}>
							<Form>
								<HStack>
									<TextFeild
										w='full'
										label='Dars nomi'
										type='text'
										name='title'
										placeholder='Title'
									/>
									<TextFeild
										w='full'
										label='video'
										type='text'
										name='videolink'
										placeholder='video'
									/>
								</HStack>
								<HStack flexWrap={{ base: 'wrap', md: 'initial' }}>
									<TextFeild w='full' label='Soat' type='number' name='hours' placeholder='Soat' />
									<TextFeild
										w='full'
										label='Minut'
										type='number'
										name='minutus'
										placeholder='Minut'
									/>
									<TextFeild
										w='full'
										label='sekund'
										type='number'
										name='seconds'
										placeholder='Sekund'
									/>
								</HStack>
								<Stack w={'full'} mt={4}>
									<ReactQuill
										theme='snow'
										style={{ height: '8rem' }}
										value={discription}
										onChange={setDiscription}
									/>
								</Stack>
								<Button
									mt={'4rem'}
									isDisabled={islaoding}
									type='submit'
									colorScheme={'green'}
									w={'full'}
									h={12}
								>
									{islaoding ? <Spinner /> : "Qo'shish"}
								</Button>
							</Form>
						</Formik>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AdminEditLessonModal;
