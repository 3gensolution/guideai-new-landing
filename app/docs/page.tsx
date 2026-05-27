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
  Zap,
} from "lucide-react";

const sidebar = [
  { id: "install", label: "Install SDK", icon: Code },
  { id: "public-api", label: "Public API", icon: Layers },
  { id: "automatic", label: "Automatic Events", icon: Zap },
  { id: "configuration", label: "Configuration", icon: Settings },
  { id: "knowledge-base", label: "Knowledge Base", icon: Layers },
  { id: "scanner", label: "Scanner", icon: Terminal },
  { id: "troubleshooting", label: "Troubleshooting", icon: HelpCircle },
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

function SimpleTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: (string | React.ReactNode)[][];
}) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-800">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-zinc-800 bg-zinc-900/80">
            {columns.map((col) => (
              <th
                key={col}
                className="px-4 py-3 text-sm font-medium text-zinc-300"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800/50">
          {rows.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className="px-4 py-3 text-sm text-zinc-400"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("install");

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
              Install the browser SDK (<code>guideai.js</code>), configure it
              with <code>data-*</code> attributes, and learn what&apos;s sent
              automatically vs. what you should send manually.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="border-t border-zinc-800 py-12">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="flex gap-12">
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
              {/* 1) Install */}
              <div id="install" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">
                  1) Install the SDK on your website
                </h2>
                <p className="mt-4 text-zinc-400">
                  Add this to your HTML (usually near the end of{" "}
                  <code>{"<body>"}</code>):
                </p>
                <CodeBlock
                  language="html"
                  code={`<script
  src="https://cdn.3guideai.com/sdk/guideai.js"
  data-site-id="YOUR_SITE_ID"
  data-token="YOUR_PUBLIC_TOKEN"
  data-api-url="https://api.3guideai.com"
  data-cdn-url="https://cdn.3guideai.com"
></script>`}
                />

                <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
                  <h3 className="text-base font-semibold text-white">Notes</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                    <li>
                      <code>data-site-id</code> and <code>data-token</code> are
                      required. If either is missing, the SDK will not
                      initialize.
                    </li>
                    <li>
                      <code>data-api-url</code> is strongly recommended. The
                      SDK has a default, but you should set it explicitly.
                    </li>
                    <li>
                      <code>data-cdn-url</code> is the CDN base URL.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 2) Public API */}
              <div id="public-api" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">
                  2) Public API (what you can call)
                </h2>
                <p className="mt-4 text-zinc-400">
                  The SDK exposes a global <code>window.guideai</code> object
                  (and a legacy alias <code>window.__guideai</code>) once
                  loaded.
                </p>

                <div className="mt-10 space-y-2">
                  <Expandable title="Tracking">
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
    id: "user_123",
    email: "ada@company.com",
    full_name: "Ada Lovelace",
  },
  account: { id: "acct_456", name: "Company Inc" },
});

