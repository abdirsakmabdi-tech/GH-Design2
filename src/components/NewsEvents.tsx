import Image from "next/image";
import Link from "next/link";
import { newsItems, type NewsEventItem } from "@/data/news-events";

const MONTH_LABELS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
] as const;

function formatMonthYear(date: string) {
  const [, month, year] = date.split(".");
  const monthIndex = Number(month) - 1;
  const label = MONTH_LABELS[monthIndex] ?? month;
  return `${label} ${year}`;
}

function NewsCard({ item }: { item: NewsEventItem }) {
  return (
    <article className="flex h-full min-w-0 flex-col overflow-clip rounded-xl bg-utility-bg">
      <Link
        href={item.href}
        className="group relative z-[1] -mb-px block aspect-[4/3] w-full overflow-clip leading-none outline-none focus-visible:outline-none"
      >
        {item.image && (
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]">
            <Image
              src={item.image}
              alt={item.imageAlt ?? item.title}
              fill
              className="!top-1/2 !left-1/2 !h-[112%] !w-[112%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
              sizes="(max-width: 768px) 100vw, 380px"
            />
          </div>
        )}
      </Link>

      <div className="relative flex flex-1 flex-col justify-between bg-utility-bg p-5 lg:p-6">
        <Link
          href={item.href}
          className="group outline-none focus-visible:outline-none"
        >
          <h3 className="text-lg font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-gha-primary lg:text-xl">
            {item.title}
          </h3>
        </Link>

        <div className="mt-5 flex items-center justify-end gap-3">
          <time
            dateTime={item.date.split(".").reverse().join("-")}
            className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-foreground uppercase"
          >
            {formatMonthYear(item.date)}
          </time>
        </div>
      </div>
    </article>
  );
}

export function NewsEvents() {
  return (
    <section
      className="bg-gradient-to-b from-gha-primary via-[#35599a] to-[#7d8fa8] py-16 text-white lg:py-20"
      aria-labelledby="news-events-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 gap-y-5">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.14em] text-white/80 uppercase">
              News &amp; updates
            </p>
            <h2
              id="news-events-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]"
            >
              The latest from GHA
            </h2>
          </div>

          <Link
            href="/latest/news"
            className="ml-auto inline-flex shrink-0 items-center gap-5 rounded-xl border border-white/50 bg-white px-5 py-3.5 text-foreground transition-colors hover:border-gha-primary hover:bg-gha-primary hover:text-white active:border-gha-primary-hover active:bg-gha-primary-hover sm:gap-6 sm:px-6 sm:py-4"
          >
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase sm:text-xs">
              Explore news &amp; updates
            </span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="shrink-0"
              aria-hidden="true"
            >
              <path
                d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:mt-12 lg:gap-5">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
