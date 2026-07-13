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
import { Footer } from "@/components/footer";
import { DownloadButtons } from "@/components/studio/download-buttons";
import { FeatureRow } from "@/components/marketing/feature-row";
import { FaqSection } from "@/components/marketing/faq";
import { CtaBanner } from "@/components/marketing/cta-banner";
import {
  Container,
  PillBadge,
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
      "Zoom and pan follow your cursor automatically, so the viewer's eye is always on the action — no keyframing required.",
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
      "Transcribe your recording into styled captions on-device in seconds — no upload, no manual typing.",
  },
  {
    icon: Clapperboard,
    title: "Scene builder",
    description:
      "Open on a title card, cut to a metrics scene, end on your logo — cinematic scene templates snap into the timeline.",
  },
];

const faqItems = [
  {
    question: "What is Guide Studio?",
    answer:
      "Guide Studio is a desktop app for recording your screen and turning it into a polished product video. It handles the capture, the zoom and cursor effects, backgrounds, captions, and voiceover — then exports a finished MP4 or GIF.",
  },
  {
    question: "How is it different from Guide Pro?",
    answer:
      "Guide Pro builds interactive, clickable demos you embed on a page. Guide Studio produces finished video — the MP4 or GIF you'd post to your site, a launch tweet, or a training library. Many teams use both: an interactive demo to explore, a video to watch.",
  },
  {
    question: "Do I need to edit the video by hand?",
    answer:
      "Only if you want to. One-click polish adds zooms, trims dead air, and cleans up the cursor automatically. You can also just tell the built-in AI assistant what to change — 'trim the boring parts', 'add a zoom at 0:15', 'speed up this section'.",
  },
  {
    question: "Can it generate a demo on its own?",
    answer:
      "Yes. Give the AI demo recorder a URL and a goal and it navigates the site itself, capturing the flow with narration written as it goes — a first draft you can refine.",
  },
  {
    question: "What can I export?",
    answer:
      "MP4 or GIF, in whatever aspect ratio and resolution you need for the web, social, or docs.",
  },
];

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative overflow-hidden bg-white pb-16 pt-32 sm:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(147,51,234,0.14) 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(55rem 24rem at 50% 0%, black, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(55rem 24rem at 50% 0%, black, transparent 75%)",
          }}
        />
        <Container className="relative">
          <div data-reveal className="mx-auto max-w-4xl text-center">
            <PillBadge>Guide Studio · Desktop app</PillBadge>
            <h1 className="mt-7 text-balance text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Record your screen.{" "}
              <span className="text-purple-600">Ship a polished video.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-xl leading-relaxed text-slate-600">
              Guide Studio is a desktop app that turns a raw screen recording
              into a finished product video — automatic zoom, smooth cursor,
              beautiful backgrounds, captions, and AI voiceover. Then export a
              clean MP4 or GIF.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#download"
                className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-9 py-4 text-base font-bold text-white shadow-lg shadow-purple-600/25 transition hover:-translate-y-0.5 hover:bg-purple-500 hover:shadow-xl hover:shadow-purple-600/30"
              >
                Download Guide Studio
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-9 py-4 text-base font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-purple-200 hover:bg-purple-50"
              >
                See pricing
              </Link>
            </div>
          </div>

          <div id="download" className="scroll-mt-28">
            <DownloadButtons />
            <p className="mt-4 text-center text-sm text-slate-500">
              Free to download · Works on macOS, Windows, and Linux
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container className="space-y-24">
          <FeatureRow
            eyebrow="Record"
            title="Capture the screen, cursor, and you"
            description="Record your full screen or a single window with system audio and microphone, and add a webcam bubble you can shape and position. Guide Studio captures your real cursor — every shape, click, and movement — so it can polish it later."
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
            description="Automatic zoom follows your cursor, dead air gets trimmed, and the cursor path smooths itself out. Drop the recording onto a background, round the corners, add a shadow, and it looks like it took hours — in seconds."
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
            description="Ask the built-in AI assistant to make the changes — 'trim the boring parts', 'add a zoom at 0:15', 'speed up 5s to 12s'. Or hand the AI demo recorder a URL and a goal and let it capture and narrate a full walkthrough on its own."
            bullets={[
              "Natural-language editing — no timeline wrangling",
              "AI demo recorder navigates a site and narrates it",
              "AI voiceover and on-device auto-captions",
            ]}
            image="/guide-studio-polish.png"
            imageAlt="The Guide Studio AI editing assistant"
          />
        </Container>
      </Section>

      <Section className="bg-purple-50/60">
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
              <h3 className="text-2xl font-bold text-white">
                Export a clean MP4 or GIF
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-300">
                Render at any aspect ratio and resolution — landscape for the
                web, square for social, or a lightweight GIF for a README. One
                export, ready to ship.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FaqSection items={faqItems} title="Guide Studio, answered" />
      <CtaBanner
        title="Make product videos worth watching"
        description="Record, let Guide Studio polish it, and export a finished video in minutes."
      />
      <Footer />
    </main>
  );
}
