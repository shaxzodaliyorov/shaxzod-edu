import axios from 'axios';

export const API = process.env.NEXT_PUBLIC_SERVER_DOMAIN;

export const AXIOS_API_URL = axios.create({ baseURL: API });
