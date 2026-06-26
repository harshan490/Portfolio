"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "2015", title: "MSA Formula Championship", team: "Carlin", result: "Champion" },
  { year: "2016", title: "Eurocup Formula Renault", team: "Josef Kaufmann", result: "Champion" },
  { year: "2017", title: "FIA Formula 3", team: "Carlin", result: "Champion" },
  { year: "2018", title: "FIA Formula 2", team: "Carlin", result: "2nd Place" },
  { year: "2019", title: "Formula 1", team: "McLaren", result: "Debut Season" },
  { year: "2021", title: "Formula 1", team: "McLaren", result: "First Pole & Podiums" },
  { year: "2024", title: "Formula 1", team: "McLaren", result: "First Race Win (Miami)" },
];

export default function CareerTimeline() {
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
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="career" className="relative w-full py-32 bg-brand-black overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-7xl font-display font-bold uppercase mb-24 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-silver">
            Racing
          </span>{" "}
          <span className="text-brand-papaya">Pedigree</span>
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Racing Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-white/10 hidden md:block">
            <div ref={lineRef} className="w-full bg-brand-papaya shadow-[0_0_15px_rgba(255,122,0,0.5)]" />
          </div>

          <div className="flex flex-col gap-12 md:gap-24">
            {milestones.map((item, i) => (
              <div
                key={i}
                className={`timeline-card flex flex-col md:flex-row items-center justify-between w-full ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-5/12" />

                {/* Node */}
                <div className="relative z-10 w-8 h-8 rounded-full bg-brand-black border-2 border-brand-papaya flex items-center justify-center my-4 md:my-0 shadow-[0_0_20px_rgba(255,122,0,0.3)]">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>

                {/* Card */}
                <div className="w-full md:w-5/12 group perspective-1000">
                  <div className="glass-strong p-8 rounded-2xl border-l-4 border-l-brand-papaya transition-all duration-500 hover:translate-y-[-5px] hover:shadow-[0_10px_30px_rgba(255,122,0,0.1)] hover:bg-white/5">
                    <div className="text-brand-papaya font-display font-bold text-3xl mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
                    <div className="flex flex-col gap-2 text-brand-silver">
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-sm uppercase tracking-widest text-white/50">Team</span>
                        <span className="font-semibold text-white">{item.team}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-sm uppercase tracking-widest text-white/50">Result</span>
                        <span className="font-semibold text-brand-blue">{item.result}</span>
                      </div>
                    </div>
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
