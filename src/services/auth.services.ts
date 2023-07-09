import { AXIOS_API_URL } from '../API';
import { setItem } from '../hooks/storage';
import { EmailAndPassword, RegisterTypes } from '../interfaces/user';

const AUTH = {
	async CreateUser(UserData: RegisterTypes) {
		const { data } = await AXIOS_API_URL.post('/auth/register', UserData);
		setItem('token', data?.token);
		return data;
	},
	async LoginUser(UserData: EmailAndPassword) {
		const { data } = await AXIOS_API_URL.post('/auth/login', UserData);
		setItem('token', data?.token);
		return data;
	},
	async CheckUser(email: string) {
		const { data } = await AXIOS_API_URL.post<'user' | 'no-user'>('/auth/check-user', { email });
		return data;
	},
	async SendOtpVerification(email: string, isUser: boolean) {
		const { data } = await AXIOS_API_URL.post<'success'>('/auth/send-otp', { email, isUser });
		return data;
	},
	async VerifyOtpVerification(email: string, otpverification: string) {
		const { data } = await AXIOS_API_URL.post<"success">('/auth/verify-otp', { email, otpverification });
		return data;
	},
};
export default AUTH;
