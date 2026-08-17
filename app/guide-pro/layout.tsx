import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide Pro — Interactive Product Walkthroughs",
  description:
    "Help users learn your product by doing. Build hands-on, interactive walkthroughs from screenshots — no live access needed. Record with the extension, let AI add tooltips, voiceover, and zoom, then embed them wherever users get stuck.",
  openGraph: {
    title: "Guide Pro — Interactive Product Walkthroughs | 3Guide",
    description:
      "Interactive product walkthroughs that get users productive faster. Record, AI-enhance, and embed in your help center, onboarding emails, or app.",
    url: "https://www.3guideai.com/guide-pro",
  },
  alternates: { canonical: "https://www.3guideai.com/guide-pro" },
};

export default function GuideProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
