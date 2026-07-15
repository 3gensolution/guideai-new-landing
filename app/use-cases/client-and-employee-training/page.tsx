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
      "“New hires spend their first weeks watching someone else click through the tools.”",
    accent: "violet" as const,
    eyebrow: "Employee enablement",
    title: "Train your team inside the tools they actually use",
    description:
      "Build click-by-click walkthroughs that run right on top of your internal apps. New employees learn by doing guided step by step through real workflows, instead of sitting through a recording or reading a wiki that's already out of date.",
    bullets: [
      "In-app guides that walk staff through real tasks",
      "Self-updating steps that heal when the UI changes",
      "Role-based tours so each team sees only what they need",
    ],
    image: "/guidance.png",
    imageAlt: "An in-app training walkthrough running on an internal tool",
    link: { href: "/guides", label: "Explore In-App Guides" },
  },
  {
    quote:
      "“Clients keep asking us the same how-do-I questions after every rollout.”",
    accent: "cyan" as const,
    eyebrow: "Client onboarding",
    title: "Get clients productive without a training call",
    description:
      "Hand clients an interactive Guide Pro demo they can click through at their own pace, a self-contained copy of your product, no logins or live access required. They learn the workflow before they ever open a ticket.",
    bullets: [
      "Self-serve interactive demos, no live product needed",
      "AI-written tooltips and narration for every step",
      "Share as a link, or embed in your help center",
    ],
    image: "/guide-pro-img.png",
    imageAlt: "A client working through an interactive training demo",
    link: { href: "/guide-pro", label: "See how Guide Pro works" },
    reverse: true,
  },
  {
    quote:
      "“We need a training library, but no one has time to produce polished videos.”",
    accent: "indigo" as const,
    eyebrow: "Training library",
    title: "Turn a screen recording into a training video in minutes",
    description:
      "Guide Studio turns a raw screen recording into a finished training video automatic zoom, smooth cursor, clean backgrounds, captions, and AI voiceover then exports an MP4 or GIF ready for your LMS, help center, or onboarding library.",
    bullets: [
      "Automatic zoom and cursor polish, no editing skills",
      "AI voiceover and on-device captions for accessibility",
      "Export MP4 or GIF for your LMS, docs, or help center",
    ],
    image: "/guide-studio-img.png",
    imageAlt: "A polished training video made in Guide Studio",
    link: { href: "/studio", label: "Explore Guide Studio" },
  },
];

const faqItems = [
  {
    question: "Do clients need access to our real product to train?",
    answer:
      "No. Guide Pro demos are self-contained copies built from screenshots and page snapshots, so clients can click through a realistic replica of the workflow without a login or live access to your app.",
  },
  {
    question: "Can training stay current when our app changes?",
    answer:
      "Yes. In-app guides are tied to the elements they point at and heal automatically when the UI shifts, so your walkthroughs don't break every time you ship an update.",
  },
  {
    question: "Can we tailor training to different teams or roles?",
    answer:
      "Yes. Target guides and tours by segment so each team or each client account sees only the workflows relevant to them, instead of one generic tour for everyone.",
  },
  {
    question: "What's the difference between an interactive guide and a video?",
    answer:
      "An in-app guide or Guide Pro demo lets people learn by doing clicking through the real steps. A Guide Studio video is a finished MP4 or GIF for your LMS or help center. Most training programs use both: guides for hands-on practice, videos for reference.",
  },
];

export default function ClientEmployeeTrainingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <PageHero
        badge="Use case · Client & Employee Training"
        title={
          <>
            Train your clients and team{" "}
            <span className="text-purple-600">by letting them do it</span>
          </>
        }
        description="People learn software by using it, not by watching. 3Guide turns your product into in-app walkthroughs, interactive demos, and polished training videos that get clients and employees productive faster with fewer questions and less hand-holding."
      />

      <Section className="pt-0">
        <Container className="space-y-24">
          {painSections.map((section) => (
            <div key={section.title}>
              <blockquote
                data-reveal
                className="mx-auto mb-10 max-w-2xl text-center text-xl font-medium italic leading-relaxed text-slate-500 sm:text-2xl"
              >
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
            eyebrow="The value"
            title="Training that pays off from day one"
            description="Guided, hands-on training moves the numbers that matter to enablement and customer success teams."
            align="center"
          />
          <div
            data-stagger
            className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3"
          >
            {[
              {
                step: "01",
                title: "Ramp people faster",
                text: "New hires and clients reach competence in days, not weeks of shadowing.",
              },
              {
                step: "02",
                title: "Cut repeat questions",
                text: "Self-serve guides answer the how-do-I questions before they become tickets.",
              },
              {
                step: "03",
                title: "Keep training current",
                text: "Self-healing steps mean your walkthroughs stay accurate as the product evolves.",
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

      <FaqSection items={faqItems} title="Client & employee training, answered" />
      <CtaBanner
        title="Turn your product into its own training program"
        description="Build an in-app walkthrough, an interactive demo, or a polished training video today."
      />
      <Footer />
    </main>
  );
}
