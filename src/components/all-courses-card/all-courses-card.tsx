import { Avatar, Card, chakra, Divider, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import { BsCardList, BsFillBarChartFill } from 'react-icons/bs';
import { AllCoursesCardProps } from './all-courses-card..props';
const AllCoursesCard = ({ item }: AllCoursesCardProps) => {
	const router = useRouter();
	const toHref = () => router.push(`/course/${item.slug}`);

	const Image = chakra(NextImage, {
		baseStyle: { maxH: 240, maxW: '100%' },
		shouldForwardProp: prop =>
			[
				'width',
				'height',
				'src',
				'alt',
				'quality',
				'placeholder',
				'blurDataURL',
				'loader ',
			].includes(prop),
	});
	return (
		<Card onClick={toHref} w={'full'} overflow={'hidden'} p={4} cursor={'pointer'}>
			<Image width={450} height={240} borderRadius={'md'} src={item.courseImg} alt={item.title} />
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
