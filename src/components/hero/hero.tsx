import { Box, Card, Heading, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
	const { t } = useTranslation();
	return (
		<Card w={'full'} py={{ base: 30, md: 5 }} px={5}>
			<Box
				w={'full'}
				h={{ base: '30vh', lg: '65vh' }}
				backgroundImage={`url(${'/images/img-3.jpg'})`}
				backgroundPosition={'center'}
				backgroundRepeat={'no-repeat'}
				backgroundSize={'cover'}
				position={'relative'}
				cursor='pointer'
			>
				<Box pos={'absolute'} top={0} left={0} right={0} bottom={0} bg={'rgba(0,0,0,0.7)'}>
					<Stack
						justifyContent={'center'}
						spacing={3}
						w={{ base: '100%', lg: '70%' }}
						pl={{ base: 3, lg: 10 }}
						pos={'relative'}
						h={'full'}
					>
						<Heading color={'white'}>Shaxzod Aliyorov</Heading>
						<Text color={'gray.400'}>{t('hero_discriptoin', { ns: 'home' })}</Text>
					</Stack>
				</Box>
			</Box>
		</Card>
	);
};

export default Hero;
