import { Link } from "react-router-dom";
import SignupForm from "../components/SignupForm";

export default function Signup() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className=" bg-white rounded-md w-[400px] px-6 py-8">
        <h2 className="title text-blue-500 mb-6">SIGNUP</h2>
        <SignupForm />
        <p className="mt-8">
          <span>Already have an account?</span>
          <Link to="/login" className="text-blue-500 font-semibold ml-2">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
