"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  { title: "Introduction to Modern AI", issuer: "Tech Institute" },
  { title: "IoT and Digital Transformation", issuer: "Industry Certification" },
  { title: "Introduction to Data Science", issuer: "Data Camp" },
  { title: "AI Fundamentals", issuer: "IBM SkillsBuild" },
  { title: "Introduction to Cybersecurity", issuer: "Security Consortium" },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="w-full py-32 bg-brand-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-7xl font-display font-bold uppercase">
            <span className="text-brand-papaya">Verified</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-silver">
              Expertise
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group h-64 perspective-1000"
            >
              {/* Flip Container */}
              <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden glass p-8 rounded-2xl flex flex-col justify-between border-t-2 border-brand-papaya/50 hover:bg-white/5 transition-colors">
                  <Award size={32} className="text-brand-papaya" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-mono text-brand-silver">
                      Hover to view details
                    </p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden glass-strong p-8 rounded-2xl flex flex-col items-center justify-center text-center rotate-y-180 bg-brand-papaya/10 border border-brand-papaya/30">
                  <span className="text-xs uppercase tracking-widest text-brand-silver mb-2">Issued By</span>
                  <p className="text-xl font-display font-bold text-white mb-6">
                    {cert.issuer}
                  </p>
                  <button className="px-6 py-2 rounded-full border border-white/20 text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                    View Credential
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
