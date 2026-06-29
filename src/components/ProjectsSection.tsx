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
    githubLink: "https://github.com/harshan490/Face-Emotion-Reader",
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
            <a href="https://github.com/harshan490" target="_blank" rel="noopener noreferrer">
              <MagneticButton>View GitHub</MagneticButton>
            </a>
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
                  {item.githubLink && (
                    <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-brand-papaya transition-colors uppercase tracking-widest text-sm font-semibold">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> Source Code
                    </a>
                  )}
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
