import Link from "next/link";
import {
  Captions,
  Clapperboard,
  MessageSquareText,
  MousePointer2,
  Palette,
  ScreenShare,
  Sparkles,
  Video,
  Wand2,
  ZoomIn,
} from "lucide-react";
import { Header } from "@/components/header";
import { HeroStreaks } from "@/components/marketing/hero-streaks";
import { Footer } from "@/components/footer";
import { DownloadButtons } from "@/components/studio/download-buttons";
import { FeatureRow } from "@/components/marketing/feature-row";
import { FaqSection } from "@/components/marketing/faq";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { PillarStrip } from "@/components/marketing/pillar-strip";
import {
  Container,
  Section,
  SectionHeading,
  accents,
  accentCycle,
} from "@/components/marketing/primitives";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    icon: ScreenShare,
    title: "Record anything",
    description:
      "Capture your full screen or a single window with system audio, microphone, and a webcam bubble you can shape and place.",
  },
  {
    icon: ZoomIn,
    title: "Automatic zoom",
    description:
      "Zoom and pan follow your cursor automatically, so the viewer's eye is always on the action.",
  },
  {
    icon: MousePointer2,
    title: "Cursor effects",
    description:
      "Smooth cursor motion, click rings, custom sizes, and themed pointers make every movement feel intentional.",
  },
  {
    icon: Palette,
    title: "Backgrounds & framing",
    description:
      "Drop your recording onto wallpapers, gradients, or animated backgrounds with padding, rounded corners, and shadows.",
  },
  {
    icon: Captions,
    title: "Auto captions",
    description:
      "Transcribe your recording into styled captions on-device in seconds. No upload, no manual typing.",
  },
  {
    icon: Clapperboard,
    title: "Scene builder",
    description:
      "Open on a title card, cut to a metrics scene, end on your logo.",
  },
];

