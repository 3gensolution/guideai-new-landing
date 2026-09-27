import Image from "next/image";
import {
  Building2,
  Landmark,
  Megaphone,
  MessageCircleQuestion,
  Rocket,
  Timer,
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
    icon: Timer,
    title: "Faster onboarding",
    description:
      "New users are guided through setup on the screen, step by step, and reach value sooner.",
  },
  {
    icon: Megaphone,
    title: "Features that get used",
    description:
      "Announce new features where people will use them, not in an email they'll skip.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Fewer “how do I” tickets",
    description:
      "Users can ask how to do something and get shown, right there, instead of contacting support.",
  },
];

const audience = [
  {
    icon: Rocket,
    title: "SaaS companies",
    description:
      "Onboard every new customer the same way your best account manager would.",
  },
  {
    icon: Building2,
    title: "Businesses training staff",
    description:
      "Guide employees through Salesforce, HR or finance tools, even ones you didn't build.",
  },
  {
    icon: Landmark,
    title: "Complex products",
    description:
      "Fintech, ERP and admin-heavy software where one wrong step means a support call.",
  },
];

const faqItems = [
  {
    question: "Do we need developers to build walkthroughs?",
    answer:
      "No. Your team creates them by clicking through the product or simply describing what users should do. A developer only adds one line to your website, once.",
  },
  {
    question: "What happens when our product changes?",
    answer:
      "Walkthroughs adjust themselves. When a button moves or a page is redesigned, 3Guide finds the new location and repairs the step for you.",
  },
  {
    question: "Can we use it on software we didn't build?",
    answer:
      "Yes. The browser extension adds walkthroughs to tools like Salesforce or your internal systems, with no changes to those tools.",
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <Header />

      <PageHero
        badge="Guidance"
        title={
          <>
            Show users how,{" "}
            <span className="text-[#f0c9a0]">right inside your product</span>
          </>
        }
        description="Step-by-step walkthroughs, tips and announcements that appear on the real screen, so new users reach their first win without reading a manual or calling support."
      >
        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
          <Image
            src="/guidance-mode.gif"
            alt="A 3Guide walkthrough highlighting each step on screen"
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
            title="More customers who know how to use your product"
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

      <ProductStrip active="guidance" />
      <FaqSection items={faqItems} title="Guidance, answered" />
      <CtaBanner
        title="Launch your first walkthrough today"
        description="Guidance is on the Free plan, so you can start today."
      />
      <Footer />
    </main>
  );
}
