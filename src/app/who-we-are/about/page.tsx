import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who We Are | Global Health Alliance",
  description:
    "Discover the mission, vision, and dedicated team behind Global Health Alliance, committed to improving global healthcare access and quality.",
};

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero — HIAS-style: title, lede, full-bleed image */}
      <header className="bg-gha-surface">
        <div className="mx-auto max-w-[1100px] px-6 pt-14 pb-10 lg:px-8 lg:pt-20 lg:pb-12">
          <h1 className="type-h1 text-balance">
            Who We Are
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gha-muted sm:text-xl">
            Global Health Alliance stands for a world in which healthcare is a
            universal right. Learn more about our mission, vision, and history.
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <Image
            src="/who-we-are/gha-team.png"
            alt="Global Health Alliance team members"
            width={1024}
            height={682}
            priority
            className="block h-auto w-full max-w-none"
            sizes="100vw"
          />
        </div>
      </header>

      {/* Mission */}
      <section className="border-t border-gha-border bg-gha-surface">
        <div className="mx-auto max-w-[800px] px-6 py-16 lg:px-8 lg:py-20">
          <h2 className="type-h2">
            Our Mission
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gha-muted">
            To bridge healthcare gaps by providing essential medical supplies,
            equipment, and educational resources to underserved communities
            globally. We work collaboratively with nonprofits, community
            stakeholders, corporate partners, and donors to equip hospitals and
            clinics, especially in developing nations and underserved areas
            within the U.S.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="border-t border-gha-border bg-background">
        <div className="mx-auto max-w-[800px] px-6 py-16 lg:px-8 lg:py-20">
          <h2 className="type-h2">
            Our Vision
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gha-muted">
            To create a world where healthcare is a universal right, accessible
            to all. We strive for equitable healthcare systems that address
            disparities and provide quality care for everyone, fostering hope,
            compassion, and a commitment to improving global health outcomes.
          </p>
        </div>
      </section>

      {/* History (HIAS pattern) */}
      <section className="border-t border-gha-border bg-gha-surface">
        <div className="mx-auto max-w-[800px] px-6 py-16 lg:px-8 lg:py-20">
          <h2 className="type-h2">
            Our History
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gha-muted">
            Global Health Alliance was incorporated on April 13, 2021, in the
            State of Minnesota. GHA is a grassroots nonprofit organization that
            provides services to tackle disparities and inequality in healthcare
            domestically. GHA also provides medical necessities to enhance the
            state of healthcare globally—strengthening systems through training,
            partnerships, innovation, and community engagement.
          </p>
          <Link
            href="/who-we-are/history"
            className="mt-8 inline-flex text-[15px] font-bold text-gha-primary transition-colors hover:text-gha-primary-hover"
          >
            Learn more about our history →
          </Link>
        </div>
      </section>

      {/* Our Work — two panels like HIAS */}
      <section className="border-t border-gha-border bg-background">
        <div className="mx-auto max-w-[1100px] px-6 py-16 lg:px-8 lg:py-20">
          <h2 className="type-h2">
            Our Work
          </h2>

          <ul className="mt-10 grid gap-6 lg:grid-cols-2">
            <li>
              <Link
                href="/what-we-do"
                className="group relative block overflow-hidden"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gha-primary/55 transition-colors group-hover:bg-gha-primary/65" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                    <h3 className="text-2xl font-bold text-white">What We Do</h3>
                    <p className="mt-2 max-w-md text-[15px] leading-relaxed text-white/90">
                      Maternal and newborn health, workforce training, digital
                      health, systems strengthening, and more.
                    </p>
                    <span className="mt-4 text-sm font-bold tracking-wide text-gha-secondary uppercase">
                      Learn more →
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/gha-in-action"
                className="group relative block overflow-hidden"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gha-primary/55 transition-colors group-hover:bg-gha-primary/65" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                    <h3 className="text-2xl font-bold text-white">
                      Where We Work
                    </h3>
                    <p className="mt-2 max-w-md text-[15px] leading-relaxed text-white/90">
                      From Minnesota to Kenya, Somalia, and beyond—see how GHA
                      strengthens care in communities worldwide.
                    </p>
                    <span className="mt-4 text-sm font-bold tracking-wide text-gha-secondary uppercase">
                      Learn more →
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-gha-primary text-white">
        <div className="mx-auto max-w-[800px] px-6 py-16 text-center lg:px-8 lg:py-20">
          <h2 className="type-h2 text-balance">
            Together, we can help create a world in which healthcare is
            accessible to all.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85">
            Your support helps us equip clinics, train providers, and expand
            lifesaving maternal and newborn care.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/donate"
              className="inline-flex h-11 items-center rounded-full bg-gha-secondary px-7 text-[13px] font-bold tracking-wide text-gha-secondary-fg uppercase transition-colors hover:bg-gha-secondary-hover"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-full border-2 border-white/80 px-7 text-[13px] font-bold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
          <div className="mt-10 space-y-1 text-sm text-white/75">
            <p>1970 Oakcrest Ave, Ste 203 · Roseville, MN 55113</p>
            <p>
              <a href="tel:+16125996445" className="hover:text-white">
                (612) 599-6445
              </a>
              {" · "}
              <a href="mailto:info@gha21.org" className="hover:text-white">
                info@gha21.org
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
