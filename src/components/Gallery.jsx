"use client";
import React, { useState } from "react";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { home1, home2, home3, home4 } from "../assets/homeImg";
export default function HoverPreviewWithSlideshow() {
  const galleryImages = [
    home1,home2,home3,home4
  ];

  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [slideshowOpen, setSlideshowOpen] = useState(false);

  const openSlideshow = (index) => {
    setHoveredIndex(index);
    setSlideshowOpen(true);
  };

  const closeSlideshow = () => setSlideshowOpen(false);

  const prevImage = () => {
    setHoveredIndex((hoveredIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextImage = () => {
    setHoveredIndex((hoveredIndex + 1) % galleryImages.length);
  };

  return (
    <section className="py-16 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-8 text-center">
          Interactive Gallery Preview & Slideshow
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Hover on a thumbnail to preview
        </p>

        {/* Thumbnails */}
        <div className="flex gap-4 justify-center flex-wrap mb-8">
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 transition ${
                hoveredIndex === idx ? "border-indigo-500" : "border-transparent"
              }`}
              onMouseEnter={() => setHoveredIndex(idx)}
            />
          ))}
        </div>

        {/* Large Preview */}
        <div className="flex justify-center">
          <div
            className="w-full md:w-[700px] h-[400px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => openSlideshow(hoveredIndex)}
          >
            <img
              src={galleryImages[hoveredIndex]}
              alt={`Preview ${hoveredIndex + 1}`}
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Slideshow Modal */}
      {slideshowOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeSlideshow}
            className="absolute top-6 right-6 text-white text-2xl p-2 hover:text-indigo-400 transition"
          >
            <FaTimes />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-2xl p-2 hover:text-indigo-400 transition"
          >
            <FaArrowLeft />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-2xl p-2 hover:text-indigo-400 transition"
          >
            <FaArrowRight />
          </button>

          {/* Slideshow Image */}
          <div className="max-w-4xl max-h-[80vh] overflow-hidden rounded-xl shadow-lg">
            <img
              src={galleryImages[hoveredIndex]}
              alt={`Gallery ${hoveredIndex + 1}`}
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      )}
    </section>
  );
}
