import { useContext } from "react";
import { RestaurantContext } from "../providers/RestaurantProvider";

export const useRestaurant = () => useContext(RestaurantContext);
