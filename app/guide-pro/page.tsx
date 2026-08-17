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
import { DemoGuideProEmbed } from "@/components/marketing/demo-guide-embed";

const capabilities = [
  {
    icon: ScanLine,
    title: "Two ways to capture",
    description:
      "Record a clickable copy of your product that replays like the live app, or a crisp image-based demo.",
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
  // {
  //   icon: UserSquare,
  //   title: "Presenter face-cam",
  //   description:
  //     "Record or upload a presenter video that follows the viewer as a floating bubble across every step.",
  // },
  {
    icon: Fingerprint,
    title: "Personalization tokens",
    description:
      "Drop in {{first_name}} and other variables that fill from the share link so each user sees a walkthrough that feels made for their account.",
  },
];

const embedTypes = [
  {
    icon: MousePointerClick,
    title: "Inline",
    description:
      "Embed the walkthrough right in your help center or docs. It plays where it sits, so users learn the step without leaving the page.",
  },
  {
    icon: Radar,
    title: "Overlay",
    description:
      "A poster with a 'Show me how' button. One click takes over the full screen with the guided walkthrough.",
  },
  {
    icon: Share2,
    title: "Popup",
    description:
      "A button or link that opens the walkthrough in a popup, drop it into an onboarding email, in-app tooltip, or knowledge base.",
  },
];

const faqItems = [
  {
    question: "Do users need access to our live product to learn from it?",
    answer:
      "No. Guide Pro walkthroughs are self-contained copies built from screenshots and page snapshots captured with the Chrome extension. Users click through a realistic replica of the workflow to learn it, with no login, no live access, and no risk to real data.",
  },
  {
    question: "How do I build a walkthrough?",
    answer:
      "Click 'Create Demo' to start recording in the extension, then click through the workflow you want to teach. Each click captures a screen. Stop recording and it imports automatically as a draft. The AI adds tooltips, voiceover, and zoom, and you refine it in the builder.",
  },
  {
    question: "Where do walkthroughs help users adopt the product?",
    answer:
      "Anywhere they get stuck. Embed a walkthrough inline in your help center, drop it into an onboarding email as a click-to-play popup, or surface it as an overlay so users can learn a feature in the moment instead of filing a ticket.",
  },
  {
    question: "Can I tailor a walkthrough to a specific user or account?",
    answer:
      "Yes. Personalization tokens like {{first_name}} fill from the share link, so a user sees a walkthrough that reflects their own name or account. One walkthrough adapts to everyone who opens it.",
  },
  {
    question: "Can I turn a walkthrough into a video for our help center?",
    answer:
      "Yes. Any walkthrough can be exported as a PDF, an autoplay GIF, or a rendered MP4 with the voiceover and zoom baked in, ready for your knowledge base, LMS, or an onboarding email.",
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
              Help users learn your product{" "}
              <span className="text-purple-600">by doing it</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-xl leading-relaxed text-slate-600">
              People adopt software by using it, not by reading about it. Guide
              Pro turns a few clicks through your product into a hands-on,
              interactive walkthrough, so new users go from exploration to their
              first win in the flow of work, without a support ticket. The
              walkthrough below was built with Guide Pro.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={DASHBOARD_URL}
                target="_blank"
                className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-9 py-4 text-base font-bold text-white shadow-lg shadow-purple-600/25 transition hover:-translate-y-0.5 hover:bg-purple-500 hover:shadow-xl hover:shadow-purple-600/30"
              >
                Build a walkthrough
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
              <DemoGuideProEmbed />
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container className="space-y-24">
          <FeatureRow
            eyebrow="Record"
            title="Click through the workflow you want to teach"
            description="Start recording in the Chrome extension and click through the task your users need to learn. Every click captures a screen either a pixel-perfect image or a clickable snapshot that replays like the live product. Stop, and it imports as a draft automatically."
            bullets={[
              "Capture screenshots or fully clickable page snapshots",
              "Records your clicks, typing, and scrolling as steps",
              "No engineering, no staging environment, no live access",
            ]}
            badges={["No code required", "No live product needed"]}
            image="/guide-pro.gif"
            imageAlt="Recording an interactive walkthrough with the 3Guide extension"
          />
          <FeatureRow
            eyebrow="Enhance"
            accent="cyan"
            title="AI turns raw screens into clear, guided steps"
            description="AI reads your captured screens and picks the best treatment for each one, a zoom toward the action, a scroll pan down a long page, or a self-playing motion step with narration, then writes the tooltip copy that tells users exactly what to do next, plus an intro and outro to frame the whole flow."
            bullets={[
              "Auto-written tooltips that explain each step",
              "Best zoom, pan, or motion chosen per screen",
              "Natural voiceover on every step, or clone your own voice",
            ]}
            image="/guide-pro-enhance.png"
            imageAlt="AI enhancing a walkthrough with tooltips, zoom, and voiceover"
            reverse
          />
          <FeatureRow
            eyebrow="Refine"
            accent="emerald"
            title="Guide attention to exactly the right place"
            description="Break long flows into chapters, add hotspots and highlights that point users to the next click, and blur anything sensitive with a non-destructive mask. Personalize each walkthrough by name or account, and add a presenter face-cam that follows users across every step."
            bullets={[
              "Chapters, hotspots, highlights, and click beacons",
              "Blur PII, crop frames, and annotate on the screen",
              "Personalization tokens and self-paced chapters built in",
            ]}
            image="/guide-pro-edit.png"
            imageAlt="Editing an interactive walkthrough in the Guide Pro builder"
          />
        </Container>
      </Section>

      {/* Embed types */}
      <Section className="bg-purple-50/60">
        <Container>
          <SectionHeading
            eyebrow="Meet users where they get stuck"
            title="One walkthrough, three ways to embed"
            description="Publish once and surface the walkthrough wherever users need help your help center, an onboarding email, an in-app tooltip, or your knowledge base."
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
            title="Built to make people productive, not just to record"
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
                Turn any walkthrough into a step-by-step PDF guide, an autoplay
                GIF, or a rendered video with voiceover and zoom baked in, ready
                for your knowledge base, LMS, or onboarding emails.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FaqSection items={faqItems} title="Guide Pro, answered" />
      <CtaBanner
        title="Turn your product into its own onboarding guide"
        description="Record a few clicks, let AI do the polish, and give every user a hands-on walkthrough that gets them productive faster."
      />
      <Footer />
    </main>
  );
}
