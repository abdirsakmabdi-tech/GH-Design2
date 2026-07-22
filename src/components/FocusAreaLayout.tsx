import Image from "next/image";
import Link from "next/link";
import type { FocusArea } from "@/data/focus-areas";
import { focusAreas } from "@/data/focus-areas";

export function FocusAreaLayout({ area }: { area: FocusArea }) {
  const others = focusAreas.filter((item) => item.slug !== area.slug);

  return (
    <main className="bg-background text-foreground">
      {/* Hero — title, lede, full-bleed image */}
      <header className="bg-gha-surface">
        <div className="mx-auto max-w-[1100px] px-6 pt-14 pb-10 lg:px-8 lg:pt-20 lg:pb-12">
          <p className="text-sm font-semibold tracking-[0.14em] text-gha-secondary uppercase">
            What We Do
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
            {area.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gha-muted sm:text-xl">
            {area.summary}
          </p>
        </div>

        {area.image ? (
          <div className="relative w-full overflow-hidden">
            <Image
              src={area.image.src}
              alt={area.image.alt}
              width={1920}
              height={1080}
              priority
              className="block h-auto w-full max-w-none"
              sizes="100vw"
            />
          </div>
        ) : (
          <div
            className="h-2 w-full bg-gradient-to-r from-gha-secondary via-gha-primary/40 to-transparent"
            aria-hidden="true"
          />
        )}
      </header>

      {/* Body */}
      <article className="border-t border-gha-border bg-gha-surface">
        <div className="mx-auto max-w-[800px] px-6 py-16 lg:px-8 lg:py-20">
          <div className="space-y-6">
            {area.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-lg leading-relaxed text-gha-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* More focus areas */}
      <section className="border-t border-gha-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            More Focus Areas
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item, index) => (
              <li key={item.slug}>
                <Link
                  href={`/what-we-do/${item.slug}`}
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
                  <h3 className="relative mt-3 text-lg font-bold tracking-tight text-balance text-white">
                    {item.title}
                  </h3>
                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-white/80 line-clamp-3">
                    {item.summary}
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
          </ul>

          <p className="mt-12">
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-1 text-[15px] font-bold text-gha-primary transition-all duration-300 hover:gap-2 hover:text-gha-primary-hover"
            >
              ← All Focus Areas
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
