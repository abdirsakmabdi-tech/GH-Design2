"use client";

import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export type HistoryScrollImage = {
  src: string;
  alt: string;
};

export type HistoryScrollStat = {
  value: string;
  label: string;
};

type HistoryScrollSectionProps = {
  images: HistoryScrollImage[];
  stats: HistoryScrollStat[];
  headline?: string;
};

export function HistoryScrollSection({
  images,
  stats,
  headline = "Building resilient healthcare systems that last",
}: HistoryScrollSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [baseIndex, setBaseIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [wipeFraction, setWipeFraction] = useState(0);

  const maxProgress = Math.max(images.length - 1, 0);
  const scrollHeight = `${images.length * 100}vh`;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const imageProgress = useTransform(scrollYProgress, [0, 1], [0, maxProgress]);

  useMotionValueEvent(imageProgress, "change", (latest) => {
    const progress = Math.max(0, Math.min(latest, maxProgress));
    const base = Math.floor(progress);
    const next = Math.min(base + 1, maxProgress);
    const fraction = progress - base;

    setBaseIndex(base);
    setNextIndex(next);
    setWipeFraction(fraction);
  });

  const baseImage = images[baseIndex];
  const nextImage = images[nextIndex];
  const isWiping = wipeFraction > 0 && baseIndex !== nextIndex;

  return (
    <section
      ref={sectionRef}
      className="relative bg-neutral-950"
      style={{ height: scrollHeight }}
      aria-labelledby="history-impact-heading"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Full-bleed background images */}
        <div className="absolute inset-0">
          {baseImage && (
            <Image
              key={baseImage.src}
              src={baseImage.src}
              alt={baseImage.alt}
              fill
              priority={baseIndex === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          )}

          {isWiping && nextImage && (
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(${(1 - wipeFraction) * 100}% 0 0 0)` }}
            >
              <Image
                key={nextImage.src}
                src={nextImage.src}
                alt={nextImage.alt}
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          )}

          {/* Dark overlays for stronger content contrast */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/55"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/20"
            aria-hidden="true"
          />
        </div>

        {/* Overlaid content */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] flex-col justify-end px-6 pb-16 pt-28 sm:pb-20 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:px-8 lg:pb-24 lg:pt-32">
          <h2
            id="history-impact-heading"
            className="type-h2 max-w-xl text-balance text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]"
          >
            {headline}
          </h2>

          <div className="mt-10 w-full max-w-md lg:mt-0 lg:max-w-lg">
            <div className="border-t border-white/70 pt-4">
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-[11px] font-medium tracking-[0.06em] text-white/90 sm:text-xs [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]">
                      {stat.label}
                    </p>
                    <p className="type-h2 mt-2 text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
