import { assets } from "../../data";
import { StarIcon } from "../../../../shared/icons";
import { Container, GhostButton, PrimaryButton } from "../../../../shared/ui";

const titleLines = [
  ["Take", "Control", "of"],
  ["Your", "Digital", "Assets"],
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-36 sm:pt-40">
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />
      <Container className="relative">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#d9d9df] backdrop-blur-xl">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00ffb2]/15 text-[#00ffb2]">
              <StarIcon className="h-3.5 w-3.5" />
            </span>
            <span>Simplicity, performance, and security.</span>
          </div>

          <h1 className="mt-8 flex flex-col items-center gap-y-2 text-center text-4xl font-normal tracking-[-0.03em] text-white sm:text-5xl lg:gap-y-3 lg:text-[64px] lg:leading-[1.12]">
            {titleLines.map((line, lineIndex) => (
              <span
                key={lineIndex}
                className="flex flex-wrap justify-center gap-x-2 sm:gap-x-2.5 lg:gap-x-3"
              >
                {line.map((word, wordIndex) => {
                  const index =
                    titleLines
                      .slice(0, lineIndex)
                      .reduce((sum, l) => sum + l.length, 0) + wordIndex;
                  return (
                    <span
                      key={`${word}-${index}`}
                      className="hero-word"
                      style={{ animationDelay: `${index * 0.08}s` }}
                    >
                      {word}
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          <p
            className="hero-fade mx-auto mt-6 max-w-3xl text-base leading-7 text-[#b0b0b0] sm:text-lg"
            style={{ animationDelay: "0.58s" }}
          >
            Cryptix offers a secure experience for managing your digital assets.
            Instant transactions, optimized fees, and premium design.
          </p>

          <div
            className="hero-fade mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "0.78s" }}
          >
            <PrimaryButton href="#pricing">
              Get started now
            </PrimaryButton>
            <GhostButton href="#pricing">Explore pricing</GhostButton>
          </div>
        </div>
      </Container>

      <div
        className="hero-fade relative z-10 mt-14 w-full px-4 sm:px-6"
        style={{ animationDelay: "0.96s" }}
      >
        <div className="mx-auto w-full max-w-[min(1280px,calc(100vw-2rem))]">
          <div className="dashboard-shell rounded-[28px] border border-white/10 bg-[#0e1019] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:rounded-[32px] sm:p-2.5 md:p-3">
            <div className="relative overflow-hidden rounded-[20px] border border-white/10 sm:rounded-[24px]">
              <img
                src={assets.heroDashboard}
                alt="Cryptix dashboard"
                className="relative block w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2 bg-[#0b0911]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
