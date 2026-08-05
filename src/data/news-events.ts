export type NewsEventCategory = "news" | "events";

export type NewsPressType =
  | "Update"
  | "Feature"
  | "Partnership"
  | "Press"
  | "Event";

export type NewsEventItem = {
  id: string;
  category: NewsEventCategory;
  title: string;
  excerpt: string;
  date: string;
  href: string;
  cta: string;
  cardType: "image" | "detail";
  image?: string;
  imageAlt?: string;
  /** Location label for featured news cards (e.g. Minnesota, Somalia) */
  location?: string;
  /** Dedicated news page fields */
  pressType?: NewsPressType;
  source?: string;
  whyItMatters?: string;
};

export const newsItems: NewsEventItem[] = [
  {
    id: "news-1",
    category: "news",
    title: "Newborn care training expands across partner hospitals",
    excerpt:
      "GHA is scaling competency-based newborn care training with partner hospitals in Somalia and Kenya, strengthening clinical teams to deliver lifesaving care in the first 28 days of life.",
    date: "12.06.2026",
    href: "/latest/news/newborn-care-kenya",
    cta: "Read the full story",
    cardType: "image",
    image: "/focus-areas/newborn-care.png",
    imageAlt: "Mothers with newborns at a community health gathering",
    location: "Kenya",
    pressType: "Update",
    source: "Global Health Alliance",
    whyItMatters:
      "Competency-based training at the bedside is how we turn partnerships into fewer preventable newborn deaths.",
  },
  {
    id: "news-2",
    category: "news",
    title: "Digital health tools reach frontline clinicians",
    excerpt:
      "Through DynaMed and Dynamic Health partnerships, GHA is equipping healthcare workers with evidence-based decision support at the point of care.",
    date: "09.05.2026",
    href: "/latest/news/digital-health-tools",
    cta: "Learn about digital health",
    cardType: "detail",
    image: "/focus-areas/digital-health.png",
    imageAlt: "Community health workers using a digital tablet",
    location: "Somalia",
    pressType: "Partnership",
    source: "DynaMed & Dynamic Health",
    whyItMatters:
      "Evidence at the point of care closes the gap between global guidelines and local clinical decisions.",
  },
  {
    id: "news-3",
    category: "news",
    title: "Partnerships advance health systems innovation",
    excerpt:
      "Collaborations with ministries of health, universities, and international partners are driving research, policy, and sustainable improvements across GHA programs.",
    date: "03.04.2026",
    href: "/latest/news/health-systems-partnerships",
    cta: "Explore partnerships",
    cardType: "image",
    image: "/focus-areas/training.png",
    imageAlt: "Healthcare training graduates with Global Health Alliance",
    location: "Global",
    pressType: "Feature",
    source: "Global Health Alliance",
    whyItMatters:
      "Systems change lasts when governments, universities, and communities build it together.",
  },
];

export const eventItems: NewsEventItem[] = [
  {
    id: "event-1",
    category: "events",
    title: "Community health outreach in Minneapolis",
    excerpt:
      "Join GHA for a community health event connecting families with resources, screenings, and education on maternal and child health in the Twin Cities.",
    date: "18.07.2026",
    href: "/latest/events/minneapolis-outreach",
    cta: "View event details",
    cardType: "image",
    image: "/focus-areas/community-education.png",
    imageAlt: "Health worker distributing supplies in a community clinic",
    location: "Minnesota",
    pressType: "Event",
    source: "GHA Minneapolis",
    whyItMatters:
      "Local outreach is where immigrant families meet culturally competent care—before crises escalate.",
  },
  {
    id: "event-2",
    category: "events",
    title: "Healthcare worker training graduation",
    excerpt:
      "Celebrate the latest cohort of GHA-trained healthcare professionals advancing newborn care, emergency medicine, and clinical leadership across partner facilities.",
    date: "02.07.2026",
    href: "/latest/events/training-graduation",
    cta: "See graduation highlights",
    cardType: "detail",
    image: "/who-we-are/history/uofm-training.png",
    imageAlt: "GHA training participants at the University of Minnesota",
    location: "Minnesota",
    pressType: "Event",
    source: "University of Minnesota",
    whyItMatters:
      "Every certificate is a clinician who can save lives where specialists are scarce.",
  },
  {
    id: "event-3",
    category: "events",
    title: "Hospital equipment handover in Galkacyo",
    excerpt:
      "GHA and partners marked the delivery of essential medical equipment to Galkacyo General Hospital, strengthening emergency and newborn care capacity in Somalia.",
    date: "15.06.2026",
    href: "/latest/events/galkacyo-handover",
    cta: "Read about the handover",
    cardType: "image",
    image: "/who-we-are/history/galkacyo-hospital.png",
    imageAlt: "Medical equipment installation at Galkacyo General Hospital",
    location: "Somalia",
    pressType: "Press",
    source: "Galkacyo General Hospital",
    whyItMatters:
      "Equipment without training fails; training without equipment stalls. This handover closes both gaps.",
  },
];

/** Combined feed for the dedicated /latest/news page (newest first). */
export const newsPageItems: NewsEventItem[] = [
  eventItems[0],
  eventItems[1],
  newsItems[0],
  eventItems[2],
  newsItems[1],
  newsItems[2],
];

export const newsEventCategories = [
  { id: "news" as const, label: "News" },
  { id: "events" as const, label: "Events" },
];

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

/** Formats `DD.MM.YYYY` to `D Month YYYY`. */
export function formatNewsDisplayDate(date: string) {
  const [day, month, year] = date.split(".");
  const monthIndex = Number(month) - 1;
  const monthName = MONTH_NAMES[monthIndex] ?? month;
  return `${Number(day)} ${monthName} ${year}`;
}
