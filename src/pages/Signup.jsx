import React, { useState } from "react";
import logo from "../Images/LogoImage.jpg";
import logoImage from "../Images/Logo.png";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassWord] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!fullname.trim()) {
      newErrors.fullname = "required";
    }
    if (!email.trim()) {
      newErrors.email = "required";
    }
    if (!username.trim()) {
      newErrors.username = "required";
    }
    if (!password.trim()) {
      newErrors.password = "required";
    }
    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "required";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left image section */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={logo}
            alt="Business"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right login form section */}
        <div className="w-full md:w-1/2 p-8">
          <div className="flex justify-center mb-6">
            <img src={logoImage} alt="Logo" className="h-12 w-auto" />
          </div>

          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Signup to <span className="text-[#ff7800]">Chrysolite</span>{" "}
            Fragrance
          </h2>

          <form className="space-y-5" onSubmit={handleSignup}>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Fullname
              </label>
              <input
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                type="text"
                placeholder="fullname"
                className={`w-full border ${
                  errors.fullname ? "border-red-500" : "border-[#ff7800]"
                } rounded px-4 py-2 outline-none focus:ring-2 focus:ring-[#ff7800] `}
              />
              <p className="text-red-500 text-sm">{errors.fullname}</p>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="example@gmail.com"
                className={`w-full border ${
                  errors.email ? "border-red-500" : "border-[#ff7800]"
                } rounded px-4 py-2 outline-none focus:ring-2 focus:ring-[#ff7800] `}
              />
              <p className="text-red-500 text-sm">{errors.email}</p>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="username"
                className={`w-full border ${
                  errors.username ? "border-red-500" : "border-[#ff7800]"
                } rounded px-4 py-2 outline-none focus:ring-2 focus:ring-[#ff7800] `}
              />
              <p className="text-red-500 text-sm">{errors.username}</p>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  value={password}
                  onChange={(e) => setPassWord(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`w-full border ${
                    errors.password ? "border-red-500" : "border-[#ff7800]"
                  } rounded px-4 py-2 outline-none focus:ring-2 focus:ring-[#ff7800] `}
                />
                <p className="text-red-500 text-sm">{errors.password}</p>
                <div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                  onClick={togglePassword}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </div>
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                confirm password
              </label>
              <div className="relative">
                <input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="confirm password"
                  className={`w-full border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-[#ff7800]"
                  } rounded px-4 py-2 outline-none focus:ring-2 focus:ring-[#ff7800] `}
                />
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                <div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                  onClick={toggleConfirmPassword}
                >
                  {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff7800] text-white py-2 rounded-lg font-semibold hover:bg-[#e56e00] cursor-pointer transition"
            >
              Sign up
            </button>
          </form>

          <p className="mt-6 text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
