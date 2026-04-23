import axios from 'axios';

export const api = axios.create({
    baseURL: "http://localhost:3000",
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Erro na API:", error.response?.data || error.message);
        return Promise.reject(error);
    }
)