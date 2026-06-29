"use client";

import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

const technologies = [
  "Python", "TensorFlow", "PyTorch", "FastAPI", "Flask", 
  "OpenCV", "MySQL", "PostgreSQL", "Git", "Docker", "Linux"
];

export default function TechStackCarousel() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const centerX = 50;
  const centerY = 50;
  
  const nodes = useMemo(() => {
    return technologies.map((tech, i) => {
      const angle = (i / technologies.length) * 2 * Math.PI;
      // Use different radii for an organic feel, kept within bounds to avoid clipping
      const radiusX = i % 2 === 0 ? 28 : 40; 
      const radiusY = i % 2 === 0 ? 28 : 40; 
      
      const jitterX = (Math.random() - 0.5) * 5;
      const jitterY = (Math.random() - 0.5) * 5;

      const x = centerX + radiusX * Math.cos(angle) + jitterX;
      const y = centerY + radiusY * Math.sin(angle) + jitterY;
      
      // Control points for bezier curve (organic neuron look)
      const cp1x = centerX + (x - centerX) * 0.4 - (y - centerY) * 0.3;
      const cp1y = centerY + (y - centerY) * 0.4 + (x - centerX) * 0.3;

      const cp2x = centerX + (x - centerX) * 0.7 + (y - centerY) * 0.2;
      const cp2y = centerY + (y - centerY) * 0.7 - (x - centerX) * 0.2;
      
      const pathD = `M ${centerX} ${centerY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`;

      return { tech, x, y, pathD };
    });
  }, []);

  return (
    <section className="w-full py-32 bg-brand-dark overflow-hidden relative border-t border-b border-white/5">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-papaya/10 via-brand-dark to-brand-dark rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 mb-8 relative z-10 text-center">
        <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-brand-silver">
          Core Technologies
        </h2>
      </div>

      <div className="relative w-full max-w-6xl mx-auto h-[600px] md:h-[800px] flex items-center justify-center">
        
        {mounted && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {nodes.map((node, i) => (
              <g key={`path-${i}`}>
                {/* Neural pathway base */}
                <path 
                  d={node.pathD} 
                  fill="none" 
                  stroke="rgba(255, 122, 0, 0.15)" 
                  strokeWidth="0.2" 
                />
                
                {/* Flowing electrical signal */}
                <motion.path
                  d={node.pathD}
                  fill="none"
                  stroke="#FF7A00"
                  strokeWidth="0.4"
                  strokeLinecap="round"
                  filter="url(#neon-glow)"
                  initial={{ pathLength: 0.15, pathOffset: 0, opacity: 0 }}
                  animate={{ 
                    pathOffset: [0, 1],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 3
                  }}
                />
              </g>
            ))}
          </svg>
        )}

        {/* Center Brain Node */}
        <div className="absolute z-20 flex flex-col items-center justify-center pointer-events-auto group cursor-pointer" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          <motion.div 
            animate={{ 
              boxShadow: ["0px 0px 40px rgba(255,122,0,0.4)", "0px 0px 100px rgba(255,122,0,0.8)", "0px 0px 40px rgba(255,122,0,0.4)"] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-brand-black/40 border-t-2 border-brand-papaya/50 flex flex-col items-center justify-center backdrop-blur-3xl overflow-hidden transition-all duration-500 group-hover:-translate-y-3 group-hover:bg-brand-papaya group-hover:border-brand-papaya"
          >
            {/* Internal ambient blur/glow for the circle */}
            <div className="absolute inset-0 bg-brand-papaya/10 blur-2xl rounded-full pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
            
            <motion.div
              animate={{ 
                filter: [
                  "drop-shadow(0px 0px 10px rgba(255,122,0,0.5))", 
                  "drop-shadow(0px 0px 25px rgba(255,122,0,1))", 
                  "drop-shadow(0px 0px 10px rgba(255,122,0,0.5))"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 text-brand-papaya mb-2 group-hover:text-black transition-colors duration-500"
            >
              <BrainCircuit className="w-16 h-16 md:w-20 md:h-20" />
            </motion.div>

            <span className="font-display font-bold text-white tracking-widest uppercase text-xs md:text-sm z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:text-black group-hover:drop-shadow-none transition-all duration-500">
              AI CORE
            </span>
          </motion.div>
        </div>

        {/* Orbiting Technology Nodes */}
        {mounted && nodes.map((node, i) => (
          <div
            key={node.tech}
            className="absolute z-10 pointer-events-auto"
            style={{ 
              left: `${node.x}%`, 
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8, type: "spring" }}
              className="px-4 py-2 md:px-6 md:py-3 glass rounded-xl border-t-2 border-brand-papaya/50 flex items-center justify-center transition-all duration-500 shadow-[0_0_15px_rgba(255,122,0,0.1)] hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(255,122,0,0.4)] hover:!bg-brand-papaya hover:!border-brand-papaya cursor-crosshair group backdrop-blur-xl"
            >
              <span className="text-sm md:text-base font-mono text-brand-silver group-hover:!text-black transition-colors duration-500">{node.tech}</span>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
