"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Play, MessageSquare, Video, Search, Sparkles, Clock, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CopilotPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-400 ring-1 ring-inset ring-violet-500/20">
              Browser Copilot
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Your users&apos; always-on{" "}
              <span className="text-violet-400">AI assistant</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              A Chrome extension that helps users complete tasks, find answers, and learn your product—without leaving your app.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href={`${process.env.NEXT_PUBLIC_BASE_URL}`}
                target="_blank" 
                className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:from-cyan-600 hover:to-violet-600 px-8 py-3 rounded-md">
                Try Browser Copilot
              </Link>
              {/* <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                <Play className="mr-2 h-4 w-4" />
                See it in action
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Preview */}
      <section className="py-8">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          {/* <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
            <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/80 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-zinc-700" />
                <div className="h-3 w-3 rounded-full bg-zinc-700" />
                <div className="h-3 w-3 rounded-full bg-zinc-700" />
              </div>
              <div className="flex-1 text-center text-sm text-zinc-500">your-app.com</div>
            </div>
            <div className="relative aspect-video bg-zinc-950 p-8">
              <div className="absolute right-8 top-8 w-80 rounded-xl border border-zinc-700 bg-zinc-900 p-4 shadow-2xl">
                <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium text-white">3Guide Copilot</span>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="rounded-lg bg-zinc-800 p-3 text-sm text-zinc-300">
                    How do I export my data to CSV?
                  </div>
                  <div className="rounded-lg bg-violet-500/10 p-3 text-sm text-zinc-300">
                    <p>I can help you export to CSV! Here&apos;s how:</p>
                    <ol className="mt-2 list-inside list-decimal space-y-1 text-xs text-zinc-400">
                      <li>Go to Settings → Data</li>
                      <li>Click &quot;Export&quot; button</li>
                      <li>Select CSV format</li>
                    </ol>
                    <button className="mt-3 text-xs text-violet-400 hover:text-violet-300">
                      → Start guided walkthrough
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2">
                  <Search className="h-4 w-4 text-zinc-500" />
                  <span className="text-sm text-zinc-500">Ask anything...</span>
                </div>
              </div>
              <div className="text-zinc-600">
                <div className="h-8 w-48 rounded bg-zinc-800/50" />
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="h-32 rounded-lg bg-zinc-800/30" />
                  <div className="h-32 rounded-lg bg-zinc-800/30" />
                  <div className="h-32 rounded-lg bg-zinc-800/30" />
                </div>
              </div>
            </div>
          </div> */}
          <Image
            src="/copilot.png"
            alt="Demo Preview"
            width={300}
            height={300}
            className="mx-auto h-[400px] w-full sm:w-[500px] md:w-[800px] rounded-xl border border-zinc-700 bg-zinc-900 p-4 shadow-2xl"
          />
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything users need, right where they need it
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
            {[
              {
                icon: MessageSquare,
                title: "Natural Language Q&A",
                description: "Users ask questions in plain English and get instant, contextual answers sourced from your docs and guides.",
                highlight: "Powered by RAG + your knowledge base",
              },
              {
                icon: Target,
                title: "Task Completion Assistant",
                description: "Copilot can guide users step-by-step through complex workflows, highlighting exactly where to click.",
                highlight: "Reduces support tickets by 40%",
              },
              {
                icon: Video,
                title: "On-Demand Video Guides",
                description: "Auto-generated video walkthroughs play right in the sidebar, showing users exactly what to do.",
                highlight: "No recording required",
              },
              {
                icon: Clock,
                title: "Contextual Awareness",
                description: "Copilot knows what page users are on and proactively offers relevant help based on their actions.",
                highlight: "Smart, not spammy",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
                  <feature.icon className="h-6 w-6 text-violet-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-zinc-400">{feature.description}</p>
                <p className="mt-4 text-sm font-medium text-violet-400">{feature.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Set up in under 10 minutes
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Connect your knowledge base",
                  description: "Import your docs, help center, and existing guides. Copilot indexes everything automatically.",
                },
                {
                  step: "2",
                  title: "Customize the experience",
                  description: "Set your brand colors, welcome message, and configure which features to enable.",
                },
                {
                  step: "3",
                  title: "Deploy to users",
                  description: "Share the Chrome extension link or embed Copilot directly in your web app.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-zinc-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Give your users superpowers
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Browser Copilot is included in all 3Guide plans.
            </p>
            <Button size="lg" className="mt-8 bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:from-cyan-600 hover:to-violet-600">
              Get started free
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
