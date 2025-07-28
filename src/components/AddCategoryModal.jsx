import React, { useState } from "react";
import {
  FaMobileAlt,
  FaLaptop,
  FaDesktop,
  FaTabletAlt,
  FaTv,
  FaCamera,
  FaHeadphones,
  FaClock,
  FaVolumeUp,
  FaKeyboard,
  FaMouse,
  FaPrint,
  FaGamepad,
  FaUsb,
  FaWifi,
  FaLightbulb,
  FaMicrophoneAlt,
  FaHelicopter,
  FaBatteryFull,
  FaVrCardboard,
  FaPlus,
} from "react-icons/fa";

const gadgetIcons = [
  {
    label: "Mobile",
    icon: <FaMobileAlt className="text-4xl text-gray-400 mb-2" />,
  },
  {
    label: "Laptop",
    icon: <FaLaptop className="text-4xl text-gray-400 mb-2" />,
  },
  {
    label: "Desktop",
    icon: <FaDesktop className="text-4xl text-gray-400 mb-2" />,
  },
  {
    label: "Tablet",
    icon: <FaTabletAlt className="text-4xl text-gray-400 mb-2" />,
  },
  { label: "TV", icon: <FaTv className="text-4xl text-gray-400 mb-2" /> },
  {
    label: "Camera",
    icon: <FaCamera className="text-4xl text-gray-400 mb-2" />,
  },
  {
    label: "Headphones",
    icon: <FaHeadphones className="text-4xl text-gray-400 mb-2" />,
  },
  {
    label: "Smartwatch",
    icon: <FaClock className="text-4xl text-gray-400 mb-2" />,
  },
  {
    label: "Speaker",
    icon: <FaVolumeUp className="text-4xl text-gray-400 mb-2" />,
  },
  {
    label: "Keyboard",
    icon: <FaKeyboard className="text-4xl text-gray-400 mb-2" />,
  },
  { label: "Mouse", icon: <FaMouse className="text-4xl text-gray-400 mb-2" /> },
  {
    label: "Printer",
    icon: <FaPrint className="text-4xl text-gray-400 mb-2" />,
  },
  {
    label: "Gamepad",
    icon: <FaGamepad className="text-4xl text-gray-400 mb-2" />,
  },
  { label: "USB", icon: <FaUsb className="text-4xl text-gray-400 mb-2" /> },
  {
    label: "Wi-Fi Router",
    icon: <FaWifi className="text-4xl text-gray-400 mb-2" />,
  },
  {
    label: "Smart Bulb",
    icon: <FaLightbulb className="text-4xl text-gray-400 mb-2" />,
  },
  {
    label: "Mic",
    icon: <FaMicrophoneAlt className="text-4xl text-gray-400 mb-2" />,
  },
  {
    label: "Drone",
    icon: <FaHelicopter className="text-4xl text-gray-400 mb-2" />,
  },
  {
    label: "Power Bank",
    icon: <FaBatteryFull className="text-4xl text-gray-400 mb-2" />,
  },
  {
    label: "VR Headset",
    icon: <FaVrCardboard className="text-4xl text-gray-400 mb-2" />,
  },
];

const AddCategoryModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setShowModal(true)}
        className="p-4 rounded-lg flex flex-col items-center text-sm border-2 border-dotted border-orange-400 shadow hover:shadow-md transition focus:outline-none"
      >
        <FaPlus className="text-5xl text-orange-200 mb-2" />
        <span className="text-center">Manage Category</span>
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-[600px] max-h-[90vh] overflow-y-auto relative shadow-lg">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg"
            >
              ✕
            </button>

            {/* Add Category Form */}
            <div className="mt-2">
              <h3 className="font-semibold mb-2">Add Category</h3>
              <input
                type="text"
                placeholder="Enter Category Name"
                className="w-full px-3 py-2 bg-white rounded-2xl mb-2 
                  border border-gray-200 
                  hover:border-orange-300 
                  focus:border-orange-300 
                  focus:outline-none"
              />

              <p className="text-sm mb-1">Choose Icon</p>
              <div className="grid grid-cols-5 gap-4 max-h-[300px] overflow-y-auto">
                {gadgetIcons.map(({ label, icon }) => (
                  <button
                    key={label}
                    className="w-[90px] h-[110px] bg-white rounded-lg shadow hover:shadow-md flex flex-col items-center justify-center text-sm transition"
                  >
                    {icon}
                  </button>
                ))}
              </div>

              <button className="mt-3 bg-[#F89320] text-white px-4 py-2 rounded hover:bg-orange-300">
                + Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCategoryModal;
