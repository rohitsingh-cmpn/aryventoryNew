// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function Portfolio() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const fadeInUp = {
//     initial: { opacity: 0, y: 60 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 },
//   };

//   const staggerContainer = {
//     animate: {
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const scaleOnHover = {
//     whileHover: { scale: 1.05 },
//     whileTap: { scale: 0.95 },
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//       {/* Mobile-First Navbar */}
//       <nav className="flex justify-between items-center p-4 md:p-6 shadow-md bg-white sticky top-0 z-50">
//         <motion.h1
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="text-xl md:text-2xl font-bold"
//         >
//           Rohit Singh
//         </motion.h1>

//         {/* Desktop Menu */}
//         <div className="space-x-6 hidden md:flex">
//           {["About", "Skills", "Projects", "Contact"].map((item) => (
//             <motion.a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="hover:text-blue-600 transition-colors"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {item}
//             </motion.a>
//           ))}
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden flex flex-col space-y-1"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <motion.div
//             className="w-6 h-0.5 bg-gray-800"
//             animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
//           />
//           <motion.div
//             className="w-6 h-0.5 bg-gray-800"
//             animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
//           />
//           <motion.div
//             className="w-6 h-0.5 bg-gray-800"
//             animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
//           />
//         </button>

//         {/* Mobile Menu */}
//         <motion.div
//           className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden"
//           initial={{ opacity: 0, y: -10 }}
//           animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
//           style={{ display: isMenuOpen ? "block" : "none" }}
//         >
//           {["About", "Skills", "Projects", "Contact"].map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="block px-4 py-3 hover:bg-gray-100 transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {item}
//             </a>
//           ))}
//         </motion.div>
//       </nav>

//       {/* Enhanced Hero Section */}
//       <section className="flex flex-col items-center justify-center text-center py-16 md:py-20 px-4 md:px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-[80vh] md:min-h-[90vh] relative overflow-hidden">
//         {/* Animated Background Elements */}
//         <motion.div
//           className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full"
//           animate={{
//             y: [0, -20, 0],
//             rotate: [0, 180, 360],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-10 w-16 h-16 bg-white bg-opacity-10 rounded-full"
//           animate={{
//             y: [0, 20, 0],
//             x: [0, -10, 0],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1,
//           }}
//         />

//         <motion.div
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="mb-6"
//         >
//           <div className="w-32 h-32 md:w-40 md:h-40 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
//             <motion.div
//               className="w-24 h-24 md:w-32 md:h-32 bg-white bg-opacity-30 rounded-full flex items-center justify-center text-4xl md:text-6xl"
//               animate={{ rotate: [0, 10, -10, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               👨‍💻
//             </motion.div>
//           </div>
//         </motion.div>

//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
//         >
//           Hi, I'm Rohit Singh
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl px-4"
//         >
//           MERN Stack Developer | Building modern, scalable web apps
//         </motion.p>

//         <motion.a
//           href="#projects"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-6 px-6 py-3 md:px-8 md:py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow hover:bg-gray-100 transition-all duration-300"
//         >
//           View My Work
//         </motion.a>
//       </section>

//       {/* Enhanced About Section */}
//       <section
//         id="about"
//         className="max-w-4xl mx-auto py-16 md:py-20 px-4 md:px-6"
//       >
//         <motion.div
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//         >
//           <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
//             About Me
//           </h2>
//           <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
//             <motion.div
//               className="flex-shrink-0"
//               whileHover={{ scale: 1.05, rotate: 5 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-6xl md:text-8xl text-white shadow-2xl">
//                 🚀
//               </div>
//             </motion.div>
//             <motion.p
//               className="text-base md:text-lg text-gray-700 leading-relaxed text-center md:text-left"
//               variants={fadeInUp}
//               transition={{ delay: 0.2 }}
//             >
//               I'm a passionate full-stack developer specializing in the MERN
//               stack. I enjoy turning complex problems into simple, beautiful,
//               and intuitive solutions. When I'm not coding, you can find me
//               exploring new technologies and working on side projects.
//             </motion.p>
//           </div>
//         </motion.div>
//       </section>

//       {/* Enhanced Skills Section */}
//       <section id="skills" className="bg-gray-100 py-16 md:py-20 px-4 md:px-6">
//         <div className="max-w-4xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center"
//           >
//             Skills
//           </motion.h2>
//           <motion.div
//             className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//           >
//             {[
//               { name: "React", emoji: "⚛️" },
//               { name: "Node.js", emoji: "🟢" },
//               { name: "Express", emoji: "🚂" },
//               { name: "MongoDB", emoji: "🍃" },
//               { name: "Tailwind CSS", emoji: "🎨" },
//               { name: "Git", emoji: "📱" },
//               { name: "REST API", emoji: "🔗" },
//               { name: "JWT", emoji: "🔐" },
//             ].map((skill, index) => (
//               <motion.div
//                 key={skill.name}
//                 className="bg-white rounded-2xl shadow p-3 md:p-4 font-semibold text-center hover:shadow-xl transition-all duration-300"
//                 variants={{
//                   initial: { opacity: 0, y: 20 },
//                   animate: { opacity: 1, y: 0 },
//                 }}
//                 whileHover={{
//                   scale: 1.05,
//                   rotate: [0, 5, -5, 0],
//                   boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="text-2xl md:text-3xl mb-2">{skill.emoji}</div>
//                 <div className="text-sm md:text-base">{skill.name}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Enhanced Projects Section */}
//       <section
//         id="projects"
//         className="max-w-6xl mx-auto py-16 md:py-20 px-4 md:px-6"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center"
//         >
//           Projects
//         </motion.h2>
//         <motion.div
//           className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//         >
//           {[
//             { id: 1, emoji: "🛒", color: "from-blue-400 to-cyan-400" },
//             { id: 2, emoji: "📱", color: "from-purple-400 to-pink-400" },
//             { id: 3, emoji: "🌐", color: "from-green-400 to-blue-400" },
//           ].map((project) => (
//             <motion.div
//               key={project.id}
//               className="bg-white rounded-2xl shadow hover:shadow-2xl overflow-hidden transition-all duration-300"
//               variants={{
//                 initial: { opacity: 0, y: 30 },
//                 animate: { opacity: 1, y: 0 },
//               }}
//               whileHover={{ y: -10, scale: 1.02 }}
//             >
//               <motion.div
//                 className={`w-full h-48 md:h-56 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl md:text-8xl`}
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {project.emoji}
//               </motion.div>
//               <div className="p-4 md:p-6">
//                 <h3 className="text-lg md:text-xl font-semibold mb-2">
//                   Project {project.id}
//                 </h3>
//                 <p className="text-gray-600 mb-4 text-sm md:text-base">
//                   Short description of Project {project.id}. Built with MERN
//                   stack.
//                 </p>
//                 <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
//                   <motion.a
//                     href="#"
//                     className="text-blue-600 font-semibold hover:underline text-center"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Live Demo
//                   </motion.a>
//                   <motion.a
//                     href="#"
//                     className="text-gray-700 font-semibold hover:underline text-center"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     GitHub
//                   </motion.a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* Enhanced Contact Section */}
//       <section id="contact" className="bg-gray-100 py-16 md:py-20 px-4 md:px-6">
//         <motion.div
//           className="max-w-3xl mx-auto text-center"
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//         >
//           <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
//           <motion.div
//             className="mb-6 text-4xl md:text-6xl"
//             animate={{
//               rotate: [0, 10, -10, 0],
//               scale: [1, 1.1, 1],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               repeatType: "reverse",
//             }}
//           >
//             📧
//           </motion.div>
//           <p className="mb-6 text-gray-700 text-sm md:text-base px-4">
//             Feel free to reach out for collaborations or just a friendly chat.
//           </p>
//           <motion.a
//             href="mailto:rohit9161m@example.com"
//             className="inline-block px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition-all duration-300 text-sm md:text-base"
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             rohit9161m@example.com
//           </motion.a>
//         </motion.div>
//       </section>

//       {/* Footer */}
//       <motion.footer
//         className="py-6 text-center text-gray-600 text-sm md:text-base"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//       >
//         © {new Date().getFullYear()} Rohit Singh. All rights reserved.
//       </motion.footer>
//     </div>
//   );
// }

////////////////////////////////////////////////////////////

// import React from "react";
// import { FaRegCopy } from "react-icons/fa";
//  import Box from "./MasterCard";

// const view = "grid";

// const SearchIcon = () => (
//   <svg
//     className="w-5 h-5 text-gray-400"
//     fill="currentColor"
//     viewBox="0 0 20 20"
//   >
//     <path
//       fillRule="evenodd"
//       d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//       clipRule="evenodd"
//     ></path>
//   </svg>
// );
// const ListIcon = () => (
//   <svg
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <line x1="8" y1="6" x2="21" y2="6"></line>
//     <line x1="8" y1="12" x2="21" y2="12"></line>
//     <line x1="8" y1="18" x2="21" y2="18"></line>
//     <line x1="3" y1="6" x2="3.01" y2="6"></line>
//     <line x1="3" y1="12" x2="3.01" y2="12"></line>
//     <line x1="3" y1="18" x2="3.01" y2="18"></line>
//   </svg>
// );
// const GridIcon = () => (
//   <svg
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <rect x="3" y="3" width="7" height="7"></rect>
//     <rect x="14" y="3" width="7" height="7"></rect>
//     <rect x="14" y="14" width="7" height="7"></rect>
//     <rect x="3" y="14" width="7" height="7"></rect>
//   </svg>
// );
// const FilterIcon = () => (
//   <svg
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
//   </svg>
// );
// const CheckIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-4 w-4"
//     viewBox="0 0 20 20"
//     fill="currentColor"
//   >
//     <path
//       fillRule="evenodd"
//       d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//       clipRule="evenodd"
//     />
//   </svg>
// );
// const ChevronRightIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-5 w-5"
//     viewBox="0 0 20 20"
//     fill="currentColor"
//   >
//     <path
//       fillRule="evenodd"
//       d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//       clipRule="evenodd"
//     />
//   </svg>
// );
// const DocumentTextIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-6 w-6"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//     strokeWidth={2}
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//     />
//   </svg>
// );
// const orderData = {
//   status: "Approved",
//   amount: 60000,
//   quantity: 20,
//   imageUrl: "http://googleusercontent.com/file_content/0", // Your image path
//   shopName: "JK Paradise",
//   phone: "9594665866",
//   address: "43/D4 Sai Krupa Society Opposite Taiba Masjid Malwani Mhada Malad",
//   requestedOn: "01-07-2025",
// };
// const products = [
//   {
//     image: "https://via.placeholder.com/150",
//     name: "JK Paradise",
//     contact: "9594665866",
//     price: 60000,
//     quantity: 20,
//     address:
//       "43/D4 Sai Krupa Society Opposite Taiba Masjid Malwani Mhada Malad",
//     requestedOn: "01-07-2025",
//   },
//   // Add more products as needed
// ];

// const secondOrderData = {
//   status: "Pending",
//   amount: 12500,
//   quantity: 5,
//   imageUrl: "http://googleusercontent.com/file_content/0", // Replace with another image
//   shopName: "Electronics Hub",
//   phone: "9876543210",
//   address: "Shop 12, Crystal Plaza, Andheri West, Mumbai",
//   requestedOn: "14-08-2025",
// };

// export default function CardView({
//   filters,
//   handleFilterChange,
//   categoryOptions,
//   appliedFilters,
// }) {
//   return (
//     <div className="w-full">
//       <header className="flex items-center justify-between pl-4 pb-2 bg-[#F6F6F6]  flex-shrink-0">
//         <h1 className="text-3xl font-bold">Delivery Status</h1>
//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search..."
//               value={appliedFilters?.searchTerm || ""}
//               onChange={(e) =>
//                 setAppliedFilters((prev) => ({
//                   ...prev,
//                   searchTerm: e.target.value,
//                 }))
//               }
//               className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f89320]"
//             />
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <SearchIcon />
//             </div>
//           </div>
//           <div className="p-1 bg-gray-100 rounded-lg flex space-x-1">
//             <button
//               onClick={() => setView("list")}
//               className={`p-2 rounded-md ${
//                 view === "list" ? "bg-white shadow-sm" : ""
//               }`}
//             >
//               <ListIcon />
//             </button>
//             <button
//               onClick={() => setView("grid")}
//               className={`p-2 rounded-md ${
//                 view === "grid" ? "bg-white shadow-sm" : ""
//               }`}
//             >
//               <GridIcon />
//             </button>
//           </div>
//           <button
//             onClick={() => setMobileFilterOpen(true)}
//             className="p-2 lg:hidden"
//           >
//             <FilterIcon />
//           </button>
//         </div>
//       </header>
//       <Box />
//     </div>
//   );
// }

// const OrderCard = ({
//   status,
//   amount,
//   quantity,
//   imageUrl,
//   shopName,
//   phone,
//   address,
//   requestedOn,
// }) => {
//   // Define styles based on status for dynamic classes
//   const statusStyles = {
//     Approved: "bg-green-100 text-green-800",
//     Pending: "bg-yellow-100 text-yellow-800",
//     Rejected: "bg-red-100 text-red-800",
//   };

//   return (
//     <div className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
//       {/* Header */}
//       <div className="flex items-start justify-between">
//         <div
//           className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${
//             statusStyles[status] || "bg-gray-100 text-gray-800"
//           }`}
//         >
//           {status === "Approved" && <CheckIcon />}
//           <span>{status}</span>
//         </div>
//         <div className="text-right">
//           <p className="text-xl font-bold text-gray-800">
//             ₹ {amount.toLocaleString("en-IN")}
//           </p>
//           <p className="text-xs text-gray-500">Quantity: {quantity}</p>
//         </div>
//       </div>

//       {/* Body */}
//       <div className="flex items-center gap-4">
//         <img
//           src={imageUrl}
//           alt={shopName}
//           className="h-16 w-16 rounded-xl border border-gray-200 object-contain"
//         />
//         <div className="flex-1">
//           <h3 className="text-lg font-semibold text-gray-900">{shopName}</h3>
//           <p className="text-sm text-gray-500">{phone}</p>
//         </div>
//       </div>

//       {/* Details */}
//       <div className="grid grid-cols-2 gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
//         <div>
//           <label className="text-xs font-medium text-gray-500">Address</label>
//           <p className="text-sm text-gray-800">{address}</p>
//         </div>
//         <div>
//           <label className="text-xs font-medium text-gray-500">
//             Requested on
//           </label>
//           <p className="text-sm text-gray-800">{requestedOn}</p>
//         </div>
//       </div>

//       {/* Footer / Actions */}
//       <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
//         <button className="flex flex-grow items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600">
//           <span>View Product</span>
//           <ChevronRightIcon />
//         </button>
//         <button className="flex-shrink-0 rounded-lg border border-gray-300 bg-white p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700">
//           <DocumentTextIcon />
//         </button>
//       </div>
//     </div>
//   );
// };

// const CustomCard = ({ product }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-4 mb-4">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         {/* Status */}
//         <div className="flex items-center space-x-2">
//           <span className="text-green-500 text-xl font-bold">✓</span>
//           <span className="text-green-500 font-semibold">Approved</span>
//         </div>

//         {/* Price and Quantity */}
//         <div>
//           <p className="text-gray-800 font-semibold text-xl">
//             ₹ {product.price}
//           </p>
//           <p className="text-gray-600 font-medium">
//             Quantity: {product.quantity}
//           </p>
//         </div>
//       </div>

//       {/* Product Image and Details */}
//       <div className="flex items-start space-x-4">
//         {/* Image */}
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-20 h-20 object-cover rounded"
//         />

//         {/* Product Name and Contact */}
//         <div>
//           <p className="text-gray-800 font-semibold">{product.name}</p>
//           <p className="text-gray-600">{product.contact}</p>
//         </div>
//       </div>

//       {/* Address and Requested Date */}
//       <div className="mt-4">
//         <div className="flex justify-between">
//           <div>
//             <p className="text-gray-600">Address</p>
//             <p className="text-gray-800">{product.address}</p>
//           </div>
//           <div>
//             <p className="text-gray-600">Requested on</p>
//             <p className="text-gray-800">{product.requestedOn}</p>
//           </div>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex justify-between mt-4">
//         {/* View Product Button */}
//         <button className="bg-orange-500 text-white px-4 py-2 rounded-full font-medium flex items-center space-x-2">
//           <span>View Product</span>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M17 8l4 4m0 0l-4 4m4-4H3"
//             />
//           </svg>
//         </button>

//         {/* Document Icon */}
//         <div className="bg-orange-500 text-white rounded-full p-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m3 4h1a1 1 0 011 1v6a1 1 0 01-1 1h-1m-1-8h1a1 1 0 001-1V7a1 1 0 00-1-1h-1m-1 8H9M9 9h.01M9 13h.01M9 17h.01"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import Box from "./MasterCard";

// Icon components remain the same
const SearchIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      clipRule="evenodd"
    ></path>
  </svg>
);
const ListIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="8" y1="6" x2="21" y2="6"></line>
    <line x1="8" y1="12" x2="21" y2="12"></line>
    <line x1="8" y1="18" x2="21" y2="18"></line>
    <line x1="3" y1="6" x2="3.01" y2="6"></line>
    <line x1="3" y1="12" x2="3.01" y2="12"></line>
    <line x1="3" y1="18" x2="3.01" y2="18"></line>
  </svg>
);
const GridIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);
const FilterIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);
const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);
const DocumentTextIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

