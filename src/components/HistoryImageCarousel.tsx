"use client";

import Image from "next/image";
import { useState } from "react";

type HistorySlide = {
  src: string;
  alt: string;
};

export function HistoryImageCarousel({ slides }: { slides: HistorySlide[] }) {
  const [index, setIndex] = useState(0);
  const current = slides[index];

  function goPrev() {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }

  function goNext() {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-utility-bg lg:aspect-auto lg:min-h-[480px]">
      <Image
        key={current.src}
        src={current.src}
        alt={current.alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 58vw"
        priority={index === 0}
      />

      <div className="absolute right-4 bottom-4 flex border border-gha-border bg-white">
        <button
          type="button"
          onClick={goPrev}
          className="flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:bg-utility-bg"
          aria-label="Previous image"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M10 3L5 8l5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={goNext}
          className="flex h-10 w-10 items-center justify-center border-l border-gha-border text-foreground transition-colors hover:bg-utility-bg"
          aria-label="Next image"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M6 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
