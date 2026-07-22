"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Category = "news" | "stories";

type Article = {
  id: string;
  title: string;
  date: string;
  category: Category;
  categoryLabel: string;
  readMinutes: number;
  href: string;
  image: string;
  imageAlt: string;
};

const FILTERS = [
  { id: "all" as const, label: "All" },
  { id: "news" as const, label: "News" },
  { id: "stories" as const, label: "Stories" },
];

const ARTICLES: Article[] = [
  {
    id: "1",
    title: "Newborn care training expands across partner hospitals in Kenya",
    date: "12.06.2026",
    category: "news",
    categoryLabel: "News",
    readMinutes: 3,
    href: "/latest/news/newborn-care-kenya",
    image:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Newborn care in a clinical setting",
  },
  {
    id: "2",
    title: "How community health workers are transforming maternal care",
    date: "28.05.2026",
    category: "stories",
    categoryLabel: "Stories",
    readMinutes: 5,
    href: "/latest/stories/community-health-workers",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Community health worker supporting a mother",
  },
  {
    id: "3",
    title: "Digital health tools bring clinical guidance to the bedside",
    date: "09.05.2026",
    category: "news",
    categoryLabel: "News",
    readMinutes: 2,
    href: "/latest/news/digital-health-tools",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Healthcare professional using digital tools",
  },
  {
    id: "4",
    title: "Locally led initiatives strengthen oxygen therapy in Somalia",
    date: "22.04.2026",
    category: "stories",
    categoryLabel: "Stories",
    readMinutes: 4,
    href: "/latest/stories/oxygen-therapy-somalia",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Hospital corridor and medical equipment",
  },
  {
    id: "5",
    title: "Partnerships advance health systems research and innovation",
    date: "03.04.2026",
    category: "news",
    categoryLabel: "News",
    readMinutes: 3,
    href: "/latest/news/health-systems-partnerships",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Healthcare workers collaborating",
  },
  {
    id: "6",
    title: "From training to impact: a midwife’s journey with GHA",
    date: "18.03.2026",
    category: "stories",
    categoryLabel: "Stories",
    readMinutes: 6,
    href: "/latest/stories/midwife-journey",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Healthcare professional at work",
  },
];

function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M7 4.2V7l1.8 1.2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LatestNews() {
  const [filter, setFilter] = useState<"all" | Category>("all");

  const visible =
    filter === "all"
      ? ARTICLES.slice(0, 3)
      : ARTICLES.filter((a) => a.category === filter).slice(0, 3);

  return (
    <section
      className="bg-white"
      aria-labelledby="latest-news-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-20">
        {/* Header row: title left, filters right */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[12px] font-bold tracking-[0.14em] text-gha-primary uppercase">
              Latest
            </p>
            <h2
              id="latest-news-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-[#1a1a1a] sm:text-3xl lg:text-[2.15rem]"
            >
              News &amp; Stories
            </h2>
          </div>

          <div
            className="flex flex-wrap gap-2.5"
            role="tablist"
            aria-label="Filter articles"
          >
            {FILTERS.map((item) => {
              const isActive = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(item.id)}
                  className={`rounded-full px-5 py-2 text-[12px] font-bold tracking-wide uppercase transition-colors ${
                    isActive
                      ? "bg-gha-primary text-white"
                      : "border border-gha-primary bg-white text-gha-primary hover:bg-gha-primary/5"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards grid */}
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-7">
          {visible.map((article) => (
            <li key={article.id}>
              <article className="flex h-full flex-col">
                <Link
                  href={article.href}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <time
                    dateTime={article.date.split(".").reverse().join("-")}
                    className="text-[13px] text-[#8a8f96]"
                  >
                    {article.date}
                  </time>
                  <span className="rounded-md bg-[#eceff1] px-2.5 py-1 text-[11px] font-medium text-[#6b7280]">
                    {article.categoryLabel}
                  </span>
                </div>

                <h3 className="mt-3 text-[15px] font-bold leading-snug tracking-wide text-[#1a1a1a] uppercase sm:text-[16px]">
                  <Link
                    href={article.href}
                    className="transition-colors hover:text-gha-primary"
                  >
                    {article.title}
                  </Link>
                </h3>

                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <p className="inline-flex items-center gap-1.5 text-[13px] text-[#8a8f96]">
                    <ClockIcon />
                    {article.readMinutes} Minutes
                  </p>
                  <Link
                    href={article.href}
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-gha-primary transition-colors hover:text-gha-primary-hover"
                  >
                    Read more
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
