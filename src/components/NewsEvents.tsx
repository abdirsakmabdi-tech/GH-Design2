"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  formatNewsDisplayDate,
  newsPageItems,
  type NewsEventItem,
} from "@/data/news-events";

function LocationPin() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0 text-gha-primary"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

function SliderArrow({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous news" : "Next news"}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e07a2f] text-white transition-opacity hover:bg-[#d06c24] disabled:cursor-not-allowed disabled:opacity-35 sm:h-12 sm:w-12"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
        className={direction === "prev" ? "rotate-180" : undefined}
      >
        <path
          d="M6.5 3.5L12 9l-5.5 5.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function FeaturedNewsCard({ item }: { item: NewsEventItem }) {
  return (
    <article className="flex h-full min-w-0 overflow-hidden bg-utility-bg">
      <Link
        href={item.href}
        className="relative hidden w-[42%] shrink-0 self-stretch overflow-hidden sm:block"
      >
        {item.image && (
          <Image
            src={item.image}
            alt={item.imageAlt ?? item.title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            sizes="(max-width: 1024px) 40vw, 280px"
          />
        )}
      </Link>

      <div className="flex min-w-0 flex-1 flex-col justify-center p-5 sm:p-6 lg:p-7">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[12px] text-[#3a3a3a]/75">
          <time dateTime={item.date.split(".").reverse().join("-")}>
            {formatNewsDisplayDate(item.date)}
          </time>
          {item.location && (
            <span className="inline-flex items-center gap-1.5">
              <LocationPin />
              {item.location}
            </span>
          )}
        </div>

        {/* Mobile image */}
        <Link
          href={item.href}
          className="relative mt-4 block aspect-[16/10] overflow-hidden sm:hidden"
        >
          {item.image && (
            <Image
              src={item.image}
              alt={item.imageAlt ?? item.title}
              fill
              className="object-cover"
              sizes="(max-width: 639px) calc(100vw - 3rem), 0px"
            />
          )}
        </Link>

        <h3 className="mt-4 text-lg font-bold leading-snug tracking-tight text-[#1a2f5c] sm:mt-5 sm:text-xl lg:text-[1.35rem] lg:leading-[1.25]">
          <Link href={item.href} className="transition-colors hover:text-gha-primary">
            {item.title}
          </Link>
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#3a3a3a]/85 sm:text-[15px]">
          {item.excerpt}
        </p>
      </div>
    </article>
  );
}

export function NewsEvents() {
  const items = newsPageItems;
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollByCard = (direction: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.85, 560);
    el.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="overflow-hidden bg-white py-16 text-foreground lg:py-20"
      aria-labelledby="news-events-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 text-center lg:px-8">
        <span className="inline-flex items-center rounded-full bg-[#e07a2f] px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-white">
          What&apos;s new?
        </span>
        <h2
          id="news-events-heading"
          className="type-h2 mt-4 text-[#1a2f5c]"
        >
          Featured news
        </h2>
      </div>

      <div className="relative mt-10 lg:mt-12">
        {/* Edge fades like Farm Africa peeking cards */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-white to-transparent sm:w-10 lg:w-16"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-white to-transparent sm:w-10 lg:w-16"
          aria-hidden="true"
        />

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-[max(1.5rem,calc((100vw-1100px)/2+1.5rem))] pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 lg:gap-6 [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="w-[min(100%,520px)] shrink-0 snap-center sm:w-[min(85vw,560px)] lg:w-[min(48vw,540px)]"
            >
              <FeaturedNewsCard item={item} />
            </div>
          ))}
        </div>

        {/* Farm Africa–style arrows between / over the track */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-3 sm:px-5 lg:px-8">
          <div className="pointer-events-auto">
            <SliderArrow
              direction="prev"
              onClick={() => scrollByCard("prev")}
              disabled={!canPrev}
            />
          </div>
          <div className="pointer-events-auto">
            <SliderArrow
              direction="next"
              onClick={() => scrollByCard("next")}
              disabled={!canNext}
            />
          </div>
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/latest/news"
            className="text-sm font-bold text-gha-primary transition-colors hover:text-gha-primary-hover"
          >
            Browse all news →
          </Link>
        </div>
      </div>
    </section>
  );
}
