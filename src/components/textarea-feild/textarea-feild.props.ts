import { TextareaProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export interface TextareaFeildProps extends TextareaProps {
	label: string;
	placeholder?: string;
	children?: ReactNode;
}
