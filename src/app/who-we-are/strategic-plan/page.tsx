import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Strategic Plan | Global Health Alliance",
  description:
    "GHA’s strategic vision, mission, and priorities for strengthening health systems and improving community health outcomes.",
};

const priorities = [
  {
    priority: "Health Systems Strengthening",
    outcome: "Improved governance, infrastructure, and service quality",
  },
  {
    priority: "Maternal, Newborn & Child Health",
    outcome: "Reduced preventable maternal and child mortality",
  },
  {
    priority: "Health Workforce Development",
    outcome: "Skilled and competent healthcare workforce",
  },
  {
    priority: "Disease Prevention & Community Health",
    outcome: "Healthier, more resilient communities",
  },
  {
    priority: "Humanitarian & Emergency Response",
    outcome: "Timely and effective emergency health interventions",
  },
  {
    priority: "Research & Digital Health",
    outcome: "Improved decision-making through innovation and data",
  },
  {
    priority: "Partnerships & Advocacy",
    outcome: "Strong collaborations and supportive health policies",
  },
  {
    priority: "Organizational Sustainability",
    outcome:
      "Robust governance, financial sustainability, and institutional growth",
  },
] as const;

export default function StrategicPlanPage() {
  return (
    <main className="bg-background text-foreground">
      <header className="relative overflow-hidden border-b border-gha-border bg-gha-surface">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 8% 0%, color-mix(in srgb, var(--gha-secondary) 16%, transparent), transparent 58%), radial-gradient(ellipse 45% 55% at 100% 15%, color-mix(in srgb, var(--gha-primary) 10%, transparent), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-[1100px] px-6 pt-14 pb-12 lg:px-8 lg:pt-20 lg:pb-16">
          <p className="text-sm font-semibold tracking-[0.14em] text-gha-secondary uppercase">
            Who We Are
          </p>
          <h1 className="type-h1 mt-3 max-w-3xl text-balance">
            Strategic Plan
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gha-muted">
            A framework that positions GHA as a comprehensive health and
            humanitarian organization while remaining focused on its core
            mission.
          </p>
        </div>
      </header>

      <section className="border-b border-gha-border bg-background">
        <div className="mx-auto max-w-[1100px] px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-[1.75rem] border border-gha-border bg-white shadow-[0_18px_50px_rgba(61,96,164,0.08)]">
              <div className="h-2 bg-gha-secondary" aria-hidden="true" />
              <div className="p-8 sm:p-10">
                <p className="text-xs font-semibold tracking-[0.14em] text-gha-secondary uppercase">
                  Vision
                </p>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Equitable, resilient healthcare for all
                </h2>
                <p className="mt-5 text-base leading-relaxed text-gha-muted lg:text-lg">
                  A Somalia where every individual, especially women and
                  children, has equitable access to quality, affordable, and
                  resilient healthcare services.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[1.75rem] border border-gha-border bg-white shadow-[0_18px_50px_rgba(61,96,164,0.08)]">
              <div className="h-2 bg-gha-primary" aria-hidden="true" />
              <div className="p-8 sm:p-10">
                <p className="text-xs font-semibold tracking-[0.14em] text-gha-secondary uppercase">
                  Mission
                </p>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Strengthen systems. Empower people.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-gha-muted lg:text-lg">
                  To strengthen health systems, empower healthcare
                  professionals, and improve community health through
                  innovation, partnerships, humanitarian action, and
                  evidence-based interventions.
                </p>
              </div>
            </article>
          </div>

          <article className="mt-8 rounded-[1.75rem] border border-gha-border bg-linear-to-br from-gha-primary to-[#27467f] p-8 text-white shadow-[0_22px_60px_rgba(61,96,164,0.18)] sm:p-10">
            <p className="text-xs font-semibold tracking-[0.14em] text-white/70 uppercase">
              Strategic Direction
            </p>
            <h2 className="type-h2 mt-4 max-w-3xl">
              A practical roadmap for donor partnerships, institutional growth,
              and long-term health impact.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 lg:text-lg">
              This framework positions GHA as a comprehensive health and
              humanitarian organization while remaining focused on its core
              mission. It supports donor proposals, partnership discussions, and
              internal planning with a clear set of measurable priorities.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1100px] px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.14em] text-gha-secondary uppercase">
              Priorities
            </p>
            <h2 className="type-h2 mt-3 text-foreground">
              Strategic Priorities
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gha-muted lg:text-lg">
              Each priority below pairs a focus area with the outcome GHA aims
              to deliver for communities, partners, and health systems.
            </p>
          </div>

          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {priorities.map((row, index) => (
              <li key={row.priority}>
                <article className="group h-full rounded-[1.5rem] border border-gha-border bg-white p-6 shadow-[0_14px_38px_rgba(13,13,13,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-gha-secondary hover:bg-gha-secondary hover:shadow-[0_20px_48px_rgba(61,96,164,0.12)] sm:p-7">
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gha-primary text-[13px] font-bold text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-black sm:text-xl">
                        {row.priority}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-gha-muted transition-colors duration-300 group-hover:text-black lg:text-base">
                        {row.outcome}
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <Link
              href="/who-we-are/about"
              className="inline-flex items-center gap-1 text-[15px] font-bold text-gha-primary transition-all duration-300 hover:gap-2 hover:text-gha-primary-hover"
            >
              ← Back to Mission &amp; Vision
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
