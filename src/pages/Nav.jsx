import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMdCart, IoMdHome, IoMdClose } from "react-icons/io";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/Images/Logo.png"
            alt="Chrysolite Logo"
            className="h-8 w-auto"
          />
          <span className="text-2xl font-semibold italic text-black">
            Chrysolite
          </span>
        </Link>

        {/* Search (desktop only) */}
        <div className="relative hidden md:block w-72">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              fill="none"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search..."
            className="w-full p-2 pl-10 text-sm text-black outline-none border border-[#ff7800] rounded-lg bg-gray-50 focus:border-[#ff7800] dark:bg-gray-200 dark:border-gray-200 dark:text-black"
          />
        </div>

        {/* Nav Links */}
        <ul className="flex text-sm font-medium bg-gray-50 md:bg-transparent md:dark:bg-transparent rounded-lg md:rounded-none p-4 md:p-0">
          {/* Home Icon */}
          <li>
            <Link
              to="/"
              className="flex items-center justify-center gap-2 py-2 px-3 text-black"
              title="Home"
            >
              <IoMdHome size={24} />
            </Link>
          </li>

          {/* Dropdown with User Icon */}
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-center gap-2 py-2 px-3 text-black"
              title="User Menu"
            >
              <FaUser size={20} />
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 10 6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M1 1l4 4 4-4"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute mt-2 z-20 w-44 bg-white rounded-lg shadow-md dark:bg-gray-700">
                <ul className="py-2 text-sm text-black dark:text-white">
                  <li>
                    <Link
                      to="/login"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Signup
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Settings
                    </Link>
                  </li>
                </ul>
                <div className="py-1">
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            )}
          </li>
          {/* ------------Cart Icon------------ */}

          <li
            className="relative flex items-center justify-center gap-2 py-2 px-3
            text-black hover:text-[#ff7800] transition cursor-pointer"
            title="Cart"
            onClick={() => setIsCartOpen(true)}
          >
            <IoMdCart size={28} />
            <span className="absolute -top-1 -right-1 bg-[#ff7800] text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full shadow">
              0
            </span>
          </li>

          {/* Cart Tab (example, you can style/position as needed) */}
          {isCartOpen && (
            <div className="fixed top-0 right-0 h-full w-100 bg-white shadow-lg z-50 pl-4">
              <div className="flex justify-between items-center pr-4 pt-4">
                <h2 className="text-xl font-bold mb-4">Your Cart</h2>
                <button
                  className="text-black cursor-pointer"
                  onClick={() => setIsCartOpen(false)}
                >
                  <IoMdClose size={25} />
                </button>
              </div>
              {/* Cart content goes here */}
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
