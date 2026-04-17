"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Product } from "@/data/products";

interface Props {
  product: Product;
}

export default function ProductTextOverlays({ product }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Opacity transforms for each section
  const op1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [50, 0, 0, -50]);

  const op2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.5], [50, 0, 0, -50]);

  const op3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.75], [50, 0, 0, -50]);

  const op4 = useTransform(scrollYProgress, [0.75, 0.85, 0.9, 1], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.75, 0.85, 0.9, 1], [50, 0, 0, -50]);

  const sections = [
    { ...product.section1, op: op1, y: y1 },
    { ...product.section2, op: op2, y: y2 },
    { ...product.section3, op: op3, y: y3 },
    { ...product.section4, op: op4, y: y4 },
  ];

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {/* We need sticky container inside absolute, or absolute elements inside absolute? */}
      <div className="sticky top-0 w-full h-[100dvh] overflow-hidden">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10"
            style={{ opacity: sec.op, y: sec.y }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg max-w-4xl">
              {sec.title}
            </h2>
            {sec.subtitle && (
              <p className="mt-6 text-xl md:text-3xl text-white drop-shadow-md max-w-2xl font-light">
                {sec.subtitle}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
