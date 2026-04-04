import { motion } from "framer-motion";

import { assets, footerLinks, socialLinks } from "../../data";
import { Container } from "../../../../shared/ui";
import { fadeUp } from "../../../../shared/animation/variants";

export function Footer() {
  return (
    <motion.footer className="py-14" {...fadeUp(0.04, 18)}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <img src={assets.footerLogo} alt="Cryptix" className="h-10 w-auto" />
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#b0b0b0]">
              Secure, fast, and seamless crypto trading. Cryptix makes digital
              assets effortless.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-base font-medium text-white">Navigation</p>
              <div className="mt-6 flex flex-col gap-4">
                {footerLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-sm text-[#b0b0b0]">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-base font-medium text-white">Socials</p>
              <div className="mt-6 flex flex-col gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[#b0b0b0]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.footer>
  );
}
