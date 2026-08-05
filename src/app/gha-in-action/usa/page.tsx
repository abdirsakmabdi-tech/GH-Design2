import type { Metadata } from "next";
import { UsaWorkSection } from "@/components/UsaWorkSection";

export const metadata: Metadata = {
  title: "GHA in the USA | Global Health Alliance",
  description:
    "Transforming healthcare access and equity for immigrant families and underserved communities across the United States.",
};

export default function UsaPage() {
  return (
    <main className="bg-background text-foreground">
      <UsaWorkSection />
    </main>
  );
}
