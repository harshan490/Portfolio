"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "#resume" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for background change
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      initial="visible"
      animate="visible"
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-black/70 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo with Hover Color Fill Animation */}
        <Link href="/" className="relative z-50 flex items-center group h-8 w-auto">
          {/* Base transparent/white logo */}
          <img src="/ah_logo.png" alt="A.H Logo" className="h-full w-auto object-contain transition-opacity duration-300 group-hover:opacity-0" />
          
          {/* Fill overlay - Uses CSS mask to color fill the exact shape */}
          <div 
            className="absolute inset-0 bg-brand-papaya opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
            style={{ 
              WebkitMaskImage: 'url(/ah_logo.png)', 
              WebkitMaskSize: 'contain', 
              WebkitMaskRepeat: 'no-repeat', 
              WebkitMaskPosition: 'left center',
              maskImage: 'url(/ah_logo.png)', 
              maskSize: 'contain', 
              maskRepeat: 'no-repeat', 
              maskPosition: 'left center'
            }}
          />
        </Link>

        {/* Minimalist Top Right Menu Toggle */}
        <button
          className="relative z-50 text-white p-2 group flex items-center gap-3 hover:text-brand-papaya transition-colors outline-none focus-visible:outline-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="hidden md:block text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300">
            {mobileMenuOpen ? "Close" : "Menu"}
          </span>
          <div className="flex items-center justify-center">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={`w-7 h-7 overflow-visible transition-transform duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] [&_path]:transition-transform [&_path]:duration-700 [&_path]:ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
                mobileMenuOpen ? "rotate-45 text-brand-papaya" : ""
              }`}
            >
              <path
                className={mobileMenuOpen ? "[transform:rotate(112.5deg)_translate(-27.2%,-80.2%)]" : ""}
                d="m3.45,8.83c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L14.71,2.08c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L3.84,8.75c-.13.05-.25.08-.38.08Z"
              ></path>
              <path
                className={mobileMenuOpen ? "[transform:rotate(22.5deg)_translate(15.5%,-23%)]" : ""}
                d="m2.02,17.13c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L21.6,6.94c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L2.4,17.06c-.13.05-.25.08-.38.08Z"
              ></path>
              <path
                className={mobileMenuOpen ? "[transform:rotate(112.5deg)_translate(-15%,-149.5%)]" : ""}
                d="m8.91,21.99c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31l11.64-4.82c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31l-11.64,4.82c-.13.05-.25.08-.38.08Z"
              ></path>
            </svg>
          </div>
        </button>

        {/* Full Screen Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-0 w-full h-screen bg-brand-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-40"
            >
              {links.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl md:text-5xl font-display uppercase tracking-widest text-white hover:text-brand-papaya transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
