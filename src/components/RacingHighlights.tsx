"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const highlights = [
  {
    id: 1,
    title: "Miami Magic",
    subtitle: "Maiden Victory",
    image: "https://images.unsplash.com/photo-1541460394016-3a726354fb29?q=80&w=2670&auto=format&fit=crop",
    year: "2024",
  },
  {
    id: 2,
    title: "Monza Masterclass",
    subtitle: "Historic 1-2 Finish",
    image: "https://images.unsplash.com/photo-1574345381831-2fc5ccf0b8d5?q=80&w=2671&auto=format&fit=crop",
    year: "2021",
  },
  {
    id: 3,
    title: "Silverstone Sensation",
    subtitle: "Home Podium",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop",
    year: "2023",
  },
];

export default function RacingHighlights() {
  return (
    <section className="w-full py-32 bg-brand-black relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-7xl font-display font-bold uppercase">
            <span className="text-brand-papaya">Iconic</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-silver">
              Moments
            </span>
          </h2>
          <div className="hidden md:block">
            <MagneticButton>View All Races</MagneticButton>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative h-[40vh] md:h-[60vh] w-full rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image / Video Background */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end z-10">
                <div className="overflow-hidden">
                  <motion.p
                    className="text-brand-papaya font-mono uppercase tracking-widest text-sm md:text-base mb-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                  >
                    {item.year} — {item.subtitle}
                  </motion.p>
                </div>
                <h3 className="font-display font-bold uppercase text-4xl md:text-6xl text-white">
                  {item.title}
                </h3>
                
                {/* Hover Reveal Button */}
                <div className="mt-6 overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500">
                  <button className="flex items-center gap-2 text-white hover:text-brand-papaya transition-colors uppercase tracking-widest text-sm font-semibold">
                    <span className="w-8 h-[1px] bg-current" />
                    Read Story
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
