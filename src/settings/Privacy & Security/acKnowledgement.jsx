import { faHandshake } from "@fortawesome/free-solid-svg-icons";
// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// function Acknowledgement() {
//   return (

// <div className='flex flex-col items-center justify-center p-4'>
//   <div className='text-3xl font-medium'>{`Acknowledgement`}</div>
//   <div className='flex flex-col justify-center items-center gap-4'>
//     <div>
//       <FontAwesomeIcon size='10x' icon={faHandshake} />
//     </div>
//     <div>
//       <div>{'Thank you for choosing Aryventory! Your trust inspires us to continually build innovative, efficient, and user-friendly inventory solutions. This app is the result of dedication, collaboration, and a passion for helping businesses grow through smart tools.'}</div>
//     </div>
//     <div className='flex flex-col gap-2'>
//       <div>{'Meet the Team Behind Aryventory'}</div>
//       <div>
//         <div>
//           <div>'{'Backend Development & System Architecture'}'</div>
//         </div>
//         <div>{'Our backend team built a robust and scalable infrastructure to ensure Aryventory runs smoothly, securely, and reliably. They focused on performance, stability, and scalability to support seamless real-time inventory tracking.'}
//         </div>
//       </div>
//       <div>
//         <div>{'UI/UX Design & Frontend Experience'}</div>
//         <div>{'Our design and frontend team crafted an intuitive, visually appealing, and user-friendly interface. They ensured that managing inventory is simple, modern, and accessible for all users, delivering a seamless experience.'}
//         </div>
//       </div>
//       <div>
//         <div>{'If you do not agree with any part of the Terms of Service or Privacy Policy, please do not use the app. By using this app, you acknowledge that you have read, understood, and agreed to the Terms of Service and Privacy Policy.'}
//         </div>
//         <div>{'Aryventory is more than just an app it\'s a collaborative effort built to empower businesses with smart inventory tools. We appreciate your support and look forward to continuously improving with your feedback.'}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//   )
// }

// export default Acknowledgement

// TermsOfService.js
// src/components/Acknowledgement.jsx (or whatever path you prefer)

import React from "react";
// import backend from "../../../assets/backend-img.png";
// import uiuximage from "../../../assets/ui-ux-image.png";
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHandshake } from '@fortawesome/free-solid-svg-icons';

// Main App component
const App = () => {
  // Function to handle clicks on Terms of Service and Privacy Policy
  const handleLinkClick = (e, topic) => {
    e.preventDefault(); // Prevent default link behavior
    // Replaced alert() with a console log as per instructions.
    // In a real application, you would manage state to show a modal or
    // navigate to a new route, or display expanded content here.
    console.log(`Clicked on: ${topic}. Detailed content to be displayed here.`);
  };

  return (
    // Main container for the entire page, setting font and background
    <div className="min-h-screen w-full flex flex-col flex-grow bg-gray-50 font-inter antialiased">
      {/* Header Section */}
      <header className="w-full py-4 px-4 sm:px-6 lg:px-8 flex-shrink-0 bg-white -sm rounded-b-lg">
        {/* Removed max-w-7xl mx-auto to allow header content to span full width */}
        <div className="w-full flex items-center justify-between">
          {/* Header title */}
          <h1 className="text-2xl font-bold text-gray-800 flex-grow">
            Acknowledgement
          </h1>
          {/* Placeholder for potential future elements, ensures spacing on larger screens */}
          <div className="w-6 h-6 sm:hidden lg:block"></div>
        </div>
      </header>

      {/* Main Content Area - scrolls if content overflows */}
      {/* Removed max-w-7xl mx-auto to allow main content to span full width */}
      <main className="flex-grow w-full p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Introductory Text Section */}
        <section className="bg-white rounded-lg -md p-6 mb-8 text-center">
          <div className="mb-4">
            {/* Handshake icon using Font Awesome */}
            <FontAwesomeIcon size="6x" icon={faHandshake} />
          </div>
          <p className="text-gray-700 leading-relaxed text-base">
            Thank you for choosing Aryventory! Your trust inspires us to
            continually build innovative, efficient, and user-friendly inventory
            solutions. This app is the result of dedication, collaboration, and
            a passion for helping businesses grow through smart tools.
          </p>
        </section>

        {/* Horizontal rule for visual separation */}
        {/* Removed max-w-4xl to allow hr to span full width */}
        <hr className="w-full border-gray-300 mb-8" />

        {/* Meet the Team Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
            Meet the Team Behind Aryventory
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Backend Development Card */}
            <div className="bg-white rounded-lg -lg p-6 flex flex-col md:flex-row items-center md:items-start text-center md:text-left md:gap-4">
              {/* Placeholder image for backend team */}
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/007/570/850/small/backend-development-line-icon-vector.jpg"
                alt="Backend Development Team"
                className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-md mb-4 md:mb-0 flex-shrink-0"
              />
              {/* Text content for backend team */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Backend Development & System Architecture
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Our backend team built a robust and scalable infrastructure to
                  ensure Aryventory runs smoothly, securely, and reliably. They
                  focused on performance, stability, and scalability to support
                  seamless real-time inventory tracking.
                </p>
              </div>
            </div>

            {/* UI/UX Design Card */}
            <div className="bg-white rounded-lg -lg p-6 flex flex-col md:flex-row items-center md:items-start text-center md:text-left md:gap-4">
              {/* Placeholder image for UI/UX team */}
              <img
                src="https://cdn.sanity.io/images/599r6htc/regionalized/121b95a7cd65588fe63417d7b87a474035f0ec83-1080x541.png?w=1200&q=70&fit=max&auto=format"
                alt="UI/UX Design Team"
                className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-md mb-4 md:mb-0 flex-shrink-0"
              />
              {/* Text content for UI/UX team */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  UI/UX Design & Frontend Experience
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Our design and frontend team crafted an intuitive, visually
                  appealing, and user-friendly interface. They ensured that
                  managing inventory is simple, modern, and accessible for all
                  users, delivering a seamless experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms of Service & Privacy Policy Section */}
        <section className="bg-white rounded-lg -md p-6 mb-8">
          <p className="text-gray-700 leading-relaxed text-base mb-4">
            If you do not agree with any part of the{" "}
            {/* Link to Terms of Service */}
            <a
              href="#"
              className="text-blue-600 hover:underline font-medium"
              onClick={(e) => handleLinkClick(e, "Terms of Service")}
            >
              Terms of Service
            </a>{" "}
            or {/* Link to Privacy Policy */}
            <a
              href="#"
              className="text-blue-600 hover:underline font-medium"
              onClick={(e) => handleLinkClick(e, "Privacy Policy")}
            >
              Privacy Policy
            </a>
            , please do not use the app. By using this app, you acknowledge that
            you have read, understood, and agreed to the Terms of Service and
            Privacy Policy.
          </p>
          <p className="text-gray-700 leading-relaxed text-base">
            Aryventory is more than just an app — it's a collaborative effort
            built to empower businesses with smart inventory tools. We
            appreciate your support and look forward to continuously improving
            with your feedback.
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;
