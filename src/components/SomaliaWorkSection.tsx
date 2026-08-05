import Image from "next/image";
import Link from "next/link";
import {
  UsaLatestNewsSlider,
  somaliaLatestItems,
} from "@/components/UsaLatestNewsSlider";
import {
  UsaWatchSection,
  somaliaVideos,
} from "@/components/UsaWatchSection";

const somaliaHeroStats = [
  { label: "Focus region", value: "Galkacyo" },
  { label: "Primary work", value: "Hospital support" },
  { label: "Communities served", value: "Local families" },
  { label: "Signature focus", value: "Newborn care" },
] as const;

export function SomaliaWorkSection() {
  return (
    <section
      id="somalia-work"
      className="scroll-mt-0 bg-gha-surface text-foreground"
      aria-labelledby="somalia-work-heading"
    >
      {/* Country header — same Farm Africa split layout as USA */}
      <header className="relative isolate overflow-hidden bg-[#f4efe6] lg:min-h-[min(520px,72vh)]">
        <div className="grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.18fr)] lg:min-h-[min(520px,72vh)]">
          <div className="relative z-10 flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-12 lg:py-20 xl:pl-[max(2rem,calc((100vw-1100px)/2+1.5rem))]">
            <span className="inline-flex w-fit items-center rounded-full bg-[#e07a2f] px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-white">
              GHA in Action
            </span>
            <h1
              id="somalia-work-heading"
              className="type-h1 mt-6 text-balance text-[#1a2f5c]"
            >
              Somalia
            </h1>
            <p className="type-lead mt-5 max-w-md text-[#1a2f5c]/90">
              Global Health Alliance partners with hospitals and clinicians
              across Somalia—delivering medical equipment, newborn care
              training, and locally led programmes that strengthen health
              systems where they are needed most.
            </p>
          </div>

          <div className="relative flex flex-col justify-center overflow-hidden bg-gha-primary px-6 py-14 text-[#f4efe6] sm:px-10 lg:py-20 lg:pr-12 xl:pr-[max(2rem,calc((100vw-1100px)/2+1.5rem))]">
            <svg
              className="pointer-events-none absolute top-0 left-0 z-20 hidden h-full w-[88px] -translate-x-[99%] lg:block"
              viewBox="0 0 88 600"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M88 0C28 140 28 460 88 600V0Z" fill="#3d60a4" />
            </svg>

            <div className="relative z-10 ml-auto w-full max-w-[340px] lg:max-w-[380px]">
              <p className="text-[12px] font-medium tracking-wide text-[#f4efe6]/75">
                Key partnership
              </p>
              <p className="mt-1 text-[1.85rem] font-bold leading-tight tracking-tight text-[#e8b84a] sm:text-[2.15rem]">
                Galkacyo General
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-7">
                {somaliaHeroStats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-[11px] leading-snug font-medium tracking-wide text-[#f4efe6]/7">
                      {stat.label}
                    </dt>
                    <dd className="mt-1 text-[1.35rem] font-bold leading-tight tracking-tight text-[#e8b84a] sm:text-[1.5rem]">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </header>

      {/* Testimonial */}
      <aside
        className="bg-[#1e345f] text-white"
        aria-label="Community testimonial"
      >
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-10 px-6 py-14 sm:gap-12 sm:py-16 lg:flex-row lg:justify-center lg:gap-16 lg:px-8 lg:py-20">
          <blockquote className="max-w-xl text-center lg:text-left">
            <p className="text-[1.25rem] leading-snug font-medium text-balance text-white sm:text-[1.45rem] lg:text-[1.6rem] lg:leading-[1.35]">
              “When the equipment arrived at Galkacyo, our teams could finally
              match training with the tools needed to save mothers and
              newborns.”
            </p>
            <footer className="mt-6">
              <cite className="not-italic text-[1.15rem] font-bold tracking-tight text-[#e8b84a] sm:text-xl">
                Yonis Osman
              </cite>
              <p className="mt-1 text-sm text-white/70 sm:text-[15px]">
                In-Country Director, GHA Somalia
              </p>
            </footer>
          </blockquote>

          <div className="relative shrink-0">
            <div
              className="absolute -right-1.5 -bottom-1.5 h-full w-full bg-[#e8b84a]"
              style={{
                clipPath:
                  "polygon(18% 0%, 88% 4%, 100% 28%, 96% 72%, 78% 100%, 22% 96%, 0% 68%, 4% 22%)",
              }}
              aria-hidden="true"
            />
            <div
              className="relative h-[280px] w-[220px] overflow-hidden sm:h-[320px] sm:w-[250px]"
              style={{
                clipPath:
                  "polygon(18% 0%, 88% 4%, 100% 28%, 96% 72%, 78% 100%, 22% 96%, 0% 68%, 4% 22%)",
              }}
            >
              <Image
                src="/who-we-are/history/galkacyo-hospital.png"
                alt="Medical equipment installation at Galkacyo General Hospital"
                fill
                className="object-cover object-[center_35%]"
                sizes="250px"
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Narrative + challenges */}
      <div className="mx-auto max-w-[760px] px-6 py-14 lg:px-8 lg:py-20">
        <div className="space-y-5 text-base leading-relaxed text-gha-muted sm:text-[1.05rem]">
          <p>
            Across Somalia, hospitals and clinics serve families with courage
            and commitment—yet many facilities still lack reliable equipment,
            oxygen therapy capacity, and ongoing clinical training for newborn
            and emergency care.
          </p>
          <p className="font-semibold text-foreground">
            Locally led partnerships turn that gap into lasting capacity.
          </p>
          <p>
            GHA works with in-country leaders, hospital teams, and community
            partners to deliver medical equipment, bedside training, and
            systems support—so care improves where Somali families actually
            seek it.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          <article>
            <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Access challenges
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gha-muted">
              Partner hospitals often lack essential equipment for emergency
              and newborn care. Without reliable tools—and clinicians trained
              to use them—preventable risks remain high for mothers and babies.
            </p>
            <p className="mt-8 text-4xl font-bold tracking-tight text-gha-primary sm:text-5xl">
              5+
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-gha-muted">
              hospitals in Somalia supported with modern medical technology
              through sustained collaboration.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Capacity challenges
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gha-muted">
              Equipment alone is not enough. GHA pairs hospital support with
              clinician training, respiratory care pathways, and digital tools
              so teams can sustain safer care long after a handover day.
            </p>
            <p className="mt-8 text-4xl font-bold tracking-tight text-gha-primary sm:text-5xl">
              Training
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-gha-muted">
              focus across newborn care, emergency readiness, oxygen therapy,
              and frontline clinical decision support.
            </p>
          </article>
        </div>

        <div className="mt-16 border-t border-gha-border pt-14">
          <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            GHA in Somalia
          </h3>
          <div className="mt-5 space-y-5 text-base leading-relaxed text-gha-muted sm:text-[1.05rem]">
            <p>
              Through locally led initiatives, Global Health Alliance
              strengthens hospitals and clinical teams across Somalia—from
              equipment installation at Galkacyo General Hospital to competency
              training that improves care in the first critical days of life.
            </p>
            <p>
              Our model pairs diaspora and U.S. expertise with in-country
              leadership, so programmes are rooted in Somali priorities and
              built for lasting impact.
            </p>
          </div>

          <blockquote className="mt-10 border-l-2 border-gha-secondary pl-5">
            <p className="text-lg leading-relaxed font-medium text-balance text-foreground sm:text-xl">
              “We leverage technology, innovation, and collaboration to
              strengthen healthcare systems across Somalia—always with local
              partners at the center.”
            </p>
            <footer className="mt-4 text-sm text-gha-muted">
              <cite className="not-italic font-semibold text-foreground">
                Yonis Osman
              </cite>
              <span className="mt-0.5 block">
                In-Country Director, GHA Somalia
              </span>
            </footer>
          </blockquote>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <div>
              <h4 className="text-base font-bold tracking-tight text-foreground">
                Hospital & equipment support
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-gha-muted sm:text-[15px]">
                We deliver essential medical equipment and strengthen emergency
                and newborn care capacity so partner hospitals can serve
                families with safer, more reliable tools.
              </p>
            </div>
            <div>
              <h4 className="text-base font-bold tracking-tight text-foreground">
                Locally led clinical training
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-gha-muted sm:text-[15px]">
                From ENC and respiratory care to digital decision support, we
                train clinicians where they work—building skills that stay in
                the system and scale across facilities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <UsaLatestNewsSlider
        title="The latest from Somalia"
        items={somaliaLatestItems}
      />

      <UsaWatchSection
        headingId="somalia-watch-heading"
        videos={somaliaVideos}
      />

      <div className="bg-[#1e345f] text-white">
        <div className="mx-auto grid max-w-[1100px] gap-10 px-6 py-14 sm:gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16 lg:px-8 lg:py-16">
          <div>
            <h3 className="type-h2 text-balance">
              Countries we
              <br className="hidden sm:block" /> work in
            </h3>
            <Link
              href="/gha-in-action/countries"
              className="mt-6 inline-flex items-center gap-2.5 text-sm text-white/85 transition-colors hover:text-white"
            >
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e8b84a] text-[#1e345f]"
                aria-hidden="true"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 2l6 6M8 2L2 8"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              Back to overview
            </Link>
          </div>

          <ul className="flex flex-col gap-4 sm:gap-5">
            {[
              {
                label: "United States",
                href: "/gha-in-action/usa",
                current: false,
              },
              {
                label: "Somalia",
                href: "/gha-in-action/somalia",
                current: true,
              },
            ].map((country) => (
              <li key={country.label}>
                <Link
                  href={country.href}
                  className={`text-lg font-medium tracking-tight transition-colors sm:text-xl ${
                    country.current
                      ? "text-[#e8b84a]"
                      : "text-white hover:text-[#e8b84a]"
                  }`}
                  aria-current={country.current ? "page" : undefined}
                >
                  {country.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
