import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide Studio — Free AI Screen Recorder & Video Editor",
  description:
    "A completely free desktop app for recording your screen and turning it into a polished product video — auto-zoom, cursor effects, backgrounds, captions, AI voiceover, and one-click polish. Export to MP4 or GIF. Open-sourcing soon.",
  openGraph: {
    title: "Guide Studio — Free AI Screen Recorder & Video Editor | 3Guide",
    description:
      "Record your screen and turn it into a polished product video with AI zoom, captions, and voiceover — completely free, open-sourcing soon. Export MP4 or GIF.",
    url: "https://www.3guideai.com/studio",
  },
  alternates: { canonical: "https://www.3guideai.com/studio" },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
