"use client";

import Link from "next/link";
import { useState } from "react";
import { countriesWeWorkIn } from "@/data/countries";

const mapMeta = {
  usa: {
    mask: "/gha-in-action/usa-map-mask.png",
    aspect: "aspect-[4/3]",
    maxWidth: "max-w-[620px]",
    labelSize: "clamp(1rem, 2.4vw, 1.35rem)",
  },
  somalia: {
    mask: "/gha-in-action/somalia-map-mask.png",
    aspect: "aspect-[576/385]",
    maxWidth: "max-w-[280px]",
    labelSize: "clamp(0.95rem, 2.2vw, 1.15rem)",
  },
} as const;

/** Label drawn along Somalia’s N→S spine so it stays inside the silhouette */
function SomaliaMapLabel() {
  return (
    <svg
      viewBox="0 0 576 385"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        {/* Spine through opaque mask centroids (N→S through the Horn body) */}
        <path
          id="somalia-label-path"
          d="M 440 70 C 450 120, 458 160, 430 210 C 395 255, 350 290, 310 330"
        />
      </defs>
      <text
        fill="#0d0d0d"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "26px",
          fontWeight: 600,
          letterSpacing: "0.14em",
        }}
      >
        <textPath
          href="#somalia-label-path"
          startOffset="4%"
          method="align"
          spacing="auto"
        >
          Somalia
        </textPath>
      </text>
    </svg>
  );
}

/**
 * Country silhouettes — yellow on hover. Dedicated cards live below in CountriesPage.
 */
export function CountriesWorkMap() {
  const [hovered, setHovered] = useState<"usa" | "somalia" | null>(null);

  return (
    <div
      className="relative w-full"
      aria-label="Map of countries where GHA works"
    >
      <div className="mx-auto flex w-full max-w-[620px] flex-col items-center gap-1 sm:gap-2">
        {countriesWeWorkIn.map((country) => {
          const id = country.id as "usa" | "somalia";
          const meta = mapMeta[id];
          const isHovered = hovered === id;

          return (
            <Link
              key={country.id}
              href={country.href}
              className={`group relative block w-full ${meta.maxWidth} outline-none focus-visible:ring-2 focus-visible:ring-[#e8b84a] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1e345f]`}
              aria-label={`${country.name} — explore our work`}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(id)}
              onBlur={() => setHovered(null)}
            >
              <div
                className={`relative ${meta.aspect} w-full transition-transform duration-300 ${
                  isHovered ? "scale-[1.03]" : "scale-100"
                }`}
              >
                <div
                  className={`absolute inset-0 transition-colors duration-300 ${
                    isHovered ? "bg-[#e8b84a]" : "bg-gha-secondary"
                  }`}
                  style={{
                    WebkitMaskImage: `url(${meta.mask})`,
                    maskImage: `url(${meta.mask})`,
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                  }}
                  aria-hidden="true"
                />

                {id === "somalia" ? (
                  <SomaliaMapLabel />
                ) : (
                  <p
                    className="pointer-events-none absolute inset-0 flex items-start justify-center pt-[28%] text-center font-semibold tracking-tight text-[#0d0d0d] sm:pt-[30%]"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: meta.labelSize,
                      transform: "translateX(-6%)",
                    }}
                  >
                    {country.name}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
