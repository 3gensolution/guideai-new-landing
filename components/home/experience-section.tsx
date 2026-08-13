import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Compass,
  Gauge,
  MousePointerClick,
  Rocket,
  ShieldCheck,
  Signal,
  TicketX,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/marketing/primitives";
import { CardCarousel } from "@/components/marketing/card-carousel";

type Item = { title: string; body: string; icon: LucideIcon };

type Section = {
  key: string;
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  href: string;
  linkLabel: string;
  items: Item[];
};

const sections: Section[] = [
  {
    key: "copilot",
    eyebrow: "Browser Copilot",
    title: "Beyond guidance —",
    highlight: "an AI that acts",
    intro:
      "Most platforms stop at showing users where to click. 3Guide ships an autonomous copilot that completes the task for them, with the user watching every step.",
    href: "/copilot",
    linkLabel: "Meet the Browser Copilot",
    items: [
      {
        title: "It completes the task",
        body: "The copilot executes real clicks, form fills, and navigation on the live page while the user watches every step happen.",
        icon: MousePointerClick,
      },
      {
        title: "Trained on your product",
        body: "Every action is grounded in your own knowledge base, so it understands your workflows and terminology — not just the open web.",
        icon: BookOpen,
      },
      {
        title: "Falls back to guidance",
        body: "When a user would rather learn than have it done, the copilot switches to a step-by-step guided walkthrough.",
        icon: Compass,
      },
      {
        title: "Safe by design",
        body: "Allowlisted actions and confirmations on sensitive steps keep the copilot safe inside your production product.",
        icon: ShieldCheck,
      },
    ],
  },
  {
    key: "analytics",
    eyebrow: "Friction Analytics",
    title: "See every stuck user",
    highlight: "before they churn",
    intro:
      "3Guide tracks how real users move through your product — where they hesitate, drop off, or succeed — and turns it into funnels and dashboards your team can act on.",
    href: "/analytics",
    linkLabel: "Explore analytics",
    items: [
      {
        title: "Funnels out of the box",
        body: "Acquisition and activation funnels without building a single event by hand — see exactly where users fall out.",
        icon: BarChart3,
      },
      {
        title: "Session drill-down",
        body: "Follow individual journeys by source, device, and location so 'users are confused' becomes 'users can't find the export button.'",
        icon: Signal,
      },
      {
        title: "Time-to-value",
        body: "Track guide completion and time-to-value so you know which flows actually move activation, not vanity metrics.",
        icon: Gauge,
      },
    ],
  },
  {
    key: "usecases",
    eyebrow: "Solutions",
    title: "Built for the moments",
    highlight: "that decide retention",
    intro:
      "From first-run onboarding to deflecting repetitive support questions, 3Guide meets users at the exact moment that decides whether they stick.",
    href: "/use-cases/user-onboarding",
    linkLabel: "See the use cases",
    items: [
      {
        title: "User onboarding",
        body: "Guided first-run experiences that adapt to each segment so new users reach value fast, without hand-holding from your team.",
        icon: Rocket,
      },
      {
        title: "Support deflection",
        body: "AI answers and in-context guides resolve common questions before they ever become a support ticket.",
        icon: TicketX,
      },
      {
        title: "Client & staff training",
        body: "Interactive walkthroughs, demos, and polished videos train clients and staff right where the work happens.",
        icon: Users,
      },
    ],
  },
];

function ItemCard({ item }: { item: Item }) {
  const Icon = item.icon;
  return (
    <article className="wave-card h-full border border-white/15 bg-white/10 p-8 backdrop-blur-md sm:p-10">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-purple-700">
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="mt-7 text-2xl font-bold tracking-tight text-white">
        {item.title}
      </h3>
      <p className="mt-4 text-lg leading-relaxed text-purple-100/90">
        {item.body}
      </p>
    </article>
  );
}

export function ExperienceSection() {
  return (
    <div className="bg-plum">
      {sections.map((section, i) => (
        <section
          key={section.key}
          aria-labelledby={`exp-${section.key}`}
          className="relative overflow-hidden border-t border-white/10 py-20 first:border-t-0 sm:py-28"
        >
          {/* Depth blob — alternates side per section for rhythm (rule 42) */}
          <div
            aria-hidden
            className={`pointer-events-none absolute top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full blur-3xl ${
              i % 2 === 0
                ? "-left-32 bg-purple-500/25"
                : "-right-32 bg-fuchsia-700/30"
            }`}
          />

          <Container className="relative">
            {/* Intro — alignment alternates per section */}
            <div
              data-reveal
              className={i % 2 === 0 ? "max-w-2xl" : "ml-auto max-w-2xl text-right"}
            >
              <p
                className={`kicker inline-flex items-center gap-2.5 text-purple-200 ${
                  i % 2 === 0 ? "" : "flex-row-reverse"
                }`}
              >
                <span aria-hidden className="h-px w-6 bg-white/30" />
                {section.eyebrow}
              </p>
              <h2
                id={`exp-${section.key}`}
                className="font-display display-tight text-gradient-light mt-5 text-balance text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-[3.25rem]"
              >
                {section.title}{" "}
                <span className="text-purple-300">{section.highlight}</span>
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-purple-100/85">
                {section.intro}
              </p>
              <div className="mt-8">
                <Link
                  href={section.href}
                  className={`group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold tracking-tight text-plum transition-colors duration-300 hover:bg-purple-50 ${
                    i % 2 === 0 ? "" : "flex-row-reverse"
                  }`}
                >
                  {section.linkLabel}
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Item carousel */}
            <div data-reveal data-reveal-delay="0.1" className="mt-14">
              <CardCarousel ariaLabel={`${section.eyebrow} capabilities`}>
                {section.items.map((item) => (
                  <ItemCard key={item.title} item={item} />
                ))}
              </CardCarousel>
            </div>
          </Container>
        </section>
      ))}
    </div>
  );
}
