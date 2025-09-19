"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactUsForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  // ----------- Handlers -----------
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_owbmz8d",   // replace with your EmailJS Service ID
        "your_template_id",  // replace with your EmailJS Template ID
        formData,
        "your_public_key"    // replace with your EmailJS Public Key
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("Something went wrong. Please try again."));
  };

  // ----------- JSX -----------
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white flex justify-center py-16 px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-8 border border-gray-700"
      >
        <h1
          className="text-4xl font-extrabold text-center mb-4
                     bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                     bg-clip-text text-transparent"
        >
          Get in Touch
        </h1>

        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Message */}
        <TextArea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-10 py-3 inline-flex items-center gap-2
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                       rounded-xl text-lg font-semibold shadow-lg
                       hover:scale-105 transition-transform duration-200"
          >
            <Send className="w-5 h-5" /> Send Message
          </button>
        </div>

        {/* Status Message */}
        {status && (
          <p className="text-center text-sm text-gray-300 mt-2">{status}</p>
        )}
      </form>
    </div>
  );
}

// ----- Reusable Inputs -----
function Input({ label, ...props }) {
  return (
    <label className="flex flex-col text-gray-200 text-sm">
      {label}
      <input
        {...props}
        className="mt-1 p-3 rounded-lg bg-gray-900/60 border border-gray-700
                   focus:border-indigo-400 focus:ring focus:ring-indigo-400/40
                   outline-none text-white"
      />
    </label>
  );
}

function TextArea({ label, ...props }) {
  return (
    <label className="flex flex-col text-gray-200 text-sm">
      {label}
      <textarea
        {...props}
        className="mt-1 p-3 rounded-lg bg-gray-900/60 border border-gray-700
                   focus:border-indigo-400 focus:ring focus:ring-indigo-400/40
                   outline-none text-white"
      />
    </label>
  );
}
