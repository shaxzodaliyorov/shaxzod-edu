import { Avatar, Card, Divider, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BsCardList, BsFillBarChartFill } from 'react-icons/bs';
import { AllCoursesCardProps } from './all-courses-card..props';
const AllCoursesCard = ({ item }: AllCoursesCardProps) => {
	const router = useRouter();
	const toHref = () => router.push(`/course/${item.slug}`);
	return (
		<Card onClick={toHref} w={'full'} overflow={'hidden'} p={4} cursor={'pointer'}>
			<Image
				w={'full'}
				h={'230px'}
				objectFit={'cover'}
				borderRadius={'md'}
				src={item.courseImg}
				alt={item.title}
			/>
			<Heading my={4} mx={2} size={'md'}>
				{item.title}
			</Heading>
			<HStack alignItems='center' my={2} spacing={8}>
				<Flex alignItems={'center'}>
					<BsFillBarChartFill />
					<Text ml={2}>{item.dagree}</Text>
				</Flex>
				<Flex alignItems={'center'}>
					<BsCardList />
					<Text ml={2}>{item.videos.length} Darslar</Text>
				</Flex>
			</HStack>
			<Divider />
			<HStack py={2} justifyContent={'space-between'}>
				<Flex alignItems={'center'}>
					<Avatar src={item.techimg} size={'sm'} />
					<Text fontWeight={'bold'} ml={2}>
						{item?.tech}
					</Text>
				</Flex>
				<Text as='del'>
					{item.price.toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}
				</Text>
			</HStack>
		</Card>
	);
};

export default AllCoursesCard;
