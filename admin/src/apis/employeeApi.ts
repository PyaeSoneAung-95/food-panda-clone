import axiosInstance from "./axiosInstance";

export const login = async (data: LoginForm) => {
  const result: ApiResponse<Employee> = await axiosInstance.post("/employee/login", data);
  return result;
};

export const signup = async (data: SignupForm) => {
  const result: ApiResponse<null> = await axiosInstance.post("/employee/signup", data);
  return result;
};
