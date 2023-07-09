import {
	Box,
	Button,
	Card,
	CardBody,
	Flex,
	Heading,
	Image,
	Skeleton,
	Stack,
	useColorModeValue,
} from '@chakra-ui/react';

const SkeletonCard = () => {
	return (
		<Card border={'1px'} borderColor={useColorModeValue('gray.200', 'gray.700')}>
			<CardBody>
				<Flex gap={2} flexWrap='wrap'>
					<Box w={'100%'}>
						<Skeleton>
							<Image w={'full'} h={{ base: 250, md: 350 }} rounded='md' />
						</Skeleton>
					</Box>
					<Stack display={'flex'} w={'100%'} h={'full'} justifyContent={'flex-start'}>
						<Skeleton>
							<Heading size={'lg'}>nimsah</Heading>
						</Skeleton>
						<Skeleton>
							<Button w={'full'} variant='outline'>
								Ko'rish
							</Button>
						</Skeleton>
					</Stack>
				</Flex>
			</CardBody>
		</Card>
	);
};

export default SkeletonCard;
