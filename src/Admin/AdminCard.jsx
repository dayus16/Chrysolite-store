import React from "react";

const AdminCard = ({ icon, title, value }) => {
  return (
    <div
      className="p-4 rounded-lg shadow-md hover:-translate-y-2 transform ease-in-out duration-500 cursor-pointer
    bg-[rgba(30,30,30,255)] text-white"
    >
      <div className="flex items-center gap-4 text-gray-300">
        <div className="text-gray-100">{icon}</div>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div>
        <p className="text-4xl text-gray-100 font-bold">{value}</p>
      </div>
    </div>
  );
};

export default AdminCard;
