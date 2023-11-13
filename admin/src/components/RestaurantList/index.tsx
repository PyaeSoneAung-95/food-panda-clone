import { useRestaurant } from "../../hooks/useRestaurant";
import RestaurantTable from "../RestaurantTable";

const RestaurantList = () => {
  const { restaurants } = useRestaurant();

  return (
    <div className="px-6 pt-4 pb-6">
      {restaurants.length > 0 ? (
        <div>
          <RestaurantTable data={restaurants} />
        </div>
      ) : (
        <div>
          <p>No restaurant found!</p>
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
