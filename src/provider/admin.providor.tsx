import { FC, ReactNode, useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { allCoursesType } from '../interfaces/courses';
import { LessonType } from '../interfaces/lesson';
import { UserType } from '../interfaces/user';
import { getAllUsers } from '../store/admin/admin.slice';
import { getCourse, getCourses } from '../store/courses/course.slice';
import { getLessons } from '../store/courses/lessons/lessons.slice';

interface Props {
	children: ReactNode;
	users: UserType[] | unknown;
	courses: allCoursesType[];
	Lessons: LessonType[];
	course: allCoursesType;
}

const AdminProvidor: FC<Props> = ({ children, users, courses, Lessons,course }): JSX.Element => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getAllUsers(users));
	}, [users]);

	useEffect(() => {
		dispatch(getCourses(courses));
	}, [courses]);

	useEffect(() => {
		dispatch(getCourse(course));
	}, [course]);

	useEffect(() => {
		dispatch(getLessons(Lessons));
	}, [Lessons]);
	
	return <>{children}</>;
};

export default AdminProvidor;
