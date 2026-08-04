"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GhaLogo } from "./GhaLogo";

const utilityLinks = [
  { label: "Frequently Asked Questions (FAQs)", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];

type NavLink = { label: string; href: string };

type MegaColumn = {
  heading: string;
  href?: string;
  links: NavLink[];
};

type NavItem = {
  id: string;
  label: string;
  href: string;
  description: string;
  layout: "columns" | "checklist" | "simple";
  columns?: MegaColumn[];
  sectionHeading?: string;
  links?: NavLink[];
};

const navItems: NavItem[] = [
  {
    id: "who-we-are",
    label: "Who We Are",
    href: "/who-we-are",
    description:
      "Drawing on our values and history, we stand for a world in which communities find welcome, safety, health, and opportunity.",
    layout: "columns",
    columns: [
      {
        heading: "About us",
        links: [
          { label: "Our history", href: "/who-we-are/history" },
          { label: "Our Mission & Vision", href: "/who-we-are/about" },
          { label: "Our Objective", href: "/who-we-are/objective" },
          { label: "Core Value", href: "/who-we-are/core-value" },
        ],
      },
      {
        heading: "Organization",
        links: [
          { label: "Structure", href: "/who-we-are/structure" },
          { label: "Leadership", href: "/who-we-are/leadership" },
          { label: "Our partner", href: "/who-we-are/partners" },
        ],
      },
      {
        heading: "Policy",
        links: [
          { label: "Meal Policy", href: "/who-we-are/meal-policy" },
          { label: "Visibility Guideline", href: "/who-we-are/visibility" },
          { label: "CRM Policy", href: "/who-we-are/crm-policy" },
        ],
      },
      {
        heading: "Documents",
        links: [
          { label: "Profile", href: "/who-we-are/profile" },
          { label: "Strategic Plan", href: "/who-we-are/strategic-plan" },
        ],
      },
    ],
  },
  {
    id: "what-we-do",
    label: "What We Do",
    href: "/what-we-do",
    description:
      "We strengthen health systems and deliver life-saving care—from maternal and newborn health to digital tools, training, and community education.",
    layout: "checklist",
    sectionHeading: "Focus Area",
    links: [
      {
        label: "Maternal & Child Health",
        href: "/what-we-do/maternal-child-health",
      },
      {
        label: "Newborn Care & Neonatal Health",
        href: "/what-we-do/newborn-care",
      },
      {
        label: "Healthcare Worker Training & Capacity Building",
        href: "/what-we-do/training",
      },
      {
        label: "Digital Health Solutions (DynaMed & Dynamic Health)",
        href: "/what-we-do/digital-health",
      },
      {
        label: "Emergency & Essential Newborn Care (ENC)",
        href: "/what-we-do/enc",
      },
      {
        label: "Respiratory Care & Oxygen Therapy",
        href: "/what-we-do/respiratory-care",
      },
      {
        label: "Medical Equipment & Hospital Support",
        href: "/what-we-do/medical-equipment",
      },
      {
        label: "Community Health Education & Awareness",
        href: "/what-we-do/community-education",
      },
      {
        label: "Health Systems Strengthening",
        href: "/what-we-do/health-systems",
      },
      {
        label: "Partnerships, Research & Innovation",
        href: "/what-we-do/partnerships",
      },
    ],
  },
  {
    id: "gha-in-action",
    label: "GHA in Action",
    href: "/gha-in-action",
    description:
      "See how our work takes shape through global programs and locally led initiatives that put communities at the center.",
    layout: "columns",
    columns: [
      {
        heading: "Global",
        links: [
          {
            label: "Global Initiatives",
            href: "/gha-in-action/global-initiatives",
          },
        ],
      },
      {
        heading: "Local",
        links: [
          {
            label: "Local Led Initiatives in Somalia",
            href: "/gha-in-action/somalia",
          },
        ],
      },
    ],
  },
];

const donateItems = [
  { label: "Give Once", href: "/donate" },
  { label: "Give Monthly", href: "/donate/monthly" },
  { label: "Other Ways to Give", href: "/donate/ways" },
];

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 1l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1.5 1.5L6 6l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 20l-3.5-3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

function MegaMenuLink({
  href,
  label,
  onNavigate,
  size = "sm",
}: {
  href: string;
  label: string;
  onNavigate: () => void;
  size?: "sm" | "lg";
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`group inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap font-bold text-white transition-opacity hover:opacity-80 ${
        size === "lg" ? "text-lg" : "text-[12px] leading-snug"
      }`}
    >
      <span>{label}</span>
      <ChevronRight className="mt-px shrink-0 opacity-80 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

function MegaMenuPanel({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  return (
    <div className="bg-gha-primary text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-16 lg:px-8 lg:py-14">
        <div>
          <h2 className="text-3xl font-black tracking-tight lg:text-[32px]">
            {item.label}
          </h2>
          <p className="mt-4 max-w-md text-[12px] leading-relaxed text-white">
            {item.description}
          </p>
        </div>

        <div>
          {item.layout === "columns" && item.columns && (
            <div
              className={
                item.columns.length <= 2
                  ? "flex flex-wrap gap-x-8 gap-y-8"
                  : `grid gap-8 sm:grid-cols-2 ${
                      item.columns.length >= 4
                        ? "xl:grid-cols-4"
                        : item.columns.length === 3
                          ? "xl:grid-cols-3"
                          : ""
                    }`
              }
            >
              {item.columns.map((column) => (
                <div key={column.heading}>
                  <p className="mb-3 text-[13px] font-semibold tracking-wide text-white/75 uppercase">
                    {column.heading}
                  </p>
                  <ul className="space-y-2.5">
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <MegaMenuLink
                          href={link.href}
                          label={link.label}
                          onNavigate={onNavigate}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {item.layout === "checklist" && item.links && (
            <div>
              {item.sectionHeading && (
                <p className="mb-4 text-[13px] font-semibold tracking-wide text-white/75 uppercase">
                  {item.sectionHeading}
                </p>
              )}
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {item.links.map((link) => (
                  <li key={link.href}>
                    <MegaMenuLink
                      href={link.href}
                      label={link.label}
                      onNavigate={onNavigate}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.layout === "simple" && item.links && (
            <ul className="space-y-3">
              {item.links.map((link) => (
                <li key={link.href}>
                  <MegaMenuLink
                    href={link.href}
                    label={link.label}
                    onNavigate={onNavigate}
                    size="lg"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const searchInputId = useId();
  const activeItem = navItems.find((item) => item.id === openMenu) ?? null;
  const isSolid =
    !isHome ||
    (hasMounted && isScrolled) ||
    mobileOpen ||
    openMenu !== null ||
    searchOpen;

  useEffect(() => {
    setHasMounted(true);

    function onScroll() {
      setIsScrolled(window.scrollY > 32);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setIsScrolled(false);
    setMobileOpen(false);
    setOpenMenu(null);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(null);
        setSearchOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setSearchOpen(false);
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 z-50 w-full transition-[background-color,box-shadow] duration-300 ${
        isSolid
          ? "bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent shadow-none"
      }`}
    >
      {/* Utility bar */}
      {isSolid && (
      <div className="hidden border-b border-[#ececec] bg-[#f5f5f5] md:block">
        <div className="mx-auto flex h-9 max-w-[1200px] items-center justify-end gap-5 px-6 lg:px-8">
          {utilityLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] leading-none text-[#4a4a4a] transition-colors hover:text-gha-primary"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              setSearchOpen((prev) => !prev);
              setOpenMenu(null);
            }}
            suppressHydrationWarning
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e8e8e8] text-[#4a4a4a] transition-colors hover:bg-[#dcdcdc] hover:text-gha-primary"
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            aria-controls={searchInputId}
          >
            <SearchIcon />
          </button>
        </div>
      </div>
      )}

      {/* Search panel */}
      {searchOpen && (
        <div className="border-b border-[#ececec] bg-white">
          <form
            className="mx-auto flex max-w-[1200px] items-center gap-3 px-6 py-3 lg:px-8"
            onSubmit={(event) => {
              event.preventDefault();
              setSearchOpen(false);
            }}
            role="search"
          >
            <label htmlFor={searchInputId} className="sr-only">
              Search
            </label>
            <input
              id={searchInputId}
              type="search"
              placeholder="Search..."
              autoFocus
              suppressHydrationWarning
              className="h-10 w-full rounded-md border border-[#d0d0d0] px-3 text-sm text-[#1a1a1a] outline-none ring-gha-primary placeholder:text-[#8a8a8a] focus:ring-2"
            />
            <button
              type="submit"
              suppressHydrationWarning
              className="h-10 shrink-0 rounded-md bg-gha-primary px-4 text-sm font-semibold text-white transition-colors hover:bg-gha-primary-hover"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Main nav */}
      <div className="relative mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-6 lg:px-8">
        <GhaLogo inverted={!isSolid} />

        <nav
          className="hidden h-full items-stretch gap-1 lg:flex xl:gap-2"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isOpen = openMenu === item.id;
            return (
              <div key={item.id} className="relative flex items-stretch">
                <button
                  type="button"
                  className={`relative inline-flex items-center gap-1.5 px-2.5 text-[15px] font-semibold transition-colors xl:px-3 ${
                    isSolid
                      ? isOpen
                        ? "text-[#1a1a1a]"
                        : "text-[#1a1a1a] hover:text-gha-primary"
                      : isOpen
                        ? "text-white"
                        : "text-white hover:text-white/80"
                  }`}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() =>
                    setOpenMenu((prev) => (prev === item.id ? null : item.id))
                  }
                  onMouseEnter={() => {
                    setSearchOpen(false);
                    setOpenMenu(item.id);
                  }}
                >
                  {item.label}
                  <ChevronDown
                    className={`mt-0.5 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                  {isOpen && (
                    <span
                      className={`absolute inset-x-2 bottom-0 h-[3px] ${
                        isSolid ? "bg-gha-primary" : "bg-white"
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </button>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative hidden lg:block">
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-gha-primary px-6 text-[13px] font-bold tracking-wide text-white uppercase transition-colors hover:bg-gha-primary-hover"
              aria-expanded={openMenu === "donate"}
              aria-haspopup="true"
              onClick={() =>
                setOpenMenu((prev) => (prev === "donate" ? null : "donate"))
              }
              onMouseEnter={() => setOpenMenu("donate")}
            >
              Donate
              <ChevronDown
                className={`transition-transform ${
                  openMenu === "donate" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMenu === "donate" && (
              <div
                className="absolute right-0 top-full z-30 min-w-[200px] pt-2"
                onMouseLeave={() => setOpenMenu(null)}
              >
                <ul className="rounded-md border border-[#e6e6e6] bg-white py-2 shadow-lg">
                  {donateItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-[#1a1a1a] transition-colors hover:bg-[#f5f5f5] hover:text-gha-primary"
                        onClick={() => setOpenMenu(null)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center lg:hidden ${
              isSolid ? "text-[#1a1a1a]" : "text-white"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((prev) => !prev);
              setOpenMenu(null);
            }}
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {/* Desktop mega menu */}
      {activeItem && (
        <div
          className="absolute left-0 right-0 top-full z-20 hidden lg:block"
          onMouseLeave={() => setOpenMenu(null)}
        >
          <MegaMenuPanel
            item={activeItem}
            onNavigate={() => setOpenMenu(null)}
          />
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-[#ececec] bg-white lg:hidden">
          <div className="space-y-1 px-4 py-3">
            {utilityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm text-[#4a4a4a]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <nav
            className="border-t border-[#ececec] px-2 py-2"
            aria-label="Mobile"
          >
            {navItems.map((item) => {
              const isOpen = openMenu === item.id;
              return (
                <div key={item.id} className="border-b border-[#f0f0f0]">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3.5 text-left text-[15px] font-semibold text-[#1a1a1a]"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenMenu((prev) =>
                        prev === item.id ? null : item.id,
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="bg-gha-primary px-4 py-5 text-white">
                      <p className="mb-4 text-sm leading-relaxed text-white">
                        {item.description}
                      </p>

                      {item.layout === "columns" &&
                        item.columns?.map((column) => (
                          <div key={column.heading} className="mb-5 last:mb-0">
                            <p className="mb-2 text-[12px] font-semibold tracking-wide text-white/75 uppercase">
                              {column.heading}
                            </p>
                            <ul className="space-y-2">
                              {column.links.map((link) => (
                                <li key={link.href}>
                                  <MegaMenuLink
                                    href={link.href}
                                    label={link.label}
                                    onNavigate={() => setMobileOpen(false)}
                                  />
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                      {item.layout === "checklist" && (
                        <>
                          {item.sectionHeading && (
                            <p className="mb-3 text-[12px] font-semibold tracking-wide text-white/75 uppercase">
                              {item.sectionHeading}
                            </p>
                          )}
                          <ul className="space-y-2.5">
                            {item.links?.map((link) => (
                              <li key={link.href}>
                                <MegaMenuLink
                                  href={link.href}
                                  label={link.label}
                                  onNavigate={() => setMobileOpen(false)}
                                />
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {item.layout === "simple" && (
                        <ul className="space-y-3">
                          {item.links?.map((link) => (
                            <li key={link.href}>
                              <MegaMenuLink
                                href={link.href}
                                label={link.label}
                                onNavigate={() => setMobileOpen(false)}
                                size="lg"
                              />
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="px-4 py-4">
            <Link
              href="/donate"
              className="flex h-12 items-center justify-center rounded-full bg-gha-primary text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-gha-primary-hover"
              onClick={() => setMobileOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
