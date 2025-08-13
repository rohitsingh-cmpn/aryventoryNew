import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const improvementOptions = [
  "Overall Service",
  "Customer Support",
  "Speed and Efficiency",
  "Transparency",
  "Pickup and Delivery Service",
  "Features",
];

function FeedBack() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [feedback, setFeedback] = useState("");

  const toggleOption = (opt) => {
    setSelectedOptions((prev) =>
      prev.includes(opt) ? prev.filter((x) => x !== opt) : [...prev, opt]
    );
  };

  const handleSubmit = () => {
    // replace with real submit logic
    console.log({ rating, selectedOptions, feedback });
    alert("Thank you for your feedback!");
  };

  return (
    <div className="h-full w-full bg-white rounded-2xl shadow-lg p-6 flex flex-col space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
            Rate your Experience
          </h3>
          <p className="text-gray-600 mt-1">
            Are you satisfied with the service?
          </p>
        </div>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="focus:outline-none"
            >
              <FaStar
                className={`w-8 h-8 transition-colors ${
                  (hoverRating || rating) >= star
                    ? "text-star"
                    : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
      <hr className="w-full border-t border-gray-300 my-4" />

      {/* Star Rating */}

      {/* Improvement Options */}
      <div>
        <p className="text-gray-600 mb-2">Tell us what can be improved?</p>
        <div className="flex flex-wrap gap-2">
          {improvementOptions.map((opt) => {
            const selected = selectedOptions.includes(opt);
            return (
              <button
                key={opt}
                onClick={() => toggleOption(opt)}
                className={`px-3 py-1 rounded-full border transition ${
                  selected
                    ? "bg-accent text-white border-accent"
                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-50"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback Textarea */}
      <div className="relative flex flex-col">
        <label className="text-gray-600 mb-1">Feedback</label>
        <span className="absolute top-0 right-0 text-sm text-gray-500">
          {feedback.length}/2000
        </span>
        <textarea
          value={feedback}
          onChange={(e) => {
            if (e.target.value.length <= 2000) {
              setFeedback(e.target.value);
            }
          }}
          placeholder="Type here..."
          className="mt-6 p-3 border border-gray-300 rounded-lg resize-none h-32 focus:ring-2 focus:ring-blue-300 focus:border-transparent"
        />
        <p className="text-sm text-gray-500 mt-1">
          How do you continue to manage your inventory? Share your challenges
          with us! Your feedback could help us create the perfect solution for
          inventory management.
        </p>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={rating === 0}
          className={`px-6 py-2 rounded-lg text-white font-medium transition ${
            rating > 0
              ? "bg-accent hover:bg-star"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default FeedBack;
