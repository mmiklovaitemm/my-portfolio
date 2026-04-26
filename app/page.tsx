"use client";
import { Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollConfig = { once: true, amount: 0.05 };

  const containerVars: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVars: Variants = {
    initial: { y: 40, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const titleVars: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const photoVars: Variants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main className="bg-[#f0f0f0] min-h-screen text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      <Navbar />

      <Hero
        containerVars={containerVars}
        itemVars={itemVars}
        scrollConfig={scrollConfig}
      />

      <About
        containerVars={containerVars}
        itemVars={itemVars}
        titleVars={titleVars}
        photoVars={photoVars}
        scrollConfig={scrollConfig}
      />

      <Projects
        containerVars={containerVars}
        itemVars={itemVars}
        scrollConfig={scrollConfig}
      />

      <Contact
        containerVars={containerVars}
        itemVars={itemVars}
        scrollConfig={scrollConfig}
      />

      <Footer itemVars={itemVars} scrollConfig={scrollConfig} />
    </main>
  );
}
