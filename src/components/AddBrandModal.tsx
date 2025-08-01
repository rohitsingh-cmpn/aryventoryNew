import React, { useState } from "react";
import { X } from "lucide-react";

const AddBrandModal = ({ isOpen, onClose, onAddBrand }) => {
  const [brandName, setBrandName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (brandName.trim()) {
      onAddBrand(brandName.trim());
      setBrandName("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Add New Brand</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            placeholder="Enter brand name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4"
            autoFocus
            required
          />

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 px-4 bg-orange-400 text-white rounded-lg hover:bg-orange-300"
            >
              Add Brand
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBrandModal;
