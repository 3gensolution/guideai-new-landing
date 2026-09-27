import Image from "next/image";
import {
  CheckCircle2,
  Layers,
  Rocket,
  Search,
  TrendingUp,
  Wand2,
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
    icon: Search,
    title: "Problems found for you",
    description:
      "No digging through dashboards. 3Guide flags where people drop off, get confused or hit errors, starting with the most costly.",
  },
  {
    icon: Wand2,
    title: "A suggested fix for each one",
    description:
      "For every problem it drafts a fix, like a walkthrough or a tip. Your team reviews it before anything goes live.",
  },
  {
    icon: CheckCircle2,
    title: "Proof that it worked",
    description:
      "Each fix is tested with real users against a comparison group, so you see the true impact, not a guess.",
  },
];

const audience = [
  {
    icon: Rocket,
    title: "SaaS & subscription businesses",
    description:
      "Turn more trials into paying customers, and catch the moments that lead to churn.",
  },
  {
    icon: TrendingUp,
    title: "Services with complex sign-ups",
    description:
      "Fintech, insurance and online services: see where applicants give up, and win them back.",
  },
  {
    icon: Layers,
    title: "Teams tired of juggling tools",
    description:
      "Product analytics, session recordings and A/B testing in one place, instead of three subscriptions.",
  },
];

const faqItems = [
  {
    question: "Do we need a data team to use it?",
    answer:
      "No. 3Guide finds the problems and explains them in plain language. You don't need to build reports or write queries to get value.",
  },
  {
    question: "Can we use Analytics on its own?",
    answer:
      "Yes. It works as a complete analytics tool by itself. Add Guidance and the suggested fixes can go live in your product straight away.",
  },
  {
    question: "How do you know a fix really worked?",
    answer:
      "A small share of users don't see the fix, and 3Guide compares the two groups. If the fix helps, it rolls out to everyone. If it doesn't, it's removed.",
  },
];

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <Header />

      <PageHero
        badge="Analytics"
        title={
          <>
            See where customers give up.{" "}
            <span className="text-[#f0c9a0]">Fix it, and prove it worked.</span>
          </>
        }
        description="3Guide shows you the exact moments people get stuck in your product, suggests how to fix each one, and tells you whether the fix actually helped."
      >
        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
          <Image
            src="/friction-img.png"
            alt="3Guide Analytics showing where users drop off"
            width={1600}
            height={860}
            className="h-auto w-full"
            priority
          />
        </div>
      </PageHero>

      <Section className="bg-canvas-deep">
        <Container>
          <SectionHeading
            eyebrow="What it does for you"
            title="Stop guessing why customers leave"
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

      <ProductStrip active="analytics" />
      <FaqSection items={faqItems} title="Analytics, answered" />
      <CtaBanner
        title="Find out where customers get stuck"
        description="Analytics is on the Free plan, so you can start today."
      />
      <Footer />
    </main>
  );
}
