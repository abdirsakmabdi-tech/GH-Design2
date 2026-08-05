"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { featuredHomepagePrograms } from "@/data/focus-areas";

const ACCENT_COLORS = [
  "#59C2E2",
  "#6BC9A8",
  "#A78BFA",
  "#E8B84A",
] as const;

const PROGRAM_LABEL = "Community & clinical programs";

type CardState = "equal" | "expanded" | "collapsed";

function getCardState(activeIndex: number | null, index: number): CardState {
  if (activeIndex === null) return "equal";
  if (activeIndex === index) return "expanded";
  return "collapsed";
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
      className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
        disabled
          ? "cursor-not-allowed border-gha-border/60 text-gha-muted/40"
          : direction === "next"
            ? "border-gha-primary bg-gha-primary text-white hover:bg-gha-primary-hover active:bg-gha-primary-hover"
            : "border-gha-border bg-white text-foreground hover:border-gha-primary hover:bg-gha-primary hover:text-white active:border-gha-primary-hover active:bg-gha-primary-hover"
      }`}
      aria-label={direction === "prev" ? "Previous program" : "Next program"}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d={direction === "prev" ? "M10 3L5 8l5 5" : "M6 3l5 5-5 5"}
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function MobileProgramCard({
  area,
  accentColor,
}: {
  area: (typeof featuredHomepagePrograms)[number];
  accentColor: string;
}) {
  return (
    <article className="relative h-[420px] overflow-hidden rounded-2xl bg-neutral-900 sm:h-[460px]">
      <Image
        src={area.image.src}
        alt={area.image.alt}
        fill
        className="object-cover"
        sizes="(max-width: 1023px) calc(100vw - 3rem), 100vw"
        priority
      />

      <span
        className="absolute top-5 left-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/20 backdrop-blur-sm"
        aria-hidden="true"
      >
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: accentColor }}
        />
      </span>

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start p-5 sm:p-6">
        <h3 className="text-xl leading-snug font-semibold tracking-tight text-white">
          {area.title}
        </h3>
        <p className="mt-2 text-sm text-white/75">{PROGRAM_LABEL}</p>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/90">
          {area.summary}
        </p>
        <Link
          href={`/what-we-do/${area.slug}`}
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#8fe8b8] px-6 py-3 text-xs font-bold tracking-[0.06em] text-[#0f2419] uppercase transition-colors hover:bg-[#a2f0c8]"
        >
          Learn more
        </Link>
      </div>
    </article>
  );
}

function ProgramImageCard({
  area,
  accentColor,
  cardState,
  onActivate,
}: {
  area: (typeof featuredHomepagePrograms)[number];
  accentColor: string;
  cardState: CardState;
  onActivate: () => void;
}) {
  const isExpanded = cardState === "expanded";
  const isCollapsed = cardState === "collapsed";

  return (
    <article
      className={`relative hidden h-[460px] cursor-pointer overflow-hidden rounded-2xl bg-neutral-900 transition-[flex-grow,flex-basis] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:block ${
        isExpanded
          ? "min-w-0 flex-[5.5] basis-0"
          : isCollapsed
            ? "min-w-[88px] flex-[0.65] basis-[88px]"
            : "min-w-0 flex-1 basis-0"
      }`}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
    >
      <Image
        src={area.image.src}
        alt={area.image.alt}
        fill
        className={`object-cover transition-transform duration-700 ease-out ${
          isExpanded ? "scale-100" : isCollapsed ? "scale-110" : "scale-100"
        }`}
        sizes="(max-width: 1024px) 25vw, 300px"
        priority={isExpanded}
      />

      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
          isExpanded
            ? "bg-gradient-to-t from-black/90 via-black/45 to-black/15"
            : "bg-gradient-to-t from-black/85 via-black/40 to-black/10"
        }`}
        aria-hidden="true"
      />

      <span
        className="absolute top-5 left-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/20 backdrop-blur-sm"
        aria-hidden="true"
      >
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: accentColor }}
        />
      </span>

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start p-5 lg:p-7">
        <h3
          className={`font-semibold tracking-tight text-white transition-all duration-700 ${
            isExpanded
              ? "text-xl leading-snug lg:text-[1.65rem] lg:leading-[1.2]"
              : isCollapsed
                ? "text-sm leading-tight"
                : "text-lg leading-snug lg:leading-[1.25]"
          }`}
        >
          {area.title}
        </h3>

        <p
          className={`text-white/75 transition-all duration-700 ${
            isExpanded
              ? "mt-2 max-h-20 text-sm opacity-100"
              : isCollapsed
                ? "mt-1.5 max-h-16 overflow-hidden text-xs leading-snug opacity-90"
                : "mt-2 max-h-20 text-sm leading-snug opacity-90"
          }`}
        >
          {PROGRAM_LABEL}
        </p>

        <p
          className={`max-w-lg text-sm leading-relaxed text-white/90 transition-all duration-700 lg:text-[0.95rem] lg:leading-relaxed ${
            isExpanded
              ? "mt-4 max-h-40 translate-y-0 opacity-100"
              : "mt-0 max-h-0 translate-y-3 overflow-hidden opacity-0"
          }`}
        >
          {area.summary}
        </p>

        <Link
          href={`/what-we-do/${area.slug}`}
          className={`mt-6 inline-flex items-center justify-center rounded-lg bg-[#8fe8b8] px-6 py-3 text-xs font-bold tracking-[0.06em] text-[#0f2419] uppercase transition-all duration-700 hover:bg-[#a2f0c8] ${
            isExpanded
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }`}
          tabIndex={isExpanded ? 0 : -1}
        >
          Learn more
        </Link>
      </div>
    </article>
  );
}

