import { Router } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../hooks/redux';
import { getItem } from '../hooks/storage';
import Seo from '../layouts/seo/seo';
import { AuthPage } from '../page-components';
import { logOut } from '../store/user/user.slice';

const Auth = () => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	Router.events.on('routeChangeStart', () => {
		const token = getItem('token');
		if (!token) {
			dispatch(logOut(null));
		}
	});

	return (
		<Seo
			metaTitle={`Shaxzod | ${t<string>('auth_meta_title', { ns: 'seo' })}`}
			metaDescription={t<string>('auth_disc', { ns: 'seo' })}
		>
			<AuthPage />
		</Seo>
	);
};

export default Auth;
