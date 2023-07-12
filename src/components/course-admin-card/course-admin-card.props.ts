import { allCoursesType, FormCourseInittionValueType } from '../../interfaces/courses';

export interface courseAdminCardProps {
	course: allCoursesType;
	onOpen: () => void;
	setValues: (state: FormCourseInittionValueType) => void;
}
