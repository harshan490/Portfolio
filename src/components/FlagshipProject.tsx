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
        </div>
      </div>
    </section>
  );
}
