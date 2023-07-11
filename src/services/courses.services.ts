import { AXIOS_API_URL } from '../API';
import { CommentType } from '../interfaces/courses';

export const GET_ALL_COURSES = {
	async GET() {
		const { data } = await AXIOS_API_URL.get('/courses/get');
		return data;
	},
	async GET_ONE(slug: string) {
		const { data } = await AXIOS_API_URL.get('/courses/get/' + slug);
		return data;
	},
	async NewStudents(UserId: string, CourseId: string) {
		const { data } = await AXIOS_API_URL.post('/courses/new-student', { UserId, CourseId });
		return data;
	},
	async CreateComments(CommentData: CommentType) {
		const { data } = await AXIOS_API_URL.post<'success'>('/comment/create', CommentData);
		return data;
	},
	async Comments(limit: number, CourseId: string) {
		const { data } = await AXIOS_API_URL.get(`/comment/comments/${CourseId}?limit=${limit}`);
		return data;
	},
};

export default GET_ALL_COURSES;
