import { AXIOS_API_URL } from '../API';
import { createCourseType } from '../interfaces/admin';
import { FormCourseInittionValueType } from '../interfaces/courses';
import { AdminUserUpdateInitiolState, UserType } from '../interfaces/user';

const Admin = {
	async all_users(userId: string, limit: number) {
		const { data } = await AXIOS_API_URL.get<UserType[]>(`/user/all/${userId}/${limit}`);
		return data;
	},
	async Delete_user(userId: string, currentId: string) {
		const { data } = await AXIOS_API_URL.delete(`/user/delete/${userId}/${currentId}`);
		return data;
	},
	async Edit_user(userId: string, userdata: AdminUserUpdateInitiolState) {
		const { data } = await AXIOS_API_URL.put(`/user/update/${userId}`, userdata);
		return data;
	},
	async Create_Course(userId: string, courseData: createCourseType) {
		const { data } = await AXIOS_API_URL.post(`/courses/post/${userId}`, courseData);
		return data;
	},
	async Delete_Course(userId: string, courseId: string) {
		const { data } = await AXIOS_API_URL.delete(`/courses/delete/${courseId}/${userId}`);
		return data;
	},
	async Edit_Course(courseId: string, formdata: FormCourseInittionValueType) {
		const { data } = await AXIOS_API_URL.put(`/courses/update/${courseId}`, formdata);
		return data;
	},
};

export default Admin;
