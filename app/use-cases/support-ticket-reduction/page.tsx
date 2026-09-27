import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/marketing/page-hero";
import { FeatureRow } from "@/components/marketing/feature-row";
import { FaqSection } from "@/components/marketing/faq";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { ProductStrip } from "@/components/marketing/product-strip";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/marketing/primitives";

const painSections = [
  {
    quote:
      "“We want real answers from an AI that knows our product, not another canned-response chatbot.”",
    accent: "violet" as const,
    eyebrow: "Grounded answers",
    title: "Answers grounded in your product, not the open web",
    description:
      "3Guide scans your app to build a knowledge base of its pages and controls, and you add the documents that matter. The chat answers from your features and your terminology, and asks which one you meant when a question is ambiguous.",
    bullets: [
      "Knowledge base built from a scan of your app",
      "Upload your own documents on top",
      "Asks for clarification instead of guessing",
    ],
    image: "/assistant-img.png",
    imageAlt: "The 3Guide assistant answering from the product knowledge base",
    link: { href: "/assistant", label: "Meet the AI Assistant" },
  },
  {
    quote:
      "“Half our tickets are the same five how-do-I questions, every single week.”",
    accent: "cyan" as const,
    eyebrow: "Guided deflection",
    title: "Don't describe the fix, walk them through it",
    description:
      "For how-do-I questions, the chat doesn't paste a doc link. It builds a live walkthrough that highlights each step in the real UI. And when the user just wants it done, the AI Assistant calls your API and does it.",
    bullets: [
      "Walkthroughs generated from the user's own question",
      "The AI Assistant completes routine tasks through your APIs",
      "Repetitive tickets stop reaching the queue at all",
    ],
    image: "/guidance.png",
    imageAlt: "The assistant generating a live walkthrough as an answer",
    link: { href: "/guides", label: "See guided walkthroughs" },
    reverse: true,
  },
  // {
  //   quote:
  //     "“When something does need a human, my team starts from zero context.”",
  //   accent: "emerald" as const,
  //   eyebrow: "Support desk",
  //   title: "Escalations arrive with the whole story attached",
  //   description:
  //     "Conversations that need a person land in 3Guide's support desk with the AI transcript, the user's plan, recent sessions, and guide history already attached. Agents answer once, correctly.",
  //   bullets: [
  //     "Full AI conversation history on every escalation",
  //     "User context: plan, sessions, and guide activity",
  //     "Automation rules for routing, tags, and SLAs",
  //   ],
  //   image: "/docs/bubble-on-live-site.png",
  //   imageAlt: "The support widget escalating to a human with full context",
  //   link: { href: "/support-desk", label: "Explore the support desk" },
  // },
];

const faqItems = [
  {
    question: "How is this different from adding a chatbot to our site?",
    answer:
      "Generic chatbots answer from generic knowledge. 3Guide answers from a knowledge base built from your own product, shows users the steps live in your UI, and can complete the task outright through your APIs. Then Analytics tells you which questions nobody managed to resolve, so you can fix the cause.",
  },
  {
    question: "What keeps the knowledge base accurate?",
    answer:
      "It comes from a scan of your app plus the documents you upload. Re-scan after a release and the changes flow into answers, and guides whose steps broke are repaired by auto-heal.",
  },
  {
    question: "Will users get stuck talking to a bot when they need a human?",
    answer:
      "No. Escalation to the human support desk is always available, and the handoff carries the entire conversation and user context so nobody repeats themselves.",
  },
  {
    question: "How do we measure the deflection?",
    answer:
      "With 3Guide Analytics on, you can see which guides and answers users completed, and requests nobody could resolve are grouped as intent gaps, so you know exactly what to fix next.",
  },
];

export default function SupportTicketReductionPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <Header />

      <PageHero
        badge="Use case · Support Ticket Reduction"
        title={
          <>
            Answer it once.{" "}
            <span className="text-[#f0c9a0]">Deflect it forever.</span>
          </>
        }
        description="Your support queue is full of questions your product should answer itself. 3Guide deflects them in-app with grounded answers, live walkthroughs, and an AI Assistant that simply does the task, so your team only sees what truly needs a human."
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
            eyebrow="The ladder"
            title="Four levels of deflection before a ticket exists"
            align="center"
          />
          <div data-stagger className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Answer",
                text: "The chat answers from your app's knowledge base and your documents.",
              },
              {
                step: "02",
                title: "Show",
                text: "Guidance builds a live walkthrough that highlights each step in your real UI.",
              },
              {
                step: "03",
                title: "Do",
                text: "The AI Assistant completes the task through your API, with the user's confirmation.",
              },
              {
                step: "04",
                title: "Fix",
                text: "Analytics surfaces what users still can't do, so you remove the cause.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-950/10"
              >
                <p className="text-purple-600 font-mono text-sm font-medium">
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

      <ProductStrip />
      <FaqSection items={faqItems} title="Ticket reduction, answered" />
      <CtaBanner
        title="Shrink the queue without shrinking the team"
        description="Turn repetitive tickets into instant answers."
      />
      <Footer />
    </main>
  );
}
