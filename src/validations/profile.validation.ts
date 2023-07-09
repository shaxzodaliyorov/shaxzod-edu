import * as Yup from 'yup';

const ProfileValidation = {
	chanageProfile() {
		return Yup.object({
			password: Yup.string().min(6, "6 tadan kam bo'lmasin").required('Parolgizni kiriting !'),
			firstname: Yup.string().required('ismingizni kiting !'),
			lastname: Yup.string().required('familyangizni kiting !'),
			country: Yup.string().required('Davalatingizni kiriting'),
		});
	},
	chanagePassword() {
		return Yup.object({
			password: Yup.string().min(6, "6 tadan kam bo'lmasin").required('Parolgizni kiriting !'),
		});
	},
};

export default ProfileValidation;
