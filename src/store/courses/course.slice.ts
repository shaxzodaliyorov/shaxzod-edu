import { createSlice } from '@reduxjs/toolkit';
import { CourseInitialStateType } from './course.interface';

const initialState: CourseInitialStateType = {
	course: null,
	courses: [],
};

const CourseSlice = createSlice({
	name: 'course',
	initialState,
	reducers: {
		getCourses: (state, action) => {
			state.courses = action.payload;
		},
		getCourse: (state, action) => {
			state.course = action.payload;
		},
	},
});

export const { getCourse, getCourses } = CourseSlice.actions;

export default CourseSlice.reducer;
