import axios from "axios";

export const BaseURL ='http://localhost:3001';

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001",
    withCredentials: true
})

export default axiosInstance