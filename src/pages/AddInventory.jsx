import React from "react";
import Navbar from "../components/Navbar";
import { MdOutlineCameraAlt } from "react-icons/md";
import AddInventoryForm from "../components/AddInventoryForm";
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
} from "react-icons/fa";

import {
  
  FaPlus ,
} from "react-icons/fa";

const gadgetIcons = [
  {
    label: "Mobile",
    icon: <FaMobileAlt className="text-3xl text-gray-400 mb-2" />,
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

const AddInventory = () => {
  const categories = [
    "Mobile",
    "Watch",
    "Tablet",
    "Speaker",
    "Mobile Cover",
    "Power Bank",
    "Laptop",
    "Headphone",
    "Earphone",
    "Charger",
    "TV",
  ];

  const brands = [
    "Ambrane",
    "Apple",
    "Asus",
    "Blue Star",
    "Boat",
    "Canon",
    "Dell",
    "Ambrane",
    "Apple",
    "Asus",
    "Blue Star",
    "Boat",
    "Canon",
    "Dell",

  ];

  const manageableCategories = [
    "Mobile Water Proof Pouch",
    "Plastic Mobile Stand",
    "Gaming Sleeve",
    "Rain Card",
    "Wire Protector",
    "Car Stand",
    "Manager Category",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-2 ">
      <Navbar
        header="Add Inventory"
        searchVisible={true}
        className="font-bold text-2xl"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 ">
        {/* Column 1 - Select Category */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Select Category</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {categories.map((item) => (
              <button
                key={item}
                className="p-4 rounded-lg bg-white flex flex-col items-center text-sm  shadow hover:shadow-md transition focus:border border-orange-300"
              >
                <FaMobileAlt className="text-5xl text-gray-300 mb-2" />
                <span className="text-center">{item}</span>
              </button>
            ))}
          </div>
          {/* Manageable Category */}
          <h2 className="text-lg font-semibold mt-6 mb-2">
            Manageable Category
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-5  gap-3">
            {manageableCategories.map((item) => (
              <button
                key={item}
                className="p-4 rounded-lg bg-white flex flex-col items-center text-sm  shadow hover:shadow-md transition focus:border border-orange-300"
              >
                <FaMobileAlt className="text-5xl text-gray-300 mb-2" />
                <span className="text-center">{item}</span>
              </button>
            ))}
            <button
              className="p-4 rounded-lg flex flex-col items-center text-sm
             border-[3px] border-dashed border-gray-300 
             shadow hover:shadow-md transition focus:outline-none"
            >
              <FaPlus className="text-5xl text-gray-300 mb-2" />
              <span className="text-center">Manage Category</span>
            </button>
          </div>
        </div>
        {/* Column 2 - Add Inventory*/}
        
          <div>
            <div className="flex mt-3 justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Add Inventory</h2>
              <button className="bg-[#F89320] text-white px-2 py-1 rounded hover:bg-orange-300">
                +Add
              </button>
            </div>
            <div className="bg-white p-3 rounded-xl shadow  space-y-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              {brands.map((brand) => (
                <div
                  key={brand}
                  className=" p-3 rounded-2xl px-5 text-md bg-gray-100 cursor-pointer truncate"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>

          
        

        {/* Column 3 - Form */}
        <div className="flex-1 mt-3 ">
          <AddInventoryForm />
        </div>
      </div>
    </div>
  );
};

export default AddInventory;
