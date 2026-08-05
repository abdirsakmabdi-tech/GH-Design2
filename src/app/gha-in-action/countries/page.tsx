import type { Metadata } from "next";
import { CountriesPage } from "@/components/CountriesPage";

export const metadata: Metadata = {
  title: "Countries we work in | Global Health Alliance",
  description:
    "Explore where Global Health Alliance works—across Minnesota in the United States and in Somalia—building culturally responsive care and stronger health systems.",
};

export default function CountriesWeWorkInPage() {
  return (
    <main className="bg-background text-foreground">
      <CountriesPage />
    </main>
  );
}
