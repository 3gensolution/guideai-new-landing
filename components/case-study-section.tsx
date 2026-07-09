import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CaseStudySection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="mb-4">
          <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Customer Spotlight
          </span>
        </div>
        <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
          See how SaaS teams improved
          <br />
          activation with 3Guide
        </h2>

        <div className="mt-16 overflow-hidden rounded-2xl bg-zinc-100">
          <div className="grid lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-80 bg-gradient-to-br from-violet-200 to-cyan-200 lg:h-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-xl bg-white/90 p-6 shadow-lg">
                  <div className="text-4xl font-bold text-zinc-900">FinStack</div>
                  <p className="text-sm text-zinc-500">B2B Fintech Platform</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12">
              <div className="mb-6">
                <span className="text-xl font-bold text-zinc-900">
                  FinStack
                </span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">
                How FinStack cut onboarding time by 60% with in-app guides
              </h3>
              <Button className="mt-6 bg-zinc-900 text-white hover:bg-zinc-800">
                Read the case study
              </Button>

              <div className="mt-8 border-t border-zinc-200 pt-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 text-lg font-semibold text-zinc-600">
                    MK
                  </div>
                  <div>
                    <p className="font-medium text-zinc-900">Maria Kim</p>
                    <p className="text-sm text-zinc-500">Head of Product at FinStack</p>
                  </div>
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-zinc-600">
                  <Quote className="mb-2 h-4 w-4 text-zinc-400" />
                  Our onboarding was entirely support-driven. New users would
                  schedule calls just to complete basic setup. With 3Guide, we
                  shipped contextual guides in days, and our trial-to-paid
                  conversion jumped 35% in the first quarter.
                </blockquote>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-white p-4">
                  <p className="text-3xl font-bold text-zinc-900">60%</p>
                  <p className="text-xs text-zinc-500">Faster Onboarding</p>
                </div>
                <div className="rounded-lg bg-white p-4">
                  <p className="text-3xl font-bold text-zinc-900">35%</p>
                  <p className="text-xs text-zinc-500">Trial Conversion Lift</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
