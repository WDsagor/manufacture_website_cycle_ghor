import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Header = ({ children }) => {
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
      <li>
        <NavLink to="/login" className=" rounded-lg">
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar  fixed top-0 z-50 lg:px-20 bg-slate-50">
          <Link
            to="/"
            className="flex-1 text-xl lg:text-2xl font-bold uppercase text-primary"
          > <FaHome className=" text-success"/> <span className="px-2">Cycle</span> </Link>
          <div className="flex-none lg:hidden text-primary">
            <label for="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-x-2">{menuItems}</ul>
          </div>
        </div>
        { children }
      </div>
      <div className="drawer-side">
        <label for="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Header;
