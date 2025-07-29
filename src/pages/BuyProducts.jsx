// import React, { useState } from 'react';
// import Navbar from "../components/Navbar";
// import { ChevronDown, Search, ShoppingCart, ChevronRight } from 'lucide-react';
// import Fliter from '../components/Fliter';

// const BuyProducts = () => {
  
//   const products = [
//     {
//       id: 1,
//       name: 'Motorola Edge 50 Pro 5G with 125W Charger...',
//       price: '₹150',
//       image: '/api/placeholder/200/200',
//       rating: 4.5
//     },
//     {
//       id: 2,
//       name: 'Motorola Edge 50 Pro 5G with 125W Charger...',
//       price: '₹150',
//       image: '/api/placeholder/200/200',
//       rating: 4.5
//     },
//     {
//       id: 3,
//       name: 'Motorola Edge 50 Pro 5G with 125W Charger...',
//       price: '₹150',
//       image: '/api/placeholder/200/200',
//       rating: 4.5
//     },
//     {
//       id: 4,
//       name: 'Motorola Edge 50 Pro 5G with 125W Charger...',
//       price: '₹150',
//       image: '/api/placeholder/200/200',
//       rating: 4.5
//     },
//     {
//       id: 5,
//       name: 'Motorola Edge 50 Pro 5G with 125W Charger...',
//       price: '₹150',
//       image: '/api/placeholder/200/200',
//       rating: 4.5
//     },
//     {
//       id: 6,
//       name: 'Motorola Edge 50 Pro 5G with 125W Charger...',
//       price: '₹150',
//       image: '/api/placeholder/200/200',
//       rating: 4.5
//     },
//     {
//       id: 7,
//       name: 'Motorola Edge 50 Pro 5G with 125W Charger...',
//       price: '₹150',
//       image: '/api/placeholder/200/200',
//       rating: 4.5
//     },
//     {
//       id: 8,
//       name: 'Motorola Edge 50 Pro 5G with 125W Charger...',
//       price: '₹150',
//       image: '/api/placeholder/200/200',
//       rating: 4.5
//     }
//   ];
//   const categories = [
//     "Mobile",
//     "Headset",
//     "Charger",
//     "Power Bank",
//     "Mobile Cover",
//   ];
 

//   return (
//     <div className="flex bg-gray-50 min-h-screen">
         
//       {/* Filter Section */}
// <Fliter categories = {categories}/>
//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="relative flex-1 max-w-md">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//             />
//           </div>
//           <button className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors ml-4">
//             <span>View Cart</span>
//             <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-4 gap-6">
//           {products.map(product => (
//             <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
//               <div className="relative mb-4">
//                 <div className="w-full h-48 bg-gradient-to-br from-teal-400 to-orange-400 rounded-lg flex items-center justify-center">
//                   <div className="w-32 h-40 bg-black rounded-lg relative overflow-hidden">
//                     <div className="absolute inset-2 bg-gradient-to-br from-blue-400 via-teal-300 to-orange-300 rounded"></div>
//                   </div>
//                 </div>
//                 <button className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
//                   ♡
//                 </button>
//               </div>
              
//               <h3 className="text-sm text-gray-800 mb-2 line-clamp-2 leading-tight">
//                 {product.name}
//               </h3>
              
//               <div className="flex items-center justify-between">
//                 <span className="text-lg font-semibold text-gray-900">{product.price}</span>
//                 <button className="bg-orange-500 text-white px-3 py-1 rounded text-sm hover:bg-orange-600 transition-colors">
//                   Add to cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyProducts;