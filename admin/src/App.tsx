import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Protected from "./pages/Protected";
import Dashboard from "./pages/Dashboard";
import AuthProvider from "./providers/AuthProvider";
import Restaurant from "./pages/Restaurant";
import Order from "./pages/Order";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Protected />}>
            <Route index element={<Dashboard />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/order" element={<Order />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
