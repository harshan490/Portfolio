"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Grand Prix Starts", value: 125, suffix: "+" },
  { label: "Race Wins", value: 3, suffix: "" },
  { label: "Podiums", value: 25, suffix: "+" },
  { label: "Pole Positions", value: 7, suffix: "" },
  { label: "Career Points", value: 950, suffix: "+" },
];

function Counter({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // Easing function (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCurrent(Math.floor(easeProgress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={nodeRef}>
      {current}
      {suffix}
    </span>
  );
}

export default function StatsDashboard() {
  return (
    <section id="statistics" className="w-full py-32 bg-brand-dark relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-7xl font-display font-bold uppercase">
              By The <span className="text-brand-papaya">Numbers</span>
            </h2>
            <p className="text-brand-silver mt-4 max-w-xl text-lg">
              Consistent performance and relentless pursuit of perfection on the track.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-24 h-24 rounded-full border-2 border-brand-papaya flex items-center justify-center mt-8 md:mt-0"
          >
            <span className="font-display font-bold text-3xl text-brand-papaya">4</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`glass p-8 rounded-3xl flex flex-col justify-between h-48 group hover:bg-white/5 transition-colors ${
                i === stats.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <h3 className="text-sm uppercase tracking-widest text-brand-silver group-hover:text-white transition-colors">
                {stat.label}
              </h3>
              <div className="text-6xl md:text-7xl font-display font-bold text-white">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
            </motion.div>
          ))}
          
          {/* Interactive Graphic Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="glass-strong p-8 rounded-3xl lg:col-span-2 flex items-center justify-center relative overflow-hidden h-48 md:h-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-papaya/10 to-brand-blue/10" />
            <div className="relative z-10 w-full h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-center">Fastest Laps</h3>
              <div className="w-full h-2 bg-brand-black rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-brand-papaya"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "75%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-brand-silver font-mono">
                <span>0</span>
                <span>Top Tier</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
