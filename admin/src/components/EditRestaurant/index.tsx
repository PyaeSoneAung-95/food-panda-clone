import { useState } from "react";
import { useRestaurant } from "../../hooks/useRestaurant";
import Modal from "../Modal";
import RestaurantForm from "../RestaurantForm";
import { updateRestaurant } from "../../apis/restaurantApi";

export default function EditRestaurant({ restaurant }: { restaurant: Restaurant }) {
  const { toggleRefetch } = useRestaurant();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleOpen = () => {
    setShow(true);
  };

  const handleSubmit: Submit<RestaurantForm> = (values, actions) => {
    const formData = new FormData();
    if (values.image instanceof File) {
      formData.append("file", values.image);
    }
    formData.append("data", JSON.stringify(values));
    updateRestaurant(formData).then((result) => {
      actions.setSubmitting(false);
      if (result.success) {
        actions.resetForm();
        toggleRefetch();
        handleClose();
      }
      alert(result.message);
    });
  };

  return (
    <>
      <Modal isOpen={show} onClose={handleClose} containerStyles="w-1/2">
        <div>
          <div className="mb-6">
            <h2 className="title">Edit Restaurant</h2>
          </div>
          <div>
            <RestaurantForm initialValues={restaurant} submitHandler={handleSubmit} />
          </div>
        </div>
      </Modal>
      <button className="btn-primary-outline px-3 py-2" onClick={handleOpen}>
        Edit
      </button>
    </>
  );
}
