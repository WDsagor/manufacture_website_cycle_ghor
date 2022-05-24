import React from "react";
import { NavLink } from "react-router-dom";
import useAdmin from "../../hook/useAdmin";

const DashboardItem = ({children}) => {
  const [admin, setAdmin] = useAdmin()
  return (
    <div class="drawer drawer-mobile mt-16">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div class="drawer-side z-10 ">
        <label htmlFor="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-52 bg-success text-base-content fixed h-screen uppercase">
          <li>
            <NavLink className="mt-2" to="myOrder">My Order</NavLink>
          </li>
          {
            admin && (
            <>
            <li>
            <NavLink className="mt-2" to="/dashboard/add-item">Add Item</NavLink>
          </li>
          <li>
            <NavLink className="mt-2" to="/dashboard/all-user">All User</NavLink>
          </li>
          <li>
            <NavLink className="mt-2" to="/dashboard/manage-order">Manage Order</NavLink>
          </li>
            </>
            )
          }
        </ul>
      </div>
    </div>
  );
};

export default DashboardItem;
