import { motion } from "framer-motion";

import { benefits } from "../../data";
import { BoltIcon, CoinIcon, GridIcon, ShieldIcon } from "../../../../shared/icons";
import { Container, SectionHeading } from "../../../../shared/ui";
import { fadeUp, staggerContainer, staggerItem } from "../../../../shared/animation/variants";

const benefitIcons = [ShieldIcon, BoltIcon, CoinIcon, GridIcon];

export function WhySection() {
  return (
    <motion.section id="why" className="py-24 sm:py-32" {...fadeUp()}>
      <Container>
        <SectionHeading
          eyebrow="Why Choose Cryptix?"
          title="Benefits designed to provide a seamless, secure, and accessible experience for all users."
        />

        <motion.div
          className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefitIcons[index];

            return (
              <motion.article
                key={benefit.title}
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.28 } }}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00ffb2]/10 text-[#00ffb2]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-8 text-xl font-medium tracking-[-0.04em] text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#b0b0b0]">
                  {benefit.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </motion.section>
  );
}
