import Link from "next/link";

const workAreas = [
  {
    slug: "maternal-child-health",
    title: "Maternal & Child Health",
    description:
      "Improving health outcomes for women, newborns, infants, children, and adolescents across the continuum of care.",
  },
  {
    slug: "newborn-care",
    title: "Newborn Care & Neonatal Health",
    description:
      "Evidence-based care in the first 28 days of life to reduce preventable newborn deaths and disabilities.",
  },
  {
    slug: "training",
    title: "Healthcare Worker Training & Capacity Building",
    description:
      "Competency-based education, mentorship, and continuous professional development for a skilled health workforce.",
  },
  {
    slug: "digital-health",
    title: "Digital Health Solutions (DynaMed & Dynamic Health)",
    description:
      "Evidence-based digital tools and health technologies that improve clinical decisions and system efficiency.",
  },
  {
    slug: "health-systems",
    title: "Health Systems Strengthening",
    description:
      "Resilient, well-governed systems that deliver equitable, people-centered care.",
  },
];

export function OurWork() {
  return (
    <section
      className="bg-gha-primary text-white"
      aria-labelledby="our-work-heading"
    >
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)] lg:items-start lg:gap-16 lg:px-8 lg:py-20">
        <div className="lg:sticky lg:top-28 lg:pt-2">
          <p className="text-sm font-medium text-white/75">What we do</p>
          <span
            className="mt-3 block h-px w-16 bg-gha-secondary"
            aria-hidden="true"
          />
          <h2
            id="our-work-heading"
            className="mt-6 max-w-sm text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]"
          >
            Our work focuses on five core areas
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/85">
            From maternal and newborn health to training, digital tools, and
            systems strengthening—GHA delivers programs that improve care where
            it matters most.
          </p>
          <Link
            href="/what-we-do"
            className="mt-8 inline-flex h-10 items-center rounded-full bg-white px-5 text-[12px] font-bold tracking-wide text-gha-primary uppercase transition-colors hover:bg-gha-secondary hover:text-black"
          >
            What We Do
          </Link>
        </div>

        <div className="ml-auto w-full max-w-2xl lg:justify-self-end">
          <div className="overflow-hidden rounded-2xl border border-gha-border bg-white shadow-[0_12px_40px_rgba(61,96,164,0.1)]">
            <ol className="divide-y divide-gha-border">
              {workAreas.map((area, index) => (
                <li key={area.slug}>
                  <Link
                    href={`/what-we-do/${area.slug}`}
                    className="group block px-6 py-6 text-left transition-colors hover:bg-gha-secondary sm:px-8 sm:py-7"
                  >
                    <h3 className="text-lg font-bold tracking-tight text-gha-primary sm:text-xl">
                      {index + 1}. {area.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gha-muted">
                      {area.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
