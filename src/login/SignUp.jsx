import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with your logic
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ✅ Enter your name */}
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 hover:border-orange-400 focus:border-orange-500 rounded-full focus:outline-none transition placeholder-gray-400"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 hover:border-orange-400 focus:border-orange-500 rounded-full focus:outline-none transition placeholder-gray-400"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 hover:border-orange-400 focus:border-orange-500 rounded-full focus:outline-none transition placeholder-gray-400"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
