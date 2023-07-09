import Cookies from 'js-cookie';
import { FC, ReactNode, useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux';
import USER from '../services/user.services';
import { successLogin } from '../store/user/user.slice';

interface Props {
	children: ReactNode;
}

const AuthProvider: FC<Props> = ({ children }): JSX.Element => {
	const dispatch = useAppDispatch();

	const GetMyProfile = async (token: string) => {
		const response = await USER.GetMyUser(token);
		dispatch(successLogin(response));
	};

	useEffect(() => {
		const token = Cookies.get('token');
		if (token) GetMyProfile(token);
	}, []);

	

	return <>{children}</>;
};

export default AuthProvider;
