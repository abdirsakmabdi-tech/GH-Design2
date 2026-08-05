"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
      className="flex h-full w-full items-center justify-center bg-gha-border/40 text-3xl font-bold text-gha-muted"
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

function LeaderCard({ person }: { person: Leader }) {
  return (
    <article className="flex h-full w-[260px] shrink-0 flex-col overflow-hidden rounded-xl bg-utility-bg sm:w-[280px]">
      <div className="relative aspect-[9/8] w-full overflow-hidden bg-gha-border/30">
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover object-[center_20%]"
            sizes="280px"
          />
        ) : (
          <LeaderInitials name={person.name} />
        )}
      </div>

      <div className="p-5 lg:p-6">
        <p className="text-base font-bold text-foreground">{person.name}</p>
        <p className="mt-0.5 text-xs leading-snug text-gha-muted">{person.role}</p>
      </div>
    </article>
  );
}

function LeaderTrack({ leaders, ariaHidden }: { leaders: Leader[]; ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 gap-4 pr-4 lg:gap-5 lg:pr-5"
      aria-hidden={ariaHidden || undefined}
    >
      {leaders.map((person, index) => (
        <LeaderCard
          key={`${person.name}-${ariaHidden ? "dup" : "main"}-${index}`}
          person={person}
        />
      ))}
    </div>
  );
}

export function LeadershipSlider() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return (
    <section
      className="bg-background py-16 lg:py-20"
      aria-labelledby="leadership-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.08em] text-gha-muted uppercase">
              Who we are
            </p>
            <h2
              id="leadership-heading"
              className="type-h2 mt-2 text-foreground"
            >
              Our Leadership
            </h2>
          </div>

          <Link
            href="/who-we-are/leadership"
            className="ml-auto inline-flex shrink-0 items-center gap-5 rounded-xl border border-gha-border bg-white px-5 py-3.5 text-foreground transition-colors hover:border-gha-primary hover:bg-gha-primary hover:text-white active:border-gha-primary-hover active:bg-gha-primary-hover sm:gap-6 sm:px-6 sm:py-4"
          >
            <span className="type-button tracking-[0.14em]">
              View all leadership
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
      </div>

      {prefersReducedMotion ? (
        <div className="mx-auto mt-10 grid max-w-[1200px] grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5 lg:px-8">
          {allLeaders.slice(0, 4).map((person) => (
            <LeaderCard key={person.name} person={person} />
          ))}
        </div>
      ) : (
        <div
          className="leadership-marquee-wrap relative mt-10 overflow-hidden lg:mt-12"
          role="region"
          aria-roledescription="carousel"
          aria-label="Leadership team slider"
        >
          <div className="leadership-marquee flex w-max">
            <LeaderTrack leaders={allLeaders} />
            <LeaderTrack leaders={allLeaders} ariaHidden />
          </div>
        </div>
      )}
    </section>
  );
}
