// import React from 'react'
// import {useState} from 'react'


// const Fliter = (categories) => {
  

//   const brands = ["Motorola", "Samsung", "Apple", "OnePlus"];
//   const colors = ["Black", "White", "Blue", "Red"];

//   const [selectedCategories, setSelectedCategories] = useState(["Mobile"]);
//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [priceRange, setPriceRange] = useState([0, 1000]);
//   const [selectedColors, setSelectedColors] = useState([]);

//   const handleCategoryChange = (category) => {
//     setSelectedCategories((prev) =>
//       prev.includes(category)
//         ? prev.filter((c) => c !== category)
//         : [...prev, category]
//     );
//   };

//   const resetFilters = () => {
//     setSelectedCategories([]);
//     setSelectedBrands([]);
//     setPriceRange([0, 1000]);
//     setSelectedColors([]);
//   };
//   return (
//     <div>
//       <div className="w-80 bg-white p-6 shadow-sm">
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter</h2>

//           {/* Categories */}
//           <div className="mb-6">
//             <div className="flex items-center justify-between mb-3">
//               <h3 className="font-medium text-gray-700">Categories</h3>
//               <ChevronDown className="w-4 h-4 text-gray-500" />
//             </div>
//             <div className="space-y-2">
//               {categories.map((category) => (
//                 <label
//                   key={category}
//                   className="flex items-center space-x-2 cursor-pointer"
//                 >
//                   <input
//                     type="checkbox"
//                     checked={selectedCategories.includes(category)}
//                     onChange={() => handleCategoryChange(category)}
//                     className="w-4 h-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
//                   />
//                   <span
//                     className={`text-sm ${
//                       selectedCategories.includes(category)
//                         ? "text-orange-500 font-medium"
//                         : "text-gray-600"
//                     }`}
//                   >
//                     {category}
//                   </span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* View More */}
//           <button className="text-orange-500 text-sm font-medium mb-6">
//             View More
//           </button>

//           {/* Brands */}
//           <div className="mb-6">
//             <div className="flex items-center justify-between mb-3">
//               <h3 className="font-medium text-gray-700">Brands</h3>
//               <ChevronDown className="w-4 h-4 text-gray-500" />
//             </div>
//           </div>

//           {/* Price Range */}
//           <div className="mb-6">
//             <div className="flex items-center justify-between mb-3">
//               <h3 className="font-medium text-gray-700">Price Range</h3>
//               <ChevronDown className="w-4 h-4 text-gray-500" />
//             </div>
//           </div>

//           {/* Colors */}
//           <div className="mb-8">
//             <div className="flex items-center justify-between mb-3">
//               <h3 className="font-medium text-gray-700">Colors</h3>
//               <ChevronDown className="w-4 h-4 text-gray-500" />
//             </div>
//           </div>

//           {/* Filter Buttons */}
//           <div className="flex space-x-3">
//             <button
//               onClick={resetFilters}
//               className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
//             >
//               Reset
//             </button>
//             <button className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
//               Apply
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Fliter
