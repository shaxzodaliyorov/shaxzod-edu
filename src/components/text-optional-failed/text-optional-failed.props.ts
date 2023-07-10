import { InputProps } from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';

export interface TextOptionalFailedProps extends InputProps {
	label: string;
	placeholder?: string;
	children?: ReactNode[] | ReactElement;
	ISDIsabled?: boolean;
	intgredients: intgredientsType[];
}

export interface intgredientsType {
	value: string;
	label: string;
}
