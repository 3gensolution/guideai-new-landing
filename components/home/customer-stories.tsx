import { Quote } from "lucide-react";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/marketing/primitives";

/* ------------------------------------------------------------------ */
/* Customer stories.                                                    */
/*                                                                     */
/* PLACEHOLDER CONTENT — this is a real, reusable component wired to    */
/* the `Story` shape below. The three entries are illustrative stubs so */
/* the section reads correctly; replace them with genuine, approved     */
/* customer quotes + metrics before publishing. Do not invent numbers. */
/* The `metric` line is intentionally an outcome you must verify.       */
/* ------------------------------------------------------------------ */

interface Story {
  metric: string;
  metricLabel: string;
  quote: string;
  name: string;
  role: string;
  company: string;
}

const stories: Story[] = [
  {
    metric: "—",
    metricLabel: "faster onboarding",
    quote:
      "Placeholder: a customer explains how in-app guides got new users to their first win without a support call.",
    name: "First Last",
    role: "Head of Product",
    company: "Customer name",
  },
  {
    metric: "—",
    metricLabel: "fewer how-do-I tickets",
    quote:
      "Placeholder: a customer describes support volume dropping once the AI assistant started answering in context.",
    name: "First Last",
    role: "Customer Success Lead",
    company: "Customer name",
  },
  {
    metric: "—",
    metricLabel: "higher feature adoption",
    quote:
      "Placeholder: a customer shares how contextual launches drove adoption of a feature nobody was finding.",
    name: "First Last",
    role: "VP of Growth",
    company: "Customer name",
  },
];

export function CustomerStories() {
  return (
    <Section id="customers" className="bg-canvas-deep">
      <Container>
        <SectionHeading
          eyebrow="Customer stories"
          title="Real teams, real adoption"
          description="From first login to org-wide rollout — here's what changes when guidance, answers, and analytics live inside the product."
          align="center"
        />

        <div
          data-stagger
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {stories.map((story, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl border-2 border-purple-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-900/10"
            >
              <Quote className="h-8 w-8 text-purple-200" />
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight text-purple-600">
                  {story.metric}
                </span>
                <span className="text-sm font-semibold text-slate-500">
                  {story.metricLabel}
                </span>
              </div>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-slate-700">
                “{story.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-100 pt-5">
                <p className="text-sm font-medium text-slate-900">{story.name}</p>
                <p className="text-sm text-slate-500">
                  {story.role}, {story.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-400">
          Placeholder stories — swap for approved customer quotes and verified
          metrics before publishing.
        </p>
      </Container>
    </Section>
  );
}
