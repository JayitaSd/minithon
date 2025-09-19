"use client";
import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useColorTheme } from "../hooks/use-color-theme";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useColorTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-12 bg-black/70 dark:bg-slate-900/70 backdrop-blur-md rounded-b-xl shadow-md transition-colors">
        
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center -m-1.5 p-1.5">
            <span className="sr-only">Artfolio</span>
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="Logo"
              className="h-8 w-auto"
            />
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold font-mono text-white">ArtFolio</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-12 font-semibold text-white">
          {/* <Link to="/alive-sessions" className="hover:text-indigo-400 transition-colors">A'Live Sessions</Link>
          <Link to="/indiex-live" className="hover:text-indigo-400 transition-colors">About Us</Link> */}
          <Link to="/contact-us" className="hover:text-indigo-400 transition-colors ml-8">Contact Us</Link>
        </div>
  <div className="hidden lg:flex lg:gap-x-12 font-semibold text-white">
          {/* <Link to="/alive-sessions" className="hover:text-indigo-400 transition-colors">A'Live Sessions</Link>
          <Link to="/indiex-live" className="hover:text-indigo-400 transition-colors">About Us</Link> */}
          <Link to="/login" className="hover:text-indigo-400 transition-colors ml-8">Login</Link>
        </div>
          <div className="hidden lg:flex lg:gap-x-12 font-semibold text-white">
          {/* <Link to="/alive-sessions" className="hover:text-indigo-400 transition-colors">A'Live Sessions</Link>
          <Link to="/indiex-live" className="hover:text-indigo-400 transition-colors">About Us</Link> */}
          <Link to="/gallery" className="hover:text-indigo-400 transition-colors ml-8">Gallery</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center p-2.5 text-white hover:bg-gray-800 rounded-md transition"
          >
            <span className="sr-only">Open menu</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/95 p-6 backdrop-blur-md flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="flex items-center -m-1.5 p-1.5">
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt="Logo"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-white">ArtFolio</span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="-m-2.5 p-2.5 text-white hover:bg-gray-800 rounded-md transition"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col gap-4 font-semibold text-white">
            {/* <Link to="/alive-sessions" className="px-4 py-2 rounded-lg hover:bg-gray-800 transition">A'Live Sessions</Link>
            <Link to="/indiex-live" className="px-4 py-2 rounded-lg hover:bg-gray-800 transition">About Us</Link> */}
            <Link to="/contact-us" className="px-4 py-2 rounded-lg hover:bg-gray-800 transition">Contact Us</Link>
            <Link to="/login" className="py-3 inline-flex items-center justify-center gap-2
                     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                     rounded-xl text-lg font-semibold shadow-lg
                     hover:scale-105 transition-transform duration-200">Log in</Link>
        
          </div>
        </div>
      )}
    </header>
  );
}
