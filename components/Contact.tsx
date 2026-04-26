"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

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
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "829439ae-9386-4fe2-8764-58f73bd407f5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Could not connect to the server.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  const inputStyles = `
    w-full bg-transparent border-b border-white/20 py-2 focus:border-white 
    outline-none transition-colors duration-500 font-light text-sm md:text-base text-white
    autofill:bg-black
  `;

  return (
    <section
      id="contact"
      className="bg-black text-white py-16 md:py-24 px-6 md:px-12 relative z-20 border-t border-white/10 scroll-mt-32"
    >
      <style jsx>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus {
          -webkit-text-fill-color: white !important;
          -webkit-box-shadow: 0 0 0px 1000px black inset !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={scrollConfig}
          variants={containerVars}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16"
        >
          {/* LEFT SIDE */}
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
              <p>+370 630 94312</p>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Form */}
          <div className="md:col-span-6 pt-0 md:pt-4">
            <form onSubmit={onSubmit} className="space-y-8 md:space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                <motion.div variants={itemVars} className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className={inputStyles}
                  />
                </motion.div>
                <motion.div variants={itemVars} className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                    Last Name
                  </label>
                  <input type="text" name="last_name" className={inputStyles} />
                </motion.div>
              </div>

              <motion.div variants={itemVars} className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                  Email (required)
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className={inputStyles}
                />
              </motion.div>

              <motion.div variants={itemVars} className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                  Message (required)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  required
                  className={`${inputStyles} resize-none`}
                />
              </motion.div>

              <div className="relative">
                <motion.button
                  variants={itemVars}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full md:w-auto bg-white text-black px-12 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-red-500 hover:text-white transition-all duration-500 shadow-xl disabled:bg-zinc-700 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit Message"}
                </motion.button>

                {result && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-8 left-0 text-[10px] uppercase font-bold text-red-500 tracking-widest"
                  >
                    {result}
                  </motion.p>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
