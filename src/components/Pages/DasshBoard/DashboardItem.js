import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../hook/useAdmin";
import Loading from "../../share/Loading";

const DashboardItem = ({ children }) => {
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  if (adminLoading) return <Loading></Loading>;
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
          {admin ?(
            <>
              <li>
                <NavLink className="mt-2" to="/dashboard/">
                  Add Item
                </NavLink>
              </li>
              <li>
                <NavLink className="mt-2" to="/dashboard/all-user">
                  All User
                </NavLink>
              </li>
              <li>
                <NavLink className="mt-2" to="/dashboard/manage-order">
                  Manage Order
                </NavLink>
              </li>
            </>
          ):(
            <>
              <li>
                <NavLink className="mt-2" to="/dashboard/">
                  My Order
                </NavLink>
              </li>
              <li>
                <NavLink className="mt-2" to="/dashboard/my-review">
                  Review
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardItem;
