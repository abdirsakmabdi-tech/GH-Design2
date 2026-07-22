import type { Metadata } from "next";
import Link from "next/link";
import { focusAreas } from "@/data/focus-areas";

export const metadata: Metadata = {
  title: "Focus Areas | What We Do | Global Health Alliance",
  description:
    "Explore GHA’s focus areas across maternal and child health, newborn care, training, digital health, systems strengthening, and more.",
};

export default function WhatWeDoPage() {
  return (
    <main className="bg-background text-foreground">
      <header className="relative overflow-hidden border-b border-gha-border bg-gha-surface">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 8% 0%, color-mix(in srgb, var(--gha-secondary) 16%, transparent), transparent 58%), radial-gradient(ellipse 45% 55% at 100% 15%, color-mix(in srgb, var(--gha-primary) 10%, transparent), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-12 lg:px-8 lg:pt-20 lg:pb-16">
          <p className="text-sm font-semibold tracking-[0.14em] text-gha-secondary uppercase">
            What We Do
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Focus Areas
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gha-muted">
            From maternal and newborn health to digital tools, training, and
            systems strengthening—GHA’s programs are designed to improve care
            where it matters most.
          </p>
        </div>
      </header>

      <section className="bg-gha-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, index) => (
              <li key={area.slug}>
                <Link
                  href={`/what-we-do/${area.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-gha-primary p-6 text-white shadow-[0_8px_24px_rgba(61,96,164,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-gha-primary-hover hover:shadow-[0_16px_40px_rgba(61,96,164,0.28)]"
                >
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-gha-secondary transition-all duration-300 group-hover:w-1.5"
                    aria-hidden="true"
                  />
                  <span
                    className="pointer-events-none absolute -right-1 -top-3 text-[4.5rem] font-black leading-none text-white/10 transition-colors duration-300 group-hover:text-gha-secondary/25"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="relative text-xs font-bold tracking-[0.16em] text-gha-secondary uppercase">
                    Focus {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="relative mt-3 text-xl font-bold tracking-tight text-balance text-white">
                    {area.title}
                  </h2>
                  <p className="relative mt-3 flex-1 text-[15px] leading-relaxed text-white/80">
                    {area.summary}
                  </p>
                  <span className="relative mt-5 inline-flex items-center gap-2 text-sm font-bold text-white">
                    Explore
                    <span
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-gha-secondary group-hover:text-gha-secondary-fg"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
