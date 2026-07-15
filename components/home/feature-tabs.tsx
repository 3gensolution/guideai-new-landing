"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BarChart3,
  Bot,
  MonitorPlay,
  MousePointerClick,
  Presentation,
  Sparkles,
} from "lucide-react";
import {
  ArrowLink,
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
    <Section className="bg-purple-50/60">
      <Container className="px-6">
        <SectionHeading
          eyebrow="The platform"
          title="One platform. Six products."
          description="Everything you need to onboard, demo, and support your product from in-app guidance to interactive demos and polished product video."
          align="center"
        />

        {/* Tab pills */}
        <div
          data-reveal
          className="mt-12 flex items-center justify-center gap-3 overflow-auto py-4"
        >
          {tabs.map((t, i) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-base font-bold transition-all duration-300",
                i === active
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25"
                  : "border-2 border-slate-200 bg-white text-slate-600 hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700"
              )}
            >
              <t.icon className="h-5 w-5" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Active panel — keyed so it re-animates on change */}
        <div
          key={tab.key}
          className="mt-12 grid items-center gap-10 duration-500 animate-in fade-in slide-in-from-bottom-4 lg:grid-cols-[1fr_1.35fr] lg:gap-16"
        >
          <div>
            <h3 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {tab.title}
            </h3>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-slate-600">
              {tab.description}
            </p>
            <ul className="mt-7 space-y-4">
              {tab.bullets.map((b) => (
                <CheckItem key={b}>{b}</CheckItem>
              ))}
            </ul>
            <div className="mt-8">
              <ArrowLink href={tab.href}>{tab.linkLabel}</ArrowLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border-2 border-purple-100 bg-white shadow-2xl shadow-purple-900/10">
            <Image
              src={tab.image}
              alt={tab.imageAlt}
              width={1400}
              height={800}
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
