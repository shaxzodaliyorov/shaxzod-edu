import { AXIOS_API_URL } from '../API';
import { UpdateUserType, UserType } from '../interfaces/user';

const USER = {
	async GetMyUser(token: string) {
		const { data } = await AXIOS_API_URL.get<UserType>('/user/one', {
			headers: { authorization: `${token}` },
		});
		return data;
	},
	async UpdatePassword(email: string, password: string) {
		const { data } = await AXIOS_API_URL.post<'success'>('/user/edit-password', {
			email,
			password,
		});
		return data;
	},
	async MyCourses(userId: string) {
		const { data } = await AXIOS_API_URL.get(`/user/my-course/${userId}`);
		return data;
	},
	async UpdateUser(userId: string, UserData: UpdateUserType) {
		const { data } = await AXIOS_API_URL.put(`/user/update/${userId}`, UserData);
		return data;
	},
};

export default USER;
