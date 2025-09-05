import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const AddBrandModal = ({ isOpen, onClose, onAddBrand }) => {
  const [brandName, setBrandName] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  // Reset input when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setBrandName("");
      setIsAdded(false);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (brandName.trim()) {
      onAddBrand(brandName.trim());
      setBrandName("");
      setIsAdded(true);

      // Reset the added state after animation
      setTimeout(() => {
        setIsAdded(false);
        onClose();
      }, 1000);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`mb-6 bg-white rounded-lg border border-gray-200 p-4 shadow-sm transition-all duration-100 }`}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-md font-semibold text-gray-800">Add New Brand</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          placeholder="Enter brand name"
          className="flex-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F89320] focus:border-transparent"
          autoFocus
          required
        />
        <div className="flex flex-row gap-2 w-full sm:w-auto">
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#F89320] text-white px-4 py-2 rounded-lg hover:bg-orange-300 transition-colors font-medium"
          >
            Add
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBrandModal;
