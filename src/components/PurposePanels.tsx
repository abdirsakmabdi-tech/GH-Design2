import Image from "next/image";
import Link from "next/link";

const panels = [
  {
    id: "somalia",
    headline: "Somalia",
    cta: "Explore our work",
    href: "/gha-in-action/somalia",
    image: "/who-we-are/history/galkacyo-hospital.png",
    imageAlt:
      "Medical equipment installation at Galkacyo General Hospital in Somalia",
    imagePosition: "center 40%",
  },
  {
    id: "usa",
    headline: "USA",
    cta: "Explore our work",
    href: "/gha-in-action/global-initiatives",
    image: "/who-we-are/history/uofm-training.png",
    imageAlt:
      "GHA training participants at the University of Minnesota in the USA",
    imagePosition: "center center",
  },
] as const;

export function PurposePanels() {
  return (
    <section
      className="bg-background py-12 sm:py-14 lg:py-16"
      aria-labelledby="global-work-heading"
    >
      <div className="mx-auto mb-8 max-w-2xl px-6 text-center sm:mb-10 lg:px-8">
        <h2
          id="global-work-heading"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Our Global Work
        </h2>
        <p className="mt-5 text-base leading-relaxed text-gha-muted sm:text-lg">
          From community programs in Minnesota to hospital partnerships in
          Somalia, GHA brings care, training, and resources to the places where
          they are needed most.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 px-6 lg:grid-cols-2 lg:gap-5 lg:px-8">
        {panels.map((panel) => (
          <Link
            key={panel.id}
            href={panel.href}
            className="group relative block min-h-[420px] overflow-hidden rounded-[1.25rem] sm:min-h-[480px] lg:min-h-[560px]"
          >
            <Image
              src={panel.image}
              alt={panel.imageAlt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              style={{ objectPosition: panel.imagePosition }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-gha-primary from-0% via-gha-primary/90 via-35% to-transparent to-100% transition-opacity duration-300 group-hover:via-gha-primary"
              aria-hidden="true"
            />

            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
              <h2 className="max-w-[14ch] text-3xl font-bold tracking-tight text-white text-balance drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
                {panel.headline}
              </h2>

              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/50 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-gha-primary group-hover:gap-3">
                {panel.cta}
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
