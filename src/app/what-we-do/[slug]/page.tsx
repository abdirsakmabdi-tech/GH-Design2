import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FocusAreaLayout } from "@/components/FocusAreaLayout";
import { focusAreas, getFocusArea } from "@/data/focus-areas";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return focusAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getFocusArea(slug);

  if (!area) {
    return { title: "Focus Area | Global Health Alliance" };
  }

  return {
    title: `${area.title} | What We Do | Global Health Alliance`,
    description: area.summary,
  };
}

export default async function FocusAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getFocusArea(slug);

  if (!area) {
    notFound();
  }

  return <FocusAreaLayout area={area} />;
}
