import { motion } from "framer-motion";
import { useState } from "react";

import { pricingPlans } from "../../data";
import { CheckIcon } from "../../../../shared/icons";
import { Container, PrimaryButton, SectionHeading } from "../../../../shared/ui";
import { fadeUp, staggerContainer, staggerItem } from "../../../../shared/animation/variants";

export function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <motion.section id="pricing" className="border-y border-white/10 py-24 sm:py-32" {...fadeUp()}>
      <Container>
        <SectionHeading
          eyebrow="Choose Your Plan. Start Trading Today."
          title="Transparent pricing for every investor. Scale as you grow with no hidden fees or surprise charges."
          centered
        />

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
            {["monthly", "yearly"].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setBilling(value)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  billing === value
                    ? "bg-[#00ffb2] text-[#08070e]"
                    : "text-[#b0b0b0]"
                }`}
              >
                {value === "monthly" ? "Monthly" : "Yearly"}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-3 text-center text-sm font-medium text-[#00ffb2]">20% OFF</p>

        <motion.div
          className="mt-12 grid gap-5 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          {pricingPlans.map((plan) => (
            <motion.article
              key={plan.name}
              variants={staggerItem}
              whileHover={{ y: -10, transition: { duration: 0.28 } }}
              className={`reveal rounded-[32px] border p-6 ${
                plan.badge
                  ? "border-[#00ffb2]/40 bg-[#0f1715]"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.04em] text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#b0b0b0]">
                    {plan.description}
                  </p>
                </div>
                {plan.badge ? (
                  <span className="rounded-full bg-[#00ffb2] px-3 py-1 text-xs font-medium text-[#08070e]">
                    {plan.badge}
                  </span>
                ) : null}
              </div>

              <div className="mt-8 border-y border-white/10 py-6">
                <p className="text-5xl font-semibold tracking-[-0.06em] text-white">
                  {billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                </p>
                <p className="mt-2 text-sm text-[#8b8e98]">
                  /month {billing === "yearly" ? "(billed yearly)" : ""}
                </p>
              </div>

              <PrimaryButton
                href="#pricing"
                className="mt-6 w-full justify-center"
              >
                Get started
              </PrimaryButton>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-white">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-6 text-[#d9d9df]">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
