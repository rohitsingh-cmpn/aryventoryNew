import React from "react";
import { FaBarcode, FaBox, FaPlus } from "react-icons/fa";
import { MdOutlineImage } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const AddInventoryForm = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow w-full mt- ">
      <h2 className="text-lg font-semibold mb-4">Add Inventory</h2>

      {/* Upload Image */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center text-gray-400 text-sm cursor-pointer mb-4">
        <MdOutlineImage className="text-3xl mb-2" />
        <span>Click here to upload image</span>
      </div>

      {/* Input Fields */}
      <div className="space-y-3">
        {/* SKU / Barcode 1 */}
        <div className="flex items-center  border border-gray-200 focus:border-orange-300 rounded-md px-3 py-2">
          <FaBarcode className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="SKU / Barcode Number*"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* SKU / Barcode 2 */}
        <div className="flex items-center  border border-gray-200 focus:border-orange-300 rounded-md px-3 py-2">
          <FaBarcode className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="SKU / Barcode Number*"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Category & Brand */}
        <div className="flex gap-2">
          <div className="flex items-center  border border-gray-200 focus:border-orange-300 rounded-md px-3 py-2 w-1/2">
            <FaBox className="text-gray-400 mr-2" />
            <span className="text-sm text-gray-700">Charger</span>
          </div>
          <div className="flex items-center  border border-gray-200 focus:border-orange-300 rounded-md px-3 py-2 w-1/2 justify-between">
            <span className="text-sm text-gray-500">Brand</span>
            <IoMdArrowDropdown className="text-gray-400" />
          </div>
        </div>

        {/* Product Model */}
        <div className="flex items-center  border border-gray-200 focus:border-orange-300 rounded-md px-3 py-2">
          <FaBox className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Product Model"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Product Color */}
        <div className="flex items-center  border border-gray-200 focus:border-orange-300 rounded-md px-3 py-2">
          <FaBox className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Product Color*"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Quantity */}
        <div className="flex items-center  border border-gray-200 focus:border-orange-300 rounded-md px-3 py-2">
          <FaBox className="text-gray-400 mr-2" />
          <input
            type="number"
            placeholder="Product Quantity*"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Price + Purchase Price */}
        <div className="flex gap-2">
          <div className="flex items-center  border border-gray-200 focus:border-orange-300 rounded-md px-3 py-2 w-1/2">
            <FaBox className="text-gray-400 mr-2" />
            <input
              type="number"
              placeholder="Product Price*"
              className="w-full outline-none text-sm"
            />
          </div>
          <div className="flex items-center  border border-gray-200 focus:border-orange-300 rounded-md px-3 py-2 w-1/2">
            <FaBox className="text-gray-400 mr-2" />
            <input
              type="number"
              placeholder="Purchase Price*"
              className="w-full outline-none text-sm"
            />
          </div>
        </div>

        {/* Charging Port */}
        <div className="flex items-center  border border-gray-200 focus:border-orange-300 rounded-md px-3 py-2">
          <FaBox className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Charging Port"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Battery Capacity */}
        <div className="flex items-center  border border-gray-200 focus:border-orange-300 rounded-md px-3 py-2">
          <FaBox className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Battery Capacity"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Description */}
        <div className="flex items-center  border border-gray-200 focus:border-orange-300 rounded-md px-3 py-2">
          <FaBox className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Product Description"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Supplier Dropdown */}
        <div className="flex items-center  border border-gray-200 focus:border-orange-300 rounded-md px-3 py-2 justify-between">
          <span className="text-sm text-gray-500">Supplier Name</span>
          <IoMdArrowDropdown className="text-gray-400" />
        </div>

        {/* Phone Number */}
        <div className="flex items-center  border border-gray-200 focus:border-orange-300 rounded-md px-3 py-2">
          <FaBox className="text-gray-400 mr-2" />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full outline-none  text-sm"
          />
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between mt-5 gap-3">
        <button className="w-full border border-orange-300 text-orange-400 rounded-md py-2 font-semibold">
          Reset
        </button>
        <button className="w-full bg-[#F89320] text-white rounded-md py-2 font-semibold hover:bg-orange-300 transition">
          Apply
        </button>
      </div>
    </div>
  );
};

export default AddInventoryForm;
