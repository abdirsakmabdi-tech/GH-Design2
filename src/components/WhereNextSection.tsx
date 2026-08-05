"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const whereNextLinks = [
  {
    title: "What we do",
    href: "/what-we-do",
    color: "#e8b84a",
    body: "We strengthen health systems and deliver life-saving care—from maternal and newborn health to digital tools, training, and community education.",
  },
  {
    title: "Our programmes",
    href: "/what-we-do",
    color: "#59c2e2",
    body: "Browse GHA focus areas to learn how we partner with communities on maternal care, clinician training, hospital support, and health equity.",
  },
  {
    title: "Countries we work in",
    href: "/gha-in-action/countries",
    color: "#6bc9a8",
    body: "Global Health Alliance works across Minnesota and Somalia—building culturally responsive care and stronger health systems where they are needed most.",
  },
] as const;

const featureCards = [
  {
    title: "Partnerships & innovation",
    href: "/what-we-do/partnerships",
    image: "/who-we-are/history/panel-discussion.png",
    imageAlt: "GHA partners and community leaders in discussion",
  },
  {
    title: "Who we are",
    href: "/who-we-are/about",
    image: "/who-we-are/gha-team.png",
    imageAlt: "Global Health Alliance team",
  },
] as const;

export function WhereNextSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !accepted) return;
    setStatus("sent");
    setName("");
    setEmail("");
    setAccepted(false);
  }

  return (
    <section
      className="bg-white text-foreground"
      aria-labelledby="where-next-heading"
    >
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)_minmax(0,0.85fr)] lg:items-start lg:gap-8 lg:px-8 lg:py-20">
        {/* Left — Where next links */}
        <div>
          <h2 id="where-next-heading" className="type-h2 text-foreground">
            Where next?
          </h2>

          <ul className="mt-8 divide-y divide-gha-border border-y border-gha-border">
            {whereNextLinks.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="block py-6 transition-opacity hover:opacity-90"
                >
                  <h3
                    className="text-lg font-bold tracking-tight sm:text-xl"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-gha-muted">
                    {item.body}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle — image feature cards */}
        <ul className="flex flex-col gap-4">
          {featureCards.map((card) => (
            <li key={card.title}>
              <Link
                href={card.href}
                className="group relative block aspect-[16/10] overflow-hidden rounded-lg"
              >
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 360px"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute bottom-4 left-4 text-lg font-bold tracking-tight text-white sm:text-xl">
                  {card.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right — newsletter */}
        <aside className="rounded-sm border-2 border-[#1e345f]/20 bg-[#f4efe6] p-6 text-[#1e345f] sm:p-7 lg:p-8">
          <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
            Sign up for updates
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[#1e345f]/85">
            Subscribe to our newsletter to stay up to date with our latest news
            and projects.
          </p>

          {status === "sent" ? (
            <p className="mt-8 text-sm font-medium text-gha-success">
              Thanks — you’re on the list.
            </p>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <label className="block">
                <span className="sr-only">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-sm border border-[#1e345f]/25 bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-gha-primary"
                />
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-sm border border-[#1e345f]/25 bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-gha-primary"
                />
              </label>
              <label className="flex items-start gap-2.5 text-sm text-[#1e345f]/90">
                <input
                  type="checkbox"
                  required
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-0.5 h-4 w-4 accent-gha-primary"
                />
                <span>
                  Accept our{" "}
                  <Link
                    href="/who-we-are/meal-policy"
                    className="underline underline-offset-2 hover:text-gha-primary"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </label>
              <button
                type="submit"
                className="mt-2 w-full rounded-sm bg-[#1e345f] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gha-primary"
              >
                Subscribe
              </button>
            </form>
          )}
        </aside>
      </div>
    </section>
  );
}
