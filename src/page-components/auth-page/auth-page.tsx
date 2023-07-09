import { Flex, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { AccountRecovery, LoginComponent, RegisterComponent, Verification } from '../../components';

const AuthPage = () => {
	const [authState, setAuthState] = useState<
		'login' | 'register' | 'verification' | 'acccountrecovery'
	>('login');

	const ChangeAuthPage = (statetype: 'login' | 'register' | 'verification' | 'acccountrecovery') =>
		setAuthState(statetype);

	const AuthItemPageCompont = () => {
		switch (authState) {
			case 'register':
				return <RegisterComponent ChangeAuthPage={ChangeAuthPage} />;
			case 'login':
				return <LoginComponent ChangeAuthPage={ChangeAuthPage} />;
			case 'verification':
				return <Verification changeRecovery={() => undefined} />;
			case 'acccountrecovery':
				return <AccountRecovery ChangeAuthPage={ChangeAuthPage} />;
		}
	};

	return (
		<>
			<Flex
				minH={'100vh'}
				align={'center'}
				justify={'center'}
				bg={useColorModeValue('gray.50', 'gray.800')}
			>
				{AuthItemPageCompont()}
			</Flex>
		</>
	);
};

export default AuthPage;
