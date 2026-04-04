import { benefits } from "../../data";
import { BoltIcon, CoinIcon, GridIcon, ShieldIcon } from "../../../../shared/icons";
import { Container, SectionHeading } from "../../../../shared/ui";

const benefitIcons = [ShieldIcon, BoltIcon, CoinIcon, GridIcon];

export function WhySection() {
  return (
    <section id="why" className="border-y border-white/10 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Cryptix?"
          title="Benefits designed to provide a seamless, secure, and accessible experience for all users."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefitIcons[index];

            return (
              <article
                key={benefit.title}
                data-reveal
                className="reveal rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
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
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
