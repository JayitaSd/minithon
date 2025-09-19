"use client";
import React from "react";
import Slider from "./Slider";
import { home1, home2, home3, home4 } from "../assets/homeImg";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function HomePage() {
  const details = [
    { img: home1, venue: "Indie Fest", description: "Live Music Night", date: "Sept 21, 2025" },
    { img: home2, venue: "Arena Show", description: "EDM Blast", date: "Oct 5, 2025" },
    { img: home3, venue: "Arena Show", description: "EDM Blast", date: "Oct 5, 2025" },
    { img: home4, venue: "Indie Carnival", description: "Summer Vibes", date: "Oct 15, 2025" },
  ];

  return (
    <main className="min-h-screen transition-colors bg-gradient-to-b from-gray-900 via-gray-950 to-black text-slate-100">

      {/* Hero Slider */}
      <section className="relative w-full h-[600px] md:h-[700px]">
        <Slider details={details} />
      </section>

      {/* Profile Section */}
      <section className="relative w-full h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={home2}
          alt="Background"
          className="absolute w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-blur-sm"></div>

        {/* Two-column Text */}
        <div className="relative max-w-6xl px-6 flex flex-col md:flex-row items-center md:items-start gap-10">
          
          {/* Left Column: Title */}
          <div className="flex-1 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Welcome to Artfolio
            </h1>
            <div className="flex gap-4 mt-4 text-white">
              <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter size={28} /></a>
              <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram size={28} /></a>
              <a href="#" className="hover:text-red-600 transition-colors"><FaYoutube size={28} /></a>
            </div>
          </div>

          {/* Right Column: Description */}
          <div className="flex-1 text-left bg-black/50 p-6 rounded-xl shadow-xl">
            <p className="text-lg md:text-xl leading-relaxed">
              Artfolio is a modern digital space designed for artists who want more than just a static portfolio. 
              We provide a dynamic platform where creativity meets interactivity — enabling you to showcase your work in multiple formats, connect with audiences, and collaborate with potential clients worldwide.
            </p>
         
          </div>

        </div>
      </section>

    </main>
  );
}
