import React from "react";
import  { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from "./Screenshot_2024-09-12_183229-removebg-preview.png"

import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();

  const handleLogout = async () => {
    await axios
      .get("http://localhost:8000/api/v1/user/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
    navigateTo('/login')
  };

  
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/"
            className="flex items-center -space-x-5 rtl:space-x-reverse"
          >
            {/* <img 
              src={logo}
              className="h-14 w-full"
              alt="Flowbite Logo"
            /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              GigGenius
            </span>
          </Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only text-red-700 text-3xl">Open user menu</span>
              {isAuthenticated ?
              <button onClick={() => handleLogout()} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 space-x-10">Logout</button>
              :<button onClick={() => navigateTo('/login')} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
              }
            </button>

            
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={"block py-2 px-3  rounded md:bg-transparent  md:p-0 "}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={"block py-2 px-3  rounded md:bg-transparent  md:p-0 "}
                >
                  About
                </NavLink>
              </li>
              <NavLink
                  to="/services"
                  className={"block py-2 px-3  rounded md:bg-transparent  md:p-0 "}
                >
                  Services
                </NavLink>
              <li>
                <Link
                  to="/pricing"
                  className={"block py-2 px-3  rounded md:bg-transparent  md:p-0 "}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={"block py-2 px-3  rounded md:bg-transparent  md:p-0 "}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className={"block py-2 px-3  rounded md:bg-transparent  md:p-0 "}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
