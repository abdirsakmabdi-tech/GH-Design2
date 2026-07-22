"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";
import { allLeaders, type Leader } from "@/data/leadership";

function LeaderInitials({ name }: { name: string }) {
  const initials = name
    .replace(/^(Dr\.|Ms\.|Mr\.)\s+/i, "")
    .split(/\s+/)
    .filter((part) => !/^(RRT|MSW|LGSW)$/i.test(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gha-primary to-gha-secondary text-3xl font-bold text-white"
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

function LeaderSlide({ person }: { person: Leader }) {
  return (
    <article className="w-[min(82vw,280px)] shrink-0 snap-start sm:w-[300px]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-utility-bg">
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 82vw, 300px"
          />
        ) : (
          <LeaderInitials name={person.name} />
        )}
      </div>
      <h3 className="mt-5 text-xl font-bold tracking-tight text-foreground">
        {person.name}
      </h3>
      <p className="mt-1 text-sm font-semibold tracking-wide text-gha-primary uppercase">
        {person.role}
      </p>
    </article>
  );
}

function NavButton({
  direction,
  onClick,
  className = "",
}: {
  direction: "prev" | "next";
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:bg-gha-secondary hover:text-black ${className}`}
      aria-label={direction === "prev" ? "Previous leader" : "Next leader"}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d={direction === "prev" ? "M10 3L5 8l5 5" : "M6 3l5 5-5 5"}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export function LeadershipSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = useCallback((direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector<HTMLElement>("article");
    const gap = 24;
    const distance = (firstCard?.offsetWidth ?? 300) + gap;

    track.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  }, []);

  return (
    <section
      className="border-t border-gha-border bg-background py-16 lg:py-20"
      aria-labelledby="leadership-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-gha-muted">Who we are</p>
            <h2
              id="leadership-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Our Leadership
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex border border-gha-border bg-white">
              <NavButton direction="prev" onClick={() => scrollByCard("prev")} />
              <NavButton
                direction="next"
                onClick={() => scrollByCard("next")}
                className="border-l border-gha-border"
              />
            </div>
            <Link
              href="/who-we-are/leadership"
              className="hidden text-sm font-bold text-gha-primary transition-colors hover:text-gha-primary-hover sm:inline-flex"
            >
              View all
            </Link>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
        >
          {allLeaders.map((person) => (
            <LeaderSlide key={person.name} person={person} />
          ))}
        </div>

        <p className="mt-8 sm:hidden">
          <Link
            href="/who-we-are/leadership"
            className="text-sm font-bold text-gha-primary transition-colors hover:text-gha-primary-hover"
          >
            View all leadership
          </Link>
        </p>
      </div>
    </section>
  );
}
