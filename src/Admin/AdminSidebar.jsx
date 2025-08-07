import React from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUser,
  FaBox,
  FaBuilding,
  FaPowerOff,
  FaCartPlus,
  FaShoppingBag,
} from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

const AdminSidebar = () => {
  return (
    <div className="h-screen px-2 py-4 fixed w-16 md:w-64 flex flex-col items-center md:items-start border-r border-gray-800 dark:bg-[rgba(30,30,30,255)] dark:text-white">
      <h1 className="text-2xl font-bold hidden md:block mt-4 text-center text-gray-100 italic">
        Hello Admin
      </h1>
      <ul className="flex flex-col mt-5 text-xl w-full space-y-5">
        <Link to="/homepage">
          <li
            title="Dashboard"
            className="flex flex-col md:flex-row items-center gap-2 text-lg justify-center md:justify-start py-3 px-2 hover:bg-[rgba(60,60,60,1)] hover:text-white rounded cursor-pointer"
          >
            <FaTachometerAlt className="text-xl text-gray-100" />
            <span className="hidden md:inline md:ml-2">Dashboard</span>
          </li>
        </Link>
        <Link to="/taxpayer">
          <li
            title="Taxpayer"
            className="flex flex-col md:flex-row items-center gap-2 text-lg justify-center md:justify-start py-3 px-2 hover:bg-[rgba(60,60,60,1)] hover:text-white rounded cursor-pointer"
          >
            <FaCartPlus className="text-xl text-gray-100" />
            <span className="hidden md:inline md:ml-2">Orders</span>
          </li>
        </Link>
        <Link to="/building">
          <li
            title="Building"
            className="flex flex-col md:flex-row items-center gap-2 text-lg justify-center md:justify-start py-3 px-2 hover:bg-[rgba(60,60,60,1)] hover:text-white rounded cursor-pointer"
          >
            <FaShoppingBag className="text-xl text-gray-100" />
            <span className="hidden md:inline md:ml-2">Products</span>
          </li>
        </Link>
        <Link to="/bill">
          <li
            title="Bill payment"
            className="flex flex-col md:flex-row items-center gap-2 text-lg justify-center md:justify-start py-3 px-2 hover:bg-[rgba(60,60,60,1)] hover:text-white rounded cursor-pointer"
          >
            <FaUserGroup className="text-xl text-gray-100" />
            <span className="hidden md:inline md:ml-2">Users</span>
          </li>
        </Link>
        <Link to="/bill">
          <li
            title="Bill payment"
            className="flex flex-col md:flex-row items-center gap-2 text-lg justify-center md:justify-start py-3 px-2 hover:bg-[rgba(60,60,60,1)] hover:text-white rounded cursor-pointer"
          >
            <IoMdSettings className="text-xl text-gray-100" />
            <span className="hidden md:inline md:ml-2">Settings</span>
          </li>
        </Link>
        <li
          title="Logout"
          className="flex flex-col md:flex-row items-center gap-2 text-lg justify-center md:justify-start py-3 px-2 hover:bg-[rgba(60,60,60,1)] hover:text-white rounded cursor-pointer"
        >
          <FaPowerOff className="text-xl text-gray-100" />
          <span className="hidden md:inline md:ml-2">Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
