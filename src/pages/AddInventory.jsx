import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AddInventoryForm from "../components/AddInventoryForm";
import AddBrandModal from "../components/AddBrandModal";
import AddCategoryModal from "../components/AddCategoryModal";
import {
  Smartphone,
  Laptop,
  Monitor,
  Tablet,
  Tv,
  Camera,
  Headphones,
  Watch,
  Volume2,
  Keyboard,
  Mouse,
  Printer,
  Gamepad2,
  Usb,
  Wifi,
  Lightbulb,
  Mic,
  Bone,
  Battery,
  Headset,
  Plus,
} from "lucide-react";

const gadgetIcons = {
  Mobile: <Smartphone className="text-4xl text-gray-400 mb-2" />,
  Watch: <Watch className="text-4xl text-gray-400 mb-2" />,
  Tablet: <Tablet className="text-4xl text-gray-400 mb-2" />,
  Speaker: <Volume2 className="text-4xl text-gray-400 mb-2" />,
  "Mobile Cover": <Smartphone className="text-4xl text-gray-400 mb-2" />,
  "Power Bank": <Battery className="text-4xl text-gray-400 mb-2" />,
  Laptop: <Laptop className="text-4xl text-gray-400 mb-2" />,
  Headphone: <Headphones className="text-4xl text-gray-400 mb-2" />,
  Earphone: <Headphones className="text-4xl text-gray-400 mb-2" />,
  Charger: <Battery className="text-4xl text-gray-400 mb-2" />,
  TV: <Tv className="text-4xl text-gray-400 mb-2" />,
  Desktop: <Monitor className="text-4xl text-gray-400 mb-2" />,
  Camera: <Camera className="text-4xl text-gray-400 mb-2" />,
  Keyboard: <Keyboard className="text-4xl text-gray-400 mb-2" />,
  Mouse: <Mouse className="text-4xl text-gray-400 mb-2" />,
  Printer: <Printer className="text-4xl text-gray-400 mb-2" />,
  Gamepad: <Gamepad2 className="text-4xl text-gray-400 mb-2" />,
  USB: <Usb className="text-4xl text-gray-400 mb-2" />,
  "Wi-Fi Router": <Wifi className="text-4xl text-gray-400 mb-2" />,
  "Smart Bulb": <Lightbulb className="text-4xl text-gray-400 mb-2" />,
  Mic: <Mic className="text-4xl text-gray-400 mb-2" />,
  Drone: <Bone className="text-4xl text-gray-400 mb-2" />,
  "VR Headset": <Headset className="text-4xl text-gray-400 mb-2" />,
};

