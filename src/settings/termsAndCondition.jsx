import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
// import image from "../../assets/termsandcondition.svg";

const termsData = [
  {
    title: "Limitation of Liability",
    content:
      "Aryventory will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our services. Our maximum liability will be limited to the amount paid for the service during the period in which the event causing the claim occurred, or as otherwise required by law.",
  },
  {
    title: "Governing Law and Jurisdiction",
    content:
      "These Terms will be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms will be subject to the exclusive jurisdiction of the courts located in India.",
  },
  {
    title: "Intellectual Property Protection",
    content:
      "All content, trademarks, service marks, logos, and other intellectual property rights related to Aryventory are owned by Aryventory or its licensors. You are granted a limited, non-exclusive, non-transferable license to use the app for its intended purposes only. You may not modify, reproduce, distribute, or otherwise exploit the content or intellectual property without prior written permission from Aryventory.",
  },
  {
    title: "Termination Rights",
    content:
      "We reserve the right to terminate or suspend your access to Aryventory at our discretion, without notice, if you violate any of these Terms or engage in illegal or fraudulent activities Upon termination, your rights to access and use Aryventory will cease immediately, and you must discontinue use of the services.",
  },
  {
    title: "Indemnification",
    content:
      "You agree to indemnify, defend, and hold Aryventory, its affiliates, and staff harmless from any claims, losses, damages, liabilities, and expenses (including reasonable attorney's fees) arising from your use of the app, violation of these Terms or any infringement of intellectual property or other rights of any third party.",
  },
];

function TermsAndConditions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#F6F6F6] rounded-2xl">
      <h2 className="text-2xl sm:text-3xl font-bold  text-gray-800">
        Terms & Conditions
      </h2>
      <div className="flex flex-col">
        <img
          src="https://static.vecteezy.com/system/resources/previews/010/751/448/non_2x/terms-and-conditions-icon-on-white-background-terms-sign-terms-and-conditions-symbol-flat-style-vector.jpg"
          className="h-60"
          alt=""
        />
        <p className="mb-6 text-gray-700">
          By using Aryventory, you agree to comply with and be bound by the
          following terms and conditions | Terms" if you do not agree to these
          Terms, please do not use our services.
        </p>
      </div>

      <div className="space-y-4">
        {termsData.map((term, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 transition-all duration-300"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 hover:text-[#F89320] transition"
              >
                <span>
                  {index + 1}. {term.title}
                </span>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700">{term.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TermsAndConditions;
