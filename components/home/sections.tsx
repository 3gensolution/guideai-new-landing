import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Rocket, TicketX, X } from "lucide-react";
import {
  ArrowLink,
  CheckItem,
  Container,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/components/marketing/primitives";
import { FeatureRow } from "@/components/marketing/feature-row";

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
    <section className="border-y border-purple-100 bg-purple-50/60">
      <Container>
        <dl
          data-stagger
          className="grid grid-cols-2 divide-purple-100 py-14 max-lg:gap-y-10 lg:grid-cols-4 lg:divide-x"
        >
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="px-6 text-center first:pl-0 last:pr-0"
            >
              <dd className="text-4xl font-extrabold tracking-tight text-purple-600 sm:text-5xl">
                {stat.value}
              </dd>
              <dt className="mt-3 text-base font-medium text-slate-600">
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
  "Build guides visually with the Chrome extension — no code",
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
          description="Static tours, stale docs, and a swamped support inbox — every SaaS team knows the pattern. 3Guide replaces it with guidance that builds, maintains, and measures itself."
          align="center"
        />
        <div
          data-stagger
          className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-2"
        >
          <div className="rounded-2xl border-2 border-rose-100 bg-rose-50/50 p-8">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
              The old way
            </p>
            <ul className="mt-7 space-y-5">
              {oldWay.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                    <X className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-base leading-relaxed text-slate-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-purple-300 bg-white p-8 shadow-xl shadow-purple-900/10">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
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
      "Your recording becomes a polished walkthrough with tooltips, highlights, and step-by-step instructions — ready to edit.",
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
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="How it works"
              title="From workflow to walkthrough in four steps"
            />
            <ol data-stagger className="mt-12 space-y-9">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-600 font-mono text-base font-bold text-white shadow-md shadow-purple-600/25">
                    {i + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
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
          <div
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
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Copilot dark section                                                */
/* ------------------------------------------------------------------ */

const copilotPoints = [
  "Executes clicks, form fills, and navigation on the live page",
  "Grounded in your knowledge base — it knows your product, not just the web",
  "Falls back to a guided walkthrough when the user wants to learn instead",
  "Scoped permissions and confirmations keep every action safe",
];

export function CopilotSection() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <Eyebrow dark>Browser Copilot</Eyebrow>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Beyond guidance:{" "}
              <span className="text-purple-300">an AI that acts</span>
            </h2>
            <p className="mt-5 text-pretty text-xl leading-relaxed text-slate-300">
              Most platforms stop at showing users where to click. 3Guide ships
              an autonomous copilot that can complete the task for them —
              clicking buttons, filling forms, and navigating pages, with the
              user watching every step.
            </p>
            <ul className="mt-9 space-y-4">
              {copilotPoints.map((point) => (
                <CheckItem key={point} dark>
                  {point}
                </CheckItem>
              ))}
            </ul>
            <div className="mt-9">
              <ArrowLink href="/copilot" dark>
                Meet the Browser Copilot
              </ArrowLink>
            </div>
          </div>
          <div data-reveal data-reveal-delay="0.15">
            <div className="overflow-hidden rounded-2xl border-2 border-purple-500/30 shadow-2xl shadow-black/40">
              <Image
                src="/copilot.png"
                alt="3Guide Autonomous Copilot summarizing an inbox and executing browser tasks"
                width={1400}
                height={780}
                data-parallax-img
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Analytics + Support rows                                            */
/* ------------------------------------------------------------------ */

export function AnalyticsSection() {
  return (
    <Section>
      <Container className="space-y-28">
        <FeatureRow
          eyebrow="Friction Analytics"
          title="See every stuck user before they churn"
          description="3Guide tracks how real users move through your product — where they hesitate, drop off, or succeed — and turns it into funnels and dashboards your whole team can act on."
          bullets={[
            "Acquisition and activation funnels out of the box",
            "Drill into sessions by source, device, and location",
            "Measure guide completion and time-to-value, not just views",
          ]}
          image="/funnel.png"
          imageAlt="3Guide visitors explorer with device, source, and session breakdowns"
          link={{ href: "/analytics", label: "Explore analytics" }}
        />
        <FeatureRow
          eyebrow="Support Desk"
          title="AI handles the repetitive. Humans handle the rest."
          description="When a question needs a person, it lands in a real support inbox — with assignment, automation rules, and full conversation history. The AI assistant deflects the how-do-I questions so your team only sees the ones that matter."
          bullets={[
            "Shared inbox with assignment and internal notes",
            "Automation rules for routing, tagging, and SLAs",
            "AI-drafted replies grounded in your knowledge base",
          ]}
          image="/docs/copilot-chat-open.png"
          imageAlt="In-app assistant chat working alongside the support desk"
          link={{ href: "/support-desk", label: "Explore the support desk" }}
          reverse
        />
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Use-case cards                                                      */
/* ------------------------------------------------------------------ */

const useCases = [
  {
    icon: Rocket,
    title: "User Onboarding",
    description:
      "Turn signups into activated users with guided first-run experiences that adapt to each segment.",
    href: "/use-cases/user-onboarding",
  },
  {
    icon: TicketX,
    title: "Support Ticket Reduction",
    description:
      "Deflect repetitive how-do-I questions with AI answers and in-context guides — before they become tickets.",
    href: "/use-cases/support-ticket-reduction",
  },
];

export function UseCasesSection() {
  return (
    <Section className="bg-purple-50/60">
      <Container>
        <SectionHeading
          eyebrow="Solutions"
          title="Built for the moments that decide retention"
          align="center"
        />
        <div
          data-stagger
          className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2"
        >
          {useCases.map((useCase) => (
            <Link
              key={useCase.title}
              href={useCase.href}
              className="group rounded-2xl border-2 border-purple-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-900/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-700 transition group-hover:scale-110">
                <useCase.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {useCase.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {useCase.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-base font-bold text-purple-600">
                See the use case
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