export function ProgramsImageRow() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const mobileArea = featuredHomepagePrograms[mobileIndex];
  const lastMobileIndex = featuredHomepagePrograms.length - 1;

  return (
    <section
      className="bg-background py-16 lg:py-20"
      aria-labelledby="programs-image-row-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 gap-y-5">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.08em] text-gha-muted uppercase">
              What we do
            </p>
            <h2
              id="programs-image-row-heading"
              className="type-h2 mt-2 text-foreground"
            >
              Our programs
            </h2>
          </div>

          <Link
            href="/what-we-do"
            className="ml-auto inline-flex shrink-0 items-center gap-5 rounded-xl border border-gha-border bg-white px-5 py-3.5 text-foreground transition-colors hover:border-gha-primary hover:bg-gha-primary hover:text-white active:border-gha-primary-hover active:bg-gha-primary-hover sm:gap-6 sm:px-6 sm:py-4"
          >
            <span className="type-button tracking-[0.14em]">
              Explore focus areas
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

        {/* Mobile slider */}
        <div className="mt-10 lg:hidden">
          <MobileProgramCard
            key={mobileArea.slug}
            area={mobileArea}
            accentColor={ACCENT_COLORS[mobileIndex % ACCENT_COLORS.length]}
          />

          <div className="mt-5 flex items-center justify-end gap-3">
            <SliderArrow
              direction="prev"
              disabled={mobileIndex === 0}
              onClick={() => setMobileIndex((index) => Math.max(0, index - 1))}
            />
            <SliderArrow
              direction="next"
              disabled={mobileIndex === lastMobileIndex}
              onClick={() =>
                setMobileIndex((index) => Math.min(lastMobileIndex, index + 1))
              }
            />
          </div>
        </div>

        {/* Desktop accordion */}
        <div
          className="mt-12 hidden gap-3 lg:flex"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {featuredHomepagePrograms.map((area, index) => (
            <ProgramImageCard
              key={area.slug}
              area={area}
              accentColor={ACCENT_COLORS[index % ACCENT_COLORS.length]}
              cardState={getCardState(activeIndex, index)}
              onActivate={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
