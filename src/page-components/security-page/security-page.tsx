import {
	Box,
	Card,
	CardBody,
	CardFooter,
	Checkbox,
	Divider,
	Flex,
	Heading,
	HStack,
	Skeleton,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { LessonType } from '../../interfaces/lesson';
import { getLesson } from '../../store/lessons/lessons.slice';

const SecurityPage = () => {
	const { lessons, isLoading, lesson } = useAppSelector(state => state.lesson);
	const { course } = useAppSelector(state => state.course);
	const { query, replace } = useRouter();
	const dispatch = useAppDispatch();
	const chanageLesson = (id: string) => {
		const link = `/security/${course?.slug}`;
		localStorage.setItem(course?.slug as string, id);
		replace({ pathname: link, query: { lesson: id } }, undefined, {
			shallow: true,
		});
		const FindLesson = lessons.find(c => c._id === id);
		dispatch(getLesson(FindLesson));
	};
	
	return (
		<>
			<Flex p={5} w={'100%'} flexWrap={'wrap'} justify={'space-between'} pos={'relative'}>
				<Card w={{ base: '100%', md: '70%' }} p={4}>
					<CardBody bg={useColorModeValue('gray.200', 'gray.800')} rounded={4}>
						<Box w={'full'} h={{ base: '27vh', sm: '40vh', md: '60vh' }}>
							<iframe width={'100%'} height='100%' src={lesson?.videolink}  ></iframe>
						</Box>
					</CardBody>
					<CardFooter>
						<VStack w={'full'} align={'start'}>
							<Heading size={'md'}>{lesson?.title}</Heading>
							<Divider />
							<Text cursor={'pointer'} _hover={{ textDecoration: 'underline' }} color={'green.500'}>
								{lesson?.videoDisc}
							</Text>
						</VStack>
					</CardFooter>
				</Card>
				<Card
					w={{ base: '100%', md: '25%' }}
					h={'80vh'}
					pos={{ base: 'relative', md: 'fixed' }}
					right={{ base: 0, md: 5 }}
					mt={{ base: 4, md: 0 }}
					bg={useColorModeValue('gray.200', 'gray.700')}
				>
					<CardBody
						overflowY={'auto'}
						css={{
							'&::-webkit-scrollbar': {
								display: 'none',
							},
							'&::-webkit-scrollbar-track': {
								display: 'none',
							},
							'&::-webkit-scrollbar-thumb': {
								display: 'none',
							},
						}}
					>
						{!lessons.length && <Text>Darslar yo'q hozircha !</Text>}
						{lessons.map((item: LessonType, index: number) => (
							<Skeleton key={index} isLoaded={!isLoading && (!!query?.lesson as boolean)}>
								<Box
									bg={
										query?.lesson === item._id
											? 'green.400'
											: useColorModeValue('gray.200', 'gray.900')
									}
									w={'full'}
									p={3}
									mt={2}
									rounded={4}
									cursor={'pointer'}
									key={index}
									// bg={'green.400'}
								>
									<HStack onClick={() => chanageLesson(item._id as string)}>
										<Checkbox colorScheme={'green'}></Checkbox>
										<Text>{item.title}</Text>
									</HStack>
								</Box>
							</Skeleton>
						))}
					</CardBody>
				</Card>
			</Flex>
		</>
	);
};

export default SecurityPage;
