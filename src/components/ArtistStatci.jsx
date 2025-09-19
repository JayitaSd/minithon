import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ArtistPortfolio() {
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("artistData");
    if (stored) setArtist(JSON.parse(stored));
  }, []);

  if (!artist) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>No artist data found. Please submit the form first.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white">
      {/* ---------- MAIN CONTENT ---------- */}
      <main className="flex-1 px-6 py-20">
        {/* Header */}
        <section className="text-center mb-24">
          <h1
            className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 
                       bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                       bg-clip-text text-transparent"
          >
            {artist.name}
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            {artist.description}
          </p>

          <div className="flex justify-center mt-6 space-x-6">
            {artist.instagram && (
              <a
                href={artist.instagram}
                className="text-pink-400 hover:text-pink-300"
                target="_blank" rel="noreferrer"
              >
                Instagram
              </a>
            )}
            {artist.linkedin && (
              <a
                href={artist.linkedin}
                className="text-blue-400 hover:text-blue-300"
                target="_blank" rel="noreferrer"
              >
                LinkedIn
              </a>
            )}
            {artist.email && (
              <a
                href={`mailto:${artist.email}`}
                className="text-gray-300 hover:text-white"
              >
                {artist.email}
              </a>
            )}
          </div>
        </section>

        {/* Timeline of Works */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b 
                          from-indigo-500 via-purple-500 to-pink-500 rounded-full h-full"></div>

          { artist.media.map((work, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ x: isLeft ? -120 : 120, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="mb-24 flex flex-col md:flex-row items-center relative"
              >
                {isLeft ? (
                  <>
                    <WorkCard work={work} side="left" />
                    <ImageCard img={work.file} />
                  </>
                ) : (
                  <>
                    <ImageCard img={work.file} />
                    <WorkCard work={work} side="right" />
                  </>
                )}
                {/* Dot */}
                <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
                                 w-10 h-10 rounded-full border-4 border-gray-900
                                 bg-gradient-to-br from-indigo-500 to-pink-500 shadow-lg"></span>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

/* ---------- Sub-Components ---------- */
function WorkCard({ work, side }) {
  return (
    <div
      className={`md:w-5/12 bg-gray-800/60 backdrop-blur-sm 
                  border border-gray-700 rounded-xl shadow-xl 
                  p-6 md:p-8 m-4 hover:scale-[1.02] hover:shadow-2xl
                  transition-all duration-300 ${side === "left" ? "md:mr-auto" : "md:ml-auto"}`}
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-indigo-300 tracking-wide">
        {work.title}
      </h2>
      <p className="text-gray-300 leading-relaxed">{work.desc}</p>
    </div>
  );
}

function ImageCard({ img }) {
  return (
    <div className="md:w-5/12 m-4">
      <img
        src={img}
        alt=""
        className="rounded-xl shadow-lg border border-gray-700 object-cover w-full h-64
                   hover:scale-[1.03] transition-transform duration-300"
      />
    </div>
  );
}
