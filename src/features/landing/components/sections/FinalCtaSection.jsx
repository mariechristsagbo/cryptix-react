import { Container, PrimaryButton, SectionHeading } from "../../../../shared/ui";

export function FinalCtaSection() {
  return (
    <section className="border-y border-white/10 py-24 sm:py-32">
      <Container>
        <div className="cta-panel rounded-[36px] border border-white/10 px-6 py-16 text-center sm:px-10">
          <SectionHeading
            title="Ready to take control of your crypto?"
            description="Join thousands of users who trust Cryptix for secure, seamless, and efficient cryptocurrency transactions."
            centered
          />
          <PrimaryButton href="#pricing" className="mt-8">
            Get started now
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
