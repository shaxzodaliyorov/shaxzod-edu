import { Box } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import SecurityNavbar from './security-navbar';
import { SecurityLayoutProps } from './security.props';

const SecurityLayout = ({ children }: SecurityLayoutProps) => {
	return (
		<>
			<SecurityNavbar />
			<Box mt={'10vh'}>{children}</Box>
		</>
	);
};

export default SecurityLayout;

export const SecurityWithLayout = <T extends Record<string, unknown>>(
	Component: FunctionComponent<T>
) => {
	return function SecurityWithLayoutComponent(props: T): JSX.Element {
		return (
			<SecurityLayout>
				<Component {...props} />
			</SecurityLayout>
		);
	};
};
