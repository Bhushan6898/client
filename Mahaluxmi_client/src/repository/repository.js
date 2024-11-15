import axios from "axios";
export const BaseURL = 'https://m-server-5449.onrender.com';
//export const BaseURL ='http://localhost:3001';

const axiosInstance = axios.create({
    baseURL: BaseURL,
    withCredentials: true
});

// Test the connection with a GET request to a known route (e.g., "/ping" or "/healthcheck")
const checkConnection = async () => {
    try {
        const response = await axiosInstance.get('/ping'); // Replace '/ping' with an actual endpoint on your server
        console.log('Connection successful:', response.data);
    } catch (error) {
        console.error('Connection failed:', error);
    }
};

checkConnection(); // Call this function to test the connection

export default axiosInstance;



//mahaluxmi-hardwear
