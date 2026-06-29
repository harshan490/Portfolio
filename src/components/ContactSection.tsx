"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight, Mail, FileText, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-32 bg-brand-dark relative border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-bold uppercase mb-6">
                Let's <span className="text-brand-papaya">Connect</span>
              </h2>
              <p className="text-brand-silver text-lg max-w-md mb-12">
                Open for opportunities in Artificial Intelligence, Machine Learning, and Backend Development. Whether it's a project collaboration or an internship offer, I'd love to hear from you.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-silver mb-2">General Inquiries</span>
                <a href="mailto:harshanalagarsamy@gmail.com" className="text-2xl md:text-3xl font-display text-white hover:text-brand-papaya transition-colors flex items-center gap-4 group">
                  harshanalagarsamy@gmail.com
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-silver mb-2">Phone</span>
                <a href="tel:9345638478" className="text-2xl md:text-3xl font-display text-white hover:text-brand-papaya transition-colors flex items-center gap-4 group">
                  +91 93456 38478
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Buttons/Actions */}
          <div className="flex flex-col justify-center items-center lg:items-end gap-6">
            <MagneticButton>
              <div className="flex items-center gap-2">
                <Mail size={18} /> Email Me
              </div>
            </MagneticButton>
            <a href="https://www.linkedin.com/in/harshan-alagarsamy-051716214/" target="_blank" rel="noopener noreferrer">
              <MagneticButton>
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn Profile
                </div>
              </MagneticButton>
            </a>
            <a href="https://github.com/harshan490" target="_blank" rel="noopener noreferrer">
              <MagneticButton>
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> GitHub Profile
                </div>
              </MagneticButton>
            </a>
            <MagneticButton>
              <div className="flex items-center gap-2">
                <FileText size={18} /> Download Resume
              </div>
            </MagneticButton>
          </div>

        </div>
      </div>
    </section>
  );
}
