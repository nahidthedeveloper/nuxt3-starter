import axios from 'axios'

export const httpRequest = axios.create({
    baseURL: process.env.SERVER_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})