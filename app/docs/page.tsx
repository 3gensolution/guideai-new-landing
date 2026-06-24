"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Check,
  ChevronDown,
  ChevronRight,
  Code,
  Copy,
  HelpCircle,
  Layers,
  Settings,
  Terminal,
  Play,
  Monitor,
  Camera,
  BookOpen,
  Video,
  Shield,
  Radio,
  MessageSquare,
  BarChart3,
  Palette,
  Bot,
  Bug,
  Bird,
  Cat,
  Squirrel,
  Sparkles,
  Circle,
  ArrowDownRight,
  ArrowDownLeft,
  Move,
  Route,
  PanelRight,
  Maximize,
  MousePointer,
  Package,
  Split,
} from "lucide-react";

const sidebar = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "choose-bundle", label: "Choose Your Bundle", icon: Split },
  { id: "getting-started", label: "Getting Started", icon: Zap },
  { id: "add-cdn", label: "Add the CDN", icon: Code },
  { id: "scanner", label: "Scanner CLI", icon: Terminal },
  { id: "dashboard", label: "Dashboard", icon: Monitor },
  { id: "configuration", label: "Configuration", icon: Settings },
  { id: "api-reference", label: "API Reference", icon: Layers },
  { id: "events", label: "Events", icon: Radio },
  { id: "guides-builder", label: "Guide Builder", icon: Play },
  { id: "copilot-setup", label: "Browser Copilot", icon: MessageSquare },
  { id: "analytics-setup", label: "Analytics", icon: BarChart3 },
  { id: "fingerprinting", label: "Fingerprinting", icon: Shield },
  { id: "showcase", label: "Visual Showcase", icon: Palette },
];

function CodeBlock({
  code,
  language = "html",
}: {
  code: string;
  language?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative mt-4 rounded-xl border border-zinc-800 bg-zinc-900">
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
        <span className="text-xs font-medium text-zinc-500">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-zinc-500 transition hover:text-white"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-zinc-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function Expandable({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-800/50">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-2 py-4 text-left text-sm font-medium text-white transition hover:text-violet-400"
      >
        {open ? (
          <ChevronDown className="h-4 w-4 shrink-0 text-zinc-500" />
        ) : (
          <ChevronRight className="h-4 w-4 shrink-0 text-zinc-500" />
        )}
        {title}
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  );
}

function ScreenshotPlaceholder({
  id,
  caption,
  screenshotPath,
}: {
  id: string;
  caption: string;
  screenshotPath: string;
}) {
  return (
    <div id={id} className="mt-8">
      <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50">
        <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-4 py-2">
          <Camera className="h-4 w-4 text-zinc-500" />
          <span className="text-xs text-zinc-500">
            Screenshot: {screenshotPath}
          </span>
        </div>
        <div className="relative aspect-video w-full bg-zinc-900/80">
          {/*
            PLAYWRIGHT SCREENSHOT PLACEHOLDER
            Run: npx playwright test e2e/screenshots.spec.ts
            Screenshot will be saved to: public/docs/{screenshotPath}
            After capturing, replace this placeholder with an <img> tag.
          */}
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8">
            <Monitor className="h-12 w-12 text-zinc-700" />
            <p className="text-center text-sm text-zinc-600">
              Full-screen screenshot placeholder
            </p>
            <code className="rounded bg-zinc-800 px-2 py-1 text-xs text-violet-400">
              public/docs/{screenshotPath}
            </code>
            <p className="mt-2 text-center text-xs text-zinc-700">
              Capture with: npx playwright test e2e/screenshots.spec.ts
            </p>
          </div>
        </div>
      </div>
      <p className="mt-2 text-center text-sm text-zinc-500">{caption}</p>
    </div>
  );
}

