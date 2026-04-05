import { motion } from "framer-motion";
import { useState } from "react";

import { faqItems } from "../../data";
import { Container, PrimaryButton, SectionHeading } from "../../../../shared/ui";
import { fadeUp } from "../../../../shared/animation/variants";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const midpoint = Math.ceil(faqItems.length / 2);
  const columns = [faqItems.slice(0, midpoint), faqItems.slice(midpoint)];

  return (
    <motion.section id="faq" className="py-24 sm:py-32" {...fadeUp()}>
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Your Questions, Answered"
            title="Find everything you need to know about Cryptix, from security to supported assets."
          />
          <PrimaryButton href="#pricing" className="self-start lg:self-auto">
            Create account now
          </PrimaryButton>
        </div>

        <motion.div
          className="mt-12 grid border-t border-white/10 lg:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.14 }}
          transition={{ duration: 0.8, delay: 0.08 }}
        >
          {columns.map((columnItems, columnIndex) => (
            <div
              key={columnIndex}
              className={columnIndex === 1 ? "lg:border-l lg:border-white/10" : ""}
            >
              {columnItems.map((item, itemIndex) => {
                const index = columnIndex * midpoint + itemIndex;
                const isOpen = index === openIndex;

                return (
                  <article key={item.question} className="overflow-hidden border-b border-white/10">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-start justify-between gap-5 px-6 py-7 text-left sm:gap-6 sm:px-8 sm:py-8"
                    >
                      <div className="min-w-0">
                        <span className="block text-base font-medium tracking-[-0.03em] text-white sm:text-lg">
                          {item.question}
                        </span>
                      </div>
                      <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center text-2xl leading-none text-white sm:text-[26px]">
                        {isOpen ? "\u00d7" : "+"}
                      </span>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p
                          className={`max-w-[680px] px-6 text-sm leading-7 text-[#b0b0b0] transition-[padding,opacity] duration-300 ease-out sm:px-8 sm:text-base sm:leading-8 ${
                            isOpen ? "pb-7 opacity-100 sm:pb-8" : "pb-0 opacity-0"
                          }`}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
