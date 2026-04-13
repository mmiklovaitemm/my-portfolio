"use client";
import { motion, Variants } from "framer-motion";

interface ContactProps {
  scrollConfig: { once: boolean; amount: number };
  itemVars: Variants;
  containerVars: Variants;
}

export default function Contact({
  scrollConfig,
  itemVars,
  containerVars,
}: ContactProps) {
  return (
    <section
      id="contact"
      className="bg-black text-white py-16 md:py-24 px-6 md:px-12 relative z-20 border-t border-white/10 scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={scrollConfig}
          variants={containerVars}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16"
        >
          {/* KAIRĖ PUSĖ: Antraštė + Info */}
          <div className="md:col-span-6 space-y-8 md:space-y-12">
            <div className="overflow-hidden">
              <motion.h2
                variants={itemVars}
                className="text-5xl sm:text-6xl md:text-[6rem] font-bold leading-[0.9] md:leading-[0.85] tracking-tighter uppercase italic"
              >
                Contact <br /> Me
              </motion.h2>
            </div>

            <motion.div
              variants={itemVars}
              className="space-y-4 text-zinc-500 uppercase text-[10px] md:text-[11px] tracking-[0.2em] font-medium"
            >
              <p>Based in Vilnius, Lithuania</p>
              <a
                href="mailto:mmiklovaitemm@gmail.com"
                className="block text-white hover:text-red-500 transition-colors duration-500 lowercase md:uppercase"
              >
                mmiklovaitemm@gmail.com
              </a>
              <p>+370 630 19202</p>
            </motion.div>
          </div>

          {/* DEŠINĖ PUSĖ: Forma */}
          <div className="md:col-span-6 pt-0 md:pt-4">
            <form className="space-y-8 md:space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                <motion.div variants={itemVars} className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors duration-500 font-light text-sm md:text-base"
                  />
                </motion.div>
                <motion.div variants={itemVars} className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors duration-500 font-light text-sm md:text-base"
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVars} className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                  Email (required)
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors duration-500 font-light text-sm md:text-base"
                />
              </motion.div>

              <motion.div variants={itemVars} className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                  Message (required)
                </label>
                <textarea
                  rows={3}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors duration-500 font-light resize-none text-sm md:text-base"
                />
              </motion.div>

              <motion.button
                variants={itemVars}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto bg-white text-black px-12 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-red-500 hover:text-white transition-all duration-500 shadow-xl"
              >
                Submit Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
