import React, { useState } from "react";
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
  X,
  Router,
  HardDrive,
  Cable,
  Bluetooth,
  Speaker,
  Car,
  Home,
  Shield,
  Zap,
} from "lucide-react";

const gadgetIcons = [
  { name: "Mobile", component: Smartphone },
  { name: "Laptop", component: Laptop },
  { name: "Monitor", component: Monitor },
  { name: "Tablet", component: Tablet },
  { name: "TV", component: Tv },
  { name: "Camera", component: Camera },
  { name: "Headphones", component: Headphones },
  { name: "Watch", component: Watch },
  { name: "Speaker", component: Volume2 },
  { name: "Keyboard", component: Keyboard },
  { name: "Mouse", component: Mouse },
  { name: "Printer", component: Printer },
  { name: "Gamepad", component: Gamepad2 },
  { name: "USB", component: Usb },
  { name: "WiFi", component: Wifi },
  { name: "Light", component: Lightbulb },
  { name: "Mic", component: Mic },
  { name: "Drone", component: Bone },
  { name: "Battery", component: Battery },
  { name: "VR Headset", component: Headset },
  { name: "Router", component: Router },
  { name: "Hard Drive", component: HardDrive },
  { name: "Cable", component: Cable },
  { name: "Bluetooth", component: Bluetooth },
  { name: "Sound", component: Speaker },
  { name: "Car", component: Car },
  { name: "Home", component: Home },
  { name: "Shield", component: Shield },
  { name: "Power", component: Zap },
];

const AddCategoryModal = ({ onClose, onAdd }) => {
  const [categoryName, setCategoryName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleAdd = () => {
    if (categoryName.trim() && selectedIcon) {
      const IconComponent = selectedIcon;
      onAdd({
        name: categoryName.trim(),
        icon: <IconComponent className="text-4xl text-gray-400 mb-2" />,
      });
      setCategoryName("");
      setSelectedIcon(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-black/30">
      <div className="bg-white p-6 rounded-xl w-[600px] max-h-[90vh] overflow-y-auto relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg p-1 rounded-full hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-semibold mb-4 text-xl">Add New Category</h3>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category Name
          </label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Enter Category Name"
            className="w-full px-3 py-2 bg-white rounded-lg border border-gray-200 hover:border-orange-300 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Icon
          </label>
          <div className="grid grid-cols-6 gap-2 max-h-[300px] overflow-y-auto p-2 border border-gray-200 rounded-lg">
            {gadgetIcons.map((iconItem, i) => {
              const IconComponent = iconItem.component;
              return (
                <button
                  key={i}
                  onClick={() => setSelectedIcon(iconItem.component)}
                  className={`w-12 h-12 flex items-center justify-center rounded-lg shadow-sm border-2 transition-all duration-200 hover:shadow-md
                    ${
                      selectedIcon === iconItem.component
                        ? "border-orange-400 bg-orange-50 shadow-md"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  title={iconItem.name}
                >
                  <IconComponent className="text-xl text-gray-600" />
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            disabled={!categoryName.trim() || !selectedIcon}
            className={`flex-1 px-4 py-2 rounded-lg transition-colors
              ${
                categoryName.trim() && selectedIcon
                  ? "bg-[#F89320] text-white hover:bg-orange-400"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            Add Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;
