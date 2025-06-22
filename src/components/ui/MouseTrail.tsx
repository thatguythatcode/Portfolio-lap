'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type TrailDot = {
  x: number;
  y: number;
  id: number;
  createdAt: number;
};

const MAX_TRAIL = 20;
const LIFETIME = 1000; // milliseconds

export default function MouseTrail() {
  const [dots, setDots] = useState<TrailDot[]>([]);
  const idRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const updateDots = () => {
      const now = performance.now();
      setDots((prev) =>
        prev.filter((dot) => now - dot.createdAt < LIFETIME)
      );
      rafRef.current = requestAnimationFrame(updateDots);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const dot: TrailDot = {
        x: e.clientX,
        y: e.clientY,
        id: idRef.current++,
        createdAt: performance.now(),
      };
      setDots((prev) => [...prev.slice(-MAX_TRAIL + 1), dot]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(updateDots);

    return () => {
      cancelAnimationFrame(rafRef.current!);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      <AnimatePresence>
        {dots.map((dot, i) => {
          const progress = i / MAX_TRAIL;
          const size = 36 - progress * 12;
          const opacity = 1 - progress * 0.8;
          const hue = (dot.id * 20) % 360;

          return (
            <motion.div
              key={dot.id}
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity }}
              exit={{ scale: 0.1, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute rounded-full blur-sm mix-blend-lighten will-change-transform"
              style={{
                left: dot.x,
                top: dot.y,
                width: size,
                height: size,
                backgroundColor: `hsl(${hue}, 100%, 65%)`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}
