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
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;
      for (let i = 1; i <= 150; i++) {
        const img = new Image();
        // File names like 00001.jpg
        const paddedIndex = i.toString().padStart(5, "0");
        img.src = `${product.folderPath}/${paddedIndex}.jpg`;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === 150 && isMounted) {
            setImages(loadedImages);
          }
        };
        loadedImages.push(img);
      }
    };
    loadImages();

    return () => {
      isMounted = false;
    };
  }, [product.folderPath]);

  // Draw frame on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length !== 150) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const drawImage = (index: number) => {
      const img = images[index - 1];
      if (!img) return;

      // Handle responsive resize by respecting device pixel ratio for sharpness
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Logic for "contain" fit
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.min(hRatio, vRatio);

      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
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

  // Force first frame render before scrolling if images loaded
  useEffect(() => {
      if (images.length === 150 && canvasRef.current) {
         const currentFrame = Math.round(frameIndex.get());
         // Only draw here if not already handled by render loop right away
      }
  }, [images])

  return (
    <div ref={containerRef} className="relative w-full h-[500vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full object-contain" />
      </div>
    </div>
  );
}
