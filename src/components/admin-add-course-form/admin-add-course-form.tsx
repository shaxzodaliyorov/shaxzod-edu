import { Box, Button, Card, CardBody, Flex, HStack, Image, Spinner } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FcAddImage } from 'react-icons/fc';
import { useAppSelector } from '../../hooks/redux';
import Admin from '../../services/admin.services';
import AdminValidtions from '../../validations/admin.validation';
import TextOptionalFailed from '../text-optional-failed/text-optional-failed';
import TextareaFeild from '../textarea-feild/textarea-feild';
import TextFeild from '../TextFeild/TextFeild';
const AdminAddCourseForm = ({ setShow }: { setShow: (state: boolean) => void }) => {
	const [avatar, setAvatar] = useState('');
	const [image, setImage] = useState('');
	const [islaoding, setIslaoding] = useState(false);
	const { user } = useAppSelector(state => state.auth);

	const ChnageHandeler = (files: FileList | null) => {
		if (files) {
			const fileRef = files[0] || '';
			const url = URL.createObjectURL(fileRef);
			return url;
		}
		return;
	};

	const createCourse = async (formdata: any) => {
		setIslaoding(true);
		const data = { ...formdata, courseImg: image, techimg: avatar };
		await Admin.Create_Course(user?._id as string, data);
		setIslaoding(true);
		setShow(false);
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
								onChange={e => setImage(ChnageHandeler(e.target.files) as string)}
							/>
							{image ? (
								<Image src={image} w={40} h={40} alt={'course-image'} />
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
								onChange={e => setAvatar(ChnageHandeler(e.target.files) as string)}
							/>
							{avatar ? (
								<Image src={avatar} w={40} h={40} alt={'course-image'} />
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
						initialValues={inittionValue}
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
									intgredients={languages}
								/>
								<TextOptionalFailed
									placeholder='darajani tanlang'
									name='dagree'
									label='Darajalar'
									intgredients={dagrees}
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

const inittionValue = {
	title: '',
	price: '',
	dagree: '',
	language: '',
	tech: '',
	discription: '',
	tutorial: '',
};

const languages = [
	{ value: "O'zbek Tili", label: "O'zbek Tili" },
	{ value: 'Rus Tili', label: 'Rus Tili' },
	{ value: 'Englis tili', label: 'Englis tili' },
];

const dagrees = [
	{ value: 'Junior', label: 'Junior' },
	{ value: 'Middile', label: 'Middile' },
	{ value: 'Senior', label: 'Senior' },
];
