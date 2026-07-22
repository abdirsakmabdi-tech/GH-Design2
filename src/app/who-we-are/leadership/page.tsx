import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  boardMembers,
  directors,
  featuredLeaders,
  type Leader,
} from "@/data/leadership";

export const metadata: Metadata = {
  title: "Leadership | Global Health Alliance",
  description:
    "Meet the board members and directors leading Global Health Alliance’s work to improve healthcare access and quality worldwide.",
};

function Initials({ name }: { name: string }) {
  const initials = name
    .replace(/^(Dr\.|Ms\.|Mr\.)\s+/i, "")
    .split(/\s+/)
    .filter((p) => !/^(RRT|MSW|LGSW)$/i.test(p))
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gha-primary to-gha-secondary text-3xl font-bold text-white"
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

function LeaderCard({
  person,
  index = 0,
}: {
  person: Leader;
  index?: number;
}) {
  return (
    <article
      className="leader-card group gha-rise"
      style={{ animationDelay: `${Math.min(index, 8) * 0.07}s` }}
    >
      <div className="relative mb-5 aspect-[4/5] max-h-[420px] w-full overflow-hidden rounded-[1.25rem] bg-utility-bg">
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <Initials name={person.name} />
        )}
      </div>

      <div>
        <h3 className="text-2xl font-bold tracking-tight">{person.name}</h3>
        <p className="mt-1 text-sm font-semibold tracking-wide text-gha-primary uppercase">
          {person.role}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-gha-muted">
          {person.bio}
        </p>
      </div>
    </article>
  );
}

function LeaderGrid({
  title,
  people,
}: {
  title?: string;
  people: Leader[];
}) {
  return (
    <div>
      {title ? (
        <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>
      ) : null}
      <ul className="grid gap-10 sm:grid-cols-2">
        {people.map((person, index) => (
          <li key={person.name}>
            <LeaderCard person={person} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function LeadershipPage() {
  return (
    <main className="bg-background text-foreground">
      <header className="relative overflow-hidden border-b border-gha-border bg-gha-surface">
        <div
          className="gha-wash pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 0% 0%, color-mix(in srgb, var(--gha-secondary) 16%, transparent), transparent 60%), radial-gradient(ellipse 45% 55% at 100% 10%, color-mix(in srgb, var(--gha-primary) 12%, transparent), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-[1100px] px-6 pt-14 pb-10 lg:px-8 lg:pt-20 lg:pb-12">
          <p className="gha-rise text-sm font-semibold tracking-[0.14em] text-gha-secondary uppercase">
            Who We Are
          </p>
          <h1 className="gha-rise gha-rise-delay-1 mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Our Leadership
          </h1>
          <p className="gha-rise gha-rise-delay-2 mt-5 max-w-2xl text-lg leading-relaxed text-gha-muted">
            Our dedicated team comprises healthcare professionals, educators, and
            community leaders who share a passion for improving global health.
            With deep roots in Minnesota and extensive international experience,
            our leaders drive our mission to improve healthcare locally and
            globally.
          </p>
        </div>
      </header>

      <section className="bg-background">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-16 px-6 py-16 lg:gap-20 lg:px-8 lg:py-20">
          <LeaderGrid people={featuredLeaders} />
          <LeaderGrid title="Board Members" people={boardMembers} />
          <LeaderGrid title="Directors" people={directors} />

          <p>
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
