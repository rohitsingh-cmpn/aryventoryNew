import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const CustomFilter = ({
  categories = ["Mobile", "Headset", "Charger", "Power Bank", "Mobile Cover"],
  brands = ["Apple", "Samsung", "Sony", "JBL", "Anker", "OnePlus"],
  colors = ["Black", "White", "Blue", "Red", "Silver", "Gold"],
  onApply,
  onReset,
}) => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    brands: true,
    priceRange: true,
    colors: true,
  });

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "", slider: 0 });
  const [selectedColors, setSelectedColors] = useState([]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedBrands([]);
    setPriceRange({ min: "", max: "", slider: 0 });
    setSelectedColors([]);
    onReset && onReset();
  };

  const applyFilters = () => {
    onApply &&
      onApply({
        category: selectedCategory,
        brands: selectedBrands,
        price: priceRange,
        colors: selectedColors,
      });
  };

  return (
    <div className="w-[20%] min-w-[250px] bg-white border-r border-gray-200 p-4 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto">
      <div className="p-2">
        <h2 className="text-2xl font-medium text-gray-800">Filters</h2>
        <div className="border-b border-gray-200 mb-3" />

        {/* Categories */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection("categories")}
            className="flex items-center justify-between w-full mb-4"
          >
            <h3 className="text-base font-medium text-gray-900">Categories</h3>
            {expandedSections.categories ? (
              <ChevronUp size={16} className="text-gray-400" />
            ) : (
              <ChevronDown size={16} className="text-gray-400" />
            )}
          </button>
          {expandedSections.categories && (
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-[#F89320] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <button className="text-sm text-gray-600 hover:text-gray-800 font-medium">
                View More
              </button>
            </div>
          )}
        </div>

        {/* Brands */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection("brands")}
            className="flex items-center justify-between w-full mb-4"
          >
            <h3 className="text-base font-medium text-gray-900">Brands</h3>
            {expandedSections.brands ? (
              <ChevronUp size={16} className="text-gray-400" />
            ) : (
              <ChevronDown size={16} className="text-gray-400" />
            )}
          </button>
          {expandedSections.brands && (
            <div className="space-y-2">
              {brands.map((brand) => (
                <label key={brand} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="w-4 h-4 text-[#F89320] border-gray-300 rounded focus:ring-orange-300"
                  />
                  <span className="text-sm text-gray-700">{brand}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price Range */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection("priceRange")}
            className="flex items-center justify-between w-full mb-4"
          >
            <h3 className="text-base font-medium text-gray-900">Price Range</h3>
            {expandedSections.priceRange ? (
              <ChevronUp size={16} className="text-gray-400" />
            ) : (
              <ChevronDown size={16} className="text-gray-400" />
            )}
          </button>
          {expandedSections.priceRange && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange.min}
                  onChange={(e) =>
                    setPriceRange((prev) => ({
                      ...prev,
                      min: e.target.value,
                    }))
                  }
                  className="w-20 px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
                <span className="text-gray-400">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange.max}
                  onChange={(e) =>
                    setPriceRange((prev) => ({
                      ...prev,
                      max: e.target.value,
                    }))
                  }
                  className="w-20 px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange.slider}
                onChange={(e) =>
                  setPriceRange((prev) => ({
                    ...prev,
                    slider: e.target.value,
                  }))
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          )}
        </div>

        {/* Colors */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection("colors")}
            className="flex items-center justify-between w-full mb-4"
          >
            <h3 className="text-base font-medium text-gray-900">Colors</h3>
            {expandedSections.colors ? (
              <ChevronUp size={16} className="text-gray-400" />
            ) : (
              <ChevronDown size={16} className="text-gray-400" />
            )}
          </button>
          {expandedSections.colors && (
            <div className="flex flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => toggleColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedColors.includes(color)
                      ? "border-[#F89320] ring-2 ring-orange-200"
                      : "border-gray-300 hover:border-gray-400"
                  } ${
                    color === "Black"
                      ? "bg-black"
                      : color === "White"
                      ? "bg-white"
                      : color === "Blue"
                      ? "bg-blue-500"
                      : color === "Red"
                      ? "bg-red-500"
                      : color === "Silver"
                      ? "bg-gray-400"
                      : "bg-yellow-400"
                  }`}
                  title={color}
                />
              ))}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="mt-8">
          <div className="flex space-x-3">
            <button
              onClick={resetFilters}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
            >
              Reset
            </button>
            <button
              onClick={applyFilters}
              className="flex-1 px-4 py-3 bg-[#F89320] text-white rounded-lg hover:bg-orange-300 font-medium transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomFilter;
