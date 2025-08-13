import React from "react";

// function ContactUs() {
//   return (
//     <div className="bg-gray-50 p-8 rounded-lg w-full">
//       {/* Header */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">
//           We are always ready to help you and answer your questions
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Contact Information */}
//         <div>
//           <h3 className="text-lg font-semibold text-orange-500 mb-4">Contact</h3>
//           <div className="flex items-center mb-3">
//             <i className="fas fa-phone text-orange-500 mr-3"></i>
//             <span className="text-gray-700">+91 3278463345</span>
//           </div>

//           <h3 className="text-lg font-semibold text-orange-500 mb-4 mt-6">Email</h3>
//           <div className="flex items-center mb-3">
//             <i className="fas fa-envelope text-orange-500 mr-3"></i>
//             <span className="text-gray-700">aryventory123@gmail.com</span>
//           </div>
//         </div>

//         {/* Location and Social */}
//         <div>
//           <h3 className="text-lg font-semibold text-orange-500 mb-4">Our Location</h3>
//           <div className="flex items-start mb-6">
//             <i className="fas fa-map-marker-alt text-orange-500 mr-3 mt-1"></i>
//             <div className="text-gray-700">
//               <p>742 Evergreen Terrace</p>
//               <p>Springfield, IL 62704</p>
//               <p>USA</p>
//             </div>
//           </div>

//           <h3 className="text-lg font-semibold text-orange-500 mb-4">Social network</h3>
//           <div className="flex space-x-4">
//             <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors cursor-pointer">
//               <i className="fab fa-whatsapp text-lg"></i>
//             </div>
//             <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors cursor-pointer">
//               <i className="fas fa-phone text-lg"></i>
//             </div>
//             <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors cursor-pointer">
//               <i className="fab fa-instagram text-lg"></i>
//             </div>
//             <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors cursor-pointer">
//               <i className="fab fa-facebook text-lg"></i>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Customer Support Illustration Area */}
//       <div className="mt-8 flex justify-center">
//         <div className="bg-blue-100 rounded-lg p-6 w-80 h-48 flex items-center justify-center">
//           <div className="text-center">
//             <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
//               <i className="fas fa-headset text-white text-2xl"></i>
//             </div>
//             <p className="text-blue-600 font-medium">Customer Support</p>
//             <p className="text-blue-500 text-sm">Ready to assist you</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import contactImg from "../../assets/contact-us.svg"; // replace with your filename

const ContactUs = () => {
  return (
    <div className="flex  flex-col-reverse md:flex-row h-full bg-white p-6 rounded-lg shadow-lg">
      {/* Text Section */}
      <div className="w-full mt-6 md:mt-0">
        <h2 className="text-2xl mb-6">
          We are always ready to help you and answer your questions
        </h2>

        <div className="p-6 space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-[#FEAB41]">Contact</h3>
            <p className="flex items-center mt-2 text-gray-700">
              <FontAwesomeIcon icon={faPhoneAlt} className=" mr-3" />
              +91 3278463345
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#FEAB41]">Email</h3>
            <p className="flex items-center mt-2 text-gray-700">
              <FontAwesomeIcon icon={faEnvelope} className=" mr-3" />
              aryventory123@gmail.com
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#FEAB41]">
              Our Location
            </h3>
            <p className="flex items-start mt-2 text-gray-700">
              <FontAwesomeIcon icon={faMapMarkerAlt} className=" mr-3 mt-1" />
              <span>
                742 Evergreen Terrace
                <br />
                Springfield, IL 62704
                <br />
                USA
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold  text-[#FEAB41]">
              Social Network
            </h3>
            <div className="flex space-x-4 mt-2 text-gray-700">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="w-6 h-6  hover:text-teal-600 transition-colors"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-6 h-6  hover:text-teal-600 transition-colors"
              />
              <FontAwesomeIcon
                icon={faFacebookF}
                className="w-6 h-6  hover:text-teal-600 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Illustration */}
      <div className="w-full md:w-1/2 p-5">
        <img
          src={contactImg}
          alt="Contact illustration"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default ContactUs;
