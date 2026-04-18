"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductBottleScroll from "@/components/ProductBottleScroll";
import ProductTextOverlays from "@/components/ProductTextOverlays";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Scroll Reset on change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    // Update CSS variable for the global background
    document.documentElement.style.setProperty(
      "--product-gradient",
      products[currentIndex].gradient
    );
  }, [currentIndex]);

  const product = products[currentIndex];

  const nextFlavor = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevFlavor = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <main className="min-h-screen relative">
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative w-full"
        >
          {/* Scroll Experience */}
          <div className="relative">
            <ProductBottleScroll product={product} />
            <ProductTextOverlays product={product} />
            
            {/* Scroll Indicator */}
            <motion.div 
               className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 flex flex-col items-center gap-2 pointer-events-none"
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
               <span className="text-xs tracking-[0.3em] uppercase font-bold">Scroll to Explore</span>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </motion.div>
          </div>

          {/* Details Section */}
          <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                  {product.detailsSection.title}
                </h2>
                <p className="text-xl text-white/80 leading-relaxed font-light">
                  {product.detailsSection.description}
                </p>
                <div className="mt-10 grid grid-cols-3 gap-6">
                  {product.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-3xl font-black text-white">{stat.val}</span>
                      <span className="text-sm font-semibold text-white/60 uppercase tracking-widest mt-1">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="aspect-square rounded-[3rem] p-1 shadow-2xl relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${product.themeColor}55, transparent)` }}
              >
                <div className="w-full h-full bg-black/40 backdrop-blur-3xl rounded-[2.8rem] border border-white/10 flex items-center justify-center p-12">
                   <div className="rotate-12 scale-110 opacity-40 mix-blend-overlay w-full h-full" style={{ background: `url(/Senvvio${product.folderPath}/LH 44 Sunshine.png) center/contain no-repeat` }} />
                </div>
              </div>
            </motion.div>
          </section>

          {/* Freshness Section */}
          <section className="py-32 px-6 lg:px-8 bg-black/30 backdrop-blur-lg border-y border-white/5">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
                  {product.freshnessSection.title}
                </h2>
                <p className="text-xl text-white/80 leading-relaxed font-light">
                  {product.freshnessSection.description}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Buy Now Section */}
          <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-black/60 backdrop-blur-2xl rounded-[3rem] p-8 md:p-16 border border-white/10 flex flex-col md:flex-row gap-16 items-center shadow-2xl"
            >
              <div className="flex-1 space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-white/50 tracking-[0.2em] uppercase mb-4">
                    Ready to taste the future?
                  </h3>
                  <div className="flex items-baseline gap-4">
                    <span className="text-6xl font-black text-white">
                      {product.buyNowSection.price}
                    </span>
                    <span className="text-xl text-white/60 font-light">
                      {product.buyNowSection.unit}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {product.buyNowSection.processingParams.map((param, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-lg font-medium">{param}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10 space-y-4">
                  <p className="text-sm text-white/60">
                    <strong className="text-white">Delivery:</strong> {product.buyNowSection.deliveryPromise}
                  </p>
                  <p className="text-sm text-white/60">
                    <strong className="text-white">Returns:</strong> {product.buyNowSection.returnPolicy}
                  </p>
                </div>

                <button
                  className="w-full py-5 rounded-2xl text-xl font-bold text-black transition-transform hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
                  style={{ backgroundColor: "white" }}
                >
                  Add to Cart
                </button>
              </div>

              <div className="flex-1 w-full flex justify-center relative">
                 <div className="absolute inset-0 bg-white/5 rounded-[3rem] blur-3xl" />
                 <img src={`/Senvvio${product.folderPath}/00060.jpg`} alt={product.name} className="w-[80%] max-w-sm object-contain drop-shadow-2xl relative z-10" />
              </div>
            </motion.div>
          </section>

          {/* Next Flavor Slanted CTA */}
          <div className="w-full relative overflow-hidden py-32 bg-black border-t border-white/10 cursor-pointer group" onClick={nextFlavor}>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto px-6 text-center relative z-10"
            >
              <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 uppercase tracking-tighter mix-blend-overlay group-hover:mix-blend-normal transition-all duration-700">
                Next Flavor
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <Footer />

      {/* Fixed Navigation Elements - Only show if multiple products exist */}
      {products.length > 1 && (
        <>
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
            {products.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setCurrentIndex(idx)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  currentIndex === idx
                    ? "bg-white text-black scale-105 shadow-lg"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          <button
            onClick={prevFlavor}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-black/20 backdrop-blur-lg border border-white/10 text-white hover:bg-black/40 hover:scale-110 transition-all hidden md:block"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={nextFlavor}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-black/20 backdrop-blur-lg border border-white/10 text-white hover:bg-black/40 hover:scale-110 transition-all hidden md:block"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}
    </main>
  );
}
