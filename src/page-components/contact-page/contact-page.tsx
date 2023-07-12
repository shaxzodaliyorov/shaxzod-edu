import { Button, Card, CardBody, Heading, Spinner, useToast } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { SectionTitle, TextareaFeild, TextFeild } from '../../components';
import { ContactMessageType } from '../../interfaces/contact';
import Contact_service from '../../services/contact.services';
import { ContactValidtion } from '../../validations/contact.validation';

const ContactPage = () => {
	const toast = useToast();
	const [isLoading, setIsLoading] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const ContactSubmit = async ({ firstname, email, discription }: ContactMessageType) => {
		try {
			setIsLoading(true);
			const data = `Ismi:${firstname}\n Email:${email}\n Izoh:${discription}\n `;
			const response = await Contact_service.sendMessage(data);
			setIsLoading(false);
			setDisabled(true);
			toast({
				title: 'Muvaffaqiyatli yuborildi !',
				isClosable: true,
				duration: 3000,
				position: 'top-right',
				status: 'success',
			});
		} catch (error) {
			setIsLoading(false);
			setDisabled(false);
			toast({
				title: 'Yuborilmadi !',
				isClosable: true,
				duration: 3000,
				position: 'top-right',
				status: 'error',
			});
		}
	};

	return (
		<>
			<SectionTitle
				title='Contact Us'
				subtitle="Taklif va Savollaringiz bo'lsa Yozib qoldirishingiz mumkin"
			/>
			<Card p={5} px={10} my={10}>
				<CardBody>
					<Heading>Contact Us</Heading>
					<Formik
						initialValues={{ email: '', firstname: '', discription: '' }}
						validationSchema={ContactValidtion}
						onSubmit={ContactSubmit}
					>
						<Form>
							<TextFeild
								name='email'
								label='Email Adress'
								type='email'
								placeholder='Omar@info.com'
							/>
							<TextFeild name='firstname' label='Name' type='text' placeholder='Omar' />
							<TextareaFeild name='discription' label='Izoh' placeholder='Izoh...' />
							<Button
								isDisabled={isLoading || disabled}
								type='submit'
								w='full'
								colorScheme={'green'}
								h={12}
							>
								{isLoading ? <Spinner /> : 'Submit'}
							</Button>
						</Form>
					</Formik>
				</CardBody>
			</Card>
		</>
	);
};

export default ContactPage;
