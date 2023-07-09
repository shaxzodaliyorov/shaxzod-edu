import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup } from '@chakra-ui/react';
import { FieldHookConfig, useField } from 'formik';
import { TextFeildProps } from './TextFeild.props';
const TextFeild = ({
	label,
	placeholder,
	type,
	children,
	textarea,
	ISDIsabled,
	...props
}: TextFeildProps & FieldHookConfig<string>) => {
	const [field, meta] = useField(props);

	return (
		<FormControl my={5} isInvalid={!!meta.touched && !!meta.error}>
			<FormLabel>{label}</FormLabel>
			<InputGroup pos='relative'>
				<Input
					focusBorderColor='green.400'
					placeholder={placeholder}
					h={12}
					isDisabled={ISDIsabled}
					type={type}
					{...field}
				/>
				{children}
			</InputGroup>
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

export default TextFeild;
