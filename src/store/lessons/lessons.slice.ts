import { createSlice } from '@reduxjs/toolkit';
import { LessonInitialStateType } from './lessons.interface';

const initialState: LessonInitialStateType = {
	lesson: null,
	lessons: [],
	isLoading: false,
};

const LessonSlice = createSlice({
	name: 'lesson',
	initialState,
	reducers: {
		getLessons: (state, action) => {
			state.lessons = action.payload;
		},
		getLesson: (state, action) => {
			state.lesson = action.payload;
		},
		loading: (state, action) => {
			state.isLoading = action.payload;
		},
	},
});

export const { getLessons, loading,getLesson } = LessonSlice.actions;

export default LessonSlice.reducer;
