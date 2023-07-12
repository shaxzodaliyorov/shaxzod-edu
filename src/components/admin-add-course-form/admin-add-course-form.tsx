import { Box, Button, Card, CardBody, Flex, HStack, Image, Spinner } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FcAddImage } from 'react-icons/fc';
import { CourseSelectDagrees, CourseSelectlanguages, FormCourseInittionValue } from '../../config/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Admin from '../../services/admin.services';
import GET_ALL_COURSES from '../../services/courses.services';
import { getCourses } from '../../store/courses/course.slice';
import { isLoadingLogin } from '../../store/user/user.slice';
import AdminValidtions from '../../validations/admin.validation';
import TextOptionalFailed from '../text-optional-failed/text-optional-failed';
import TextareaFeild from '../textarea-feild/textarea-feild';
import TextFeild from '../TextFeild/TextFeild';
const AdminAddCourseForm = ({ setShow }: { setShow: (state: boolean) => void }) => {
	const [avatar, setAvatar] = useState('');
	const [image, setImage] = useState('');
	const [islaoding, setIslaoding] = useState(false);
	const { user } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();

	const getAllCourse = async () => {
		dispatch(isLoadingLogin(true));
		const response = await GET_ALL_COURSES.GET();
		dispatch(getCourses(response));
		dispatch(isLoadingLogin(false));
	};

	const createCourse = async (formdata: any) => {
		// let imageUrlLink;
		// if (typeof image !== 'string') {
		// 	const formData: FormData = new FormData();
		// 	formData.append('image', image as File);
		// 	setIslaoding(true);
		// 	const response = await Upload.FileUpload(formData);
		// 	console.log(response);
		// 	imageUrlLink = response.url;
		// }

		setIslaoding(true);
		const data = { ...formdata, courseImg: image, techimg: avatar };
		await Admin.Create_Course(user?._id as string, data);
		setIslaoding(true);
		setShow(false);
		getAllCourse();
	};

	const ImageChangeHandeler = (files: FileList | null) => {
		if (files) {
			const fileRef = files[0];
			const reader = new FileReader();
			reader.readAsDataURL(fileRef);
			reader.onload = () => {
				setImage(reader.result as string);
			};
		}
	};

	const AvatarChangeHandeler = (files: FileList | null) => {
		if (files) {
			const fileRef = files[0];
			const reader = new FileReader();
			reader.readAsDataURL(fileRef);
			reader.onload = () => {
				setAvatar(reader.result as string);
			};
		}
	};

	return (
		<motion.div layout>
			<Card mb={2}>
				<CardBody>
					<Flex justify={'space-between'}>
						<label>
							<input
								type={'file'}
								hidden
								accept='.png, .jpg, .jpeg, .webp'
								onChange={e => ImageChangeHandeler(e.target.files as FileList)}
							/>
							{image ? (
								<Image src={image as string} w={40} h={40} alt={'course-image'} />
							) : (
								<Box
									w={40}
									h={40}
									display='flex'
									justifyContent={'center'}
									alignItems='center'
									border='3px'
									borderStyle={'dotted'}
									cursor='pointer'
								>
									<FcAddImage size={'3rem'} />
								</Box>
							)}
						</label>
						<label>
							<input
								type={'file'}
								hidden
								accept='.png, .jpg, .jpeg, .webp'
								onChange={e => AvatarChangeHandeler(e.target.files as FileList)}
							/>
							{avatar ? (
								<Image src={avatar as string} w={40} h={40} alt={'course-image'} />
							) : (
								<Box
									w={40}
									h={40}
									display='flex'
									justifyContent={'center'}
									alignItems='center'
									border='3px'
									borderStyle={'dotted'}
									cursor='pointer'
								>
									<FcAddImage size={'3rem'} />
								</Box>
							)}
						</label>
					</Flex>
					<Formik
						onSubmit={createCourse}
						validationSchema={AdminValidtions.CreateCourse()}
						initialValues={FormCourseInittionValue}
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
							<Button isDisabled={islaoding} type='submit' colorScheme={'green'} w={'full'} h={12}>
								{islaoding ? <Spinner /> : 'Yaratsh'}
							</Button>
						</Form>
					</Formik>
				</CardBody>
			</Card>
		</motion.div>
	);
};

export default AdminAddCourseForm;



