"use client";
import { motion, Variants } from "framer-motion";

interface HeroProps {
  containerVars: Variants;
  itemVars: Variants;
  scrollConfig: { once: boolean; amount: number };
}

export default function Hero({
  containerVars,
  itemVars,
  scrollConfig,
}: HeroProps) {
  return (
    <motion.section
      variants={containerVars}
      initial="initial"
      whileInView="animate"
      viewport={scrollConfig}
      className="relative h-[100svh] w-full flex flex-col justify-center items-center px-4 md:px-6 overflow-hidden"
    >
      {/* PAGRINDINIS TEKSTAS  */}
      <div className="relative z-10 text-center uppercase text-black font-bold">
        <div className="overflow-hidden">
          <motion.span
            variants={itemVars}
            className="block text-[15vw] md:text-[10vw] leading-[0.85] tracking-tighter pt-4 font-bold italic"
          >
            Web
          </motion.span>
        </div>
        <div className="overflow-hidden">
          <motion.span
            variants={itemVars}
            className="block text-[15vw] md:text-[10vw] leading-[0.85] tracking-tighter font-bold italic"
          >
            Developer
          </motion.span>
        </div>
      </div>

      {/* APRAŠYMAS APAČIOJE */}
      <motion.div
        variants={itemVars}
        className="absolute bottom-24 right-6 md:bottom-8 md:right-6 text-right z-30 uppercase italic font-medium text-black"
      >
        <p className="text-3xl md:text-5xl leading-[0.9] tracking-tighter uppercase italic">
          {"//"} Ugnė Miklovaitė <br />
          <span className="text-red-500 not-italic">Portfolio &apos;26</span>
        </p>
      </motion.div>

      {/* SCROLL TO EXPLORE  */}
      <motion.div
        animate={{
          y: [0, 12, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-6 bottom-8 md:bottom-12 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-red-500"
      >
        Scroll <span className="hidden sm:inline">to explore</span>
      </motion.div>
    </motion.section>
  );
}
