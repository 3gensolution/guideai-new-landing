import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  GraduationCap,
  Landmark,
  MousePointerClick,
  Rocket,
  RotateCcw,
  Sparkles,
  TicketX,
  Users,
  X,
} from "lucide-react";
import {
  ArrowLink,
  CheckItem,
  Container,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/components/marketing/primitives";
import { FeatureRow } from "@/components/marketing/feature-row";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Stat band                                                           */
/* ------------------------------------------------------------------ */

/* Competitors lead this band with hard ROI figures (WalkMe "30% fewer
   tickets", Whatfix "99.5% CSAT"). We don't have audited customer numbers
   yet, so these are verifiable product facts instead of invented metrics.
   Swap them for real outcome data the moment it exists. */
const stats = [
  { value: "1 line", label: "of code to install — no rebuild, no migration" },
  { value: "6 ways", label: "every element is identified, so guides survive redesigns" },
  { value: "Self-repairing", label: "AI fixes broken walkthroughs without a human" },
  { value: "3-in-1", label: "guidance, answers, and task completion in one layer" },
];

export function StatBand() {
  return (
    <section className="border-y border-slate-200/70 bg-canvas-deep">
      <Container>
        <dl
          data-stagger
          className="grid grid-cols-2 py-16 max-lg:gap-y-12 lg:grid-cols-4 lg:divide-x lg:divide-slate-200/70"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className="px-6 text-center first:pl-0 last:pr-0"
            >
              <dd
                className={cn(
                  "font-display text-sub font-semibold tracking-tight",
                  i === stats.length - 1 ? "text-clay-600" : "text-purple-600"
                )}
              >
                {stat.value}
              </dd>
              <dt className="mx-auto mt-3 max-w-[15rem] text-sm leading-relaxed text-slate-600">
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
  "New employees can't find the export button",
  "Customers sign up, poke around for two minutes, and never come back",
  "Your support inbox fills up with the same twenty questions",
  "You write help docs nobody reads and record videos that go stale",
];

const newWay = [
  "A spotlight on the actual button, in the actual product, saying “click here next”",
  "“How do I refund an order?” answered from your product, not generic advice",
  "“Cancel my subscription” — and it navigates and clicks through itself",
  "Hard data on exactly which steps confuse people, and where they give up",
];

export function ProblemSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Why 3Guide"
          title="You built the software. Now people have to actually use it."
          description="Help docs, training videos, and more support staff are the expensive, slow fixes. 3Guide is a layer on top of the software you already have — no rebuild — that teaches people how to use it, and increasingly, just does things for them."
          align="center"
        />
        <div
          data-stagger
          className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-2"
        >
          <div className="rounded-2xl border-2 border-rose-100 bg-rose-50/50 p-8">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
              Without 3Guide
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
/* Industries                                                          */
/* ------------------------------------------------------------------ */

const industries = [
  {
    icon: Rocket,
    name: "SaaS & Software",
    description:
      "Increase activation, adoption, and retention — without adding friction to the product you built.",
  },
  {
    icon: Landmark,
    name: "Fintech & Financial Services",
    description:
      "Help customers confidently navigate complex onboarding and transaction workflows, and deflect repetitive questions.",
  },
  {
    icon: Building2,
    name: "Enterprise Software",
    description:
      "Get employees productive faster, standardize critical workflows, and cut the training and IT overhead of every rollout.",
  },
  {
    icon: Users,
    name: "HR, ERP & Operations",
    description:
      "Onboard teams, standardize processes, and reduce operational errors inside the software that runs the business.",
  },
];

export function IndustriesSection() {
  return (
    <Section className="bg-canvas">
      <Container>
        <SectionHeading
          eyebrow="Who it's for"
          title="Built for software companies and the teams they serve"
          description="Wherever people have to learn and use software, 3Guide closes the gap between “I signed up” and “I got it done.”"
          align="center"
        />
        <div
          data-stagger
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-900/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-700 ring-1 ring-purple-100">
                <industry.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-medium text-slate-900">
                {industry.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {industry.description}
              </p>
            </div>
          ))}
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
                <li key={step.title} className="flex gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-600 font-mono text-base font-medium text-white shadow-md shadow-purple-600/25">
                    {i + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-medium text-slate-900">
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

/* ------------------------------------------------------------------ */
/* Copilot dark section                                                */
/* ------------------------------------------------------------------ */

const copilotPoints = [
  "Executes clicks, form fills, and navigation on the live page",
  "Grounded in your knowledge base, it knows your product, not just the web",
  "Falls back to a guided walkthrough when the user wants to learn instead",
  "Scoped permissions and confirmations keep every action safe",
];

export function CopilotSection() {
  return (
    <section className="bg-canvas py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <Eyebrow>Browser Copilot</Eyebrow>
            <h2 className="mt-4 text-balance font-display text-section font-semibold text-slate-900">
              Beyond guidance:{" "}
              <span className="text-purple-600">an AI that acts</span>
            </h2>
            <p className="mt-5 text-pretty text-lead text-slate-600">
              Most platforms stop at showing users where to click. 3Guide ships
              an autonomous copilot that can complete the task for them like
              clicking buttons, filling forms, and navigating pages, with the
              user watching every step.
            </p>
            <ul className="mt-9 space-y-4">
              {copilotPoints.map((point) => (
                <CheckItem key={point}>{point}</CheckItem>
              ))}
            </ul>
            <div className="mt-9">
              <ArrowLink href="/copilot">Meet the Browser Copilot</ArrowLink>
            </div>
          </div>
          <div data-reveal data-reveal-delay="0.15">
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 shadow-2xl shadow-slate-900/10">
              <Image
                src="/co-pilot.png"
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
          eyebrow="Understand"
          title="Find friction before it becomes churn"
          description="3Guide tracks how real users move through your product where they hesitate, drop off, or succeed and turns it into funnels and dashboards your whole team can act on."
          bullets={[
            "Acquisition and activation funnels out of the box",
            "Drill into sessions by source, device, and location",
            "Measure guide completion and time-to-value, not just views",
          ]}
          image="/friction-img.png"
          imageAlt="3Guide visitors explorer with device, source, and session breakdowns"
          link={{ href: "/analytics", label: "Explore analytics" }}
        />
        <FeatureRow
          eyebrow="Answer"
          title="Resolve “how do I…?” before it becomes a ticket"
          description="When a question needs a person, it lands in a real support inbox with assignment, automation rules, and full conversation history. The AI assistant deflects the how-do-I questions so your team only sees the ones that matter."
          bullets={[
            "Shared inbox with assignment and internal notes",
            "Automation rules for routing, tagging, and SLAs",
            "AI-drafted replies grounded in your knowledge base",
          ]}
          image="/assistant-img.png"
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
    icon: Sparkles,
    title: "Feature Adoption",
    description:
      "Introduce valuable features at the right moment — contextually, instead of relying on emails and webinars.",
    href: "/use-cases/user-onboarding",
  },
  {
    icon: TicketX,
    title: "Support Deflection",
    description:
      "Deflect repetitive how-do-I questions with AI answers and in-context guides before they become tickets.",
    href: "/use-cases/support-ticket-reduction",
  },
  {
    icon: GraduationCap,
    title: "Employee Training",
    description:
      "Replace static training with interactive, in-product guidance — teach people where the work actually happens.",
    href: "/use-cases/client-and-employee-training",
  },
  {
    icon: MousePointerClick,
    title: "Workflow Automation",
    description:
      "Don't just show users what to do — let the AI Copilot complete supported workflows alongside them.",
    href: "/copilot",
  },
  {
    icon: BarChart3,
    title: "Product-Led Growth",
    description:
      "Remove friction between signup and value, and use behavioral analytics to see where prospects get stuck.",
    href: "/analytics",
  },
];

export function UseCasesSection() {
  return (
    <Section className="bg-canvas-deep">
      <Container>
        <SectionHeading
          eyebrow="Solutions"
          title="Built for the moments that decide adoption"
          description="From a user's first login to a completed workflow — 3Guide meets them at every point where adoption is won or lost."
          align="center"
        />
        <div
          data-stagger
          className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
              <h3 className="mt-5 text-xl font-medium text-slate-900">
                {useCase.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {useCase.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-base font-medium text-purple-600">
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
