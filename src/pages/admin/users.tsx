import { GetServerSideProps } from 'next';
import { UserType } from '../../interfaces/user';
import { withAdminLayout } from '../../layouts/admin/admin.layout';
import Seo from '../../layouts/seo/seo';
import { AdminUserPage } from '../../page-components';
import Admin from '../../services/admin.services';
import USER from '../../services/user.services';
const Users = ({ users }: User) => {
	// const dispatch = useAppDispatch();

	// useEffect(() => {
	// 	dispatch(getAllUsers(users));
	// }, [user]);

	return (
		<Seo metaTitle='Admin User Dashboard'>
			<AdminUserPage />
		</Seo>
	);
};

export default withAdminLayout(Users);

export const getServerSideProps: GetServerSideProps<User> = async ({ req }) => {
	const user = await USER.GetMyUser(req.cookies.token as string);
	const users = await Admin.all_users(user?._id as string, 2);

	if (!user.isadmin) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: { user, users },
	};
};

interface User extends Record<string, unknown> {
	user: UserType;
	users: UserType[];
}
