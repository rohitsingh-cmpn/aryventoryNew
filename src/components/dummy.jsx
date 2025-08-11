// Inside Page.jsx
import React, { useState } from "react";
export default function Page() {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);

  return (
    <div>
      <select value={category} onChange={handleCategoryChange}>
        <option value="">All</option>
        <option value="shoes1">Shoes</option>
        <option value="shoes2">Inner</option>
        <option value="shoes3">Wears</option>
        <option value="shoes4">Baniyan</option>
      </select>

      <select value={price} onChange={handlePriceChange}>
        <option value="">Any</option>
        <option value="low">Under $50</option>
        <option value="med">Under $500</option>
        <option value="high">Under $5000</option>
      </select>
    </div>
  );
}
