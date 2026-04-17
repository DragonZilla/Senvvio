"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl border-b ${
        scrolled ? "bg-black/20 border-white/10 py-3" : "bg-transparent border-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-orange-500"
          >
            <path
              d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
              stroke="url(#paint0_linear)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="3"
                y1="2"
                x2="21"
                y2="22"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F97316" />
                <stop offset="1" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
            Nano Banana
          </span>
        </div>

        <button className="relative group overflow-hidden rounded-full p-[1px]">
          <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity blur-md group-hover:blur-lg"></span>
          <div className="relative bg-black/80 px-6 py-2.5 rounded-full backdrop-blur-md border border-white/10 group-hover:bg-black/60 transition-colors">
            <span className="text-sm font-semibold text-white tracking-widest uppercase">
              Order Now
            </span>
          </div>
        </button>
      </div>
    </motion.nav>
  );
}
