import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../../Pages/Customers";
import AddUsers from "../../Pages/AddUsers"
import Dashboard from "../../Pages/Dashbaord";
import Inventory from "../../Pages/Inventory";
import Orders from "../../Pages/Orders";
import ManageUsers from "../../Pages/ManageUsers";
import Devise from "../../Pages/Devises";
import ManageDevise from "../../Pages/Devises/form";
import Login from "../../Pages/Login";

function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Dashboard />}></Route> */}
      <Route path="/admin" element={<Login />}></Route>
      <Route path="/admin/addUser" element={<AddUsers />}></Route>
      <Route path="/admin/manageUsers" element={<ManageUsers />}></Route>
      <Route path="/admin/devise" element={<Devise/>}></Route>
      <Route path="/admin/manageDevise" element={<ManageDevise />} ></Route>
    </Routes>
  );
}
export default AppRoutes;
