import axios, { AxiosInstance } from "axios";

const baseUrl = process.env.NODE_ENV === "production" ? "https://technical-interview-production.up.railway.app/" : "https://technical-interview-production.up.railway.app/";

const apiClient: AxiosInstance = axios.create({
    baseURL: `${baseUrl}`,
    headers: {
        "content-type": "application/json",
    },
    withCredentials: false
});

export default apiClient;