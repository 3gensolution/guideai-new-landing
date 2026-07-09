import { MousePointer2, Video, Bot, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: MousePointer2,
    title: "Task completion",
    description: "Copilot executes supported browser actions on the live page",
  },
  {
    icon: Video,
    title: "Video guides",
    description: "Turn any workflow recording into polished MP4 training assets",
  },
  {
    icon: Zap,
    title: "Contextual help",
    description: "AI reads the current page and suggests the next best action",
  },
];

export function VoiceSection() {
  return (
    <section className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-zinc-200">
            <Bot className="h-4 w-4 text-zinc-600" />
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Browser Copilot
          </span>
        </div>

        <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
          Help users complete tasks directly in-product
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title}>
              <feature.icon className="h-5 w-5 text-zinc-400" />
              <h4 className="mt-3 font-medium text-zinc-900">{feature.title}</h4>
              <p className="mt-1 text-sm text-zinc-500">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Browser Copilot Card */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-violet-900 to-zinc-900 p-8">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/20">
                <Bot className="h-4 w-4 text-violet-400" />
              </div>
              <span className="text-lg font-semibold text-white">
                Browser Copilot
              </span>
            </div>
            <p className="mb-6 text-sm text-white/70">
              When users ask for help, Copilot reads the live page, understands
              the context, and can execute supported actions directly in their
              browser. No more switching to help docs or waiting for support.
            </p>
            <Button
              variant="outline"
              className="border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              Explore Browser Copilot
            </Button>
          </div>

          {/* Copilot Visualization */}
          <div className="flex items-center justify-center rounded-2xl bg-zinc-100 p-8">
            <div className="w-full max-w-sm rounded-lg bg-white p-4 shadow-lg">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-r from-cyan-500 to-violet-500">
                  <Bot className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm font-medium text-zinc-900">3Guide Copilot</span>
              </div>
              <div className="space-y-3">
                <div className="rounded-lg bg-zinc-100 p-3">
                  <p className="text-xs text-zinc-500">User asked:</p>
                  <p className="text-sm text-zinc-700">{`"How do I connect my Stripe account?"`}</p>
                </div>
                <div className="rounded-lg border border-violet-200 bg-violet-50 p-3">
                  <p className="text-xs text-violet-600">Copilot can:</p>
                  <ul className="mt-1 space-y-1 text-sm text-zinc-700">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
                      Navigate to Settings → Integrations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
                      Click Connect Stripe button
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
                      Guide through OAuth flow
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
