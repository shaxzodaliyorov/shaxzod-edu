import axios from 'axios';
const api = process.env.NEXT_PUBLIC_TELEGRAM_API;
const bot_token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
const user_id = process.env.NEXT_PUBLIC_TELEGRAM_USER_ID;
const Contact_service = {
	async sendMessage(message: string) {
		const response = await axios.post(
			`${api}${bot_token}/sendMessage?chat_id=${user_id}&text=${message}`
		);
		return response;
	},
};

export default Contact_service;
