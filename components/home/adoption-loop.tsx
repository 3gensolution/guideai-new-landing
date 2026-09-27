"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/marketing/primitives";
import { cn } from "@/lib/utils";

/**
 * How the four products drive adoption together, in funnel order:
 * Guide Pro → Guidance → Assistant → Analytics → back into Guidance.
 *
 * Expanding colour-block carousel (Freshworks-style). Collapsed stages are
 * narrow vertical slivers; the active one opens into a full editorial panel
 * with the outcome, description, a stage number and a link.
 *
 * Colour is doing the work here, so each stage owns a saturated block —
 * a deliberate break from the page's purple-only system.
 */
const stages = [
  {
    name: "Guide Pro",
    pillar: "Attract",
    outcome: "Prospects try your product before they buy",
    description:
      "An interactive demo on your website turns curious visitors into leads.",
    stat: "01",
    statLabel: "Visitor → lead",
    href: "/guide-pro",
    bg: "#E8A54F",
    ink: "#2A1A05",
  },
  {
    name: "Guidance",
    pillar: "Onboard",
    outcome: "New users are walked through setup",
    description:
      "Step-by-step help on the screen gets them to their first win, fast.",
    stat: "02",
    statLabel: "Sign-up → active user",
    href: "/guides",
    bg: "#E8603C",
    ink: "#2A0D05",
  },
  {
    name: "AI Assistant",
    pillar: "Accelerate",
    outcome: "Busy users just ask, and it's done",
    description:
      "No tutorial needed for people who just want the result.",
    stat: "03",
    statLabel: "Request → result",
    href: "/assistant",
    bg: "#D6379B",
    ink: "#2A031B",
  },
  {
    name: "Analytics",
    pillar: "Improve",
    outcome: "You see where people still get stuck",
    description:
      "3Guide suggests a fix, and shows you whether it worked. Then the loop starts again.",
    stat: "04",
    statLabel: "Problem → proven fix",
    href: "/analytics",
    bg: "#7C4DE0",
    ink: "#170432",
  },
];

export function AdoptionLoop() {
  const [active, setActive] = useState(0);

  return (
    <Section id="together" className="overflow-hidden bg-canvas">
      <Container>
        <div
          data-reveal
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-purple-600">
              How they work together
            </p>
            <h2 className="font-display mt-5 text-balance text-section text-slate-900">
              From first visit{" "}
              <span className="text-purple-600">to loyal customer.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-slate-600">
            Each product picks up where the last one leaves off, so customers
            keep moving forward instead of getting stuck.
          </p>
        </div>

        {/* Desktop: expanding blocks. Mobile: a horizontal snap rail. */}
        <div
          data-reveal
          className="mt-14 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 scrollbar-hide lg:overflow-visible lg:pb-0"
        >
          {stages.map((s, i) => {
            const isActive = i === active;
            return (
              <article
                key={s.name}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                style={{ backgroundColor: s.bg, color: s.ink }}
                className={cn(
                  "relative flex snap-start overflow-hidden rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
                  "h-[30rem] w-[84vw] shrink-0 sm:w-[26rem]",
                  "lg:w-auto lg:shrink lg:grow-0 lg:basis-0",
                  isActive ? "lg:grow-[6]" : "lg:grow-[1]"
                )}
              >
                {/* Collapsed: the stage name runs vertically up the sliver. */}
                <div
                  className={cn(
                    "absolute inset-0 hidden items-center justify-center transition-opacity duration-500 lg:flex",
                    isActive ? "pointer-events-none opacity-0" : "opacity-100"
                  )}
                >
                  <span
                    className="font-display whitespace-nowrap text-xl tracking-tight"
                    style={{ writingMode: "vertical-rl", rotate: "180deg" }}
                  >
                    {s.name}
                  </span>
                </div>

                {/* Abstract depth: concentric rings + a soft corner bloom.
                    Keeps the block a colour field rather than a screenshot. */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "repeating-radial-gradient(circle at 82% 78%, rgba(255,255,255,0.9) 0 2px, transparent 2px 22px)",
                  }}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(28rem 20rem at 88% 92%, rgba(255,255,255,0.30), transparent 68%), radial-gradient(24rem 18rem at 4% 0%, rgba(0,0,0,0.20), transparent 62%)",
                  }}
                />

                {/* Expanded panel */}
                <div
                  className={cn(
                    "relative flex w-[84vw] flex-col justify-between p-7 transition-opacity duration-500 sm:w-[26rem] lg:w-[34rem]",
                    isActive
                      ? "opacity-100 delay-150"
                      : "opacity-100 lg:pointer-events-none lg:opacity-0 lg:delay-0"
                  )}
                >
                  <div>
                    <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] opacity-70">
                      {s.name} · {s.pillar}
                    </p>
                    <h3 className="font-display mt-4 max-w-[18ch] text-balance text-3xl leading-[1.1] tracking-tight">
                      {s.outcome}
                    </h3>
                    <p className="mt-4 max-w-[42ch] text-sm leading-relaxed opacity-80">
                      {s.description}
                    </p>
                    <Link
                      href={s.href}
                      className="group mt-6 inline-flex items-center gap-1.5 border-b border-current pb-0.5 text-sm font-medium"
                    >
                      Explore
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                  <div>
                    <p className="font-display text-5xl tracking-tight">
                      {s.stat}
                    </p>
                    <p className="mt-1 text-sm opacity-75">{s.statLabel}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
