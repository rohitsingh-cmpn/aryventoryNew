import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";

import {
  Home,
  Grid3X3,
  Truck,
  ShoppingBag,
  ShoppingCart,
  FileText,
  RotateCcw,
  Package,
  Camera,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  FilterIcon,
  User,
  Search,
  Plus,
} from "lucide-react";
import { useMemo } from "react";
import AddInventory from "./AddInventory";

export default function DeliveryStatus() {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    brands: false,
    priceRange: false,
    colors: false,
  });

  const [selectedCategory, setSelectedCategory] = useState("Mobile");

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState({
    min: "",
    max: "",
    slider: 500,
  });
  const [searchTerm, setSearchTerm] = useState("");

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
    setSelectedCategory("Mobile");
    setSelectedBrands([]);
    setSelectedColors([]);
    setPriceRange({ min: "", max: "", slider: 500 });
    setSearchTerm("");
  };

  const applyFilters = () => { 
    console.log("Applied filters:", {
      category: selectedCategory,
      brands: selectedBrands,
      colors: selectedColors,
      priceRange: priceRange,
      searchTerm: searchTerm,
    });
    // Here you would filter the products based on the selected filters
  };

  const categories = [
    "Mobile",
    "Headset",
    "Charger",
    "Power Bank",
    "Mobile Cover",
  ];
  const brands = ["Apple", "Samsung", "Sony", "JBL", "Anker", "OnePlus"];
  const colors = ["Black", "White", "Blue", "Red", "Silver", "Gold"];

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Motorola Edge 50 Pro 5G with 125W Charger",
      price: "₹150",
      originalPrice: "₹200",
      quantity: 200,
      image: "/api/placeholder/120/150",
      category: "Mobile",
      brand: "Motorola",
      color: "Black",
    },
    {
      id: 2,
      name: "Apple iPhone 14 Pro Max",
      price: "₹1200",
      originalPrice: "₹1400",
      quantity: 100,
      image: "/api/placeholder/120/150",
      category: "Mobile",
      brand: "Apple",
      color: "White",
    },
    {
      id: 3,
      name: "OnePlus Nord CE 3",
      price: "₹300",
      originalPrice: "₹400",
      quantity: 180,
      image: "/api/placeholder/120/150",
      category: "Mobile",
      brand: "OnePlus",
      color: "Blue",
    },
    {
      id: 4,
      name: "Samsung Galaxy M14",
      price: "₹280",
      originalPrice: "₹350",
      quantity: 210,
      image: "/api/placeholder/120/150",
      category: "Mobile",
      brand: "Samsung",
      color: "Black",
    },
    {
      id: 5,
      name: "Sony WH-1000XM4 Headphones",
      price: "₹800",
      originalPrice: "₹1000",
      quantity: 70,
      image: "/api/placeholder/120/150",
      category: "Headset",
      brand: "Sony",
      color: "Silver",
    },
    {
      id: 6,
      name: "JBL TUNE 510BT Wireless Headset",
      price: "₹350",
      originalPrice: "₹500",
      quantity: 130,
      image: "/api/placeholder/120/150",
      category: "Headset",
      brand: "JBL",
      color: "Red",
    },
    {
      id: 7,
      name: "Samsung Fast Charger 25W",
      price: "₹180",
      originalPrice: "₹250",
      quantity: 300,
      image: "/api/placeholder/120/150",
      category: "Charger",
      brand: "Samsung",
      color: "White",
    },
    {
      id: 8,
      name: "Apple MagSafe Wireless Charger",
      price: "₹1200",
      originalPrice: "₹1500",
      quantity: 90,
      image: "/api/placeholder/120/150",
      category: "Charger",
      brand: "Apple",
      color: "White",
    },
    {
      id: 9,
      name: "Anker Nano II 45W USB-C Charger",
      price: "₹950",
      originalPrice: "₹1100",
      quantity: 80,
      image: "/api/placeholder/120/150",
      category: "Charger",
      brand: "Anker",
      color: "Black",
    },
    {
      id: 10,
      name: "Realme 10000mAh Power Bank",
      price: "₹600",
      originalPrice: "₹750",
      quantity: 150,
      image: "/api/placeholder/120/150",
      category: "Power Bank",
      brand: "Realme",
      color: "Blue",
    },
    {
      id: 11,
      name: "Mi 20000mAh Power Bank",
      price: "₹900",
      originalPrice: "₹1100",
      quantity: 110,
      image: "/api/placeholder/120/150",
      category: "Power Bank",
      brand: "Mi",
      color: "Black",
    },
    {
      id: 12,
      name: "OnePlus Power Bank 10000mAh",
      price: "₹700",
      originalPrice: "₹850",
      quantity: 140,
      image: "/api/placeholder/120/150",
      category: "Power Bank",
      brand: "OnePlus",
      color: "Red",
    },
    {
      id: 13,
      name: "Spigen Rugged Armor Mobile Cover",
      price: "₹400",
      originalPrice: "₹500",
      quantity: 250,
      image: "/api/placeholder/120/150",
      category: "Mobile Cover",
      brand: "Spigen",
      color: "Black",
    },
    {
      id: 14,
      name: "Apple Silicone Case iPhone 14",
      price: "₹600",
      originalPrice: "₹700",
      quantity: 120,
      image: "/api/placeholder/120/150",
      category: "Mobile Cover",
      brand: "Apple",
      color: "Blue",
    },
    {
      id: 15,
      name: "OnePlus Sandstone Case",
      price: "₹300",
      originalPrice: "₹400",
      quantity: 160,
      image: "/api/placeholder/120/150",
      category: "Mobile Cover",
      brand: "OnePlus",
      color: "Red",
    },
    {
      id: 16,
      name: "Samsung Clear View Cover",
      price: "₹500",
      originalPrice: "₹650",
      quantity: 110,
      image: "/api/placeholder/120/150",
      category: "Mobile Cover",
      brand: "Samsung",
      color: "Silver",
    },
    {
      id: 17,
      name: "JBL GO 3 Portable Speaker",
      price: "₹750",
      originalPrice: "₹900",
      quantity: 90,
      image: "/api/placeholder/120/150",
      category: "Headset",
      brand: "JBL",
      color: "Blue",
    },
    {
      id: 18,
      name: "Anker PowerCore Slim 10000",
      price: "₹850",
      originalPrice: "₹1000",
      quantity: 100,
      image: "/api/placeholder/120/150",
      category: "Power Bank",
      brand: "Anker",
      color: "White",
    },
    {
      id: 19,
      name: "Sony Wireless Charging Pad",
      price: "₹950",
      originalPrice: "₹1100",
      quantity: 75,
      image: "/api/placeholder/120/150",
      category: "Charger",
      brand: "Sony",
      color: "Gold",
    },
    {
      id: 20,
      name: "Mi Transparent Mobile Cover",
      price: "₹200",
      originalPrice: "₹300",
      quantity: 180,
      image: "/api/placeholder/120/150",
      category: "Mobile Cover",
      brand: "Mi",
      color: "Clear",
    },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;
      const matchesBrand =
        selectedBrands.length > 0
          ? selectedBrands.includes(product.brand)
          : true;
      const matchesColor =
        selectedColors.length > 0
          ? selectedColors.includes(product.color)
          : true;

      const price = parseFloat(product.price.replace(/[^\d]/g, ""));
      const min = parseFloat(priceRange.min) || 0;
      const max = parseFloat(priceRange.max) || Infinity;
      const matchesPrice = price >= min && price <= max;

      const matchesSearch = searchTerm
        ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      return (
        matchesCategory &&
        matchesBrand &&
        matchesColor &&
        matchesPrice &&
        matchesSearch
      );
    });
  }, [
    products,
    selectedCategory,
    selectedBrands,
    selectedColors,
    priceRange,
    searchTerm,
  ]);
  const navigate = useNavigate();
  const [addInventory, setAddInventory] = useState(false);

  return (
    <div className="h-[calc(100vh-64px)]  flex flex-col bg-black-50">
      {/* Fixed Navbar */}

      {addInventory && (
        <div
          className="z-9999 fixed backdrop-blur-sm bg-black/30 bg-opacity-50 top-0 right-0 h-full w-full flex justify-end rounded-r-2xl"
          onClick={() => setAddInventory(false)}
        >
          <div
            className="h-full w-[100%] lg:w-[50%] xl:w-[40%]"
            onClick={(e) => e.stopPropagation()}
          >
            <AddInventory
              setAddInventory={setAddInventory}
              addInventory={addInventory}
            />
          </div>
        </div>
      )}

      {/* Body Layout */}
      <div className="flex flex-1  overflow-hidden">
        {/* Sidebar Filter Section (fixed) */}
        <div className="w-[20%] min-w-[250px] bg-white border-r border-gray-200 h-[calc(100vh-58px)] sticky top-16 flex flex-col">
          {/* Scrollable Filter Sections */}
          <div className="flex-1 overflow-y-auto p-4">
            <h2 className="text-2xl font-medium text-gray-800">Filters</h2>
            <div className="border-b p-2 border-gray-200 mb-3" />

            {/* Categories Section */}
            <div>
              {" "}
              {/* Categories Section */}
              <div className="mb-8">
                <button
                  onClick={() => toggleSection("categories")}
                  className="flex items-center justify-between w-full mb-4"
                >
                  <h3 className="text-base font-medium text-gray-900">
                    Categories
                  </h3>
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
              {/* Brands Section */}
              <div className="mb-8">
                <button
                  onClick={() => toggleSection("brands")}
                  className="flex items-center justify-between w-full mb-4"
                >
                  <h3 className="text-base font-medium text-gray-900">
                    Brands
                  </h3>
                  {expandedSections.brands ? (
                    <ChevronUp size={16} className="text-gray-400" />
                  ) : (
                    <ChevronDown size={16} className="text-gray-400" />
                  )}
                </button>
                {expandedSections.brands && (
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <label
                        key={brand}
                        className="flex items-center space-x-3"
                      >
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
              {/* Colors Section */}
              <div className="mb-8">
                <button
                  onClick={() => toggleSection("colors")}
                  className="flex items-center justify-between w-full mb-4"
                >
                  <h3 className="text-base font-medium text-gray-900">
                    Colors
                  </h3>
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
              {/* Price Range Section */}
              <div className="mb-8">
                <button
                  onClick={() => toggleSection("priceRange")}
                  className="flex items-center justify-between w-full mb-4"
                >
                  <h3 className="text-base font-medium text-gray-900">
                    Price Range
                  </h3>
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
            </div>
          </div>

          {/* Fixed Bottom Buttons */}
          <div className="border-t border-gray-200 p-4">
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

        {/* Scrollable Main Content */}
        <div className="flex-1  bg-gray-50">
          {/* Sticky Header */}
          <div className=" sticky top-0 z-20 bg-white border-b border-gray-200 p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Title */}
              <h1 className="text-2xl font-semibold text-gray-900">
                Inventory
              </h1>

              {/* Right-side Controls */}
              <div className="flex flex-wrap items-center gap-4">
                {/* Search */}
                <div className="relative flex-1 w-auto">
                  <Search
                    size={20}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F89320] focus:border-[#F89320] outline-none"
                  />
                </div>
                {/* handle Mobile Filter Toggle */}
                <div className="lg:hidden  justify-end">
                  <button
                    onClick={() => console.log("Filter clicked")}
                    className="flex items-center bg-[#f89320] hover:bg-[#e88418] text-white rounded-lg p-2 transition-all duration-200"
                  >
                    <FilterIcon className="w-4 h-4 mr-2" />
                    <div>Filter</div>
                  </button>
                </div>
                {/* Add Inventory Button */}
                <button
                  className="flex items-center space-x-2 px-4 py-2 bg-[#F89320] text-white rounded-lg hover:bg-orange-300 transition-colors whitespace-nowrap"
                  onClick={() => {
                    setAddInventory(true);
                  }}
                >
                  <Plus size={20} />
                  <span>Add Inventory</span>
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="p-6  overflow-y-auto max-h-[calc(100vh-200px)] lg:max-h-[calc(100vh-200px)]">
            <div className="grid grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
                >
                  <div className="relative mb-4">
                    <div className="w-full h-40 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                      <div className="w-20 h-28 bg-white rounded-lg shadow-lg flex items-center justify-center">
                        <div className="w-16 h-24 bg-gradient-to-b from-orange-400 to-orange-300 rounded" />
                      </div>
                    </div>
                    <button className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <ChevronDown size={14} className="text-gray-600" />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600 font-semibold">
                        {product.price}
                      </span>
                      <span className="text-gray-400 line-through text-sm">
                        {product.originalPrice}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Quantity</span>
                      <span className="text-sm font-medium text-gray-900">
                        {product.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
