"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot Password request for:", email);
    // API call for reset link
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white flex justify-center items-center px-6 py-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-8 border border-gray-700"
      >
        {/* Title */}
        <h1
          className="text-3xl md:text-4xl font-extrabold text-center mb-4
                     bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                     bg-clip-text text-transparent"
        >
          Forgot Password
        </h1>
        <p className="text-center text-gray-400 text-sm">
          Enter your email address and we’ll send you a reset link.
        </p>

        {/* Email */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-900/60 border border-gray-700 focus-within:border-indigo-400 transition">
          <Mail className="w-5 h-5 text-indigo-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="w-full bg-transparent focus:outline-none text-white placeholder-gray-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 inline-flex items-center justify-center gap-2
                     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                     rounded-xl text-lg font-semibold shadow-lg
                     hover:scale-105 transition-transform duration-200"
        >
          Send Reset Link
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-700"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-700"></div>
        </div>

        {/* Redirects */}
        <p className="text-center text-gray-400 text-sm">
          Remember your password?{" "}
          <Link
            to="/login"
            className="font-semibold text-indigo-400 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <ForgotPassword />
    </>
  );
}
