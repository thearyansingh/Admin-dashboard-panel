import axiosInstance from "../API/axiosInstance";

export const login = (data) => {
  return axiosInstance.post("/auth/login", data);
};

export const getProfile = () => {
  return axiosInstance.get("/user/profile");
};