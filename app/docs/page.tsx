"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Copy,
  Check,
  ChevronDown,
  ChevronRight,
  Zap,
  Code,
  Settings,
  Layers,
  Terminal,
} from "lucide-react";

const sidebar = [
  { id: "getting-started", label: "Getting Started", icon: Zap },
  { id: "add-cdn", label: "Add the CDN", icon: Code },
  { id: "scanner", label: "Scanner CLI", icon: Terminal },
  { id: "configuration", label: "Configuration", icon: Settings },
  { id: "usage", label: "Usage Examples", icon: Layers },
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

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("getting-started");

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

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-400 ring-1 ring-inset ring-violet-500/20">
              Documentation
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              GuideAI{" "}
              <span className="text-violet-400">SDK Documentation</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Learn how to add the GuideAI CDN to your site, configure it, and
              use the API.
            </p>
          </div>
        </div>
      </section>

      {/* Docs Content */}
      <section className="border-t border-zinc-800 py-12">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="flex gap-12">
            {/* Sidebar */}
            <aside className="hidden w-48 shrink-0 lg:block">
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

            {/* Main content */}
            <div className="min-w-0 flex-1 space-y-24">
              {/* Getting Started */}
              <div id="getting-started" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">
                  Getting Started
                </h2>
                <p className="mt-4 text-lg text-zinc-400">
                  Get GuideAI running on your site in three steps.
                </p>

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
                        knowledge base.
                      </p>
                      <CodeBlock
                        code="npx @guideai/scanner --key sk_live_YOUR_KEY --dir ./my-app"
                        language="bash"
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
                        Paste this script tag before{" "}
                        <code className="rounded bg-zinc-800 px-1 text-xs text-violet-400">
                          {"</body>"}
                        </code>{" "}
                        in your HTML.
                      </p>
                      <CodeBlock
                        code={`<script
  src="https://cdn.guideai.com/guideai.js"
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
                        personalized.
                      </p>
                      <CodeBlock
                        code={`window.guideai.initialize({
  visitor: {
    id: "user_123",
    email: "jane@acme.com",
    role: "admin",
  },
  account: {
    id: "acme_456",
    name: "Acme Corp",
    plan: "pro",
  },
});`}
                        language="javascript"
                      />
                    </div>
                  </div>
                </div>

                <p className="mt-8 text-zinc-400">
                  That&apos;s it. Your users will now see the floating help
                  bubble, receive in-app guides, and have access to AI chat.
                </p>
              </div>

              {/* Add the CDN */}
              <div id="add-cdn" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">Add the CDN</h2>
                <p className="mt-4 text-zinc-400">
                  The SDK is a single JavaScript file delivered via CDN. No npm
                  install or build step required.
                </p>

                {/* Basic */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Basic script tag
                </h3>
                <p className="mt-2 text-zinc-400">
                  The simplest way to add GuideAI. Just two required attributes.
                </p>
                <CodeBlock
                  code={`<script
  src="https://cdn.guideai.com/guideai.js"
  data-site-id="site_YOUR_SITE_ID"
  data-token="pk_live_YOUR_TOKEN"
></script>`}
                  language="html"
                />

                {/* Async loader */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Async loader (non-blocking)
                </h3>
                <p className="mt-2 text-zinc-400">
                  Use this snippet to load the SDK without blocking page render.
                  It creates{" "}
                  <code className="rounded bg-zinc-800 px-1 text-xs text-violet-400">
                    window.guideai
                  </code>{" "}
                  immediately and queues any method calls until the script
                  loads.
                </p>
                <CodeBlock
                  code={`<script>
  (function(w,d,s,id,key){
    if(w.guideai)return;
    var q=w.guideai={_q:[],_id:id,_k:key};
    ["initialize","identify","track","trackFeature",
     "showGuideById","dismissGuide","on","destroy"
    ].forEach(function(m){
      q[m]=function(){q._q.push([m,arguments])};
    });
    var js=d.createElement(s);js.async=1;
    js.src="https://cdn.guideai.com/guideai.js";
    js.dataset.siteId=id;js.dataset.token=key;
    d.head.appendChild(js);
  })(window,document,"script","site_YOUR_ID","pk_live_YOUR_TOKEN");
</script>`}
                  language="html"
                />

                {/* Full example */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Full example with all options
                </h3>
                <p className="mt-2 text-zinc-400">
                  Here is the script tag with every available attribute set.
                </p>
                <CodeBlock
                  code={`<script
  src="https://cdn.guideai.com/guideai.js"
  data-site-id="site_abc123"
  data-token="pk_live_xyz789"
  data-api-url="https://api.3guideai.com"
  data-bubble-enabled="true"
  data-bubble-position="bottom-right"
  data-bubble-icon="robot"
  data-bubble-mode="drift"
  data-guides-enabled="true"
  data-auto-advance-on-target-click="true"
  data-feedback-auto-prompt="true"
  data-chip-dismiss-seconds="300"
  data-recording="false"
  data-idle-timeout="20000"
  data-session-timeout-ms="1800000"
  data-batch-size="50"
  data-batch-interval-ms="30000"
  data-geolocation="off"
></script>`}
                  language="html"
                />

                {/* SPA */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Single-page apps (React, Vue, Angular)
                </h3>
                <p className="mt-2 text-zinc-400">
                  The SDK auto-detects route changes in SPAs. If you use custom
                  routing you can trigger page loads manually:
                </p>
                <CodeBlock
                  code={`// Tell the SDK about a route change
window.guideai.pageLoad("/dashboard/settings");`}
                  language="javascript"
                />

                {/* Next.js example */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Next.js example
                </h3>
                <CodeBlock
                  code={`// app/layout.tsx
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Script
          src="https://cdn.guideai.com/guideai.js"
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
      src="https://cdn.guideai.com/guideai.js"
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
                  code={`<!-- nuxt.config.ts -->
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://cdn.guideai.com/guideai.js",
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
      src="https://cdn.guideai.com/guideai.js"
      data-site-id="site_YOUR_SITE_ID"
      data-token="pk_live_YOUR_TOKEN"
    ></script>
  </body>
</html>`}
                  language="html"
                />
              </div>

              {/* Scanner CLI */}
              <div id="scanner" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">Scanner CLI</h2>
                <p className="mt-4 text-zinc-400">
                  The scanner analyzes your codebase and uploads a knowledge base
                  to GuideAI. This is what allows the SDK to understand your
                  app&apos;s pages and elements.
                </p>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Run with npx
                </h3>
                <CodeBlock
                  code="npx @guideai/scanner --key sk_live_YOUR_KEY --dir ./my-app"
                  language="bash"
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Install globally
                </h3>
                <CodeBlock
                  code={`npm install -g @guideai/scanner
guideai-scan --key sk_live_YOUR_KEY --dir ./my-app`}
                  language="bash"
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Options
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
                          "Your site API key (from dashboard). Not needed with --dry-run.",
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
                          "https://api.3guideai.com",
                          "Backend API URL.",
                        ],
                        [
                          "--dry-run",
                          "No",
                          "false",
                          "Output the scan result as JSON without uploading.",
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
                  The scanner auto-detects your framework. No config needed.
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
                  Dry run example
                </h3>
                <p className="mt-2 text-zinc-400">
                  Preview what the scanner finds without uploading anything:
                </p>
                <CodeBlock
                  code={`npx @guideai/scanner --dir ./my-app --dry-run --output scan-result.json`}
                  language="bash"
                />

                <h3 className="mt-10 text-xl font-semibold text-white">
                  Vite plugin
                </h3>
                <p className="mt-2 text-zinc-400">
                  Auto-scan on every build:
                </p>
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

              {/* Configuration */}
              <div id="configuration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">
                  Configuration
                </h2>
                <p className="mt-4 text-zinc-400">
                  Everything is configured via{" "}
                  <code className="rounded bg-zinc-800 px-1 text-xs text-violet-400">
                    data-*
                  </code>{" "}
                  attributes on the script tag. Here is what each one does.
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
                          Your site identifier. Find it in your GuideAI
                          dashboard.
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
                          Your public API token. Starts with{" "}
                          <code className="text-xs text-zinc-300">
                            pk_live_
                          </code>
                          .
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Bubble */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Bubble (floating button)
                </h3>
                <p className="mt-2 text-zinc-400">
                  Control the floating help button that appears on your site.
                </p>
                <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-800">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-zinc-800 bg-zinc-900/80">
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">
                          Attribute
                        </th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">
                          Default
                        </th>
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">
                          Options
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
                            data-bubble-enabled
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          <code className="text-xs text-zinc-400">true</code>
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-500">
                          true / false
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          Show or hide the floating bubble.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">
                            data-bubble-position
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          <code className="text-xs text-zinc-400">
                            bottom-right
                          </code>
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-500">
                          bottom-right, bottom-left, top-right, top-left
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          Which corner the bubble sits in.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">
                            data-bubble-icon
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          <code className="text-xs text-zinc-400">robot</code>
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-500">
                          robot, ant, owl, fox, cat, bee, spark
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          The mascot icon displayed on the bubble.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">
                            data-bubble-mode
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          <code className="text-xs text-zinc-400">drift</code>
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-500">
                          drift, crawl
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          The animation style for the bubble.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-sm text-zinc-500">Example:</p>
                <CodeBlock
                  code={`<!-- Bubble in the bottom-left with an owl icon -->
<script
  src="https://cdn.guideai.com/guideai.js"
  data-site-id="site_abc123"
  data-token="pk_live_xyz789"
  data-bubble-position="bottom-left"
  data-bubble-icon="owl"
></script>`}
                  language="html"
                />

                {/* Guides */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Guides
                </h3>
                <p className="mt-2 text-zinc-400">
                  Control how in-app guides behave.
                </p>
                <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-800">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-zinc-800 bg-zinc-900/80">
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">
                          Attribute
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
                      <tr>
                        <td className="px-4 py-3">
                          <code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">
                            data-guides-enabled
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          <code className="text-xs text-zinc-400">true</code>
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          Turn guide playback on or off.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">
                            data-auto-advance-on-target-click
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          <code className="text-xs text-zinc-400">true</code>
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          Auto-advance to the next step when the user clicks the
                          highlighted element.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">
                            data-feedback-auto-prompt
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          <code className="text-xs text-zinc-400">true</code>
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          Ask users for feedback after they complete a guide.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">
                            data-chip-dismiss-seconds
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          <code className="text-xs text-zinc-400">300</code>
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          How long suggestion chips stay visible (in seconds).
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Analytics & Session */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  Analytics & session
                </h3>
                <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-800">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-zinc-800 bg-zinc-900/80">
                        <th className="px-4 py-3 text-sm font-medium text-zinc-300">
                          Attribute
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
                      <tr>
                        <td className="px-4 py-3">
                          <code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">
                            data-recording
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          <code className="text-xs text-zinc-400">false</code>
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          Enable session recording for replay in the dashboard.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">
                            data-idle-timeout
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          <code className="text-xs text-zinc-400">20000</code>
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          Milliseconds of inactivity before the user is
                          considered idle.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">
                            data-session-timeout-ms
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          <code className="text-xs text-zinc-400">
                            1800000
                          </code>
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          How long before a session rotates (default 30 min).
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">
                            data-batch-size
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          <code className="text-xs text-zinc-400">50</code>
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          Number of events to batch before sending to the
                          server.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">
                            data-batch-interval-ms
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          <code className="text-xs text-zinc-400">30000</code>
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          How often to flush event batches (in milliseconds).
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">
                            data-geolocation
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          <code className="text-xs text-zinc-400">off</code>
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          Geo tracking. Options: &quot;off&quot;,
                          &quot;granted-only&quot;, &quot;prompt&quot;.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <code className="rounded bg-violet-500/10 px-1.5 py-0.5 text-xs text-violet-400">
                            data-api-url
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          <code className="text-xs text-zinc-400">
                            https://api.3guideai.com
                          </code>
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          Override the backend API URL (for self-hosted setups).
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Usage Examples */}
              <div id="usage" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-white">
                  Usage Examples
                </h2>
                <p className="mt-4 text-zinc-400">
                  All methods are available on{" "}
                  <code className="rounded bg-zinc-800 px-1.5 text-sm text-violet-400">
                    window.guideai
                  </code>
                  . Here are the most common things you can do.
                </p>

                {/* Identify users */}
                <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/30 px-5">
                  <Expandable title="Identify users and accounts">
                    <p className="text-sm text-zinc-400">
                      Pass visitor and account data so guides can be targeted to
                      specific users.
                    </p>
                    <CodeBlock
                      code={`window.guideai.initialize({
  visitor: {
    id: "user_123",
    email: "jane@acme.com",
    name: "Jane Doe",
    role: "admin",
    createdAt: "2024-01-15",
  },
  account: {
    id: "acme_456",
    name: "Acme Corp",
    plan: "enterprise",
    mrr: 299,
  },
});`}
                      language="javascript"
                    />
                    <p className="mt-4 text-sm text-zinc-400">
                      You can also just set a user ID:
                    </p>
                    <CodeBlock
                      code={`window.guideai.identify("user_123");`}
                      language="javascript"
                    />
                    <p className="mt-4 text-sm text-zinc-400">
                      Update data mid-session without reinitializing:
                    </p>
                    <CodeBlock
                      code={`window.guideai.updateOptions({
  visitor: { plan: "pro" },
});`}
                      language="javascript"
                    />
                  </Expandable>

                  <Expandable title="Show a guide programmatically">
                    <p className="text-sm text-zinc-400">
                      Trigger a specific guide by its ID.
                    </p>
                    <CodeBlock
                      code={`// Start from the beginning
window.guideai.showGuideById("guide_onboarding");

// Jump to step 3
window.guideai.showGuideById("guide_onboarding", 2);`}
                      language="javascript"
                    />
                    <p className="mt-4 text-sm text-zinc-400">
                      Check if a guide can play on the current page first:
                    </p>
                    <CodeBlock
                      code={`if (window.guideai.validateGuideById("guide_onboarding")) {
  window.guideai.showGuideById("guide_onboarding");
}`}
                      language="javascript"
                    />
                    <p className="mt-4 text-sm text-zinc-400">
                      Dismiss the current guide:
                    </p>
                    <CodeBlock
                      code={`window.guideai.dismissGuide();`}
                      language="javascript"
                    />
                  </Expandable>

                  <Expandable title="Track custom events">
                    <p className="text-sm text-zinc-400">
                      Send custom analytics events.
                    </p>
                    <CodeBlock
                      code={`window.guideai.track("upgrade_cta_clicked", {
  plan: "pro",
  source: "pricing_page",
});`}
                      language="javascript"
                    />
                    <p className="mt-4 text-sm text-zinc-400">
                      Track feature usage:
                    </p>
                    <CodeBlock
                      code={`window.guideai.trackFeature("csv_export", "Export to CSV", {
  format: "csv",
  rows: 1500,
});`}
                      language="javascript"
                    />
                    <p className="mt-4 text-sm text-zinc-400">
                      Mark a feature as used (for audience targeting):
                    </p>
                    <CodeBlock
                      code={`window.guideai.markFeature("viewed_dashboard");`}
                      language="javascript"
                    />
                  </Expandable>

                  <Expandable title="Listen to events">
                    <p className="text-sm text-zinc-400">
                      Subscribe to SDK events to react when things happen.
                    </p>
                    <CodeBlock
                      code={`// When a guide starts
window.guideai.on("guide-started", (data) => {
  console.log("Guide started:", data.guideId);
});

// When a guide is completed
window.guideai.on("guide-completed", (data) => {
  console.log("Completed:", data.guideId);
});

// When a guide is dismissed
window.guideai.on("guide-dismissed", (data) => {
  console.log("Dismissed:", data.guideId);
});

// When the user submits feedback
window.guideai.on("feedback-submitted", (data) => {
  console.log("Rating:", data.rating);
});

// When the chat is opened
window.guideai.on("chat-opened", () => {
  console.log("Chat opened");
});

// When a page is viewed
window.guideai.on("page-view", (data) => {
  console.log("Page:", data.url);
});`}
                      language="javascript"
                    />
                    <p className="mt-4 text-sm text-zinc-500">
                      Available events: guide-started, guide-completed,
                      guide-dismissed, before-advance, advanced, chat-opened,
                      chat-message-sent, bubble-click, feedback-submitted,
                      survey-response, page-view, session-start, session-end
                    </p>
                  </Expandable>

                  <Expandable title="Record a guide">
                    <p className="text-sm text-zinc-400">
                      Record user interactions to create a new guide
                      programmatically.
                    </p>
                    <CodeBlock
                      code={`// Start recording
window.guideai.startRecording();

// ... user interacts with the app ...

// Stop and get recorded steps
const steps = window.guideai.stopRecording();

// Save as a draft guide
window.guideai.saveGuide("Onboarding Flow", "Walks new users through setup");

// Or cancel without saving
window.guideai.cancelRecording();`}
                      language="javascript"
                    />
                  </Expandable>

                  <Expandable title="Show surveys">
                    <p className="text-sm text-zinc-400">
                      Trigger NPS or CSAT surveys.
                    </p>
                    <CodeBlock
                      code={`// NPS survey
window.guideai.showNPSSurvey({ page: "/settings" });

// CSAT survey
window.guideai.showCSATSurvey({ after: "guide_complete" });`}
                      language="javascript"
                    />
                  </Expandable>

                  <Expandable title="Session management">
                    <p className="text-sm text-zinc-400">
                      Manage user sessions and SDK lifecycle.
                    </p>
                    <CodeBlock
                      code={`// Force-flush all pending events now
window.guideai.flushNow();

// Clear session (call on logout)
window.guideai.clearSession();

// Tear down the SDK completely
window.guideai.destroy();`}
                      language="javascript"
                    />
                  </Expandable>

                  <Expandable title="Trigger a guide from a button click">
                    <p className="text-sm text-zinc-400">
                      Common pattern: add a &quot;Help&quot; button that starts a
                      guide.
                    </p>
                    <CodeBlock
                      code={`<!-- HTML -->
<button onclick="startHelp()">Need help?</button>

<script>
  function startHelp() {
    window.guideai.showGuideById("guide_getting_started");
  }
</script>`}
                      language="html"
                    />
                    <p className="mt-4 text-sm text-zinc-400">
                      In React:
                    </p>
                    <CodeBlock
                      code={`function HelpButton() {
  const handleClick = () => {
    window.guideai.showGuideById("guide_getting_started");
  };

  return <button onClick={handleClick}>Need help?</button>;
}`}
                      language="tsx"
                    />
                  </Expandable>

                  <Expandable title="Identify on login (React example)">
                    <p className="text-sm text-zinc-400">
                      Call initialize after the user logs in.
                    </p>
                    <CodeBlock
                      code={`// After successful login
async function handleLogin(email, password) {
  const user = await api.login(email, password);

  window.guideai.initialize({
    visitor: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
    account: {
      id: user.orgId,
      name: user.orgName,
      plan: user.plan,
    },
  });
}

// On logout
function handleLogout() {
  window.guideai.clearSession();
}`}
                      language="javascript"
                    />
                  </Expandable>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-20 rounded-2xl border border-zinc-800 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 p-10 text-center">
                <h2 className="text-2xl font-bold text-white">
                  Ready to get started?
                </h2>
                <p className="mt-3 text-zinc-400">
                  Add the script tag to your site and start delivering guides
                  today.
                </p>
                <Link href="https://dashboard.3guideai.com" target="_blank">
                  <Button
                    size="lg"
                    className="mt-6 bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:from-cyan-600 hover:to-violet-600"
                  >
                    Get your API keys
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
