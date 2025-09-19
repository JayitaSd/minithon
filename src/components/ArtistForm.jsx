import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ArtistForm() {
  const navigate = useNavigate();  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    instagram: "",
    linkedin: "",
    media: [{ file: "", title: "", desc: "" }], // file will hold base64 string
  });

  // ----------- Handlers -----------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMediaChange = (index, field, value) => {
    const updated = [...formData.media];
    updated[index][field] = value;
    setFormData((prev) => ({ ...prev, media: updated }));
  };

  const handleFileChange = (index, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const updated = [...formData.media];
      updated[index].file = ev.target.result; // base64 string
      setFormData((prev) => ({ ...prev, media: updated }));
    };
    reader.readAsDataURL(file);
  };

  const addMedia = () => {
    if (formData.media.length < 5) {
      setFormData((prev) => ({
        ...prev,
        media: [...prev.media, { file: "", title: "", desc: "" }],
      }));
    }
  };

  const removeMedia = (i) => {
    const updated = formData.media.filter((_, idx) => idx !== i);
    setFormData((prev) => ({ ...prev, media: updated }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.media[0].file) {
      alert("Please upload at least one image or video.");
      return;
    }

    // Save entire object as JSON string in localStorage
    localStorage.setItem("artistData", JSON.stringify(formData));

    alert("Submitted! Data saved to localStorage.");
    navigate("/static");  // Redirect to the static page after submission
  };

  // ----------- JSX -----------
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white flex justify-center py-16 px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-8 border border-gray-700"
      >
        <h1 className="text-4xl font-extrabold text-center mb-4
                       bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                       bg-clip-text text-transparent">
          Artist Submission Form
        </h1>

        {/* Basic Info */}
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

        <TextArea
          label="Artist Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Instagram ID"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
          />
          <Input
            label="LinkedIn ID"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
          />
        </div>

        {/* Media Uploads */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
            Media Upload (Images or Videos) – max 5 (limit: 5MB)
          </h2>

          {formData.media.map((m, index) => (
            <div
              key={index}
              className="mb-6 p-4 border border-gray-700 rounded-xl bg-gray-800/50 space-y-4"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <input
                  type="file"
                  accept="image/*,video/*"
                  className="block w-full text-sm text-gray-300 
                             file:mr-4 file:py-2 file:px-4
                             file:rounded-full file:border-0
                             file:text-sm file:font-semibold
                             file:bg-indigo-500 file:text-white
                             hover:file:bg-indigo-600"
                  onChange={(e) =>
                    handleFileChange(index, e.target.files[0] || null)
                  }
                  required={index === 0}
                />
                {formData.media.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeMedia(index)}
                    className="text-pink-400 hover:text-pink-300 font-medium"
                  >
                    Remove
                  </button>
                )}
              </div>

              <Input
                label="Media Name"
                value={m.title}
                onChange={(e) =>
                  handleMediaChange(index, "title", e.target.value)
                }
                required={index === 0}
              />
              <TextArea
                label="Media Description"
                value={m.desc}
                onChange={(e) =>
                  handleMediaChange(index, "desc", e.target.value)
                }
                rows={3}
                required={index === 0}
              />
            </div>
          ))}

          {formData.media.length < 5 && (
            <button
              type="button"
              onClick={addMedia}
              className="mt-4 inline-flex items-center px-4 py-2
                         bg-gradient-to-r from-indigo-500 to-pink-500
                         text-white rounded-xl shadow hover:scale-105
                         transition-transform duration-200"
            >
              + Add Media
            </button>
          )}
        </section>

        <div className="text-center">
          <button
            type="submit"
            className="px-10 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                       rounded-xl text-lg font-semibold shadow-lg
                       hover:scale-105 transition-transform duration-200"
          >
            Submit
          </button>
        </div>
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
