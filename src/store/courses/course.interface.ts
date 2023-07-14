import { allCoursesType } from '../../interfaces/courses';

export interface CourseInitialStateType {
	course: allCoursesType | null;
	courses: allCoursesType[];
	isLoading: boolean;
}