// Card data remains the same
const orderData = {
  status: "Approved",
  amount: 60000,
  quantity: 20,
  imageUrl: "http://googleusercontent.com/file_content/0", // Your image path
  shopName: "JK Paradise",
  phone: "9594665866",
  address: "43/D4 Sai Krupa Society Opposite Taiba Masjid Malwani Mhada Malad",
  requestedOn: "01-07-2025",
};
const products = [
  {
    image: "https://via.placeholder.com/150",
    name: "JK Paradise",
    contact: "9594665866",
    price: 60000,
    quantity: 20,
    address:
      "43/D4 Sai Krupa Society Opposite Taiba Masjid Malwani Mhada Malad",
    requestedOn: "01-07-2025",
  },
  // Add more products as needed
];

const secondOrderData = {
  status: "Pending",
  amount: 12500,
  quantity: 5,
  imageUrl: "http://googleusercontent.com/file_content/0", // Replace with another image
  shopName: "Electronics Hub",
  phone: "9876543210",
  address: "Shop 12, Crystal Plaza, Andheri West, Mumbai",
  requestedOn: "14-08-2025",
};

// Card types
const CARD_TYPES = {
  ORDER: 'order',
  PRODUCT: 'product',
  BOX: 'box'
};

export default function CardView({
  filters,
  handleFilterChange,
  categoryOptions,
  appliedFilters,
}) {
  const [view, setView] = useState("grid");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  
  // Combined card data with type information
  const allCards = [
    {
      type: CARD_TYPES.BOX,
      id: 'box-1'
    },
    {
      type: CARD_TYPES.ORDER,
      id: 'order-1',
      data: orderData
    },
    {
      type: CARD_TYPES.ORDER,
      id: 'order-2',
      data: secondOrderData
    },
    ...products.map((product, index) => ({
      type: CARD_TYPES.PRODUCT,
      id: `product-${index}`,
      data: product
    }))
  ];

  const renderCard = (card) => {
    switch (card.type) {
      case CARD_TYPES.BOX:
        return <Box key={card.id} />;
      case CARD_TYPES.ORDER:
        return <OrderCard key={card.id} {...card.data} />;
      case CARD_TYPES.PRODUCT:
        return <CustomCard key={card.id} product={card.data} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <header className="flex items-center justify-between pl-4 pb-2 bg-[#F6F6F6] flex-shrink-0">
        <h1 className="text-3xl font-bold">Delivery Status</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={appliedFilters?.searchTerm || ""}
              onChange={(e) =>
                handleFilterChange && handleFilterChange('searchTerm', e.target.value)
              }
              className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f89320]"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
          </div>
          <div className="p-1 bg-gray-100 rounded-lg flex space-x-1">
            <button
              onClick={() => setView("list")}
              className={`p-2 rounded-md ${
                view === "list" ? "bg-white shadow-sm" : ""
              }`}
            >
              <ListIcon />
            </button>
            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded-md ${
                view === "grid" ? "bg-white shadow-sm" : ""
              }`}
            >
              <GridIcon />
            </button>
          </div>
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="p-2 lg:hidden"
          >
            <FilterIcon />
          </button>
        </div>
      </header>
      
      {/* Cards container */}
      <div className={view === "grid" 
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" 
        : "flex flex-col gap-5"
      }>
        {allCards.map(renderCard)}
      </div>
    </div>
  );
}

// OrderCard component remains the same
const OrderCard = ({
  status,
  amount,
  quantity,
  imageUrl,
  shopName,
  phone,
  address,
  requestedOn,
}) => {
  // Define styles based on status for dynamic classes
  const statusStyles = {
    Approved: "bg-green-100 text-green-800",
    Pending: "bg-yellow-100 text-yellow-800",
    Rejected: "bg-red-100 text-red-800",
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div
          className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${
            statusStyles[status] || "bg-gray-100 text-gray-800"
          }`}
        >
          {status === "Approved" && <CheckIcon />}
          <span>{status}</span>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-gray-800">
            ₹ {amount.toLocaleString("en-IN")}
          </p>
          <p className="text-xs text-gray-500">Quantity: {quantity}</p>
        </div>
      </div>

      {/* Body */}
      <div className="flex items-center gap-4">
        <img
          src={imageUrl}
          alt={shopName}
          className="h-16 w-16 rounded-xl border border-gray-200 object-contain"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{shopName}</h3>
          <p className="text-sm text-gray-500">{phone}</p>
        </div>
      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
        <div>
          <label className="text-xs font-medium text-gray-500">Address</label>
          <p className="text-sm text-gray-800">{address}</p>
        </div>
        <div>
          <label className="text-xs font-medium text-gray-500">
            Requested on
          </label>
          <p className="text-sm text-gray-800">{requestedOn}</p>
        </div>
      </div>

      {/* Footer / Actions */}
      <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
        <button className="flex flex-grow items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600">
          <span>View Product</span>
          <ChevronRightIcon />
        </button>
        <button className="flex-shrink-0 rounded-lg border border-gray-300 bg-white p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700">
          <DocumentTextIcon />
        </button>
      </div>
    </div>
  );
};

