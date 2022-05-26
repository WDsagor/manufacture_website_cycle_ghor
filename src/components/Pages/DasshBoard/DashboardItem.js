import React from "react";
import { NavLink } from "react-router-dom";
import useAdmin from "../../hook/useAdmin";

const DashboardItem = ({children}) => {
  const [admin] = useAdmin()
  return (
    <div className="drawer drawer-mobile mt-16">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col lg:ml-48 p-10">
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side z-10 ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-52 bg-success text-base-content fixed h-screen uppercase">
          <li>
            <NavLink className="mt-2" to="/dashboard/">My Order</NavLink>
          </li>
          <li>
            <NavLink className="mt-2" to="/dashboard/my-review">Review</NavLink>
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
