import {
	Avatar,
	Box,
	Button,
	Flex,
	HStack,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsFillSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { RiAdminFill, RiMenu2Line } from 'react-icons/ri';
import { TfiWorld } from 'react-icons/tfi';
import { Languages } from '../../config/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { removeItem } from '../../hooks/storage';
import { DarkLogo } from '../../icons';
import LightLogo from '../../icons/light-logo';
import { logOut } from '../../store/user/user.slice';
import { NavbarProps } from './navbar.props';
const Navbar = ({ ToggleBurger }: NavbarProps) => {
	const [minModal, setMinModal] = useState<boolean>(false);

	const { toggleColorMode, colorMode } = useColorMode();
	const { t, i18n } = useTranslation();

	const { user } = useAppSelector(state => state.auth);

	const onLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	const router = useRouter();
	const dispatch = useAppDispatch();

	const logout = () => {
		dispatch(logOut(null));
		router.push('/auth');
		removeItem('token');
	};

	const toProfile = () => {
		router.push(`/profile/${user?.email}`);
	};

	return (
		<>
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
						<IconButton onClick={ToggleBurger} icon={<RiMenu2Line />} aria-label={'menu button'} />
						<Link href={'/'}>{colorMode === 'dark' ? <LightLogo /> : <DarkLogo />}</Link>
					</HStack>
					<HStack>
						{/* <Tooltip hasArrow label='beta tez kunda'>
							<Button pos={'relative'}>
								<RiNotification3Fill />
								<Box
									as={'span'}
									pos={'absolute'}
									top={-1}
									right={-1}
									bg={'red'}
									rounded={'full'}
									fontSize={'0.8rem'}
									w={4}
									h={4}
								>
									5
								</Box>
							</Button>
						</Tooltip> */}
						<Menu>
							<MenuButton
								display={{ base: 'none', md: 'block' }}
								rightIcon={<TfiWorld />}
								as={Button}
							>
								{i18n.resolvedLanguage.toLocaleUpperCase()}
							</MenuButton>
							<MenuList p={0} overflow={'hidden'}>
								{Languages.map(item => (
									<MenuItem
										backgroundColor={i18n.resolvedLanguage === item.type ? 'green.500' : ''}
										icon={<item.icon />}
										minH='48px'
										key={item.type}
										onClick={() => onLanguage(item.type)}
									>
										<span>{item.label}</span>
									</MenuItem>
								))}
							</MenuList>
						</Menu>

						<Button variant={'outline'} onClick={toggleColorMode}>
							{colorMode === 'dark' ? <BsFillSunFill /> : <FaMoon />}
						</Button>
						{user ? (
							<Menu>
								<MenuButton>
									<Avatar src={user?.profilepic} />
								</MenuButton>
								<MenuList>
									{user.isadmin ? (
										<MenuItem icon={<RiAdminFill />} onClick={() => router.push('/admin/users')}>
											Admin Dashboard
										</MenuItem>
									) : null}
									<MenuItem icon={<AiOutlineSetting />} onClick={toProfile}>
										Sozlamalar
									</MenuItem>
									<MenuItem icon={<FiLogOut />} onClick={logout}>
										Chiqish
									</MenuItem>
								</MenuList>
							</Menu>
						) : (
							<Button
								onClick={() => router.push('/auth')}
								rightIcon={<FiLogIn />}
								colorScheme={'green'}
							>
								{t('layout_login', { ns: 'layout' })}
							</Button>
						)}
					</HStack>
				</Flex>
			</Box>
		</>
	);
};

export default Navbar;
