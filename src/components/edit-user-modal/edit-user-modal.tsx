import {
	Button,
	HStack,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Spinner,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRef, useState } from 'react';
import { AdminUserUpdateInitiolState } from '../../interfaces/user';
import Admin from '../../services/admin.services';
import TextareaFeild from '../textarea-feild/textarea-feild';
import TextFeild from '../TextFeild/TextFeild';
import { editUserModalProps } from './edit-user-modal.props';

const EditUserModal = ({ isOpen, onClose, values, userid, getUsers }: editUserModalProps) => {
	const finalRef = useRef(null);
	const [isLoading, setIsLoading] = useState(false);
	const EditUser = async (formdata: AdminUserUpdateInitiolState) => {
		setIsLoading(true);
		const response = await Admin.Edit_user(userid, formdata);
		if (response) {
			await getUsers();
			onClose();
			setIsLoading(false);
		}
	};

	return (
		<>
			<Modal
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
				size={{ base: '2xl', md: '4xl' }}
			>
				<ModalOverlay />
				<ModalContent minWidth='fit-content' height='fit-content'>
					<ModalHeader>User Tahrirlash</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Formik onSubmit={EditUser} initialValues={values} enableReinitialize>
							<Form>
								<HStack flexWrap={{ base: 'wrap', md: 'initial' }}>
									<TextFeild
										w='full'
										label='firstname'
										type='text'
										name='firstname'
										placeholder='firstname'
									/>
									<TextFeild
										w='full'
										label='lastname'
										type='text'
										name='lastname'
										placeholder='lastname'
									/>
								</HStack>
								<HStack flexWrap={{ base: 'wrap', md: 'initial' }}>
									<TextFeild label='Country' type='text' name='country' placeholder='country' />
									<TextFeild
										label='Email'
										type='email'
										name='email'
										placeholder='Email'
										ISDIsabled
									/>
								</HStack>
								<TextareaFeild name='aboutme' label='' />
								<Button
									type='submit'
									isDisabled={isLoading}
									colorScheme={'green'}
									w={'full'}
									h={12}
								>
									{isLoading ? <Spinner /> : 'Saqlash'}
								</Button>
							</Form>
						</Formik>
					</ModalBody>

					<ModalFooter></ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default EditUserModal;
