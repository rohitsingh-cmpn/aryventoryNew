import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 space-y-6 border rounded-xl shadow-md">
        <div className="flex justify-center">
          <div className="text-4xl font-bold text-orange-500">🛒</div>
        </div>
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <p className="text-center text-gray-500">Create your account</p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <select className="w-full px-4 py-2 border rounded-lg">
            
            <option>Shopkeeper</option>
            <option>Staff</option>
            <option>Supplier</option>
          </select>

          <button className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 rounded-full transition">
            Register
          </button>
        </div>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/" className="text-orange-500 font-medium hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
