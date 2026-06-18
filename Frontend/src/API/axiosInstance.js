import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // for cookies
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // No need to attach token manually
    return config;
  },
  (error) => Promise.reject(error)
);
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("Session expired, redirecting to login...");

      // redirect to login page
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);
export default axiosInstance;