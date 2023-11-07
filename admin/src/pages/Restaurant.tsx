import AddRestaurant from "../components/AddRestaurant";
import RestaurantList from "../components/RestaurantList";
import RestaurantProvider from "../providers/RestaurantProvider";

export default function Restaurant() {
  return (
    <RestaurantProvider>
      <div className="flex justify-center p-6">
        <div className="bg-white w-full">
          <AddRestaurant />
          <RestaurantList />
        </div>
      </div>
    </RestaurantProvider>
  );
}
