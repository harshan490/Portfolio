"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-dark pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-papaya/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Link href="/" className="text-4xl font-display font-bold uppercase tracking-wider text-white">
              <span className="text-brand-papaya">A</span>
              <span>.</span>
              <span className="text-brand-papaya">H</span>
            </Link>
            <p className="text-brand-silver max-w-sm">
              Official digital portfolio of A. Harshan. AI & Data Science Engineer building intelligent systems.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-brand-silver hover:text-white hover:border-brand-papaya hover:bg-brand-papaya/10 transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-brand-silver hover:text-white hover:border-brand-papaya hover:bg-brand-papaya/10 transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-brand-silver hover:text-white hover:border-brand-papaya hover:bg-brand-papaya/10 transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-display font-bold uppercase tracking-widest text-lg">Explore</h4>
            <nav className="flex flex-col gap-4">
              {["About", "Skills", "Projects", "Experience", "Certifications"].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-brand-silver hover:text-brand-papaya transition-colors flex items-center gap-1 group w-fit"
                >
                  {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter / Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-display font-bold uppercase tracking-widest text-lg">Stay Connected</h4>
            <p className="text-brand-silver text-sm">Open to exciting opportunities in AI, Machine Learning, and Backend Development.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-papaya transition-colors"
              />
              <button 
                type="button"
                className="bg-brand-papaya text-black font-bold uppercase tracking-widest text-sm py-3 rounded-lg hover:bg-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-silver">
          <p>&copy; {currentYear} A. Harshan. AI & Data Science Portfolio.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Designed & Developed by A. Harshan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
