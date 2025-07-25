import React from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-gray-600 text-white">
      <div className="flex flex-col md:flex-row justify-around items-center p-8 space-y-5">
        <div>
          <img
            src="/Images/Logo.png"
            alt="Chrysolite Logo"
            className="h-8 w-auto"
          />
          <span className="text-2xl font-semibold italic text-gray-300">
            Chrysolite
          </span>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-300">Contact Us</h2>
          <div className="text-sm">
            <a href="#" className="flex items-center gap-2 mt-2 text-gray-300">
              <FaWhatsapp className="text-green-500" size={25} /> 08066283460
            </a>
          </div>
          <p className="flex items-center gap-2 mt-2 text-sm text-gray-300">
            <FaPhoneAlt size={20} />
            08058517606
          </p>
          <p className="flex items-center gap-2 mt-2 text-sm text-gray-300">
            <IoLocationOutline size={25} /> Abuja, Nigeria
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-300">Follow Us</h2>
          <div className="text-sm">
            <a href="#" className="flex items-center gap-2 mt-2 text-gray-300">
              <FaInstagram className="text-[#E1306C]" size={25} /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 mt-2 text-gray-300">
              <FaFacebook className="text-blue-700" size={25} /> Facebook
            </a>
            <a href="#" className="flex items-center gap-2 mt-2 text-gray-300">
              <FaTiktok className="text-black" size={25} /> Tiktok
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center border-t border-gray-700 pt-4 pb-2 text-sm">
        <p>© 2025 Chrysolite Fragrance. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
