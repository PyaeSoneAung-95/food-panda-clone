import DeleteRestaurant from "../DeleteRestaurant";
import EditRestaurant from "../EditRestaurant";

export default function RestaurantTable({ data }: { data: Restaurant[] }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.location}</td>
            <td>{item.category}</td>
            <td>
              <div className="flex gap-3">
                <EditRestaurant restaurant={item} />
                <DeleteRestaurant id={item._id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
