import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-32 lg:px-12 text-center">
        {/* Floating Gradient Blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-24 w-80 h-80 bg-indigo-400 opacity-20 rounded-full blur-2xl animate-bounce"></div>

        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
          Build Anything, Fast
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-500 dark:text-gray-300">
          Hackathon-ready components, animations, and pages.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-500 transition">
            Get Started
          </Link>
          <Link className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-100 transition">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
