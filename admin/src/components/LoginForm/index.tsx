import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import Input from "../Input";
import { login } from "../../apis/employeeApi";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const lgoinSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format!")
    .required("Email address is required."),
  password: Yup.string().required("Password is required."),
});

const initialValues = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const { addUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (
    values: LoginForm,
    { setSubmitting }: FormikHelpers<LoginForm>
  ) => {
    login(values).then((result) => {
      setSubmitting(false);
      if (result.success && result.data) {
        addUser(result.data);
        navigate("/");
      } else {
        alert(result.message);
      }
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={lgoinSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Input label="Email Address" name="email" type="email" />
          <Input label="Password" name="password" type="password" />
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8  w-[120px] h-[50px] rounded-md btn-primary"
          >
            {isSubmitting ? "Loading..." : "Log in"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
