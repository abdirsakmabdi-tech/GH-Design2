import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  formatNewsDisplayDate,
  newsPageItems,
  type NewsEventItem,
} from "@/data/news-events";

export const metadata: Metadata = {
  title: "News & Updates | Global Health Alliance",
  description:
    "Program updates, partnerships, and stories from Global Health Alliance—in Minnesota, Somalia, and beyond.",
};

function FeaturedNewsRow({ item }: { item: NewsEventItem }) {
  return (
    <article className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-12">
      <Link
        href={item.href}
        className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-utility-bg lg:aspect-[5/4]"
      >
        {item.image && (
          <Image
            src={item.image}
            alt={item.imageAlt ?? item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 48vw"
            priority
          />
        )}
      </Link>

      <div className="flex flex-col">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-semibold tracking-[0.08em] uppercase">
          {item.pressType && (
            <span className="text-gha-primary">{item.pressType}</span>
          )}
          {item.source && (
            <>
              <span className="text-gha-border" aria-hidden="true">
                ·
              </span>
              <span className="text-gha-muted">{item.source}</span>
            </>
          )}
        </div>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl lg:text-[2rem] lg:leading-[1.2]">
          <Link
            href={item.href}
            className="transition-colors hover:text-gha-primary"
          >
            {item.title}
          </Link>
        </h2>

        <p className="mt-4 text-base leading-relaxed text-gha-muted lg:text-[15px]">
          {item.excerpt}
        </p>

        {item.whyItMatters && (
          <div className="mt-6 border-l-2 border-gha-secondary pl-4">
            <p className="text-[11px] font-bold tracking-[0.14em] text-gha-primary uppercase">
              Why this matters
            </p>
            <p className="mt-1.5 text-[15px] leading-relaxed text-foreground">
              {item.whyItMatters}
            </p>
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <time
            dateTime={item.date.split(".").reverse().join("-")}
            className="text-sm text-gha-muted"
          >
            {formatNewsDisplayDate(item.date)}
          </time>

          <Link
            href={item.href}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-gha-primary transition-all hover:gap-2.5 hover:text-gha-primary-hover"
          >
            {item.cta}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function NewsGridCard({ item }: { item: NewsEventItem }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-utility-bg">
      <Link
        href={item.href}
        className="group relative block aspect-[4/3] overflow-hidden bg-utility-bg"
      >
        {item.image && (
          <Image
            src={item.image}
            alt={item.imageAlt ?? item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
          />
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-semibold tracking-[0.08em] uppercase">
          {item.pressType && (
            <span className="text-gha-primary">{item.pressType}</span>
          )}
          {item.source && (
            <>
              <span className="text-gha-border" aria-hidden="true">
                ·
              </span>
              <span className="text-gha-muted">{item.source}</span>
            </>
          )}
        </div>

        <h3 className="mt-2.5 text-lg font-bold tracking-tight text-balance text-foreground lg:text-xl">
          <Link
            href={item.href}
            className="transition-colors hover:text-gha-primary"
          >
            {item.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-gha-muted">
          {item.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <time
            dateTime={item.date.split(".").reverse().join("-")}
            className="text-xs text-gha-muted"
          >
            {formatNewsDisplayDate(item.date)}
          </time>
          <Link
            href={item.href}
            className="text-xs font-bold text-gha-primary transition-colors hover:text-gha-primary-hover"
          >
            {item.cta} →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function NewsPage() {
  const [featured, ...rest] = newsPageItems;

  return (
    <main className="bg-background text-foreground">
      <header className="border-b border-gha-border bg-gha-surface">
        <div className="mx-auto max-w-[1100px] px-6 pt-14 pb-12 lg:px-8 lg:pt-20 lg:pb-16">
          <p className="text-sm font-semibold tracking-[0.14em] text-gha-secondary uppercase">
            News &amp; Press
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
            In the field.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gha-muted">
            Program updates, partnerships, and stories from Global Health
            Alliance—at home in Minnesota and across our global work.
          </p>
        </div>
      </header>

      <section className="bg-gha-surface">
        <div className="mx-auto max-w-[1100px] px-6 py-10 lg:px-8 lg:py-14">
          {featured && <FeaturedNewsRow item={featured} />}

          {rest.length > 0 && (
            <div className="mt-14 grid grid-cols-1 gap-5 border-t border-gha-border pt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6 lg:pt-16">
              {rest.map((item) => (
                <NewsGridCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-gha-border bg-background py-14 lg:py-16">
        <div className="mx-auto flex max-w-[1100px] flex-col items-start gap-6 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Stay close to the work.
            </h2>
            <p className="mt-2 max-w-md text-base text-gha-muted">
              Explore our programs or meet the people leading Global Health
              Alliance.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/what-we-do"
              className="inline-flex h-11 items-center rounded-full bg-gha-primary px-6 text-[13px] font-bold tracking-wide text-white uppercase transition-colors hover:bg-gha-primary-hover"
            >
              What we do
            </Link>
            <Link
              href="/who-we-are/leadership"
              className="inline-flex h-11 items-center rounded-full border border-gha-border bg-white px-6 text-[13px] font-bold tracking-wide text-foreground uppercase transition-colors hover:border-gha-primary hover:bg-gha-primary hover:text-white"
            >
              Leadership
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
