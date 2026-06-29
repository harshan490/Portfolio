"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FlagshipProject() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    let ctx = gsap.context(() => {
      // Animate text elements on scroll
      if (!textRef.current) return;
      const elements = gsap.utils.toArray(textRef.current.children);
      
      gsap.fromTo(
        elements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] w-full bg-brand-black overflow-hidden flex items-center border-y border-white/5">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/subaquatic_vision_8k_1782472964439.png"
          alt="Subaquatic Visual Enhancement"
          className="w-full h-full object-cover brightness-75 contrast-125"
        />
        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent z-10 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div ref={textRef} className="max-w-2xl">
          <p className="text-brand-papaya uppercase tracking-[0.3em] text-sm font-semibold mb-6">
            Flagship Research
          </p>
          <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8 text-white">
            Subaquatic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">
              Visual Enhancement
            </span>
          </h2>
          <p className="text-brand-silver text-lg leading-relaxed mb-10">
            A real-time deep learning pipeline designed to restore color, eliminate haze, and enhance contrast in low-light marine environments. Empowering underwater robotics and marine monitoring with unprecedented visual clarity.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col border-l-2 border-brand-blue pl-4">
              <span className="text-white font-bold">Dehazing</span>
              <span className="text-xs uppercase tracking-widest text-brand-silver">Algorithm</span>
            </div>
            <div className="flex flex-col border-l-2 border-brand-blue pl-4">
              <span className="text-white font-bold">Contrast</span>
              <span className="text-xs uppercase tracking-widest text-brand-silver">Enhancement</span>
            </div>
            <div className="flex flex-col border-l-2 border-brand-blue pl-4">
              <span className="text-white font-bold">Color</span>
              <span className="text-xs uppercase tracking-widest text-brand-silver">Restoration</span>
            </div>
            <div className="flex flex-col border-l-2 border-brand-blue pl-4">
              <span className="text-white font-bold">Real-time</span>
              <span className="text-xs uppercase tracking-widest text-brand-silver">Processing</span>
            </div>
          </div>

          <div className="mt-10">
            <a href="https://github.com/harshan490/Subaquatic-image-enhancement-system" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors font-semibold uppercase tracking-wider text-sm text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
