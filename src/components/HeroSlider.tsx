"use client";

import { useCallback, useEffect, useState } from "react";

type Slide = {
  id: string;
  image: string;
  quote: string;
  attribution: string;
  imagePosition?: string;
};

const slides: Slide[] = [
  {
    id: "1",
    image: "/hero/hero-01.png",
    quote:
      "Partnerships built on trust open doors to better care for communities across Somalia and beyond.",
    attribution: "GLOBAL HEALTH ALLIANCE",
    imagePosition: "center 25%",
  },
  {
    id: "2",
    image: "/hero/hero-02.png",
    quote:
      "Training one healthcare worker can save thousands of lives. Capacity building is the most powerful investment we make.",
    attribution: "GHA TRAINING",
    imagePosition: "center 30%",
  },
  {
    id: "3",
    image: "/hero/hero-03.png",
    quote:
      "Every certificate represents new skills, stronger hospitals, and safer care for mothers and newborns.",
    attribution: "GHA GRADUATION",
    imagePosition: "center 35%",
  },
  {
    id: "4",
    image: "/hero/hero-04.png",
    quote:
      "Our dedicated team of healthcare professionals, educators, and community leaders drive lasting health impact.",
    attribution: "GHA LEADERSHIP",
    imagePosition: "center 30%",
  },
  {
    id: "5",
    image: "/hero/hero-05.png",
    quote:
      "When local voices lead the conversation, global health solutions become more equitable and lasting.",
    attribution: "GHA IN ACTION",
    imagePosition: "center 40%",
  },
  {
    id: "6",
    image: "/hero/hero-06.png",
    quote:
      "Strong health systems are built partnership by partnership—research, innovation, and local leadership together.",
    attribution: "GHA PARTNERSHIPS",
    imagePosition: "center 35%",
  },
  {
    id: "7",
    image: "/hero/hero-07.png",
    quote:
      "Global collaboration fuels our mission to expand access to quality healthcare where it is needed most.",
    attribution: "GLOBAL DONORS FORUM",
    imagePosition: "center 30%",
  },
  {
    id: "8",
    image: "/hero/hero-08.png",
    quote:
      "Essential newborn care training puts lifesaving skills in the hands of those who care for babies first.",
    attribution: "GHA ENC TRAINING",
    imagePosition: "center 40%",
  },
  {
    id: "9",
    image: "/hero/hero-09.png",
    quote:
      "Health is the foundation of dignity. When we strengthen care, we strengthen every community.",
    attribution: "GLOBAL HEALTH ALLIANCE",
    imagePosition: "center 20%",
  },
  {
    id: "10",
    image: "/hero/hero-10.png",
    quote:
      "Locally led initiatives in Somalia prove that lasting change begins with communities themselves.",
    attribution: "GHA SOMALIA",
    imagePosition: "center 20%",
  },
  {
    id: "11",
    image: "/hero/hero-11.png",
    quote:
      "Together with partners like Red Sea University, we build the healthcare workforce of tomorrow.",
    attribution: "GHA CAPACITY BUILDING",
    imagePosition: "center 35%",
  },
  {
    id: "12",
    image: "/hero/hero-12.png",
    quote:
      "Digital health tools put knowledge in the hands of those who need it most—at the bedside and in the field.",
    attribution: "GHA DIGITAL HEALTH",
    imagePosition: "center 35%",
  },
];

const AUTO_MS = 6500;

function QuoteIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden="true"
      className="text-white"
    >
      <rect
        x="1"
        y="1"
        width="42"
        height="42"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M14.5 28.5c0-5.2 2.4-8.6 6.2-10.4l-1.1-2.6C14.8 17.4 11 21.6 11 28.2v.8h7.2v-6.8H14.5v6.3zm12.2 0c0-5.2 2.4-8.6 6.2-10.4l-1.1-2.6c-4.8 1.9-8.6 6.1-8.6 12.7v.8h7.2v-6.8h-3.7v6.3z"
        fill="currentColor"
      />
    </svg>
  );
}

function DoubleChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="26"
      viewBox="0 0 22 26"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 4l8 8 8-8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12l8 8 8-8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => {
    goTo(index + 1);
  }, [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const slide = slides[index];

  return (
    <section
      className="relative h-[min(92vh,820px)] min-h-[520px] w-full overflow-hidden bg-[#1a1a1a]"
      aria-roledescription="carousel"
      aria-label="Featured quotes"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((item, i) => (
        <div
          key={item.id}
          className={`absolute inset-0 bg-cover transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${item.image}')`,
            backgroundPosition: item.imagePosition ?? "center center",
          }}
          aria-hidden={i !== index}
        />
      ))}

      {/* Right-side dark gradient like reference */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/80 via-black/55 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/20"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full">
        <div className="ml-auto flex h-full w-full max-w-[640px] flex-col justify-center px-6 py-16 sm:px-10 lg:mr-[8%] lg:max-w-[560px] lg:px-0 xl:mr-[10%]">
          <div
            key={slide.id}
            className="animate-[heroFade_0.6s_ease-out]"
          >
            <QuoteIcon />

            <blockquote className="mt-6">
              <p className="text-[1.65rem] font-bold leading-[1.25] tracking-tight text-white sm:text-[2rem] lg:text-[2.15rem] lg:leading-[1.28]">
                {slide.quote}
              </p>
              <footer className="mt-8">
                <cite className="not-italic text-[12px] font-semibold tracking-[0.08em] text-white uppercase sm:text-[13px]">
                  {slide.attribution}
                </cite>
                <span
                  className="mt-3 block h-px w-full max-w-[280px] bg-white/90"
                  aria-hidden="true"
                />
              </footer>
            </blockquote>
          </div>

          <div className="mt-auto flex flex-col items-end gap-5 pt-12">
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("content-below-hero")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white/90 transition-opacity hover:opacity-70"
              aria-label="Scroll down"
            >
              <DoubleChevronDown />
            </button>

            <div className="w-full">
              <div className="mb-3 h-px w-full bg-white/70" aria-hidden="true" />
              <div
                className="flex items-center gap-1.5"
                role="tablist"
                aria-label="Slide indicators"
              >
                {slides.map((item, i) => {
                  const isActive = i === index;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => goTo(i)}
                      className={`h-[5px] flex-1 rounded-[1px] transition-colors ${
                        isActive
                          ? "bg-[#4DB6AC]"
                          : "bg-white hover:bg-white/80"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Screen-reader live region */}
      <div className="sr-only" aria-live="polite">
        Slide {index + 1} of {slides.length}: {slide.quote}
      </div>

      {/* Hidden next control for keyboard users */}
      <button
        type="button"
        className="sr-only"
        onClick={next}
      >
        Next slide
      </button>
    </section>
  );
}
