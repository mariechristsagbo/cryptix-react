import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { assets, testimonials } from "../../data";
import { Container, SectionHeading } from "../../../../shared/ui";
import { fadeUp, easing } from "../../../../shared/animation/variants";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <motion.section id="testimonials" className="py-24 sm:py-32" {...fadeUp()}>
      <Container>
        <SectionHeading
          eyebrow="Trusted by Crypto Enthusiasts Worldwide"
          title="Join a growing community of investors who choose Cryptix for its seamless experience, security, and premium design."
          centered
        />

        <motion.div
          className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-6 sm:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-white/10 blur-[88px]" />

          <div className="grid gap-10 lg:grid-cols-[180px_minmax(0,1fr)_140px] lg:items-center">
            <motion.div
              className="relative flex items-center justify-center lg:justify-start"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
                <img
                  src={assets.testimonialIcon}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="-ml-5 h-20 w-20 overflow-hidden rounded-full border-4 border-[#0b0c13] bg-white">
                <img
                  src={assets.testimonialAvatar}
                  alt={active.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: easing }}
              >
                <p className="text-2xl font-medium tracking-[-0.04em] text-white sm:text-[30px] sm:leading-[1.35]">
                  "{active.quote}"
                </p>
                <div className="mt-8">
                  <p className="text-base font-medium text-white">{active.name}</p>
                  <p className="mt-1 text-sm text-[#b0b0b0]">{active.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col gap-4 lg:items-end">
              <p className="text-sm text-[#b0b0b0]">
                {activeIndex + 1}/{testimonials.length}
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
                  onClick={() =>
                    setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)
                  }
                >
                  <span className="sr-only">Previous</span>
                  <span className="text-lg">&#8249;</span>
                </button>
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
                  onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
                >
                  <span className="sr-only">Next</span>
                  <span className="text-lg">&#8250;</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
