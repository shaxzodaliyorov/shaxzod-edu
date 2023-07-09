import { Box, Card, Heading, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-multi-carousel';
import { HeroCoursuel } from '../../config/carousel.config';

const Hero = () => {
	const { t } = useTranslation();
	return (
		<Card w={'full'} py={{ base: 30, md: 5 }} px={5}>
			<Carousel responsive={HeroCoursuel} infinite={true} autoPlay swipeable={true}>
				{data.map((item, index) => (
					<>
						<Box
							w={'full'}
							h={{ base: '40vh', lg: '65vh' }}
							backgroundImage={`url(${item.img})`}
							key={index}
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
					</>
				))}
			</Carousel>
		</Card>
	);
};

export default Hero;

const data = [
	{ img: '/images/img-1.jpg' },
	{ img: '/images/img-2.jpg' },
	{ img: '/images/img-3.jpg' },
	{ img: '/images/img-4.jpg' },
];

{
	/* <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={{ base: "column-reverse", md: "row" }}
        flexWrap={"wrap"}
      >
        <VStack w={{ base: "100%", md: "50%" }} spacing={8}>
          <Text
            pl={3}
            fontFamily={"heading"}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            {t("hero_discriptoin", { ns: "home" })}
          </Text>
          <HStack
            w={"full"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Button w={"100%"} colorScheme={"green"}>
              {t("hero_btn_1", { ns: "home" })}
            </Button>
            <Button w={"100%"} colorScheme={"green"} variant={"outline"}>
              {t("hero_btn_2", { ns: "home" })}
            </Button>
          </HStack>
        </VStack>
        <VStack w={{ base: "100%", md: "50%" }} spacing={8} p={10}>
          <Icon
            w={{ base: 200, md: 280 }}
            h={{ base: 200, md: 280 }}
            opacity={".3"}
            as={FaNodeJs}
          />
        </VStack>
      </Flex> */
}
