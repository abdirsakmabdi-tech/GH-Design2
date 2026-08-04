import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { uncutSans } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Health Alliance | Building Resilient Healthcare System",
  description:
    "Global Health Alliance builds resilient healthcare systems and advances health equity worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${uncutSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
