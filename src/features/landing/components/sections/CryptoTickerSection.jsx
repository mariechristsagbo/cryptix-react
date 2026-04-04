import { useMemo } from "react";

import { cryptos } from "../../data";
import { Container, PrimaryButton, SectionHeading } from "../../../../shared/ui";

export function CryptoTickerSection() {
  const rows = useMemo(() => {
    const bySymbol = Object.fromEntries(cryptos.map((crypto) => [crypto.symbol, crypto]));

    return [
      [bySymbol.XRP, bySymbol.ETH, bySymbol.BTC, bySymbol.DASH],
      [bySymbol.BTC, bySymbol.ETH, bySymbol.SOL, bySymbol.DASH],
      [bySymbol.XRP, bySymbol.ETH, bySymbol.BTC, bySymbol.SOL],
      [bySymbol.BTC, bySymbol.ETH, bySymbol.SOL, bySymbol.DASH]
    ];
  }, []);

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

          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[#0c0c14] p-4 sm:p-5">
            {rows.map((row, index) => (
              <div
                key={index}
                className={`marquee-row ${index % 2 === 1 ? "marquee-row-reverse" : ""} ${
                  index === 0 ? "" : "mt-4"
                }`}
              >
                {[...row, ...row].map((crypto, itemIndex) => (
                  <article
                    key={`${crypto.symbol}-${itemIndex}`}
                    className="min-w-[280px] rounded-full border border-white/8 bg-[#181922] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:min-w-[300px]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full border border-white/10 bg-[#21222a]">
                        <img
                          src={crypto.logoUrl}
                          alt={`${crypto.name} logo`}
                          className="h-10 w-10 rounded-full object-contain"
                          loading="lazy"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-[17px] font-medium tracking-[-0.03em] text-white sm:text-[18px]">
                          {crypto.name}
                        </p>
                        <div className="mt-1 flex items-center gap-2 text-[14px] sm:text-[15px]">
                          <span className="text-[#9ea2ad]">{crypto.price}</span>
                          <span
                            className={
                              crypto.change.startsWith("-")
                                ? "font-medium text-[#ff4d86]"
                                : "font-medium text-[#59db9e]"
                            }
                          >
                            {crypto.change}
                          </span>
                        </div>
                      </div>
                    </div>
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
