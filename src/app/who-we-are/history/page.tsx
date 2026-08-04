import type { Metadata } from "next";
import Image from "next/image";
import { HistoryScrollSection } from "@/components/HistoryScrollSection";

export const metadata: Metadata = {
  title: "Our History | Global Health Alliance",
  description:
    "From Minneapolis community health initiatives to global programs in Somalia and beyond—discover how Global Health Alliance began and where we are headed.",
};

const historyMoments = [
  {
    src: "/who-we-are/history/dihad-certificate.png",
    alt: "Dr. Ikraan Abdulle receiving a certificate of completion at the DIHAD conference workshop",
  },
  {
    src: "/who-we-are/history/panel-discussion.png",
    alt: "GHA representative speaking on a global health panel",
  },
  {
    src: "/who-we-are/history/uofm-training.png",
    alt: "GHA training participants holding certificates at the University of Minnesota",
  },
  {
    src: "/who-we-are/history/galkacyo-hospital.png",
    alt: "Medical equipment installation at Galkacyo General Hospital",
  },
];

const highlightStats = [
  { value: "6", label: "Years Experience" },
  { value: "40+", label: "Projects" },
];

const statsBand = [
  { value: "2021", label: "Year Founded" },
  { value: "5", label: "Hospitals Equipped" },
  { value: "80+", label: "Professionals Trained" },
  { value: "1,000+", label: "Residents Reached" },
  { value: "3", label: "Clinic Partnerships" },
  { value: "2", label: "Doulas Trained" },
];

const historyScrollStats = [
  highlightStats[0],
  highlightStats[1],
  statsBand[2],
];

const localInitiatives = [
  "Providing culturally competent healthcare education to immigrant families",
  "Organizing free health screenings in underserved neighborhoods",
  "Collaborating with local clinics to improve access for non-English speaking patients",
  "Mentoring aspiring healthcare professionals from diverse backgrounds",
];

const bridgingEfforts = [
  "We've adapted our culturally sensitive healthcare education programs for use in Somalia",
  "Our experience in organizing community health events in Minneapolis has been applied to rural outreach programs in Africa",
  "The relationships we've built with Minnesota hospitals have facilitated donations of vital medical equipment to clinics abroad",
];

const impactStrengths = [
  {
    title: "Community health at home",
    description:
      "culturally competent education, free screenings, clinic partnerships, and mentoring for immigrant families in Minneapolis.",
  },
  {
    title: "Workforce training",
    description:
      "doulas, community health workers, and 80+ professionals trained in essential newborn care and helping mothers survive.",
  },
  {
    title: "Hospital partnerships abroad",
    description:
      "five hospitals in Somalia equipped with modern medical technology through sustained collaboration.",
  },
  {
    title: "Bridging local and global",
    description:
      "Minnesota experience adapted for rural outreach, equipment donations, and culturally informed programs overseas.",
  },
] as const;

const impactGaps = [
  {
    title: "Preventable maternal mortality",
    description:
      "too many mothers and newborns still die where training, supplies, and emergency care remain out of reach.",
  },
  {
    title: "Equipment and infrastructure gaps",
    description:
      "many clinics lack basic tools until partnerships bring technology, maintenance, and skilled operators.",
  },
  {
    title: "Language and access barriers",
    description:
      "immigrant and non-English speaking families still face unequal pathways into quality local care.",
  },
  {
    title: "Rural and remote reach",
    description:
      "the hardest-to-serve communities need sustained presence—not one-time interventions—to close lasting gaps.",
  },
] as const;