guideai.updateOptions({
  visitor: { plan: "pro" },
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

                  <Expandable title="Recording and surveys">
                    <CodeBlock
                      language="javascript"
                      code={`guideai.startRecording();
const steps = guideai.stopRecording();
guideai.cancelRecording();

guideai.showNPSSurvey("billing");
guideai.showCSATSurvey("support");`}
                    />
                  </Expandable>
                </div>
              </div>

              {/* 3) Automatic */}
              <div id="automatic" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">
                  3) What the SDK sends automatically
                </h2>
                <p className="mt-4 text-zinc-400">
                  When <strong>not</strong> in <code>extensionMode</code>, the
                  SDK automatically emits:
                </p>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Session + page basics
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                  <li>
                    <code>session_start</code> (includes metadata like entry
                    URL, referrer, device info, viewport, session number, etc.)
                  </li>
                  <li>
                    Initial <code>page_view</code> (with{" "}
                    <code>metadata.entry_page: true</code>)
                  </li>
                  <li>
                    <code>page_view</code> on SPA navigations
                  </li>
                  <li>
                    <code>page_exit</code> with engagement + scroll metadata (
                    <code>time_on_page_ms</code>, <code>active_time_ms</code>,{" "}
                    <code>idle_time_ms</code>, <code>max_scroll_depth_pct</code>
                    )
                  </li>
                </ul>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Interaction + friction
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                  <li>
                    <code>click</code>, <code>double_click</code>,{" "}
                    <code>right_click</code>
                  </li>
                  <li>
                    <code>rage_click</code>, <code>dead_click</code>
                  </li>
                  <li>
                    <code>scroll</code>
                  </li>
                  <li>
                    <code>form_start</code>, <code>form_submit</code>,{" "}
                    <code>form_abandon</code>, <code>form_error</code>
                  </li>
                  <li>
                    <code>js_error</code>, <code>network_error</code>,{" "}
                    <code>ui_error</code>
                  </li>
                </ul>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  UTM + referrer capture
                </h3>
                <p className="mt-2 text-sm text-zinc-300">
                  On the first load, if UTMs or referrer are present, the SDK
                  emits an <code>identify</code> event with{" "}
                  <code>metadata.utm_*</code> and <code>metadata.referrer</code>.
                </p>
                <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
                  <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-300">
                    <li>
                      The SDK does <strong>not</strong> currently send a
                      dedicated <code>referrer_host</code>; derive it from{" "}
                      <code>referrer</code> server-side.
                    </li>
                    <li>
                      The SDK does <strong>not</strong> automatically label
                      clicks as &ldquo;CTA clicks&rdquo; unless your dashboard
                      logic / click classifier marks them.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 4) Config */}
              <div id="configuration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">
                  4) Configuration reference (script tag <code>data-*</code>)
                </h2>
                <p className="mt-4 text-zinc-400">
                  Configuration is read from the <code>{"<script>"}</code> tag.
                </p>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Required
                </h3>
                <SimpleTable
                  columns={["Attribute", "Type", "Meaning"]}
                  rows={[
                    [
                      <code
                        key="site-id"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-site-id
                      </code>,
                      "string",
                      "Your site/workspace ID",
                    ],
                    [
                      <code
                        key="token"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-token
                      </code>,
                      "string",
                      "Public token (pk_live_...) used by the browser SDK",
                    ],
                  ]}
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Endpoints
                </h3>
                <SimpleTable
                  columns={["Attribute", "Default", "Notes"]}
                  rows={[
                    [
                      <code
                        key="api-url"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-api-url
                      </code>,
                      <code className="text-xs text-zinc-500">
                        https://api.3guideai.com
                      </code>,
                      "Recommended: set to https://api.3guideai.com",
                    ],
                    [
                      <code
                        key="cdn-url"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-cdn-url
                      </code>,
                      <code className="text-xs text-zinc-500">
                        https://cdn.3guideai.com
                      </code>,
                      "Base URL used for KB/assets (not /sdk/guideai.js)",
                    ],
                  ]}
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Sessions + batching
                </h3>
                <SimpleTable
                  columns={["Attribute", "Default", "Meaning"]}
                  rows={[
                    [
                      <code
                        key="idle-timeout"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-idle-timeout
                      </code>,
                      <code className="text-xs text-zinc-500">20000</code>,
                      "Idle threshold for engagement calculations (ms)",
                    ],
                    [
                      <code
                        key="session-timeout"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-session-timeout-ms
                      </code>,
                      <code className="text-xs text-zinc-500">1800000</code>,
                      "Rotate session after inactivity (ms)",
                    ],
                    [
                      <code
                        key="batch-size"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-batch-size
                      </code>,
                      <code className="text-xs text-zinc-500">50</code>,
                      "Max events per batch",
                    ],
                    [
                      <code
                        key="batch-interval"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-batch-interval-ms
                      </code>,
                      <code className="text-xs text-zinc-500">30000</code>,
                      "Flush interval (ms)",
                    ],
                  ]}
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Privacy / enrichment
                </h3>
                <SimpleTable
                  columns={["Attribute", "Values", "Default", "Meaning"]}
                  rows={[
                    [
                      <code
                        key="geolocation"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-geolocation
                      </code>,
                      <code className="text-xs text-zinc-500">
                        off | granted-only | prompt
                      </code>,
                      <code className="text-xs text-zinc-500">off</code>,
                      "Optional browser geo enrichment",
                    ],
                  ]}
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Guides + bubble
                </h3>
                <SimpleTable
                  columns={["Attribute", "Default", "Meaning"]}
                  rows={[
                    [
                      <code
                        key="guides-enabled"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-guides-enabled
                      </code>,
                      <code className="text-xs text-zinc-500">true</code>,
                      "When false, guide playback is disabled",
                    ],
                    [
                      <code
                        key="auto-advance"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-auto-advance-on-target-click
                      </code>,
                      <code className="text-xs text-zinc-500">true</code>,
                      "Auto-advance guides on target click (when applicable)",
                    ],
                    [
                      <code
                        key="bubble-enabled"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-bubble-enabled
                      </code>,
                      <code className="text-xs text-zinc-500">true</code>,
                      "Show the bubble entry point",
                    ],
                    [
                      <code
                        key="bubble-position"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-bubble-position
                      </code>,
                      <code className="text-xs text-zinc-500">
                        bottom-right
                      </code>,
                      "Bubble placement",
                    ],
                    [
                      <code
                        key="bubble-label"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-bubble-label
                      </code>,
                      <code className="text-xs text-zinc-500">Help</code>,
                      "Bubble label",
                    ],
                    [
                      <code
                        key="bubble-icon"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-bubble-icon
                      </code>,
                      <code className="text-xs text-zinc-500">robot</code>,
                      "Mascot id (or use data-bubble-image)",
                    ],
                    [
                      <code
                        key="bubble-image"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-bubble-image
                      </code>,
                      <span className="text-zinc-500">empty</span>,
                      "Custom image URL that overrides icon",
                    ],
                    [
                      <code
                        key="bubble-mode"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-bubble-mode
                      </code>,
                      <code className="text-xs text-zinc-500">drift</code>,
                      "Bubble motion mode",
                    ],
                    [
                      <code
                        key="widget-mode"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-widget-mode
                      </code>,
                      <code className="text-xs text-zinc-500">guide</code>,
                      "How bubble behaves when support is enabled",
                    ],
                  ]}
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Recording + feedback
                </h3>
                <SimpleTable
                  columns={["Attribute", "Default", "Meaning"]}
                  rows={[
                    [
                      <code
                        key="recording"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-recording
                      </code>,
                      <code className="text-xs text-zinc-500">false</code>,
                      "Enables session recording",
                    ],
                    [
                      <code
                        key="feedback-auto"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-feedback-auto-prompt
                      </code>,
                      <code className="text-xs text-zinc-500">true</code>,
                      "Auto-prompt feedback",
                    ],
                    [
                      <code
                        key="feedback-delay"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-feedback-prompt-delay-ms
                      </code>,
                      <code className="text-xs text-zinc-500">30000</code>,
                      "Delay before prompting (ms)",
                    ],
                    [
                      <code
                        key="feedback-min"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-feedback-prompt-min-pageviews
                      </code>,
                      <code className="text-xs text-zinc-500">2</code>,
                      "Minimum page views before prompting",
                    ],
                  ]}
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Extension mode
                </h3>
                <SimpleTable
                  columns={["Attribute", "Default", "Meaning"]}
                  rows={[
                    [
                      <code
                        key="extension-mode"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-extension-mode
                      </code>,
                      <code className="text-xs text-zinc-500">false</code>,
                      "When true, disables analytics/tracking/support because the “visitor” is an extension user",
                    ],
                  ]}
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Announcements
                </h3>
                <SimpleTable
                  columns={["Attribute", "Default", "Meaning"]}
                  rows={[
                    [
                      <code
                        key="announcement-surface"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-announcement-surface
                      </code>,
                      <code className="text-xs text-zinc-500">modal</code>,
                      "Default surface when opening from beacon",
                    ],
                    [
                      <code
                        key="announcement-close"
                        className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-300"
                      >
                        data-announcement-close-on-backdrop
                      </code>,
                      <code className="text-xs text-zinc-500">true</code>,
                      "Close announcement when clicking backdrop",
                    ],
                  ]}
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Attributes that are currently ignored
                </h3>
                <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
                  <p className="text-sm text-zinc-300">
                    These script attributes are currently not read by{" "}
                    <code>parseConfig()</code>:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                    <li>
                      <code>data-track-all</code>
                    </li>
                    <li>
                      <code>data-behavioral-triggers</code>
                    </li>
                  </ul>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  5) How to update configuration
                </h3>
                <div className="mt-4 space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Update via dashboard (recommended)
                    </p>
                    <p className="mt-1 text-sm text-zinc-300">
                      Some settings are applied from the backend knowledge base
                      load. Update settings in the dashboard, then reload the
                      page (or re-initialize the SDK) to apply changes.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Update via script tag
                    </p>
                    <p className="mt-1 text-sm text-zinc-300">
                      Change <code>{"<script data-*>"}</code> attributes and
                      redeploy your site. These are read during initialization.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Runtime updates
                    </p>
                    <p className="mt-1 text-sm text-zinc-300">
                      <code>updateOptions()</code> is for visitor/account
                      identity metadata, not for changing widget configuration
                      at runtime. To hot swap config:
                    </p>
                    <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-300">
                      <li>
                        call <code>guideai.destroy()</code>
                      </li>
                      <li>remove the script tag (optional)</li>
                      <li>
                        re-insert the script tag with updated{" "}
                        <code>data-*</code>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* 6) KB */}
              <div id="knowledge-base" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">
                  6) Knowledge Base &amp; Scanner (how GuideAI understands your
                  UI)
                </h2>
                <p className="mt-4 text-zinc-400">
                  GuideAI&apos;s knowledge base (KB) describes your app routes,
                  interactive elements, and a hierarchical UI map used by AI for
                  more accurate guidance.
                </p>

                <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
                  <h3 className="text-lg font-semibold text-white">
                    Ways to get a KB into GuideAI
                  </h3>
                  <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-zinc-300">
                    <li>Run the scanner (recommended for most teams)</li>
                    <li>
                      Upload a KB JSON directly from the dashboard Knowledge
                      Base page
                    </li>
                  </ol>
                  <p className="mt-4 text-sm text-zinc-300">
                    Privacy note: the scanner is designed to extract structure
                    needed for guidance (routes/elements/UI map). It is not
                    intended to collect secrets.
                  </p>
                  <p className="mt-2 text-sm text-zinc-300">
                    Scanner source (public):{" "}
                    <a
                      href="https://github.com/3gensolution/guideai-scanner"
                      target="_blank"
                      rel="noreferrer"
                      className="text-violet-300 underline underline-offset-4 hover:text-violet-200"
                    >
                      github.com/3gensolution/guideai-scanner
                    </a>
                  </p>
                </div>
              </div>

              {/* 7) Scanner */}
              <div id="scanner" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">
                  7) GuideAI Scanner — Installation &amp; Usage Guide
                </h2>
                <p className="mt-4 text-zinc-400">
                  GuideAI Scanner scans your web app, detects your framework,
                  extracts routes and interactive elements, and builds a
                  knowledge base for AI-powered guidance.
                </p>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Installation
                </h3>
                <CodeBlock language="bash" code={`npm i @guideai/scanner`} />
                <p className="mt-3 text-sm text-zinc-400">Or globally:</p>
                <CodeBlock language="bash" code={`npm i -g @guideai/scanner`} />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Quick Start
                </h3>
                <Expandable title="Dry Run (No Upload)">
                  <p className="text-sm text-zinc-300">
                    Test the scanner without uploading by using{" "}
                    <code>--dry-run</code>:
                  </p>
                  <CodeBlock language="bash" code={`npx guideai-scan --dry-run`} />
                </Expandable>
                <Expandable title="Scan & Upload">
                  <p className="text-sm text-zinc-300">
                    To scan your code and upload the knowledge base to GuideAI:
                  </p>
                  <CodeBlock
                    language="bash"
                    code={`npx guideai-scan --key sk_live_xxxxx`}
                  />
                </Expandable>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Command-Line Options
                </h3>
                <SimpleTable
                  columns={["Option", "Description", "Default", "Required"]}
                  rows={[
                    ["--dry-run", "Output JSON without uploading", "false", "No"],
                    ["--dir", "Project root directory", "cwd", "No"],
                    ["--output", "Save scan result to JSON file", "—", "No"],
                    [
                      "--api-url",
                      "GuideAI API endpoint",
                      "https://cdn.3guideai.com",
                      "No",
                    ],
                    [
                      "--key",
                      "Site API key for uploads",
                      "—",
                      "Yes (unless --dry-run)",
                    ],
                  ]}
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Common Usage Patterns
                </h3>
                <CodeBlock
                  language="bash"
                  code={`# Preview scan:
npx guideai-scan --dry-run

# Save results to a file:
npx guideai-scan --dry-run --output scan-results.json

# Upload:
npx guideai-scan --key sk_live_your_api_key

# Scan a specific directory:
npx guideai-scan --dir /path/to/project --dry-run

# Scan, save, and upload:
npx guideai-scan --key sk_live_your_api_key --output scan-results.json`}
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Knowledge Base Output Structure
                </h3>
                <CodeBlock
                  language="json"
                  code={`{
  "framework": "nextjs-app-router",
  "routes": [],
  "elements": [],
  "ui_map": { "root": {} },
  "duration_ms": 1234
}`}
                />

                <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
                  <h3 className="text-base font-semibold text-white">
                    Upload KB JSON from the dashboard
                  </h3>
                  <p className="mt-2 text-sm text-zinc-300">
                    If you already have a scan JSON (from CI, from a teammate,
                    or from a dry-run output file), you can upload it from the
                    dashboard Knowledge Base page.
                  </p>
                </div>
              </div>

              {/* 8) Troubleshooting */}
              <div id="troubleshooting" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">
                  8) Troubleshooting
                </h2>

                <div className="mt-6 space-y-2">
                  <Expandable title='“No script tag found with data-site-id and data-token”'>
                    <p className="text-sm text-zinc-300">
                      Make sure your script includes both attributes:
                    </p>
                    <CodeBlock
                      language="html"
                      code={`<script
  src="https://cdn.3guideai.com/sdk/guideai.js"
  data-site-id="..."
  data-token="..."
></script>`}
                    />
                  </Expandable>

                  <Expandable title='Scanner error: “--key is required unless --dry-run is enabled”'>
                    <p className="text-sm text-zinc-300">
                      Use <code>--dry-run</code> to preview without uploading,
                      or pass <code>--key sk_live_...</code> for upload.
                    </p>
                    <CodeBlock
                      language="bash"
                      code={`npx guideai-scan --dry-run
# or
npx guideai-scan --key sk_live_xxxxx`}
                    />
                  </Expandable>
                </div>

                <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
                  <p className="text-sm text-zinc-300">
                    Need help? Contact us from{" "}
                    <Link
                      href="/policy"
                      className="text-violet-300 underline underline-offset-4 hover:text-violet-200"
                    >
                      Privacy Policy
                    </Link>{" "}
                    or explore{" "}
                    <Link
                      href="/pricing"
                      className="text-violet-300 underline underline-offset-4 hover:text-violet-200"
                    >
                      Pricing
                    </Link>
                    .
                  </p>
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

