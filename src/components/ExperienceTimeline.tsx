"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

function GlowingCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!meshRef.current) return;
    
    gsap.to(meshRef.current.rotation, {
      x: Math.PI * 4,
      y: Math.PI * 8,
      ease: "none",
      scrollTrigger: {
        trigger: "#experience",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <mesh ref={meshRef} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      <boxGeometry args={[2.2, 2.2, 2.2]} />
      <meshStandardMaterial 
        color="#ffffff" 
        emissive="#ffffff" 
        emissiveIntensity={1.5} 
        toneMapped={false}
      />
    </mesh>
  );
}

const milestones = [
  {
    year: "2024",
    title: "Started B.Tech AI & DS",
    organization: "Chennai Institute of Technology",
    details: "Foundational mathematics, programming, and algorithms."
  },
  {
    year: "2025",
    title: "Industrial Internship",
    organization: "Saint-Gobain India Pvt. Ltd. (INDEC 4.0)",
    details: "21 Days. Backend API Development, Digital Transformation, Real-world Industrial Data Systems, Scalable Backend Architecture using FastAPI, Flask, MySQL, PostgreSQL."
  },
  {
    year: "2025",
    title: "AI Research & Projects",
    organization: "Independent Development",
    details: "Built YOLOv8 Object Detection, Voice Assistants, and Face Recognition systems."
  },
  {
    year: "2026+",
    title: "Advanced ML & MLOps",
    organization: "Future Roadmap",
    details: "Exploring Cloud AI, distributed systems, and real-time deep learning pipelines."
  },
];

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    const cards = gsap.utils.toArray<HTMLElement>(".timeline-card");

    let ctx = gsap.context(() => {
      // Animate the central line
      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      // Animate each card
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );

        const innerCard = card.querySelector(".glass-strong");
        if (innerCard) {
          gsap.to(innerCard, {
            boxShadow: "0px 0px 40px rgba(255,255,255,0.6)",
            duration: 0.4,
            scrollTrigger: {
              trigger: card,
              start: "top 60%",
              toggleActions: "play reverse play reverse",
            },
          });
        }
        
        const node = card.querySelector(".rounded-full.bg-brand-black");
        if (node) {
          gsap.to(node, {
            boxShadow: "0px 0px 20px rgba(255,255,255,1)",
            duration: 0.4,
            scrollTrigger: {
              trigger: card,
              start: "top 60%",
              toggleActions: "play reverse play reverse",
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="relative w-full py-32 bg-brand-black overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-7xl font-display font-bold uppercase mb-24 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-silver">
            Learning
          </span>{" "}
          <span className="text-brand-papaya">Journey</span>
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Data Stream Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-white/10 hidden md:block">
            <div ref={lineRef} className="w-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] relative">
              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-20 w-14 h-14 pointer-events-none drop-shadow-[0_0_15px_rgba(255,255,255,1)]">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="w-full h-full">
                  <ambientLight intensity={1} />
                  <pointLight position={[10, 10, 10]} intensity={2} />
                  <GlowingCube />
                </Canvas>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12 md:gap-24">
            {milestones.map((item, i) => (
              <div
                key={i}
                className={`timeline-card flex flex-col md:flex-row items-center justify-between w-full ${i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-5/12" />

                {/* Node */}
                <div className="relative z-10 w-8 h-8 rounded-full bg-brand-black border-2 border-white flex items-center justify-center my-4 md:my-0">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>

                {/* Card */}
                <div className="w-full md:w-5/12 group perspective-1000">
                  <div className="glass-strong p-8 rounded-2xl border-l-4 border-l-white transition-all duration-500 hover:translate-y-[-5px] hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:bg-white/5">
                    <div className="text-white font-display font-bold text-3xl mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                    <div className="text-sm font-semibold uppercase tracking-widest text-brand-papaya mb-4">
                      {item.organization}
                    </div>
                    <p className="text-brand-silver text-sm leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
