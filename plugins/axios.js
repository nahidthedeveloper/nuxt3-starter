import axios from "axios";

export default defineNuxtPlugin(nuxtApp => {
    const httpRequest = axios.create({
        baseURL: process.env.SERVER_URL,
        timeout: 5000,
        headers: {
            "Content-Type": "application/json"
        }
    })
    return {
        provide: {
            httpRequest
        }
    }
})