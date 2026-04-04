import { useMemo } from "react";

import { cryptos } from "../../data";
import { Container, PrimaryButton, SectionHeading } from "../../../../shared/ui";

export function CryptoTickerSection() {
  const rows = useMemo(
    () => [cryptos, [...cryptos.slice(2), ...cryptos.slice(0, 2)], cryptos],
    []
  );

  return (
    <section id="allcryptos" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[440px_minmax(0,1fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="All Cryptos, One Platform"
              title="Buy, sell, and convert all major cryptocurrencies on a single platform."
              description="A seamless experience with no compromises."
            />
            <PrimaryButton href="#pricing" className="mt-8">
              Buy crypto now
            </PrimaryButton>
          </div>

          <div className="space-y-4 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-4">
            {rows.map((row, index) => (
              <div
                key={index}
                className={`marquee-row ${index % 2 === 1 ? "marquee-row-reverse" : ""}`}
              >
                {[...row, ...row].map((crypto, itemIndex) => (
                  <article
                    key={`${crypto.symbol}-${itemIndex}`}
                    className="min-w-[220px] rounded-[24px] border border-white/10 bg-[#11131d] p-5"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-base font-medium text-white">{crypto.name}</p>
                        <p className="mt-1 text-sm text-[#7d8391]">{crypto.symbol}</p>
                      </div>
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${
                          crypto.change.startsWith("-")
                            ? "bg-[#ff4d6d]/10 text-[#ff8ba0]"
                            : "bg-[#00ffb2]/10 text-[#00ffb2]"
                        }`}
                      >
                        {crypto.change}
                      </span>
                    </div>
                    <p className="mt-8 text-3xl font-semibold tracking-[-0.05em] text-white">
                      {crypto.price}
                    </p>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
