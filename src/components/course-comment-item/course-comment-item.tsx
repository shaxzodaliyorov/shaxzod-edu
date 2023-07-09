import { Avatar, Box, Divider, Flex, Skeleton, Text, VStack } from '@chakra-ui/react';
import { formatDistance } from 'date-fns';
import ReactStars from 'react-stars';
import { CourseCommentItemProps } from './course-comment-item.props';

const CourseCommentItem = ({ comment, isloading }: CourseCommentItemProps) => {
	return (
		<Box mt={2}>
			<Skeleton isLoaded={!isloading}>
				<Flex alignItems={'center'} justify={'start'}>
					<Avatar src={comment.user.profilepic} size={'md'} bg={'ButtonFace'} />
					<VStack spacing={0}>
						<Flex alignItems={'center'}>
							<Text fontWeight={'bold'} mx={2} mt={1}>
								{`${comment.user.firstname}  ${comment.user.lastname}`}
							</Text>
							<Box as='span' fontSize={'sm'} opacity={0.7}>
								{formatDistance(new Date(comment.createdAt), new Date())} ago
							</Box>
						</Flex>
						<Box w={'full'} pl={2} mb={4} textAlign='start'>
							<ReactStars
								size={15}
								count={5}
								value={comment.rating}
								color2={'#ffd700'}
								edit={false}
							/>
						</Box>
					</VStack>
				</Flex>
			</Skeleton>
			<Skeleton isLoaded={!isloading}>
				<Text w={{ base: '100%', md: '50%' }} mt={2} opacity={0.9}>
					{comment.comment}
				</Text>
			</Skeleton>
			<Divider mt={4} />
		</Box>
	);
};

export default CourseCommentItem;
