import { useAppSelector } from '../../hooks/redux';
import { WithLayout } from '../../layouts/layout';
import Seo from '../../layouts/seo/seo';
import { ProfilePage } from '../../page-components';

const Profile = () => {
	const { user } = useAppSelector(state => state.auth);
	return (
		<Seo metaTitle={user?.firstname} metaDescription={user?.aboutme}>
			<ProfilePage />
		</Seo>
	);
};

export default WithLayout(Profile);