function YouTubeEmbed({
  title,
  videoId,
  description,
}: {
  title: string;
  videoId: string;
  description: string;
}) {
  const isPlaceholder = videoId === "PLACEHOLDER";

  return (
    <div className="mt-8">
      <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50">
        <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-4 py-2">
          <Video className="h-4 w-4 text-red-500" />
          <span className="text-xs text-zinc-400">{title}</span>
        </div>
        {isPlaceholder ? (
          <div className="relative aspect-video w-full bg-zinc-900/80">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
                <Play className="h-8 w-8 text-red-500" />
              </div>
              <p className="text-center text-sm font-medium text-zinc-400">
                {title}
              </p>
              <p className="max-w-md text-center text-xs text-zinc-600">
                {description}
              </p>
              <div className="mt-2 rounded-lg bg-zinc-800 px-3 py-1.5">
                <code className="text-xs text-yellow-400">
                  TODO: Record and upload video, then replace videoId
                </code>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        )}
      </div>
      <p className="mt-2 text-center text-sm text-zinc-500">{description}</p>
    </div>
  );
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-400 ring-1 ring-inset ring-violet-500/20">
              Documentation
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              GuideAI{" "}
              <span className="text-violet-400">
                SDK Installation &amp; Usage
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Complete guide to integrating GuideAI into your application.
              Two complementary bundles — <strong className="text-violet-400">Full SDK</strong> for
              guides, chat & copilot, and{" "}
              <strong className="text-cyan-400">Tracking SDK</strong> for
              friction analytics & detection. Use one or both.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link href="https://dashboard.3guideai.com" target="_blank">
                <Button className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:from-cyan-600 hover:to-violet-600">
                  Get API Keys
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                onClick={() => scrollTo("getting-started")}
              >
                Quick Start
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="border-t border-zinc-800 py-12">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="flex gap-12">
            {/* Sidebar */}
            <aside className="hidden w-52 shrink-0 lg:block">
              <nav className="sticky top-28 space-y-1">
                {sidebar.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition ${
                      activeSection === item.id
                        ? "bg-violet-500/10 font-medium text-violet-400"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                    }`}
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </aside>

            <div className="min-w-0 flex-1 space-y-24">
              {/* ============================================ */}
              {/* OVERVIEW */}
              {/* ============================================ */}
              <div id="overview" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">Overview</h2>
                <p className="mt-4 text-lg text-zinc-400">
                  GuideAI is an AI-first digital adoption platform for B2B
                  SaaS. It ships as two complementary bundles: the{" "}
                  <strong className="text-violet-400">Full SDK</strong>{" "}
                  (<code className="rounded bg-zinc-800 px-1 text-xs text-violet-400">guideai.js</code>)
                  for interactive guides, AI chat, browser copilot, and the
                  floating bubble; and the{" "}
                  <strong className="text-cyan-400">Tracking SDK</strong>{" "}
                  (<code className="rounded bg-zinc-800 px-1 text-xs text-cyan-400">guideai-tracking.js</code>)
                  for friction analytics, detection, surveys, announcements,
                  and session recording.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
                      <Layers className="h-5 w-5 text-cyan-400" />
                    </div>
                    <h3 className="mt-4 font-semibold text-white">
                      In-App Guides
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">
                      AI-generated interactive walkthroughs with 6-tier
                      fingerprinting that auto-heals when your UI changes.
                    </p>
                  </div>
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10">
                      <MessageSquare className="h-5 w-5 text-violet-400" />
                    </div>
                    <h3 className="mt-4 font-semibold text-white">
                      Browser Copilot
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">
                      Always-on AI assistant powered by RAG and your
                      scanned knowledge base. Answers questions and walks
                      users through tasks.
                    </p>
                  </div>
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500/10">
                      <BarChart3 className="h-5 w-5 text-pink-400" />
                    </div>
                    <h3 className="mt-4 font-semibold text-white">
                      Friction Analytics
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">
                      Detect rage clicks, dead clicks, and hesitation.
                      30+ auto-emitted events with PII stripping and
                      AES-256-GCM encryption.
                    </p>
                  </div>
                </div>

                {/* Overview Video */}
                <YouTubeEmbed
                  title="GuideAI Platform Overview"
                  videoId="PLACEHOLDER"
                  description="Full walkthrough of the GuideAI platform — from installation to creating your first guide."
                />

                {/* Architecture diagram screenshot */}
                <ScreenshotPlaceholder
                  id="screenshot-architecture"
                  caption="GuideAI architecture — SDK, Scanner CLI, Dashboard, Browser Copilot, and Backend working together."
                  screenshotPath="architecture-overview.png"
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Platform architecture
                </h3>
                <div className="mt-4 space-y-3 text-sm text-zinc-400">
                  <p>
                    <strong className="text-zinc-200">Full SDK</strong> (<code className="text-xs text-violet-400">guideai.js</code>) —
                    Guides, AI chat, browser copilot, floating bubble,
                    segmentation, and deep UI analyzer. Handles guide playback,
                    recording, and LLM-powered walkthroughs.
                  </p>
                  <p>
                    <strong className="text-zinc-200">Tracking SDK</strong> (<code className="text-xs text-cyan-400">guideai-tracking.js</code>) —
                    Friction analytics, all detection modules (rage clicks, dead
                    clicks, form tracking), help hints, announcements, NPS/CSAT
                    surveys, feedback, chips, and session recording. No bubble,
                    chat, guides, or copilot.
                  </p>
                  <p>
                    <strong className="text-zinc-200">Scanner CLI</strong> —
                    Analyzes your codebase to build a knowledge base of routes
                    and elements. Supports 8+ frameworks.
                  </p>
                  <p>
                    <strong className="text-zinc-200">Dashboard</strong> —
                    Admin UI for creating guides, viewing analytics, managing
                    settings, and accessing API keys.
                  </p>
                  <p>
                    <strong className="text-zinc-200">Chrome Extension</strong>{" "}
                    — Visual guide builder with element picker and live
                    recording overlay.
                  </p>
                  <p>
                    <strong className="text-zinc-200">Backend</strong> —
                    FastAPI + PostgreSQL + Redis + Cloudflare Workers AI for
                    LLM-powered features.
                  </p>
                </div>
              </div>

              {/* ============================================ */}
              {/* CHOOSE YOUR BUNDLE */}
              {/* ============================================ */}
              <div id="choose-bundle" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">
                  Choose Your Bundle
                </h2>
                <p className="mt-4 text-lg text-zinc-400">
                  GuideAI ships two separate bundles. Pick the one that matches
                  your needs.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {/* Full SDK */}
                  <div className="overflow-hidden rounded-xl border-2 border-violet-500/30 bg-zinc-900/50">
                    <div className="flex items-center gap-3 border-b border-violet-500/20 bg-violet-500/5 px-6 py-4">
                      <Package className="h-5 w-5 text-violet-400" />
                      <div>
                        <h3 className="font-semibold text-white">Full SDK</h3>
                        <code className="text-xs text-violet-400">guideai.js</code>
                      </div>
                      <span className="ml-auto rounded bg-violet-500/10 px-2 py-0.5 text-xs font-medium text-violet-400">
                        Recommended
                      </span>
                    </div>
                    <div className="space-y-4 p-6">
                      <p className="text-sm text-zinc-400">
                        Interactive guides, AI chat, browser copilot, and the
                        floating bubble. For guide-based onboarding, copilot
                        assistance, and visual walkthroughs.
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                          Includes
                        </h4>
                        <ul className="space-y-1.5 text-sm text-zinc-300">
                          {[
                            "Interactive guide playback",
                            "AI browser copilot & chat",
                            "Floating bubble (drift / crawl)",
                            "Guide recording & authoring",
                            "Deep UI analyzer",
                            "Knowledge base loading",
                            "Segmentation & targeting",
                            "NPS & CSAT surveys",
                          ].map((f) => (
                            <li key={f} className="flex items-center gap-2">
                              <Check className="h-3.5 w-3.5 shrink-0 text-violet-400" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                          Not included
                        </h4>
                        <ul className="space-y-1.5 text-sm text-zinc-500">
                          {[
                            "Rage / dead click detection",
                            "Form & scroll tracking",
                            "Error & performance tracking",
                            "Help hints & announcements",
                            "Session recording",
                            "Feedback prompts",
                          ].map((f) => (
                            <li key={f} className="flex items-center gap-2">
                              <span className="text-zinc-600">-</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <CodeBlock
                        code={`<script
  src="https://cdn.3guideai.com/sdk/guideai.js"
  data-site-id="site_YOUR_SITE_ID"
  data-token="pk_live_YOUR_TOKEN"
></script>`}
                        language="html"
                      />
                    </div>
                  </div>

                  {/* Tracking SDK */}
                  <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50">
                    <div className="flex items-center gap-3 border-b border-zinc-800 bg-zinc-900/80 px-6 py-4">
                      <Package className="h-5 w-5 text-cyan-400" />
                      <div>
                        <h3 className="font-semibold text-white">Tracking SDK</h3>
                        <code className="text-xs text-cyan-400">guideai-tracking.js</code>
                      </div>
                      <span className="ml-auto rounded bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-cyan-400">
                        Lightweight
                      </span>
                    </div>
                    <div className="space-y-4 p-6">
                      <p className="text-sm text-zinc-400">
                        Analytics-only bundle. All tracking, detection, and
                        engagement UI without the guide/chat/copilot overhead.
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                          Includes
                        </h4>
                        <ul className="space-y-1.5 text-sm text-zinc-300">
                          {[
                            "Full event tracking & detection",
                            "Rage click / dead click detection",
                            "Help hints & announcements",
                            "NPS & CSAT surveys",
                            "Feedback prompts",
                            "Chips (contextual nudges)",
                            "Session recording",
                            "Feature flag support",
                          ].map((f) => (
                            <li key={f} className="flex items-center gap-2">
                              <Check className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                          Not included
                        </h4>
                        <ul className="space-y-1.5 text-sm text-zinc-500">
                          {[
                            "Floating bubble",
                            "AI chat & copilot",
                            "Guide playback",
                            "Guide recording",
                            "Resource center",
                            "Support chat",
                          ].map((f) => (
                            <li key={f} className="flex items-center gap-2">
                              <span className="text-zinc-600">-</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <CodeBlock
                        code={`<script
  src="https://cdn.3guideai.com/sdk/guideai-tracking.js"
  data-site-id="site_YOUR_SITE_ID"
  data-token="pk_live_YOUR_TOKEN"
></script>`}
                        language="html"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
                  <h3 className="font-semibold text-white">
                    Which bundle should I use?
                  </h3>
                  <div className="mt-4 space-y-3 text-sm text-zinc-400">
                    <p>
                      <strong className="text-violet-400">Use the Full SDK</strong> if
                      you want interactive guides, AI chat, the floating bubble,
                      or browser copilot. It focuses on guide-based onboarding
                      and AI assistance — it does <strong className="text-zinc-200">not</strong> include
                      friction analytics or detection modules.
                    </p>
                    <p>
                      <strong className="text-cyan-400">Use the Tracking SDK</strong> if
                      you need friction analytics, rage/dead click detection,
                      form tracking, error monitoring, session recording,
                      surveys, and announcements — without any guide overlay or
                      chat. Guide-related methods (<code className="rounded bg-zinc-800 px-1 text-xs text-zinc-300">showGuideById</code>,{" "}
                      <code className="rounded bg-zinc-800 px-1 text-xs text-zinc-300">dismissGuide</code>,{" "}
                      <code className="rounded bg-zinc-800 px-1 text-xs text-zinc-300">startRecording</code>, etc.)
                      are available as no-ops so you can switch bundles without
                      changing your code.
                    </p>
                    <p>
                      <strong className="text-zinc-200">Use both together</strong> if
                      you want the full experience — add both script tags and
                      get guides + copilot + analytics + detection.
                      Both bundles expose{" "}
                      <code className="rounded bg-zinc-800 px-1 text-xs text-violet-400">window.guideai</code>{" "}
                      and use the same stub loader pattern.
                    </p>
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Bundle comparison
                </h3>
                <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-800">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-zinc-800 bg-zinc-900/80">
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">Feature</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-violet-400">Full SDK</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-cyan-400">Tracking SDK</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50">
                      {[
                        ["Guide playback", true, false],
                        ["AI chat & copilot", true, false],
                        ["Floating bubble (drift / crawl)", true, false],
                        ["Guide recording & authoring", true, false],
                        ["Deep UI analyzer", true, false],
                        ["Knowledge base loading", true, false],
                        ["Segmentation & targeting", true, false],
                        ["NPS & CSAT surveys", true, true],
                        ["Chips (contextual nudges)", true, true],
                        ["Basic session events", true, false],
                        ["Full event tracking & batching", false, true],
                        ["Rage / dead click detection", false, true],
                        ["Form tracking", false, true],
                        ["Scroll & engagement tracking", false, true],
                        ["Error & performance tracking", false, true],
                        ["Session recording", false, true],
                        ["Help hints", false, true],
                        ["Announcements", false, true],
                        ["Feedback prompts", false, true],
                        ["Feature flags", false, true],
                      ].map(([feature, full, tracking]) => (
                        <tr key={feature as string}>
                          <td className="px-4 py-2.5 text-sm text-zinc-400">{feature as string}</td>
                          <td className="px-4 py-2.5 text-center text-sm">
                            {full ? (
                              <Check className="mx-auto h-4 w-4 text-violet-400" />
                            ) : (
                              <span className="text-zinc-600">—</span>
                            )}
                          </td>
                          <td className="px-4 py-2.5 text-center text-sm">
                            {tracking ? (
                              <Check className="mx-auto h-4 w-4 text-cyan-400" />
                            ) : (
                              <span className="text-zinc-600">—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ============================================ */}
              {/* GETTING STARTED */}
              {/* ============================================ */}
              <div id="getting-started" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">
                  1) Install the SDK on your website
                </h2>
                <p className="mt-4 text-lg text-zinc-400">
                  Get GuideAI running on your site in three steps.
                </p>

                {/* Quick Start Video */}
                <YouTubeEmbed
                  title="Quick Start Tutorial"
                  videoId="PLACEHOLDER"
                  description="Install the SDK, scan your codebase, and deploy your first guide."
                />

                <div className="mt-10 space-y-10">
                  {/* Step 1 */}
                  <div className="flex gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-lg font-bold text-white">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">
                        Scan your project
                      </h3>
                      <p className="mt-1 text-zinc-400">
                        Run the scanner against your codebase to build your
                        knowledge base. The scanner auto-detects your framework.
                      </p>
                      <CodeBlock
                        code="npx guideai-scan --key sk_live_YOUR_KEY --dir ./my-app"
                        language="bash"
                      />
                      <ScreenshotPlaceholder
                        id="screenshot-scanner-terminal"
                        caption="Terminal output after running the scanner CLI on a Next.js project."
                        screenshotPath="scanner-terminal-output.png"
                      />
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-lg font-bold text-white">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">
                        Add the CDN script to your site
                      </h3>
                      <p className="mt-1 text-zinc-400">
                        Paste one of these script tags before{" "}
                        <code className="rounded bg-zinc-800 px-1 text-xs text-violet-400">
                          {"</body>"}
                        </code>{" "}
                        in your HTML. No npm install or build step required.
                      </p>
                      <p className="mt-2 text-sm text-zinc-500">
                        <strong className="text-violet-400">Full SDK</strong> — guides, chat, copilot, and bubble:
                      </p>
                      <CodeBlock
                        code={`<script
  src="https://cdn.3guideai.com/sdk/guideai.js"
  data-site-id="site_YOUR_SITE_ID"
  data-token="pk_live_YOUR_TOKEN"
></script>`}
                        language="html"
                      />
                      <p className="mt-4 text-sm text-zinc-500">
                        <strong className="text-cyan-400">Tracking SDK</strong> — friction analytics, detection, surveys, and announcements:
                      </p>
                      <CodeBlock
                        code={`<script
  src="https://cdn.3guideai.com/sdk/guideai-tracking.js"
  data-site-id="site_YOUR_SITE_ID"
  data-token="pk_live_YOUR_TOKEN"
></script>`}
                        language="html"
                      />
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-lg font-bold text-white">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">
                        Identify your users (optional)
                      </h3>
                      <p className="mt-1 text-zinc-400">
                        Pass visitor and account info so guides can be
                        personalized and targeted.
                      </p>
                      <CodeBlock
                        code={`window.guideai.initialize({
  visitor: {
    id: "user_123",
    email: "jane@acme.com",
    full_name: "Jane Doe",
    role: "admin",
  },
  account: {
    id: "acme_456",
    name: "Acme Corp",
    planLevel: "pro",
    is_paying: true,
    monthly_value: 299,
  },
});`}
                        language="javascript"
                      />
                    </div>
                  </div>
                </div>

                <p className="mt-8 text-zinc-400">
                  That&apos;s it. With the <strong className="text-violet-400">Full SDK</strong>,
                  users will see the floating help bubble, receive in-app
                  guides, and have access to AI chat. With the{" "}
                  <strong className="text-cyan-400">Tracking SDK</strong>,
                  friction analytics, detection, surveys, and announcements
                  start working immediately. Use both together for the
                  complete experience.
                </p>

                <ScreenshotPlaceholder
                  id="screenshot-bubble-live"
                  caption="The GuideAI bubble appearing on a live site after installation."
                  screenshotPath="bubble-on-live-site.png"
                />
              </div>

              {/* ============================================ */}
              {/* ADD THE CDN */}
              {/* ============================================ */}
              <div id="add-cdn" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">Add the CDN</h2>
                <p className="mt-4 text-zinc-400">
                  Both bundles are delivered via CDN as IIFE scripts. No npm
                  install or build step required. Just two required attributes
                  on the script tag.
                </p>

                {/* Basic */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Basic script tag
                </h3>
                <p className="mt-2 text-zinc-400">
                  Choose the bundle that fits your use case.
                </p>
                <p className="mt-3 text-sm font-medium text-violet-400">
                  Full SDK (guides + chat + copilot + bubble):
                </p>
                <CodeBlock
                  code={`<script
  src="https://cdn.3guideai.com/sdk/guideai.js"
  data-site-id="site_YOUR_SITE_ID"
  data-token="pk_live_YOUR_TOKEN"
></script>`}
                  language="html"
                />
                <p className="mt-4 text-sm font-medium text-cyan-400">
                  Tracking SDK (analytics-only):
                </p>
                <CodeBlock
                  code={`<script
  src="https://cdn.3guideai.com/sdk/guideai-tracking.js"
  data-site-id="site_YOUR_SITE_ID"
  data-token="pk_live_YOUR_TOKEN"
></script>`}
                  language="html"
                />

                {/* Async loader */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Async stub loader (non-blocking)
                </h3>
                <p className="mt-2 text-zinc-400">
                  Use this snippet to load either bundle without blocking page render.
                  It creates{" "}
                  <code className="rounded bg-zinc-800 px-1 text-xs text-violet-400">
                    window.guideai
                  </code>{" "}
                  immediately and queues method calls until the full script
                  loads. Both bundles use the same stub pattern.
                </p>
                <p className="mt-3 text-sm font-medium text-violet-400">
                  Full SDK async loader:
                </p>
                <CodeBlock
                  code={`<script>
(function(siteId, publicToken, apiUrl, cdnUrl){
  (function(p, e, n, d){
    var v, w, x, o;
    o = p[d] = p[d] || {};
    o._q = o._q || [];
    o._loaded = false;
    v = ['initialize','identify','updateOptions','pageLoad',
         'markFeature','showGuideById','dismissGuide',
         'validateGuideById','on','destroy','flushNow',
         'clearSession','startRecording','stopRecording',
         'cancelRecording','saveGuide',
         'showNPSSurvey','showCSATSurvey'];
    for (w = 0, x = v.length; w < x; ++w) (function(m){
      o[m] = o[m] || function(){
        o._q[m === 'initialize' ? 'unshift' : 'push'](
          [m].concat([].slice.call(arguments, 0))
        );
      };
    })(v[w]);
    var y = e.createElement(n);
    y.async = true;
    y.src = (cdnUrl || 'https://cdn.3guideai.com') + '/sdk/guideai.js';
    y.setAttribute('data-site-id', siteId);
    y.setAttribute('data-token', publicToken);
    if (apiUrl) y.setAttribute('data-api-url', apiUrl);
    var z = e.getElementsByTagName(n)[0];
    z.parentNode.insertBefore(y, z);
  })(window, document, 'script', 'guideai');
})(
  'site_YOUR_SITE_ID',
  'pk_live_YOUR_TOKEN',
  undefined, // apiUrl (optional)
  undefined  // cdnUrl (optional)
);
</script>`}
                  language="html"
                />
                <p className="mt-4 text-sm font-medium text-cyan-400">
                  Tracking SDK async loader:
                </p>
                <CodeBlock
                  code={`<script>
(function(siteId, publicToken, apiUrl, cdnUrl){
  (function(p, e, n, d){
    var v, w, x, o;
    o = p[d] = p[d] || {};
    o._q = o._q || [];
    o._loaded = false;
    v = ['initialize','identify','updateOptions','pageLoad','track',
         'trackFeature','markFeature','on','destroy','flushNow',
         'clearSession','showNPSSurvey','showCSATSurvey'];
    for (w = 0, x = v.length; w < x; ++w) (function(m){
      o[m] = o[m] || function(){
        o._q[m === 'initialize' ? 'unshift' : 'push'](
          [m].concat([].slice.call(arguments, 0))
        );
      };
    })(v[w]);
    var y = e.createElement(n);
    y.async = true;
    // NOTE: Use guideai-tracking.js for tracking-only
    y.src = (cdnUrl || 'https://cdn.3guideai.com') + '/sdk/guideai-tracking.js';
    y.setAttribute('data-site-id', siteId);
    y.setAttribute('data-token', publicToken);
    if (apiUrl) y.setAttribute('data-api-url', apiUrl);
    var z = e.getElementsByTagName(n)[0];
    z.parentNode.insertBefore(y, z);
  })(window, document, 'script', 'guideai');
})(
  'site_YOUR_SITE_ID',
  'pk_live_YOUR_TOKEN',
  undefined, // apiUrl (optional)
  undefined  // cdnUrl (optional)
);
</script>`}
                  language="html"
                />

                {/* Full example — Full SDK */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Full SDK — all options
                  <span className="ml-3 inline-flex items-center rounded bg-violet-500/10 px-2 py-0.5 text-xs font-normal text-violet-400">
                    guideai.js
                  </span>
                </h3>
                <p className="mt-2 text-zinc-400">
                  The Full SDK script tag with every available attribute.
                </p>
                <CodeBlock
                  code={`<script
  src="https://cdn.3guideai.com/sdk/guideai.js"
  data-site-id="site_abc123"
  data-token="pk_live_xyz789"
  data-api-url="https://api.3guideai.com"
  data-cdn-url="https://cdn.3guideai.com"
  data-bubble-enabled="true"
  data-bubble-position="bottom-right"
  data-bubble-icon="robot"
  data-bubble-mode="drift"
  data-bubble-label=""
  data-widget-mode="guide"
  data-guides-enabled="true"
  data-auto-advance-on-target-click="true"
  data-chip-dismiss-seconds="300"
  data-theme-primary="#6366f1"
  data-theme-background="#ffffff"
  data-theme-text="#111827"
  data-theme-font="Inter"
></script>`}
                  language="html"
                />

                {/* Full example — Tracking SDK */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Tracking SDK — all options
                  <span className="ml-3 inline-flex items-center rounded bg-cyan-500/10 px-2 py-0.5 text-xs font-normal text-cyan-400">
                    guideai-tracking.js
                  </span>
                </h3>
                <p className="mt-2 text-zinc-400">
                  The Tracking SDK script tag with every available attribute.
                </p>
                <CodeBlock
                  code={`<script
  src="https://cdn.3guideai.com/sdk/guideai-tracking.js"
  data-site-id="site_abc123"
  data-token="pk_live_xyz789"
  data-api-url="https://api.3guideai.com"
  data-cdn-url="https://cdn.3guideai.com"
  data-recording="true"
  data-idle-timeout="20000"
  data-session-timeout-ms="1800000"
  data-batch-size="50"
  data-batch-interval-ms="30000"
  data-geolocation="off"
  data-help-hints="true"
  data-feedback-auto-prompt="true"
  data-feedback-prompt-delay-ms="300000"
  data-feedback-prompt-min-pageviews="10"
  data-announcement-surface="modal"
  data-announcement-frequency="once"
  data-announcement-display-mode="auto"
  data-announcement-auto-show-delay-ms="500"
  data-chip-dismiss-seconds="300"
  data-theme-primary="#6366f1"
  data-theme-background="#ffffff"
  data-theme-text="#111827"
  data-theme-font="Inter"
></script>`}
                />

                {/* SPA */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Single-page apps (React, Vue, Angular)
                </h3>
                <p className="mt-2 text-zinc-400">
                  The SDK auto-detects route changes in SPAs via the History
                  API and MutationObserver. If you use custom routing you can
                  trigger page loads manually:
                </p>
                <CodeBlock
                  code={`// Manual page_view for custom routing
window.guideai.pageLoad("/dashboard/settings");`}
                  language="javascript"
                />

                {/* Next.js example */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Next.js example
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Swap <code className="text-xs text-violet-400">guideai.js</code> for{" "}
                  <code className="text-xs text-cyan-400">guideai-tracking.js</code> if
                  you only need tracking.
                </p>
                <CodeBlock
                  code={`// app/layout.tsx
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        {/* Full SDK — or use guideai-tracking.js for tracking-only */}
        <Script
          src="https://cdn.3guideai.com/sdk/guideai.js"
          data-site-id="site_YOUR_SITE_ID"
          data-token="pk_live_YOUR_TOKEN"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}`}
                  language="tsx"
                />

                {/* React SPA example */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  React (Vite / CRA) example
                </h3>
                <CodeBlock
                  code={`<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>My App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
    <script
      src="https://cdn.3guideai.com/sdk/guideai.js"
      data-site-id="site_YOUR_SITE_ID"
      data-token="pk_live_YOUR_TOKEN"
    ></script>
  </body>
</html>`}
                  language="html"
                />

                {/* Vue example */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Vue / Nuxt example
                </h3>
                <CodeBlock
                  code={`// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://cdn.3guideai.com/sdk/guideai.js",
          "data-site-id": "site_YOUR_SITE_ID",
          "data-token": "pk_live_YOUR_TOKEN",
          defer: true,
        },
      ],
    },
  },
});`}
                  language="typescript"
                />

                {/* Plain HTML */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Plain HTML example
                </h3>
                <CodeBlock
                  code={`<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Welcome</h1>

    <!-- Add before closing body tag -->
    <script
      src="https://cdn.3guideai.com/sdk/guideai.js"
      data-site-id="site_YOUR_SITE_ID"
      data-token="pk_live_YOUR_TOKEN"
    ></script>
  </body>
