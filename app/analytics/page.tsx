"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, AlertTriangle, Users, BarChart3, Target, Zap } from "lucide-react";
import Link from "next/link";

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-400 ring-1 ring-inset ring-violet-500/20">
              Friction Analytics
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              See where users{" "}
              <span className="text-violet-400">get stuck</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              AI-powered analytics that surface friction points, rage clicks, and drop-offs—so you know exactly where to focus.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href={`${process.env.NEXT_PUBLIC_BASE_URL}`}
                target="_blank" 
                className="px-8 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:from-cyan-600 hover:to-violet-600">
                Start analyzing
              </Link>
              {/* <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                View sample report
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      {/* <section className="py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Friction Dashboard</h3>
              <div className="flex gap-2">
                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-400">Last 7 days</span>
              </div>
            </div>

            <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[
                { label: "Friction Events", value: "2,847", change: "-12%", positive: true },
                { label: "Rage Clicks", value: "156", change: "-24%", positive: true },
                { label: "Drop-off Rate", value: "18%", change: "-5%", positive: true },
                { label: "Avg. Time to Value", value: "4.2m", change: "-18%", positive: true },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl bg-zinc-800/50 p-4">
                  <p className="text-sm text-zinc-400">{stat.label}</p>
                  <p className="mt-1 text-2xl font-bold text-white">{stat.value}</p>
                  <p className={`mt-1 text-xs ${stat.positive ? "text-green-400" : "text-red-400"}`}>
                    {stat.change} vs last week
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-8 rounded-xl bg-zinc-800/30 p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-white">Friction Events Over Time</span>
                <div className="flex gap-4 text-xs text-zinc-400">
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-violet-400" /> Friction
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-orange-400" /> Rage Clicks
                  </span>
                </div>
              </div>
              <div className="flex h-40 items-end gap-2">
                {[65, 45, 55, 40, 35, 50, 30].map((height, i) => (
                  <div key={i} className="flex flex-1 flex-col gap-1">
                    <div
                      className="w-full rounded-t bg-violet-500/60"
                      style={{ height: `${height}%` }}
                    />
                    <div
                      className="w-full rounded-t bg-orange-500/60"
                      style={{ height: `${height * 0.2}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-between text-xs text-zinc-500">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

            <div className="rounded-xl bg-zinc-800/30 p-4">
              <h4 className="mb-4 text-sm font-medium text-white">Top Friction Points</h4>
              <div className="space-y-3">
                {[
                  { page: "/settings/integrations", events: 342, type: "Confusion" },
                  { page: "/onboarding/step-3", events: 289, type: "Drop-off" },
                  { page: "/dashboard/export", events: 156, type: "Rage clicks" },
                ].map((item) => (
                  <div key={item.page} className="flex items-center justify-between rounded-lg bg-zinc-800 p-3">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-4 w-4 text-orange-400" />
                      <span className="text-sm text-zinc-300">{item.page}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="rounded-full bg-zinc-700 px-2 py-0.5 text-xs text-zinc-400">
                        {item.type}
                      </span>
                      <span className="text-sm font-medium text-white">{item.events}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features */}
      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Analytics that drive action
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Not just data—insights you can actually use.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: AlertTriangle,
                title: "Friction Detection",
                description: "Automatically identify rage clicks, dead clicks, and hesitation patterns.",
              },
              {
                icon: TrendingUp,
                title: "Funnel Analysis",
                description: "See exactly where users drop off in onboarding and activation flows.",
              },
              {
                icon: Users,
                title: "Cohort Comparison",
                description: "Compare behavior between user segments, plans, and time periods.",
              },
              {
                icon: Target,
                title: "Guide Performance",
                description: "Track completion rates and impact of every guide you create.",
              },
              {
                icon: Zap,
                title: "AI Recommendations",
                description: "Get suggested guides and interventions based on friction patterns.",
              },
              {
                icon: BarChart3,
                title: "Custom Dashboards",
                description: "Build dashboards focused on the metrics that matter to your team.",
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

      {/* CTA */}
      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stop guessing. Start knowing.
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Friction Analytics is included in all GuideAI plans.
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
