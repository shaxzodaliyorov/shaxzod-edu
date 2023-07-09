import { Button, HStack } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
const SocialMedia = () => {
	const google = () =>
		signIn('google', { callbackUrl: `${process.env.NEXT_PUBLIC_CLIENT_DOMAIN}` });

	const github = () =>
		signIn('github', { callbackUrl: `${process.env.NEXT_PUBLIC_CLIENT_DOMAIN}` });
	return (
		<>
			<HStack>
				<Button w={'full'} rightIcon={<AiFillGithub />} onClick={github}>
					Git Hub
				</Button>
				<Button w={'full'} rightIcon={<FcGoogle />} onClick={google}>
					Google
				</Button>
			</HStack>
		</>
	);
};

export default SocialMedia;
