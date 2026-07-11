import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HomeHero } from "@/components/home/hero";
import { FeatureTabs } from "@/components/home/feature-tabs";
import {
  AnalyticsSection,
  CopilotSection,
  HowItWorks,
  ProblemSection,
  StatBand,
  UseCasesSection,
} from "@/components/home/sections";
import { FaqSection } from "@/components/marketing/faq";
import { CtaBanner } from "@/components/marketing/cta-banner";

const faqItems = [
  {
    question: "What is 3Guide?",
    answer:
      "3Guide is an AI-first product adoption platform. It combines in-app guided tours, an AI assistant that answers user questions, friction analytics, a human support desk, and a browser copilot that can complete tasks on a user's behalf — all installed with a single snippet.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Add one JavaScript snippet to your app and you're live. Guides are built visually with the Chrome extension by clicking through your own product — most teams publish their first guide within minutes of installing.",
  },
  {
    question: "What happens to my guides when the UI changes?",
    answer:
      "Every guide step is anchored with an element fingerprint — a robust signature of the target element, not a brittle selector. When you redesign or move things around, 3Guide re-locates the element automatically and the guide keeps working.",
  },
  {
    question: "Where does the AI assistant get its answers?",
    answer:
      "3Guide automatically builds a knowledge base by scanning your website and docs, and keeps it current. You can review, curate, and extend it at any time — the assistant only answers from sources you control.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. 3Guide is free for up to 1,000 monthly active users, with no credit card required. Paid plans scale by usage as you grow.",
  },
  {
    question: "Is the Browser Copilot safe to let loose on my product?",
    answer:
      "The copilot only performs supported, allowlisted actions, asks for confirmation on sensitive steps, and executes in the user's own session with their permissions — the user watches every action as it happens.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "3Guide",
  applicationCategory: "BusinessApplication",
  description:
    "AI-First Product Adoption Platform. Build in-app guides in minutes, keep them current automatically with AI-powered onboarding, friction analytics, and browser Copilot.",
  url: "https://3guideai.com",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free tier available with up to 1,000 monthly active users",
  },
  provider: {
    "@type": "Organization",
    name: "3Guide",
    url: "https://3guideai.com",
    email: "info@3guideai.com",
  },
  featureList: [
    "AI-powered in-app guides",
    "Auto-healing product tours",
    "Browser Copilot with RAG-powered Q&A",
    "Friction analytics and user behavior tracking",
    "AI-first support desk",
    "User segmentation and targeting",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <Header />
        <HomeHero />
        <StatBand />
        <ProblemSection />
        <FeatureTabs />
        <HowItWorks />
        <CopilotSection />
        <AnalyticsSection />
        <UseCasesSection />
        <FaqSection
          items={faqItems}
          description="Everything teams usually ask before installing 3Guide."
        />
        <CtaBanner />
        <Footer />
      </main>
    </>
  );
}
