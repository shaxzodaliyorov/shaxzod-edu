import { FormControl, FormErrorMessage, FormLabel, InputGroup, Textarea } from '@chakra-ui/react';
import { FieldHookConfig, useField } from 'formik';
import { TextareaFeildProps } from './textarea-feild.props';

const TextareaFeild = ({
	label,
	type,
	children,
	placeholder,
	...props
}: TextareaFeildProps & FieldHookConfig<string>) => {
	const [field, meta] = useField(props);
	return (
		<FormControl my={5} isInvalid={!!meta.touched && !!meta.error}>
			<FormLabel>{label}</FormLabel>
			<InputGroup pos='relative'>
				<Textarea focusBorderColor='green.400' placeholder={placeholder} h={16} {...field} />
				{children}
			</InputGroup>
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

export default TextareaFeild;
