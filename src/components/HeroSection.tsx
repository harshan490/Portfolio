"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

const roles = [
  "AI & Data Science Engineer",
  "Machine Learning Developer",
  "Computer Vision Engineer",
  "Backend Developer",
  "AI Research Enthusiast"
];

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Reveal Effect State
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isHovered = useMotionValue(0);

  // Smooth Springs for Wavy Trail Effect
  const smoothX0 = useSpring(mouseX, { damping: 25, stiffness: 200 });
  const smoothY0 = useSpring(mouseY, { damping: 25, stiffness: 200 });
  
  const smoothX1 = useSpring(smoothX0, { damping: 30, stiffness: 180 });
  const smoothY1 = useSpring(smoothY0, { damping: 30, stiffness: 180 });
  
  const smoothX2 = useSpring(smoothX1, { damping: 35, stiffness: 160 });
  const smoothY2 = useSpring(smoothY1, { damping: 35, stiffness: 160 });
  
  const smoothX3 = useSpring(smoothX2, { damping: 40, stiffness: 140 });
  const smoothY3 = useSpring(smoothY2, { damping: 40, stiffness: 140 });

  const smoothHover = useSpring(isHovered, { damping: 20, stiffness: 200 });
  
  const size0 = useTransform(smoothHover, [0, 1], [0, 250]);
  const size1 = useTransform(smoothHover, [0, 1], [0, 200]);
  const size2 = useTransform(smoothHover, [0, 1], [0, 150]);
  const size3 = useTransform(smoothHover, [0, 1], [0, 100]);

  // Combined multiple radial gradients to create a trailing liquid/wavy reveal
  // Black 40%, transparent 100% ensures the center is fully opaque, fixing the reduced opacity issue.
  const maskImage = useMotionTemplate`
    radial-gradient(circle ${size0}px at ${smoothX0}px ${smoothY0}px, black 40%, transparent 100%),
    radial-gradient(circle ${size1}px at ${smoothX1}px ${smoothY1}px, black 40%, transparent 100%),
    radial-gradient(circle ${size2}px at ${smoothX2}px ${smoothY2}px, black 40%, transparent 100%),
    radial-gradient(circle ${size3}px at ${smoothX3}px ${smoothY3}px, black 40%, transparent 100%)
  `;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!container.current) return;
    const rect = container.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  useEffect(() => {
    // Role cycling
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section 
        ref={container} 
        className="relative h-screen w-full overflow-hidden bg-brand-black"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => isHovered.set(1)}
        onMouseLeave={() => isHovered.set(0)}
      >
        {/* Background Images with Hover Reveal Effect */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="/harshan.png"
            alt="Harshan"
            className="w-full h-full object-cover object-center opacity-100"
          />

          <motion.div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              WebkitMaskImage: maskImage,
              maskImage: maskImage,
            }}
          >
            <img
              src="/harshan_hoodie.png"
              alt="Harshan in Hoodie"
              className="w-full h-full object-cover object-center opacity-100"
            />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-xs uppercase tracking-widest text-brand-silver">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-full bg-brand-papaya"
            />
          </div>
        </motion.div>
      </section>

      {/* Reveal Section after Scroll */}
      <section className="relative w-full bg-brand-black py-24 md:py-32 z-30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            {/* Roles */}
            <div className="overflow-hidden mb-6 h-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center gap-4 text-brand-papaya uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm font-semibold"
                >
                  <span className="w-6 md:w-12 h-[2px] bg-brand-papaya"></span>
                  {roles[roleIndex]}
                  <span className="w-6 md:w-12 h-[2px] bg-brand-papaya"></span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Name */}
            <h1 className="font-display font-bold uppercase leading-[0.85] tracking-tighter text-[15vw] md:text-[120px] text-white overflow-hidden pb-8">
              <div className="inline-block">A.</div>
              <div className="inline-block text-brand-silver ml-4">Harshan</div>
            </h1>

            {/* Redesigned Specifications / Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-12">
              {[
                { label: "Projects Completed", value: "15+", desc: "AI, ML, & Backend" },
                { label: "Models Developed", value: "10+", desc: "CV & NLP pipelines" },
                { label: "Core Tech Stack", value: "Python", desc: "FastAPI, PyTorch, React" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.5 }}
                  className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <span className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value.replace('+', '')}
                    {stat.value.includes('+') && <span className="text-brand-papaya">+</span>}
                  </span>
                  <span className="text-sm uppercase tracking-widest text-brand-silver mb-2">{stat.label}</span>
                  <span className="text-xs text-brand-silver/60">{stat.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
