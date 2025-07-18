import React, { useState } from "react";
import logo from "../Images/LogoImage.jpg";
import logoImage from "../Images/Logo.png";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassWord] = useState("");
  const [errors, setErrors] = useState({});

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Email or username is required";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
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

          <h2 className="text-2xl text-gray-800 font-bold text-center">
            Welcome back
          </h2>
          <p className="text-gray-800 text-center mb-8">
            Login to your account to continue
          </p>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email/Username
              </label>

              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Enter your username"
                className={`w-full border ${
                  errors.username ? "border-red-500" : "border-[#ff7800]"
                } rounded px-4 py-2 outline-none focus:ring-2 focus:ring-[#ff7800]`}
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
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
                  } rounded px-4 py-2 outline-none focus:ring-2 focus:ring-[#ff7800]`}
                />
                <div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                  onClick={togglePassword}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff7800] text-white py-2 rounded-lg font-semibold hover:bg-[#e56e00] cursor-pointer transition"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-sm text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
