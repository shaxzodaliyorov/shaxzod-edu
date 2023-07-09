import {
	Button,
	Card,
	Divider,
	Flex,
	Heading,
	HStack,
	Image,
	List,
	ListItem,
	Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AiFillClockCircle, AiOutlineDollar, AiOutlineTranslation } from 'react-icons/ai';
import { SiSimpleanalytics } from 'react-icons/si';
import { useAppSelector } from '../../hooks/redux';
import { GET_ALL_COURSES } from '../../services/courses.services';

const CourseItemCard = (): JSX.Element => {
	const { user } = useAppSelector(state => state.auth);
	const { course } = useAppSelector(state => state.course);
	const router = useRouter();
	const GoToCourse = async () => {
		if (user) {
			router.push(`/security/${course?.slug}`);
			const response = await GET_ALL_COURSES.NewStudents(
				user?._id as string,
				course?._id as string
			);
		} else {
			router.push('/auth');
		}
	};

	return (
		<Card p={1}>
			<Image
				w={'100%'}
				borderRadius={'md'}
				h={{ base: '300px', sm: '380px', md: '450px' }}
				src={course?.courseImg}
				alt={course?.title}
			/>

			<Flex justifyContent={'space-between'} px={2} alignItems={'center'}>
				<Heading size={'md'} my={2}>
					{course?.title}
				</Heading>
				<Text textDecoration={'line-through'}>250.000 So'm</Text>
			</Flex>

			<Button colorScheme={'green'} my={2} onClick={GoToCourse}>
				Ko'rish
			</Button>

			<Divider />
			<List spacing={2} py={4}>
				<ListItem px={4}>
					<Flex fontWeight={'bold'} justifyContent={'space-between'} alignItems={'center'}>
						<HStack>
							<AiFillClockCircle />
							<Text>Umumiy Soat</Text>
						</HStack>
						<Text>{course?.hours} soat</Text>
					</Flex>
				</ListItem>
				<Divider />

				<ListItem px={4}>
					<Flex fontWeight={'bold'} justifyContent={'space-between'} alignItems={'center'}>
						<HStack>
							<AiOutlineTranslation />
							<Text>Til</Text>
						</HStack>
						<Text>{course?.language}</Text>
					</Flex>
				</ListItem>
				<Divider />

				<ListItem px={4}>
					<Flex fontWeight={'bold'} justifyContent={'space-between'} alignItems={'center'}>
						<HStack>
							<AiOutlineDollar />
							<Text>Narxi</Text>
						</HStack>
						<Text>{course?.price} $</Text>
					</Flex>
				</ListItem>
				<Divider />
				<ListItem px={4}>
					<Flex justifyContent={'space-between'} alignItems={'center'}>
						<HStack>
							<SiSimpleanalytics />
							<Text fontWeight={'bold'}>Daraja</Text>
						</HStack>
						<Text fontWeight={'bold'}>{course?.dagree}</Text>
					</Flex>
				</ListItem>
				<Divider />
			</List>
		</Card>
	);
};

export default CourseItemCard;
