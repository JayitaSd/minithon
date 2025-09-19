"use client";
import React, { useState, useEffect } from "react";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { home1, home2, home3, home4 } from "../assets/homeImg";

export default function HoverPreviewWithSlideshow() {
  const [galleryImages, setGalleryImages] = useState([
    {
      file: home1,
      artistName: "Aarav Mehta",
      description: "A soothing play of light and shadows across modern architecture.",
    },
    {
      file: home2,
      artistName: "Meera Kapoor",
      description: "Captures the vibrant pulse of everyday life in a bustling city.",
    },
    {
      file: home3,
      artistName: "Rohan Das",
      description: "An abstract interpretation of serenity blended with bold colors.",
    },
    {
      file: home4,
      artistName: "Ishita Verma",
      description: "A glimpse of nature’s quiet beauty frozen in a timeless frame.",
    },
  ]);

  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [slideshowOpen, setSlideshowOpen] = useState(false);

  // Load uploaded images from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("artistData");
    if (stored) {
      const artist = JSON.parse(stored);
      if (artist.media && artist.media.length > 0) {
        const uploadedFiles = artist.media
          .filter((m) => m.file)
          .map((m) => ({
            file: m.file,
            artistName: artist.name || "Unknown Artist",
            description: m.desc || "No description available.",
          }));
        setGalleryImages((prev) => {
        // check duplicates by file string
        const existingFiles = new Set(prev.map((img) => img.file));
        const uniqueNew = uploadedFiles.filter((img) => !existingFiles.has(img.file));
        return [...prev, ...uniqueNew];
      });
      }
    }
  }, []);

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
              src={img.file}
              alt={`Thumbnail ${idx + 1}`}
              className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 transition ${
                hoveredIndex === idx ? "border-indigo-500" : "border-transparent"
              }`}
              onMouseEnter={() => setHoveredIndex(idx)}
            />
          ))}
        </div>

        {/* Large Preview */}
        <div className="flex flex-col items-center">
          <div
            className="w-full md:w-[700px] h-[400px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => openSlideshow(hoveredIndex)}
          >
            <img
              src={galleryImages[hoveredIndex].file}
              alt={`Preview ${hoveredIndex + 1}`}
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
          {/* Artist info under preview */}
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold">
              {galleryImages[hoveredIndex].artistName}
            </h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              {galleryImages[hoveredIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* Slideshow Modal */}
      {slideshowOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-6">
          <button
            onClick={closeSlideshow}
            className="absolute top-6 right-6 text-white text-2xl p-2 hover:text-indigo-400 transition"
          >
            <FaTimes />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-2xl p-2 hover:text-indigo-400 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-2xl p-2 hover:text-indigo-400 transition"
          >
            <FaArrowRight />
          </button>

          <div className="max-w-4xl max-h-[70vh] overflow-hidden rounded-xl shadow-lg">
            <img
              src={galleryImages[hoveredIndex].file}
              alt={`Gallery ${hoveredIndex + 1}`}
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Artist info in slideshow */}
          <div className="mt-4 text-center max-w-lg">
            <h3 className="text-xl font-semibold">
              {galleryImages[hoveredIndex].artistName}
            </h3>
            <p className="text-gray-300 text-sm">
              {galleryImages[hoveredIndex].description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
 