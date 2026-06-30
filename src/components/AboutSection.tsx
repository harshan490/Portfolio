"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-32 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden glass-strong border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-papaya/20 to-brand-blue/20 mix-blend-overlay z-10" />
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
                alt="AI Concept"
                className="w-full h-full object-cover opacity-80"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-8 -right-8 glass-strong shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl hidden md:block max-w-xs z-20"
            >
              <p className="text-sm font-mono text-white font-medium drop-shadow-sm leading-relaxed">
                Currently pursuing B.Tech Artificial Intelligence and Data Science (2024–2028).
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-brand-papaya uppercase tracking-[0.3em] text-sm font-semibold mb-6"
            >
              About Me
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8"
            >
              Architecting the <span className="text-brand-silver">Future</span> of Intelligence.
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-brand-silver text-lg leading-relaxed flex flex-col gap-6"
            >
              <p>
                I am an ambitious AI & Data Science Engineer deeply passionate about translating complex mathematical concepts into scalable, real-world solutions. My focus lies at the intersection of advanced machine learning algorithms and robust backend architectures.
              </p>
              <p>
                Currently studying at the <span className="text-white font-semibold">Chennai Institute of Technology</span>, I am continuously exploring the boundaries of <span className="text-white">Deep Learning</span> and <span className="text-white">Computer Vision</span>. I believe in building systems that not only analyze data but actively perceive and interact with their environments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 grid grid-cols-2 gap-4"
            >
              {[
                "Artificial Intelligence",
                "Machine Learning",
                "Computer Vision",
                "Backend Systems",
                "Deep Learning",
                "Scalable AI Applications",
              ].map((interest, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-papaya" />
                  <span className="text-sm uppercase tracking-widest text-white">{interest}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
