import { Form, Formik, ErrorMessage } from "formik";
import ImageUpload from "../ImageUpload";
import Input from "../Input";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  image: Yup.mixed().required("Image is required"),
  name: Yup.string().required("Name is required"),
  category: Yup.string().required("Category is required"),
  location: Yup.string().required("Location is required"),
});
export default function RestaurantForm({
  submitHandler,
  initialValues,
}: FormikFormProps<RestaurantForm>) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      {({ isSubmitting }) => (
        <Form className="grid">
          <div>
            <div className="mb-4">
              <ImageUpload name="image" />
              <ErrorMessage name="image" component="div" className="input-error" />
            </div>
            <Input name="name" label="Name" type="text" />
            <Input name="category" label="Category" type="text" />
            <Input name="location" label="Location" type="text" />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="btn-primary w-[120px] py-4"
              disabled={isSubmitting}
              style={{ width: "150px" }}
            >
              {isSubmitting ? "Uploading..." : "Upload"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
