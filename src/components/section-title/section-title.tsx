import { Box, Heading, Text } from '@chakra-ui/react';
import { SectionTitleProps } from './section-title.props';

const SectionTitle = ({ title, subtitle, ...props }: SectionTitleProps) => {
	return (
		<Box {...props} my={5}>
			<Heading color={'green.500'}>{title}</Heading>
			<Text fontSize={'lg'} color={'gray.400'}>
				{subtitle}
			</Text>
		</Box>
	);
};

export default SectionTitle;
