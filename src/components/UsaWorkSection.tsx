import Image from "next/image";
import Link from "next/link";
import { UsaLatestNewsSlider } from "@/components/UsaLatestNewsSlider";
import { UsaWatchSection } from "@/components/UsaWatchSection";

export function UsaWorkSection() {
  return (
    <section
      id="usa-work"
      className="scroll-mt-0 bg-gha-surface text-foreground"
      aria-labelledby="usa-work-heading"
    >
      {/* Country header — Farm Africa Ethiopia split layout */}
      <header className="relative isolate overflow-hidden bg-[#f4efe6] lg:min-h-[min(520px,72vh)]">
        <div className="grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.18fr)] lg:min-h-[min(520px,72vh)]">
          {/* Left — cream intro */}
          <div className="relative z-10 flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-12 lg:py-20 xl:pl-[max(2rem,calc((100vw-1100px)/2+1.5rem))]">
            <span className="inline-flex w-fit items-center rounded-full bg-[#e07a2f] px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-white">
              GHA in Action
            </span>
            <h1
              id="usa-work-heading"
              className="type-h1 mt-6 text-balance text-[#1a2f5c]"
            >
              United States
            </h1>
            <p className="type-lead mt-5 max-w-md text-[#1a2f5c]/90">
              Global Health Alliance works across Minnesota helping immigrant
              families—especially Somali mothers—navigate perinatal care, access
              culturally responsive services, and build healthier futures.
            </p>
          </div>

          {/* Right — brand panel + stats */}
          <div className="relative flex flex-col justify-center overflow-hidden bg-gha-primary px-6 py-14 text-[#f4efe6] sm:px-10 lg:py-20 lg:pr-12 xl:pr-[max(2rem,calc((100vw-1100px)/2+1.5rem))]">
            {/* Smooth vertical curve into the cream panel (desktop) */}
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
                Headquarters
              </p>
              <p className="mt-1 text-[1.85rem] font-bold leading-tight tracking-tight text-[#e8b84a] sm:text-[2.15rem]">
                Roseville, MN
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Testimonial — Farm Africa style, below USA header */}
      <aside
        className="bg-[#1e345f] text-white"
        aria-label="Community testimonial"
      >
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-10 px-6 py-14 sm:gap-12 sm:py-16 lg:flex-row lg:justify-center lg:gap-16 lg:px-8 lg:py-20">
          <blockquote className="max-w-xl text-center lg:text-left">
            <p className="text-[1.25rem] leading-snug font-medium text-balance text-white sm:text-[1.45rem] lg:text-[1.6rem] lg:leading-[1.35]">
              “Through Hooyo, I finally had someone who understood my language,
              my culture, and my questions. I did not walk through pregnancy
              alone.”
            </p>
            <footer className="mt-6">
              <cite className="not-italic text-[1.15rem] font-bold tracking-tight text-[#e8b84a] sm:text-xl">
                Amina H.
              </cite>
              <p className="mt-1 text-sm text-white/70 sm:text-[15px]">
                Hooyo perinatal navigation participant, Twin Cities
              </p>
            </footer>
          </blockquote>

          <div className="relative shrink-0">
            {/* Gold accent frame (Farm Africa leaf-shape border) */}
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
                src="/focus-areas/maternal-child-health.png"
                alt="Mother supported through culturally responsive perinatal care"
                fill
                className="object-cover object-[center_20%]"
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
            Minnesota is home to one of the largest Somali communities in the
            United States. Many families arrive with strength, culture, and
            resilience—yet face real barriers when navigating pregnancy,
            postpartum care, mental health, and a complex healthcare system.
          </p>
          <p className="font-semibold text-foreground">
            Yet too many mothers still walk that journey alone.
          </p>
          <p>
            Language gaps, cultural stigma, transportation, digital access, and
            distrust of systems leave immigrant families underserved. GHA was
            founded to close those gaps—locally in Minnesota and through
            partnerships that expand equitable care.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          <article>
            <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Access challenges
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gha-muted">
              Immigrant mothers often struggle to find culturally competent
              perinatal navigation, trusted mental health support, and clear
              pathways into clinics. Without advocates who speak their language
              and understand their culture, preventable risks go unaddressed.
            </p>
            <p className="mt-8 text-4xl font-bold tracking-tight text-gha-primary sm:text-5xl">
              1:1
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-gha-muted">
              guidance model—home visits, education, and healthcare advocacy so
              no mother is left without support.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Equity challenges
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gha-muted">
              Systemic inequities and barriers to culturally competent care
              shape outcomes for people of color. GHA addresses maternal health,
              mental health stigma, chronic disease prevention, and youth
              education together—because families need whole-system support, not
              fragmented services.
            </p>
            <p className="mt-8 text-4xl font-bold tracking-tight text-gha-primary sm:text-5xl">
              Holistic
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-gha-muted">
              approach across maternal &amp; child health, mental health, youth
              education, and chronic disease prevention.
            </p>
          </article>
        </div>

        {/* GHA in the USA */}
        <div className="mt-16 border-t border-gha-border pt-14">
          <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            GHA in the United States
          </h3>
          <div className="mt-5 space-y-5 text-base leading-relaxed text-gha-muted sm:text-[1.05rem]">
            <p>
              From our Roseville headquarters, Global Health Alliance works with
              families, clinics, and partners across Minnesota to improve
              healthcare access through education, training, and system
              development.
            </p>
            <p>
              We take a collaborative model—pairing community navigators with
              clinicians, digital tools, and local institutions—so care meets
              people where they are: at home, in community spaces, and in
              trusted clinics.
            </p>
          </div>

          <blockquote className="mt-10 border-l-2 border-gha-secondary pl-5">
            <p className="text-lg leading-relaxed font-medium text-balance text-foreground sm:text-xl">
              “The grant funding and partnership with HealtheMed’s leadership
              and technology will increase availability to many critical
              services. Participating Somali households will now have access to
              primary care, behavioral health and maternal health services.”
            </p>
            <footer className="mt-4 text-sm text-gha-muted">
              <cite className="not-italic font-semibold text-foreground">
                Ikraan Abdulle
              </cite>
              <span className="mt-0.5 block">CEO, Global Health Alliance</span>
            </footer>
          </blockquote>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <div>
              <h4 className="text-base font-bold tracking-tight text-foreground">
                Culturally responsive solutions
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-gha-muted sm:text-[15px]">
                Together with partners, we support mothers through Hooyo
                navigation, host community health education, expand mental
                health awareness, and connect families to primary and maternal
                care—online and in person.
              </p>
            </div>
            <div>
              <h4 className="text-base font-bold tracking-tight text-foreground">
                Deep community expertise
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-gha-muted sm:text-[15px]">
                Founded in 2019 as a grassroots nonprofit, GHA is rooted in the
                communities we serve. Our vision is an equitable service model
                where everyone can reach quality care that meets their unique
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <UsaLatestNewsSlider />

      <UsaWatchSection />

      {/* Countries we work in — Farm Africa style, above footer */}
      <div className="bg-[#1e345f] text-white">
        <div className="mx-auto grid max-w-[1100px] gap-10 px-6 py-14 sm:gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16 lg:px-8 lg:py-16">
          <div>
            <h3 className="type-h2 text-balance">
              Countries we
              <br className="hidden sm:block" /> work in
            </h3>
          </div>

          <ul className="flex flex-col gap-4 sm:gap-5">
            {[
              { label: "United States", href: "/gha-in-action/usa", current: true },
              { label: "Somalia", href: "/gha-in-action/somalia", current: false },
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
