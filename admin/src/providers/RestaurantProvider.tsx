import { createContext, useEffect, useState } from "react";
import { getAllRestaurants } from "../apis/restaurantApi";

export const RestaurantContext = createContext<RestaurantContext>({
  toggleRefetch: () => {},
  restaurants: [],
});

export default function RestaurantProvider({ children }: { children: React.ReactNode }) {
  const [refetch, setRefetch] = useState(false);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    getAllRestaurants().then((result) => {
      if (result.success && result.data) {
        setRestaurants(result.data);
      }
    });
  }, [refetch]);

  const toggleRefetch = () => setRefetch(!refetch);

  return (
    <RestaurantContext.Provider value={{ toggleRefetch, restaurants }}>
      {children}
    </RestaurantContext.Provider>
  );
}
