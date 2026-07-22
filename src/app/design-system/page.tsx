import type { ReactNode } from "react";
import { GhaLogo } from "@/components/GhaLogo";

const colors = [
  {
    name: "Background",
    token: "--background",
    hex: "#FBF8F8",
    className: "bg-background border border-gha-border",
  },
  {
    name: "Surface",
    token: "--gha-surface",
    hex: "#FFFFFF",
    className: "bg-gha-surface border border-gha-border",
  },
  {
    name: "Primary",
    token: "--gha-primary",
    hex: "#3D60A4",
    className: "bg-gha-primary",
  },
  {
    name: "Primary hover",
    token: "--gha-primary-hover",
    hex: "#334F88",
    className: "bg-gha-primary-hover",
  },
  {
    name: "Secondary",
    token: "--gha-secondary",
    hex: "#59C2E2",
    className: "bg-gha-secondary",
  },
  {
    name: "Secondary hover",
    token: "--gha-secondary-hover",
    hex: "#3AAFCF",
    className: "bg-gha-secondary-hover",
  },
  {
    name: "Foreground",
    token: "--foreground",
    hex: "#1A1A1A",
    className: "bg-foreground",
  },
  {
    name: "Muted",
    token: "--gha-muted",
    hex: "#5C5C5C",
    className: "bg-gha-muted",
  },
  {
    name: "Border",
    token: "--gha-border",
    hex: "#E5E0E0",
    className: "bg-gha-border border border-gha-muted/20",
  },
  {
    name: "Success",
    token: "--gha-success",
    hex: "#2F7D5B",
    className: "bg-gha-success",
  },
  {
    name: "Warning",
    token: "--gha-warning",
    hex: "#C48A1A",
    className: "bg-gha-warning",
  },
  {
    name: "Error",
    token: "--gha-error",
    hex: "#B42318",
    className: "bg-gha-error",
  },
] as const;

const spacing = [
  { name: "1", value: "4px", size: "var(--space-1)" },
  { name: "2", value: "8px", size: "var(--space-2)" },
  { name: "3", value: "12px", size: "var(--space-3)" },
  { name: "4", value: "16px", size: "var(--space-4)" },
  { name: "6", value: "24px", size: "var(--space-6)" },
  { name: "8", value: "32px", size: "var(--space-8)" },
  { name: "12", value: "48px", size: "var(--space-12)" },
  { name: "16", value: "64px", size: "var(--space-16)" },
] as const;

