"use client";
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/80 dark:bg-slate-900/80 backdrop-blur-md text-white py-10 px-6 lg:px-12 rounded-t-xl shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & Tagline */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="Logo"
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold font-mono">ArtFolio</span>
          </Link>
          <p className="text-sm text-gray-400">
            Empowering artists to share, shine, and inspire.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 font-semibold">
          <h3 className="text-lg mb-2">Explore</h3>
          <Link to="/gallery" className="hover:text-indigo-400 transition">Gallery</Link>
          <Link to="/artist-form" className="hover:text-indigo-400 transition">Form for Artist</Link>
          <Link to="/contact-us" className="hover:text-indigo-400 transition">Contact Us</Link>
          <Link to="/login" className="hover:text-indigo-400 transition">Login</Link>
        </div>

        {/* Social & Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg mb-2 font-semibold">Connect</h3>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6 hover:text-pink-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 hover:text-blue-400 transition" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-6 w-6 hover:text-indigo-500 transition" />
            </a>
            <a href="mailto:hello@artfolio.com">
              <Mail className="h-6 w-6 hover:text-green-400 transition" />
            </a>
          </div>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} ArtFolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}