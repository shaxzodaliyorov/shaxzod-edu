import {
   Box,
   chakra,
   Flex,
   SimpleGrid,
   Stat,
   StatLabel,
   StatNumber,
   useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { StatsCardProps } from './status.props';

const Status = () => {
   const { t } = useTranslation()
   return <>
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
         <chakra.h1
            textAlign={'center'}
            fontSize={'4xl'}
            py={10}
            fontWeight={'bold'}>
            {t("status_title", { ns: "home" })}
         </chakra.h1>
         <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
            <StatsCard
               title={t("status_students", { ns: "home" })}
               stat={'5,000 +'}
               icon={<BsPerson size={'3em'} />}
            />
            <StatsCard
               title={t("status_courses", { ns: "home" })}
               stat={'10'}
               icon={<FiServer size={'3em'} />}
            />
            <StatsCard
               title={t("status_languages", { ns: "home" })}
               stat={'7'}
               icon={<GoLocation size={'3em'} />}
            />
         </SimpleGrid>
      </Box>
   </>
}

export default Status;

export function StatsCard(props: StatsCardProps) {
   const { title, stat, icon } = props;
   return (
      <Stat
         px={{ base: 2, md: 4 }}
         py={'5'}
         shadow={'xl'}
         border={'1px solid'}
         borderColor={useColorModeValue('gray.800', 'gray.500')}
         rounded={'lg'}>
         <Flex justifyContent={'space-between'}>
            <Box pl={{ base: 2, md: 4 }}>
               <StatLabel fontWeight={'medium'} isTruncated>
                  {title}
               </StatLabel>
               <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                  {stat}
               </StatNumber>
            </Box>
            <Box
               my={'auto'}
               color={useColorModeValue('gray.800', 'gray.200')}
               alignContent={'center'}>
               {icon}
            </Box>
         </Flex>
      </Stat>
   );
}