</html>`}
                  language="html"
                />

                {/* CDN Installation Video */}
                <YouTubeEmbed
                  title="CDN Installation Walkthrough"
                  videoId="PLACEHOLDER"
                  description="Step-by-step video showing how to add the GuideAI CDN to different frameworks (Next.js, React, Vue, HTML)."
                />
              </div>

              {/* ============================================ */}
              {/* SCANNER CLI */}
              {/* ============================================ */}
              <div id="scanner" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">Scanner CLI</h2>
                <p className="mt-4 text-zinc-400">
                  The scanner (<code className="rounded bg-zinc-800 px-1 text-xs text-violet-400">@guideai/scanner</code>)
                  analyzes your codebase and uploads a knowledge base to
                  GuideAI. It parses your JSX/TSX with Babel, extracts routes
                  and interactive elements, and generates 6-tier fingerprints.
                </p>

                {/* Scanner Video */}
                <YouTubeEmbed
                  title="Scanner CLI Deep Dive"
                  videoId="PLACEHOLDER"
                  description="Learn how to scan your codebase, understand the output, and use dry-run mode for testing."
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Install & run
                </h3>
                <CodeBlock
                  code={`# Run with npx (no install)
npx guideai-scan --key sk_live_YOUR_KEY --dir ./my-app

# Or install globally
npm install -g @guideai/scanner
guideai-scan --key sk_live_YOUR_KEY --dir ./my-app`}
                  language="bash"
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  CLI options
                </h3>
                <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-800">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-zinc-800 bg-zinc-900/80">
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">
                          Flag
                        </th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">
                          Required
                        </th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">
                          Default
                        </th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">
                          What it does
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50">
                      {[
                        [
                          "--key",
                          "Yes*",
                          "—",
                          "Your site API key (sk_live_*). Not needed with --dry-run.",
                        ],
                        [
                          "--dir",
                          "No",
                          "cwd",
                          "Path to your project root.",
                        ],
                        [
                          "--api-url",
                          "No",
                          "https://cdn.3guideai.com",
                          "GuideAI API endpoint.",
                        ],
                        [
                          "--dry-run",
                          "No",
                          "false",
                          "Output scan result as JSON without uploading.",
                        ],
                        [
                          "--output",
                          "No",
                          "—",
                          "Write the scan result to a file.",
                        ],
                      ].map(([flag, req, def, desc]) => (
                        <tr key={flag}>
                          <td className="px-4 py-3">
                            <code className="text-xs text-violet-400">
                              {flag}
                            </code>
                          </td>
                          <td className="px-4 py-3 text-sm text-zinc-400">
                            {req}
                          </td>
                          <td className="px-4 py-3">
                            <code className="text-xs text-zinc-500">{def}</code>
                          </td>
                          <td className="px-4 py-3 text-sm text-zinc-400">
                            {desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Supported frameworks
                </h3>
                <p className="mt-2 text-zinc-400">
                  The scanner auto-detects your framework from package.json and
                  directory structure. No config needed.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    "Next.js (App Router)",
                    "Next.js (Pages Router)",
                    "React Router",
                    "Angular",
                    "Vue / Nuxt",
                    "Remix",
                    "SvelteKit",
                    "Static HTML",
                  ].map((fw) => (
                    <div
                      key={fw}
                      className="rounded-lg bg-zinc-900 px-4 py-3 text-center text-sm text-zinc-300"
                    >
                      {fw}
                    </div>
                  ))}
                </div>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Dry run (preview without uploading)
                </h3>
                <CodeBlock
                  code={`npx guideai-scan --dir ./my-app --dry-run --output scan-result.json`}
                  language="bash"
                />

                <ScreenshotPlaceholder
                  id="screenshot-scanner-output"
                  caption="Scanner dry-run JSON output showing detected routes, elements, and fingerprints."
                  screenshotPath="scanner-dry-run-output.png"
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Scan output structure
                </h3>
                <CodeBlock
                  code={`{
  "framework": "nextjs-app-router",
  "routes": [
    {
      "path": "/dashboard",
      "page_title": "Dashboard",
      "component_name": "Dashboard",
      "dynamic_segments": [],
      "auth_required": false,
      "headings": ["Dashboard", "Analytics"]
    }
  ],
  "elements": [
    {
      "id": "elem_abc123",
      "route_path": "/dashboard",
      "tag": "button",
      "dom_id": "save-btn",
      "text": "Save Changes",
      "fingerprint": { /* 6-tier signals */ }
    }
  ],
  "ui_map": { /* hierarchical component tree */ },
  "duration_ms": 1234
}`}
                  language="json"
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Vite plugin (auto-scan on build)
                </h3>
                <CodeBlock
                  code={`// vite.config.ts
import { guideaiPlugin } from "@guideai/scanner/plugins/vite";

export default defineConfig({
  plugins: [
    guideaiPlugin({
      key: process.env.GUIDEAI_KEY,
    }),
  ],
});`}
                  language="typescript"
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Webpack plugin
                </h3>
                <CodeBlock
                  code={`// webpack.config.js
const { GuideAIWebpackPlugin } = require("@guideai/scanner/plugins/webpack");

