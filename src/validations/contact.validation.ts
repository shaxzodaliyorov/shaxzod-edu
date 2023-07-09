import * as Yup from 'yup';

export const ContactValidtion = Yup.object({
	email: Yup.string().email("Emailgizni To'g'ri Kiriting !").required('Emailgizni kiriting !'),
	firstname: Yup.string().required('Ismingizni kiriting !'),
	discription: Yup.string().required('Izoh kiriting !'),
});
