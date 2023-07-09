import { AXIOS_API_URL } from '../API';

const Lesson = {
	async getLessons(courseId: string) {
		const { data } = await AXIOS_API_URL.get(`/videos/get/${courseId}`);
		return data;
	},
	async getLesson(videoId: string) {
		const { data } = await AXIOS_API_URL.get(`/videos/one/${videoId}`);
		return data;
	},
};

export default Lesson;
