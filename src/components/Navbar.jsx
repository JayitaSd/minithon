import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useColorTheme } from "../hooks/use-color-theme";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useColorTheme();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {/* Navbar */}
      {/* <header className="absolute inset-x-0 top-0 z-50"> */}
        <nav className="flex items-center justify-between p-6 lg:px-12 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-b-xl shadow-md">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Indiexlive</span>
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt="Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:gap-x-12 font-semibold text-gray-900 dark:text-gray-100">
            {/* <Link to="/alive-sessions" className="hover:text-indigo-600 transition-colors">
              A'Live Sessions
            </Link> */}
            {/* <Link to="/indiex-live" className="hover:text-indigo-600 transition-colors">
              About Us
            </Link> */}
            {/* <Link to="/contact-us" className="hover:text-indigo-600 transition-colors">
              Contact Us
            </Link> */}
          </div>

          {/* Desktop Right: login + theme */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">
            <Link
            to="/login"   
              className="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-indigo-600 transition-colors"
            >
              Log in →
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition"
            >
              {theme === "light" ? <Moon className="w-5 h-5 text-gray-700" /> : <Sun className="w-5 h-5 text-yellow-400" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white dark:bg-slate-950 p-6">
            <div className="flex items-center justify-between mb-6">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Indiexlive</span>
                <img
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Logo"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="-m-2.5 p-2.5 text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4 font-semibold text-gray-900 dark:text-gray-100">
              <Link to="/alive-sessions" className="block px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800">
                A'Live Sessions
              </Link>
              <Link to="/indiex-live" className="block px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800">
                About Us
              </Link>
              <Link to="/contact-us" className="block px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800">
                Contact Us
              </Link>
              <Link
                to="/login"
                className="block px-3 py-2 rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-slate-800"
              >
                Log in
              </Link>
              <button
                onClick={toggleTheme}
                className="p-2 mt-4 rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition"
              >
                {theme === "light" ? <Moon className="w-5 h-5 text-gray-700" /> : <Sun className="w-5 h-5 text-yellow-400" />}
              </button>
            </div>
          </div>
        )}
      {/* </header> */}

   
    
    </header>
  );
}
