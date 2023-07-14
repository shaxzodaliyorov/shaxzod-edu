import { Box, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/redux';

const Loader = () => {

	return (
		<Box
			pos={'absolute'}
			zIndex={999}
			bg={'#2d3748'}
			w={'full'}
			h={'100vh'}
			left={0}
			top={0}
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
		>
			<Spinner thickness='6px' size='xl' />
		</Box>
	);
};

export default Loader;