const faqItems = [
  {
    question: "What is Guide Studio?",
    answer:
      "Guide Studio is a desktop app for recording your screen and turning it into a polished product video. It handles the capture, the zoom and cursor effects, backgrounds, captions, and voiceover.",
  },
  {
    question: "How is it different from Guide Pro?",
    answer:
      "Guide Pro builds interactive, clickable demos you embed on a page. Guide Studio produces finished video. The MP4 or GIF you'd post to your site, a launch tweet, or a training library. Many teams use both: an interactive demo to explore, a video to watch.",
  },
  {
    question: "Do I need to edit the video by hand?",
    answer:
      "Only if you want to. One-click polish adds zooms, trims dead air, and cleans up the cursor automatically. You can also just tell the built-in AI assistant what to change, 'trim the boring parts', 'add a zoom at 0:15', 'speed up this section'.",
  },
  {
    question: "Can it generate a demo on its own?",
    answer:
      "Yes. Give the AI demo recorder a URL and a goal and it navigates the site itself, capturing the flow with narration written as it goes as a first draft you can refine.",
  },
  {
    question: "What can I export?",
    answer:
      "MP4 or GIF, in whatever aspect ratio and resolution you need for the web, social, or docs.",
  },
  {
    question: "How much does Guide Studio cost?",
    answer:
      "Nothing. Guide Studio is completely free to download and use, no account, no trial, and no paywalled features. We're also open-sourcing it soon, so you'll be able to inspect, self-host, and contribute to the code.",
  },
];

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <Header />

      <section className="relative overflow-hidden bg-ink pb-20 pt-36 sm:pt-44">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(56rem 28rem at 12% 96%, rgba(176,74,66,0.28), transparent 62%), radial-gradient(52rem 26rem at 88% 88%, rgba(150,60,80,0.22), transparent 62%)",
          }}
        />
        <HeroStreaks />
        <Container className="relative z-10">
          <div data-reveal className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-[#f0c9a0]">Guide Studio · Free desktop app</span>
            <h1 data-mask-reveal className="font-display mt-8 text-balance text-title text-white">
              Record your screen.{" "}
              <span className="text-[#f0c9a0]">Ship a polished video.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lead text-slate-300">
              Guide Studio is a completely free desktop app that turns a raw
              screen recording into a finished product video, automatic zoom,
              smooth cursor, beautiful backgrounds, captions, and AI voiceover.
              Then export a clean MP4 or GIF.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4">
              <Link
                href="#download"
                className="inline-flex items-center justify-center bg-[#e8a56d] px-9 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#2b1420] transition duration-300 hover:bg-[#efb684]"
              >
                Download Guide Studio — free
              </Link>
              <p className="text-sm text-slate-400">
                No account, no trial, no paywall · Open-sourcing soon
              </p>
            </div>
          </div>

          <div id="download" className="scroll-mt-28">
            <DownloadButtons />
            <p className="mt-4 text-center text-sm text-slate-400">
              Free forever · Works on macOS, Windows, and Linux
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container className="space-y-24">
          <FeatureRow
            eyebrow="Record"
            title="Capture the screen, cursor, and you"
            description="Record your full screen or a single window with system audio and microphone, and add a webcam bubble you can shape and position. Guide Studio captures your real cursor every shape, click, and movement so it can polish it later."
            bullets={[
              "Full screen or single window, with system + mic audio",
              "Webcam picture-in-picture with masks and placement",
              "Real cursor capture for clicks and motion",
            ]}
            badges={["macOS", "Windows", "Linux"]}
            image="/copilot.png"
            imageAlt="Recording a screen with Guide Studio"
          />
          <FeatureRow
            eyebrow="Polish"
            accent="cyan"
            title="One click makes it look produced"
            description="Automatic zoom follows your cursor, dead air gets trimmed, and the cursor path smooths itself out. Drop the recording onto a background, round the corners, add a shadow, and it looks like it took hours in seconds."
            bullets={[
              "Auto-zoom and pan that track the action",
              "Smart trim removes the dead air",
              "Backgrounds, padding, rounded corners, and shadows",
            ]}
            image="/guide-studio-ai.png"
            imageAlt="Polishing a recording in the Guide Studio timeline"
            reverse
          />
          <FeatureRow
            eyebrow="Direct with AI"
            accent="violet"
            title="Tell the editor what you want"
            description="Ask the built-in AI assistant to make the changes 'trim the boring parts', 'add a zoom at 0:15', 'speed up 5s to 12s'. Or hand the AI demo recorder a URL and a goal and let it capture and narrate a full walkthrough on its own."
            bullets={[
              "Natural-language editing. No timeline wrangling",
              "AI demo recorder navigates a site and narrates it",
              "AI voiceover and on-device auto-captions",
            ]}
            image="/guide-studio-polish.png"
            imageAlt="The Guide Studio AI editing assistant"
          />
        </Container>
      </Section>

      <Section className="bg-canvas-deep">
        <Container>
          <SectionHeading
            eyebrow="In the box"
            title="Everything you need to make it look great"
            align="center"
          />
          <div
            data-stagger
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-950/10"
              >
                <span
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-xl",
                    accents[accentCycle[i % accentCycle.length]].tile
                  )}
                >
                  <cap.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Export strip */}
      <Section>
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl bg-ink p-10 text-center sm:flex-row sm:text-left">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-600 text-white">
              <Video className="h-7 w-7" />
            </span>
            <div>
              <h3 className="text-2xl font-medium text-white">
                Export a clean MP4 or GIF
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-300">
                Render at any aspect ratio and resolution and landscape for the
                web, square for social, or a lightweight GIF for a README. One
                export, ready to ship.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <PillarStrip active="training" />
      <FaqSection items={faqItems} title="Guide Studio, answered" />
      <CtaBanner
        title="Make product videos worth watching — free"
        description="Download Guide Studio, record, let it polish the video, and export in minutes. Completely free, and open-sourcing soon."
      />
      <Footer />
    </main>
  );
}
