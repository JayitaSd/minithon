"use client";
import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useColorTheme } from "../hooks/use-color-theme";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { theme } = useColorTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup attempt:", { name, email, password, confirmPassword });
    if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Get existing users
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email already exists
  if (existingUsers.some((u) => u.email === email)) {
    alert("User with this email already exists!");
    return;
  }

  // Add new user
  const newUser = { name, email, password };
  const updatedUsers = [...existingUsers, newUser];
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  alert("Signup successful! Please login.");
  window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white flex justify-center items-center px-6 py-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-8 border border-gray-700"
      >
        {/* Title */}
        <h1
          className="text-4xl font-extrabold text-center mb-4
                     bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                     bg-clip-text text-transparent"
        >
          Create Account
        </h1>
        <p className="text-center text-gray-400 text-sm">
          Join us today and start your journey 🚀
        </p>

        {/* Full Name */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-900/60 border border-gray-700 focus-within:border-indigo-400 transition">
          <User className="w-5 h-5 text-indigo-400" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
            className="w-full bg-transparent focus:outline-none text-white placeholder-gray-400"
          />
        </div>

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

        {/* Password */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-900/60 border border-gray-700 focus-within:border-indigo-400 transition">
          <Lock className="w-5 h-5 text-indigo-400" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full bg-transparent focus:outline-none text-white placeholder-gray-400"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-900/60 border border-gray-700 focus-within:border-indigo-400 transition">
          <Lock className="w-5 h-5 text-indigo-400" />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
            className="w-full bg-transparent focus:outline-none text-white placeholder-gray-400"
          />
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          className="w-full py-3 inline-flex items-center justify-center gap-2
                     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                     rounded-xl text-lg font-semibold shadow-lg
                     hover:scale-105 transition-transform duration-200"
        >
          Sign Up
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-700"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-700"></div>
        </div>

        {/* Login Redirect */}
        <p className="text-center text-gray-400 text-sm">
          Already have an account?{" "}
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
