"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Product } from "@/data/products";

interface Props {
  product: Product;
}

export default function ProductBottleScroll({ product }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, 150]);

  // Load images
  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= 150; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(5, "0");
      img.src = `${product.folderPath}/${paddedIndex}.jpg`;
      loadedImages.push(img);
    }
    
    // Set images immediately so we can start rendering frames as they dynamically load
    if (isMounted) {
      setImages(loadedImages);
    }

    return () => {
      isMounted = false;
    };
  }, [product.folderPath]);

  // Draw frame on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const drawImage = (index: number) => {
      const img = images[index - 1];
      // Check if image is actually loaded and valid before drawing
      if (!img || !img.complete || img.naturalHeight === 0) return;

      // Handle responsive resize by respecting device pixel ratio for sharpness
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Logic for "contain" fit
      const hRatio = canvas.width / img.naturalWidth;
      const vRatio = canvas.height / img.naturalHeight;
      const ratio = Math.min(hRatio, vRatio);

      const centerShift_x = (canvas.width - img.naturalWidth * ratio) / 2;
      const centerShift_y = (canvas.height - img.naturalHeight * ratio) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.naturalWidth,
        img.naturalHeight,
        centerShift_x,
        centerShift_y,
        img.naturalWidth * ratio,
        img.naturalHeight * ratio
      );
    };

    const render = () => {
      const currentFrame = Math.round(frameIndex.get());
      if (currentFrame >= 1 && currentFrame <= 150) {
         drawImage(currentFrame);
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [images, frameIndex]);

  // Force first frame render before scrolling if any images loaded
  useEffect(() => {
      if (images.length > 0 && canvasRef.current) {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext("2d");
          if (ctx) {
              const img = images[0];
              if (img && img.complete && img.naturalHeight > 0) {
                  canvas.width = window.innerWidth;
                  canvas.height = window.innerHeight;
                  const ratio = Math.min(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
                  ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, (canvas.width - img.naturalWidth * ratio) / 2, (canvas.height - img.naturalHeight * ratio) / 2, img.naturalWidth * ratio, img.naturalHeight * ratio);
              }
          }
      }
  }, [images])

  return (
    <div ref={containerRef} className="relative w-full h-[500vh]">
      <div className="sticky top-0 w-full h-[100dvh] overflow-hidden flex items-center justify-center pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full object-contain" />
      </div>
    </div>
  );
}
