import * as Yup from 'yup';

const AdminValidtions = {
	CreateCourse() {
		return Yup.object({
			title: Yup.string().required('Kurs nomini kiriting !'),
			price: Yup.number().required('naxrni kiriting !'),
			dagree: Yup.string().required('Darajani kiriting !'),
			language: Yup.string().required('Tilni kiriting !'),
			tech: Yup.string().required('Ustoz ism familyasini kiriting !'),
			discription: Yup.string().required("Maydonni to'ldirish shart"),
			tutorial: Yup.string().required("Maydonni to'ldirish shart"),
		});
	},
};

export default AdminValidtions;
