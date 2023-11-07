import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Protected() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="mt-[65px] ml-[200px]">
        <Outlet />
      </div>
    </>
  );
}
