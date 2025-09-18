  "use client";
  import React, { useState } from "react";
  import Navbar from "./Navbar";
  import { Mail, Lock } from "lucide-react";
  import { useColorTheme } from "../hooks/use-color-theme";
import { Link } from "react-router-dom";

  export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      const { theme } = useColorTheme();


    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Login attempt:", { email, password });
    };

    return (
      <section
        id="login"
     className="relative min-h-screen flex items-center justify-center 
                 bg-gradient-to-br from-blue-200 via-white to-blue-100
                 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 
                 px-4 pt-20"
      >
        {/* Decorative background glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-400/30 rounded-full blur-3xl top-0 left-[-10%] animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl bottom-0 right-[-10%] animate-pulse"></div>
        </div>

        {/* Login Card */}
        <div className="relative w-full max-w-lg bg-white/80 dark:bg-blue-950/60 
                      backdrop-blur-xl shadow-2xl shadow-blue-200/50 dark:shadow-blue-900/60
                      rounded-2xl p-10 border border-white/40">
          {/* Title */}
         <h2
  className={`text-2xl md:text-[36px] font-extrabold mb-4 tracking-tight transition-colors duration-300 text-center
    ${theme === "dark" ? "text-blue-300" : "text-[#1E3A8A]"}`}
>
  Welcome Back
</h2>
          <p className="text-center text-gray-700 dark:text-gray-300 mt-2">
            Login to continue your journey
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Email */}
            <div className="flex items-center gap-3 border rounded-xl px-4 py-3 
                            bg-white/70 dark:bg-slate-900/60 
                            focus-within:ring-2 focus-within:ring-blue-500 transition">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-100"
              />
            </div>

            {/* Password */}
            <div className="flex items-center gap-3 border rounded-xl px-4 py-3 
                            bg-white/70 dark:bg-slate-900/60 
                            focus-within:ring-2 focus-within:ring-blue-500 transition">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-100"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
            <Link to="/forgot-password" className="text-sm text-blue-700 hover:underline dark:text-blue-300">
  Forgot password?
</Link>

            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 
                        text-white font-semibold shadow-lg relative overflow-hidden 
                        transition-transform transform hover:scale-[1.02]"
            >
              <span className="relative z-10">Login</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                              translate-x-[-100%] hover:translate-x-[100%] 
                              transition-transform duration-700 ease-out"></span>
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300 dark:bg-blue-800"></div>
            <span className="px-2 text-gray-500 dark:text-gray-300 text-sm">
              or
            </span>
            <div className="flex-grow h-px bg-gray-300 dark:bg-blue-800"></div>
          </div>

          {/* Sign Up */}
          <p className="text-center text-gray-700 dark:text-gray-200">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-blue-700 hover:underline dark:text-blue-300"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </section>
    );
  }


 
