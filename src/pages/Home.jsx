import { useState } from "react";
import { addToCart } from "../components/cartSlice";
import logo from "../Images/LogoImage_2.jpg";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Home = ({ input }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const dispatch = useDispatch();

  const chrysoliteItems = [
    {
      id: 1,
      image: "Images/Combo_001.jpg",
      title: "combo 001",
      description: "perfume combo",
      price: 4000,
      category: "perfume_combos",
    },
    {
      id: 2,
      image: "Images/Combo_002.jpg",
      title: "combo 002",
      description: "perfume combo",
      price: 9000,
      category: "perfume_combos",
    },
    {
      id: 3,
      image: "Images/Combo_003.jpg",
      title: "combo 003",
      description: "perfume combo",
      price: 5000,
      category: "perfume_combos",
    },
    {
      id: 4,
      image: "Images/Combo_004.jpg",
      title: "combo 004",
      description: "perfume combo",
      price: 9000,
      category: "perfume_combos",
    },
    {
      id: 5,
      image: "Images/Combo_005.jpg",
      title: "combo 005",
      description: "perfume combo",
      price: 3000,
      category: "perfume_combos",
    },
    {
      id: 6,
      image: "Images/Combo_006.jpg",
      title: "combo 006",
      description: "perfume combo",
      price: 8000,
      category: "perfume_combos",
    },
    {
      id: 7,
      image: "Images/Combo_007.jpg",
      title: "combo 007",
      description: "perfume combo",
      price: 8000,
      category: "perfume_combos",
    },
    {
      id: 8,
      image: "Images/Combo_008.jpg",
      title: "combo 008",
      description: "perfume combo",
      price: 8000,
      category: "perfume_combos",
    },
    {
      id: 9,
      image: "Images/Combo_009.jpg",
      title: "combo 009",
      description: "perfume combo",
      price: 8000,
      category: "perfume_combos",
    },
    {
      id: 10,
      image: "Images/Combo_010.jpg",
      title: "combo 010",
      description: "perfume combo",
      price: 5000,
      category: "perfume_combos",
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
      category: "Roll_On",
    },
    {
      id: 19,
      image: "Images/Roll_on 003.jpg",
      title: "Roll on 003",
      description: "Feel Refresh",
      price: 1500,
      category: "Roll_On",
    },
    {
      id: 20,
      image: "Images/Ear_rings_001.jpg",
      title: "Ear ring 001",
      description: "Look prety",
      price: 1200,
      category: "Ear_Rings",
    },
    {
      id: 21,
      image: "Images/Ear_rings_002.jpg",
      title: "Ear ring 002",
      description: "Look prety",
      price: 1200,
      category: "Ear_Rings",
    },
    {
      id: 22,
      image: "Images/Ear_rings_003.jpg",
      title: "Ear ring 003",
      description: "Look prety",
      price: 1200,
      category: "Ear_Rings",
    },
  ];

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success("🛒 added to cart!");
  };

  const normalizedInput = input.trim().toLowerCase();

  const filteredItems = chrysoliteItems.filter((item) => {
    // Filter by category
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;

    // Filter by search input
    const matchesSearch =
      !normalizedInput ||
      item.title.toLowerCase().includes(normalizedInput) ||
      item.description.toLowerCase().includes(normalizedInput) ||
      item.category.toLowerCase().includes(normalizedInput);

    // Both must match
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row justify-evenly items-center bg-[rgba(215,215,155,255)] rounded-lg shadow-lg">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8"
        >
          <p className="text-xl md:2xl font-semibold text-gray-800">
            Smart Products
          </p>
          <h1 className="text-4xl md:text-5xl mt-2 font-bold text-gray-800">
            Chrysolite Fragrance
          </h1>
          <p className="italic mt-1 font-medium text-gray-800">
            ...Scent your way to happiness
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Discover luxurious fragrances for those <br /> who appreciate the
            essence of pure delight.
          </p>
          <div className="mt-7">
            <a
              href="#items"
              className="uppercase border py-2 px-5 text-gray-800"
            >
              Shop now
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-full h-100 object-cover hidden md:block rounded-lg"
          />
        </motion.div>
      </div>
      <div className="w-full p-5 mt-10">
        <select
          id="category"
          name="category"
          className="border border-[#ff7800] rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff7800]
          "
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="perfumes">Perfume</option>
          <option value="perfume_combos">Perfume Combos</option>
          <option value="Roll_On">Roll on</option>
          <option value="Ear_Rings">Ear Rings</option>
        </select>
      </div>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-5"
        id="items"
      >
        {filteredItems.map((items) => (
          <div
            key={items.id}
            className="shadow-lg rounded-lg overflow-hidden w-full"
          >
            <img
              src={items.image}
              alt={items.title}
              className="w-full h-70 object-cover hover:scale-105 rounded-t-lg transition-transform duration-300 overflow-hidden shadow-lg"
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
                <button
                  className="flex items-center gap-2 bg-[#ff7800] hover:bg-[#e56e00] text-white px-3 py-1 rounded-lg text-sm font-medium cursor-pointer"
                  onClick={() => dispatch(handleAddToCart(items))}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
