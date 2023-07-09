import { Box, Button, Card, CardBody, Divider, Flex, Grid, Heading, Image } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { AiOutlineLock } from 'react-icons/ai';
import { SectionTitle } from '../../components';
import { Books } from '../../config/constants';
const BooksPage = () => {
	const { t } = useTranslation();

	return (
		<>
			<SectionTitle
				title={t('book_title', { ns: 'seo' })}
				subtitle={t('book_disc', { ns: 'seo' })}
			/>
			<Grid
				templateColumns={{
					base: 'repeat(1,1fr)',
					md: 'repeat(2,1fr)',
					lg: 'repeat(4,1fr)',
				}}
				gap={4}
				pb={8}
			>
				{Books.map((item, index) => (
					<Card pos={'relative'} key={index} gap={3}>
						<CardBody>
							<Image
								w={'full'}
								h={{ base: '220px', md: '180px', lg: '100px' }}
								src={item.image}
								alt={item.name}
								borderRadius={'md'}
							/>
							<Divider mt={4} />
							<Flex justify={'space-between'} align={'center'} pt={2}>
								<Heading fontSize={'sm'}>{item.name}</Heading>
								<Button size={'sm'} colorScheme={'green'} leftIcon={<AiOutlineLock />}>
									Buy
								</Button>
							</Flex>
						</CardBody>
						<Box pos={'absolute'} right={2} top={2} bg={'red.500'} borderRadius={'sm'} px={1}>
							{item.category}
						</Box>
					</Card>
				))}
			</Grid>
		</>
	);
};

export default BooksPage;
