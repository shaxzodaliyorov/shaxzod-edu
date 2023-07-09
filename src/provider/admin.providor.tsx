import { FC, ReactNode, useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { UserType } from '../interfaces/user';
import { getAllUsers } from '../store/admin/admin.slice';

interface Props {
	children: ReactNode;
	users: UserType[] | unknown;
}

const AdminProvidor: FC<Props> = ({ children, users }): JSX.Element => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getAllUsers(users));
	}, [users]);

	return <>{children}</>;
};

export default AdminProvidor;
