import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const ViewDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state || {};

  const sideItem = [
    { key: "Product Name", value: item?.description || "Unknown" },
    { key: "Price", value: item?.price || "₹1,29,000" },
    { key: "Stock", value: item?.quantity || "35 units" },
    { key: "Barcode", value: "ER0053PR67" },
    { key: "Brand", value: item?.name },
    { key: "Model Number", value: "A3105" },
    { key: "Color", value: "Space Black" },
    { key: "Storage", value: "512 GB" },
    { key: "RAM", value: "8 GB" },
    { key: "Battery Capacity", value: "4500 mAh" },
    { key: "Display Size", value: "6.7 inches" },
    { key: "Camera", value: "48 MP + 12 MP + 12 MP" },
  ];

  if (!item) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="p-6"
      >
        <p>No item selected!</p>
        <Link to="/" className="text-blue-500 underline">
          Back to Cart
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} // start off-screen right
      animate={{ opacity: 1, x: 0 }} // slide into place
      exit={{ opacity: 0, x: -100 }} // slide out left
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-gray-100 p-5 min-h-screen"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow p-4 w-full md:w-1/2 flex items-center justify-center"
        >
          <img
            src={item.image}
            alt={item.description}
            className="min-w-[150px] min-h-[250px] max-w-[550px] object-contain rounded"
          />
        </motion.div>

        {/* Details Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow p-4 w-full md:w-1/2"
        >
          <div className="space-y-4 text-sm text-gray-700">
            {sideItem.map((detail, index) => (
              <div key={index}>
                <div className="grid grid-cols-2 py-2">
                  <div className="font-medium text-left">{detail.key}</div>
                  <div className="text-right">{detail.value}</div>
                </div>
                <hr className="border-t border-gray-200" />
              </div>
            ))}

            <div className="grid grid-cols-2 py-2">
              <div className="font-medium text-left">Contact</div>
              <div className="text-right">{item.contact}</div>
            </div>
          </div>

          {/* Back button */}
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate(-1)}
              className="bg-orange-400 px-4 text-white  py-2 rounded hover:bg-orange-300 transition"
            >
              Back to Cart
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ViewDetails;
