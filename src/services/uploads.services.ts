import { AXIOS_API_URL } from '../API';

const Upload = {
	async FileUpload(formData: FormData) {
		const { data } = await AXIOS_API_URL.post('/upload/image', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		return data;
	},
};

export default Upload;
