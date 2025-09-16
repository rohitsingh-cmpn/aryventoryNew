import React, { useState } from "react";
import { Grid3X3, List, MoreVertical, RotateCcw, Trash2 } from "lucide-react";

const RecyclePage = () => {
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Motorola Edge 50 Pro 5G with 125W Charger",
      image:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      quantity: 9,
      price: 129999,
      deletedDate: "7/4/2025",
    },
    {
      id: "2",
      name: "Samsung Galaxy S24 Ultra",
      image:
        "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      quantity: 5,
      price: 149999,
      deletedDate: "7/5/2025",
    },
    {
      id: "3",
      name: "Apple iPhone 15 Pro Max",
      image:
        "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      quantity: 12,
      price: 159999,
      deletedDate: "7/6/2025",
    },
    {
      id: "4",
      name: "OnePlus 12 5G",
      image:
        "https://images.pexels.com/photos/4042807/pexels-photo-4042807.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      quantity: 7,
      price: 69999,
      deletedDate: "7/7/2025",
    },
    {
      id: "5",
      name: "Google Pixel 9 Pro",
      image:
        "https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      quantity: 8,
      price: 99999,
      deletedDate: "7/8/2025",
    },
    {
      id: "6",
      name: "Xiaomi 14 Ultra",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSefmeg2M5GyAvyMxlbpX_BgIoF0n9lk-gLhk4L6maTY2dbXXBjEjwNsFPyMQZxKNqz8&usqp=CAU",
      quantity: 6,
      price: 79999,
      deletedDate: "7/9/2025",
    },
    {
      id: "7",
      name: "Realme GT Neo 6 Pro",
      image:
        "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      quantity: 15,
      price: 34999,
      deletedDate: "7/10/2025",
    },
    {
      id: "8",
      name: "Oppo Find X7 Pro",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      quantity: 4,
      price: 89999,
      deletedDate: "7/11/2025",
    },
    {
      id: "9",
      name: "Vivo X200 Pro",
      image:
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      quantity: 10,
      price: 59999,
      deletedDate: "7/12/2025",
    },
    {
      id: "10",
      name: "Asus ROG Phone 8",
      image:
        "https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      quantity: 3,
      price: 79999,
      deletedDate: "7/13/2025",
    },
  ]);



  const [selectedProducts, setSelectedProducts] = useState(new Set());
  const [viewMode, setViewMode] = useState("list");
  const [searchTerm, setSearchTerm] = useState("");

  const [message, setMessage] = useState(""); // toast/snackbar message
  const [confirmDelete, setConfirmDelete] = useState(false); // confirmation modal

  // Filtering by search
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectAll = () => {
    if (selectedProducts.size === filteredProducts.length) {
      setSelectedProducts(new Set());
    } else {
      setSelectedProducts(new Set(filteredProducts.map((p) => p.id)));
    }
  };

  const handleProductSelect = (id) => {
    const newSelected = new Set(selectedProducts);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedProducts(newSelected);
  };

  // ✅ Restore selected products
  const handleRestoreSelected = () => {
    setProducts((prev) => prev.filter((p) => !selectedProducts.has(p.id)));
    setMessage(`(${selectedProducts.size}) products restored ✅`);
    setSelectedProducts(new Set());
    setTimeout(() => setMessage(""), 3000);
  };

  // ❌ Delete selected (open modal)
  const handleDeleteSelected = () => {
    setConfirmDelete(true);
  };

  // Confirm delete
  const handleConfirmDelete = () => {
    setProducts((prev) => prev.filter((p) => !selectedProducts.has(p.id)));
    setMessage(`(${selectedProducts.size}) products permanently deleted 🗑️`);
    setSelectedProducts(new Set());
    setConfirmDelete(false);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
  };

  const formatPrice = (price) => price.toLocaleString();

  const isAllSelected =
    selectedProducts.size === filteredProducts.length &&
    filteredProducts.length > 0;
  const isPartiallySelected =
    selectedProducts.size > 0 &&
    selectedProducts.size < filteredProducts.length;

  return (
    <div className="flex-1 bg-gray-50 ">
      {/* Header */}
      <div className="flex px-3 py-3 items-center justify-between">
        <h2 className="text-xl font-medium text-gray-900">Recycled Products</h2>
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-md transition-colors ${
              viewMode === "grid"
                ? "bg-white text-orange-400 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Grid3X3 className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-md transition-colors ${
              viewMode === "list"
                ? "bg-white text-orange-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* List View */}
      {viewMode === "list" && (
        <div className=" rounded-lg   border border-gray-200 overflow-hidden">
          {/* Header */}
          {/* Table Header */}{" "}
          <div className=" px-4 py-3 border-b border-gray-200 hidden sm:grid grid-cols-7 gap-4 items-center text-sm font-medium text-gray-700">
            {" "}
            <div className="col-span-1 sm:ml-6 xl:ml-12">Product</div>{" "}
            <div className="col-span-3 pl-4">Product Name</div>{" "}
            <div className="col-span-1">Quantity</div>{" "}
            <div className="col-span-1">Price</div>{" "}
            <div className="col-span-1 whitespace-nowrap">Deleted Date</div>{" "}
          </div>
          {/* Bulk Actions */}
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
                {isAllSelected ? "Unselect All" : "Select All"}
              </span>
              <span className="text-gray-700 font-medium select-none">
                {selectedProducts.size} Selected
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <button
                className="flex items-center gap-1 px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-400 transition"
                onClick={handleRestoreSelected}
                disabled={selectedProducts.size === 0}
              >
                <RotateCcw size={16} />
                Restore
              </button>
              <button
                className="flex items-center gap-1 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 transition"
                onClick={handleDeleteSelected}
                disabled={selectedProducts.size === 0}
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
          {/* Table Body */}
          <div className="divide-y bg-white divide-gray-200 gap-2">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductSelect(product.id)}
                className={`px-4 py-4 sm:grid grid-cols-7 gap-4  cursor-pointer transition-colors 
        ${
          selectedProducts.has(product.id) ? "bg-orange-50" : "hover:bg-gray-50"
        }`}
              >
                {/* Checkbox + Image */}
                <div className="flex items-center gap-3 col-span-1">
                  <input
                    type="checkbox"
                    checked={selectedProducts.has(product.id)}
                    onChange={() => handleProductSelect(product.id)}
                    onClick={(e) => e.stopPropagation()} // prevent double toggle
                    className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
                  />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="col-span-3 pl-4">
                  <p className="text-gray-900 font-medium">{product.name}</p>
                </div>
                <div className="col-span-1">{product.quantity}</div>
                <div className="col-span-1">{formatPrice(product.price)}</div>
                <div className="col-span-1 text-gray-600">
                  {product.deletedDate}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* // Grid View */}
      {viewMode === "grid" && (
        <div>
          <div className="flex items-center pl-2 justify-between ">
            <div className="flex items-center pl-2 gap-4">
              <div className="flex items-center  gap-2">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  ref={(input) => {
                    if (input) input.indeterminate = isPartiallySelected;
                  }}
                  onChange={handleSelectAll}
                  className="w-5 h-5 text-orange-400 border-gray-300 rounded focus:ring-orange-500"
                />
                <span className="text-lg font-medium text-gray-700">
                  {isAllSelected ? "Unselect All" : "Select All"}
                </span>
              </div>
              <span className="text-lg font-medium text-gray-700">
                {selectedProducts.size} Selected
              </span>
            </div>
            {/* Buttons */}
            <div className="flex gap-2">
              <button
                className="flex items-center gap-1 px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-400 transition"
                onClick={handleRestoreSelected}
                disabled={selectedProducts.size === 0}
              >
                <RotateCcw size={16} />
                Restore
              </button>
              <button
                className="flex items-center gap-1 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 transition"
                onClick={handleDeleteSelected}
                disabled={selectedProducts.size === 0}
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>

          <div className="grid p-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductSelect(product.id)} // ✅ Make the whole card toggle selection
                className={`bg-white rounded-lg shadow-sm border overflow-hidden transition-shadow cursor-pointer 
        ${
          selectedProducts.has(product.id)
            ? "border-orange-500 shadow-md bg-orange-50"
            : "border-gray-200 hover:shadow-md"
        }`}
              >
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <input
                      type="checkbox"
                      checked={selectedProducts.has(product.id)}
                      onChange={() => handleProductSelect(product.id)}
                      onClick={(e) => e.stopPropagation()} // ✅ Prevent double toggle if clicking checkbox
                      className="w-6 h-6 text-orange-600 border-gray-300 rounded-full focus:ring-orange-500"
                    />
                    <button
                      onClick={(e) => e.stopPropagation()} // ✅ Prevent triggering card select when clicking menu button
                      className="text-gray-400 hover:text-gray-600"
                    >
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
                      <span className="text-gray-900">{product.quantity}</span>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* ✅ Toast message */}
      {message && (
        <div className="fixed bottom-20 right-10 bg-white text-gray-700 px-4 text-xl py-2 border-gray-100 rounded-lg shadow-lg">
          {message}
        </div>
      )}
      {/* ❌ Delete Confirmation Modal */}
      {confirmDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg text-gray-700 font-semibold mb-4">
              Are you sure you want to delete {selectedProducts.size}{" "}
              product(s)?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded"
              >
                Yes, Delete
              </button>
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 bg-gray-400 hover:bg-gray-300 text-white rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecyclePage;









