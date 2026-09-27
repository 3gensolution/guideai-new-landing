import Image from "next/image";
import {
  Headphones,
  Lightbulb,
  Rocket,
  TicketX,
  Workflow,
  Zap,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/marketing/page-hero";
import { FaqSection } from "@/components/marketing/faq";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { ProductStrip } from "@/components/marketing/product-strip";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/marketing/primitives";

const value = [
  {
    icon: TicketX,
    title: "Fewer support tickets",
    description:
      "Routine requests get done on the spot instead of landing in your support queue.",
  },
  {
    icon: Zap,
    title: "Results in seconds",
    description:
      "Experienced users get what they need without clicking through menus.",
  },
  {
    icon: Lightbulb,
    title: "Know what customers want",
    description:
      "Every request shows what people are trying to do, so you know what to build and fix next.",
  },
];

const audience = [
  {
    icon: Rocket,
    title: "Feature-rich SaaS products",
    description:
      "Reports, settings and admin tasks your users repeat every week.",
  },
  {
    icon: Headphones,
    title: "Support-heavy businesses",
    description:
      "Where the same requests fill the queue day after day.",
  },
  {
    icon: Workflow,
    title: "Operations & finance tools",
    description:
      "Busy users who want the answer or the task done, not a lesson.",
  },
];

const faqItems = [
  {
    question: "Is it safe to let AI make changes?",
    answer:
      "It can only do what you allow, and it asks the user to confirm before it changes anything.",
  },
  {
    question: "How is it different from a chatbot?",
    answer:
      "A chatbot tells users what to do. The AI Assistant does it for them, using your product, and answers from your own information rather than the open web.",
  },
  {
    question: "What does it take to set up?",
    answer:
      "Your developers connect the actions you want the Assistant to handle, once. From then on it works for every user.",
  },
];

export default function AssistantPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <Header />

      <PageHero
        badge="AI Assistant"
        title={
          <>
            Users ask.{" "}
            <span className="text-[#f0c9a0]">It gets done.</span>
          </>
        }
        description="Some customers want to learn your product. Most just want the result. The AI Assistant does the task for them, from pulling up a report to updating a setting, right inside your product."
      >
        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
          <Image
            src="/assistant-mode.gif"
            alt="The 3Guide AI Assistant completing a user's request"
            width={1600}
            height={900}
            className="h-auto w-full"
            priority
          />
        </div>
      </PageHero>

      <Section className="bg-canvas-deep">
        <Container>
          <SectionHeading
            eyebrow="What it does for you"
            title="Less waiting for your customers, less work for your team"
            align="center"
          />
          <CapabilityGrid items={value} className="mx-auto mt-14 max-w-5xl" />
        </Container>
      </Section>

      <Section className="bg-canvas">
        <Container>
          <SectionHeading eyebrow="Who it's for" title="Who gets the most from it" align="center" />
          <CapabilityGrid items={audience} className="mx-auto mt-12 max-w-5xl" />
        </Container>
      </Section>

      <ProductStrip active="assistant" />
      <FaqSection items={faqItems} title="AI Assistant, answered" />
      <CtaBanner
        title="Turn requests into results"
        description="The AI Assistant is on the Free plan, so you can start today."
      />
      <Footer />
    </main>
  );
}
