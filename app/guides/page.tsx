"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, Play, Zap, RefreshCw, MousePointer, Layers, Eye } from "lucide-react";
import Link from "next/link";

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-400 ring-1 ring-inset ring-violet-500/20">
              In-App Guides
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Create guides that{" "}
              <span className="text-violet-400">never break</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Record once, deploy everywhere. Our AI keeps your guides current as your product evolves—no manual updates required.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href={`${process.env.NEXT_PUBLIC_BASE_URL}`}
                target="_blank" 
                className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:from-cyan-600 px-8 py-3 rounded-md hover:to-violet-600">
                Start building guides
              </Link>
              {/* <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                <Play className="mr-2 h-4 w-4" />
                Watch demo
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From recording to live in minutes
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Our AI handles the heavy lifting so you can focus on what matters.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Record your workflow",
                description: "Simply perform the task you want to guide users through. Our extension captures every click and input.",
              },
              {
                step: "02",
                title: "AI generates the guide",
                description: "GuideAI analyzes your recording and creates step-by-step instructions with smart element targeting.",
              },
              {
                step: "03",
                title: "Deploy & auto-heal",
                description: "Publish instantly. When your UI changes, our AI automatically updates selectors and copy.",
              },
            ].map((item) => (
              <div key={item.step} className="relative rounded-2xl bg-zinc-900 p-8">
                <span className="text-5xl font-bold text-zinc-800">{item.step}</span>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Guides that actually work
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "AI-Assisted Creation",
                description: "Record workflows and let AI generate clear, contextual step-by-step guides.",
              },
              {
                icon: RefreshCw,
                title: "Auto-Healing",
                description: "Guides automatically adapt when your UI changes—no manual maintenance.",
              },
              {
                icon: MousePointer,
                title: "Smart Targeting",
                description: "Multiple selector strategies ensure guides work even after updates.",
              },
              {
                icon: Layers,
                title: "Multi-Format Support",
                description: "Tooltips, modals, slideouts, and embedded guides for every use case.",
              },
              {
                icon: Eye,
                title: "Audience Segmentation",
                description: "Show different guides based on user roles, plans, or behavior.",
              },
              {
                icon: Check,
                title: "Completion Tracking",
                description: "See exactly where users drop off and optimize your flows.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl bg-zinc-900/50 p-6 transition hover:bg-zinc-900"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10">
                  <feature.icon className="h-5 w-5 text-violet-400" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to build guides that last?
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Start your free trial today. No credit card required.
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
