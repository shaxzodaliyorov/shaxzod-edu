import { Button, Card, CardBody, HStack, Spinner, Stack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { initialValues } from '../../config/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Admin from '../../services/admin.services';
import Lesson from '../../services/lesson.services';
import { getLessons } from '../../store/lessons/lessons.slice';
import TextFeild from '../TextFeild/TextFeild';
const ReactQuill = dynamic(import('react-quill'), { ssr: false });
const AdminAddLessonFrom = ({ setShow }: { setShow: (state: boolean) => void }) => {
	const [islaoding, setIslaoding] = useState(false);
	const [discription, setDiscription] = useState('');
	const { user } = useAppSelector(state => state.auth);
	const { course } = useAppSelector(state => state.course);
	const dispatch = useAppDispatch();

	const getAllLessons = async () => {
		const response = await Lesson.getLessons(course?._id as string);
		dispatch(getLessons(response));
	};

	const createLesson = async (formdata: any) => {
		const data = { ...formdata, videoDisc: discription };
		setIslaoding(true);
		const response = await Admin.Create_Lesson(course?._id as string, user?._id as string, data);
		getAllLessons();
		setShow(false);
		setIslaoding(false);
	};

	return (
		<Card mb={2}>
			<CardBody>
				<Formik onSubmit={createLesson} initialValues={initialValues}>
					<Form>
						<HStack>
							<TextFeild w='full' label='Dars nomi' type='text' name='title' placeholder='Title' />
							<TextFeild w='full' label='video' type='text' name='videolink' placeholder='video' />
						</HStack>
						<HStack flexWrap={{ base: 'wrap', md: 'initial' }}>
							<TextFeild w='full' label='Soat' type='number' name='hours' placeholder='Soat' />
							<TextFeild w='full' label='Minut' type='number' name='minutus' placeholder='Minut' />
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
			</CardBody>
		</Card>
	);
};

export default AdminAddLessonFrom;
