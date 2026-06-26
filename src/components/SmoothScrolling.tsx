"use client";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Basic setup if any window-dependent lenis config is needed
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
