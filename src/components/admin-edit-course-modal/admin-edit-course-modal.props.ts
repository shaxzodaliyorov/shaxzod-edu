import { FormCourseInittionValueType } from '../../interfaces/courses';

export interface AdminEditCourseModalProps {
	isOpen: boolean;
	onClose: () => void;
	values: FormCourseInittionValueType;
}
