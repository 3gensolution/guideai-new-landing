import Image from "next/image";
import {
  Activity,
  Filter,
  Gauge,
  LineChart,
  MousePointerClick,
  Users,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/marketing/page-hero";
import { FeatureRow } from "@/components/marketing/feature-row";
import { FaqSection } from "@/components/marketing/faq";
import { CtaBanner } from "@/components/marketing/cta-banner";
import {
  Container,
  Section,
  SectionHeading,
  accentCycle,
  accents,
} from "@/components/marketing/primitives";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    icon: LineChart,
    title: "Acquisition funnels",
    description:
      "Visitors → signups → trials → conversions, tracked out of the box with period-over-period trends.",
  },
  {
    icon: MousePointerClick,
    title: "Friction signals",
    description:
      "Rage clicks, dead ends, and hesitation points surfaced automatically — before users write in about them.",
  },
  {
    icon: Users,
    title: "Visitor explorer",
    description:
      "Drill into sessions by source, device, and location to see what real users actually do.",
  },
  {
    icon: Gauge,
    title: "Guide performance",
    description:
      "Completion rates, drop-off steps, and time-to-value for every guide you publish.",
  },
  {
    icon: Activity,
    title: "Feature adoption",
    description:
      "Know which features get used, which get ignored, and which segments never find them.",
  },
  {
    icon: Filter,
    title: "Segmentation",
    description:
      "Slice every metric by plan, segment, or behavior to target guidance where it moves the needle.",
  },
];

const faqItems = [
  {
    question: "Do I need to instrument events myself?",
    answer:
      "Core funnels — sessions, signups, trials, guide interactions — work automatically from the same snippet that powers guides. You can add custom events when you want more granularity.",
  },
  {
    question: "How is this different from a general analytics tool?",
    answer:
      "3Guide analytics are built around adoption: friction points, guide completion, and time-to-value. And because guides live in the same platform, you can go from spotting a drop-off to shipping a fix in minutes — without switching tools.",
  },
  {
    question: "Can I export the data?",
    answer:
      "Yes — dashboards support one-click export, and paid plans include configurable data retention.",
  },
  {
    question: "Is user data handled safely?",
    answer:
      "3Guide collects product interaction data, not page content. Data is scoped to your workspace and covered by plan-level retention controls.",
  },
];

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <PageHero
        badge="Friction Analytics"
        title={
          <>
            See where users <span className="text-purple-600">get stuck</span>{" "}
            — then fix it in-product
          </>
        }
        description="3Guide tracks how real users move through your product — where they hesitate, drop off, or succeed — and pairs every insight with the tool to act on it: a guide, an answer, or a copilot task."
      >
        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-slate-200 shadow-2xl shadow-purple-950/10 ring-1 ring-slate-900/5">
          <Image
            src="/friction-img.png"
            alt="3Guide executive overview with visitor, signup, and conversion metrics"
            width={1600}
            height={860}
            className="h-auto w-full"
            priority
          />
        </div>
      </PageHero>

      <Section>
        <Container className="space-y-24">
          <FeatureRow
            eyebrow="Understand"
            accent="cyan"
            title="Every visitor, every session, every stumble"
            description="The visitor explorer breaks traffic down by source, device, location, and behavior — and lets you replay how sessions unfolded, so 'users are confused' becomes 'users can't find the export button.'"
            bullets={[
              "Session timelines with landing pages and feature usage",
              "Top sources, devices, and peak hours at a glance",
              "Filter everything down to a single confused user",
            ]}
            image="/session-img.png"
            imageAlt="3Guide visitors explorer with sessions, sources, and device breakdowns"
          />
          <FeatureRow
            eyebrow="Act"
            accent="violet"
            title="Close the loop: insight → guide → lift"
            description="Analytics that live next to your guides change what you do with them. Spot the drop-off, ship a targeted guide to that exact step, and watch the funnel move — all in one place."
            bullets={[
              "Deploy guides directly against friction points",
              "Measure completion and conversion lift per guide",
              "Prove ROI with before/after funnel comparisons",
            ]}
            image="/session-id.png"
            imageAlt="Funnel analysis showing where guides lift conversion"
            reverse
          />
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Adoption analytics, not vanity metrics"
            align="center"
          />
          <div data-stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-950/10"
              >
                <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl", accents[accentCycle[i % accentCycle.length]].tile)}>
                  <cap.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FaqSection items={faqItems} title="Friction analytics, answered" />
      <CtaBanner title="Find your funnel's leaks this week" />
      <Footer />
    </main>
  );
}
