import { Card, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from '@chakra-ui/react';
import { AiFillSetting } from 'react-icons/ai';
import { BsShieldLockFill } from 'react-icons/bs';
import { CiBoxList } from 'react-icons/ci';
import { ProfileChangePassword, ProfileCourses, ProfileSetting } from '../../components';
import { useAppSelector } from '../../hooks/redux';
const ProfilePage = () => {
	const { user } = useAppSelector(state => state.auth);

	return (
		<Card p={5} mb={4} bg={useColorModeValue('gray.50', 'gray.900')}>
			<Tabs mt={5}>
				<TabList>
					<Tab gap={2}>
						<AiFillSetting /> Sozlamlar
					</Tab>
					<Tab gap={2}>
						<CiBoxList /> Kurslar
					</Tab>
					<Tab gap={2}>
						<BsShieldLockFill /> Parolni o'zgartirish
					</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<ProfileSetting />
					</TabPanel>
					<TabPanel>
						<ProfileCourses />
					</TabPanel>
					<TabPanel>
						<ProfileChangePassword />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Card>
	);
};

export default ProfilePage;
