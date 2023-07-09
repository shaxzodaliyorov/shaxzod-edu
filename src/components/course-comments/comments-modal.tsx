import {
	Button,
	Divider,
	FormControl,
	FormLabel,
	HStack,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Spinner,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRef, useState } from 'react';
import ReactStars from 'react-stars';
import { useAppSelector } from '../../hooks/redux';
import { CommentType } from '../../interfaces/courses';
import { GET_ALL_COURSES } from '../../services/courses.services';
import CourseValidation from '../../validations/course.validations';
import TextareaFeild from '../textarea-feild/textarea-feild';
import { ModalPropsType } from './course-comments.props';

const CommentsModal = ({ isOpen, onClose, getComments }: ModalPropsType) => {
	const [isloading, setIsloading] = useState(false);
	const initialRef = useRef(null);
	const finalRef = useRef(null);
	const [rating, setRating] = useState(5);
	const { user } = useAppSelector(state => state.auth);
	const { course } = useAppSelector(state => state.course);

	const ratingChanged = (Rating: number) => {
		setRating(Rating);
	};

	const commentsHandeler = async (formdata: { comments: string }) => {
		const data = {
			UserId: user?._id,
			CourseId: course?._id,
			comment: formdata.comments as string,
			rating,
		};
		setIsloading(true);
		const response = await GET_ALL_COURSES.CreateComments(data as CommentType);
		if (response === 'success') {
			setIsloading(false);
			onClose();
			getComments();
		}
	};

	return (
		<>
			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Izoh</ModalHeader>
					<Divider />
					<ModalCloseButton />
					<ModalBody pb={6}>
						<HStack>
							<FormControl>
								<FormLabel>First name</FormLabel>
								<Input
									defaultValue={user?.firstname}
									isDisabled={true}
									ref={initialRef}
									placeholder='First name'
								/>
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Last name</FormLabel>

								<Input defaultValue={user?.lastname} isDisabled={true} placeholder='Last name' />
							</FormControl>
						</HStack>
						<FormControl mt={4}>
							<ReactStars onChange={ratingChanged} count={5} value={rating} size={18} />
						</FormControl>
						<Formik
							initialValues={{ comments: '' }}
							validationSchema={CourseValidation.Comments()}
							onSubmit={commentsHandeler}
						>
							<Form>
								<FormControl mt={4}>
									<TextareaFeild name='comments' label='Izoh' placeholder='Izoh...' />
								</FormControl>

								<Button isDisabled={isloading} colorScheme='blue' mr={3} type='submit'>
									{isloading ? <Spinner /> : 'Yuborish'}
								</Button>
								<Button onClick={onClose}>Cancel</Button>
							</Form>
						</Formik>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default CommentsModal;
