import React, { useState } from "react";

const categories = [
  "Mobile",
  "Headset",
  "Charger",
  "Power Bank",
  "Mobile Cover",
];

const FilterSection = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="w-full md:w-64 bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Filter</h2>

      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-2">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-3 py-1 text-sm rounded-full border ${
                selectedCategory === cat
                  ? "bg-orange-400 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => onCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button className="text-sm text-gray-500">Reset</button>
        <button className="px-4 py-1 bg-orange-400 text-white text-sm rounded-md hover:bg-orange-300">
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
