import { FormControl, FormErrorMessage, FormLabel, InputGroup, Select } from '@chakra-ui/react';
import { FieldHookConfig, useField } from 'formik';
import { intgredientsType, TextOptionalFailedProps } from './text-optional-failed.props';

const TextOptionalFailed = ({
	label,
	placeholder,
	ISDIsabled,
	children,
	intgredients,
	...props
}: TextOptionalFailedProps & FieldHookConfig<string>) => {
	const [field, meta] = useField(props);
	return (
		<>
			<FormControl my={5} isInvalid={!!meta.touched && !!meta.error}>
				<FormLabel>{label}</FormLabel>
				<InputGroup pos='relative'>
					<Select placeholder={placeholder} h={12} {...field}>
						{intgredients.map((item: intgredientsType, index: number) => {
							return (
								<option key={index} value={String(item.value)}>
									{item.label}
								</option>
							);
						})}
					</Select>
				</InputGroup>
				<FormErrorMessage>{meta.error}</FormErrorMessage>
			</FormControl>
		</>
	);
};

export default TextOptionalFailed;
