import Link from "next/link";

export function GlobalReach() {
  return (
    <section
      className="border-y border-gha-border bg-[#F7F5F2]"
      aria-labelledby="global-reach-heading"
    >
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-gha-muted uppercase">
          Around the world
        </p>
        <h2
          id="global-reach-heading"
          className="mt-4 max-w-[14ch] text-[2.35rem] font-bold tracking-tight text-foreground text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]"
        >
          We work across Kenya, Somalia &amp; the USA
        </h2>
        <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-gha-muted sm:text-base">
          We are proud of our growing global team, working with communities and
          partners across the world.
        </p>
        <Link
          href="/gha-in-action"
          className="mt-8 inline-flex items-center rounded-full border border-foreground/70 bg-transparent px-6 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-gha-primary hover:bg-gha-primary hover:text-white"
        >
          Explore our work
        </Link>
      </div>
    </section>
  );
}