module.exports = {
  plugins: [
    new GuideAIWebpackPlugin({
      key: process.env.GUIDEAI_KEY,
    }),
  ],
};`}
                  language="javascript"
                />
              </div>

              {/* ============================================ */}
              {/* DASHBOARD */}
              {/* ============================================ */}
              <div id="dashboard" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">Dashboard</h2>
                <p className="mt-4 text-zinc-400">
                  The GuideAI dashboard is where you manage guides, view
                  analytics, configure settings, and access your API keys.
                </p>

                <YouTubeEmbed
                  title="Dashboard Tour"
                  videoId="PLACEHOLDER"
                  description="Complete tour of the GuideAI dashboard — manage guides, view analytics, configure settings, and access API keys."
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Getting your API keys
                </h3>
                <p className="mt-2 text-zinc-400">
                  Navigate to <strong className="text-zinc-200">Settings → API Keys</strong> to find:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                  <li>
                    <code className="rounded bg-zinc-800 px-1 text-xs text-cyan-400">site_*</code>{" "}
                    — Your site ID (used in the script tag)
                  </li>
                  <li>
                    <code className="rounded bg-zinc-800 px-1 text-xs text-cyan-400">pk_live_*</code>{" "}
                    — Public token (safe for client-side, used in script tag)
                  </li>
                  <li>
                    <code className="rounded bg-zinc-800 px-1 text-xs text-cyan-400">sk_live_*</code>{" "}
                    — Secret key (server-side only, used for Scanner CLI)
                  </li>
                </ul>

                <ScreenshotPlaceholder
                  id="screenshot-dashboard-api-keys"
                  caption="Dashboard Settings page showing where to find your site ID, public token, and secret key."
                  screenshotPath="dashboard-api-keys.png"
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Managing guides
                </h3>
                <p className="mt-2 text-zinc-400">
                  The Guides section lets you create, edit, publish, and
                  archive guides. You can set targeting rules, audience
                  segments, and trigger conditions (manual, auto, URL match, element click).
                </p>

                <ScreenshotPlaceholder
                  id="screenshot-dashboard-guides"
                  caption="Guide management view — create, edit, publish, and set targeting rules."
                  screenshotPath="dashboard-guides-list.png"
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Viewing analytics
                </h3>
                <p className="mt-2 text-zinc-400">
                  The Analytics section shows guide completion rates, friction
                  points, funnel analysis, and session recordings.
                </p>

                <ScreenshotPlaceholder
                  id="screenshot-dashboard-analytics"
                  caption="Analytics dashboard showing guide completion rates, funnel drop-off, and friction detection."
                  screenshotPath="dashboard-analytics.png"
                />
              </div>

              {/* ============================================ */}
              {/* CONFIGURATION */}
              {/* ============================================ */}
              <div id="configuration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">
                  2) Public API (what you can call)
                </h2>
                <p className="mt-4 text-zinc-400">
                  Both bundles are configured via{" "}
                  <code className="rounded bg-zinc-800 px-1 text-xs text-violet-400">
                    data-*
                  </code>{" "}
                  attributes on the script tag. Each bundle only reads the
                  attributes relevant to its features. Sections below are
                  labeled with the bundle they apply to.
                </p>

                {/* Required */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Required attributes
                </h3>
                <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-800">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-zinc-800 bg-zinc-900/80">
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">
                          Attribute
                        </th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">
                          Type
                        </th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">
                          What it does
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50">
                      <tr>
                        <td className="px-4 py-3">
                          <code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">
                            data-site-id
                          </code>
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-500">
                          string
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          Your site/workspace identifier from the dashboard.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">
                            data-token
                          </code>
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-500">
                          string
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          Public API token (starts with <code className="text-xs text-zinc-300">pk_live_</code>).
                          Also used to derive the AES-256-GCM encryption key.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Endpoints */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Endpoints
                </h3>
                <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-800">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-zinc-800 bg-zinc-900/80">
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">Attribute</th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">Default</th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">What it does</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50">
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-api-url</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">https://cdn.3guideai.com</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Backend API URL (override for self-hosted).</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-cdn-url</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">https://cdn.3guideai.com</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">CDN base URL for knowledge base and asset loading.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Bubble */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Bubble (floating button)
                  <span className="ml-3 inline-flex items-center rounded bg-violet-500/10 px-2 py-0.5 text-xs font-normal text-violet-400">
                    Full SDK only
                  </span>
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  These attributes only apply to the Full SDK (<code className="text-xs text-violet-400">guideai.js</code>).
                  The Tracking SDK does not render a bubble.
                </p>
                <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-800">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-zinc-800 bg-zinc-900/80">
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">Attribute</th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">Default</th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">Options</th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">What it does</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50">
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-bubble-enabled</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">true</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-500">true / false</td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Show or hide the floating bubble.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-bubble-position</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">bottom-right</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-500">bottom-right, bottom-left</td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Which corner the bubble sits in.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-bubble-icon</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">robot</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-500">robot, ant, owl, fox, cat, bee, spark</td>
                        <td className="px-4 py-3 text-sm text-zinc-400">The mascot icon on the bubble.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-bubble-image</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">—</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-500">URL (GIF/PNG)</td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Custom image that overrides the icon.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-bubble-mode</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">drift</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-500">drift, crawl</td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Animation style. Drift = smooth float, Crawl = edge walking.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-bubble-label</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">&quot;&quot;</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-500">string</td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Optional label text next to the bubble.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-widget-mode</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">guide</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-500">guide, support, combined</td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Controls bubble behavior: AI chat, live support, or both.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Guides */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Guides
                  <span className="ml-3 inline-flex items-center rounded bg-violet-500/10 px-2 py-0.5 text-xs font-normal text-violet-400">
                    Full SDK only
                  </span>
                </h3>
                <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-800">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-zinc-800 bg-zinc-900/80">
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">Attribute</th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">Default</th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">What it does</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50">
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-guides-enabled</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">true</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Turn guide playback on or off.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-auto-advance-on-target-click</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">true</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Auto-advance when user clicks the highlighted element.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-feedback-auto-prompt</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">true</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Ask for feedback after guide completion.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-feedback-prompt-delay-ms</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">300000</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Delay before showing feedback prompt (ms).</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-chip-dismiss-seconds</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">300</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">How long &quot;Continue your guide&quot; chips stay visible.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Analytics & Session */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Analytics & session
                  <span className="ml-3 inline-flex items-center rounded bg-cyan-500/10 px-2 py-0.5 text-xs font-normal text-cyan-400">
                    Tracking SDK
                  </span>
                </h3>
                <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-800">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-zinc-800 bg-zinc-900/80">
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">Attribute</th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">Default</th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">What it does</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50">
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-recording</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">false</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Enable session recording for replay.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-idle-timeout</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">20000</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Inactivity threshold before idle (ms).</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-session-timeout-ms</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">1800000</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Session rotation timeout (default 30 min).</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-batch-size</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">50</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Events to batch before flushing.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-batch-interval-ms</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">30000</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Flush interval (ms).</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-geolocation</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">off</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Geo tracking: &quot;off&quot;, &quot;granted-only&quot;, &quot;prompt&quot;.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Theme */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Theming
                </h3>
                <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-800">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-zinc-800 bg-zinc-900/80">
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">Attribute</th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">What it does</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50">
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-theme-primary</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Primary accent color for buttons & highlights.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-theme-background</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Background color for tooltips & panels.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-theme-text</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Text color in guide content.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-theme-font</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Font family for guide content.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Announcements */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Announcements
                  <span className="ml-3 inline-flex items-center rounded bg-cyan-500/10 px-2 py-0.5 text-xs font-normal text-cyan-400">
                    Tracking SDK
                  </span>
                </h3>
                <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-800">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-zinc-800 bg-zinc-900/80">
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">Attribute</th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">Default</th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">What it does</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50">
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-announcement-surface</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">modal</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Display mode: modal, banner, drawer.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-announcement-frequency</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">once</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">once, once_per_session, once_per_day, every_visit.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-announcement-display-mode</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">auto</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">beacon (shows pulsing dot), auto (shows immediately), banner.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">data-announcement-auto-show-delay-ms</code></td>
                        <td className="px-4 py-3"><code className="text-xs text-zinc-400">500</code></td>
                        <td className="px-4 py-3 text-sm text-zinc-400">Delay before auto-showing announcements.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ScreenshotPlaceholder
                  id="screenshot-bubble-positions"
                  caption="Bubble modes — Drift (smooth float) and Crawl (edge walking ant animation)."
                  screenshotPath="bubble-modes.png"
                />
              </div>

              {/* ============================================ */}
              {/* API REFERENCE */}
              {/* ============================================ */}
              <div id="api-reference" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">
                  API Reference
                </h2>
                <p className="mt-4 text-zinc-400">
                  Both bundles expose{" "}
                  <code className="rounded bg-zinc-800 px-1.5 text-sm text-violet-400">
                    window.guideai
                  </code>
                  . Each bundle has its own set of methods. Methods tagged{" "}
                  <span className="inline-flex items-center rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">
                    Full SDK
                  </span>{" "}
                  are only functional in <code className="text-xs text-violet-400">guideai.js</code>.
                  Methods tagged{" "}
                  <span className="inline-flex items-center rounded bg-cyan-500/10 px-1.5 py-0.5 text-xs text-cyan-400">
                    Tracking SDK
                  </span>{" "}
                  are only functional in <code className="text-xs text-cyan-400">guideai-tracking.js</code>.
                  Methods tagged{" "}
                  <span className="inline-flex items-center rounded bg-green-500/10 px-1.5 py-0.5 text-xs text-green-400">
                    Both
                  </span>{" "}
                  work in either bundle. Guide-related methods exist as no-ops
                  in the Tracking SDK so you can switch bundles without
                  changing your code.
                </p>

                <YouTubeEmbed
                  title="SDK API Methods In Action"
                  videoId="PLACEHOLDER"
                  description="Live coding demo showing all major SDK methods — identify users, trigger guides, track events, and listen to callbacks."
                />

                {/* Shared methods (both bundles) */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Shared methods
                  <span className="ml-3 inline-flex items-center rounded bg-green-500/10 px-2 py-0.5 text-xs font-normal text-green-400">
                    Both bundles
                  </span>
                </h3>
                <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900/30 px-5">
                  <Expandable title="initialize(options) — Identify visitor & account">
                    <p className="text-sm text-zinc-400">
                      Pass visitor and account data for targeting and
                      personalization.
                    </p>
                    <CodeBlock
                      language="javascript"
                      code={`guideai.track("signup_completed", { plan: "pro" });
guideai.trackFeature("settings.saved", "Saved settings", { area: "billing" });`}
                    />
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                      <li>
                        <code>track(eventType, properties?)</code>: If{" "}
                        <code>eventType</code> is a known type, it is sent
                        as-is. Otherwise it is sent as{" "}
                        <code>event_type: "custom"</code> with{" "}
                        <code>metadata.custom_event_name = eventType</code>.
                      </li>
                      <li>
                        <code>trackFeature(featureKey, featureLabel?, properties?)</code>{" "}
                        sends <code>event_type: "feature_used"</code> with{" "}
                        <code>metadata.feature_key</code> and optional label.
                      </li>
                    </ul>
                  </Expandable>

                  <Expandable title="Identify">
                    <CodeBlock
                      language="javascript"
                      code={`guideai.identify("user_123");

guideai.initialize({
  visitor: {
    id: "user_123",           // Required
    email: "jane@acme.com",
    full_name: "Jane Doe",
    role: "admin",
    // Any custom fields...
  },
  account: {
    id: "acme_456",           // Required
    name: "Acme Corp",
    planLevel: "enterprise",
    is_paying: true,
    monthly_value: 299,
    creationDate: "2024-01-15",
    // Any custom fields...
  },
});`}
                      language="javascript"
                    />
                  </Expandable>

                  <Expandable title="identify(userId) — Simple user identification">
                    <CodeBlock
                      code={`window.guideai.identify("user_123");`}
                      language="javascript"
                    />
                  </Expandable>

                  <Expandable title="updateOptions(options) — Update visitor/account mid-session">
                    <p className="text-sm text-zinc-400">
                      Update data without reinitializing the SDK.
                    </p>
                    <CodeBlock
                      code={`window.guideai.updateOptions({
  visitor: { planLevel: "pro", role: "manager" },
});`}
                    />
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                      <li>
                        <code>identify(userId)</code> stores a{" "}
                        <code>user_id</code> for subsequent events.
                      </li>
                      <li>
                        <code>initialize({"{{ visitor, account }}"})</code>{" "}
                        stores visitor/account objects and emits an{" "}
                        <code>identify</code> event.
                      </li>
                      <li>
                        <code>updateOptions({"{{ visitor?, account? }}"})</code>{" "}
                        merges and re-emits an <code>identify</code> event.
                      </li>
                    </ul>
                  </Expandable>

                  <Expandable title="Guides">
                    <CodeBlock
                      language="javascript"
                      code={`await guideai.showGuideById("guide_id_here", 0);
await guideai.dismissGuide();`}
                    />
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                      <li>
                        <code>validateGuideById(guideId)</code> checks
                        existence/playability.
                      </li>
                      <li>
                        <code>showGuideById(guideId, stepIndex?)</code>{" "}
                        force-starts a guide (bypasses trigger rules).
                      </li>
                      <li>
                        <code>dismissGuide()</code> closes the currently playing
                        guide (if any).
                      </li>
                    </ul>
                  </Expandable>

                  <Expandable title="Navigation + lifecycle">
                    <CodeBlock
                      language="javascript"
                      code={`guideai.pageLoad(); // manual page_view for custom routers
