import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 space-y-6 border rounded-xl shadow-md">
        <div className="flex justify-center">
          <div className="text-4xl font-bold text-orange-500">🛒</div>
        </div>
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <p className="text-center text-gray-500">
          Hi Welcome back, you been missed
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm">Enter phone number</label>
            <input
              type="text"
              placeholder="Phone number"
              className="w-full px-4 py-2 mt-1 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                👁️
              </span>
            </div>
            <div className="text-right text-sm text-orange-500 mt-1 cursor-pointer">
              Forgot password?
            </div>
          </div>

          <div>
            <label className="block text-sm">Select role</label>
            <select className="w-full px-4 py-2 border rounded-lg">
             
              <option>Shopkeeper</option>
              <option>Staff</option>
              <option>Supplier</option>
            </select>
          </div>

          <button className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 rounded-full transition">
            Sign In
          </button>
        </div>

        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-orange-500 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
