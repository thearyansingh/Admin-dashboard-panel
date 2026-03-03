import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/user",
  withCredentials: true
});

API.interceptors.request.use(

  (config) => {
  console.log("Request sent with cookies");

    return config;
  },

  (error) => Promise.reject(error)
);

export default API;