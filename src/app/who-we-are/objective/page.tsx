import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Organizational Objectives | Global Health Alliance",
  description:
    "Strengthen health systems, improve maternal and child health, build workforce capacity, and more—GHA’s organizational objectives.",
};

const objectives = [
  {
    title: "Strengthen Health Systems",
    body: "Support national and local health institutions through technical assistance, infrastructure development, and improved healthcare management.",
  },
  {
    title: "Improve Maternal, Newborn and Child Health",
    body: "Reduce preventable maternal and child morbidity and mortality by increasing access to quality reproductive, maternal, newborn, child, and adolescent health services.",
  },
  {
    title: "Build Health Workforce Capacity",
    body: "Enhance the knowledge and skills of healthcare professionals through continuous education, clinical mentorship, research, and professional development programs.",
  },
  {
    title: "Expand Access to Essential Health Services",
    body: "Improve access to preventive, curative, rehabilitative, and emergency health services for underserved and vulnerable populations.",
  },
  {
    title: "Promote Public Health and Disease Prevention",
    body: "Strengthen community awareness, health promotion, disease surveillance, immunization, nutrition, water, sanitation, hygiene (WASH), and outbreak preparedness.",
  },
  {
    title: "Advance Digital Health and Innovation",
    body: "Leverage digital technologies, health information systems, and innovative solutions to improve healthcare delivery, data management, and decision-making.",
  },
  {
    title: "Support Humanitarian and Emergency Response",
    body: "Provide timely, coordinated, and effective humanitarian assistance during emergencies, disease outbreaks, disasters, and conflicts.",
  },
  {
    title: "Foster Research, Learning, and Evidence-Based Practice",
    body: "Conduct operational research, monitoring and evaluation, and knowledge-sharing initiatives to improve healthcare outcomes and inform policy.",
  },
  {
    title: "Strengthen Partnerships and Advocacy",
    body: "Collaborate with governments, academic institutions, development partners, civil society, and communities to promote equitable healthcare policies and sustainable development.",
  },
  {
    title: "Promote Organizational Sustainability",
    body: "Develop strong governance systems, financial accountability, resource mobilization, and institutional capacity to ensure long-term organizational growth.",
  },
] as const;

export default function ObjectivesPage() {
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
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Organizational Objectives
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gha-muted">
            Ten priorities that guide how Global Health Alliance strengthens
            systems, expands access, and builds lasting health impact.
          </p>
        </div>
      </header>

      <section className="bg-gha-surface">
        <div className="mx-auto max-w-[1100px] px-6 py-16 lg:px-8 lg:py-20">
          <ol className="grid gap-6 sm:grid-cols-2">
            {objectives.map((item, index) => (
              <li
                key={item.title}
                className="group rounded-[1.25rem] border border-gha-border bg-background p-6 transition-colors duration-300 hover:border-gha-secondary hover:bg-gha-secondary sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gha-primary text-[13px] font-bold text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-black">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-gha-muted transition-colors duration-300 group-hover:text-black">
                      {item.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

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
