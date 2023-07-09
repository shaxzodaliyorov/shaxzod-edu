import { Box, Container } from '@chakra-ui/react';
import { FunctionComponent, useState } from 'react';
import AppProvider from '../provider/app.provider';
import Footer from './footer/footer';
import { AppProviderProps, layoutProps } from './layout.props';
import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';

const Layout = ({ children }: layoutProps): JSX.Element => {
	const [Toggle, setToggle] = useState<boolean>(false);

	const ToggleBurger = () => setToggle(prev => !prev);

	return (
		<Box w={'full'} overflow={'hidden'}>
			<Navbar ToggleBurger={ToggleBurger} />
			<Sidebar Toggle={Toggle} />
			<Box mt={'10vh'} minH={'90vh'} pl={{ base: 0, lg: '300px' }} pt={5}>
				<Container maxW={'container.lg'}>{children}</Container>
			</Box>
			<Footer />
		</Box>
	);
};

export default Layout;

export const WithLayout = <T extends Record<string, unknown> & AppProviderProps>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<AppProvider course={props.course} courses={props.courses}>
					<Component {...props} />
				</AppProvider>
			</Layout>
		);
	};
};