// CustomCard component remains the same
const CustomCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        {/* Status */}
        <div className="flex items-center space-x-2">
          <span className="text-green-500 text-xl font-bold">✓</span>
          <span className="text-green-500 font-semibold">Approved</span>
        </div>

        {/* Price and Quantity */}
        <div>
          <p className="text-gray-800 font-semibold text-xl">
            ₹ {product.price}
          </p>
          <p className="text-gray-600 font-medium">
            Quantity: {product.quantity}
          </p>
        </div>
      </div>

      {/* Product Image and Details */}
      <div className="flex items-start space-x-4">
        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-20 h-20 object-cover rounded"
        />

        {/* Product Name and Contact */}
        <div>
          <p className="text-gray-800 font-semibold">{product.name}</p>
          <p className="text-gray-600">{product.contact}</p>
        </div>
      </div>

      {/* Address and Requested Date */}
      <div className="mt-4">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-600">Address</p>
            <p className="text-gray-800">{product.address}</p>
          </div>
          <div>
            <p className="text-gray-600">Requested on</p>
            <p className="text-gray-800">{product.requestedOn}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4">
        {/* View Product Button */}
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full font-medium flex items-center space-x-2">
          <span>View Product</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>

        {/* Document Icon */}
        <div className="bg-orange-500 text-white rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m3 4h1a1 1 0 011 1v6a1 1 0 01-1 1h-1m-1-8h1a1 1 0 001-1V7a1 1 0 00-1-1h-1m-1 8H9M9 9h.01M9 13h.01M9 17h.01"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
