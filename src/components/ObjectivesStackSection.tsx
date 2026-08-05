"use client";

import {
  easeOut,
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { featuredHomepageObjectives } from "@/data/objectives";

const STAGE_TOP = "5rem";
const CARD_ENTER_OFFSET = "108%";
const SCROLL_PER_TRANSITION_VH = 65;
const TRANSITION_ACTIVE_RATIO = 0.5;

const OBJECTIVE_CARD_STYLES = [
  {
    bg: "bg-gha-secondary",
    text: "text-neutral-950",
    muted: "text-neutral-800",
  },
  {
    bg: "bg-[#b8e8f4]",
    text: "text-neutral-950",
    muted: "text-neutral-700",
  },
  {
    bg: "bg-white",
    text: "text-neutral-950",
    muted: "text-neutral-600",
  },
  {
    bg: "bg-gha-primary",
    text: "text-white",
    muted: "text-white/80",
  },
  {
    bg: "bg-[#e8f7fc]",
    text: "text-neutral-950",
    muted: "text-neutral-700",
  },
] as const;

function formatObjectiveLabel(index: number) {
  return `OBJECTIVE ${String(index + 1).padStart(2, "0")}`;
}

function CardLines() {
  return (
    <div className="mt-2.5 flex flex-col gap-1 opacity-70" aria-hidden="true">
      <span className="h-px w-5 bg-current" />
      <span className="h-px w-3.5 bg-current" />
      <span className="h-px w-4 bg-current" />
    </div>
  );
}

function IntroCard() {
  return (
    <article className="relative flex h-full min-h-0 flex-col rounded-2xl border border-white/20 bg-neutral-950 p-5 lg:rounded-[1.25rem] lg:p-6">
      <div
        className="h-7 w-7 shrink-0 rounded-full border border-white/35"
        aria-hidden="true"
      />

      <div className="flex flex-1 flex-col items-center justify-center py-4 text-center">
        <p className="text-[9px] font-semibold tracking-[0.18em] text-white/50 uppercase">
          Who we are
        </p>
        <h2
          id="objectives-stack-heading"
          className="type-h3 mt-2.5 text-balance text-white"
        >
          Organizational objectives
        </h2>
        <p className="type-small mt-3 text-white/55">
          Five priorities that guide how we strengthen systems, expand access,
          and build lasting health impact.
        </p>
      </div>
    </article>
  );
}

type ObjectiveCardProps = {
  index: number;
  title: string;
  body: string;
};

function ObjectiveCard({ index, title, body }: ObjectiveCardProps) {
  const style = OBJECTIVE_CARD_STYLES[index % OBJECTIVE_CARD_STYLES.length];

  return (
    <article
      className={`flex h-full min-h-0 flex-col rounded-2xl p-5 lg:rounded-[1.25rem] lg:p-6 ${style.bg} ${style.text}`}
    >
      <div className="shrink-0">
        <p className="text-[9px] font-semibold tracking-[0.18em] uppercase opacity-80">
          {formatObjectiveLabel(index)}
        </p>
        <CardLines />
        <h3 className="mt-4 text-lg font-bold tracking-tight text-balance lg:mt-5 lg:text-xl lg:leading-snug">
          {title}
        </h3>
      </div>

      <p className={`mt-2 max-w-[18rem] text-xs leading-relaxed lg:mt-2.5 lg:max-w-[22rem] lg:text-sm ${style.muted}`}>
        {body}
      </p>
    </article>
  );
}

function ViewAllCard() {
  return (
    <article className="relative flex h-full min-h-0 flex-col items-center justify-center rounded-2xl border border-white/20 bg-neutral-950 p-5 lg:rounded-[1.25rem] lg:p-6">
      <p className="text-[9px] font-semibold tracking-[0.18em] text-white/50 uppercase">
        Explore more
      </p>
      <Link
        href="/who-we-are/objective"
        className="mt-5 inline-flex h-9 items-center rounded-full bg-gha-secondary px-6 text-[11px] font-bold tracking-wide text-neutral-950 uppercase transition-colors hover:bg-[#a5dfe9]"
      >
        View all objectives
      </Link>
    </article>
  );
}

type AnimatedCardLayerProps = {
  index: number;
  transitionCount: number;
  scrollYProgress: MotionValue<number>;
  children: ReactNode;
};

function AnimatedCardLayer({
  index,
  transitionCount,
  scrollYProgress,
  children,
}: AnimatedCardLayerProps) {
  const segmentStart = (index - 1) / transitionCount;
  const segmentEnd = index / transitionCount;
  const animateEnd =
    segmentStart + (segmentEnd - segmentStart) * TRANSITION_ACTIVE_RATIO;

  const x = useTransform(
    scrollYProgress,
    index === 0 ? [0, 1] : [segmentStart, animateEnd],
    index === 0 ? ["0%", "0%"] : [CARD_ENTER_OFFSET, "0%"],
    index === 0 ? { clamp: true } : { clamp: true, ease: easeOut },
  );

  return (
    <motion.div
      className="absolute inset-0 transform-gpu will-change-transform"
      style={{ zIndex: index + 1, x }}
    >
      {children}
    </motion.div>
  );
}

function StaticObjectivesList() {
  return (
    <section
      className="relative bg-neutral-950 px-6 py-16 text-white lg:px-8 lg:py-20"
      aria-labelledby="objectives-stack-heading"
    >
      <div className="mx-auto max-w-[400px] space-y-4 lg:max-w-[480px]">
        <IntroCard />
        {featuredHomepageObjectives.map((item, index) => (
          <ObjectiveCard
            key={item.title}
            index={index}
            title={item.title}
            body={item.body}
          />
        ))}
        <ViewAllCard />
      </div>
    </section>
  );
}

function AnimatedObjectivesStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const totalCards = 1 + featuredHomepageObjectives.length + 1;
  const transitionCount = totalCards - 1;
  const scrollHeight = `${transitionCount * SCROLL_PER_TRANSITION_VH}vh`;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-neutral-950 pb-20 text-white lg:pb-24"
      style={{ height: scrollHeight }}
      aria-labelledby="objectives-stack-heading"
    >
      <div
        className="sticky flex h-[calc(100dvh-5rem)] items-center justify-center px-4"
        style={{ top: STAGE_TOP }}
      >
        <div className="relative flex w-full max-w-[420px] items-center justify-center py-16 lg:max-w-[480px] lg:py-24">
          <div className="relative h-[min(46vh,400px)] min-h-[320px] w-full lg:h-[min(42vh,400px)] lg:min-h-[340px]">
            <div className="absolute inset-3 overflow-hidden sm:inset-4 lg:inset-6">
              <AnimatedCardLayer
                index={0}
                transitionCount={transitionCount}
                scrollYProgress={scrollYProgress}
              >
                <IntroCard />
              </AnimatedCardLayer>

              {featuredHomepageObjectives.map((item, index) => (
                <AnimatedCardLayer
                  key={item.title}
                  index={index + 1}
                  transitionCount={transitionCount}
                  scrollYProgress={scrollYProgress}
                >
                  <ObjectiveCard
                    index={index}
                    title={item.title}
                    body={item.body}
                  />
                </AnimatedCardLayer>
              ))}

              <AnimatedCardLayer
                index={totalCards - 1}
                transitionCount={transitionCount}
                scrollYProgress={scrollYProgress}
              >
                <ViewAllCard />
              </AnimatedCardLayer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ObjectivesStackSection() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  if (prefersReducedMotion) {
    return <StaticObjectivesList />;
  }

  return <AnimatedObjectivesStack />;
}
