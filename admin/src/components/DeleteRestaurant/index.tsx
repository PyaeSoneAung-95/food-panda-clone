import { deleteRestaurant } from "../../apis/restaurantApi";
import { useRestaurant } from "../../hooks/useRestaurant";

export default function DeleteRestaurant({ id }: { id: string }) {
  const { toggleRefetch } = useRestaurant();

  const handleDelete = () => {
    deleteRestaurant(id).then((result) => {
      if (result.success) {
        toggleRefetch();
      }
      alert(result.message);
    });
  };
  return (
    <button className="btn-error-outline px-3 py-2" onClick={handleDelete}>
      Delete
    </button>
  );
}
