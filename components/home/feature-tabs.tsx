"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  MonitorPlay,
  MousePointerClick,
  Presentation,
  Sparkles,
} from "lucide-react";
import {
  CheckItem,
  Container,
  Section,
  SectionHeading,
} from "@/components/marketing/primitives";
import { cn } from "@/lib/utils";

const tabs = [
  {
    key: "guides",
    label: "In-App Guides",
    icon: MousePointerClick,
    title: "Click-by-click walkthroughs, built visually",
    description:
      "Create guided tours by clicking through your own product. Publish in one click, target by segment, and never write custom code for onboarding again.",
    bullets: [
      "Visual builder via the Chrome extension",
      "AI writes the steps, tooltips, and copy for you",
      "Self-healing keeps every guide working after redesigns",
    ],
    image: "/guidance-mode.gif",
    imageAlt: "3Guide guides dashboard with published and draft guides",
    href: "/guides",
    linkLabel: "Explore In-App Guides",
  },
  {
    key: "guide-pro",
    label: "Guide Pro",
    icon: Presentation,
    title: "Interactive product demos, built from screenshots",
    description:
      "Record a few clicks through your product and turn them into a shareable, interactive demo. AI adds the tooltips, voiceover, and zoom.",
    bullets: [
      "Capture screenshots or fully clickable page snapshots",
      "AI writes tooltips and narration, picks the best zoom per screen",
      "Embed inline, as an overlay, or a popup",
    ],
    image: "/guide-pro-img.png",
    imageAlt: "An interactive Guide Pro demo in the builder",
    href: "/guide-pro",
    linkLabel: "Explore Guide Pro",
  },
  {
    key: "studio",
    label: "Guide Studio",
    icon: MonitorPlay,
    title: "Turn a screen recording into a polished video",
    description:
      "A desktop app that records your screen and adds automatic zoom, smooth cursor, backgrounds, captions, and AI voiceover and then exports a clean MP4 or GIF.",
    bullets: [
      "Automatic zoom and cursor effects, no keyframing",
      "One-click polish, or edit by asking the AI assistant",
      "Export MP4 or GIF for the web, social, and docs",
    ],
    image: "/guide-studio-img.png",
    imageAlt: "The Guide Studio screen recorder and video editor",
    href: "/studio",
    linkLabel: "Explore Guide Studio",
  },
  {
    key: "assistant",
    label: "AI Assistant",
    icon: Bot,
    title: "Answers trained on your product, not the open web",
    description:
      "An assistant embedded in your app that answers user questions from a knowledge base built automatically from your own website and docs.",
    bullets: [
      "Knowledge base builds and refreshes itself",
      "Answers cite your own content",
      "Escalates to your support desk when a human is needed",
    ],
    image: "/assistant-mode.gif",
    imageAlt: "The 3Guide assistant answering a product question in-app",
    href: "/copilot",
    linkLabel: "Explore the AI Assistant",
  },
  {
    key: "copilot",
    label: "Browser Copilot",
    icon: Sparkles,
    title: "An AI that completes the task for your users",
    description:
      "Beyond showing users where to click. The autonomous copilot clicks, types, and navigates on their behalf while they watch every step.",
    bullets: [
      "Executes clicks, form fills, and navigation on the live page",
      "Plans multi-step tasks from one natural-language request",
      "Allowlisted actions and confirmations keep it safe",
    ],
    image: "/copilot.png",
    imageAlt: "3Guide Autonomous Copilot running browser tasks",
    href: "/copilot",
    linkLabel: "Meet the Browser Copilot",
  },
  {
    key: "analytics",
    label: "Friction Analytics",
    icon: BarChart3,
    title: "See exactly where users get stuck",
    description:
      "Funnels, session drill-downs, and friction signals out of the box so 'users are confused' becomes 'users can't find the export button.'",
    bullets: [
      "Acquisition and activation funnels automatically",
      "Session-level drill-down by source, device, and location",
      "Measure guide completion and time-to-value",
    ],
    image: "/friction-img.png",
    imageAlt: "3Guide visitors explorer with sessions and sources",
    href: "/analytics",
    linkLabel: "Explore Friction Analytics",
  }
  // {
  //   key: "support",
  //   label: "Support Desk",
  //   icon: Inbox,
  //   title: "AI deflects the repetitive. Your team gets the rest.",
  //   description:
  //     "A full support inbox with assignment, automation rules, and AI-drafted replies — escalations arrive with the whole conversation and user context attached.",
  //   bullets: [
  //     "Shared inbox with assignment and internal notes",
  //     "Automation rules for routing, tagging, and SLAs",
  //     "AI-suggested replies grounded in your knowledge base",
  //   ],
  //   image: "/docs/bubble-on-live-site.png",
  //   imageAlt: "The 3Guide support widget embedded on a live product",
  //   href: "/support-desk",
  //   linkLabel: "Explore the Support Desk",
  // },
];

export function FeatureTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <Section className="bg-background">
      <Container className="px-6">
        <SectionHeading
          eyebrow="The platform"
          title="One platform. Six products."
          description="Everything you need to onboard, demo, and support your product from in-app guidance to interactive demos and polished product video."
          align="center"
        />

        {/* Horizontal underline tab row (Everstage-style) */}
        <div
          data-reveal
          className="mt-14 flex gap-8 overflow-x-auto border-b border-slate-200 pb-px [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tabs.map((t, i) => {
            const isActive = i === active;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "relative flex shrink-0 items-center gap-2 pb-4 text-base font-semibold tracking-tight transition-colors duration-300",
                  isActive
                    ? "text-purple-700"
                    : "text-slate-500 hover:text-slate-900"
                )}
              >
                {isActive && (
                  <t.icon className="h-4 w-4 text-purple-600" />
                )}
                {t.label}
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-px h-0.5 rounded-full transition-all duration-300",
                    isActive ? "bg-purple-600" : "bg-transparent"
                  )}
                />
              </button>
            );
          })}
        </div>

        {/* Big dark panel: copy left, screenshot right */}
        <div
          key={tab.key}
          className="mt-8 overflow-hidden rounded-3xl bg-ink duration-500 animate-in fade-in"
        >
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-14 lg:p-16">
            <div>
              <p className="kicker inline-flex items-center gap-2.5 text-purple-300">
                <span aria-hidden className="h-px w-6 bg-white/30" />
                {tab.label}
              </p>
              <h3 className="font-display display-tight text-gradient-light mt-6 text-balance text-3xl font-bold leading-[1.05] sm:text-4xl lg:text-[2.75rem]">
                {tab.title}
              </h3>
              <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-purple-100/80">
                {tab.description}
              </p>
              <ul className="mt-7 space-y-3">
                {tab.bullets.map((b) => (
                  <CheckItem key={b} dark>
                    {b}
                  </CheckItem>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href={tab.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold tracking-tight text-plum transition-colors duration-300 hover:bg-purple-50"
                >
                  {tab.linkLabel}
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="wave-card overflow-hidden border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/40">
              <Image
                src={tab.image}
                alt={tab.imageAlt}
                width={1400}
                height={800}
                className="h-auto w-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
