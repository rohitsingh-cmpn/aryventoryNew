import React, { useState } from "react";
import { Minus, Plus, Trash2, X, MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MyCart = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Samsung",
      description: "Samsung Galaxy S25 Ultra 5G 12gb ram 125W Charger...",
      price: 129999,
      qty: 9,
      image:
        "https://cdn.beebom.com/mobile/samsung-galaxy-s25-ultra-front-and-back-1.png",
    },
    {
      id: 2,
      name: "Xiaomi",
      description: "Xiaomi 14 civi 5G 12gb ram 125W Charger...",
      price: 40999,
      qty: 9,
      image:
        "https://i.gadgets360cdn.com/products/large/Xiaomi-14-Civi-db-709x800-1718178881.jpg",
    },
    {
      id: 3,
      name: "Samsung",
      description: "Samsung Galaxy S25  5G 12gb ram 125W Charger...",
      price: 89999,
      qty: 9,
      image:
        "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/305507_0_l9z9rj.png",
    },
    {
      id: 4,
      name: "Google Pixel 9",
      description: "Google Pixel 9 5G 12gb ram 125W Charger...",
      price: 74999,
      qty: 9,
      image:
        "https://rukminim2.flixcart.com/image/704/844/xif0q/mobile/b/p/t/-original-imahegqhrtpsz7sd.jpeg?q=90",
    },
    {
      id: 5,
      name: "Iqoo",
      description: "Iqoo 5G 12gb ram 125W Charger...",
      price: 54999,
      qty: 9,
      image: "https://m.media-amazon.com/images/I/619lW2YtVhL.jpg",
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const getGrandTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const CartView = () => (
    <div className=" h-[calc(100vh-58px)] w-full p-2 xl:p-5">
      <div className="w-full">
        {/* Left - Back Button */}
        <div className="flex items-center mb-2 lg:mb-4">
          <div>
           <button
              onClick={() => navigate(-1)}
              className="p-1 bg-[#F89320] hover:bg-orange-300 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 ml-3 ">
              Cart Items
            </h1>
          </div>
        </div>

        {/* Desktop Table View - Hidden on mobile */}
        <div className="hidden md:block bg-white rounded-lg border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-13 gap-4 p-4 bg-gray-50 border-b border-gray-200 text-lg">
            <div className="col-span-2 font-medium text-gray-700 ml-3 lg:ml-6">
              Product
            </div>
            <div className="col-span-4 font-medium text-gray-700">
              Product Name
            </div>
            <div className="col-span-2 font-medium text-gray-700 text-center">
              qty
            </div>
            <div className="col-span-2 font-medium text-gray-700 text-center">
              Price
            </div>
            <div className="col-span-3 font-medium text-gray-700 text-center">
              Action
            </div>
          </div>

          {/* Cart Items - Desktop */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-13 gap-4 p-4 border-b border-gray-100 items-center"
            >
              {/* Product Image */}
              <div className="col-span-2 ml-3 lg:ml-6">
                <div className="w-18 h-18 rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              {/* Product Info */}
              <div className="col-span-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {item.name}
                </h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
              {/* qty Controls */}
              <div className="col-span-2 flex items-center justify-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-8 h-8 rounded-full bg-[#F89320] text-white flex items-center justify-center hover:bg-orange-300 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-semibold text-gray-900">
                  {item.qty}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-8 h-8 rounded-full bg-[#F89320] text-white flex items-center justify-center hover:bg-orange-300 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              {/* Price */}
              <div className="col-span-2 text-center">
                <p className="font-semibold text-gray-900">
                  {item.price.toLocaleString("en-IN")}
                </p>
              </div>
              {/* Actions */}
              <div className="col-span-3 flex items-center justify-center space-x-2">
                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 text-white px-3 py-1.5 rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  className="bg-[#F89320] text-white px-4 py-1.5 rounded-lg whitespace-nowrap hover:bg-orange-300 transition-colors"
                  onClick={() => navigate("/view-details", { state: { item } })}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Card View - Hidden on desktop */}
        <div className="md:hidden space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-gray-200 p-4"
            >
              <div className="flex items-start space-x-4">
                {/* Product Image */}
                <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 truncate">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 truncate">
                    {item.description}
                  </p>

                  {/* Price */}
                  <p className="font-semibold text-gray-900 mt-1">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                  {/* qty Controls */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-7 h-7 rounded-full bg-[#F89320] text-white flex items-center justify-center hover:bg-orange-300 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center font-semibold text-gray-900">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-7 h-7 rounded-full bg-[#F89320] text-white flex items-center justify-center hover:bg-orange-300 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="bg-red-500 text-white p-1.5 rounded-lg hover:bg-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button
                        className="bg-[#F89320] text-white px-3 py-1.5 rounded-lg text-sm hover:bg-orange-300 transition-colors"
                        onClick={() =>
                          navigate("/view-details", { state: { item } })
                        }
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Confirm Order Button */}
        <div className="fixed bottom-4 right-4 flex text-white">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#F89320] text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-300 transition-colors text-sm md:text-base"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );

  const OrderView = () => (
    <div className="h-[calc(100vh-58px)]">
      <div className="flex-1 flex-col w-full overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-2 border-b shadow-sm border-gray-200">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-orange-300 bg-[#F89320] cursor-pointer p-1 rounded-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-semibold text-gray-900">Place Order</h2>
          <div className="w-6"></div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Summary Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-1">Summary</h3>
            <div className="space-y-2 max-h-[calc(100vh-280px)] scrollbar-hide overflow-auto bg-gray-50 rounded-md p-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="space-y-2 bg-white rounded-2xl px-4 py-2 border border-gray-100"
                >
                  <div className="flex justify-between">
                    <span className="text-gray-900 font-medium">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>₹{item.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">qty: {item.qty}</span>
                    <span className="font-semibold text-gray-900">
                      Total: ₹{item.price * item.qty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-900">
                Total:
              </span>
              <span className="text-lg font-bold text-gray-700">
                ₹
                {getGrandTotal().toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            onClick={() => {
              alert("Order placed successfully!");
              setIsOpen(false);
            }}
            className="w-full text-lg bg-[#F89320] text-white py-3 rounded-xl font-semibold hover:bg-orange-300 transition-colors"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full relative">
      {/* Main Page Always Visible */}
      <div className="w-full">
        <CartView />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed bg-black/10 inset-0"
          onClick={() => setIsOpen(false)} // close when clicking outside
        />
      )}

      {/* Sliding Drawer */}
      <div
        className={`
          fixed top-14 right-0 h-full 
          w-full sm:w-[35%] sm:min-w-[400px] 
          bg-white z-50 
          transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex-1 h-full w-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <OrderView />
        </div>
      </div>
    </div>
  );
};

export default MyCart;
