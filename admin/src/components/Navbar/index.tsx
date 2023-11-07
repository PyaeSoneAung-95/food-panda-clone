import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Navbar() {
  const { user, removeUser } = useAuth();

  return (
    <div className="fixed top-0 left-0  right-0 z-40 bg-white  shadow-sm px-4">
      <div className="flex items-center justify-between h-[65px]">
        <Link to="/" className="font-semibold text-2xl">
          FOOD DELIVERY
        </Link>
        <div className="flex items-center">
          <p>{user?.name}</p>
          <button
            onClick={removeUser}
            className="text-red-400 font-semibold ml-2 border rounded-md p-2 border-red-400"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
