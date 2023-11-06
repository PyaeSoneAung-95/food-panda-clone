import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <nav className="fixed  top-[65px] bottom-0 left-0 w-[200px] bg-white shadow-sm">
      <ul className="py-4  sidebar">
        <li className={pathname === "/" ? "active" : ""}>
          <Link to="/">Dashboard</Link>
        </li>
        <li className={pathname === "/" ? "active" : ""}>
          <Link to="/restaurant">Restaurant</Link>
        </li>
        <li className={pathname === "/" ? "active" : ""}>
          <Link to="/order">Order</Link>
        </li>
      </ul>
    </nav>
  );
}
