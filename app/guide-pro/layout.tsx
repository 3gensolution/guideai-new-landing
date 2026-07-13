import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide Pro — Interactive Product Demos",
  description:
    "Build shareable, interactive product demos from screenshots — no live product access needed. Record with the extension, let AI add tooltips, voiceover, and zoom, then embed anywhere.",
  openGraph: {
    title: "Guide Pro — Interactive Product Demos | 3Guide",
    description:
      "Interactive product demos, built from screenshots and Html and CSS. Record, AI-enhance, share or embed anywhere.",
    url: "https://3guideai.com/guide-pro",
  },
  alternates: { canonical: "https://3guideai.com/guide-pro" },
};

export default function GuideProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
