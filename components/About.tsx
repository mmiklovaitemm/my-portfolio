"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface AboutProps {
  scrollConfig: { once: boolean; amount: number };
  itemVars: Variants;
  titleVars: Variants;
  photoVars: Variants;
  containerVars: Variants;
}

export default function About({
  scrollConfig,
  itemVars,
  titleVars,
  photoVars,
  containerVars,
}: AboutProps) {
  return (
    <section
      id="about"
      className="bg-black text-white pt-24 pb-16 px-6 md:px-12 relative z-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* / About Indicator */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={scrollConfig}
          className="mb-12 md:mb-16"
        >
          <span className="text-red-500 text-[10px] uppercase tracking-[0.4em] font-bold">
            / About
          </span>
        </motion.div>

        {/* Hero Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start mb-24">
          <div className="md:col-span-4 sticky md:top-32 order-2 md:order-1">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={scrollConfig}
              variants={photoVars}
              className="relative aspect-[3/4] w-full max-w-sm mx-auto md:max-w-none bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 shadow-2xl"
            >
              <Image
                src="/ugne-hero.webp"
                alt="Portrait"
                fill
                priority
                className="object-cover grayscale hover:grayscale-0 transition duration-700 ease-in-out"
                unoptimized
              />
            </motion.div>
          </div>

          <div className="md:col-span-6 space-y-6 md:space-y-8 order-1 md:order-2">
            <div className="relative w-full">
              <motion.h2
                initial="initial"
                whileInView="animate"
                viewport={scrollConfig}
                variants={titleVars}
                className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[8rem] font-bold leading-none tracking-tighter uppercase text-white/90"
              >
                Hello!
              </motion.h2>
            </div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={scrollConfig}
              variants={itemVars}
              className="max-w-xl space-y-6 text-zinc-300 text-base md:text-xl leading-relaxed font-syne font-light"
            >
              <p>
                My name is <span className="text-red-500">Ugnė</span>. I’m 25
                years old and currently finishing my final year of Software
                Engineering studies. Through university years and building my
                own projects, I realized that I want to focus my career on{" "}
                <span className="text-red-500">Frontend development</span>. I
                love the process of turning code into functional, visual
                interfaces.
              </p>
              <p>
                Now, I’m looking for my first job where I can learn from the
                best in the field and grow as a developer. I am eager to
                contribute to real projects and keep improving my skills. I also
                use AI tools in my daily work, it helps me find solutions faster
                and stay focused on the creative side of coding.
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-2 pt-4 md:pt-40 lg:pt-48 order-3">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={scrollConfig}
              variants={itemVars}
              className="flex flex-row md:flex-col gap-4 items-center md:items-end justify-start md:justify-center"
            >
              <a
                href="https://www.linkedin.com/in/ugn%C4%97-miklovait%C4%97-88075a311"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none bg-zinc-800 border border-white/10 px-6 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest text-white hover:bg-zinc-700 hover:border-white/30 hover:scale-105 transition-all duration-500 text-center"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/mmiklovaitemm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none bg-zinc-800 border border-white/10 px-6 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest text-white hover:bg-zinc-700 hover:border-white/30 hover:scale-105 transition-all duration-500 text-center"
              >
                GitHub
              </a>
            </motion.div>
          </div>
        </div>

        {/* Info Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={scrollConfig}
          variants={containerVars}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch"
        >
          {/* Education & Tech Stack */}
          <motion.div variants={itemVars} className="flex flex-col gap-6">
            <div className="bg-zinc-900/40 border border-white/5 p-6 md:p-8 rounded-2xl flex-1">
              <h3 className="text-zinc-500 uppercase text-[10px] tracking-[0.4em] font-bold mb-4">
                Education
              </h3>
              <p className="text-zinc-500 text-[10px] mb-2 uppercase font-medium">
                2023 — Present
              </p>
              <p className="text-white text-lg md:text-xl font-bold uppercase tracking-tight mb-2 leading-tight">
                Software Engineering
              </p>
              <p className="text-zinc-400 text-xs font-light">
                3rd Year Student
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-white/5 p-6 md:p-8 rounded-2xl flex-1 flex flex-col justify-center">
              <h3 className="text-zinc-500 uppercase text-center text-[10px] tracking-[0.4em] font-bold mb-8 font-syne">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 gap-y-5 md:gap-y-6 gap-x-3">
                {[
                  {
                    name: "Next.js",
                    path: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 14.5h-1.5l-4-5.25v5.25H8.5v-9h1.5l4 5.25v-5.25h1.5v9z",
                  },
                  { name: "React", custom: "react" },
                  {
                    name: "Tailwind",
                    path: "M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z",
                  },
                  {
                    name: "TypeScript",
                    path: "M0 0h24v24H0Zm6 6h7.5v1.65H9.75v10.35H6Zm13.59 1.65H15.6v1.5h1.5v5.85q0 .9-.413 1.35Q16.275 16.8 15.3 16.8q-.75 0-1.162-.3T13.5 15.6v-1.5h-1.5v1.5q0 1.2.75 1.95t2.25.75q1.575 0 2.363-.9Q18.15 16.5 18.15 15v-7.35Zm1.41 1.5V15q0 1.5-.788 2.4Q19.35 18.3 18 18.3q-1.35 0-2.137-.9Q15.075 16.5 15.075 15v-7.35H13.5v7.35q0 2.1 1.125 3.15t3.375 1.05q2.25 0 3.375-1.05T22.5 15v-7.35H21Zm.45-.45h-1.5v-1.5h1.5v1.5ZM3 3v18h18V3H3Z",
                  },
                  {
                    name: "JavaScript",
                    path: "M0 0h24v24H0V0zm22.034 18.268c-.175-1.121-.858-1.846-2.155-2.327-1.154-.428-1.556-.617-1.556-1.131 0-.309.255-.559.715-.559.463 0 .735.214.92.593l1.714-1.049c-.44-1.103-1.464-1.55-2.603-1.55-1.636 0-2.735.916-2.735 2.257 0 1.21.727 1.838 2.304 2.451 1.029.406 1.439.67 1.439 1.131 0 .463-.343.687-.874.687-.67 0-1.053-.352-1.307-.853l-1.743 1.059c.47 1.059 1.44 1.743 3.033 1.743 1.938 0 2.924-1.029 2.924-2.451zm-9.313-1.722v-4.102h-1.938v4.184c0 1.357-.597 2.053-1.758 2.053-.591 0-1.042-.23-1.341-.611L5.94 19.124c.484.814 1.341 1.365 2.91 1.365 2.327 0 3.871-1.307 3.871-3.943z",
                  },
                  {
                    name: "Framer Motion",
                    path: "M0 0v24h12l12-12L12 0H0Zm2.4 2.4h7.2v7.2H2.4V2.4Zm0 9.6h7.2v7.2l-7.2-7.2Z",
                  },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 md:gap-3 group cursor-default"
                  >
                    <div className="w-8 h-8 md:w-9 md:h-9 bg-zinc-800 rounded flex items-center justify-center transition-all duration-500 shrink-0 group-hover:bg-white">
                      <svg
                        viewBox={
                          tech.custom === "react"
                            ? "-11.5 -10.23174 23 20.46348"
                            : "0 0 24 24"
                        }
                        className="w-4 h-4 md:w-5 md:h-5 fill-white group-hover:fill-black transition-colors duration-500"
                      >
                        {tech.custom === "react" ? (
                          <>
                            <circle cx="0" cy="0" r="2.05" />
                            <g
                              stroke="currentColor"
                              strokeWidth="1"
                              fill="none"
                            >
                              <ellipse rx="11" ry="4.2" />
                              <ellipse
                                rx="11"
                                ry="4.2"
                                transform="rotate(60)"
                              />
                              <ellipse
                                rx="11"
                                ry="4.2"
                                transform="rotate(120)"
                              />
                            </g>
                          </>
                        ) : (
                          <path d={tech.path} />
                        )}
                      </svg>
                    </div>
                    <span className="text-[8px] md:text-[9px] uppercase font-bold text-zinc-400 group-hover:text-white transition-all duration-500 font-syne">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Path */}
          <motion.div
            variants={itemVars}
            className="bg-zinc-900/40 border border-white/5 p-6 md:p-8 rounded-2xl flex flex-col"
          >
            <h3 className="text-zinc-500 uppercase text-[10px] tracking-[0.4em] font-bold mb-10">
              Path
            </h3>
            <div className="relative pl-6 space-y-12 flex-grow before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-800">
              <div className="relative group cursor-default">
                <div className="absolute -left-[27.5px] top-1.5 w-1.5 h-1.5 bg-white rounded-full transition-all duration-500 group-hover:scale-150" />
                <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">
                  Present
                </p>
                <p className="text-white text-lg font-bold uppercase leading-tight">
                  Personal Projects
                </p>
                <p className="text-zinc-400 text-xs font-light">
                  Independent development
                </p>
              </div>
              <div className="relative opacity-40 italic font-syne font-light">
                <div className="absolute -left-[27.5px] top-1.5 w-1.5 h-1.5 bg-zinc-600 rounded-full" />
                <p className="text-[10px] text-zinc-600 uppercase font-bold mb-1">
                  Future
                </p>
                <p className="text-zinc-600 text-lg font-bold uppercase leading-tight">
                  Career Growth
                </p>
              </div>
            </div>
          </motion.div>

          {/* Capabilities & Language */}
          <motion.div
            variants={itemVars}
            className="flex flex-col gap-6 sm:col-span-2 md:col-span-1"
          >
            <div className="bg-zinc-900/40 border border-white/5 p-6 md:p-8 rounded-2xl flex-1">
              <h3 className="text-zinc-500 uppercase text-[10px] tracking-[0.4em] font-bold mb-6">
                Capabilities
              </h3>
              <ul className="space-y-3 text-[10px] uppercase font-bold tracking-widest text-zinc-400">
                <li className="hover:text-white transition-colors">
                  -- Team Work
                </li>
                <li className="hover:text-white transition-colors">
                  -- Attention to Detail
                </li>
                <li className="hover:text-white transition-colors">
                  -- Creative Coding
                </li>
                <li className="hover:text-white transition-colors">
                  -- Professional Growth
                </li>
              </ul>
            </div>
            <div className="bg-zinc-900/40 border border-white/5 p-6 md:p-8 rounded-2xl flex-1 flex flex-col justify-center text-center">
              <h3 className="text-zinc-500 uppercase text-[10px] tracking-[0.4em] font-bold mb-6">
                Language
              </h3>
              <div className="flex sm:flex-row md:flex-col justify-around gap-4">
                <div className="group cursor-default">
                  <p className="text-zinc-500 text-[8px] uppercase font-bold transition-colors group-hover:text-red-500">
                    (Native)
                  </p>
                  <p className="text-white text-sm font-bold uppercase tracking-[0.2em] mt-1">
                    Lithuanian
                  </p>
                </div>
                <div className="group cursor-default">
                  <p className="text-zinc-500 text-[8px] uppercase font-bold transition-colors group-hover:text-red-500">
                    (Fluent)
                  </p>
                  <p className="text-white text-sm font-bold uppercase tracking-[0.2em] mt-1">
                    English
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
