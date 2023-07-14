import { LessonType } from "../../interfaces/lesson";

export interface LessonInitialStateType {
	lesson: LessonType | null;
	lessons: LessonType[];
	isLoading: boolean;
}
