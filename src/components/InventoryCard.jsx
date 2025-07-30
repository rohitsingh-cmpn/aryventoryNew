import React from "react";

const InventoryCard = ({ product }) => (
  <div className="bg-white rounded-xl p-3 shadow hover:shadow-md transition">
    <img
      src={product.image}
      alt={product.name}
      className="w-full rounded-md mb-2"
    />
    <p className="text-sm font-medium mb-1 line-clamp-2">{product.name}</p>
    <p className="text-xs text-gray-500 mb-1">In stock</p>
    <div className="flex justify-between text-sm font-semibold">
      <span>₹{product.price}</span>
      <span>Qty {product.quantity}</span>
    </div>
  </div>
);

export default InventoryCard;
