import Link from "next/link";
import {
  Building2,
  KeyRound,
  Lock,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Users,
  UsersRound,
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/marketing/primitives";
import { DASHBOARD_URL } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Growth journey — "Every capability, from day one."                  */
/*                                                                     */
/* The angle: 3Guide does NOT gate features behind tiers in the story. */
/* The whole platform is there from your first snippet. What changes   */
/* as you grow is scale, targeting, and governance — not access to the */
/* product. Four stages sit on a rail; enterprise-grade trust runs     */
/* underneath the whole thing.                                         */
/* ------------------------------------------------------------------ */

const stages = [
  {
    icon: Rocket,
    stage: "Startup",
    scale: "First users",
    headline: "Ship your first guide in minutes",
    description:
      "Add one snippet, record a flow, and go live. Guidance chat, in-app guides, and the copilot are all there from day one.",
  },
  {
    icon: TrendingUp,
    stage: "Growing",
    scale: "Thousands of users",
    headline: "Answer questions and see the friction",
    description:
      "The same platform now deflects support, surfaces where users get stuck, and lets you target guidance by segment.",
  },
  {
    icon: Users,
    stage: "Scaling",
    scale: "Many teams",
    headline: "Standardize adoption across products",
    description:
      "Roll guidance out across apps and audiences, run surveys, and launch features contextually — no new tool to buy.",
  },
  {
    icon: Building2,
    stage: "Enterprise",
    scale: "Org-wide",
    headline: "Govern it at scale, safely",
    description:
      "Fine-grained segmentation, encryption, headless mode, and live human handoff — the platform you started with, hardened.",
  },
];

const trust = [
  { icon: KeyRound, label: "SSO-ready access" },
  { icon: ShieldCheck, label: "NDPR / NDPA aligned" },
  { icon: Lock, label: "Payloads encrypted" },
  { icon: UsersRound, label: "Live human handoff" },
];

export function GrowthJourney() {
  return (
    <Section className="bg-canvas-deep">
      <Container>
        <SectionHeading
          eyebrow="From startup to enterprise"
          title="3Guide is with you the whole way"
          description="You don't graduate into features. The full platform is there from your very first snippet — what grows is your scale, your teams, and the way you govern it."
          align="center"
        />

        {/* The rail */}
        <div className="relative mt-16">
          {/* Connecting line — desktop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[8%] top-7 hidden h-0.5 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 lg:block"
          />

          <div
            data-stagger
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          >
            {stages.map((s, i) => (
              <div key={s.stage} className="relative flex flex-col">
                {/* Rail marker */}
                <div className="mb-6 flex justify-center">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-purple-200 bg-white text-purple-700 shadow-sm">
                    <s.icon className="h-6 w-6" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-900/10">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">
                      {String(i + 1).padStart(2, "0")} · {s.stage}
                    </p>
                  </div>
                  <p className="mt-1 text-xs font-medium text-slate-400">
                    {s.scale}
                  </p>
                  <h3 className="mt-4 text-lg font-medium leading-snug text-slate-900">
                    {s.headline}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The point, said plainly */}
        <p className="mx-auto mt-12 max-w-2xl text-center text-lg text-slate-600">
          Same product, day one to org-wide.{" "}
          <span className="font-semibold text-purple-700">
            You never migrate off 3Guide to grow.
          </span>
        </p>

        {/* Enterprise trust row */}
        {/* <div
          data-stagger
          className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {trust.map((t) => (
            <div
              key={t.label}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/60 px-5 py-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-700">
                <t.icon className="h-4.5 w-4.5" />
              </span>
              <span className="text-sm font-semibold text-slate-700">
                {t.label}
              </span>
            </div>
          ))}
        </div> */}

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={DASHBOARD_URL}
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-purple-600/25 transition hover:-translate-y-0.5 hover:bg-purple-500"
          >
            Get started
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3.5 text-base font-medium text-slate-800 transition hover:-translate-y-0.5 hover:border-purple-200 hover:bg-purple-50"
          >
            Talk to sales
          </Link>
        </div>
      </Container>
    </Section>
  );
}
