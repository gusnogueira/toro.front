import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:44329/api/v1/"
});

export default axiosInstance;
