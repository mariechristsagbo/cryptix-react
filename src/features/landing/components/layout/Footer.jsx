import { motion } from "framer-motion";

import { assets, footerLinks } from "../../data";
import { Container } from "../../../../shared/ui";
import { fadeUp } from "../../../../shared/animation/variants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer className="py-14" {...fadeUp(0.04, 18)}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <img src={assets.footerLogo} alt="Cryptix" className="h-10 w-auto" />
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#b0b0b0]">
              Secure, fast, and seamless crypto trading. Cryptix makes digital
              assets effortless.
            </p>
            <p className="mt-4 text-sm text-[#b0b0b0]">
              Built by{" "}
              <a
                href="https://www.linkedin.com/in/marie-christ-sagbo/"
                className="font-medium text-white underline-offset-2 transition-colors hover:text-[#00ffb2] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Marie-Christ Sgbo
              </a>
            </p>
          </div>

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
        </div>

        <p className="mt-12 text-sm text-[#8b8e98]">
          © {year} Cryptix. All rights reserved.
        </p>
      </Container>
    </motion.footer>
  );
}
