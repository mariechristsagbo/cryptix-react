import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { assets } from "../../data";
import { StarIcon } from "../../../../shared/icons";
import { Container, PrimaryButton } from "../../../../shared/ui";
import {
  easing,
  staggerContainer,
  staggerItem,
} from "../../../../shared/animation/variants";

const titleLines = [
  ["Take", "Control", "of"],
  ["Your", "Digital", "Assets"],
];

export function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const dashboardScale = useTransform(scrollYProgress, [0, 1], [1, 0.965]);
  const leftOrbX = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const rightOrbX = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-36 sm:pt-40">
      <motion.div className="hero-orb hero-orb-left" style={{ x: leftOrbX }} />
      <motion.div className="hero-orb hero-orb-right" style={{ x: rightOrbX }} />
      <Container className="relative">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          custom={0.08}
        >
          <motion.div
            variants={staggerItem}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#d9d9df] backdrop-blur-xl"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00ffb2]/15 text-[#00ffb2]">
              <StarIcon className="h-3.5 w-3.5" />
            </span>
            <span>Simplicity, performance, and security.</span>
          </motion.div>

          <motion.h1
            variants={staggerContainer}
            className="mt-8 flex flex-col items-center gap-y-2 text-center text-4xl font-normal tracking-[-0.03em] text-white sm:text-5xl lg:gap-y-3 lg:text-[64px] lg:leading-[1.12]"
          >
            {titleLines.map((line, lineIndex) => (
              <motion.span
                key={lineIndex}
                className="flex flex-wrap justify-center gap-x-2 sm:gap-x-2.5 lg:gap-x-3"
              >
                {line.map((word, wordIndex) => {
                  return (
                    <motion.span
                      key={`${word}-${lineIndex}-${wordIndex}`}
                      variants={staggerItem}
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-6 max-w-3xl text-base leading-7 text-[#b0b0b0] sm:text-lg"
          >
            Cryptix offers a secure experience for managing your digital assets.
            Instant transactions, optimized fees, and premium design.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-10 flex items-center justify-center"
          >
            <PrimaryButton href="#pricing">
              Get started now
            </PrimaryButton>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        className="relative z-10 mt-14 w-full px-4 sm:px-6"
        initial={{ opacity: 0, y: 40, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.55, ease: easing }}
        style={{ y: dashboardY, scale: dashboardScale }}
      >
        <div className="mx-auto w-full max-w-[min(1280px,calc(100vw-2rem))]">
          <div className="dashboard-shell rounded-[28px] border border-white/10 bg-[#0e1019] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:rounded-[32px] sm:p-2.5 md:p-3">
            <div className="relative overflow-hidden rounded-[20px] border border-white/10 sm:rounded-[24px]">
              <div className="dashboard-lights" aria-hidden="true" />
              <img
                src={assets.heroDashboard}
                alt="Cryptix dashboard"
                className="relative block w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2 bg-[#0b0911]" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
