"use client";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

interface FooterProps {
  scrollConfig: { once: boolean; amount: number };
  itemVars: Variants;
}

export default function Footer({ scrollConfig, itemVars }: FooterProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now
          .toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
            timeZone: "Europe/Vilnius",
          })
          .toUpperCase(),
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black text-white pb-12 pt-6 md:pt-10 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={scrollConfig}
          variants={itemVars}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4 text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-zinc-500 font-medium"
        >
          <div className="space-y-2 md:space-y-0">
            <p>© 2026 Ugnė Miklovaitė.</p>
            <p className="md:hidden opacity-50">All rights reserved.</p>
            <p className="hidden md:inline"> All rights reserved.</p>
          </div>

          <div className="flex gap-6 italic">
            <div className="flex flex-col md:flex-row gap-2 md:gap-6">
              <span>Vilnius, LT</span>
              <span className="tabular-nums opacity-80">{time} EEST</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
