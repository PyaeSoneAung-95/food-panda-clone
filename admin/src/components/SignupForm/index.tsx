import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import Input from "../Input";
import { signup } from "../../apis/employeeApi";

const signupSchema = Yup.object().shape({
  name: Yup.string().required("User name is required!"),
  email: Yup.string()
    .email("Invalid email format!")
    .required("Email address is required."),
  password: Yup.string().required("Password is required."),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export default function SignupForm() {
  const handleSubmit = (values: SignupForm, actions: FormikHelpers<SignupForm>) => {
    signup(values).then((result) => {
      actions.setSubmitting(false);
      if (result.success) {
        actions.resetForm();
      }
      alert(result.message);
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Input label="Username" name="name" type="text" />
          <Input label="Email Address" name="email" type="email" />
          <Input label="Password" name="password" type="password" />
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8  w-[120px] h-[50px] rounded-md btn-primary"
          >
            {isSubmitting ? "Loading..." : "Sign up"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
