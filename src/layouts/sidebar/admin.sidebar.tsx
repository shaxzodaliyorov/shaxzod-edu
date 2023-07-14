import { Box, Button, Container, HStack, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AmdinNavigation } from '../../config/constants';
import { SideBarProps } from './sidebar.props';

const AdminSidebar = ({ Toggle }: SideBarProps) => {
	const { asPath } = useRouter();
	return (
		<Box
			w={{ base: 'full', md: '300px' }}
			pos={'fixed'}
			zIndex={99}
			transition={'all 0.3s linear'}
			left={{ base: Toggle ? 0 : '-100%', lg: 0 }}
			top={'10vh'}
			overflowY='scroll'
			css={{
				'&::-webkit-scrollbar': { width: '1px' },
				'&::-webkit-scrollbar-track': { width: '1px' },
				'&::-webkit-scrollbar-thumb': { background: 'transparent' },
			}}
			h={'90vh'}
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.900', 'gray.50')}
			borderRight={'1px'}
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
		>
			<Container maxW={'container.xl'}>
				{AmdinNavigation.map((item, idx) => {
					const active = `/${asPath.split('/')[2]}` === item.route;
					return (
						<Link href={`/admin${item.route}`} prefetch={false} key={idx}>
							<Button
								colorScheme={'green'}
								variant={active ? 'solid' : 'ghost'}
								w={'full'}
								justifyContent={'flex-start'}
								h={14}
								mt={4}
							>
								<HStack gap={2}>
									<Icon as={item.icon} />
									<Text>{item.label}</Text>
								</HStack>
							</Button>
						</Link>
					);
				})}
			</Container>
		</Box>
	);
};

export default AdminSidebar;
