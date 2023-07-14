import { FC, ReactNode, useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { allCoursesType } from '../interfaces/courses';
import { getCourse, getCourses, loadingCourse } from '../store/courses/course.slice';

interface Props {
	children: ReactNode;
	courses: allCoursesType[];
	course: allCoursesType;
}

const AppProvider: FC<Props> = ({ courses, children, course }): JSX.Element => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!courses) {
			dispatch(loadingCourse(true));
		}

		if (courses?.length) {
			dispatch(getCourses(courses));
		}
		if (course) {
			dispatch(getCourse(course));
		}
	}, [courses, course]);

	return <>{children}</>;
};

export default AppProvider;
