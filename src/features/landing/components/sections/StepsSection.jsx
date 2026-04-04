import { motion } from "framer-motion";

import { steps } from "../../data";
import { Container, PrimaryButton, SectionHeading } from "../../../../shared/ui";
import { easing, fadeUp, staggerContainer, staggerItem } from "../../../../shared/animation/variants";

export function StepsSection() {
  return (
    <motion.section id="howitworks" className="border-y border-white/10 py-24 sm:py-32" {...fadeUp()}>
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="How It Works"
            title="A simple, fast, and secure platform to manage your cryptocurrencies in just a few steps."
          />
          <PrimaryButton href="#pricing">
            Create account now
          </PrimaryButton>
        </div>

        <motion.div
          className="mt-12 grid gap-5 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              variants={staggerItem}
              className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04]"
            >
              <div className="relative overflow-hidden">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 26, scale: 1.04 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.95,
                    delay: index * 0.08,
                    ease: easing,
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -12 - index * 2, 0],
                    }}
                    transition={{
                      duration: 4.6 + index * 0.45,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.img
                      src={step.image}
                      alt={step.title}
                      className="h-64 w-full object-cover will-change-transform"
                      animate={{
                        scale: [1, 1.028, 1],
                        rotate: [0, index % 2 === 0 ? -0.4 : 0.4, 0],
                      }}
                      transition={{
                        duration: 6.2 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.14),transparent_56%)]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.9, delay: 0.15 + index * 0.06 }}
                />
              </div>
              <div className="p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg font-medium text-white">
                  {step.number}
                </div>
                <h3 className="mt-6 text-2xl font-medium tracking-[-0.04em] text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#b0b0b0]">
                  {step.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
