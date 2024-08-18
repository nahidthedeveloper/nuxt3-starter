import axios, {type AxiosInstance} from 'axios';

export const httpRequest: AxiosInstance = axios.create({
    baseURL: process.env.SERVER_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
