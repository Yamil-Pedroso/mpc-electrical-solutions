import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3010/api";

const axiosInstance = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
