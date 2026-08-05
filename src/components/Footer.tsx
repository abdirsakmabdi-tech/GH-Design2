"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { GhaLogo } from "@/components/GhaLogo";

const usefulLinksLeft = [
  { label: "News & Events", href: "/latest/news" },
  { label: "Privacy Policy", href: "/who-we-are/meal-policy" },
  { label: "Documents", href: "/who-we-are/documents" },
  { label: "Leadership", href: "/who-we-are/leadership" },
  { label: "About Us", href: "/who-we-are/about" },
] as const;

const usefulLinksRight = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "GHA in the USA", href: "/gha-in-action/usa" },
  { label: "Contact Us", href: "/contact" },
  { label: "Donate", href: "/donate" },
] as const;

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <path d="M14.5 5.5h-2.4c-1.9 0-2.3.9-2.3 2.2v2.9H7.5v3.3h2.3v8.4h3.4v-8.4h2.9l.5-3.3h-3.4V8.1c0-.8.2-1.2 1.3-1.2h2V5.5z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <path d="M10 7.2a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6zm0 4.6a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zm4.7-4.9a.66.66 0 11-1.32 0 .66.66 0 011.32 0zM6.2 5.1h7.6A3.1 3.1 0 0117 8.2v7.6a3.1 3.1 0 01-3.2 3.1H6.2A3.1 3.1 0 013 15.8V8.2a3.1 3.1 0 013.2-3.1zm7.6 1.4H6.2c-1 0-1.8.8-1.8 1.8v7.6c0 1 .8 1.8 1.8 1.8h7.6c1 0 1.8-.8 1.8-1.8V8.2c0-1-.8-1.8-1.8-1.8z" />
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <path d="M16.8 7.2c-.2-.7-.7-1.2-1.4-1.4C14.2 5.5 10 5.5 10 5.5s-4.2 0-5.4.3c-.7.2-1.2.7-1.4 1.4C3 8.4 3 10.5 3 10.5s0 2.1.2 3.3c.2.7.7 1.2 1.4 1.4 1.2.3 5.4.3 5.4.3s4.2 0 5.4-.3c.7-.2 1.2-.7 1.4-1.4.2-1.2.2-3.3.2-3.3s0-2.1-.2-3.3zM8.8 12.7V8.3l3.6 2.2-3.6 2.2z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <path d="M4.5 5.5h2.8v9H4.5v-9zm1.4-4.6a1.6 1.6 0 110 3.2 1.6 1.6 0 010-3.2zM9.2 5.5h2.7v1.2h.04c.38-.72 1.3-1.48 2.68-1.48 2.87 0 3.4 1.89 3.4 4.35v4.91H15.1v-4.36c0-1.04-.02-2.38-1.45-2.38-1.45 0-1.67 1.14-1.67 2.31v4.43H9.2V5.5z" />
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <path d="M4.2 4.5h2.8l3.1 4.3 3.6-4.3H16l-4.5 5.3L16.5 15.5h-2.8l-3.3-4.5-3.8 4.5H4l4.8-5.6L4.2 4.5z" />
    ),
  },
] as const;

function SocialIcon({
  label,
  href,
  icon,
}: {
  label: string;
  href: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/25 text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-[#e8b84a]"
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        {icon}
      </svg>
    </a>
  );
}

function FooterSearch() {
  const [query, setQuery] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    window.location.href = `/latest/news?q=${encodeURIComponent(trimmed)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 w-full max-w-[280px]">
      <label htmlFor="footer-search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <input
          id="footer-search"
          type="search"
          name="q"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search..."
          suppressHydrationWarning
          className="h-11 w-full rounded-full border border-gha-border bg-white py-2 pr-11 pl-4 text-sm text-foreground outline-none placeholder:text-gha-muted/70 focus:border-gha-primary"
        />
        <button
          type="submit"
          suppressHydrationWarning
          className="absolute top-1/2 right-1.5 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-gha-primary transition-colors hover:bg-gha-primary hover:text-white"
          aria-label="Submit search"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="11"
              cy="11"
              r="6.5"
              stroke="currentColor"
              strokeWidth="1.75"
            />
            <path
              d="M16 16l4 4"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-[#f4efe6] text-foreground">
      {/* Soft leaf wash — Farm Africa style atmosphere */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 opacity-[0.12]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 40% 60% at 8% 100%, #3d60a4 0%, transparent 70%),
            radial-gradient(ellipse 30% 50% at 22% 100%, #59c2e2 0%, transparent 65%)
          `,
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 pt-12 pb-8 sm:px-8 sm:pt-14 lg:px-10 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)_minmax(0,0.95fr)] lg:items-start lg:gap-12">
          {/* Left — brand + search */}
          <div>
            <GhaLogo priority={false} />
            <p className="mt-5 max-w-[240px] text-sm leading-relaxed text-gha-muted">
              Advancing health equity for immigrant families and underserved
              communities—locally and globally.
            </p>
            <FooterSearch />
          </div>

          {/* Middle — useful links */}
          <div className="border-t border-gha-border pt-8 lg:border-t-0 lg:pt-0">
            <h2 className="text-lg font-bold tracking-tight text-foreground">
              Useful links
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-foreground">
              <ul className="flex flex-col gap-3">
                {usefulLinksLeft.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-gha-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3">
                {usefulLinksRight.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-gha-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Follow us yellow panel */}
          <aside className="bg-[#e8b84a] p-6 sm:p-7">
            <h2 className="text-lg font-bold tracking-tight text-foreground">
              Follow us
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">
              Head over to our social media channels to stay up to date and join
              the conversation.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              {socialLinks.map((link) => (
                <SocialIcon key={link.label} {...link} />
              ))}
            </div>
          </aside>
        </div>

        {/* Legal bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-gha-border pt-6 text-xs leading-relaxed text-gha-muted sm:mt-12 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <p>
            Global Health Alliance — 1970 Oakcrest Ave, Ste 203, Roseville, MN
            55113. © {year} All rights reserved.
          </p>
          <p className="shrink-0">
            <Link href="/contact" className="hover:text-gha-primary">
              Contact
            </Link>
            <span aria-hidden="true"> · </span>
            <Link
              href="/who-we-are/meal-policy"
              className="hover:text-gha-primary"
            >
              Privacy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
