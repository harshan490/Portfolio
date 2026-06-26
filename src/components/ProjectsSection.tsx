"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Object Detection",
    subtitle: "Real-time AI",
    image: "/images/object_detection_8k_1782472898188.png",
    tech: ["YOLOv8", "OpenCV", "Python"],
  },
  {
    id: 2,
    title: "Voice Assistant",
    subtitle: "NLP & Speech",
    image: "/images/voice_assistant_8k_1782472910167.png",
    tech: ["SpeechRecognition", "Google TTS", "Python"],
  },
  {
    id: 3,
    title: "Backend Development",
    subtitle: "Scalable APIs",
    image: "/images/backend_dev_8k_1782472923039.png",
    tech: ["Flask", "FastAPI", "MySQL", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Face Recognition",
    subtitle: "Computer Vision",
    image: "/images/face_recognition_8k_1782472938489.png",
    tech: ["TensorFlow", "Deep Learning", "CV"],
  },
  {
    id: 5,
    title: "Finger Detection",
    subtitle: "Gesture Control",
    image: "/images/finger_detection_8k_1782472951546.png",
    tech: ["OpenCV", "TensorFlow"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-32 bg-brand-black relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-7xl font-display font-bold uppercase">
            <span className="text-brand-papaya">Selected</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-silver">
              Works
            </span>
          </h2>
          <div className="hidden md:block">
            <MagneticButton>View GitHub</MagneticButton>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.2 }}
              className="group relative h-[40vh] md:h-[60vh] w-full rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image Background */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end z-10">
                <div className="overflow-hidden">
                  <motion.p
                    className="text-brand-papaya font-mono uppercase tracking-widest text-sm md:text-base mb-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                  >
                    {item.subtitle}
                  </motion.p>
                </div>
                <h3 className="font-display font-bold uppercase text-3xl md:text-5xl text-white mb-6">
                  {item.title}
                </h3>
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {item.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-mono rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-brand-silver">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Hover Reveal Links */}
                <div className="mt-2 overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500 flex gap-6">
                  <button className="flex items-center gap-2 text-white hover:text-brand-papaya transition-colors uppercase tracking-widest text-sm font-semibold">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> Source Code
                  </button>
                  <button className="flex items-center gap-2 text-white hover:text-brand-papaya transition-colors uppercase tracking-widest text-sm font-semibold">
                    <ExternalLink size={18} /> Live Demo
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
