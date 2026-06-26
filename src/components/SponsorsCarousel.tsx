"use client";

import { motion } from "framer-motion";

const sponsors = [
  "DELL TECHNOLOGIES",
  "GOOGLE CHROME",
  "RICHARD MILLE",
  "JACK DANIELS",
  "DP WORLD",
  "MONSTER ENERGY",
  "HILTON",
  "CISCO",
];

export default function SponsorsCarousel() {
  return (
    <section id="partners" className="w-full py-24 bg-brand-dark overflow-hidden border-t border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12 mb-12 flex justify-between items-end">
        <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-brand-silver">
          Official Partners
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Gradient Masks for smooth fade at edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />
        
        {/* Track 1 */}
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex flex-shrink-0 items-center gap-16 md:gap-32 px-8"
        >
          {sponsors.map((sponsor, index) => (
            <div
              key={`track1-${index}`}
              className="text-2xl md:text-4xl font-display font-bold uppercase text-white/30 hover:text-white transition-colors duration-500 whitespace-nowrap cursor-pointer hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              {sponsor}
            </div>
          ))}
        </motion.div>
        
        {/* Track 2 (Duplicate for infinite effect) */}
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex flex-shrink-0 items-center gap-16 md:gap-32 px-8"
        >
          {sponsors.map((sponsor, index) => (
            <div
              key={`track2-${index}`}
              className="text-2xl md:text-4xl font-display font-bold uppercase text-white/30 hover:text-white transition-colors duration-500 whitespace-nowrap cursor-pointer hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              {sponsor}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
