import { assets, heroStats } from "../../data";
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

        <div
          className="hero-fade mt-14 grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)]"
          style={{ animationDelay: "0.96s" }}
        >
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {heroStats.map((item) => (
              <div
                key={item.label}
                className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <p className="text-sm text-[#8b8e98]">{item.label}</p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="dashboard-shell rounded-[32px] border border-white/10 bg-[#0e1019] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
            <div className="dashboard-glow" />
            <img
              src={assets.heroDashboard}
              alt="Cryptix dashboard"
              className="relative w-full rounded-[24px] border border-white/10 object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
