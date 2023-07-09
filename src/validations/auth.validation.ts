import * as Yup from 'yup';

const AuthValidtions = {
	Login() {
		return Yup.object({
			email: Yup.string().email("Emailgizni To'g'ri Kiriting !").required('Emailgizni kiriting !'),
			password: Yup.string().min(6, "6 tadan kam bo'lmasin").required('Parolgizni kiriting !'),
		});
	},
	Register() {
		return Yup.object({
			email: Yup.string().email("Emailgizni To'g'ri Kiriting !").required('Emailgizni kiriting !'),
			password: Yup.string().min(6, "6 tadan kam bo'lmasin").required('Parolgizni kiriting !'),
			firstname: Yup.string().required('ismingizni kiting !'),
			lastname: Yup.string().required('familyangizni kiting !'),
		});
	},
	otp() {
		return Yup.object({
			otp: Yup.string().min(4, "4 tadan kam bo'lmasin").required('Tasiqlash kodni kiriting !'),
		});
	},
	AccountRecovery() {
		return Yup.object({
			email: Yup.string().email("Emailgizni To'g'ri Kiriting !").required('Emailgizni kiriting !'),
		});
	},
	UpdatePassword(){
		return Yup.object({
			password: Yup.string().min(6, "6 tadan kam bo'lmasin").required('Parolgizni kiriting !'),
		});
	}
};

export default AuthValidtions;
