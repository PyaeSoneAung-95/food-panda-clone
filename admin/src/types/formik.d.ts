import { FormikHelpers } from "formik";

declare global {
  type Submit<T> = (values: T, actions: FormikHelpers<T>) => void;

  type FormikFormProps<T> = {
    submitHandler: Submit<T>;
    initialValues: T;
  };
}