const AddInventory = () => {
  const [currentStep, setCurrentStep] = useState("category");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [isAddBrandModalOpen, setIsAddBrandModalOpen] = useState(false);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const navigate = useNavigate();

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

  const [brands, setBrands] = useState([
    "Ambrane",
    "Apple",
    "Asus",
    "Blue Star",
    "Boat",
    "Canon",
    "Dell",
    "Samsung",
    "Sony",
    "LG",
    "Xiaomi",
    "OnePlus",
  ]);

  const [manageableCategories, setManageableCategories] = useState([
    {
      name: "Mobile Water Proof Pouch",
      icon: <Smartphone className="text-4xl text-gray-400 mb-2" />,
    },
    {
      name: "Plastic Mobile Stand",
      icon: <Monitor className="text-4xl text-gray-400 mb-2" />,
    },
    {
      name: "Gaming Sleeve",
      icon: <Gamepad2 className="text-4xl text-gray-400 mb-2" />,
    },
    {
      name: "Rain Card",
      icon: <Camera className="text-4xl text-gray-400 mb-2" />,
    },
    {
      name: "Wire Protector",
      icon: <Usb className="text-4xl text-gray-400 mb-2" />,
    },
    {
      name: "Car Stand",
      icon: <Monitor className="text-4xl text-gray-400 mb-2" />,
    },
  ]);
  // const handleInventorySelect = (inventory)=> {
  //   setSelectedCategory(inventory);
  //   setCurrentStep("category");
  // };
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentStep("brand");
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    setCurrentStep("form");
  };

  const handleAddBrand = (brandName) => {
    console.log(brandName);
    setBrands((prev) => [...prev, brandName]);
  };

  const handleAddCategory = (newCategory) => {
    setManageableCategories((prev) => [...prev, newCategory]);
    setIsAddCategoryModalOpen(false);
  };

  const onReset = () => {
    setCurrentStep("category");
  };

  const handleBack = () => {
    console.log("rohit");
    if (currentStep === "category") {
      console.log("rohit");
      navigate("/inventory");
    } else if (currentStep === "brand") {
      setCurrentStep("category");
      setSelectedCategory("");
    } else if (currentStep === "form") {
      setCurrentStep("brand");
      setSelectedBrand("");
    }
  };

  const getStepTitle = () => {
    if (currentStep === "category") return "Add Inventory - Select Category";
    if (currentStep === "brand")
      return `Add Inventory - Select Brand for ${selectedCategory}`;
    if (currentStep === "form")
      return `Add Inventory - ${selectedCategory} | ${selectedBrand}`;
    return "Add Inventory";
  };

  return (
    <div className="flex flex-1/2">
      <div className="min-h-screen bg-gray-100 p-2 lg:p-4">
        

        {/* Step Views */}
        {currentStep === "category" && (
          <>
            <h2 className="text-lg font-semibold mb-2">Select Category</h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-6">
              {categories.map((item) => (
                <button
                  key={item}
                  className="p-4 rounded-lg bg-white flex flex-col items-center text-sm shadow hover:shadow-md transition focus:border border-orange-300"
                  onClick={() => handleCategorySelect(item)}
                >
                  {gadgetIcons[item] || (
                    <Smartphone className="text-4xl text-gray-400 mb-2" />
                  )}
                  <span className="text-center">{item}</span>
                </button>
              ))}
            </div>

            <h2 className="text-lg font-semibold mb-2">Manageable Category</h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {manageableCategories.map((item) => (
                <button
                  key={item.name}
                  className="p-4 rounded-lg bg-white flex flex-col items-center text-sm shadow hover:shadow-md transition focus:border border-orange-300"
                  onClick={() => handleCategorySelect(item.name)}
                >
                  {item.icon}
                  <span className="text-center">{item.name}</span>
                </button>
              ))}
              <button
                className="p-4 rounded-lg flex flex-col items-center text-sm border-[3px] border-dashed border-gray-300 shadow hover:shadow-md transition focus:outline-none"
                onClick={() => setIsAddCategoryModalOpen(true)}
              >
                <Plus className="text-5xl text-gray-300 mb-2" />
                <span className="text-center">Manage Category</span>
              </button>
            </div>
          </>
        )}

        {currentStep === "brand" && (
          <>
            <div className="flex mt-3 justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Select Brand</h2>
              <button
                className="bg-[#F89320] text-white px-2 py-1 rounded hover:bg-orange-300"
                onClick={() => setIsAddBrandModalOpen(true)}
              >
                + Add Brand
              </button>
            </div>
            <div className="bg-white p-3 rounded-xl shadow space-y-2 ">
              {brands.map((brand) => (
                <div
                  key={brand}
                  onClick={() => handleBrandSelect(brand)}
                  className="p-3 rounded-2xl px-5 text-md bg-gray-100 cursor-pointer truncate"
                >
                  {brand}
                </div>
              ))}
            </div>
            <AddBrandModal
              isOpen={isAddBrandModalOpen}
              onClose={() => setIsAddBrandModalOpen(false)}
              onAddBrand={handleAddBrand}
            />
          </>
        )}

        {currentStep === "form" && (
          <div className="flex-1 mt-4">
            <AddInventoryForm
              selectedCategory={selectedCategory}
              selectedBrand={selectedBrand}
              onBack={handleBack}
              onReset={onReset}
            />
          </div>
        )}

        {/* Add Category Modal */}
        {isAddCategoryModalOpen && (
          <AddCategoryModal
            onClose={() => setIsAddCategoryModalOpen(false)}
            onAdd={handleAddCategory}
          />
        )}
      </div>
    </div>
  );
};

export default AddInventory;
