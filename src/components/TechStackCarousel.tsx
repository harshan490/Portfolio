"use client";

import { motion } from "framer-motion";

const technologies = [
  "Python", "TensorFlow", "PyTorch", "FastAPI", "Flask", 
  "OpenCV", "MySQL", "PostgreSQL", "Git", "Docker", "Linux"
];

export default function TechStackCarousel() {
  return (
    <section className="w-full py-32 bg-brand-dark overflow-hidden relative border-t border-b border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/5 via-brand-dark to-brand-dark rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 mb-16 relative z-10 text-center">
        <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-brand-silver">
          Core Technologies
        </h2>
      </div>

      <div className="relative w-full max-w-5xl mx-auto min-h-[400px] flex items-center justify-center">
        {/* Center Node */}
        <div className="absolute w-24 h-24 rounded-full bg-brand-black border-2 border-brand-blue flex items-center justify-center shadow-[0_0_30px_rgba(14,165,255,0.2)] z-20">
          <span className="font-display font-bold text-white tracking-widest uppercase text-sm">AI / Core</span>
        </div>

        {/* Orbiting Elements */}
        {technologies.map((tech, i) => {
          // Calculate a fixed starting position on a circle, but let Framer Motion handle the orbit
          const radius = i % 2 === 0 ? 150 : 250; // Two orbit rings
          const duration = i % 2 === 0 ? 20 : 30; // Different speeds
          const delay = i * (duration / technologies.length);

          return (
            <motion.div
              key={tech}
              animate={{ rotate: 360 }}
              transition={{ ease: "linear", duration, repeat: Infinity, delay: -delay }}
              className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none origin-center"
              style={{ width: radius * 2, height: radius * 2, marginLeft: -radius, marginTop: -radius }}
            >
              {/* The counter-rotating icon to keep text upright */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ ease: "linear", duration, repeat: Infinity, delay: -delay }}
                className="absolute top-0 left-1/2 -ml-12 w-24 h-24 pointer-events-auto"
              >
                <div className="w-full h-full glass rounded-xl flex items-center justify-center border border-white/10 hover:border-brand-blue hover:bg-white/10 transition-colors cursor-crosshair group backdrop-blur-md">
                  <span className="text-xs font-mono text-brand-silver group-hover:text-white transition-colors">{tech}</span>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