function Section({
  title,
  eyebrow,
  children,
  className = "",
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`gha-rise border-t border-gha-border/80 pt-14 ${className}`}>
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-gha-secondary uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      {/* Soft brand atmosphere — creative without clutter */}
      <div
        className="gha-wash pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 12% -10%, color-mix(in srgb, var(--gha-secondary) 28%, transparent), transparent 55%), radial-gradient(ellipse 70% 50% at 88% 0%, color-mix(in srgb, var(--gha-primary) 18%, transparent), transparent 50%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-14 lg:px-8 lg:py-20">
        <header className="gha-rise max-w-2xl space-y-5">
          <p className="text-sm font-semibold tracking-[0.14em] text-gha-primary uppercase">
            Brand foundations
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Global Health Alliance Design System
          </h1>
          <p className="text-lg leading-relaxed text-gha-muted text-pretty">
            Simple structures. Creative moments. Every screen should feel clear
            first, then memorable — always in step with the logo.
          </p>
        </header>

        <Section
          title="Principles"
          eyebrow="How we design"
          className="gha-rise-delay-1"
        >
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-3">
              <div className="h-1 w-10 rounded-full bg-gha-primary" />
              <h3 className="text-xl font-semibold tracking-tight">Simplicity</h3>
              <p className="text-base leading-relaxed text-gha-muted">
                One idea per section. Generous space. Short copy. Prefer open
                layouts over cards, boxes, and chrome. If an element doesn’t
                help understanding or action, remove it.
              </p>
            </div>
            <div className="space-y-3">
              <div className="h-1 w-10 rounded-full bg-gha-secondary" />
              <h3 className="text-xl font-semibold tracking-tight">Creativity</h3>
              <p className="text-base leading-relaxed text-gha-muted">
                Use soft colour washes, intentional motion, and secondary cyan
                as a spark — not decoration for its own sake. Creativity should
                guide attention toward people, impact, and the next action.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Logo" className="gha-rise-delay-2">
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] px-8 py-14 sm:px-14 sm:py-16">
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(135deg, var(--background) 0%, color-mix(in srgb, var(--gha-secondary) 12%, var(--background)) 50%, color-mix(in srgb, var(--gha-primary) 8%, var(--background)) 100%)",
              }}
            />
            <div className="relative">
              <GhaLogo className="[&_img]:h-[72px] [&_img]:w-auto" priority />
            </div>
          </div>
          <ul className="mt-5 space-y-2 text-sm leading-relaxed text-gha-muted">
            <li>Prefer the horizontal PNG on light backgrounds (#FBF8F8 or white).</li>
            <li>Background is transparent — no white box around the mark.</li>
            <li>Do not recolour, stretch, or crop the mark.</li>
            <li>
              Keep clear space around the lockup roughly equal to the height of
              the globe icon.
            </li>
          </ul>
        </Section>

        <Section title="Colour">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {colors.map((c) => (
              <div key={c.token} className="group space-y-2">
                <div
                  className={`h-16 rounded-[var(--radius-md)] transition-transform duration-300 group-hover:-translate-y-0.5 ${c.className}`}
                />
                <div className="space-y-0.5 px-0.5">
                  <p className="text-sm font-semibold">{c.name}</p>
                  <p className="font-mono text-xs text-gha-muted">
                    {c.hex} · {c.token}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Typography">
          <p className="mb-4 text-sm text-gha-muted">
            Typeface:{" "}
            <span className="font-semibold text-foreground">Inter</span> —
            inspired by the clear hierarchy on{" "}
            <a
              href="https://hias.org/"
              className="font-semibold text-gha-primary underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              HIAS
            </a>
            : bold display headlines, 15px navigation, relaxed body copy, and
            uppercase button labels.
          </p>
          <div className="mb-8 flex flex-wrap gap-2 text-xs text-gha-muted">
            <span className="rounded-full bg-gha-surface px-3 py-1 border border-gha-border">
              Weights: 400 / 500 / 600 / 700 / 900
            </span>
            <span className="rounded-full bg-gha-surface px-3 py-1 border border-gha-border">
              Background #FBF8F8
            </span>
            <span className="rounded-full bg-gha-primary px-3 py-1 text-white">
              Primary #3D60A4
            </span>
            <span className="rounded-full bg-gha-secondary px-3 py-1 text-gha-secondary-fg">
              Secondary #59C2E2
            </span>
          </div>
          <div className="space-y-10">
            <div>
              <p className="type-eyebrow mb-2">Display / Hero</p>
              <p className="type-display text-balance">
                We fight for refugees and immigrants.
              </p>
            </div>
            <div>
              <p className="type-eyebrow mb-2">H1 · 3rem / Bold</p>
              <p className="type-h1 text-balance">
                Building resilient healthcare systems
              </p>
            </div>
            <div>
              <p className="type-eyebrow mb-2">H2 · 2.25rem / Bold</p>
              <p className="type-h2">Our global priorities</p>
            </div>
            <div>
              <p className="type-eyebrow mb-2">H3 · 1.875rem / Semibold</p>
              <p className="type-h3">Community health programs</p>
            </div>
            <div>
              <p className="type-eyebrow mb-2">Lead · 1.125rem</p>
              <p className="type-lead max-w-2xl">
                Drawing on our values and history, GHA stands for a world in
                which communities find welcome, safety, health, and opportunity.
              </p>
            </div>
            <div>
              <p className="type-eyebrow mb-2">Body · 1rem / Regular</p>
              <p className="type-body max-w-2xl">
                Global Health Alliance works with partners to strengthen health
                systems so communities can prepare for, respond to, and recover
                from public health challenges.
              </p>
            </div>
            <div>
              <p className="type-eyebrow mb-2">Navigation · 15px / Semibold</p>
              <p className="type-nav">Who We Are · What We Do · Where We Work</p>
            </div>
            <div>
              <p className="type-eyebrow mb-2">Small / caption · 0.875rem</p>
              <p className="type-small">
                Supporting detail, metadata, and helper text.
              </p>
            </div>
            <div>
              <p className="type-eyebrow mb-2">Button label · 13px / Bold / Uppercase</p>
              <p className="type-button">Donate now</p>
            </div>
          </div>
        </Section>

        <Section title="Buttons">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex h-11 items-center rounded-full bg-gha-primary px-6 text-[13px] font-bold tracking-wide text-white uppercase transition-[colors,transform] duration-200 hover:-translate-y-0.5 hover:bg-gha-primary-hover"
            >
              Primary
            </button>
            <button
              type="button"
              className="inline-flex h-11 items-center rounded-full bg-gha-secondary px-6 text-[13px] font-bold tracking-wide text-gha-secondary-fg uppercase transition-[colors,transform] duration-200 hover:-translate-y-0.5 hover:bg-gha-secondary-hover"
            >
              Secondary
            </button>
            <button
              type="button"
              className="inline-flex h-11 items-center rounded-full border-2 border-gha-primary bg-transparent px-6 text-[13px] font-bold tracking-wide text-gha-primary uppercase transition-colors duration-200 hover:bg-gha-primary hover:text-white"
            >
              Outline
            </button>
            <button
              type="button"
              className="inline-flex h-11 items-center rounded-full px-4 text-[13px] font-bold tracking-wide text-gha-primary uppercase transition-colors duration-200 hover:bg-gha-primary/10"
            >
              Text
            </button>
            <button
              type="button"
              disabled
              className="inline-flex h-11 cursor-not-allowed items-center rounded-full bg-gha-primary px-6 text-[13px] font-bold tracking-wide text-white uppercase opacity-40"
            >
              Disabled
            </button>
          </div>
          <ul className="mt-5 space-y-2 text-sm leading-relaxed text-gha-muted">
            <li>
              Primary (#3D60A4 + white text): main CTA — one per section.
            </li>
            <li>
              Secondary (#59C2E2 + dark text): supporting action, not destructive.
            </li>
            <li>Outline / text: tertiary actions and quiet links.</li>
          </ul>
        </Section>

        <Section title="Spacing">
          <div className="space-y-3">
            {spacing.map((s) => (
              <div key={s.name} className="flex items-center gap-4">
                <span className="w-16 shrink-0 font-mono text-xs text-gha-muted">
                  space-{s.name}
                </span>
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-gha-primary to-gha-secondary"
                  style={{ width: s.size }}
                />
                <span className="text-xs text-gha-muted">{s.value}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-gha-muted">
            Default to larger steps (space-8+) between sections — simplicity
            thrives on air.
          </p>
        </Section>

        <Section title="Radius">
          <div className="flex flex-wrap gap-8">
            {[
              { name: "sm", radius: "var(--radius-sm)" },
              { name: "md", radius: "var(--radius-md)" },
              { name: "lg", radius: "var(--radius-lg)" },
              { name: "full", radius: "var(--radius-full)" },
            ].map((r) => (
              <div key={r.name} className="flex flex-col items-center gap-2">
                <div
                  className="h-16 w-24 bg-gradient-to-br from-gha-primary/90 to-gha-secondary"
                  style={{ borderRadius: r.radius }}
                />
                <span className="font-mono text-xs text-gha-muted">
                  radius-{r.name}
                </span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Usage rules" className="gha-rise-delay-3">
          <ol className="space-y-3 text-base leading-relaxed text-foreground">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gha-primary" />
              <span>
                <strong className="font-semibold">Simplicity:</strong> one
                purpose, one headline, one short supporting line per section.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gha-secondary" />
              <span>
                <strong className="font-semibold">Creativity:</strong> use soft
                washes, rise animations, and cyan accents to create presence —
                never to fill empty space with widgets.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gha-primary" />
              <span>
                Page canvas uses #FBF8F8; elevated panels use white only when
                needed for interaction or contrast.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gha-primary" />
              <span>
                Primary blue for commitment; secondary cyan for supporting
                emphasis. One primary CTA per section.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gha-primary" />
              <span>
                Never recolour the PNG logo; place it on light backgrounds only.
              </span>
            </li>
          </ol>
        </Section>
      </div>
    </main>
  );
}
