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
} from "@/components/marketing/primitives";

const painSections = [
  {
    quote:
      "“We redesign the product every quarter — our tours are always broken.”",
    accent: "cyan" as const,
    eyebrow: "Self-healing guides",
    title: "Ship UI changes without breaking onboarding",
    description:
      "Every guide step is anchored by an element fingerprint, not a brittle selector. Redesign freely, guides re-anchor themselves, and confidence scores flag the rare step that needs a human look.",
    bullets: [
      "Automatic re-anchoring after UI changes",
      "Confidence scores on every guide",
      "Zero-maintenance tours, verified continuously",
    ],
    image: "/knowledge.png",
    imageAlt: "Self-healing guides staying anchored after a redesign",
    link: { href: "/guides", label: "How self-healing works" },
  },
  {
    quote:
      "“We don't have engineering time to build onboarding flows.”",
    accent: "indigo" as const,
    eyebrow: "Visual builder",
    title: "Product and CS teams ship tours without engineers",
    description:
      "Record any workflow with the Chrome extension and AI turns it into a polished guide. Publish targeted onboarding for each segment in an afternoon, engineering only installs one snippet, once.",
    bullets: [
      "Chrome extension builder, zero code",
      "AI-generated steps, tooltips, and copy",
      "Target by segment, plan, or page",
    ],
    image: "/guides-img.png",
    imageAlt: "Building onboarding guides visually in the 3Guide dashboard",
    link: { href: "/guides", label: "Explore in-app guides" },
    reverse: true,
  },
  {
    quote:
      "“New users churn before they reach the aha moment and we don't know why.”",
    accent: "violet" as const,
    eyebrow: "Friction analytics",
    title: "See the exact step where activation dies",
    description:
      "Acquisition and activation funnels are tracked out of the box. Find the drop-off step, ship a guide against it, and measure the lift. The whole loop lives in one platform.",
    bullets: [
      "Signup → activation funnels by segment",
      "Session-level drill-down into stuck users",
      "Before/after lift measurement per guide",
    ],
    image: "/activation-img.png",
    imageAlt: "Activation funnel with drop-off analysis in 3Guide",
    link: { href: "/analytics", label: "Explore friction analytics" },
  },
];

const faqItems = [
  {
    question: "How fast can we launch our first onboarding flow?",
    answer:
      "Most teams publish their first guided tour the same day they install the snippet. Recording a workflow takes minutes, and AI drafts the guide content for you.",
  },
  {
    question: "Can different user segments get different onboarding?",
    answer:
      "Yes. Target guides by segment, plan, page, or workflow new admins, invited teammates, and trial users can each get their own first-run experience.",
  },
  {
    question: "What if users skip the tour?",
    answer:
      "Guides are only one layer. The in-app assistant answers questions on demand, can restart any walkthrough contextually, and the copilot can simply complete the task when a user prefers that.",
  },
  {
    question: "How do we know it's working?",
    answer:
      "Guide completion, drop-off steps, and activation funnels are measured automatically, so you can compare cohorts before and after every change.",
  },
];

export default function UserOnboardingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <PageHero
        badge="Use case · User Onboarding"
        title={
          <>
            Turn signups into{" "}
            <span className="text-purple-600">activated users</span>
          </>
        }
        description="The gap between 'created an account' and 'got value' is where SaaS growth dies. 3Guide closes it with guided first-run experiences, in-context answers, and analytics that show exactly where new users stall."
      />

      <Section className="pt-0">
        <Container className="space-y-24">
          {painSections.map((section) => (
            <div key={section.title}>
              <blockquote data-reveal className="mx-auto mb-10 max-w-2xl text-center text-xl font-medium italic leading-relaxed text-slate-500 sm:text-2xl">
                {section.quote}
              </blockquote>
              <FeatureRow
                eyebrow={section.eyebrow}
                accent={section.accent}
                title={section.title}
                description={section.description}
                bullets={section.bullets}
                image={section.image}
                imageAlt={section.imageAlt}
                link={section.link}
                reverse={section.reverse}
              />
            </div>
          ))}
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <SectionHeading
            eyebrow="The playbook"
            title="Onboarding that compounds"
            description="Identify friction with analytics, fix it with targeted guides, deflect the leftover questions with AI, then measure and repeat."
            align="center"
          />
          <div data-stagger className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Find the friction",
                text: "Funnels and session data show where new users stall.",
              },
              {
                step: "02",
                title: "Guide the moment",
                text: "Ship a targeted walkthrough at the exact drop-off point.",
              },
              {
                step: "03",
                title: "Measure the lift",
                text: "Completion and activation metrics prove what worked.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-950/10"
              >
                <p className="text-purple-600 font-mono text-sm font-bold">
                  {item.step}
                </p>
                <h3 className="mt-3 text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FaqSection items={faqItems} title="User onboarding, answered" />
      <CtaBanner
        title="Activate more of the users you already have"
        description="Ship your first onboarding flow today"
      />
      <Footer />
    </main>
  );
}