function CheckSquareIcon() {
  return (
    <span
      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-foreground"
      aria-hidden="true"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6l2.5 2.5L9.5 3.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function CrossSquareIcon() {
  return (
    <span
      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-foreground"
      aria-hidden="true"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M3.5 3.5l5 5M8.5 3.5l-5 5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

const founderStories = [
  {
    name: "Ikraan",
    role: "Co-Founder, Global Health Alliance",
    quote:
      "My father's near-fatal experience due to lack of medical resources was a wake-up call. It made me realize the critical need for accessible healthcare in undeserved regions. GHA is my commitment to ensuring that no one else suffers because of preventable healthcare gaps.",
    variant: "gradient" as const,
  },
  {
    name: "Markabo Hassan",
    role: "Board Member & Co-Founder",
    quote:
      "Witnessing the loss of a loved one due to inadequate healthcare resources was devastating. It motivated me to co-found GHA, dedicated to bridging the gaps in global healthcare and providing essential medical supplies to those in need.",
    variant: "gradient-alt" as const,
  },
];

function FounderStoriesMasonry() {
  const gradientClass = {
    gradient:
      "bg-gradient-to-b from-gha-primary via-[#35599a] to-[#4a6fad]",
    "gradient-alt":
      "bg-gradient-to-b from-[#2f538f] via-gha-primary to-[#59c2e2]/80",
  };

  return (
    <section className="border-b border-gha-border bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">
          Founder Stories
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg font-normal text-gha-muted lg:text-base">
          Personal experiences that shaped our mission to close preventable gaps
          in care.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {founderStories.map((story) => (
            <li key={story.name}>
              <article
                className={`flex h-full min-h-[320px] flex-col justify-between rounded-3xl p-8 sm:p-10 ${
                  gradientClass[story.variant]
                }`}
              >
                <p className="text-lg leading-relaxed font-normal text-white/95 sm:text-xl lg:text-base">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <div className="mt-8">
                  <p className="text-2xl font-black text-white sm:text-3xl">
                    {story.name}
                  </p>
                  <p className="mt-1 text-sm font-normal text-white/70 lg:text-base">
                    {story.role}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ScrollChevron() {
  return (
    <svg
      className="h-6 w-6 text-white"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6M6 15l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PulseIcon() {
  return (
    <svg
      className="h-7 w-7 text-gha-secondary"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 14h3.5l2.2-5.5L14 20l2.8-7 2.2 4H24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HistoryPage() {
  return (
    <main className="bg-gha-surface font-medium text-foreground [&_h1]:font-black [&_h2]:font-black [&_h3]:font-black">
      {/* Hero — full-bleed image with title overlay */}
      <header className="relative min-h-[min(72vh,680px)] overflow-hidden">
        <Image
          src="/who-we-are/gha-team.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/45"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[min(72vh,680px)] max-w-[1200px] flex-col px-6 pt-14 pb-10 lg:px-8 lg:pt-20 lg:pb-12">
          <div className="max-w-2xl">
            <span className="inline-block rounded-md bg-black/45 px-3 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm">
              Who We Are
            </span>

            <div className="mt-5">
              <PulseIcon />
            </div>

            <h1 className="mt-4 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Our History
              <span className="mt-1 block text-[0.92em]">
                From Local Roots to Global Reach
              </span>
            </h1>

            <span
              className="mt-5 block h-1 w-24 bg-gha-secondary"
              aria-hidden="true"
            />
          </div>

          <div className="mt-auto flex justify-end pt-10">
            <span className="flex flex-col items-center gap-1 text-white/80">
              <ScrollChevron />
              <span className="sr-only">Scroll down</span>
            </span>
          </div>
        </div>
      </header>

      {/* About / Our Story — Infinity About Us block */}
      <section className="border-b border-gha-border bg-gha-surface">
        <div className="mx-auto max-w-[900px] px-6 py-20 text-center lg:px-8 lg:py-24">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            About Our History
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gha-muted lg:text-base">
            GHA was founded in response to the personal experiences of our
            founders, Ikraan and Farhiyo, who faced severe healthcare
            challenges that highlighted critical gaps in access to medical
            resources.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gha-muted lg:text-base">
            Their father&apos;s near-death experience due to inadequate medical
            care in Somalia, and the tragic loss of Board Member Markabo
            Hassan&apos;s step-father in Ethiopia, underscored the urgent need
            for accessible, high-quality healthcare. These experiences ignited
            our founders&apos; passion to create GHA, with the aim of preventing
            such preventable tragedies.
          </p>
          <blockquote className="mx-auto mt-10 max-w-2xl border-l-0 px-0">
            <p className="text-lg leading-relaxed text-gha-muted italic lg:text-base">
              &ldquo;We are motivated by ensuring that preventable healthcare
              gaps never claim another life—starting in our communities and
              extending worldwide.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      <HistoryScrollSection images={historyMoments} stats={historyScrollStats} />

      <FounderStoriesMasonry />

      {/* Minneapolis initiatives */}
      <section className="border-b border-gha-border bg-[#e9f4fa] py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-[0_20px_60px_rgba(61,96,164,0.08)] lg:grid lg:grid-cols-2 lg:items-center">
            <div className="px-8 py-12 lg:px-14 lg:py-16">
              <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl">
                Where our journey began with community health initiatives in
                Minneapolis
              </h2>

              <ul className="mt-8 space-y-5">
                {localInitiatives.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 text-base font-normal leading-relaxed text-gha-muted"
                  >
                    <span
                      className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#e85d4c]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-base font-normal leading-relaxed text-gha-muted">
                These local efforts laid the foundation for our broader mission
                and continue to be a cornerstone of our work today.
              </p>
            </div>

            <div className="relative aspect-[4/3] min-h-[280px] lg:aspect-auto lg:min-h-[520px]">
              <div className="absolute inset-4 overflow-hidden rounded-[2rem] lg:inset-6">
                <Image
                  src="/who-we-are/history/uofm-training.png"
                  alt="GHA training participants at the University of Minnesota"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridging local and global */}
      <section className="border-b border-gha-border bg-[#e9f4fa] py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-[0_20px_60px_rgba(61,96,164,0.08)] lg:grid lg:grid-cols-2 lg:items-center">
            <div className="px-8 py-12 lg:px-14 lg:py-16">
              <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl">
                Bridging Local and Global
              </h2>

              <p className="mt-8 text-base font-normal leading-relaxed text-gha-muted">
                As we grew, we realized that our local experiences gave us unique
                insights into addressing global health challenges. Many of our team
                members, having personal connections to countries like Somalia,
                understood the pressing need for improved healthcare in these
                regions.
              </p>

              <p className="mt-6 text-base font-normal leading-relaxed text-gha-muted">
                Our local work in Minnesota has directly informed our international
                efforts:
              </p>

              <ul className="mt-6 space-y-5">
                {bridgingEfforts.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 text-base font-normal leading-relaxed text-gha-muted"
                  >
                    <span
                      className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#e85d4c]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-base font-normal leading-relaxed text-gha-muted">
                This integrated approach allows us to bring culturally informed,
                community-tested solutions to healthcare challenges around the
                world.
              </p>
            </div>

            <div className="relative aspect-[4/3] min-h-[280px] lg:aspect-auto lg:min-h-[520px]">
              <div className="absolute inset-4 overflow-hidden rounded-[2rem] lg:inset-6">
                <Image
                  src="/who-we-are/history/galkacyo-hospital.png"
                  alt="Medical equipment installation at Galkacyo General Hospital"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band — Infinity 600+ / 4.5-Star / $2.5B row */}
      <section className="border-b border-gha-border bg-gha-primary py-16 text-white lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {statsBand.map((stat) => (
              <li key={stat.label} className="text-center">
                <p className="text-4xl font-black tracking-tight text-gha-secondary lg:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium tracking-wide text-white/80 uppercase lg:text-base">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Impact detail — KAÏDO-style two-column comparison */}
      <section className="border-t border-gha-border bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Where GHA excels.
            <span className="mt-1 block">Where the need remains.</span>
          </h2>

          <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                Where GHA excels
              </h3>
              <ul className="mt-6">
                {impactStrengths.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 border-t border-gha-border py-5 first:border-t-0 first:pt-0 last:pb-0"
                  >
                    <CheckSquareIcon />
                    <p className="text-[15px] leading-relaxed text-gha-muted">
                      <span className="font-bold text-foreground">
                        {item.title}&nbsp;:
                      </span>{" "}
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                Where the need remains, we tell you
              </h3>
              <ul className="mt-6">
                {impactGaps.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 border-t border-gha-border py-5 first:border-t-0 first:pt-0 last:pb-0"
                  >
                    <CrossSquareIcon />
                    <p className="text-[15px] leading-relaxed text-gha-muted">
                      <span className="font-bold text-foreground">
                        {item.title}&nbsp;:
                      </span>{" "}
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
