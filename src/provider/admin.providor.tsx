import { FC, ReactNode, useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { allCoursesType } from '../interfaces/courses';
import { UserType } from '../interfaces/user';
import { getAllUsers } from '../store/admin/admin.slice';
import { getCourses } from '../store/courses/course.slice';

interface Props {
	children: ReactNode;
	users: UserType[] | unknown;
	courses: allCoursesType[];
}

const AdminProvidor: FC<Props> = ({ children, users, courses }): JSX.Element => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getAllUsers(users));
	}, [users]);

	useEffect(() => {
		dispatch(getCourses(courses));
	}, []);

	return <>{children}</>;
};

export default AdminProvidor;
