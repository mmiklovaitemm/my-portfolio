"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full flex justify-between items-center p-4 md:p-6 z-[60] text-[11px] uppercase tracking-widest font-medium border-b border-black/10 bg-[#f0f0f0]/80 backdrop-blur-md text-black"
      >
        <div className="font-bold tracking-[0.2em] z-[70]">© UGNĖ M.</div>

        {/* Desktop Menu -  md screen */}
        <div className="hidden md:flex gap-12 text-[10px]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative overflow-hidden group py-1"
            >
              <span className="relative z-10 transition-opacity duration-500 group-hover:opacity-50 font-semibold">
                {link.name}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black origin-right scale-x-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1] group-hover:scale-x-100 group-hover:origin-left" />
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 z-[70] p-2"
          aria-label="Toggle Menu"
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
            className="w-6 h-[1.5px] bg-black block"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-6 h-[1.5px] bg-black block"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
            className="w-6 h-[1.5px] bg-black block"
          />
        </button>
      </motion.nav>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#f0f0f0] z-[55] flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-bold uppercase tracking-tighter italic hover:text-red-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 text-[10px] tracking-[0.3em] uppercase text-zinc-400"
            >
              Vilnius, Lithuania
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
