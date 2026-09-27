"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BarChart3,
  Bot,
  MousePointerClick,
  Presentation,
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
    key: "analytics",
    label: "Analytics",
    icon: BarChart3,
    title: "Know exactly where customers give up",
    description:
      "See the step where people drop off, get a suggested fix, and find out whether it actually helped.",
    bullets: [
      "Spot drop-offs before they cost you customers",
      "A suggested fix for every problem found",
      "See the real impact of every change",
    ],
    image: "/friction-img.png",
    imageAlt: "3Guide Analytics showing where users drop off",
    href: "/analytics",
    linkLabel: "Explore Analytics",
  },
  {
    key: "guidance",
    label: "Guidance",
    icon: MousePointerClick,
    title: "Show users how, right inside your product",
    description:
      "Step-by-step walkthroughs, tips and announcements that appear on the real screen, at the moment people need them.",
    bullets: [
      "Get new users to their first win faster",
      "Launch features people actually notice",
      "Keeps working when your product changes",
    ],
    image: "/guidance-mode.gif",
    imageAlt: "A 3Guide walkthrough highlighting each step on screen",
    href: "/guides",
    linkLabel: "Explore Guidance",
  },
  {
    key: "assistant",
    label: "AI Assistant",
    icon: Bot,
    title: "Let users skip the tutorial",
    description:
      "Users ask for what they want, and the assistant gets it done for them, from pulling up a report to completing a task.",
    bullets: [
      "Fewer support tickets",
      "Faster results for busy users",
      "Learn what your customers need most",
    ],
    image: "/assistant-mode.gif",
    imageAlt: "The 3Guide AI Assistant completing a request",
    href: "/assistant",
    linkLabel: "Explore the AI Assistant",
  },
  {
    key: "guide-pro",
    label: "Guide Pro",
    icon: Presentation,
    title: "Demos that win customers and train teams",
    description:
      "Turn a quick recording of your product into an interactive demo for your website, your sales team, or staff training.",
    bullets: [
      "Capture more leads from your website",
      "Onboard clients without live calls",
      "One recording becomes a demo, a video and a guide",
    ],
    image: "/guide-pro-img.png",
    imageAlt: "An interactive Guide Pro demo",
    href: "/guide-pro",
    linkLabel: "Explore Guide Pro",
  },
];

export function FeatureTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <Section id="platform" className="bg-canvas-deep">
      <Container className="px-6">
        <SectionHeading
          eyebrow="What you get"
          title="Four ways to get customers using your product"
          description="Start with the one you need today. Add the others when you're ready."
          align="center"
        />

        {/* Tab pills */}
        <div
          data-reveal
          className="
            mt-12
            flex
            gap-3
            overflow-x-auto
            overflow-y-hidden
            px-4
            py-4
            pl-2
            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
            lg:justify-center
            lg:overflow-x-visible
            lg:gap-4
          "
        >
          {tabs.map((t, i) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-base font-medium transition-all duration-300",
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
            <h3 className="text-balance font-display text-sub font-semibold text-slate-900">
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
