"use client";

import { useState } from "react";

const values = [
  {
    title: "Integrity",
    body: "We uphold the highest standards of honesty, transparency, accountability, and ethical conduct in everything we do.",
    icon: "parallelogram",
  },
  {
    title: "Compassion",
    body: "We serve communities with empathy, dignity, respect, and a commitment to improving lives.",
    icon: "diamonds",
  },
  {
    title: "Excellence",
    body: "We strive for quality, professionalism, innovation, and continuous improvement in our programs and services.",
    icon: "plus",
  },
  {
    title: "Equity",
    body: "We believe everyone deserves equal access to quality healthcare regardless of gender, age, disability, socioeconomic status, or geographic location.",
    icon: "parallelogram",
  },
  {
    title: "Partnership",
    body: "We work collaboratively with governments, communities, healthcare institutions, donors, academia, and development partners to achieve shared goals.",
    icon: "diamonds",
  },
  {
    title: "Accountability",
    body: "We remain accountable to beneficiaries, donors, partners, staff, and stakeholders through responsible stewardship and measurable impact.",
    icon: "plus",
  },
  {
    title: "Innovation",
    body: "We embrace technology, research, and creative solutions to address evolving healthcare challenges.",
    icon: "parallelogram",
  },
  {
    title: "Respect",
    body: "We value diversity, inclusion, human rights, and cultural sensitivity while promoting teamwork and mutual respect.",
    icon: "diamonds",
  },
  {
    title: "Community Empowerment",
    body: "We place communities at the center of our interventions by strengthening local leadership, participation, and ownership.",
    icon: "plus",
  },
  {
    title: "Sustainability",
    body: "We invest in long-term solutions that strengthen institutions, build resilience, and create lasting impact.",
    icon: "parallelogram",
  },
] as const;

type IconKind = (typeof values)[number]["icon"];

function ValueIcon({
  kind,
  tone = "front",
}: {
  kind: IconKind;
  tone?: "front" | "back";
}) {
  const a =
    tone === "front"
      ? "fill-gha-secondary/55"
      : "fill-gha-primary/35";
  const b =
    tone === "front"
      ? "fill-gha-secondary/90"
      : "fill-gha-primary";

  if (kind === "parallelogram") {
    return (
      <svg width="56" height="44" viewBox="0 0 56 44" aria-hidden="true">
        <rect
          className={a}
          x="4"
          y="4"
          width="28"
          height="28"
          rx="4"
          transform="skewX(-18)"
        />
        <rect
          className={b}
          x="18"
          y="12"
          width="28"
          height="28"
          rx="4"
          transform="skewX(-18)"
        />
      </svg>
    );
  }

  if (kind === "diamonds") {
    return (
      <svg width="48" height="56" viewBox="0 0 48 56" aria-hidden="true">
        <rect
          className={a}
          x="14"
          y="2"
          width="20"
          height="20"
          rx="3"
          transform="rotate(45 24 12)"
        />
        <rect
          className={b}
          x="14"
          y="22"
          width="20"
          height="20"
          rx="3"
          transform="rotate(45 24 32)"
        />
      </svg>
    );
  }

  return (
    <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true">
      <rect className={a} x="18" y="4" width="12" height="40" rx="3" />
      <rect className={b} x="4" y="18" width="40" height="12" rx="3" />
    </svg>
  );
}

function FlipCard({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: IconKind;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      className="group relative h-[320px] w-full cursor-pointer text-left [perspective:1200px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gha-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      aria-pressed={flipped}
      aria-label={`${title}. ${flipped ? "Showing description" : "Show description"}`}
      onClick={() => setFlipped((v) => !v)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] motion-reduce:transition-none ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front — title */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-[1.75rem] bg-gha-primary-hover p-7 text-white shadow-sm [backface-visibility:hidden]">
          <ValueIcon kind={icon} tone="front" />
          <h2 className="text-[1.5rem] font-bold leading-tight tracking-tight text-white/95 sm:text-[1.65rem]">
            {title}
          </h2>
        </div>

        {/* Back — content */}
        <div className="absolute inset-0 flex flex-col rounded-[1.75rem] bg-[#eef3f9] p-7 shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <ValueIcon kind={icon} tone="back" />
          <p className="mt-8 text-[15px] font-medium leading-relaxed text-gha-primary">
            {body}
          </p>
        </div>
      </div>
    </button>
  );
}

export function CoreValuesFlipGrid() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {values.map((value) => (
        <li key={value.title}>
          <FlipCard
            title={value.title}
            body={value.body}
            icon={value.icon}
          />
        </li>
      ))}
    </ul>
  );
}
