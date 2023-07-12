import { lessonFormType } from '../../interfaces/admin';

export interface adminEditLessonModalProps {
	isOpen: boolean;
	onClose: () => void;
	initialValues: lessonFormType;
	discription: string;
	setDiscription: (state: string) => void;
}
