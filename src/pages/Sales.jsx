import React from 'react'
import FilterSection from "../components/FilterSection"
const Sales = () => {
  return (
    <div className="bg-yellow-200 h-20 flex flex-row justify-center items-center space-x-4">
      {[
        "bg-amber-600",
        "bg-amber-500",
        "bg-amber-400",
        "bg-amber-600",
        "bg-amber-500",
        "bg-amber-400",
      ].map((bg, index) => (
        <div
          key={index}
          className={`text-3xl ${bg} font-bold px-4 py-1 rounded`}
        >
          Aryventory
        </div>
      ))}
    </div>
  );
}

export default Sales
