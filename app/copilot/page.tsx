import Image from "next/image";
import { Eye, Lock, ShieldCheck, UserCheck } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/marketing/page-hero";
import { FeatureRow } from "@/components/marketing/feature-row";
import { FaqSection } from "@/components/marketing/faq";
import { CtaBanner } from "@/components/marketing/cta-banner";
import {
  CheckItem,
  Container,
  Eyebrow,
  Section,
  SectionHeading,
  accentCycle,
  accents,
} from "@/components/marketing/primitives";
import { cn } from "@/lib/utils";

const safety = [
  {
    icon: ShieldCheck,
    title: "Allowlisted actions",
    description:
      "The copilot only performs supported, pre-approved action types — nothing improvised, nothing destructive.",
  },
  {
    icon: UserCheck,
    title: "User confirmation",
    description:
      "Sensitive steps pause for an explicit yes from the user before anything happens.",
  },
  {
    icon: Eye,
    title: "Fully visible",
    description:
      "Every click and keystroke happens on the live page, in front of the user, with a running execution log.",
  },
  {
    icon: Lock,
    title: "The user's own session",
    description:
      "Actions run with the user's existing permissions — the copilot can never do more than they can.",
  },
];

const faqItems = [
  {
    question: "How is this different from a normal chatbot?",
    answer:
      "A chatbot tells users what to do. The 3Guide copilot can also do it — clicking buttons, filling forms, and navigating pages on the live site while the user watches. When users prefer to learn, it generates a guided walkthrough instead.",
  },
  {
    question: "Where does it get its knowledge?",
    answer:
      "From a knowledge base 3Guide builds automatically by scanning your website and docs. Answers are grounded in your own content, and you can curate or extend the knowledge base at any time.",
  },
  {
    question: "What if the AI can't complete a task?",
    answer:
      "It falls back gracefully: offering a step-by-step walkthrough, linking relevant knowledge base articles, or handing off to your human support desk with full context.",
  },
  {
    question: "Do my users need to install anything?",
    answer:
      "The in-app assistant works with the same one-line snippet as the rest of 3Guide. The full browser-driving copilot is delivered through a lightweight Chrome extension.",
  },
];

export default function CopilotPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <PageHero
        badge="Browser Copilot"
        title={
          <>
            The AI assistant that{" "}
            <span className="text-purple-600">gets things done</span>
          </>
        }
        description="Answer questions with AI trained on your product — and when a user asks for help with a task, complete it for them: clicking, typing, and navigating right in their browser."
      >
        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-slate-200 shadow-2xl shadow-purple-950/10 ring-1 ring-slate-900/5">
          <Image
            src="/copilot.png"
            alt="3Guide Autonomous Copilot summarizing an inbox and executing tasks in the browser"
            width={1600}
            height={900}
            className="h-auto w-full"
            priority
          />
        </div>
      </PageHero>

      <Section>
        <Container className="space-y-24">
          <FeatureRow
            eyebrow="Answer"
            accent="violet"
            title="Instant answers from your own knowledge base"
            description="3Guide scans your website and docs to build a knowledge base automatically, then answers user questions in context — no tab-switching, no stale help center."
            bullets={[
              "Knowledge base builds and refreshes itself",
              "Answers cite your own content, not the open web",
              "Escalates to your support desk when a human is needed",
            ]}
            image="/docs/copilot-chat-open.png"
            imageAlt="The 3Guide assistant answering a product question in-app"
          />
          <FeatureRow
            eyebrow="Guide"
            accent="cyan"
            title="From answer to walkthrough in one click"
            description="When a user would rather learn the flow, the assistant turns its answer into a live guided walkthrough — highlighting each element in the real UI as they go."
            bullets={[
              "Generates walkthroughs from natural-language questions",
              "Runs on the live page with step-by-step highlights",
              "Users choose: read the answer, watch the guide, or delegate the task",
            ]}
            image="/docs/copilot-walkthrough-generation.png"
            imageAlt="The assistant generating a guided walkthrough from a question"
            reverse
          />
        </Container>
      </Section>

      {/* Dark: task execution */}
      <section className="bg-ink py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div data-reveal>
              <Eyebrow dark accent="violet">Act</Eyebrow>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                "Do it for me" —{" "}
                <span className="text-purple-300">and it does</span>
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-300">
                The autonomous copilot drives the browser on the user's behalf:
                completing forms, configuring settings, and finishing multi-step
                workflows while the user watches every action in a live
                execution log.
              </p>
              <ul className="mt-8 space-y-3">
                <CheckItem dark>
                  Executes clicks, form fills, and navigation on the live page
                </CheckItem>
                <CheckItem dark>
                  Plans multi-step tasks from a single natural-language request
                </CheckItem>
                <CheckItem dark>
                  Streams a step-by-step log of everything it does
                </CheckItem>
                <CheckItem dark>
                  Stops and asks whenever a decision belongs to the user
                </CheckItem>
              </ul>
            </div>
            <div data-reveal data-reveal-delay="0.15" className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
              <Image
                src="/copilot.png"
                alt="Live execution log of the copilot completing a browser task"
                width={1400}
                height={780}
                data-parallax-img
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Guardrails"
            title="Autonomy with a seatbelt"
            description="An AI that acts needs stricter rules than one that talks. The copilot is constrained by design."
            align="center"
          />
          <div data-stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {safety.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-950/10"
              >
                <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl", accents[accentCycle[i % accentCycle.length]].tile)}>
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FaqSection items={faqItems} title="Browser Copilot, answered" />
      <CtaBanner
        title="Give your users an AI that acts"
        description="Start with the in-app assistant, then turn on task completion when you're ready. Free up to 1,000 monthly active users."
      />
      <Footer />
    </main>
  );
}