guideai.flushNow(); // flush buffered analytics events
guideai.clearSession(); // rotate session_id (anonymous_id stays)
const off = guideai.on("player-ended", (detail) => console.log(detail));`}
                    />
                  </Expandable>

                  <Expandable title="pageLoad(route?) — Manual page view for SPAs">
                    <p className="text-sm text-zinc-400">
                      Trigger a page_view event manually. Useful for custom routers
                      where the SDK can&apos;t auto-detect navigation.
                    </p>
                    <CodeBlock
                      code={`window.guideai.pageLoad("/dashboard/settings");`}
                      language="javascript"
                    />
                  </Expandable>

                  <Expandable title="on(event, handler) — Subscribe to SDK events">
                    <p className="text-sm text-zinc-400">
                      Returns an unsubscribe function. Works in both bundles.
                    </p>
                    <CodeBlock
                      code={`const unsub = window.guideai.on("guide-completed", (data) => {
  console.log("Completed:", data.guideId);
});
unsub(); // unsubscribe`}
                      language="javascript"
                    />
                  </Expandable>

                  <Expandable title="flushNow() / clearSession() / destroy()">
                    <CodeBlock
                      code={`// Force-flush all buffered events immediately
await window.guideai.flushNow();

// Rotate session ID (call on logout)
window.guideai.clearSession();

// Tear down all SDK listeners and subsystems
window.guideai.destroy();`}
                      language="javascript"
                    />
                  </Expandable>
                </div>

                {/* Tracking SDK methods */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Tracking & detection
                  <span className="ml-3 inline-flex items-center rounded bg-cyan-500/10 px-2 py-0.5 text-xs font-normal text-cyan-400">
                    Tracking SDK
                  </span>
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  These methods are functional in the Tracking SDK (<code className="text-xs text-cyan-400">guideai-tracking.js</code>).
                </p>
                <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900/30 px-5">
                  <Expandable title="track(eventType, properties?) — Custom event tracking">
                    <CodeBlock
                      code={`window.guideai.track("upgrade_cta_clicked", {
  plan: "pro",
  source: "pricing_page",
});`}
                      language="javascript"
                    />
                  </Expandable>

                  <Expandable title="trackFeature(key, label?, properties?) — Feature usage tracking">
                    <CodeBlock
                      code={`window.guideai.trackFeature("csv_export", "Export to CSV", {
  format: "csv",
  rows: 1500,
});`}
                      language="javascript"
                    />
                  </Expandable>

                  <Expandable title="markFeature(feature) — Mark feature as used">
                    <p className="text-sm text-zinc-400">
                      Flags a product feature as used for audience targeting
                      and feature flag evaluation.
                    </p>
                    <CodeBlock
                      code={`window.guideai.markFeature("viewed_dashboard");`}
                      language="javascript"
                    />
                  </Expandable>
                </div>

                {/* Surveys */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Surveys
                </h3>
                <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900/30 px-5">
                  <Expandable title="showNPSSurvey(context?) — Show an NPS survey">
                    <p className="text-sm text-zinc-400">
                      Trigger a Net Promoter Score survey programmatically.
                      Available in both bundles.
                    </p>
                    <CodeBlock
                      code={`window.guideai.showNPSSurvey("post_onboarding");`}
                      language="javascript"
                    />
                  </Expandable>

                  <Expandable title="showCSATSurvey(context?) — Show a CSAT survey">
                    <p className="text-sm text-zinc-400">
                      Trigger a Customer Satisfaction survey. Available in both bundles.
                    </p>
                    <CodeBlock
                      code={`window.guideai.showCSATSurvey("after_support_ticket");`}
                      language="javascript"
                    />
                  </Expandable>
                </div>

                {/* Guide Control */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Guide control
                  <span className="ml-3 inline-flex items-center rounded bg-violet-500/10 px-2 py-0.5 text-xs font-normal text-violet-400">
                    Full SDK
                  </span>
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  These methods are functional in the Full SDK (<code className="text-xs text-violet-400">guideai.js</code>).
                  In the Tracking SDK, they exist as no-ops
                  (e.g., <code className="text-xs text-zinc-400">validateGuideById</code> returns{" "}
                  <code className="text-xs text-zinc-400">{`{valid: false, reason: "tracking_only"}`}</code>)
                  so you can share code between bundles.
                </p>
                <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900/30 px-5">
                  <Expandable title="showGuideById(guideId, stepIndex?) — Force-show a guide">
                    <CodeBlock
                      code={`// Start from beginning
await window.guideai.showGuideById("guide_onboarding");

// Jump to step 3 (0-indexed)
await window.guideai.showGuideById("guide_onboarding", 2);`}
                      language="javascript"
                    />
                  </Expandable>

                  <Expandable title="validateGuideById(guideId) — Check if guide is playable">
                    <CodeBlock
                      code={`const result = await window.guideai.validateGuideById("guide_onboarding");
// { valid: true } or { valid: false, reason: "..." }`}
                      language="javascript"
                    />
                  </Expandable>

                  <Expandable title="dismissGuide() — Dismiss the current guide">
                    <CodeBlock
                      code={`await window.guideai.dismissGuide();`}
                      language="javascript"
                    />
                  </Expandable>
                </div>

                {/* Recording */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Guide recording (authoring)
                  <span className="ml-3 inline-flex items-center rounded bg-violet-500/10 px-2 py-0.5 text-xs font-normal text-violet-400">
                    Full SDK
                  </span>
                </h3>
                <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900/30 px-5">
                  <Expandable title="startRecording() / stopRecording() / saveGuide()">
                    <p className="text-sm text-zinc-400">
                      Record user interactions to create a new guide
                      programmatically.
                    </p>
                    <CodeBlock
                      code={`// Start recording interactions
window.guideai.startRecording();

// ... user clicks through the workflow ...

// Stop and get recorded steps
const steps = window.guideai.stopRecording();

// Save as a draft guide
await window.guideai.saveGuide("Onboarding Flow", "Walks new users through setup");

// Or cancel without saving
window.guideai.cancelRecording();`}
                      language="javascript"
                    />
                  </Expandable>
                </div>

                {/* Common patterns */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Common patterns
                </h3>

                <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900/30 px-5">
                  <Expandable title="Identify on login — works with both bundles">
                    <p className="text-sm text-zinc-400">
                      <code className="text-xs text-green-400">initialize()</code> and{" "}
                      <code className="text-xs text-green-400">clearSession()</code> are
                      shared methods — this pattern works with either bundle.
                    </p>
                    <CodeBlock
                      code={`async function handleLogin(email, password) {
  const user = await api.login(email, password);

  // Works with both guideai.js and guideai-tracking.js
  window.guideai.initialize({
    visitor: {
      id: user.id,
      email: user.email,
      full_name: user.name,
      role: user.role,
    },
    account: {
      id: user.orgId,
      name: user.orgName,
      planLevel: user.plan,
      is_paying: true,
    },
  });
}

function handleLogout() {
  window.guideai.clearSession();
}`}
                      language="javascript"
                    />
                  </Expandable>

                  <Expandable title="Trigger a guide from a button click (Full SDK)">
                    <p className="text-sm text-zinc-400">
                      Guide methods require the Full SDK (<code className="text-xs text-violet-400">guideai.js</code>).
                    </p>
                    <CodeBlock
                      code={`// Requires guideai.js (Full SDK)
function HelpButton() {
  const handleClick = async () => {
    const result = await window.guideai.validateGuideById("guide_getting_started");
    if (result.valid) {
      await window.guideai.showGuideById("guide_getting_started");
    }
  };

  return <button onClick={handleClick}>Need help?</button>;
}`}
                      language="tsx"
                    />
                  </Expandable>

                  <Expandable title="Track a conversion event (Tracking SDK)">
                    <p className="text-sm text-zinc-400">
                      <code className="text-xs text-cyan-400">track()</code> and{" "}
                      <code className="text-xs text-cyan-400">trackFeature()</code> require
                      the Tracking SDK (<code className="text-xs text-cyan-400">guideai-tracking.js</code>).
                    </p>
                    <CodeBlock
                      code={`// Requires guideai-tracking.js (Tracking SDK)
function handlePurchase(cart) {
  window.guideai.track("purchase_completed", {
    total: cart.total,
    items: cart.items.length,
    currency: "USD",
  });

  window.guideai.trackFeature("checkout", "Completed Checkout");
}`}
                      language="javascript"
                    />
                  </Expandable>

                  <Expandable title="Use both bundles together">
                    <p className="text-sm text-zinc-400">
                      Add both script tags to get guides + copilot + full analytics.
                      Both bundles share the same{" "}
                      <code className="text-xs text-violet-400">window.guideai</code> namespace.
                    </p>
                    <CodeBlock
                      code={`<!-- Full SDK for guides, chat, copilot, bubble -->
<script
  src="https://cdn.3guideai.com/sdk/guideai.js"
  data-site-id="site_YOUR_SITE_ID"
  data-token="pk_live_YOUR_TOKEN"
  data-bubble-enabled="true"
  data-bubble-icon="robot"
></script>

<!-- Tracking SDK for analytics, detection, surveys -->
<script
  src="https://cdn.3guideai.com/sdk/guideai-tracking.js"
  data-site-id="site_YOUR_SITE_ID"
  data-token="pk_live_YOUR_TOKEN"
  data-recording="true"
  data-help-hints="true"
></script>`}
                      language="html"
                    />
                  </Expandable>
                </div>
              </div>

              {/* ============================================ */}
              {/* EVENTS */}
              {/* ============================================ */}
              <div id="events" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">
                  Event Dictionary
                </h2>
                <p className="mt-4 text-zinc-400">
                  Each bundle emits its own set of events. The{" "}
                  <strong className="text-violet-400">Full SDK</strong> emits
                  session, page, and guide events. The{" "}
                  <strong className="text-cyan-400">Tracking SDK</strong> emits
                  30+ event types covering interaction, form, error, and
                  performance tracking. All events are PII-stripped, encrypted
                  with AES-256-GCM, batched, and sent to the backend.
                </p>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Session & page events
                  <span className="ml-3 inline-flex items-center rounded bg-violet-500/10 px-2 py-0.5 text-xs font-normal text-violet-400">
                    Full SDK
                  </span>
                </h3>
                <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-800">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-zinc-800 bg-zinc-900/80">
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">Event</th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">When it fires</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50">
                      {[
                        ["session_start", "SDK initialized (includes device, referrer, locale)"],
                        ["session_end", "Page unload (includes session_ms duration)"],
                        ["page_view", "Page loaded or SPA navigation (entry_page flag on first)"],
                        ["identify", "User/account identified"],
                      ].map(([event, desc]) => (
                        <tr key={event}>
                          <td className="px-4 py-3"><code className="text-xs text-cyan-400">{event}</code></td>
                          <td className="px-4 py-3 text-sm text-zinc-400">{desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Interaction events
                  <span className="ml-3 inline-flex items-center rounded bg-cyan-500/10 px-2 py-0.5 text-xs font-normal text-cyan-400">
                    Tracking SDK
                  </span>
                </h3>
                <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-800">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-zinc-800 bg-zinc-900/80">
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">Event</th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">When it fires</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50">
                      {[
                        ["page_exit", "Leaving page (includes engagement + scroll metrics)"],
                        ["click", "Element clicked (text, tag, position, element_id)"],
                        ["double_click", "Double-click detected"],
                        ["right_click", "Right-click / context menu"],
                        ["hover", "Significant hover over interactive element"],
                        ["scroll", "Scroll with scroll_depth_pct + max_depth"],
                        ["rage_click", "3+ rapid clicks on the same non-button element"],
                        ["dead_click", "Click with no DOM response (unresponsive element)"],
                        ["dropdown_select", "Dropdown/select value changed"],
                        ["file_upload", "File input triggered"],
                      ].map(([event, desc]) => (
                        <tr key={event}>
                          <td className="px-4 py-3"><code className="text-xs text-cyan-400">{event}</code></td>
                          <td className="px-4 py-3 text-sm text-zinc-400">{desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Form events
                  <span className="ml-3 inline-flex items-center rounded bg-cyan-500/10 px-2 py-0.5 text-xs font-normal text-cyan-400">
                    Tracking SDK
                  </span>
                </h3>
                <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-800">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-zinc-800 bg-zinc-900/80">
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">Event</th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">When it fires</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50">
                      {[
                        ["form_start", "User begins interacting with a form"],
                        ["form_submit", "Form submitted successfully"],
                        ["form_abandon", "User leaves without submitting"],
                        ["form_error", "Validation error displayed"],
                      ].map(([event, desc]) => (
                        <tr key={event}>
                          <td className="px-4 py-3"><code className="text-xs text-cyan-400">{event}</code></td>
                          <td className="px-4 py-3 text-sm text-zinc-400">{desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Error & performance events
                  <span className="ml-3 inline-flex items-center rounded bg-cyan-500/10 px-2 py-0.5 text-xs font-normal text-cyan-400">
                    Tracking SDK
                  </span>
                </h3>
                <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-800">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-zinc-800 bg-zinc-900/80">
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">Event</th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">When it fires</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50">
                      {[
                        ["js_error", "Uncaught exception (stack, line, col)"],
                        ["ui_error", "DOM parsing/rendering error"],
                        ["network_error", "Failed HTTP request"],
                        ["performance", "Web Vitals + long tasks + navigation timing"],
                      ].map(([event, desc]) => (
                        <tr key={event}>
                          <td className="px-4 py-3"><code className="text-xs text-cyan-400">{event}</code></td>
                          <td className="px-4 py-3 text-sm text-zinc-400">{desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Guide events
                  <span className="ml-3 inline-flex items-center rounded bg-violet-500/10 px-2 py-0.5 text-xs font-normal text-violet-400">
                    Full SDK
                  </span>
                </h3>
                <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-800">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-zinc-800 bg-zinc-900/80">
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">Event</th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">When it fires</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50">
                      {[
                        ["guide_started", "Guide playback began"],
                        ["guide_completed", "Guide finished all steps"],
                        ["guide_step", "Step viewed"],
                        ["guide_step_action", "Step action taken (click, fill, navigate)"],
                        ["guide_step_choice", "User selected a branching choice"],
                        ["guide_step_stuck", "Element not found or unclickable"],
                        ["guide_step_retry", "Re-attempted stuck step"],
                      ].map(([event, desc]) => (
                        <tr key={event}>
                          <td className="px-4 py-3"><code className="text-xs text-cyan-400">{event}</code></td>
                          <td className="px-4 py-3 text-sm text-zinc-400">{desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ============================================ */}
              {/* GUIDE BUILDER */}
              {/* ============================================ */}
              <div id="guides-builder" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">
                  Guide Builder
                  <span className="ml-3 inline-flex items-center rounded bg-violet-500/10 px-2 py-0.5 text-sm font-normal text-violet-400">
                    Full SDK only
                  </span>
                </h2>
                <p className="mt-4 text-zinc-400">
                  The Guide Builder is a visual editor in the dashboard and
                  Chrome extension. Record interactions, edit steps, set
                  targeting, and publish — no code deploy required. Guide
                  playback requires the{" "}
                  <strong className="text-violet-400">Full SDK</strong>{" "}
                  (<code className="rounded bg-zinc-800 px-1 text-xs text-violet-400">guideai.js</code>).
                </p>

                <YouTubeEmbed
                  title="Creating Your First Guide"
                  videoId="PLACEHOLDER"
                  description="Full walkthrough: record a workflow, edit steps, add tooltips, set targeting rules, and publish your guide."
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  How it works
                </h3>
                <div className="mt-4 space-y-4">
                  {[
                    { step: "1", title: "Record", desc: "Click \"Record Guide\" in the dashboard or extension. Navigate your app — every click and interaction is captured with 6-tier fingerprints." },
                    { step: "2", title: "Edit", desc: "AI generates step titles and descriptions. Edit text, reorder steps, choose step type (tooltip, modal, highlight, action)." },
                    { step: "3", title: "Target", desc: "Set audience rules (role, plan, behavior) and triggers (manual, auto, url_match, element_click)." },
                    { step: "4", title: "Publish", desc: "Hit publish. The guide goes live instantly. Auto-healing via fingerprinting means no code deploy needed." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-bold text-cyan-400">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{item.title}</h4>
                        <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <ScreenshotPlaceholder
                  id="screenshot-guide-builder-editor"
                  caption="Guide Builder visual editor — editing step content and tooltip positioning."
                  screenshotPath="guide-builder-editor.png"
                />

                <ScreenshotPlaceholder
                  id="screenshot-guide-builder-targeting"
                  caption="Targeting rules — show guides based on user role, plan, behavior, or page URL."
                  screenshotPath="guide-builder-targeting.png"
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Step types
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    { type: "Tooltip", desc: "Floating popover attached to a specific element." },
                    { type: "Modal", desc: "Centered overlay for important announcements." },
                    { type: "Highlight", desc: "Spotlight effect highlighting an element without a popover." },
                    { type: "Action", desc: "Automated action step (click, fill, scroll, navigate)." },
                  ].map((item) => (
                    <div key={item.type} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                      <h4 className="font-medium text-violet-400">{item.type}</h4>
                      <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Action types
                </h3>
                <p className="mt-2 text-zinc-400">
                  Each step can have an action that executes automatically or requires user confirmation:
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {["click", "fill", "select", "scroll", "navigate", "none"].map((action) => (
                    <div key={action} className="rounded-lg bg-zinc-900 px-4 py-3 text-center text-sm text-zinc-300">
                      {action}
                    </div>
                  ))}
                </div>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Multi-page guides
                </h3>
                <p className="mt-2 text-zinc-400">
                  Guides automatically resume across page navigations. The SDK
                  persists guide state to sessionStorage and uses dynamic route
                  matching (supports <code className="rounded bg-zinc-800 px-1 text-xs text-violet-400">:id</code> and{" "}
                  <code className="rounded bg-zinc-800 px-1 text-xs text-violet-400">[id]</code> segments) to
                  auto-resume on the correct page.
                </p>

                <ScreenshotPlaceholder
                  id="screenshot-guide-running"
                  caption="A published guide running live — tooltip highlighting a UI element with step navigation."
                  screenshotPath="guide-running-live.png"
                />
              </div>

              {/* ============================================ */}
              {/* COPILOT SETUP */}
              {/* ============================================ */}
              <div id="copilot-setup" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">
                  Browser Copilot
                  <span className="ml-3 inline-flex items-center rounded bg-violet-500/10 px-2 py-0.5 text-sm font-normal text-violet-400">
                    Full SDK only
                  </span>
                </h2>
                <p className="mt-4 text-zinc-400">
                  The Browser Copilot is an AI assistant that lives in your
                  product. It uses RAG with your scanned knowledge base to
                  answer questions, generate walkthroughs on-the-fly, and
                  execute copilot tool calls. This feature requires the{" "}
                  <strong className="text-violet-400">Full SDK</strong>{" "}
                  (<code className="rounded bg-zinc-800 px-1 text-xs text-violet-400">guideai.js</code>).
                </p>

                <YouTubeEmbed
                  title="Browser Copilot Setup & Demo"
                  videoId="PLACEHOLDER"
                  description="Setting up the Browser Copilot — configure knowledge base, customize appearance, and see it answer user questions in real-time."
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  How it works
                </h3>
                <div className="mt-4 space-y-3 text-sm text-zinc-400">
                  <p>
                    <strong className="text-zinc-200">1.</strong> The scanner uploads your codebase
                    structure to build a knowledge base of routes and elements.
                  </p>
                  <p>
                    <strong className="text-zinc-200">2.</strong> When a user asks a question, the SDK
                    captures a page snapshot (URL, visible text, form labels, viewport) and sends it to the backend.
                  </p>
                  <p>
                    <strong className="text-zinc-200">3.</strong> The backend LLM uses RAG to find
                    relevant context from the knowledge base and generates an answer.
                  </p>
                  <p>
                    <strong className="text-zinc-200">4.</strong> If a walkthrough is appropriate, the
                    LLM generates guide steps that the SDK renders as an ephemeral guide.
                  </p>
                  <p>
                    <strong className="text-zinc-200">5.</strong> Optional copilot tools allow the AI to
                    execute data queries and actions on behalf of the user (with confirmation for destructive actions).
                  </p>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Enabling the copilot
                </h3>
                <p className="mt-2 text-zinc-400">
                  The copilot is enabled by default when the bubble is active.
                  Users click the bubble to open the chat interface.
                </p>
                <CodeBlock
                  code={`<!-- Copilot enabled by default with bubble -->
<script
  src="https://cdn.3guideai.com/sdk/guideai.js"
  data-site-id="site_YOUR_SITE_ID"
  data-token="pk_live_YOUR_TOKEN"
  data-bubble-enabled="true"
  data-widget-mode="guide"
></script>`}
                  language="html"
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Widget modes
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    { mode: "guide", desc: "Floating bubble, AI chat on click (default)." },
                    { mode: "support", desc: "Fixed bubble, live agent support on click." },
                    { mode: "combined", desc: "Both AI chat and live support in tabs." },
                  ].map((item) => (
                    <div key={item.mode} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                      <h4 className="font-medium text-violet-400">{item.mode}</h4>
                      <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <ScreenshotPlaceholder
                  id="screenshot-copilot-chat"
                  caption="The Browser Copilot answering a user question with step-by-step instructions."
                  screenshotPath="copilot-chat-open.png"
                />

                <ScreenshotPlaceholder
                  id="screenshot-copilot-walkthrough"
                  caption="Copilot generating an on-the-fly walkthrough from a natural language question."
                  screenshotPath="copilot-walkthrough-generation.png"
                />
              </div>

              {/* ============================================ */}
              {/* ANALYTICS SETUP */}
              {/* ============================================ */}
              <div id="analytics-setup" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">
                  Friction Analytics
                  <span className="ml-3 inline-flex items-center rounded bg-cyan-500/10 px-2 py-0.5 text-sm font-normal text-cyan-400">
                    Tracking SDK
                  </span>
                </h2>
                <p className="mt-4 text-zinc-400">
                  Friction Analytics automatically detects user frustration.
                  This is available in the{" "}
                  <strong className="text-cyan-400">Tracking SDK</strong>{" "}
                  (<code className="rounded bg-zinc-800 px-1 text-xs text-cyan-400">guideai-tracking.js</code>).
                  All 15 detection modules track interactions, errors, and
                  performance without any additional configuration.
                </p>

                <YouTubeEmbed
                  title="Friction Analytics Walkthrough"
                  videoId="PLACEHOLDER"
                  description="Understanding the analytics dashboard — friction detection, funnel analysis, and AI recommendations."
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Auto-detected friction signals
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    { signal: "Rage clicks", desc: "3+ rapid clicks on the same non-button element in 1 second." },
                    { signal: "Dead clicks", desc: "Clicks on elements that produce no DOM response." },
                    { signal: "Form abandonment", desc: "Users leaving forms without submitting." },
                    { signal: "Form errors", desc: "Validation errors causing user frustration." },
                    { signal: "JavaScript errors", desc: "Uncaught exceptions with full stack traces." },
                    { signal: "Network errors", desc: "Failed HTTP requests and timeouts." },
                    { signal: "Performance issues", desc: "Web Vitals violations and long tasks." },
                    { signal: "Navigation loops", desc: "Users going back and forth between pages." },
                  ].map((item) => (
                    <div key={item.signal} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                      <h4 className="font-medium text-pink-400">{item.signal}</h4>
                      <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Detection modules
                </h3>
                <p className="mt-2 text-zinc-400">
                  The SDK includes 15 detection and tracking modules that run
                  automatically:
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {[
                    "PageTracker",
                    "ScrollTracker",
                    "ClickTracker",
                    "FormTracker",
                    "EngagementTracker",
                    "ErrorTracker",
                    "PerformanceTracker",
                    "UIErrorObserver",
                    "RageClickDetector",
                    "DeadClickDetector",
                    "FormErrorDetector",
                    "EventBuffer",
                    "EventSender",
                    "EventThrottle",
                    "LivePageScanner",
                  ].map((mod) => (
                    <div key={mod} className="rounded-lg bg-zinc-900 px-3 py-2 text-center text-xs text-zinc-400">
                      {mod}
                    </div>
                  ))}
                </div>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Enabling session recording
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Session recording is part of the Tracking SDK.
                </p>
                <CodeBlock
                  code={`<script
  src="https://cdn.3guideai.com/sdk/guideai-tracking.js"
  data-site-id="site_YOUR_SITE_ID"
  data-token="pk_live_YOUR_TOKEN"
  data-recording="true"
></script>`}
                  language="html"
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Custom event tracking
                </h3>
                <CodeBlock
                  code={`// Track custom events
window.guideai.track("checkout_started", {
  cart_value: 99.99,
  item_count: 3,
});

// Track feature usage
window.guideai.trackFeature("dark_mode", "Toggled Dark Mode");

// Mark feature as used (for audience targeting)
window.guideai.markFeature("used_export");`}
                  language="javascript"
                />

                <ScreenshotPlaceholder
                  id="screenshot-analytics-dashboard"
                  caption="Friction Analytics dashboard — heatmap showing rage clicks and dead click zones."
                  screenshotPath="analytics-friction-heatmap.png"
                />

                <ScreenshotPlaceholder
                  id="screenshot-analytics-funnel"
                  caption="Funnel analysis showing drop-off points with AI-generated recommendations."
                  screenshotPath="analytics-funnel-analysis.png"
                />
              </div>

              {/* ============================================ */}
              {/* FINGERPRINTING */}
              {/* ============================================ */}
              <div id="fingerprinting" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">
                  6-Tier Fingerprinting
                </h2>
                <p className="mt-4 text-zinc-400">
                  GuideAI uses a 6-tier fingerprinting system to match guide
                  steps to DOM elements. This is what makes guides
                  &quot;auto-heal&quot; when your UI changes — even if selectors
                  break, the fingerprint system finds the right element.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    { tier: "Tier 1 — Stable IDs", desc: "Explicit identifiers: data-guideai, data-testid, HTML id, HTML name attributes.", color: "text-green-400" },
                    { tier: "Tier 2 — Text Content", desc: "Text content, placeholder text, form labels (exact + fuzzy matching).", color: "text-cyan-400" },
                    { tier: "Tier 3 — Structural", desc: "HTML tag, ARIA role, CSS path, XPath, DOM depth.", color: "text-blue-400" },
                    { tier: "Tier 4 — Context", desc: "Parent text, form context, nearest heading, visual zone (header/sidebar/etc).", color: "text-violet-400" },
                    { tier: "Tier 5 — Position", desc: "Bounding rect (x, y, width, height), relative position to viewport.", color: "text-pink-400" },
                    { tier: "Tier 6 — Visual", desc: "CSS style hash, visual vector embeddings, canvas hash (optional).", color: "text-orange-400" },
                  ].map((item) => (
                    <div key={item.tier} className="flex gap-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                      <div className="flex-1">
                        <h4 className={`font-medium ${item.color}`}>{item.tier}</h4>
                        <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  How matching works
                </h3>
                <div className="mt-4 space-y-3 text-sm text-zinc-400">
                  <p>
                    Each tier contributes a weighted score from 0-100. The
                    aggregate weighted average must be ≥50 for acceptance.
                  </p>
                  <p>
                    Higher tiers (Tier 1-2) are preferred — if a{" "}
                    <code className="rounded bg-zinc-800 px-1 text-xs text-violet-400">data-guideai</code>{" "}
                    attribute matches, the element is found instantly.
                  </p>
                  <p>
                    Lower tiers provide fallback resilience. Even if you rename
                    a CSS class or move an element, the text, context, and
                    visual signals usually find it.
                  </p>
                  <p>
                    Weights are adaptively trainable via ML feedback from the
                    backend.
                  </p>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Best practices for stable guides
                </h3>
                <CodeBlock
                  code={`<!-- Add data-guideai attributes to key elements for Tier 1 matching -->
<button data-guideai="save-settings">Save Settings</button>
<input data-guideai="email-field" placeholder="Email" />
<nav data-guideai="main-nav">...</nav>`}
                  language="html"
                />
                <p className="mt-4 text-sm text-zinc-400">
                  Adding <code className="rounded bg-zinc-800 px-1 text-xs text-violet-400">data-guideai</code>{" "}
                  attributes gives the fingerprint system a stable Tier 1
                  anchor. This is optional but recommended for critical elements.
                </p>
              </div>

              {/* ============================================ */}
              {/* VISUAL SHOWCASE */}
              {/* ============================================ */}
              <div id="showcase" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">
                  Visual Showcase
                </h2>
                <p className="mt-4 text-zinc-400">
                  Every aspect of GuideAI is configurable. Below is a visual
                  reference of all the different setups, icons, animations,
                  themes, and guide types available. Bubble, guide, and copilot
                  visuals apply to the{" "}
                  <strong className="text-violet-400">Full SDK</strong>.
                  Theming and announcements apply to the{" "}
                  <strong className="text-cyan-400">Tracking SDK</strong>.
                </p>

                {/* ---- Bubble Icons ---- */}
                <h3 className="mt-12 text-xl font-semibold text-white">
                  Bubble icons
                </h3>
                <p className="mt-2 text-zinc-400">
                  Choose from 7 built-in mascot icons, or provide a custom
                  image URL (GIF/PNG) via{" "}
                  <code className="rounded bg-zinc-800 px-1 text-xs text-violet-400">
                    data-bubble-image
                  </code>
                  .
                </p>
                <div className="mt-6 grid grid-cols-4 gap-4 sm:grid-cols-7">
                  {[
                    { name: "robot", icon: Bot, color: "from-violet-500 to-indigo-500" },
                    { name: "ant", icon: Bug, color: "from-red-500 to-orange-500" },
                    { name: "owl", icon: Bird, color: "from-amber-500 to-yellow-500" },
                    { name: "fox", icon: Squirrel, color: "from-orange-500 to-red-500" },
                    { name: "cat", icon: Cat, color: "from-pink-500 to-rose-500" },
                    { name: "bee", icon: Bug, color: "from-yellow-500 to-amber-500" },
                    { name: "spark", icon: Sparkles, color: "from-cyan-500 to-blue-500" },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col items-center gap-3"
                    >
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${item.color} shadow-lg shadow-violet-500/10`}
                      >
                        <item.icon className="h-7 w-7 text-white" />
                      </div>
                      <span className="text-xs font-medium text-zinc-400">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
                <CodeBlock
                  code={`<!-- Set the bubble icon -->
<script
  src="https://cdn.3guideai.com/sdk/guideai.js"
  data-site-id="site_YOUR_ID"
  data-token="pk_live_YOUR_TOKEN"
  data-bubble-icon="owl"
></script>

<!-- Or use a custom image -->
<script
  src="https://cdn.3guideai.com/sdk/guideai.js"
  data-site-id="site_YOUR_ID"
  data-token="pk_live_YOUR_TOKEN"
  data-bubble-image="https://yoursite.com/mascot.gif"
></script>`}
                  language="html"
                />

                {/* ---- Bubble Positions ---- */}
                <h3 className="mt-12 text-xl font-semibold text-white">
                  Bubble positions
                </h3>
                <p className="mt-2 text-zinc-400">
                  Position the floating bubble in the corner that works best
                  for your layout.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { pos: "bottom-right", label: "Bottom Right (default)", icon: ArrowDownRight },
                    { pos: "bottom-left", label: "Bottom Left", icon: ArrowDownLeft },
                  ].map((item) => (
                    <div
                      key={item.pos}
                      className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60"
                    >
                      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-2">
                        <span className="text-xs font-medium text-zinc-400">
                          {item.label}
                        </span>
                      </div>
                      <div className="relative h-40 w-full bg-zinc-950/50">
                        {/* Simulated page content */}
                        <div className="absolute left-4 top-4 h-3 w-24 rounded bg-zinc-800" />
                        <div className="absolute left-4 top-10 h-2 w-40 rounded bg-zinc-800/50" />
                        <div className="absolute left-4 top-14 h-2 w-32 rounded bg-zinc-800/50" />
                        {/* Bubble position indicator */}
                        <div
                          className={`absolute ${
                            item.pos === "bottom-right"
                              ? "bottom-4 right-4"
                              : "bottom-4 left-4"
                          } flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 shadow-lg shadow-violet-500/30`}
                        >
                          <Bot className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <CodeBlock
                  code={`data-bubble-position="bottom-right"  <!-- default -->
data-bubble-position="bottom-left"`}
                  language="html"
                />

                {/* ---- Bubble Animation Modes ---- */}
                <h3 className="mt-12 text-xl font-semibold text-white">
                  Bubble animation modes
                </h3>
                <p className="mt-2 text-zinc-400">
                  Two animation styles control how the bubble moves on screen.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Drift Mode */}
                  <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60">
                    <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
                      <Move className="h-4 w-4 text-cyan-400" />
                      <span className="text-sm font-medium text-white">
                        Drift Mode
                      </span>
                      <span className="ml-auto rounded bg-cyan-500/10 px-2 py-0.5 text-xs text-cyan-400">
                        default
                      </span>
                    </div>
                    <div className="relative h-48 w-full bg-zinc-950/50 p-4">
                      {/* Simulated drift path */}
                      <svg
                        className="absolute inset-0 h-full w-full"
                        viewBox="0 0 400 200"
                        fill="none"
                      >
                        <path
                          d="M350 170 C320 140, 280 160, 260 130 C240 100, 200 120, 180 90 C160 60, 120 80, 100 50"
                          stroke="rgba(34,211,238,0.2)"
                          strokeWidth="2"
                          strokeDasharray="6 4"
                        />
                      </svg>
                      <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 shadow-lg shadow-cyan-500/20">
                        <Bot className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-2 text-xs text-zinc-600">
                        <p>Smooth spring-physics float</p>
                        <p>Constrained to viewport</p>
                        <p>Slow cardinal-point motion</p>
                      </div>
                    </div>
                    <div className="border-t border-zinc-800 px-4 py-3">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-zinc-500">spring:</span>{" "}
                          <span className="text-zinc-300">0.0003</span>
                        </div>
                        <div>
                          <span className="text-zinc-500">damping:</span>{" "}
                          <span className="text-zinc-300">0.993</span>
                        </div>
                        <div>
                          <span className="text-zinc-500">min interval:</span>{" "}
                          <span className="text-zinc-300">18s</span>
                        </div>
                        <div>
                          <span className="text-zinc-500">max interval:</span>{" "}
                          <span className="text-zinc-300">26s</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Crawl Mode */}
                  <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60">
                    <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
                      <Route className="h-4 w-4 text-orange-400" />
                      <span className="text-sm font-medium text-white">
                        Crawl Mode
                      </span>
                    </div>
                    <div className="relative h-48 w-full bg-zinc-950/50 p-4">
                      {/* Simulated edge-walk path */}
                      <svg
                        className="absolute inset-0 h-full w-full"
                        viewBox="0 0 400 200"
                        fill="none"
                      >
                        {/* Bottom edge */}
                        <path
                          d="M20 180 L380 180"
                          stroke="rgba(251,146,60,0.3)"
                          strokeWidth="2"
                          strokeDasharray="6 4"
                        />
                        {/* Right edge */}
                        <path
                          d="M380 180 L380 20"
                          stroke="rgba(251,146,60,0.2)"
                          strokeWidth="2"
                          strokeDasharray="6 4"
                        />
                        {/* Top edge */}
                        <path
                          d="M380 20 L20 20"
                          stroke="rgba(251,146,60,0.15)"
                          strokeWidth="2"
                          strokeDasharray="6 4"
                        />
                        {/* Left edge */}
                        <path
                          d="M20 20 L20 180"
                          stroke="rgba(251,146,60,0.1)"
                          strokeWidth="2"
                          strokeDasharray="6 4"
                        />
                      </svg>
                      {/* Bubble on edge */}
                      <div className="absolute bottom-2 left-1/3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-lg shadow-orange-500/20">
                        <Bug className="h-6 w-6 text-white" />
                      </div>
                      {/* Speech bubble */}
                      <div className="absolute bottom-16 left-[calc(33%-20px)] rounded-lg bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300">
                        Need help?
                        <div className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-zinc-800" />
                      </div>
                      <div className="space-y-2 text-xs text-zinc-600">
                        <p>&quot;Ant walk&quot; along viewport edges</p>
                        <p>Pauses at corners</p>
                        <p>Persistent speech bubbles</p>
                      </div>
                    </div>
                    <div className="border-t border-zinc-800 px-4 py-3">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-zinc-500">speed:</span>{" "}
                          <span className="text-zinc-300">40px/s</span>
                        </div>
                        <div>
                          <span className="text-zinc-500">climbWalls:</span>{" "}
                          <span className="text-zinc-300">true</span>
                        </div>
                        <div>
                          <span className="text-zinc-500">cornerPause:</span>{" "}
                          <span className="text-zinc-300">1500ms</span>
                        </div>
                        <div>
                          <span className="text-zinc-500">messages:</span>{" "}
                          <span className="text-zinc-300">rotating</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <CodeBlock
                  code={`<!-- Drift mode (default) -->
data-bubble-mode="drift"

<!-- Crawl mode (ant walk along edges) -->
data-bubble-mode="crawl"

<!-- Drift fine-tuning -->
data-bubble-drift-spring="0.0003"
data-bubble-drift-damping="0.993"
data-bubble-drift-min-interval="18000"
data-bubble-drift-max-interval="26000"

<!-- Crawl fine-tuning -->
data-bubble-crawl-speed="40"
data-bubble-crawl-climb-walls="true"
data-bubble-crawl-corner-pause-ms="1500"
data-bubble-crawl-persistent-speech="true"
data-bubble-crawl-message-interval-ms="8000"`}
                  language="html"
                />

                {/* ---- Widget Modes ---- */}
                <h3 className="mt-12 text-xl font-semibold text-white">
                  Widget modes
                </h3>
                <p className="mt-2 text-zinc-400">
                  Control what happens when users click the bubble.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {[
                    {
                      mode: "guide",
                      label: "Guide Mode",
                      desc: "AI chat + guide playback",
                      color: "from-violet-500 to-indigo-500",
                      badge: "default",
                      features: ["AI chat assistant", "Guide suggestions", "Walkthrough generation", "Knowledge base Q&A"],
                    },
                    {
                      mode: "support",
                      label: "Support Mode",
                      desc: "Live agent support",
                      color: "from-green-500 to-emerald-500",
                      badge: null,
                      features: ["Live agent chat", "Ticket creation", "Support queue", "Agent handoff"],
                    },
                    {
                      mode: "combined",
                      label: "Combined Mode",
                      desc: "Both AI + live support",
                      color: "from-cyan-500 to-blue-500",
                      badge: null,
                      features: ["Tabbed interface", "AI chat tab", "Support tab", "Smart escalation"],
                    },
                  ].map((item) => (
                    <div
                      key={item.mode}
                      className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60"
                    >
                      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
                        <div
                          className={`h-3 w-3 rounded-full bg-gradient-to-br ${item.color}`}
                        />
                        <span className="text-sm font-medium text-white">
                          {item.label}
                        </span>
                        {item.badge && (
                          <span className="ml-auto rounded bg-violet-500/10 px-2 py-0.5 text-xs text-violet-400">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-zinc-400">{item.desc}</p>
                        <ul className="mt-3 space-y-1.5">
                          {item.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-center gap-2 text-xs text-zinc-500"
                            >
                              <Circle className="h-1.5 w-1.5 fill-current" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-t border-zinc-800 px-4 py-2.5">
                        <code className="text-xs text-violet-400">
                          data-widget-mode=&quot;{item.mode}&quot;
                        </code>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ---- Theme Presets ---- */}
                <h3 className="mt-12 text-xl font-semibold text-white">
                  Theming
                </h3>
                <p className="mt-2 text-zinc-400">
                  Customize the look of guides, tooltips, and chat panels to
                  match your brand.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {[
                    {
                      name: "Default (Violet)",
                      primary: "#7c3aed",
                      bg: "#ffffff",
                      text: "#111827",
                      font: "Inter",
                    },
                    {
                      name: "Ocean Blue",
                      primary: "#0ea5e9",
                      bg: "#f8fafc",
                      text: "#0f172a",
                      font: "Plus Jakarta Sans",
                    },
                    {
                      name: "Dark Mode",
                      primary: "#22d3ee",
                      bg: "#18181b",
                      text: "#f4f4f5",
                      font: "Geist",
                    },
                  ].map((theme) => (
                    <div
                      key={theme.name}
                      className="overflow-hidden rounded-xl border border-zinc-800"
                    >
                      <div className="border-b border-zinc-800 px-4 py-2.5">
                        <span className="text-xs font-medium text-zinc-300">
                          {theme.name}
                        </span>
                      </div>
                      {/* Theme preview */}
                      <div
                        className="p-4"
                        style={{ backgroundColor: theme.bg }}
                      >
                        <div className="rounded-lg border p-3 shadow-sm" style={{ borderColor: theme.primary + "33" }}>
                          <div
                            className="text-sm font-semibold"
                            style={{ color: theme.text, fontFamily: theme.font }}
                          >
                            Welcome to the app
                          </div>
                          <p
                            className="mt-1 text-xs"
                            style={{ color: theme.text + "99", fontFamily: theme.font }}
                          >
                            Click the button below to get started with your first task.
                          </p>
                          <div className="mt-3 flex gap-2">
                            <button
                              className="rounded-md px-3 py-1.5 text-xs font-medium text-white"
                              style={{ backgroundColor: theme.primary }}
                            >
                              Next step
                            </button>
                            <button
                              className="rounded-md border px-3 py-1.5 text-xs font-medium"
                              style={{
                                borderColor: theme.primary + "44",
                                color: theme.primary,
                              }}
                            >
                              Skip
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-zinc-800 px-4 py-2.5">
                        <div className="grid grid-cols-2 gap-1 text-xs">
                          <div className="flex items-center gap-1.5">
                            <div
                              className="h-3 w-3 rounded-full border border-zinc-700"
                              style={{ backgroundColor: theme.primary }}
                            />
                            <span className="text-zinc-500">primary</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div
                              className="h-3 w-3 rounded-full border border-zinc-700"
                              style={{ backgroundColor: theme.bg }}
                            />
                            <span className="text-zinc-500">background</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div
                              className="h-3 w-3 rounded-full border border-zinc-700"
                              style={{ backgroundColor: theme.text }}
                            />
                            <span className="text-zinc-500">text</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-zinc-500">font:</span>{" "}
                            <span className="text-zinc-400">{theme.font}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <CodeBlock
                  code={`<!-- Custom theme (Full SDK) -->
<script
  src="https://cdn.3guideai.com/sdk/guideai.js"
  data-site-id="site_YOUR_ID"
  data-token="pk_live_YOUR_TOKEN"
  data-theme-primary="#0ea5e9"
  data-theme-background="#f8fafc"
  data-theme-text="#0f172a"
  data-theme-font="Plus Jakarta Sans"
></script>

<!-- Custom theme (Tracking SDK) -->
<script
  src="https://cdn.3guideai.com/sdk/guideai-tracking.js"
  data-site-id="site_YOUR_ID"
  data-token="pk_live_YOUR_TOKEN"
  data-theme-primary="#0ea5e9"
  data-theme-background="#f8fafc"
  data-theme-text="#0f172a"
  data-theme-font="Plus Jakarta Sans"
></script>`}
                  language="html"
                />

                {/* ---- Guide Step Types ---- */}
                <h3 className="mt-12 text-xl font-semibold text-white">
                  Guide step types
                </h3>
                <p className="mt-2 text-zinc-400">
                  Four distinct step types for different interaction patterns.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Tooltip */}
                  <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60">
                    <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
                      <MessageSquare className="h-4 w-4 text-violet-400" />
                      <span className="text-sm font-medium text-white">
                        Tooltip
                      </span>
                    </div>
                    <div className="relative h-40 bg-zinc-950/50 p-4">
                      {/* Simulated button + tooltip */}
                      <div className="absolute left-8 top-16 rounded-md bg-zinc-700 px-4 py-2 text-xs text-zinc-300">
                        Save Settings
                      </div>
                      {/* Tooltip arrow + content */}
                      <div className="absolute left-6 top-7 w-44 rounded-lg border border-violet-500/30 bg-white p-3 shadow-xl shadow-violet-500/10">
                        <p className="text-xs font-medium text-zinc-900">
                          Click Save
                        </p>
                        <p className="mt-0.5 text-[10px] text-zinc-500">
                          Save your changes before continuing.
                        </p>
                        <div className="absolute -bottom-1 left-8 h-2 w-2 rotate-45 border-b border-r border-violet-500/30 bg-white" />
                      </div>
                      {/* Highlight overlay */}
                      <div className="absolute left-6 top-14 h-10 w-28 rounded-md ring-2 ring-violet-500/50" />
                    </div>
                  </div>

                  {/* Modal */}
                  <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60">
                    <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
                      <Maximize className="h-4 w-4 text-cyan-400" />
                      <span className="text-sm font-medium text-white">
                        Modal
                      </span>
                    </div>
                    <div className="relative flex h-40 items-center justify-center bg-zinc-950/50 p-4">
                      {/* Backdrop */}
                      <div className="absolute inset-0 bg-black/40" />
                      {/* Modal */}
                      <div className="relative w-48 rounded-xl bg-white p-4 shadow-2xl">
                        <p className="text-xs font-semibold text-zinc-900">
                          Welcome!
                        </p>
                        <p className="mt-1 text-[10px] text-zinc-500">
                          Let us show you around the new dashboard.
                        </p>
                        <div className="mt-3 flex gap-2">
                          <div className="rounded bg-violet-500 px-2 py-1 text-[10px] text-white">
                            Start tour
                          </div>
                          <div className="rounded border border-zinc-200 px-2 py-1 text-[10px] text-zinc-500">
                            Skip
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slideout */}
                  <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60">
                    <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
                      <PanelRight className="h-4 w-4 text-green-400" />
                      <span className="text-sm font-medium text-white">
                        Slideout
                      </span>
                    </div>
                    <div className="relative h-40 bg-zinc-950/50">
                      {/* Page content */}
                      <div className="absolute left-4 top-4 space-y-2">
                        <div className="h-2 w-20 rounded bg-zinc-800" />
                        <div className="h-2 w-32 rounded bg-zinc-800/50" />
                        <div className="h-2 w-28 rounded bg-zinc-800/50" />
                      </div>
                      {/* Slideout panel */}
                      <div className="absolute right-0 top-0 h-full w-36 border-l border-zinc-700 bg-white p-3 shadow-xl">
                        <p className="text-xs font-semibold text-zinc-900">
                          Setup Guide
                        </p>
                        <p className="mt-1 text-[10px] text-zinc-500">
                          Complete these steps to finish setup.
                        </p>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center gap-1.5">
                            <div className="h-3 w-3 rounded-full bg-green-500" />
                            <span className="text-[10px] text-zinc-600">
                              Add SDK
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="h-3 w-3 rounded-full border border-zinc-300" />
                            <span className="text-[10px] text-zinc-600">
                              Scan code
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlight */}
                  <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60">
                    <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
                      <MousePointer className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-medium text-white">
                        Highlight + Action
                      </span>
                    </div>
                    <div className="relative h-40 bg-zinc-950/50 p-4">
                      {/* Dimmed background */}
                      <div className="absolute inset-0 bg-black/50" />
                      {/* Highlighted element */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative rounded-lg bg-zinc-800 px-6 py-3 ring-4 ring-yellow-400/40">
                          <span className="text-xs text-zinc-200">
                            Export Data
                          </span>
                          {/* Pulse animation indicator */}
                          <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-yellow-400" />
                          <div className="absolute -right-1 -top-1 h-3 w-3 animate-ping rounded-full bg-yellow-400/50" />
                        </div>
                      </div>
                      {/* Action label */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-zinc-800 px-3 py-1 text-[10px] text-zinc-400">
                        Click to continue
                      </div>
                    </div>
                  </div>
                </div>

                {/* ---- Announcement Surfaces ---- */}
                <h3 className="mt-12 text-xl font-semibold text-white">
                  Announcement surfaces
                </h3>
                <p className="mt-2 text-zinc-400">
                  Three ways to display in-app announcements.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {/* Modal announcement */}
                  <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60">
                    <div className="border-b border-zinc-800 px-4 py-2.5">
                      <span className="text-xs font-medium text-zinc-300">
                        Modal
                      </span>
                    </div>
                    <div className="relative flex h-32 items-center justify-center bg-zinc-950/50">
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="relative w-36 rounded-lg bg-white p-3 shadow-lg">
                        <div className="h-2 w-16 rounded bg-zinc-900" />
                        <div className="mt-2 h-1.5 w-full rounded bg-zinc-200" />
                        <div className="mt-1 h-1.5 w-20 rounded bg-zinc-200" />
                        <div className="mt-2 h-5 w-14 rounded bg-violet-500" />
                      </div>
                    </div>
                  </div>

                  {/* Banner announcement */}
                  <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60">
                    <div className="border-b border-zinc-800 px-4 py-2.5">
                      <span className="text-xs font-medium text-zinc-300">
                        Banner
                      </span>
                    </div>
                    <div className="relative h-32 bg-zinc-950/50">
                      {/* Banner at top */}
                      <div className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 px-3 py-2">
                        <div className="h-1.5 w-24 rounded bg-white/80" />
                        <div className="ml-auto h-4 w-4 rounded bg-white/20" />
                      </div>
                      {/* Page content */}
                      <div className="p-3 space-y-2">
                        <div className="h-2 w-20 rounded bg-zinc-800" />
                        <div className="h-2 w-32 rounded bg-zinc-800/50" />
                      </div>
                    </div>
                  </div>

                  {/* Drawer announcement */}
                  <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60">
                    <div className="border-b border-zinc-800 px-4 py-2.5">
                      <span className="text-xs font-medium text-zinc-300">
                        Drawer
                      </span>
                    </div>
                    <div className="relative h-32 bg-zinc-950/50">
                      <div className="p-3 space-y-2">
                        <div className="h-2 w-20 rounded bg-zinc-800" />
                        <div className="h-2 w-32 rounded bg-zinc-800/50" />
                      </div>
                      {/* Drawer from bottom */}
                      <div className="absolute inset-x-0 bottom-0 rounded-t-xl border-t border-zinc-700 bg-white p-3">
                        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-zinc-300" />
                        <div className="h-2 w-16 rounded bg-zinc-900" />
                        <div className="mt-1.5 h-1.5 w-full rounded bg-zinc-200" />
                      </div>
                    </div>
                  </div>
                </div>
                <CodeBlock
                  code={`data-announcement-surface="modal"   <!-- centered overlay (default) -->
data-announcement-surface="banner"  <!-- top banner strip -->
data-announcement-surface="drawer"  <!-- bottom sheet -->

data-announcement-frequency="once"             <!-- show once ever -->
data-announcement-frequency="once_per_session" <!-- once per session -->
data-announcement-frequency="once_per_day"     <!-- daily -->
data-announcement-frequency="every_visit"      <!-- every page load -->

data-announcement-display-mode="auto"    <!-- show immediately -->
data-announcement-display-mode="beacon"  <!-- show pulsing dot first -->`}
                  language="html"
                />

                {/* ---- Full Config Example ---- */}
                <h3 className="mt-12 text-xl font-semibold text-white">
                  Complete configuration example
                </h3>
                <p className="mt-2 text-zinc-400">
                  Every attribute combined in a single script tag:
                </p>
                <CodeBlock
                  code={`<script
  src="https://cdn.3guideai.com/sdk/guideai.js"

  <!-- Required -->
  data-site-id="site_abc123"
  data-token="pk_live_xyz789"

  <!-- Endpoints -->
  data-api-url="https://api.3guideai.com"
  data-cdn-url="https://cdn.3guideai.com"

  <!-- Bubble appearance -->
  data-bubble-enabled="true"
  data-bubble-position="bottom-right"
  data-bubble-icon="owl"
  data-bubble-label="Help"
  data-bubble-mode="drift"
  data-widget-mode="combined"

  <!-- Drift fine-tuning -->
  data-bubble-drift-spring="0.0003"
  data-bubble-drift-damping="0.993"
  data-bubble-drift-min-interval="18000"
  data-bubble-drift-max-interval="26000"
  data-bubble-drift-enabled="true"

  <!-- Theme -->
  data-theme-primary="#7c3aed"
  data-theme-background="#ffffff"
  data-theme-text="#111827"
  data-theme-font="Inter"

  <!-- Guides -->
  data-guides-enabled="true"
  data-auto-advance-on-target-click="true"
  data-feedback-auto-prompt="true"
  data-feedback-prompt-delay-ms="300000"
  data-feedback-prompt-min-pageviews="10"
  data-chip-dismiss-seconds="300"

  <!-- Analytics & session -->
  data-recording="true"
  data-idle-timeout="20000"
  data-session-timeout-ms="1800000"
  data-batch-size="50"
  data-batch-interval-ms="30000"
  data-geolocation="off"

  <!-- Announcements -->
  data-announcement-surface="modal"
  data-announcement-frequency="once"
  data-announcement-display-mode="auto"
  data-announcement-auto-show-delay-ms="500"
  data-announcement-close-on-backdrop="true"

  <!-- Help hints -->
  data-help-hints="true"
  data-help-hints-cache-ttl-ms="86400000"
></script>`}
                  language="html"
                />

                <ScreenshotPlaceholder
                  id="screenshot-showcase-all-modes"
                  caption="Side-by-side comparison of all bubble modes, positions, and themes in action."
                  screenshotPath="showcase-all-modes.png"
                />

                <YouTubeEmbed
                  title="Customization & Theming Guide"
                  videoId="PLACEHOLDER"
                  description="Full walkthrough of all visual customization options — bubble icons, animations, themes, step types, and announcements."
                />
              </div>

              {/* CTA */}
              <div className="mt-20 rounded-2xl border border-zinc-800 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 p-10 text-center">
                <h2 className="text-2xl font-bold text-white">
                  Ready to get started?
                </h2>
                <p className="mt-4 text-zinc-400">
                  When <strong>not</strong> in <code>extensionMode</code>, the
                  SDK automatically emits:
                </p>
                <div className="mt-6 flex items-center justify-center gap-4">
                  <Link href="https://dashboard.3guideai.com" target="_blank">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:from-cyan-600 hover:to-violet-600"
                    >
                      Get your API keys
                    </Button>
                  </Link>
                  <Link href="https://dashboard.3guideai.com" target="_blank">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                    >
                      Open Dashboard
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

