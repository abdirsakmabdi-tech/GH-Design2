const impactStats = [
  {
    value: "3+",
    description:
      "countries where GHA has active healthcare improvement projects",
  },
  {
    value: "1,000+",
    description:
      "healthcare professionals trained through GHA educational programs",
  },
  {
    value: "20+",
    description:
      "hospitals and facilities supported with medical supplies and training",
  },
] as const;

export function ImpactSection() {
  return (
    <section
      className="bg-white text-foreground"
      aria-labelledby="impact-heading"
    >
      <div className="mx-auto grid max-w-[1200px] px-6 pt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-16 lg:px-8 lg:pt-20">
        {/* Sticky left narrative — top-aligned with first stat */}
        <div className="pb-8 lg:sticky lg:top-32 lg:self-start lg:pb-0 xl:top-36">
          <h2 id="impact-heading" className="type-h2 text-foreground">
            Positive impact
          </h2>
          <p className="type-lead mt-6 max-w-xl">
            Aside from the care we deliver with partners and communities, we are
            motivated by lasting health equity. We measure our footprint in
            trained clinicians, stronger hospitals, and families who can reach
            culturally responsive care—in Minnesota, Somalia, and beyond.
          </p>
        </div>

        {/* Scrolling right stats — always fully visible cards */}
        <div className="flex flex-col gap-4 pb-10 sm:gap-5 lg:pb-16">
          {impactStats.map((stat, index) => (
            <div
              key={stat.value}
              className={`rounded-xl bg-gha-secondary p-6 sm:p-7 lg:p-8 ${
                index === 0
                  ? "mt-[calc(1.75rem*1.15+1.5rem)] sm:mt-[calc(2rem*1.15+1.5rem)] lg:mt-[calc(2.25rem*1.15+1.5rem)]"
                  : ""
              }`}
            >
              <p className="type-h1 text-foreground/70">{stat.value}</p>
              <p className="type-body mt-3 max-w-sm text-foreground/65">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
