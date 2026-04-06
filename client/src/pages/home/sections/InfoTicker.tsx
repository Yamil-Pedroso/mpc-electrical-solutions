const tickerItems = [
  "24/7 Emergency Service",
  "Residential & Commercial",
  "Certified Electrical Work",
  "Fast Response Times",
  "Installations & Repairs",
  "Safe & Reliable Service",
];

export default function InfoTicker() {
  const repeatedItems = [...tickerItems, ...tickerItems];

  return (
    <section className="relative w-full overflow-hidden border-y border-[#031227]/10 bg-[#DA1F27] py-4">
      <div className="relative flex overflow-hidden">
        <div className="ticker-track flex min-w-max items-center">
          {repeatedItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center whitespace-nowrap px-6"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white sm:text-base">
                {item}
              </span>

              <span className="ml-6 text-xl text-[#ffffff]">•</span>
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="ticker-track flex min-w-max items-center"
        >
          {repeatedItems.map((item, index) => (
            <div
              key={`duplicate-${item}-${index}`}
              className="flex items-center whitespace-nowrap px-6"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white sm:text-base">
                {item}
              </span>

              <span className="ml-6 text-xl text-[#d90f1b]">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
