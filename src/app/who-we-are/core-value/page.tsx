import type { Metadata } from "next";
import Link from "next/link";
import { CoreValuesFlipGrid } from "@/components/CoreValuesFlipGrid";

export const metadata: Metadata = {
  title: "Core Values | Global Health Alliance",
  description:
    "Integrity, compassion, excellence, equity, and more—the values that guide Global Health Alliance’s work worldwide.",
};

export default function CoreValuesPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="bg-gha-surface">
        <div className="mx-auto max-w-[1100px] px-6 pt-14 pb-16 lg:px-8 lg:pt-20 lg:pb-20">
          <p className="text-sm font-semibold tracking-[0.14em] text-gha-secondary uppercase">
            Who We Are
          </p>
          <h1 className="type-h1 mt-3 max-w-2xl text-balance text-foreground">
            Core Values
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gha-muted">
            Hover or tap a card to reveal how each value guides our work.
          </p>

          <div className="mt-12">
            <CoreValuesFlipGrid />
          </div>

          <p className="mt-14">
            <Link
              href="/who-we-are/about"
              className="inline-flex items-center gap-1 text-[15px] font-bold text-gha-primary transition-all duration-300 hover:gap-2 hover:text-gha-primary-hover"
            >
              ← Back to Mission &amp; Vision
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
