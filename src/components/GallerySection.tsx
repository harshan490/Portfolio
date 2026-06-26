"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1598284698501-c8172ce34df3?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1536690467438-e6b7b2eb25e6?q=80&w=2672&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518428135061-6d7ed74a81ba?q=80&w=2564&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1588691552554-e401ec86ff2a?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1563200788-b4b9b6e82da8?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?q=80&w=2670&auto=format&fit=crop",
];

export default function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="w-full py-32 bg-brand-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-7xl font-display font-bold uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-silver">
              Behind the
            </span>{" "}
            <span className="text-brand-papaya">Visor</span>
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="relative overflow-hidden rounded-2xl cursor-pointer group break-inside-avoid"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-brand-papaya/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              {/* Optional hover icon */}
              <div
                className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-300 ${
                  hoveredIndex === i ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-brand-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
