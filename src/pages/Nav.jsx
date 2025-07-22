import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMdCart, IoMdHome, IoMdClose, IoIosTrash } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../components/cartSlice";

const Nav = ({ input, setInput }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);

  // const dispatch = useDispatch();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

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
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#ff7800] text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full shadow">
                {itemCount}
              </span>
            )}
          </li>

          {/* Cart Tab (example, you can style/position as needed) */}
          {isCartOpen && (
            <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 pl-4 p-1 overflow-y-auto mt-4 rounded-l-lg">
              <div className="flex justify-between items-center pr-4 pt-4">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-600">
                  <IoMdCart /> Shopping Cart
                </h2>
                <button
                  className="text-black cursor-pointer"
                  onClick={() => setIsCartOpen(false)}
                >
                  <IoMdClose size={25} />
                </button>
              </div>
              {/* Cart content goes here */}
              <div className="flex flex-col px-4 mt-4 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="text-center text-gray-600">
                    <IoMdCart size={40} className="mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">
                      Your Cart is Empty
                    </h3>
                    <p className="text-sm">Add some products to get started</p>
                  </div>
                ) : (
                  <>
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center border-b py-2"
                      >
                        <div className="flex items-center gap-8">
                          <div>
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-15 h-15 rounded object-cover"
                            />
                            <p className="font-semibold">{item.title}</p>
                          </div>

                          {/* <p className="text-sm text-gray-500">₦{item.price}</p> */}
                          <div className="flex gap-2 items-center mt-1">
                            <button
                              className="px-2 py-1 bg-gray-200 rounded text-sm cursor-pointer"
                              onClick={() =>
                                dispatch(decreaseQuantity(item.id))
                              }
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              className="px-2 py-1 bg-gray-200 rounded text-sm cursor-pointer"
                              onClick={() =>
                                dispatch(increaseQuantity(item.id))
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <button
                            className="cursor-pointer"
                            onClick={() => dispatch(removeItem(item.id))}
                          >
                            <IoIosTrash size={17} />
                          </button>
                          <p className="font-semibold text-[#ff7800]">
                            ₦{item.price * item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}

                    {/* Total */}
                    <div className="mt-4 border-t pt-4 text-right">
                      <h3 className="text-lg font-bold text-gray-700">
                        Total: ₦
                        {cartItems
                          .reduce(
                            (total, item) => total + item.price * item.quantity,
                            0
                          )
                          .toLocaleString()}
                      </h3>
                      <button className="bg-[#ff7800] text-white w-full py-2 rounded mt-4">
                        Proceed to Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
