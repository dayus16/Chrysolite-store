import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/LogoImage_1.jpg";

const chrysoliteItems = [
  {
    id: 1,
    image: "Images/Combo_001.jpg",
    title: "combo 001",
    description: "perfume combo",
    price: 4000,
    category: "perfumes",
  },
  {
    id: 2,
    image: "Images/Combo_002.jpg",
    title: "combo 002",
    description: "perfume combo",
    price: 9000,
    category: "perfumes",
  },
  {
    id: 3,
    image: "Images/Combo_003.jpg",
    title: "combo 003",
    description: "perfume combo",
    price: 5000,
    category: "perfumes",
  },
  {
    id: 4,
    image: "Images/Combo_004.jpg",
    title: "combo 004",
    description: "perfume combo",
    price: 9000,
    category: "perfumes",
  },
  {
    id: 5,
    image: "Images/Combo_005.jpg",
    title: "combo 005",
    description: "perfume combo",
    price: 3000,
    category: "perfumes",
  },
  {
    id: 6,
    image: "Images/Combo_006.jpg",
    title: "combo 006",
    description: "perfume combo",
    price: 8000,
    category: "perfumes",
  },
  {
    id: 7,
    image: "Images/Combo_007.jpg",
    title: "combo 007",
    description: "perfume combo",
    price: 8000,
    category: "perfumes",
  },
  {
    id: 8,
    image: "Images/Combo_008.jpg",
    title: "combo 008",
    description: "perfume combo",
    price: 8000,
    category: "perfumes",
  },
  {
    id: 9,
    image: "Images/Combo_009.jpg",
    title: "combo 009",
    description: "perfume combo",
    price: 8000,
    category: "perfumes",
  },
  {
    id: 10,
    image: "Images/Combo_010.jpg",
    title: "combo 010",
    description: "perfume combo",
    price: 5000,
    category: "perfumes",
  },
  {
    id: 11,
    image: "Images/Perfume_001.jpg",
    title: "perfume 001",
    description: "Smell nice",
    price: 2500,
    category: "perfumes",
  },
  {
    id: 12,
    image: "Images/Perfume_002.jpg",
    title: "perfume 002",
    description: "Smell nice",
    price: 4500,
    category: "perfumes",
  },
  {
    id: 13,
    image: "Images/Perfume_003.jpg",
    title: "perfume 003",
    description: "Smell nice",
    price: 2000,
    category: "perfumes",
  },
  {
    id: 14,
    image: "Images/Perfume_004.jpg",
    title: "perfume 004",
    description: "Smell nice",
    price: 2500,
    category: "perfumes",
  },
  {
    id: 14,
    image: "Images/Perfume_004.jpg",
    title: "perfume 004",
    description: "Smell nice",
    price: 2500,
    category: "perfumes",
  },
  {
    id: 15,
    image: "Images/Perfume_005.jpg",
    title: "perfume 005",
    description: "Smell nice",
    price: 6000,
    category: "perfumes",
  },
  {
    id: 16,
    image: "Images/Perfume_006.jpg",
    title: "perfume 006",
    description: "Smell nice",
    price: 5000,
    category: "perfumes",
  },
  {
    id: 17,
    image: "Images/Roll_on 001.jpg",
    title: "Roll on 001",
    description: "Feel Refresh",
    price: 1500,
    category: "Roll On",
  },
  {
    id: 18,
    image: "Images/Roll_on 002.jpg",
    title: "Roll on 002",
    description: "Feel Refresh",
    price: 1500,
    category: "Roll On",
  },
  {
    id: 19,
    image: "Images/Roll_on 003.jpg",
    title: "Roll on 003",
    description: "Feel Refresh",
    price: 1500,
    category: "Roll On",
  },
  {
    id: 20,
    image: "Images/Ear_rings_001.jpg",
    title: "Ear ring 001",
    description: "Look prety",
    price: 1200,
    category: "Ear Rings",
  },
  {
    id: 21,
    image: "Images/Ear_rings_002.jpg",
    title: "Ear ring 002",
    description: "Look prety",
    price: 1200,
    category: "Ear Rings",
  },
  {
    id: 22,
    image: "Images/Ear_rings_003.jpg",
    title: "Ear ring 003",
    description: "Look prety",
    price: 1200,
    category: "Ear Rings",
  },
];

const Home = () => {
  return (
    <div className="">
      <img src={logo} alt="Logo" className="w-full h-130 hidden md:block" />
      <div className="w-full p-5 mt-10">
        <select
          id="category"
          name="category"
          className="border border-[#ff7800] rounded px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff7800]"
        >
          <option value="#">Browse Collections</option>
          <option value="all">All</option>
          <option value="perfume">Perfume</option>
          <option value="perfume_combos">Perfume Combos</option>
          <option value="roll_on">Roll on</option>
          <option value="ear_rings">Ear Rings</option>
          <option value="wrist_watch">Wrist Watch</option>
        </select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
        {chrysoliteItems.map((items) => (
          <div
            key={items.id}
            className="shadow-lg rounded overflow-hidden w-full m-5 p-5"
          >
            <img
              src={items.image}
              alt={items.title}
              className="w-full h-70 object-cover hover:scale-105 transition-transform duration-300 shadow-lg"
            />
            <div className="p-3">
              <h3 className="text-lg font-semibold">{items.title}</h3>
              <p className="text-sm text-gray-500">{items.description}</p>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-md font-bold mt-1">
                  {items.price.toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  })}
                </p>
                <h2 className="flex items-center gap-2 bg-[#ff7800] text-white px-3 py-1 rounded-lg cursor-pointer font-medium">
                  Add to cart
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
