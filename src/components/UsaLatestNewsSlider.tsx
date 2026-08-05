"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { formatNewsDisplayDate } from "@/data/news-events";

const usaLatestItems = [
  {
    id: "usa-latest-1",
    type: "Event",
    date: "14.07.2026",
    location: "Minnesota",
    title: "Join us August 15 for the Maternal & Family Health Equity Collaborative",
    excerpt:
      "Partners, clinicians, and families gather to advance culturally competent maternal care pathways for immigrant communities across Minnesota.",
    href: "https://www.gha21.org/",
    image: "/focus-areas/community-education.png",
    imageAlt: "Community health education gathering in Minnesota",
  },
  {
    id: "usa-latest-2",
    type: "Story",
    date: "25.02.2026",
    location: "Minnesota",
    title: "Najma Ali Ahmed – Feedback on the 3-Day ENC Training",
    excerpt:
      "A participant reflects on Essential Newborn Care training and how practical bedside skills translate into safer care for mothers and babies.",
    href: "https://www.gha21.org/",
    image: "/focus-areas/newborn-care.png",
    imageAlt: "Newborn care training and community support",
  },
  {
    id: "usa-latest-3",
    type: "Update",
    date: "22.02.2026",
    location: "USA",
    title: "2025 Trainings Recap",
    excerpt:
      "A look back at a year of GHA trainings—building clinical capacity, mentoring future clinicians, and strengthening maternal and newborn outcomes.",
    href: "https://www.gha21.org/",
    image: "/focus-areas/training.png",
    imageAlt: "Healthcare training graduates with Global Health Alliance",
  },
  {
    id: "usa-latest-4",
    type: "Event",
    date: "18.07.2026",
    location: "Minnesota",
    title: "Community health outreach in Minneapolis",
    excerpt:
      "Connecting families with screenings, education, and culturally responsive resources on maternal and child health in the Twin Cities.",
    href: "/latest/events/minneapolis-outreach",
    image: "/focus-areas/maternal-child-health.png",
    imageAlt: "Maternal and child health outreach in the community",
  },
] as const;

export const somaliaLatestItems = [
  {
    id: "somalia-latest-1",
    type: "Press",
    date: "15.06.2026",
    location: "Somalia",
    title: "Hospital equipment handover in Galkacyo",
    excerpt:
      "GHA and partners marked the delivery of essential medical equipment to Galkacyo General Hospital, strengthening emergency and newborn care capacity.",
    href: "/latest/events/galkacyo-handover",
    image: "/who-we-are/history/galkacyo-hospital.png",
    imageAlt: "Medical equipment installation at Galkacyo General Hospital",
  },
  {
    id: "somalia-latest-2",
    type: "Update",
    date: "12.06.2026",
    location: "Somalia",
    title: "Newborn care training expands across partner hospitals",
    excerpt:
      "Competency-based newborn care training is strengthening clinical teams to deliver lifesaving care in the first 28 days of life.",
    href: "/latest/news/newborn-care-kenya",
    image: "/focus-areas/newborn-care.png",
    imageAlt: "Newborn care training with partner hospitals",
  },
  {
    id: "somalia-latest-3",
    type: "Partnership",
    date: "09.05.2026",
    location: "Somalia",
    title: "Digital health tools reach frontline clinicians",
    excerpt:
      "Through DynaMed and Dynamic Health partnerships, GHA is equipping healthcare workers with evidence-based decision support at the point of care.",
    href: "/latest/news/digital-health-tools",
    image: "/focus-areas/digital-health.png",
    imageAlt: "Healthcare workers using digital health tools",
  },
  {
    id: "somalia-latest-4",
    type: "Story",
    date: "03.04.2026",
    location: "Somalia",
    title: "Locally led initiatives strengthen oxygen therapy",
    excerpt:
      "Community-led programmes are expanding respiratory care capacity and training so hospitals can deliver reliable oxygen therapy where it is needed most.",
    href: "/latest/stories/oxygen-therapy-somalia",
    image: "/focus-areas/respiratory-care.png",
    imageAlt: "Respiratory care and oxygen therapy support",
  },
] as const;

export type CountryLatestItem =
  | (typeof usaLatestItems)[number]
  | (typeof somaliaLatestItems)[number];


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
      aria-label={direction === "prev" ? "Previous stories" : "Next stories"}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e07a2f] text-white transition-opacity hover:bg-[#d06c24] disabled:cursor-not-allowed disabled:opacity-35 sm:h-11 sm:w-11"
    >
      <svg
        width="16"
        height="16"
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

function UsaNewsCard({
  item,
}: {
  item: CountryLatestItem;
}) {
  return (
    <article className="flex h-full min-w-0 overflow-hidden bg-[#ebe4d8]">
      <Link
        href={item.href}
        className="relative hidden w-[40%] shrink-0 self-stretch overflow-hidden sm:block"
        {...(item.href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover transition-transform duration-700 hover:scale-[1.03]"
          sizes="(max-width: 1024px) 35vw, 240px"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col justify-center p-5 sm:p-6 lg:px-7 lg:py-8">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[12px] text-[#1a2f5c]/70">
          <p>
            <span>{item.type}</span>
            <span aria-hidden="true"> · </span>
            <time dateTime={item.date.split(".").reverse().join("-")}>
              {formatNewsDisplayDate(item.date)}
            </time>
          </p>
          <span className="inline-flex items-center gap-1.5">
            <LocationPin />
            {item.location}
          </span>
        </div>

        <Link
          href={item.href}
          className="relative mt-4 block aspect-[16/10] overflow-hidden sm:hidden"
          {...(item.href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 639px) calc(100vw - 3rem), 0px"
          />
        </Link>

        <h3 className="mt-4 text-lg font-bold leading-snug tracking-tight text-[#1a2f5c] sm:mt-5 sm:text-xl lg:text-[1.35rem] lg:leading-[1.25]">
          <Link
            href={item.href}
            className="transition-colors hover:text-gha-primary"
            {...(item.href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {item.title}
          </Link>
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#1a2f5c]/80 sm:text-[15px]">
          {item.excerpt}
        </p>
      </div>
    </article>
  );
}

export function UsaLatestNewsSlider({
  title = "The latest from the USA",
  items = usaLatestItems,
}: {
  title?: string;
  items?: readonly CountryLatestItem[];
} = {}) {
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
    const amount = Math.min(el.clientWidth * 0.85, 540);
    el.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="overflow-hidden bg-[#f4efe6] py-14 lg:py-16">
      <div className="mx-auto max-w-[1100px] px-6 text-center lg:px-8">
        <h3 className="type-h2 text-[#1a2f5c]">{title}</h3>
      </div>

      <div className="relative mt-10 lg:mt-12">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[#f4efe6] to-transparent sm:w-10 lg:w-14"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[#f4efe6] to-transparent sm:w-10 lg:w-14"
          aria-hidden="true"
        />

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-[max(1.5rem,calc((100vw-1100px)/2+1.5rem))] pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="w-[min(100%,500px)] shrink-0 snap-center sm:w-[min(80vw,520px)] lg:w-[min(46vw,520px)]"
            >
              <UsaNewsCard item={item} />
            </div>
          ))}
        </div>

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
      </div>
    </div>
  );
}
