import { steps } from "../../data";
import { Container, PrimaryButton, SectionHeading } from "../../../../shared/ui";

export function StepsSection() {
  return (
    <section id="howitworks" className="border-y border-white/10 py-24 sm:py-32">
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

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              data-reveal
              className="reveal overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04]"
            >
              <img src={step.image} alt={step.title} className="h-64 w-full object-cover" />
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
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
