import adminSlice from './admin/admin.slice';
import courseSlice from './courses/course.slice';
import lessonsSlice from './lessons/lessons.slice'; 
import authSlice from './user/user.slice';

export const reducer = {
	auth: authSlice,
	course: courseSlice,
	lesson: lessonsSlice,
	admin: adminSlice,
};
