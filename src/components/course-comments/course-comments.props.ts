import { CommentItem } from '../../interfaces/courses';

export interface ModalPropsType {
	isOpen: boolean;
	onClose: () => void;
	getComments: () => Promise<void>;
}

export interface CourseCommentItemProps {
	comments: CommentItem[];
	getComments: () => Promise<void>;
	setReadmore: (parap: number) => void;
	readmore: number;
	isloading: boolean;
	setViewcomments: (state: boolean) => void
}
