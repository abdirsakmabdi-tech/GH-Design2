import Image from "next/image";
import Link from "next/link";
import { CountriesWorkMap } from "@/components/CountriesWorkMap";
import { WhereNextSection } from "@/components/WhereNextSection";
import { countriesWeWorkIn } from "@/data/countries";

export function CountriesPage() {
  return (
    <>
      {/* Map hero — Farm Africa layout, GHA navy */}
      <section
        className="relative overflow-hidden bg-[#1e345f] text-white"
        aria-labelledby="countries-page-heading"
      >
        {/* Dotted world map — full-section soft background (no black) */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden="true"
        >
          <Image
            src="/gha-in-action/world-map-dots.png"
            alt=""
            fill
            className="object-cover object-center opacity-[0.015] invert mix-blend-screen"
            sizes="100vw"
            priority
          />
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1200px] items-start gap-10 px-6 py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 lg:px-8 lg:pt-24 lg:pb-24">
          <div>
            <h1
              id="countries-page-heading"
              className="type-h1 text-balance text-white"
            >
              Countries we work in
            </h1>
            <p className="mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-white/85 sm:text-lg">
              Global Health Alliance works across Minnesota and Somalia—building
              culturally responsive care, training clinicians, and strengthening
              health systems where they are needed most.
            </p>

            {/* Dedicated country cards — left-aligned under content */}
            <ul className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {countriesWeWorkIn.map((country) => (
                <li key={country.id}>
                  <Link
                    href={country.href}
                    aria-label={`Explore our work in ${country.name}`}
                    className="group flex h-full flex-col overflow-hidden rounded-xl bg-[#f4efe6] p-3 text-left transition-transform duration-300 hover:-translate-y-0.5 sm:p-3.5"
                  >
                    <h2 className="text-base font-bold tracking-tight text-[#1e345f] sm:text-lg">
                      {country.name}
                    </h2>

                    <div className="relative mt-2.5 aspect-[16/9] w-full overflow-hidden rounded-lg bg-gha-border/40">
                      <Image
                        src={country.image}
                        alt={country.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, 280px"
                      />

                      <span
                        className="absolute right-2 bottom-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gha-secondary text-gha-secondary-fg shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-gha-secondary-hover group-hover:shadow-md"
                        aria-hidden="true"
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M4 9h10M10 5l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-w-0 lg:sticky lg:top-32">
            <CountriesWorkMap />
          </div>
        </div>
      </section>

      <WhereNextSection />
    </>
  );
}
