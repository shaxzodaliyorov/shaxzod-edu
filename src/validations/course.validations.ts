import * as Yup from 'yup';

const CourseValidation = {
	Comments() {
		return Yup.object({
			comments: Yup.string().required('Emailgizni kiriting !'),
		});
	},
};

export default CourseValidation;