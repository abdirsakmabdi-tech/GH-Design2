"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <Header />
      <div className={`flex flex-1 flex-col ${isHome ? "" : "pt-[72px] md:pt-[108px]"}`}>
        {children}
      </div>
      <Footer />
    </>
  );
}
