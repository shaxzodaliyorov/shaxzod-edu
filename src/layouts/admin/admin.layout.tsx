import { Box, Container } from '@chakra-ui/react';
import { FunctionComponent, useState } from 'react';
import { allCoursesType } from '../../interfaces/courses';
import AdminProvidor from '../../provider/admin.providor';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';
import AdminSidebar from '../sidebar/admin.sidebar';
import { AdminProps } from './admin.props';
const AdminLayout = ({ children }: AdminProps) => {
	const [Toggle, setToggle] = useState<boolean>(false);

	const ToggleBurger = () => setToggle(prev => !prev);

	return (
		<Box w={'full'} overflow={'hidden'}>
			<Navbar ToggleBurger={ToggleBurger} />
			<AdminSidebar Toggle={Toggle} />
			<Box mt={'10vh'} minH={'90vh'} pl={{ base: 0, lg: '300px' }} pt={5}>
				<Container maxW={'container.lg'}>{children}</Container>
			</Box>
			<Footer />
		</Box>
	);
};

export default AdminLayout;

export const withAdminLayout = <T extends Record<string, unknown>>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutAdminComponent(props: T): JSX.Element {
		return (
			<AdminLayout>
				<AdminProvidor users={props.users} courses={props.courses as allCoursesType[]}>
					<Component {...props} />
				</AdminProvidor>
			</AdminLayout>
		);
	};
};
