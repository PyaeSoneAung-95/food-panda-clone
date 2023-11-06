import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => error.response.data
);

export default axiosInstance;
