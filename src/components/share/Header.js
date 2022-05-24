import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import auth from "../../firebase.init";
import { useAuthState} from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';


const Header = ({ children }) => {
  const [ show , setShow] = useState(false);
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();
  const logout = () => {
    signOut(auth);
  };
  const menuItems = (
    <>
      <li>
        <NavLink className=" rounded-lg mr-2" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className=" rounded-lg mr-2">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" className=" rounded-lg mr-2">
          Blogs
        </NavLink>
      </li>
      {user ? (
        <div className="dropdown dropdown-end">
        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
          <div onClick={()=>setShow(!show)} className="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" alt=""/>
          </div>
        </label>
        <ul tabIndex="0" className={show? "menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52 flex" : "hidden" }>
          <li>
            <NavLink to='/profile' className="m-2">My Profile</NavLink>
          </li>
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
<div className="navbar bg-base-100 fixed top-0 z-50 shadow-lg">
            <div className="navbar-start">
            {pathname.includes("dashboard") && (
            <label
              tabIndex='0'
              for='my-drawer-2'
              class='btn btn-ghost lg:hidden '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </label>
          )}
                <Link
            to="/"
            className=" flex text-xl lg:text-2xl font-bold uppercase text-primary justify-center items-center"
          >
            <FaHome className=" text-success" />{" "}
            <span className="px-2">Cycle</span>{" "}
          </Link>
            </div>
            <div className="navbar-end hidden lg:flex ">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="dropdown navbar-end dropdown-strat flex lg:hidden lg:float-none">
                    <label tabIndex="3" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="3" className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 relative top-12">
                        {menuItems}
                    </ul>
                </div>
            
        </div>





    // <div className="drawer drawer-end">
    //   <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    //   <div className="drawer-content flex flex-col">
    //     <div className="w-full navbar  fixed top-0 z-50 lg:px-20 bg-slate-50 shadow-lg">
    //     {pathname.includes("dashboard") && (
    //         <label
    //           tabIndex='0'
    //           for='my-drawer-2'
    //           class='btn btn-ghost lg:hidden '
    //         >
    //           <svg
    //             xmlns='http://www.w3.org/2000/svg'
    //             class='h-5 w-5'
    //             fill='none'
    //             viewBox='0 0 24 24'
    //             stroke='currentColor'
    //           >
    //             <path
    //               stroke-linecap='round'
    //               stroke-linejoin='round'
    //               stroke-width='2'
    //               d='M4 6h16M4 12h16M4 18h7'
    //             />
    //           </svg>
    //         </label>
    //       )}
    //       <Link
    //         to="/"
    //         className="flex-1 text-xl lg:text-2xl font-bold uppercase text-primary"
    //       >
    //         {" "}
    //         <FaHome className=" text-success" />{" "}
    //         <span className="px-2">Cycle</span>{" "}
    //       </Link>
    //       <div className="flex-none lg:hidden text-primary">
    //         <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             className="inline-block w-6 h-6 stroke-current"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h16M4 18h16"
    //             ></path>
    //           </svg>
    //         </label>
    //       </div>

    //       <div className="flex-none hidden lg:block">
    //         <ul className="menu menu-horizontal gap-x-2">{menuItems}</ul>
    //       </div>
    //     </div>
    //     {children}
    //   </div>
    //   <div className="drawer-side">
    //     <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
    //     <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
    //       {menuItems}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Header;
