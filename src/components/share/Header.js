import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import auth from "../../firebase.init";
import { useAuthState} from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';


const Header = ({ children }) => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  const menuItems = (
    <>
      <li>
        <NavLink className=" rounded-lg" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className=" rounded-lg">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" className=" rounded-lg">
          Blogs
        </NavLink>
      </li>
      {user ? (
        <div className="dropdown dropdown-end">
        <label tabindex="0" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" alt=""/>
          </div>
        </label>
        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 flex ">
          <li>
            <NavLink to='/profile' className="mb-2"> Profile</NavLink>
          </li>
          <li><NavLink className="mb-2" to='/settings'>Settings</NavLink></li>
          <li><NavLink className="mb-2" to='/login' onClick={()=>logout()}>Logout</NavLink></li>
        </ul>
      </div>
      ) : (
        <li>
          <NavLink to="/login" className=" rounded-lg">
            Login
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar  fixed top-0 z-50 lg:px-20 bg-slate-50 shadow-lg">
          <Link
            to="/"
            className="flex-1 text-xl lg:text-2xl font-bold uppercase text-primary"
          >
            {" "}
            <FaHome className=" text-success" />{" "}
            <span className="px-2">Cycle</span>{" "}
          </Link>
          <div className="flex-none lg:hidden text-primary">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-x-2">{menuItems}</ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Header;
