import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../Images/404_Error.png";

const Error = () => {
  return (
    <div className="flex justify-around items-center p-5 bg-[rgba(170,238,229,255)]">
      <div>
        <h1 className="text-4xl font-bold text-gray-800">So Sorry!</h1>
        <h3 className="text-2xl mt-2 font-bold text-gray-800">
          The page you are looking for <br /> cannot be found
        </h3>
        <p className="mt-5 text-lg font-semibold text-gray-700">
          Possible Reasons
        </p>
        <p className="text-sm text-gray-500 mt-2">
          ◾ The address may have been typed incorrectly;
        </p>
        <p className="text-sm text-gray-500 mt-2">
          ◾ It may be a broken or outdated link.
        </p>
        <div className="mt-4">
          <Link
            to="/"
            className=" bg-[#ff7800] py-2 px-4 text-white rounded hover:bg-[#ff7700ec]"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <div>
        <img
          src={PageNotFound}
          alt="404_Error"
          className="w-[100%] h-[400px] object-cover hidden md:block"
        />
      </div>
    </div>
  );
};

export default Error;
