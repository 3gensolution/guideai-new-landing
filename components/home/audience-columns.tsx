import Link from "next/link";
import { ArrowRight, Compass, LifeBuoy, LineChart } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/marketing/primitives";

/**
 * Audience-segmented value props — Everstage's strongest structural move.
 * A buyer self-selects their column before they read a single feature,
 * so the platform stops reading as one undifferentiated pitch.
 */
const audiences = [
  {
    icon: Compass,
    role: "It shows people how",
    promise: "Interactive walkthroughs",
    body: "Not a video. Not a PDF. The actual product, with a spotlight on the actual button, saying “click here next.” People learn by doing, inside the real thing.",
    value: "Faster onboarding for new users and new staff",
    href: "/guides",
    linkLabel: "See in-app guides",
  },
  {
    icon: LifeBuoy,
    role: "It answers questions",
    promise: "A chat assistant",
    body: "A user types “how do I refund an order?” and gets an answer grounded in that specific product — not generic advice scraped off the open web.",
    value: "Fewer support tickets, answered in seconds",
    href: "/support-desk",
    linkLabel: "See the assistant",
  },
  {
    icon: LineChart,
    role: "It does the work",
    promise: "An assistant that acts",
    body: "Instead of explaining the seven clicks, it performs them. The user says “cancel my subscription” and it navigates and clicks through — with them watching every step.",
    value: "Less of the user's time spent at all",
    href: "/copilot",
    linkLabel: "See the copilot",
  },
];

export function AudienceColumns() {
  return (
    <Section className="bg-canvas-deep">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="A knowledgeable colleague sitting next to every user"
          description="One line of code puts an AI helper inside your product — one that never sleeps and never gets tired of the same question. It does three things."
          align="center"
          className="mx-auto text-center"
        />

        <div data-stagger className="mt-16 grid gap-6 lg:grid-cols-3">
          {audiences.map(({ icon: Icon, ...a }) => (
            <div
              key={a.role}
              className="group flex flex-col rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-900/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50 text-purple-700 ring-1 ring-purple-100">
                <Icon className="h-5 w-5" />
              </span>

              <p className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.22em] text-purple-600">
                {a.role}
              </p>
              <h3 className="font-display mt-3 text-balance text-2xl font-semibold text-slate-900">
                {a.promise}
              </h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-slate-600">
                {a.body}
              </p>

              <p className="mt-5 border-t border-slate-200/80 pt-4 text-sm font-medium text-purple-700">
                {a.value}
              </p>

              <Link
                href={a.href}
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-purple-700 transition"
              >
                {a.linkLabel}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
