export const countriesWeWorkIn = [
  {
    id: "usa",
    name: "United States",
    shortName: "United States",
    href: "/gha-in-action/usa",
    image: "/who-we-are/history/uofm-training.png",
    imageAlt:
      "GHA training participants at the University of Minnesota in the USA",
    blurb:
      "Culturally responsive care, perinatal navigation, and health equity programmes for immigrant families across Minnesota and beyond.",
    stats: [
      { value: "Roseville, MN", label: "Headquarters" },
      { value: "Hooyo", label: "Signature programme" },
    ],
    hoverStat: "2019",
    hoverCopy:
      "Since 2019, GHA has advanced health equity for immigrant families across Minnesota through programmes like Hooyo.",
  },
  {
    id: "somalia",
    name: "Somalia",
    shortName: "Somalia",
    href: "/gha-in-action/somalia",
    image: "/who-we-are/history/galkacyo-hospital.png",
    imageAlt:
      "Medical equipment installation at Galkacyo General Hospital in Somalia",
    blurb:
      "Hospital partnerships, clinician training, and medical supplies that strengthen care where communities need it most.",
    stats: [
      { value: "Galkacyo", label: "Hospital partnership" },
      { value: "Training", label: "Clinician focus" },
    ],
    hoverStat: "1+",
    hoverCopy:
      "GHA partners with hospitals like Galkacyo General to deliver equipment, training, and stronger care in Somalia.",
  },
] as const;

export type CountryWeWorkIn = (typeof countriesWeWorkIn)[number];
