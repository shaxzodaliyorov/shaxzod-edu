import { Box, Button, Flex, HStack, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiLogOut, BiMessageDetail } from 'react-icons/bi';
import { BsFillSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { DarkLogo } from '../../icons';
import LightLogo from '../../icons/light-logo';
const SecurityNavbar = () => {
	const { toggleColorMode, colorMode } = useColorMode();
	const { push } = useRouter();
	return (
		<Box
			w={'full'}
			pos={'fixed'}
			top={0}
			left={0}
			px={10}
			zIndex={99}
			h={'10vh'}
			bg={useColorModeValue('gray.100', 'gray.700')}
		>
			<Flex h={'full'} justifyContent={'space-between'} alignItems={'center'}>
				<HStack spacing={8}>
					<Link href={'/'} prefetch={false} >{colorMode === 'dark' ? <LightLogo /> : <DarkLogo />}</Link>
				</HStack>
				<HStack>
					<Button variant={'solid'} isDisabled={true}>
						<BiMessageDetail />
					</Button>
					<Button variant={'outline'} onClick={toggleColorMode}>
						{colorMode === 'dark' ? <BsFillSunFill /> : <FaMoon />}
					</Button>
					<Button variant={'outline'} colorScheme='red' onClick={() => push('/')}>
						<BiLogOut />
					</Button>
				</HStack>
			</Flex>
		</Box>
	);
};

export default SecurityNavbar;
