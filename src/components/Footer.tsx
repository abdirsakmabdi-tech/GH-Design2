import type { ReactNode } from "react";
import Link from "next/link";
import { GhaLogo } from "@/components/GhaLogo";
import { FooterNewsletter } from "@/components/FooterNewsletter";

const navLinks = [
  { label: "About", href: "/who-we-are/about" },
  { label: "Leadership", href: "/who-we-are/leadership" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Contact", href: "/contact" },
  { label: "Donate", href: "/donate" },
] as const;

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <path d="M4.5 5.5h2.8v9H4.5v-9zm1.4-4.6a1.6 1.6 0 110 3.2 1.6 1.6 0 010-3.2zM9.2 5.5h2.7v1.2h.04c.38-.72 1.3-1.48 2.68-1.48 2.87 0 3.4 1.89 3.4 4.35v4.91H15.1v-4.36c0-1.04-.02-2.38-1.45-2.38-1.45 0-1.67 1.14-1.67 2.31v4.43H9.2V5.5z" />
    ),
  },
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
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <path d="M16.5 7.2c-.5.2-1 .4-1.6.5.6-.4 1-9 1.2-1.4-.6.3-1.2.6-1.8.7-.5-.6-1.3-9-2.2-.9-.9 0-1.7.5-2.2 1.3-.8-.1-1.5-.4-2.2-.8-.7-.4-1.3-1-1.7-1.7-.4-.7-.6-1.5-.5-2.3 0-.8.3-1.6.8-2.2 1.5 0 3 .5 4.1 1.5-1.3 0-2.5-.4-3.6-1.1 1.5 1.8 3.7 3 6.1 3.1-.1.3-.2.5-.2.8 0 1.9 1.5 3.4 3.4 3.4 1.1 0 2.1-.5 2.8-1.3.9.2 1.8.5 2.6.9-.3-.9-.9-1.7-1.7-2.2.8 0 1.5.3 2.2.6-.5-.9-1.3-1.6-2.2-2z" />
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
      className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-[#b8e8f4] transition-opacity hover:opacity-85"
    >
      <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        {icon}
      </svg>
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#b8e8f4]">
      <div className="mx-auto max-w-[1200px] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <GhaLogo priority={false} />

          <div className="lg:max-w-[520px] lg:text-right">
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Building resilient healthcare systems worldwide
            </h2>
            <FooterNewsletter />
          </div>
        </div>

        <div className="mt-12 border-t border-foreground/20 pt-6 sm:mt-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-base font-bold text-foreground">Global Health Alliance</p>

            <nav
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-foreground"
              aria-label="Footer"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-opacity hover:opacity-70"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <SocialIcon key={link.label} {...link} />
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 border-t border-foreground/20 pt-6 text-sm text-foreground/85 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Global Health Alliance — Advancing health equity globally</p>
            <div className="flex flex-wrap gap-6">
              <Link href="/who-we-are/meal-policy" className="hover:opacity-70">
                Privacy Policy
              </Link>
              <Link href="/who-we-are/documents" className="hover:opacity-70">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
