import Image from "next/image";
import Link from "next/link";
import {
  Blend,
  FileText,
  Fingerprint,
  Mic,
  MousePointerClick,
  Radar,
  ScanLine,
  Share2,
  Sparkles,
  UserSquare,
  Video,
  Wand2,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DemoEmbed } from "@/components/marketing/demo-embed";
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
import { DASHBOARD_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    icon: ScanLine,
    title: "Two ways to capture",
    description:
      "Record a clickable copy of your product that replays like the live app, or a crisp image-based demo — one clean shot per click.",
  },
  {
    icon: Wand2,
    title: "AI enhance",
    description:
      "AI reads your screens and writes the tooltip copy, picks the best zoom or scroll per step, and drafts an intro and outro for you.",
  },
  {
    icon: Mic,
    title: "Voiceover & voice cloning",
    description:
      "Generate natural narration for every step, tune the pace, or clone your own voice from a short sample.",
  },
  {
    icon: Blend,
    title: "Redact anything sensitive",
    description:
      "Blur PII with a non-destructive frosted mask, crop the frame, and draw arrows or highlights right on the screen.",
  },
  {
    icon: UserSquare,
    title: "Presenter face-cam",
    description:
      "Record or upload a presenter video that follows the viewer as a floating bubble across every step.",
  },
  {
    icon: Fingerprint,
    title: "Personalization tokens",
    description:
      "Drop in {{first_name}} and other variables that fill from the share link or a lead form — one demo, personalized for everyone.",
  },
];

const embedTypes = [
  {
    icon: MousePointerClick,
    title: "Inline",
    description:
      "Embed the demo directly in your page — it plays right where it sits, perfect for landing pages and docs.",
  },
  {
    icon: Radar,
    title: "Overlay",
    description:
      "A branded poster with a call-to-action. One click takes over the full screen with the demo.",
  },
  {
    icon: Share2,
    title: "Popup",
    description:
      "A button or poster that opens the demo in a popup over your page — drop it anywhere on your site.",
  },
];

const faqItems = [
  {
    question: "Do I need to give access to my live product?",
    answer:
      "No. Guide Pro demos are self-contained copies built from screenshots and page snapshots captured with the Chrome extension. They play as a standalone page or embed, so prospects never touch your real app.",
  },
  {
    question: "How do I build a demo?",
    answer:
      "Click 'Create Demo' to start recording in the extension, then click through your product. Each click captures a screen. Stop recording and the demo imports automatically as a draft — AI adds tooltips, voiceover, and zoom, and you refine it in the builder.",
  },
  {
    question: "Where can I share or embed a demo?",
    answer:
      "Publish a demo to get a share link on its own domain, then embed it inline on a page, as a click-to-play overlay poster, or as a popup. All three come with copy-paste code and a branded call-to-action.",
  },
  {
    question: "Can I capture leads inside a demo?",
    answer:
      "Yes. Drop a lead-form step anywhere in the flow to capture viewer details mid-demo. The values they enter can personalize the rest of the demo with tokens.",
  },
  {
    question: "Can I export a demo as a video?",
    answer:
      "Yes. Any demo can be exported as a PDF, an autoplay GIF, or a rendered MP4 with the voiceover and zoom baked in — great for emails, decks, and social.",
  },
];

