import React, { useState } from "react";
import {
  Grid3X3,
  List,
  Search,
  Filter,
  ChevronDown,
  ChevronRight,
  Plus,
  Eye,
  Edit,
  Trash2,
  Package,
} from "lucide-react";

const InventoryList = () => {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [selectedCategories, setSelectedCategories] = useState(["Mobile"]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCategoryFilter, setShowCategoryFilter] = useState(true);
  const [showBrandFilter, setShowBrandFilter] = useState(true);
  const [showPriceFilter, setShowPriceFilter] = useState(true);
  const [showColorFilter, setShowColorFilter] = useState(true);

  // Sample inventory data
  const inventoryItems = [
    {
      id: 1,
      name: "Motorola Edge 50 Pro 5G with 125W Charger",
      category: "Mobile",
      brand: "Motorola",
      price: 31500,
      stock: 200,
      color: "Teal",
      image:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300",
      status: "In Stock",
    },
    {
      id: 2,
      name: "Motorola Edge 50 Pro 5G with 125W Charger",
      category: "Mobile",
      brand: "Motorola",
      price: 31500,
      stock: 200,
      color: "Black",
      image:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300",
      status: "In Stock",
    },
    {
      id: 3,
      name: "Samsung Galaxy S24 Ultra",
      category: "Mobile",
      brand: "Samsung",
      price: 45000,
      stock: 150,
      color: "Purple",
      image:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300",
      status: "In Stock",
    },
    {
      id: 4,
      name: "iPhone 15 Pro Max",
      category: "Mobile",
      brand: "Apple",
      price: 48000,
      stock: 100,
      color: "Blue",
      image:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300",
      status: "In Stock",
    },
    {
      id: 5,
      name: "Sony WH-1000XM5 Headphones",
      category: "Headphone",
      brand: "Sony",
      price: 25000,
      stock: 75,
      color: "Black",
      image:
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300",
      status: "In Stock",
    },
    {
      id: 6,
      name: "MacBook Pro 16-inch",
      category: "Laptop",
      brand: "Apple",
      price: 120000,
      stock: 25,
      color: "Silver",
      image:
        "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300",
      status: "Low Stock",
    },
    {
      id: 7,
      name: "Dell XPS 13",
      category: "Laptop",
      brand: "Dell",
      price: 85000,
      stock: 50,
      color: "Black",
      image:
        "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300",
      status: "In Stock",
    },
    {
      id: 8,
      name: "iPad Pro 12.9-inch",
      category: "Tablet",
      brand: "Apple",
      price: 65000,
      stock: 40,
      color: "Space Gray",
      image:
        "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=300",
      status: "In Stock",
    },
  ];

  const categories = [
    "Mobile",
    "Headphone",
    "Laptop",
    "Tablet",
    "Watch",
    "Speaker",
    "Charger",
  ];
  const brands = [
    "Motorola",
    "Samsung",
    "Apple",
    "Sony",
    "Dell",
    "OnePlus",
    "Xiaomi",
  ];
  const colors = [
    "Black",
    "White",
    "Blue",
    "Red",
    "Green",
    "Purple",
    "Teal",
    "Silver",
    "Space Gray",
  ];

  // Filter logic
  const filteredItems = inventoryItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category);
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(item.brand);
    const matchesPrice =
      item.price >= priceRange[0] && item.price <= priceRange[1];
    const matchesColor =
      selectedColors.length === 0 || selectedColors.includes(item.color);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesBrand &&
      matchesPrice &&
      matchesColor
    );
  });

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const GridView = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className="relative">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 right-2">
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  item.status === "In Stock"
                    ? "bg-green-100 text-green-800"
                    : "bg-orange-100 text-orange-800"
                }`}
              >
                {item.status}
              </span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-sm text-gray-800 mb-2 line-clamp-2">
              {item.name}
            </h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-bold text-gray-900">
                ₹{item.price.toLocaleString()}
              </span>
              <span className="text-sm text-gray-500">Qty: {item.stock}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">
                {item.brand} • {item.color}
              </span>
              <div className="flex gap-1">
                <button className="p-1 text-gray-400 hover:text-blue-600">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-1 text-gray-400 hover:text-green-600">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-1 text-gray-400 hover:text-red-600">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const ListView = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Brand
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-lg object-cover"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900 max-w-xs truncate">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-500">{item.color}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.category}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.brand}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  ₹{item.price.toLocaleString()}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.stock}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      item.status === "In Stock"
                        ? "bg-green-100 text-green-800"
                        : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-900">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex gap-6">
        {/* Sidebar Filters */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <h2 className="font-semibold text-gray-800">Filter</h2>
            </div>

            {/* Categories Filter */}
            <div className="mb-6">
              <button
                onClick={() => setShowCategoryFilter(!showCategoryFilter)}
                className="flex items-center justify-between w-full text-left font-medium text-gray-700 mb-3"
              >
                Categories
                {showCategoryFilter ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {showCategoryFilter && (
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        {category}
                      </span>
                    </label>
                  ))}
                  <button className="text-sm text-orange-600 hover:text-orange-700">
                    View More
                  </button>
                </div>
              )}
            </div>

            {/* Brands Filter */}
            <div className="mb-6">
              <button
                onClick={() => setShowBrandFilter(!showBrandFilter)}
                className="flex items-center justify-between w-full text-left font-medium text-gray-700 mb-3"
              >
                Brands
                {showBrandFilter ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {showBrandFilter && (
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        {brand}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <button
                onClick={() => setShowPriceFilter(!showPriceFilter)}
                className="flex items-center justify-between w-full text-left font-medium text-gray-700 mb-3"
              >
                Price Range
                {showPriceFilter ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {showPriceFilter && (
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([
                          parseInt(e.target.value) || 0,
                          priceRange[1],
                        ])
                      }
                      className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-orange-500 focus:border-orange-500"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([
                          priceRange[0],
                          parseInt(e.target.value) || 50000,
                        ])
                      }
                      className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <button className="w-full bg-orange-600 text-white py-2 px-4 rounded text-sm hover:bg-orange-700">
                    Apply
                  </button>
                </div>
              )}
            </div>

            {/* Colors Filter */}
            <div className="mb-6">
              <button
                onClick={() => setShowColorFilter(!showColorFilter)}
                className="flex items-center justify-between w-full text-left font-medium text-gray-700 mb-3"
              >
                Colors
                {showColorFilter ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {showColorFilter && (
                <div className="space-y-2">
                  {colors.map((color) => (
                    <label key={color} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedColors.includes(color)}
                        onChange={() => handleColorChange(color)}
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        {color}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Package className="w-6 h-6 text-gray-600" />
                <h1 className="text-xl font-bold text-gray-800">Inventory</h1>
              </div>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Inventory
              </button>
            </div>
          </div>

          {/* Search and View Toggle */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search inventory..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300"
                />
              </div>
              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg ${
                    viewMode === "grid"
                      ? "bg-orange-100 text-orange-600"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg ${
                    viewMode === "list"
                      ? "bg-orange-100 text-orange-600"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              Showing {filteredItems.length} of {inventoryItems.length} items
            </p>
          </div>

          {/* Content */}
          {viewMode === "grid" ? <GridView /> : <ListView />}

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
              <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No items found
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters or search terms
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InventoryList;
