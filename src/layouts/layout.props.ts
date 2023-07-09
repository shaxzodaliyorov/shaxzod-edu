import { ReactNode } from 'react';
import { allCoursesType } from '../interfaces/courses';

export interface layoutProps {
	children: ReactNode;
}

export interface AppProviderProps {
	course: allCoursesType;
	courses: allCoursesType[];
}
