import { UserType } from './user';

export interface allCoursesType {
	title: string;
	courseImg: string;
	videos: string[];
	price: number;
	dagree: string;
	language: string;
	hours: string;
	tech: string;
	techimg: string;
	discription: string;
	slug: string;
	_id: string;
	createdAt: Date;
	updatedAt: Date;
	tutorial: string;
	__v: number;
	students: string[];
}

export interface CommentType {
	UserId: string;
	CourseId: string;
	comment: string;
	rating: number;
}

export interface CommentItem {
	_id: string;
	user: UserType;
	comment: string;
	courseId: string;
	createdAt: string;
	rating: number;
}

export interface FormCourseInittionValueType {
	title: string;
	price: number;
	dagree: string;
	language: string;
	tech: string;
	discription: string;
	tutorial: string;
	_id?: string;
}
