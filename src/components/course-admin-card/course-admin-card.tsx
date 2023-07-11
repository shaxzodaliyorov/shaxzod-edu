import {
	Avatar,
	Button,
	Card,
	CardBody,
	Divider,
	Flex,
	Grid,
	Heading,
	HStack,
	Image,
	Stack,
	Text,
} from '@chakra-ui/react';
import { AiFillDelete } from 'react-icons/ai';
import { BiAddToQueue } from 'react-icons/bi';
import { BsCardList, BsFillBarChartFill } from 'react-icons/bs';
import { FaPen } from 'react-icons/fa';
import { courseAdminCardProps } from './course-admin-card.props';

const CourseAdminCard = ({ course }: courseAdminCardProps) => {
	return (
		<Card h={{ base: 'full', md: '350px' }} my={2}>
			<CardBody>
				<Flex flexWrap={{ base: 'wrap', md: 'nowrap' }}>
					<Image
						w={{ base: '100%', md: '380px' }}
						h={'300px'}
						src={course?.courseImg}
						alt={'shaxzod'}
						objectFit={'fill'}
						rounded={'md'}
					/>
					<Stack w={'full'} justifyContent={'center'} pl={{ base: 0, md: 4 }}>
						<Heading textAlign={'start'} color={'gray.100'} fontWeight='bold' fontSize={'3xl'}>
							{course.title}
						</Heading>
						<Text color={'gray.400'}>{course.discription}</Text>
						<HStack alignItems='center' my={4} spacing={8}>
							<Flex alignItems={'center'}>
								<BsFillBarChartFill />
								<Text ml={2}>{course.dagree}</Text>
							</Flex>
							<Flex alignItems={'center'}>
								<BsCardList />
								<Text ml={2}>{course?.videos?.length} Darslar</Text>
							</Flex>
						</HStack>
						<Divider />
						<HStack py={2} justifyContent={'space-between'}>
							<Flex alignItems={'center'}>
								<Avatar src={''} size={'md'} />
								<Text fontWeight={'bold'} ml={2}>
									{course?.tech}
								</Text>
							</Flex>
							<Text as='del'>{course?.price} $</Text>
						</HStack>
						<Grid
							templateColumns={{
								base: 'repeat(1, 1fr)',
								md: 'repeat(2, 1fr)',
								lg: 'repeat(3, 1fr)',
							}}
							gap={2}
						>
							<Button colorScheme={'blue'} variant='outline' leftIcon={<FaPen />}>
								Tahrirlash
							</Button>
							<Button colorScheme={'red.400'} variant='outline' leftIcon={<AiFillDelete />}>
								O'chirish
							</Button>
							<Button
								w={'full'}
								colorScheme={'green'}
								variant='outline'
								leftIcon={<BiAddToQueue />}
							>
								Dars Qo'shish
							</Button>
						</Grid>
					</Stack>
				</Flex>
			</CardBody>
		</Card>
	);
};

export default CourseAdminCard;
