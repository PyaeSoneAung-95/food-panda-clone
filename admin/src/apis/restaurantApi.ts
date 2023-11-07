import axiosInstance from "./axiosInstance";

export const getAllRestaurants = async () => {
  const result: ApiResponse<Restaurant[]> = await axiosInstance.get("/restaurant");
  return result;
};

export const createRestaurant = async (data: FormData) => {
  const result: ApiResponse<null> = await axiosInstance.post("/restaurant", data);
  return result;
};

export const deleteRestaurant = async (id: string) => {
  const result: ApiResponse<null> = await axiosInstance.delete(`/restaurant/${id}`);
  return result;
};

export const updateRestaurant = async (data: FormData) => {
  const result: ApiResponse<null> = await axiosInstance.put("/restaurant/", data);
  return result;
};
