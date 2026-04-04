import { useState } from "react";

import { faqItems } from "../../data";
import { ChevronIcon } from "../../../../shared/icons";
import { Container, PrimaryButton, SectionHeading } from "../../../../shared/ui";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Your Questions, Answered"
            title="Find everything you need to know about Cryptix, from security to supported assets."
          />
          <PrimaryButton href="#pricing">
            Create account now
          </PrimaryButton>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {faqItems.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <article
                key={item.question}
                className="rounded-[28px] border border-white/10 bg-white/[0.04]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-white">{item.question}</span>
                  <ChevronIcon
                    className={`h-5 w-5 flex-none text-white transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-7 text-[#b0b0b0]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
