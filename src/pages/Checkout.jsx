import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoMdCart, IoMdClose } from "react-icons/io";
import ClipLoader from "react-spinners/ClipLoader";
import { decreaseQuantity, increaseQuantity } from "../components/cartSlice";

const Checkout = () => {
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const [showShippingModal, setShowShippingModal] = useState(false);
  const [showText, setShowText] = useState(false);
  const [placeOrder, setPlaceOrder] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      setError("⚠ select a payment method");
      return;
    }

    if (!placeOrder) {
      setIsLoading(true);
      setTimeout(() => {
        setShowText(false);
        setPlaceOrder(true);
        setIsLoading(false);
      }, 3000);
    }
  };
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="flex flex-col lg:flex-row justify-around p-5 overflow-hidden">
      <div className="shadow-lg rounded-lg p-8 md:w-[50%] w-full">
        <div className="text-2xl font-bold">
          <h1>Delivery Details</h1>
        </div>
        <div className=" flex justify-center rounded-lg mt-4 p-5 shadow-lg">
          <button
            onClick={() => setShowDeliveryModal(true)}
            className="border text-lg font-semibold py-1 px-4 cursor-pointer text-gray-800"
          >
            Add delivery details
          </button>
        </div>
        {/* Delivery Details Modal */}
        {showDeliveryModal && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-150 h-125 relative overflow-y-scroll">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold mb-4">
                  Enter Delivery Details
                </h2>
                <button
                  className="text-gray-600 cursor-pointer bg-gray-200 p-1 rounded-lg"
                  onClick={() => setShowDeliveryModal(false)}
                >
                  <IoMdClose size={24} />
                </button>
              </div>

              <form className="space-y-5">
                {/* First & Last Name */}
                <div className="flex gap-4">
                  <div className="w-full">
                    <label className="block mb-1 text-gray-800">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="First name"
                      required
                      className="w-full py-2 px-5 border border-gray-500 outline-none"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block mb-1 text-gray-800">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Last name"
                      required
                      className="w-full py-2 px-5 border border-gray-500 outline-none"
                    />
                  </div>
                </div>
                {/* Phone Number & Confirm Phone */}
                <div className="flex gap-4">
                  <div className="w-full">
                    <label className="block mb-1 text-gray-800">
                      Phone Number<span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="081..."
                      required
                      className="w-full py-2 px-5 border border-gray-500 outline-none"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block mb-1 text-gray-800">
                      Alternative Phone<span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="081..."
                      required
                      className="w-full py-2 px-5 border border-gray-500 outline-none"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label className="block mb-1 text-gray-800">Email</label>
                  <input
                    type="email"
                    placeholder="examaple@gmail.com..."
                    required
                    className="w-full py-2 px-5 border border-gray-500 outline-none"
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-1 text-gray-800">
                    Address<span className="text-red-400">*</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="plot 101....."
                    required
                    className="w-full py-2 px-5 border border-gray-500 outline-none"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="w-full">
                    <label className="block mb-1 text-gray-800">State</label>
                    <input
                      type="text"
                      placeholder="state"
                      required
                      className="w-full py-2 px-5 border border-gray-500 outline-none"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block mb-1 text-gray-800">City</label>
                    <input
                      type="text"
                      placeholder="city"
                      required
                      className="w-full py-2 px-5 border border-gray-500 outline-none"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    className="border border-[#e56e00] text-[#e56e00] py-1 px-4 rounded mt-4 cursor-pointer hover:bg-[#e56e00] hover:text-white font-bold"
                    onClick={() => setShowDeliveryModal(false)}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="bg-[#ff7800] text-white py-1 px-4 rounded mt-4 cursor-pointer hover:bg-[#e56e00] font-bold"
                  >
                    Save Details
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="text-xl font-bold mt-5">
          <h1 className="uppercase">Shipping Method</h1>
        </div>
        <div className="  rounded-lg mt-4 p-5 shadow-lg text-center">
          <small className="text-sm text-gray-400 font-semibold">
            Click the button below to choose a shipping method
          </small>
          <button
            onClick={() => setShowShippingModal(true)}
            className="border flex justify-center mt-1 mx-auto text-lg font-semibold px-8  py-1 md:px-4 cursor-pointer uppercase text-gray-800"
          >
            Select a shipping method
          </button>
        </div>

        {/* Modal */}
        {showShippingModal && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold mb-4">
                  Choose Shipping Method
                </h2>
                <button
                  className="cursor-pointer bg-gray-200 p-1 rounded-lg"
                  onClick={() => setShowShippingModal(false)}
                >
                  <IoMdClose size={24} />
                </button>
              </div>

              <div className="text-red-700 text-lg">
                <h1>
                  <span className="text-3xl">⚠</span> Please note that you will
                  be charged based on your location and method of delivery by
                  the Admin!{" "}
                </h1>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="shadow-lg p-8 md:w-[40%] w-full rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Your Order</h2>
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500">
            <IoMdCart size={40} className="mx-auto mb-2" />
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div className="flex items-center justify-between">
                <div className="flex gap-4 space-y-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded object-cover"
                  />
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">
                      {item.title}
                    </p>
                    <div className="flex gap-2 items-center mt-1">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded text-sm cursor-pointer"
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded text-sm cursor-pointer"
                        onClick={() => dispatch(increaseQuantity(item.id))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-500 text-sm">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex justify-between font-bold border-t border-gray-300 text-gray-700 pt-4">
              <h3 className="text-lg">Total</h3>₦{" "}
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString()}
            </div>
            <div className="mt-4">
              <h1 className="text-2xl font-bold text-gray-800">
                Choose Payment Method
              </h1>
              {error && <p className="text-red-500 text-lg">{error}</p>}
              <button
                className={`py-1 px-4 mt-3 cursor-pointer font-bold text-lg 
                border ${error ? "border-red-500" : "border-2"} 
                ${placeOrder ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={placeOrder}
                onClick={() => {
                  setShowText(true);
                  setPaymentMethod(true);
                  setError("");
                }}
              >
                Bank Transfer
              </button>
              {showText && (
                <div className="mt-5 w-full">
                  <h3 className="text-xl font-bold text-gray-800">
                    ⚠ Pay into the merchant's bank account.
                  </h3>
                  <p className="block text-lg text-gray-600 w-full mt-2">
                    This payment is not confirmed automatically and requires
                    manual confirmation by the marchant.
                  </p>
                  <small className="block italic text-sm text-gray-600 w-full mt-2 border-t border-gray-400 pt-3">
                    Disclaimer: Direct payments to the merchant's bank account
                    are outside chrysolite fragrance system and limits our
                    ability to assist with disputes.
                  </small>
                </div>
              )}
            </div>
            {placeOrder && (
              <div className="mt-5 w-full">
                <div className="w-full bg-yellow-100 p-5">
                  <h2 className="w-full text-lg text-gray-600">
                    Kindly make your payment directly into the bank account
                    below and upload a proof of payment:
                  </h2>
                  <h1 className="mt-2 text-xl font-bold text-gray-800">
                    Account Name: ODOJE RONKE ESTHER
                  </h1>
                  <h1 className="text-xl font-bold text-gray-800">
                    Account No.: 51*********455
                  </h1>
                  <h1 className="text-xl font-bold text-gray-800">
                    Bank Name: Kuda Microfinance Bank
                  </h1>
                </div>
                <div className="mt-2">
                  <label className="block mb-2 text-gray-600 font-semibold">
                    Made the payment? Upload the payment receipt.👇
                  </label>
                  <input
                    type="file"
                    className="w-full outline-none border border-gray-700 rounded px-3 py-1 cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>
        )}
        <button
          onClick={handlePlaceOrder}
          className="bg-[#ff7800] text-white text-sm w-full uppercase py-3 rounded mt-4 cursor-pointer ]"
        >
          {isLoading ? (
            <div className="flex justify-center items-center">
              <ClipLoader color="#fff" size={25} />
            </div>
          ) : (
            <h1 className="transition-transform duration-500 ease-in-out hover:scale-105 font-bold">
              {placeOrder ? "I've made payment" : "Place Order"}
            </h1>
          )}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
