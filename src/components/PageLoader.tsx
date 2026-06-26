"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for visual impact
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          >
            <motion.img
              src="/ah_logo.png"
              alt="A.H Logo"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className="w-24 md:w-32 h-auto object-contain invert"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 1.05, opacity: 0, filter: "blur(10px)" }}
        animate={{ scale: loading ? 1.05 : 1, opacity: loading ? 0 : 1, filter: loading ? "blur(10px)" : "blur(0px)" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: loading ? 0 : 0.2 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </>
  );
}
