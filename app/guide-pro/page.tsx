import Link from "next/link";
import {
  Building2,
  Eye,
  Film,
  Headphones,
  Megaphone,
  Users,
} from "lucide-react";
import { Header } from "@/components/header";
import { HeroStreaks } from "@/components/marketing/hero-streaks";
import { Footer } from "@/components/footer";
import { FaqSection } from "@/components/marketing/faq";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { ProductStrip } from "@/components/marketing/product-strip";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/marketing/primitives";
import { DASHBOARD_URL } from "@/lib/site";
import { DemoGuideProEmbed } from "@/components/marketing/demo-guide-embed";

const value = [
  {
    icon: Megaphone,
    title: "More leads from your website",
    description:
      "Visitors try your product before they talk to sales, and leave their details when they're interested.",
  },
  {
    icon: Users,
    title: "Onboarding without live calls",
    description:
      "Clients and new hires learn at their own pace, from a demo they can replay any time.",
  },
  {
    icon: Film,
    title: "Record once, use everywhere",
    description:
      "The same recording becomes an interactive demo, a video and a written how-to guide.",
  },
  {
    icon: Eye,
    title: "See what's working",
    description:
      "Know how many people watched, finished, and became leads, for every demo.",
  },
];

const audience = [
  {
    icon: Megaphone,
    title: "B2B software companies",
    description:
      "Let your product sell itself on your website and in sales emails.",
  },
  {
    icon: Headphones,
    title: "Customer success teams",
    description:
      "Onboard every new client with a demo instead of another training call.",
  },
  {
    icon: Building2,
    title: "HR & operations teams",
    description:
      "Train staff on any software and keep a written guide for every process.",
  },
];

const faqItems = [
  {
    question: "Do viewers need an account or access to our product?",
    answer:
      "No. Demos are self-contained copies of your product, so anyone with the link can click through them. No login, and no risk to real data.",
  },
  {
    question: "Do we need the rest of 3Guide to use Guide Pro?",
    answer:
      "No. Guide Pro works completely on its own. Nothing needs to be installed in your product.",
  },
  {
    question: "Can we see who watched our demos?",
    answer:
      "Yes. Every demo shows views, completions, button clicks and the leads it captured.",
  },
];

export default function GuideProPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <Header />

      {/* Hero, with the real, live Guide Pro demo */}
      <section className="relative overflow-hidden bg-ink pb-20 pt-36 sm:pt-44">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(56rem 28rem at 12% 96%, rgba(176,74,66,0.28), transparent 62%), radial-gradient(52rem 26rem at 88% 88%, rgba(150,60,80,0.22), transparent 62%)",
          }}
        />
        <HeroStreaks />
        <Container className="relative z-10">
          <div data-reveal className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-[#f0c9a0]">
              Guide Pro
            </span>
            <h1 data-mask-reveal className="font-display mt-8 text-balance text-title text-white">
              Demos that win customers.{" "}
              <span className="text-[#f0c9a0]">Guides that train teams.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lead text-slate-300">
              Turn a quick recording of your product into an interactive demo.
              Put it on your website to capture leads, send it to prospects, or
              use it to train clients and staff. The demo below was made with
              Guide Pro.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={DASHBOARD_URL}
                target="_blank"
                className="inline-flex items-center justify-center bg-[#e8a56d] px-9 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#2b1420] transition duration-300 hover:bg-[#efb684]"
              >
                Build a demo free
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center border border-white/25 px-9 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition duration-300 hover:border-white/50 hover:bg-white/5"
              >
                See pricing
              </Link>
            </div>
          </div>

          <div data-reveal data-reveal-delay="0.15" className="mt-16 px-4">
            <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/50">
              <DemoGuideProEmbed />
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-canvas-deep">
        <Container>
          <SectionHeading
            eyebrow="What it does for you"
            title="Your product, demoing itself"
            align="center"
          />
          <CapabilityGrid items={value} columns={4} className="mt-14" />
        </Container>
      </Section>

      <Section className="bg-canvas">
        <Container>
          <SectionHeading eyebrow="Who it's for" title="Who gets the most from it" align="center" />
          <CapabilityGrid items={audience} className="mx-auto mt-12 max-w-5xl" />
        </Container>
      </Section>

      <ProductStrip active="guide-pro" />
      <FaqSection items={faqItems} title="Guide Pro, answered" />
      <CtaBanner
        title="Turn your product into its own best demo"
        description="Guide Pro is on the Free plan, so you can start today."
      />
      <Footer />
    </main>
  );
}
