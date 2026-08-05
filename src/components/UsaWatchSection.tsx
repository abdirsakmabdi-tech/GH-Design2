"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const usaVideos = [
  {
    id: "vid-1",
    title: "Hooyo perinatal navigation — supporting mothers",
    image: "/focus-areas/maternal-child-health.png",
    href: "https://www.gha21.org/",
  },
  {
    id: "vid-2",
    title: "Community health education in the Twin Cities",
    image: "/focus-areas/community-education.png",
    href: "https://www.gha21.org/",
  },
  {
    id: "vid-3",
    title: "Healthcare worker training graduation",
    image: "/who-we-are/history/uofm-training.png",
    href: "https://www.gha21.org/",
  },
  {
    id: "vid-4",
    title: "ENC training highlights — Day 2",
    image: "/focus-areas/newborn-care.png",
    href: "https://www.gha21.org/",
  },
  {
    id: "vid-5",
    title: "Digital health tools for frontline clinicians",
    image: "/focus-areas/digital-health.png",
    href: "https://www.gha21.org/",
  },
  {
    id: "vid-6",
    title: "Moments that matter — GHA in action",
    image: "/who-we-are/gha-team.png",
    href: "https://www.gha21.org/",
  },
] as const;

export const somaliaVideos = [
  {
    id: "somalia-vid-1",
    title: "Galkacyo hospital equipment handover",
    image: "/who-we-are/history/galkacyo-hospital.png",
    href: "https://www.gha21.org/",
  },
  {
    id: "somalia-vid-2",
    title: "Newborn care training with partner hospitals",
    image: "/focus-areas/newborn-care.png",
    href: "https://www.gha21.org/",
  },
  {
    id: "somalia-vid-3",
    title: "Respiratory care & oxygen therapy in Somalia",
    image: "/focus-areas/respiratory-care.png",
    href: "https://www.gha21.org/",
  },
  {
    id: "somalia-vid-4",
    title: "Medical equipment & hospital support",
    image: "/focus-areas/medical-equipment.png",
    href: "https://www.gha21.org/",
  },
  {
    id: "somalia-vid-5",
    title: "Healthcare worker capacity building",
    image: "/focus-areas/training.png",
    href: "https://www.gha21.org/",
  },
  {
    id: "somalia-vid-6",
    title: "Partnerships advancing care in Somalia",
    image: "/who-we-are/history/panel-discussion.png",
    href: "https://www.gha21.org/",
  },
] as const;

export type CountryWatchVideo =
  | (typeof usaVideos)[number]
  | (typeof somaliaVideos)[number];


function LeafPlayIcon() {
  return (
    <span
      className="relative flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16"
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" className="absolute inset-0 h-full w-full">
        <path
          d="M32 4C18 10 8 24 10 38c2 12 12 20 22 22 10-2 20-10 22-22 2-14-8-28-22-34z"
          fill="#3d8f5f"
        />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className="relative z-10 ml-0.5 h-5 w-5 text-white sm:h-6 sm:w-6"
        fill="currentColor"
      >
        <path d="M8 5.14v13.72L19 12 8 5.14z" />
      </svg>
    </span>
  );
}

function WavyGoldFrame() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M3 8 C8 3, 18 2, 28 4 C40 6, 48 1, 58 3 C72 5, 82 2, 92 6 C96 8, 98 14, 97 22 C96 36, 99 48, 97 62 C95 78, 98 88, 94 94 C88 99, 72 97, 58 96 C44 95, 32 99, 20 96 C10 94, 4 88, 3 78 C2 62, 1 48, 3 34 C4 22, 1 14, 3 8 Z"
        fill="none"
        stroke="#e8b84a"
        strokeWidth="1.6"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function NavArrow({
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
      aria-label={direction === "prev" ? "Previous videos" : "Next videos"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 text-white transition-opacity hover:border-white hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
        className={direction === "prev" ? "rotate-180" : undefined}
      >
        <path
          d="M6.5 3.5L12 9l-5.5 5.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export function UsaWatchSection({
  headingId = "usa-watch-heading",
  videos = usaVideos,
}: {
  headingId?: string;
  videos?: readonly CountryWatchVideo[];
} = {}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const ratio = max > 0 ? el.scrollLeft / max : 0;
    setProgress(Math.min(1, Math.max(0, ratio)));
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByCard = (direction: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.7, 420);
    el.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="overflow-hidden bg-[#1e345f] py-14 text-white lg:py-16"
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-[1100px] px-6 text-center lg:px-8">
        <h3 id={headingId} className="type-h2">
          Watch
        </h3>
      </div>

      <div className="relative mt-10 lg:mt-12">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-[max(1.5rem,calc((100vw-1100px)/2+1.5rem))] pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 lg:gap-7 [&::-webkit-scrollbar]:hidden"
        >
          {videos.map((video) => (
            <Link
              key={video.id}
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-[min(78vw,340px)] shrink-0 snap-center overflow-hidden sm:w-[300px] lg:w-[320px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={video.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="340px"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
                  aria-hidden="true"
                />
                <WavyGoldFrame />

                <span className="absolute inset-0 flex items-center justify-center">
                  <LeafPlayIcon />
                </span>

                <p className="absolute right-4 bottom-4 left-4 text-left text-[15px] leading-snug font-semibold text-balance text-white sm:text-base">
                  {video.title}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-[1100px] items-center gap-5 px-6 lg:mt-10 lg:px-8">
          <div
            className="relative h-px flex-1 bg-white/25"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
            aria-label="Watch carousel progress"
          >
            <div
              className="absolute top-0 left-0 h-full bg-[#e8b84a] transition-[width] duration-200"
              style={{ width: `${Math.max(12, progress * 100)}%` }}
            />
          </div>
          <div className="flex shrink-0 gap-2.5">
            <NavArrow
              direction="prev"
              onClick={() => scrollByCard("prev")}
              disabled={!canPrev}
            />
            <NavArrow
              direction="next"
              onClick={() => scrollByCard("next")}
              disabled={!canNext}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
