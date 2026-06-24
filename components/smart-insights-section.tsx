import Image from "next/image";
import { TrendingUp, Target, Zap, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: TrendingUp,
    title: "Trial-to-activation lift",
    description: "Measurable improvement in user activation rates",
  },
  {
    icon: Target,
    title: "Feature adoption tracking",
    description: "Know which features get used and which get ignored",
  },
  {
    icon: Zap,
    title: "Support deflection",
    description: "Reduce repetitive how-do-I questions automatically",
  },
];

const steps = [
  {
    number: "01",
    title: "Identify friction points",
    description:
      "Analytics show exactly where users drop off or struggle in your product",
  },
  {
    number: "02",
    title: "Deploy contextual help",
    description:
      "Ship in-app guides targeted at the exact moment users need help",
  },
  {
    number: "03",
    title: "Measure the impact",
    description:
      "Track completion rates, time to value, and support ticket reduction to prove ROI",
  },
];

export function SmartInsightsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-violet-100 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-100 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100">
            <TrendingUp className="h-4 w-4 text-zinc-700" />
          </div>

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Friction Analytics
          </span>
        </div>

        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            See where users struggle.
            <br />
            Fix it directly inside your product.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            GuideAI combines product analytics with AI-powered onboarding so
            you can detect friction, launch contextual guidance, and improve
            activation without engineering bottlenecks.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-20 grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT SIDE */}
          <div>
            {/* Feature Cards */}
            <div className="grid gap-5 sm:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100">
                    <feature.icon className="h-5 w-5 text-zinc-700" />
                  </div>

                  <h4 className="mt-4 text-sm font-semibold text-zinc-900">
                    {feature.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Dashboard Image */}
            <div className="group relative mt-12 overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
              {/* Top browser bar */}
              <div className="flex items-center justify-between border-b border-zinc-100 bg-zinc-50 px-5 py-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="rounded-full bg-white px-4 py-1 text-xs text-zinc-500 shadow-sm">
                  dashboard.3guideai.com
                </div>

                <div className="text-xs text-zinc-400">
                  Live Dashboard
                </div>
              </div>

              {/* Dashboard Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/funnel.png"
                  alt="GuideAI analytics dashboard"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

                {/* Floating Stat Card */}
                <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/80 p-5 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                    <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                    Activation Rate
                  </div>

                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-3xl font-bold text-zinc-900">
                      +47%
                    </span>

                    <span className="mb-1 text-sm font-medium text-emerald-500">
                      this month
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="rounded-[32px] border border-zinc-200 bg-zinc-50 p-8 shadow-sm">
              {/* Header */}
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100">
                  <Target className="h-5 w-5 text-violet-600" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-zinc-900">
                    Adoption Insights
                  </h3>

                  <p className="text-sm text-zinc-500">
                    AI-powered onboarding intelligence
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-7 text-zinc-600">
                Close the gap between discovering friction and fixing it.
                GuideAI continuously monitors onboarding behavior, surfaces
                drop-off patterns, and lets your team launch contextual help
                flows instantly.
              </p>

              {/* CTA */}
              {/* <Button className="mt-8 rounded-xl bg-zinc-900 px-5 text-white hover:bg-zinc-800">
                Explore Analytics
              </Button> */}

              {/* Steps */}
              <div className="mt-12 space-y-8">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className="relative flex gap-5"
                  >
                    {/* Vertical Line */}
                    {index !== steps.length - 1 && (
                      <div className="absolute left-[15px] top-10 h-full w-px bg-zinc-200" />
                    )}

                    {/* Number */}
                    <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-xs font-semibold text-white">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="pb-2">
                      <h4 className="text-base font-semibold text-zinc-900">
                        {step.title}
                      </h4>

                      <p className="mt-2 max-w-md text-sm leading-7 text-zinc-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Metric */}
              <div className="mt-12 rounded-2xl border border-zinc-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                      Avg Time To Value
                    </p>

                    <h4 className="mt-2 text-3xl font-bold text-zinc-900">
                      2.4 days
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-600">
                    ↓ 18%
                  </div>
                </div>

                <p className="mt-3 text-sm text-zinc-500">
                  Teams using contextual onboarding reached first value faster
                  after deploying GuideAI walkthroughs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
