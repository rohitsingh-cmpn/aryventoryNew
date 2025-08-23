import React, { useState } from "react";
import {
  Search,
  Grid3X3,
  List,
  MoreVertical,
  Eye,
  RotateCcw,
  Trash2,
} from "lucide-react";

const RecyclePage = () => {
  const [selectedProducts, setSelectedProducts] = useState(new Set());
  const [viewMode, setViewMode] = useState("list");
  const [searchTerm, setSearchTerm] = useState("");

  const recycledProducts = [
    {
      id: "1",
      name: "Motorola Edge 50 Pro 5G with 125W Charger...",
      image:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      quantity: 9,
      price: 129999,
      deletedDate: "7/4/2025",
    },
    {
      id: "2",
      name: "Motorola Edge 50 Pro 5G with 125W Charger...",
      image:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      quantity: 9,
      price: 129999,
      deletedDate: "7/4/2025",
    },
    {
      id: "3",
      name: "Motorola Edge 50 Pro 5G with 125W Charger...",
      image:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      quantity: 9,
      price: 129999,
      deletedDate: "7/4/2025",
    },
    {
      id: "4",
      name: "Motorola Edge 50 Pro 5G with 125W Charger...",
      image:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      quantity: 9,
      price: 129999,
      deletedDate: "7/4/2025",
    },
    {
      id: "5",
      name: "Motorola Edge 50 Pro 5G with 125W Charger...",
      image:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      quantity: 9,
      price: 129999,
      deletedDate: "7/4/2025",
    },
    {
      id: "6",
      name: "Motorola Edge 50 Pro 5G with 125W Charger...",
      image:
        "https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      quantity: 4,
      price: 49999,
      deletedDate: "7/4/2025",
    },
    {
      id: "7",
      name: "Motorola Edge 50 Pro 5G with 125W Charger...",
      image:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      quantity: 3,
      price: 74999,
      deletedDate: "7/4/2025",
    },
    {
      id: "8",
      name: "Motorola Edge 50 Pro 5G with 125W Charger...",
      image:
        "https://etimg.etb2bimg.com/thumb/msid-109346250,imgsize-13206,width-1200,height=627,overlay-ettelecom,resizemode-75/devices/motorola-edge-50-pro-review-ai-powered-phone-for-camera-gaming-enthusiasts.jpg",
      quantity: 10,
      price: 799,
      deletedDate: "7/4/2025",
    },
  ];

  const filteredProducts = recycledProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectAll = () => {
    if (selectedProducts.size === filteredProducts.length) {
      setSelectedProducts(new Set());
    } else {
      setSelectedProducts(new Set(filteredProducts.map((p) => p.id)));
    }
  };

  const handleProductSelect = (productId) => {
    const newSelected = new Set(selectedProducts);
    if (newSelected.has(productId)) {
      newSelected.delete(productId);
    } else {
      newSelected.add(productId);
    }
    setSelectedProducts(newSelected);
  };

  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  const isAllSelected =
    selectedProducts.size === filteredProducts.length &&
    filteredProducts.length > 0;
  const isPartiallySelected =
    selectedProducts.size > 0 &&
    selectedProducts.size < filteredProducts.length;

  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Header */}

      {/* Content */}
      <div>
        {/* header-2 */}
        <div className="flex px-3 py-3 items-center justify-between">
          <h2 className="text-xl font-medium text-gray-900">
            Recycled Products
          </h2>
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-colors ${
                viewMode === "grid"
                  ? "bg-white text-orange-400 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md transition-colors ${
                viewMode === "list"
                  ? "bg-white text-orange-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="">
          {viewMode === "list" ? (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden ">
              {/* Table Header */}
              <div className=" px-4 py-3 border-b border-gray-200 hidden sm:grid grid-cols-8 gap-4 items-center text-sm font-medium text-gray-700">
                <div className="col-span-1 sm:ml-6 xl:ml-12">Product</div>
                <div className="col-span-3 pl-4">Product Name</div>
                <div className="col-span-1">Quantity</div>
                <div className="col-span-1">Price</div>
                <div className="col-span-1 whitespace-nowrap">Deleted Date</div>
                <div></div>
              </div>

              {/* Select All and Selected Count */}
              <div className="flex bg-gray-50 justify-between px-4 py-2 items-center border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    ref={(input) => {
                      if (input) input.indeterminate = isPartiallySelected;
                    }}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
                  />
                  <span className="text-gray-700 font-medium select-none">
                    Select All
                  </span>
                </div>
                <span className="text-gray-500">
                  {selectedProducts.size} Selected
                </span>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200 gap-2">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="px-4 py-4 hover:bg-gray-50 transition-colors sm:grid grid-cols-8 gap-4 items-center"
                  >
                    {/* Product + Checkbox */}
                    <div className="flex items-center gap-3 col-span-1 ">
                      <input
                        type="checkbox"
                        checked={selectedProducts.has(product.id)}
                        onChange={() => handleProductSelect(product.id)}
                        className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400 lg:mr-5"
                      />
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                    </div>

                    {/* Product Name */}
                    <div className="col-span-3 mt-3 sm:mt-0 pl-4">
                      <p className="text-gray-900 font-medium">
                        {product.name}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="col-span-1 ml-4 mt-3 sm:mt-0">
                      <span className="text-gray-900">{product.quantity}</span>
                    </div>

                    {/* Price */}
                    <div className="col-span-1 mt-3 sm:mt-0">
                      <span className="text-gray-900">
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    {/* Deleted Date */}
                    <div className="col-span-1 mt-3 sm:mt-0">
                      <span className="text-gray-600">
                        {product.deletedDate}
                      </span>
                    </div>

                    {/* Button */}
                    <div className="flex gap-2">
                      <button className="flex items-center gap-1 px-3 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                        <RotateCcw size={16} />
                        
                      </button>
                      <button className="flex items-center gap-1 px-3 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                        <Trash2 size={16} />
                       
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Responsive Card Layout for Small Screens */}
            </div>
          ) : (
            // Grid View
            <div>
              <div className="flex items-center pl-2 justify-between mb-2">
                <div className="flex items-center pl-2 gap-4">
                  <div className="flex items-center  gap-2">
                    <input
                      type="checkbox"
                      checked={isAllSelected}
                      ref={(input) => {
                        if (input) input.indeterminate = isPartiallySelected;
                      }}
                      onChange={handleSelectAll}
                      className="w-4 h-4 text-orange-400 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Selected All
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {selectedProducts.size} Selected
                  </span>
                </div>
              </div>

              <div className="grid p-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5">
                {filteredProducts.map((product, key) => (
                  <div
                    key={key}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <input
                          type="checkbox"
                          checked={selectedProducts.has(product.id)}
                          onChange={() => handleProductSelect(product.id)}
                          className="w-6 h-6  text-orange-600 border-gray-300 rounded-full focus:ring-orange-500"
                        />
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex justify-center mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Quantity:</span>
                          <span className="text-gray-900">
                            {product.quantity}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Price:</span>
                          <span className="text-gray-900">
                            {formatPrice(product.price)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Deleted:</span>
                          <span className="text-gray-900">
                            {product.deletedDate}
                          </span>
                        </div>
                      </div>
                      <button className="w-full mt-4 bg-[#F89320] hover:bg-orange-300 text-white py-2 rounded-md text-sm flex items-center justify-center gap-1 transition-colors">
                        <Eye className="w-3 h-3" />
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecyclePage;
