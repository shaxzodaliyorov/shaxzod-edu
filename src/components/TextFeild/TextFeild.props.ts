import { InputProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export interface TextFeildProps extends InputProps {
	label: string;
	placeholder?: string;
	children?: ReactNode;
	type?: string;
	textarea?: boolean;
	ISDIsabled?: boolean;
}
