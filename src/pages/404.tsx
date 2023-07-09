import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Seo from '../layouts/seo/seo';

const NotFound = () => {
	const router = useRouter();
	return (
		<Seo metaTitle='Shaxzod | 404'>
			<Flex
				justifyContent={'center'}
				h={'100vh'}
				flexDirection={'column'}
				alignItems={'center'}
				py={10}
				px={6}
			>
				<Heading
					display='inline-block'
					as='h2'
					size='2xl'
					bgGradient='linear(to-r, teal.400, teal.600)'
					backgroundClip='text'
				>
					404
				</Heading>
				<Text fontSize='18px' mt={3} mb={2}>
					Page Not Found
				</Text>
				<Text color={'gray.500'} mb={6}>
					The page you're looking for does not seem to exist
				</Text>

				<Button
					onClick={() => router.push('/')}
					colorScheme='teal'
					bgGradient='linear(to-r, teal.400, teal.500, teal.600)'
					color='white'
					variant='solid'
				>
					Go to Home
				</Button>
			</Flex>
		</Seo>
	);
};

export default NotFound;