export default function GuideProPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero — reuses the real, live Guide Pro demo */}
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
            <PillBadge>Guide Pro</PillBadge>
            <h1 className="mt-7 text-balance text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Interactive product demos,{" "}
              <span className="text-purple-600">built from screenshots</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-xl leading-relaxed text-slate-600">
              Turn a few clicks through your product into a shareable,
              interactive demo — no live access required. Record, let AI add
              tooltips, voiceover, and zoom, then embed it anywhere. The demo
              below was built with Guide Pro.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={DASHBOARD_URL}
                target="_blank"
                className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-9 py-4 text-base font-bold text-white shadow-lg shadow-purple-600/25 transition hover:-translate-y-0.5 hover:bg-purple-500 hover:shadow-xl hover:shadow-purple-600/30"
              >
                Build a demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-9 py-4 text-base font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-purple-200 hover:bg-purple-50"
              >
                See pricing
              </Link>
            </div>
          </div>

          <div data-reveal data-reveal-delay="0.15" className="mt-16 px-4">
            <div className="mx-auto max-w-6xl rounded-2xl border-2 border-purple-100 bg-white p-2 shadow-2xl shadow-purple-900/15">
              <DemoEmbed />
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container className="space-y-24">
          <FeatureRow
            eyebrow="Record"
            title="Click through your product. Get a demo."
            description="Start recording in the Chrome extension and click around your app. Every click captures a screen — either a pixel-perfect image or a clickable snapshot that replays like the live product. Stop, and it imports as a draft automatically."
            bullets={[
              "Capture screenshots or fully clickable page snapshots",
              "Records your clicks, typing, and scrolling as steps",
              "No engineering, no staging environment, no live access",
            ]}
            badges={["No code required", "No live product needed"]}
            image="/guide-pro.gif"
            imageAlt="Recording an interactive demo with the 3Guide extension"
          />
          <FeatureRow
            eyebrow="Enhance"
            accent="cyan"
            title="AI turns raw screens into a polished story"
            description="AI reads your captured screens and picks the best treatment for each one — a zoom toward the action, a scroll pan down a long page, or a self-playing motion step with narration — then writes the tooltip copy and an intro and outro to wrap it all."
            bullets={[
              "Auto-written tooltips and step copy",
              "Best zoom, pan, or motion chosen per screen",
              "Natural voiceover on every step, or clone your own voice",
            ]}
            image="/guide-pro-enhance.png"
            imageAlt="AI enhancing a demo with tooltips, zoom, and voiceover"
            reverse
          />
          <FeatureRow
            eyebrow="Refine"
            accent="emerald"
            title="Make it yours — down to the pixel"
            description="Add chapters, hotspots, and highlights. Blur anything sensitive with a non-destructive mask. Drop in a lead form to capture prospects mid-demo, and add a presenter face-cam that follows viewers across every step."
            bullets={[
              "Chapters, hotspots, highlights, and click beacons",
              "Blur PII, crop frames, and annotate on the screen",
              "Lead forms and personalization tokens built in",
            ]}
            image="/guide-pro-edit.png"
            imageAlt="Editing an interactive demo in the Guide Pro builder"
          />
        </Container>
      </Section>

      {/* Embed types */}
      <Section className="bg-purple-50/60">
        <Container>
          <SectionHeading
            eyebrow="Share anywhere"
            title="One demo, three ways to embed"
            description="Publish once and drop the demo wherever your buyers are — your website, a landing page, an email, or a sales follow-up."
            align="center"
          />
          <div
            data-stagger
            className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3"
          >
            {embedTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-2xl border-2 border-purple-100 bg-white p-8 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <type.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {type.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Everything included"
            title="A full demo studio, not just a screen recorder"
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
      <Section className="bg-purple-50/60">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl border-2 border-purple-100 bg-white p-10 text-center shadow-sm sm:flex-row sm:text-left">
            <div className="flex gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                <FileText className="h-6 w-6" />
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                <Sparkles className="h-6 w-6" />
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                <Video className="h-6 w-6" />
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Export as PDF, GIF, or MP4
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                Every demo can leave the browser as a document, an autoplay GIF,
                or a rendered video with the voiceover and zoom baked in — ready
                for decks, emails, and social.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FaqSection items={faqItems} title="Guide Pro, answered" />
      <CtaBanner
        title="Turn your product into a demo people can play with"
        description="Record a few clicks, let AI do the polish, and share an interactive demo anywhere."
      />
      <Footer />
    </main>
  );
}
