import Image from "next/image";
import {
  Puzzle,
  Film,
  Gauge,
  MousePointerClick,
  Target,
  Wand2,
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
    icon: Puzzle,
    title: "Chrome extension builder",
    description:
      "Build guides by clicking through your own product — no code, no selectors, no engineering tickets.",
  },
  {
    icon: Wand2,
    title: "AI generation",
    description:
      "Record a workflow once and AI writes the steps, tooltips, and instructions for you.",
  },
  {
    icon: Target,
    title: "Segment targeting",
    description:
      "Show each guide to the right users — by segment, plan, page, or workflow stage.",
  },
  {
    icon: Film,
    title: "Video guides",
    description:
      "Turn any recorded workflow into a polished MP4 for training decks, docs, and emails.",
  },
  {
    icon: Gauge,
    title: "Confidence scores",
    description:
      "Every guide reports how reliably its steps anchor, so you know what needs attention before users do.",
  },
  {
    icon: MousePointerClick,
    title: "Tooltips & highlights",
    description:
      "Contextual pointers, spotlights, and step-by-step instructions that meet users where they are.",
  },
];

const faqItems = [
  {
    question: "Do I need engineers to build a guide?",
    answer:
      "No. Guides are built visually with the Chrome extension by clicking through your product. Engineering is only involved once — adding the one-line install snippet.",
  },
  {
    question: "How does self-healing actually work?",
    answer:
      "Each step stores a fingerprint of its target element — a combination of structural, visual, and semantic signals rather than a brittle CSS selector. When your UI changes, the engine matches the fingerprint against the new page and re-anchors the step automatically.",
  },
  {
    question: "Can I control who sees each guide?",
    answer:
      "Yes. Target guides by user segment, page, or workflow, and trigger them on first visit, on demand from the in-app assistant, or from a URL.",
  },
  {
    question: "Does 3Guide slow my app down?",
    answer:
      "The SDK is a single lightweight snippet that loads asynchronously and stays out of your critical rendering path.",
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <PageHero
        badge="In-App Guides"
        title={
          <>
            Product tours that build —{" "}
            <span className="text-purple-600">and fix</span> — themselves
          </>
        }
        description="Create click-by-click walkthroughs in minutes with the visual builder, publish in one click, and let the self-healing engine keep every step working as your product evolves."
      >
        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-slate-200 shadow-2xl shadow-purple-950/10 ring-1 ring-slate-900/5">
          <Image
            src="/guidance-mode.gif"
            alt="3Guide guides dashboard with published guides, drafts, and confidence scores"
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
            eyebrow="Create"
            title="Record a workflow. Get a guide."
            description="Click through any flow in your product with the Chrome extension. 3Guide captures every step and AI turns the recording into a polished walkthrough — tooltips, highlights, and copy included."
            bullets={[
              "Visual builder — zero code, zero selectors",
              "AI writes step titles and instructions automatically",
              "Edit, reorder, and refine before anyone sees it",
            ]}
            badges={["No code required", "Minutes, not weeks"]}
            image="/guides-img.png"
            imageAlt="Building a guide visually in 3Guide"
          />
          <FeatureRow
            eyebrow="Publish"
            accent="cyan"
            title="One click to production, targeted to the right users"
            description="Deploy guides instantly and choose exactly who sees them. New signups get onboarding, power users get feature announcements, and everyone else stays undisturbed."
            bullets={[
              "Target by segment, page, or workflow",
              "Trigger on first visit, on demand, or from a link",
              "Draft and published states with instant rollback",
            ]}
            image="/guides-img.png"
            imageAlt="A published guide running live in the product"
            reverse
          />
          <FeatureRow
            eyebrow="Maintain"
            accent="emerald"
            title="Redesign your product. Guides keep working."
            description="Every step is anchored with an element fingerprint — like face recognition for your UI. Move a button, rename a menu, restyle a page: the engine re-locates the target and the guide carries on."
            bullets={[
              "Fingerprints combine structure, position, and semantics",
              "Automatic re-anchoring when elements move",
              "Confidence scores flag anything that needs review",
            ]}
            stat="0 hours of guide maintenance"
            image="/knowledge.png"
            imageAlt="3Guide self-healing keeping guides anchored after a UI change"
          />
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Everything you need to guide users in-app"
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

      <FaqSection items={faqItems} title="In-app guides, answered" />
      <CtaBanner title="Ship your first guide today" />
      <Footer />
    </main>
  );
}
