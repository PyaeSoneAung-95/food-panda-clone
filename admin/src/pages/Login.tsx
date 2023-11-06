import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className=" bg-white rounded-md w-[400px] px-6 py-8">
        <h2 className="title text-blue-500">LOGIN</h2>
        <LoginForm />
        <p className="mt-8">
          <span>Don't have an account?</span>
          <Link to="/signup" className="text-blue-500 font-semibold ml-2">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
