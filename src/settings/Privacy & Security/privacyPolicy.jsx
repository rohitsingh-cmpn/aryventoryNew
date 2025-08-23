import React from "react";


// PrivacyPolicy.js
// import React from 'react';

const PrivacyPolicy = () => {
  const policyData = {
    intro:
      "Your privacy is important to us. This Privacy Policy explains how we handle your data in accordance with data protection laws such as the General Data Protection Regulation (GDPR).",
    sections: [
      {
        title: "1. Data We Collect",
        content: ["Name", "Email address", "Phone number", "Profile image"],
        note: "We do not collect or store any payment information or sensitive personal financial data.",
      },
      {
        title: "2. How We Use Your Data",
        content: [
          "Provide and improve app functionality",
          "Personalize user experience",
          "Enable account-related features (e.g., login, profile management)",
        ],
      },
      {
        title: "3. Data Storage and Security",
        content:
          "Your data is securely stored using industry-standard measures. We ensure that all information is protected from unauthorized access, disclosure, or destruction.",
      },
      {
        title: "4. Third-Party Sharing",
        content:
          "We do not share your personal data with any third parties. Your information stays with us and is used only for purposes related to the app's functionality.",
      },
      {
        title: "5. Payment and Financial Data",
        content:
          "We do not store any payment or personal financial data. All payment transactions are handled by secure, compliant third-party payment processors.",
      },
    ],
    contact:
      "For any questions or concerns about your privacy, please reach out to us at: contact@aryventory.com",
  };

  return (
    // The main wrapper, takes full screen height and uses flexbox for layout
    <div className="bg-gray-50 h-full w-full flex flex-col font-sans">
      {/* Container for the policy content, grows to fill space and scrolls on overflow */}
      <div className="w-full bg-white flex-grow overflow-y-auto">
        {/* Padding container for the content */}
        <div className="p-4 md:p-8">
          {/* Header Section - No back button, title is on the left */}
          <header className="mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-left">
              Privacy Policy
            </h1>
          </header>

          {/* Icon and Introduction */}
          <div className="text-center my-6">
            <img src="https://png.pngtree.com/png-clipart/20221007/original/pngtree-privacy-policy-png-image_8663889.png" alt="Privacy Policy" className="mx-auto" />
          </div>

          <p className="text-gray-600 mb-6 text-center">{policyData.intro}</p>

          {/* Policy Sections - Reduced spacing between sections */}
          <div className="space-y-6">
            {policyData.sections.map((section, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {section.title}
                </h2>
                {Array.isArray(section.content) ? (
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">{section.content}</p>
                )}
                {section.note && (
                  <p className="text-gray-600 mt-4">{section.note}</p>
                )}
              </div>
            ))}
          </div>

          {/* Contact Information - Reduced top margin, part of the scrollable content */}
          <footer className="mt-8 pt-4 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              {policyData.contact.split("contact@aryventory.com")[0]}
              <a
                href="mailto:contact@aryventory.com"
                className="text-blue-600 hover:underline"
              >
                contact@aryventory.com
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

// The main App component to render the PrivacyPolicy
export default function App() {
  return <PrivacyPolicy />;
}
