"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";

export default function CursorLight() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const springX = useSpring(0, { stiffness: 80, damping: 30 });
  const springY = useSpring(0, { stiffness: 80, damping: 30 });

  const { scrollY } = useScroll();
  const opacityValue = useTransform(scrollY, [600, 900], [0, 0.3]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      springX.set(e.clientX);
      springY.set(e.clientY);
    };

    const observer = new MutationObserver(() => {
      const hasClass = document.body.classList.contains("gallery-open");
      setIsGalleryOpen(hasClass);
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, [springX, springY]);

  return (
    <motion.div
      style={{
        left: springX,
        top: springY,
        // Jei galerija atidaryta, opacity priverstinai tampa 0
        opacity: isGalleryOpen ? 0 : opacityValue,
      }}
      className="hidden lg:block fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full blur-[60px] bg-white mix-blend-difference transition-opacity duration-300"
    />
  );
}
