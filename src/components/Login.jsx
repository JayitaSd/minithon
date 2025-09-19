"use client";
import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useColorTheme } from "../hooks/use-color-theme";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useColorTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      alert("Invalid email or password!");
      return;
    }
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    // Redirect to artist form (or home)
    window.location.href = "/artist-form";
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
          Welcome Back
        </h1>
        <p className="text-center text-gray-400 text-sm">
          Login to continue your journey
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

        {/* Forgot password */}
        <div className="text-right">
          <Link
            to="/forgot-password"
            className="text-sm text-indigo-400 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 inline-flex items-center justify-center gap-2
                     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                     rounded-xl text-lg font-semibold shadow-lg
                     hover:scale-105 transition-transform duration-200"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-700"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-700"></div>
        </div>

        {/* Signup Redirect */}
        <p className="text-center text-gray-400 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-indigo-400 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
