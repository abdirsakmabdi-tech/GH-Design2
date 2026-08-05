"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type MouseEvent } from "react";

const countries = [
  {
    id: "usa",
    name: "United States",
    href: "/gha-in-action/usa",
    image: "/who-we-are/history/uofm-training.png",
    imageAlt:
      "GHA training participants at the University of Minnesota in the USA",
  },
  {
    id: "somalia",
    name: "Somalia",
    href: "/gha-in-action/somalia",
    image: "/who-we-are/history/galkacyo-hospital.png",
    imageAlt:
      "Medical equipment installation at Galkacyo General Hospital in Somalia",
  },
] as const;

const ARROW_NUDGE = 4;

function CountryCard({
  country,
}: {
  country: (typeof countries)[number];
}) {
  const mediaRef = useRef<HTMLDivElement>(null);
  const [nudge, setNudge] = useState({ x: 0, y: 0, angle: 0 });
  const [hovered, setHovered] = useState(false);

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const media = mediaRef.current;
    if (!media) return;
    const rect = media.getBoundingClientRect();

    // Circle stays bottom-right; rotate + nudge arrow toward cursor
    const circleX = rect.width - 8 - 18;
    const circleY = rect.height - 8 - 18;
    const dx = event.clientX - rect.left - circleX;
    const dy = event.clientY - rect.top - circleY;
    const length = Math.hypot(dx, dy) || 1;

    // Arrow path points right (0°); rotate to face cursor
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

    setNudge({
      x: (dx / length) * ARROW_NUDGE,
      y: (dy / length) * ARROW_NUDGE,
      angle,
    });
  }

  function handleLeave() {
    setHovered(false);
    setNudge({ x: 0, y: 0, angle: 0 });
  }

  return (
    <Link
      href={country.href}
      aria-label={`Explore our work in ${country.name}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-[#f4efe6] p-3 text-left transition-transform duration-300 hover:-translate-y-0.5 sm:p-3.5"
    >
      <h3 className="text-base font-bold tracking-tight text-[#1e345f] sm:text-lg">
        {country.name}
      </h3>

      <div
        ref={mediaRef}
        className="relative mt-2.5 aspect-[16/9] w-full overflow-hidden rounded-lg bg-gha-border/40"
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <Image
          src={country.image}
          alt={country.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, 260px"
        />

        <span
          className={`absolute right-2 bottom-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gha-secondary text-gha-secondary-fg shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-gha-secondary-hover group-hover:shadow-md ${
            hovered ? "scale-110 bg-gha-secondary-hover shadow-md" : ""
          }`}
          aria-hidden="true"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 18 18"
            fill="none"
            className="transition-transform duration-150 ease-out"
            style={{
              transform: `translate(${nudge.x}px, ${nudge.y}px) rotate(${nudge.angle}deg)`,
            }}
          >
            <path
              d="M4 9h10M10 5l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export function CountriesWeWorkIn() {
  return (
    <section
      className="bg-[#1e345f] py-14 text-white lg:py-20"
      aria-labelledby="countries-we-work-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 text-center lg:px-8">
        <h2 id="countries-we-work-heading" className="type-h2 text-white">
          Countries we work in
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-white/80 sm:text-lg">
          Global Health Alliance works across Minnesota and Somalia—building
          culturally responsive care, training clinicians, and strengthening
          health systems where they are needed most.
        </p>
        <Link
          href="/gha-in-action/countries"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#e8b84a] transition-colors hover:text-[#f0c65c]"
        >
          View all countries
          <svg
            width="14"
            height="14"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 9h10M10 5l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <ul className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-10">
          {countries.map((country) => (
            <li key={country.id}>
              <CountryCard country={country} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
