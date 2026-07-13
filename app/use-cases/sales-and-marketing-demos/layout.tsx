import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales & Marketing Demos",
  description:
    "Let buyers experience your product before the first call. Interactive demos and polished product videos that lift website conversion, qualify leads, and shorten sales cycles.",
  openGraph: {
    title: "Sales & Marketing Demos | 3Guide",
    description:
      "Interactive demos and product videos that convert buyers before the first call.",
    url: "https://3guideai.com/use-cases/sales-and-marketing-demos",
  },
  alternates: {
    canonical: "https://3guideai.com/use-cases/sales-and-marketing-demos",
  },
};

export default function SalesMarketingDemosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
