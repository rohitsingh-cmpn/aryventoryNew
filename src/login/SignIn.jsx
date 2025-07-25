import React, { useEffect, useState } from "react";

const SignIn = () => {
  const images = [
    "https://www.indifi.com/blog/wp-content/uploads/2022/05/Inventory.jpeg",

    "https://www.ppms.in/wp-content/uploads/2024/12/unnamed.jpg",
    "https://www.findmycrm.com/hubfs/free%20inventory%20management%20software.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
   console.log("useEffect triggered");

   const interval = setInterval(() => {
     setCurrentIndex((prev) => {
       (prev + 1) % images.length;
      //  console.log("Changing to index:", nextIndex);
      //  return nextIndex;
     });
   }, 3000);

   return () => clearInterval(interval);
 }, [images.length]);



  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-2">
      <div className="w-full max-w-7xl h-fit lg:h-[85vh] bg-white rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-10 shadow-lg">
        {/* Slider Section (6/10 columns) */}
        <div className="hidden lg:col-span-6 lg:flex flex-col bg-white p-6">
          <h4 className=" mt-10 text-center text-2xl sm:text-3xl font-bold text-gray-400 drop-shadow-lg tracking-wide ">
            Aryventory WebApp —{" "}
            <span className="italic text-orange-300">
              “Inventory simplified for smarter management.”
            </span>
          </h4>

          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <div
              className="flex h-full transition-transform duration-700 ease-in-out"
              style={{
                width: `${100 * images.length}%`,
                transform: `translateX(-${
                  (100 / images.length) * currentIndex
                }%)`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full h-full"
                  style={{ width: `${100 / images.length}%` }}
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  currentIndex === index ? "bg-[#F89320] w-6" : "bg-white w-3"
                }`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>

        {/* Login Form (4/10 columns) */}
        <div className="col-span-4 flex flex-col  px-8 py-6 ">
          <div className="flex justify-center ">
            <img
              src="https://aryventory.com/assets/AryVentory-Drwj0Dr8.jpg"
              alt="Icon"
              className="   lg:h-35 w-35 rounded-full"
            />
          </div>

          <h2 className="text-2xl text-left font-semibold mb-2  ">Sign In</h2>
          <p className="text-left text-gray-500 mb-6">
            Welcome back! Please enter your credentials.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border border-gray-300  hover:border-orange-400 focus:border-orange-500 rounded-full focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 hover:border-orange-400 focus:border-orange-500 focus:outline-none transition rounded-full"
              />
              <div
                className="text-right text-sm mt-1"
                onClick={() => alert("This feature is coming soon!")}
              >
                <button className="text-orange-500  rounded-full hover:underline hover:text-orange-300 cursor-pointer ">
                  <u>Forgot Password?</u>
                </button>
              </div>
            </div>

            <div className="">
              <label className="block text-sm text-gray-600 mb-1">
                Select Role
              </label>
              <select className="w-full px-4 mr-4  py-2 border border-gray-300 rounded-full bg-blue text-gray-700 hover:border-orange-300 focus:border-orange-500 focus:outline-none transition">
                <option>Select role</option>
                <option>Shopkeeper</option>
                <option>Staff</option>
                <option>Supplier</option>
              </select>
            </div>

            <button className="w-full py-2  mt-3 bg-[#F89320] hover:bg-orange-300 text-white  rounded-full transition cursor-pointer">
              Sign In
            </button>
            <div className="ml-2 text-sm text-center text-gray-500 mt-2">
              <p>
                Note: This web app is designed for registered users. Please sign
                in to proceed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
