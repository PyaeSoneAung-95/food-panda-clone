import { useState } from "react";
import Modal from "../Modal";
import { useRestaurant } from "../../hooks/useRestaurant";
import RestaurantForm from "../RestaurantForm";
import { useAuth } from "../../hooks/useAuth";
import { createRestaurant } from "../../apis/restaurantApi";

const initialValues = {
  image: "",
  name: "",
  category: "",
  location: "",
};

export default function AddRestaurant() {
  const [show, setShow] = useState(false);
  const { user } = useAuth();
  const { toggleRefetch } = useRestaurant();

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const handleSubmit: Submit<RestaurantForm> = (values, actions) => {
    const { image, ...rest } = values;
    const formData = new FormData();
    formData.append("file", image);
    formData.append("data", JSON.stringify({ ...rest, author_id: user?._id }));
    createRestaurant(formData).then((result) => {
      actions.setSubmitting(false);
      if (result.success) {
        actions.resetForm();
        toggleRefetch();
      }
      alert(result.message);
    });
  };

  return (
    <div className="p-6 flex justify-between items-center">
      <h2 className="title">Restaurant Lists</h2>
      <Modal isOpen={show} onClose={handleClose} containerStyles="w-1/2">
        <div>
          <div className="mb-6">
            <h2 className="title">Add Restaurant</h2>
          </div>
          <div>
            <RestaurantForm initialValues={initialValues} submitHandler={handleSubmit} />
          </div>
        </div>
      </Modal>
      <button className="btn-primary p-3" onClick={handleOpen}>
        Add Restaurant
      </button>
    </div>
  );
}
