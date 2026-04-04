import { motion } from "framer-motion";

import { Container, PrimaryButton, SectionHeading } from "../../../../shared/ui";
import { fadeUp, scaleIn } from "../../../../shared/animation/variants";

export function FinalCtaSection() {
  return (
    <motion.section className="py-24 sm:py-32" {...fadeUp()}>
      <Container>
        <motion.div className="px-6 py-16 text-center sm:px-10" {...scaleIn(0.08)}>
          <SectionHeading
            title="Ready to take control of your crypto?"
            description="Join thousands of users who trust Cryptix for secure, seamless, and efficient cryptocurrency transactions."
            centered
          />
          <PrimaryButton href="#pricing" className="mt-8">
            Get started now
          </PrimaryButton>
        </motion.div>
      </Container>
    </motion.section>
  );
}
