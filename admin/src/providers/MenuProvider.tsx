import { createContext, useEffect, useState } from "react";
import { getRestaurant } from "../apis/restaurantApi";

export const MenuContext = createContext<MenuContext>({
  toggleRefetch: () => {},
  restaurantDetail: null,
  menus: [],
});

export default function MenuProvider({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const [restaurantDetail, setRestaurantDetail] = useState<Restaurant | null>(null);
  const [menus, setMenus] = useState<Menu[]>([]);
  const [refetch, setRefetch] = useState(false);

  const toggleRefetch = () => setRefetch(!refetch);

  useEffect(() => {
    getRestaurant(id).then((result) => {
      if (result.success && result.data) {
        const { menus, ...rest } = result.data;
        setRestaurantDetail(rest);
        setMenus(menus);
      }
    });
  }, [id, refetch]);

  return (
    <MenuContext.Provider
      value={{
        toggleRefetch,
        restaurantDetail,
        menus,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
