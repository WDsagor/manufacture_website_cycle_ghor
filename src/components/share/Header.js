import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import auth from "../../firebase.init";
import { useAuthState} from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';


const Header = ({ children }) => {
  const [ show , setShow] = useState(false);
  const [ manushow, setMenuShow ] = useState(false);
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();
  const index = 0;
  
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
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
          <div onClick={()=>setShow(!show)} className="w-10 rounded-full bg-black">
          <div className=" text-center text-3xl text-white uppercase">{user?.displayName?.charAt(index)}</div>
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
              htmlFor='my-drawer-2'
              className='btn btn-ghost lg:hidden '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
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
                    <label tabIndex="3" onClick={() => setMenuShow(!manushow)} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="3" className={manushow? "menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 relative top-12" : "hidden" }>
                        {menuItems}
                    </ul>
                </div>
            
        </div>
  );
};

export default Header;
