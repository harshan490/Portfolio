"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "Java", level: 80 },
    ],
  },
  {
    title: "Frameworks & Backend",
    skills: [
      { name: "FastAPI", level: 85 },
      { name: "Flask", level: 80 },
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 70 },
      { name: "OpenCV", level: 85 },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
    ],
  },
  {
    title: "Specializations",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Computer Vision", level: 88 },
      { name: "Deep Learning", level: 80 },
      { name: "Backend APIs", level: 90 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-32 bg-brand-black relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-7xl font-display font-bold uppercase">
              Technical <span className="text-brand-papaya">Arsenal</span>
            </h2>
            <p className="text-brand-silver mt-4 max-w-xl text-lg">
              A comprehensive toolkit for building intelligent, scalable, and impactful AI applications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass p-8 rounded-3xl flex flex-col group hover:bg-white/5 hover:border-brand-papaya/30 transition-colors"
            >
              <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-8 border-b border-white/10 pb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-col gap-6">
                {category.skills.map((skill, j) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm font-mono text-brand-silver">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full h-1 bg-brand-dark rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-brand-papaya rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + j * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
