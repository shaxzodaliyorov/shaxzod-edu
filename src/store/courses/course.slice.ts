import { createSlice } from '@reduxjs/toolkit';
import { CourseInitialStateType } from './course.interface';

const initialState: CourseInitialStateType = {
	course: null,
	courses: [],
	isLoading: false,
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
		loadingCourse: (state, action) => {
			state.isLoading = action.payload;
		},
	},
});

export const { getCourse, getCourses, loadingCourse } = CourseSlice.actions;

export default CourseSlice.reducer;
