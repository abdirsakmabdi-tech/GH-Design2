import type { Metadata } from "next";
import { SomaliaWorkSection } from "@/components/SomaliaWorkSection";

export const metadata: Metadata = {
  title: "GHA in Somalia | Global Health Alliance",
  description:
    "Locally led hospital partnerships, medical equipment support, and clinician training that strengthen healthcare systems across Somalia.",
};

export default function SomaliaPage() {
  return (
    <main className="bg-background text-foreground">
      <SomaliaWorkSection />
    </main>
  );
}
