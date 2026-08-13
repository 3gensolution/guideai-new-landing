import { X } from "lucide-react";
import {
  CheckItem,
  Container,
  Section,
  SectionHeading,
} from "@/components/marketing/primitives";

/* ------------------------------------------------------------------ */
/* Stat band                                                           */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "Minutes", label: "to publish your first guide" },
  { value: "Auto", label: "guide maintenance with self-healing" },
  { value: "24/7", label: "AI answers from your knowledge base" },
  { value: "1 snippet", label: "to install the entire platform" },
];

export function StatBand() {
  return (
    <section className="border-y border-slate-200 bg-paper-tint">
      <Container>
        <dl
          data-stagger
          className="grid grid-cols-2 divide-slate-200 py-16 max-lg:gap-y-10 lg:grid-cols-4 lg:divide-x"
        >
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="px-8 first:pl-0 last:pr-0"
            >
              <dd className="font-display text-gradient text-4xl tracking-tight sm:text-5xl">
                {stat.value}
              </dd>
              <dt className="mt-3 text-sm leading-relaxed text-slate-500">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Problem: old way vs 3Guide                                          */
/* ------------------------------------------------------------------ */

const oldWay = [
  "Weeks of engineering to ship a single product tour",
  "Guides silently break every time the UI changes",
  "Docs nobody reads, and the same tickets answered twice a day",
  "No visibility into where users actually get stuck",
];

const newWay = [
  "Build guides visually with the Chrome extension",
  "Self-healing re-anchors every step when your UI moves",
  "An AI assistant answers instantly from your own knowledge base",
  "Friction analytics show every drop-off, rage click, and dead end",
];

export function ProblemSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Why 3Guide"
          title="The old onboarding playbook doesn't scale"
          description="Static tours, stale docs, and a swamped support inbox every SaaS team knows the pattern. 3Guide replaces it with guidance that builds, maintains, and measures itself."
          align="center"
        />
        <div
          data-stagger
          className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-2"
        >
          <div className="rounded-2xl border border-slate-200 bg-paper-tint p-8">
            <p className="kicker text-rose-500">
              The old way
            </p>
            <ul className="mt-7 space-y-5">
              {oldWay.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                    <X className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-base leading-relaxed text-slate-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-8 ring-1 ring-purple-200">
            <p className="kicker text-purple-600">
              With 3Guide
            </p>
            <ul className="mt-7 space-y-5">
              {newWay.map((item) => (
                <CheckItem key={item} accent="emerald">
                  {item}
                </CheckItem>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* How it works                                                        */
/* ------------------------------------------------------------------ */

const steps = [
  {
    title: "Record with the Chrome extension",
    description:
      "Click through any workflow in your own product. 3Guide captures the steps, elements, and decision points automatically.",
    badge: "No code required",
  },
  {
    title: "AI generates the guide",
    description:
      "Your recording becomes a polished walkthrough with tooltips, highlights, and step-by-step instructions ready to edit.",
    badge: "Minutes, not weeks",
  },
  {
    title: "Publish and target",
    description:
      "Ship to production in one click. Target by user segment, page, or workflow to reach the right users at the right moment.",
    badge: "One-click deploy",
  },
  {
    title: "It heals itself",
    description:
      "When your UI changes, element fingerprints re-anchor every step automatically. Zero maintenance, zero broken tours.",
    badge: "Self-healing",
  },
];

export function HowItWorks() {
  return (
    <Section>
      <Container>
        <div className="grid items-start gap-12">
          <div>
            <SectionHeading
              eyebrow="How it works"
              title="From workflow to walkthrough in four steps"
            />
            <ol data-stagger className="mt-12 space-y-9">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-6">
                  <span className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-600 text-lg text-white">
                    {i + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-bold tracking-tight text-slate-900">
                        {step.title}
                      </h3>
                      <span className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700">
                        {step.badge}
                      </span>
                    </div>
                    <p className="mt-2 text-base leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          {/* <div
            data-reveal
            data-reveal-delay="0.15"
            className="lg:sticky lg:top-28"
          >
            <div className="overflow-hidden rounded-2xl border-2 border-purple-100 shadow-2xl shadow-purple-900/10">
              <Image
                src="/docs/guide-running-live.png"
                alt="A 3Guide walkthrough running live inside a product"
                width={1200}
                height={675}
                data-parallax-img
                className="h-auto w-full"
              />
            </div>
            <p className="mt-5 text-center text-base text-slate-500">
              A generated guide running live — built from a 2-minute recording.
            </p>
          </div> */}
        </div>
      </Container>
    </Section>
  );
}
