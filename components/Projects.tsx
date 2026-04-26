"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  images: string[];
  description: string;
  tech: string[];
  link: string;
  live: string;
}

interface ProjectsProps {
  containerVars: Variants;
  itemVars: Variants;
  scrollConfig: { once: boolean; amount: number };
}

const projectsData: Project[] = [
  {
    id: "01",
    title: "UM Studio Jewelry",
    subtitle: "Bachelor's Thesis Project",
    images: [
      "/projects/umStudio1.webp",
      "/projects/umStudio2.webp",
      "/projects/umStudio-cart.webp",
      "/projects/umStudio-checkout.webp",
      "/projects/umStudio-mobile1.webp",
      "/projects/umStudio-mobile2.webp",
      "/projects/umStudioAdmin1.webp",
      "/projects/umStudioAdmin2.webp",
    ],
    description:
      "A full-stack e-commerce platform featuring a custom admin dashboard, automated inventory tracking, and Cloudinary image optimization. Built with React, Node.js, and MySQL.",
    tech: ["React", "Node.js", "MySQL", "Zustand", "Framer Motion"],
    link: "https://github.com/mmiklovaitemm/bd-shop",
    live: "https://bd-shop-gray.vercel.app/",
  },
  {
    id: "02",
    title: "WeatherNow",
    subtitle: "Real-time Weather Application",
    images: [
      "/projects/WeatherNow-MainPage.png",
      "/projects/WeatherNow-Search.png",
      "/projects/WeatherNow-UnitsBTN.png",
      "/projects/WeatherNow-MobileView.png",
    ],
    description:
      "Weather application that provides real-time data using the OpenWeather API. It features dynamic background changes based on weather conditions and a toggle for metric/imperial units.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenWeather API"],
    link: "https://github.com/mmiklovaitemm/weather-app",
    live: "https://mmiklovaitemm.github.io/weather-app/",
  },
];

export default function Projects({
  containerVars,
  itemVars,
  scrollConfig,
}: ProjectsProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const closeGallery = () => setActiveProject(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        closeGallery();
      }
    };

    if (activeProject) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("gallery-open");

      const handleHashChange = () => closeGallery();
      window.addEventListener("hashchange", handleHashChange);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("hashchange", handleHashChange);
        window.removeEventListener("resize", handleResize);
      };
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("gallery-open");
    }
  }, [activeProject]);

  return (
    <section
      id="projects"
      className="bg-black text-white pt-8 pb-20 md:pb-32 px-6 md:px-12 relative z-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={scrollConfig}
          className="mb-8 md:mb-12"
        >
          <span className="text-red-500 text-[10px] uppercase tracking-[0.4em] font-bold">
            / Projects
          </span>
        </motion.div>

        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            initial="initial"
            whileInView="animate"
            viewport={scrollConfig}
            variants={containerVars}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center py-4 md:py-20"
          >
            {/* Number */}
            <div className="md:col-span-4 relative flex items-center justify-center py-4 md:py-0">
              <span className="text-[40vw] md:text-[12rem] font-bold leading-none select-none text-white/10 md:text-transparent md:[-webkit-text-stroke:1px_rgba(255,255,255,0.6)]">
                {project.id}
              </span>
            </div>

            {/* Project information */}
            <div className="md:col-span-8 space-y-6 md:space-y-8 pl-0 md:pl-12">
              <div className="space-y-2 text-left">
                <motion.p
                  variants={itemVars}
                  className="text-red-500 text-[10px] uppercase font-bold tracking-[0.2em]"
                >
                  {project.subtitle}
                </motion.p>
                <motion.h3
                  variants={itemVars}
                  className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white"
                >
                  {project.title}
                </motion.h3>
              </div>

              <motion.p
                variants={itemVars}
                className="max-w-2xl text-zinc-400 text-base md:text-xl font-light leading-relaxed text-left"
              >
                {project.description}
              </motion.p>

              <motion.div
                variants={itemVars}
                className="flex flex-wrap gap-2 pt-2 justify-start"
              >
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 border border-white/10 rounded-full text-[8px] md:text-[9px] uppercase tracking-widest text-zinc-500"
                  >
                    {t}
                  </span>
                ))}
              </motion.div>

              <motion.div
                variants={itemVars}
                className="flex flex-wrap items-center gap-4 sm:gap-8 pt-6"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold hover:text-red-500 transition-colors"
                >
                  <span>GitHub</span>
                  <span className="text-xl transition-transform duration-300 group-hover/link:translate-x-1 -mt-[5.5px]">
                    →
                  </span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold hover:text-red-500 transition-colors"
                >
                  <span>Live Demo</span>
                  <span className="text-xl transition-transform duration-300 group-hover/link:translate-x-1 -mt-[5.5px]">
                    →
                  </span>
                </a>

                <button
                  onClick={() => setActiveProject(project)}
                  className="hidden md:inline-flex group/link items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 hover:text-white transition-colors border-l border-white/20 pl-6"
                >
                  <span>View Images</span>
                  <span className="text-xl transition-transform duration-300 group-hover:translate-y-[-2px] -mt-[5.5px]">
                    ↑
                  </span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gallery */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            ref={galleryRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            className="hidden md:flex fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-start overflow-y-auto scroll-smooth"
          >
            <div className="sticky top-10 w-full flex justify-end p-10 md:p-14 z-[100000] pointer-events-none">
              <motion.button
                onClick={closeGallery}
                whileHover={{ scale: 1.05, backgroundColor: "#ef4444" }}
                whileTap={{ scale: 0.95 }}
                className="pointer-events-auto text-white uppercase text-[10px] tracking-widest font-bold bg-red-600 px-10 py-4 rounded-full shadow-xl transition-colors duration-300 ease-in-out"
              >
                Close
              </motion.button>
            </div>

            <div className="max-w-5xl w-full px-6 pb-32 space-y-24 mt-10">
              <div className="text-center space-y-4">
                <span className="text-red-500 text-[10px] uppercase tracking-[0.4em] font-bold">
                  Visual Showcase
                </span>
                <h2 className="text-6xl font-bold uppercase tracking-tighter text-white">
                  {activeProject.title}
                </h2>
              </div>

              {activeProject.images.map((img, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  key={i}
                  className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl"
                >
                  <Image
                    src={img}
                    alt={`${activeProject.title} screenshot ${i + 1}`}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
