import {
	Card,
	Flex,
	Grid,
	Heading,
	HStack,
	List,
	ListIcon,
	ListItem,
	Text,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaUserGraduate } from 'react-icons/fa';
import { TfiAlarmClock } from 'react-icons/tfi';
import { useAppSelector } from '../../hooks/redux';
const CourseItemDetails = () => {
	const { t } = useTranslation();
	const { course } = useAppSelector(state => state.course);
	const update = course ? new Date(course?.createdAt as Date) : new Date();
	return (
		<Card p={2}>
			<Heading fontSize={'2xl'} my={4}>
				{t('description', { ns: 'course' })}
			</Heading>
			<Text fontSize={'md'}>{course?.discription} </Text>
			<HStack mt={6} spacing={8}>
				<Flex alignItems={'center'} fontSize={{ base: 'small', md: 'md' }}>
					<FaUserGraduate />
					<Text ml={2}>{course?.students.length} O'quvchilar</Text>
				</Flex>
				<Flex alignItems={'center'} fontSize={{ base: 'small', md: 'md' }}>
					<TfiAlarmClock />
					<Text ml={2}>Oxirgi yangilanish &nbsp; {format(update, 'dd MMM yyyy')} </Text>
				</Flex>
			</HStack>
			<Heading fontSize={'2xl'} my={4}>
				{t('learn', { ns: 'course' })}
			</Heading>
			<List spacing={3} fontWeight={'bold'}>
				<Grid templateColumns={'repeat(2,1fr)'}>
					{course?.tutorial?.split(', ').map((item, index) => {
						if (item.length) {
							return (
								<ListItem my={1.5} key={index}>
									<ListIcon as={AiOutlineCheck} />
									{item}
								</ListItem>
							);
						}
					})}
				</Grid>
			</List>
		</Card>
	);
};

export default CourseItemDetails;
