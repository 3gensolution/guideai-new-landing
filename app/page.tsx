import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HomeHero } from "@/components/home/hero";
import { FeatureTabs } from "@/components/home/feature-tabs";
import { GrowthJourney } from "@/components/home/growth-journey";
import { AudienceColumns } from "@/components/home/audience-columns";
import { TrainingFormats } from "@/components/home/training-formats";
import { AdoptionLoop } from "@/components/home/adoption-loop";
import { TrustSection } from "@/components/home/trust-section";
import {
  CopilotSection,
  IndustriesSection,
  ProblemSection,
  StatBand,
  UseCasesSection,
} from "@/components/home/sections";
import { FaqSection } from "@/components/marketing/faq";
import { CtaBanner } from "@/components/marketing/cta-banner";

const faqItems = [
  {
    question: "What exactly is 3Guide?",
    answer:
      "A layer you add on top of software you already have — no rebuild required — that teaches people how to use it, and increasingly, just does things for them. You paste one line of code into your web app and a small AI helper lives inside your product from that moment on.",
  },
  {
    question: "How is this different from a help widget or a tooltip tool?",
    answer:
      "Ordinary help widgets explain the seven clicks. 3Guide can perform them. A user types “cancel my subscription” and the copilot navigates and clicks through the workflow itself, with the user watching every step. There's a browser automation engine underneath that drives the page the way a person would.",
  },
  {
    question: "Our UI changes constantly. Won't the guides break?",
    answer:
      "That's the hard problem in this market, and most tools silently rot. 3Guide identifies every element six different ways at once — ID, text, position, surroundings, appearance and more — so if one clue disappears the others still find it. When a tour does break, an AI inspects the changed page, works out where the button went, and repairs the walkthrough itself.",
  },
  {
    question: "Where does the AI get its answers?",
    answer:
      "From your product specifically, not the open web. 3Guide builds a knowledge base from your site and docs and keeps it current, and a UI analyzer can read your interface to map every page and button in advance — so the assistant starts out already knowing your layout. You review and curate what it uses.",
  },
  {
    question: "Is it safe to let an AI click things in our product?",
    answer:
      "The widget deliberately separates the two modes. A coloured badge and a different prompt tell the user whether they're asking how to do something or telling it to act. The copilot only performs supported actions, confirms sensitive steps, and runs in the user's own session with their permissions.",
  },
  {
    question: "What do we actually get for the subscription?",
    answer:
      "Fewer support tickets, faster onboarding for new users and new staff, and hard data on exactly where your product confuses people. Beyond the widget you get the dashboard, analytics, a live support inbox, a browser extension, a UI analyzer, and automatic video walkthroughs.",
  },
];

const SAME_AS = [
  "https://www.linkedin.com/company/3guideai",
  "https://x.com/GuideAIhq",
];

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.3guideai.com/#organization",
  name: "3Guide",
  alternateName: ["3GuideAI", "3guideai", "GuideAI", "Guide AI"],
  url: "https://www.3guideai.com",
  logo: "https://www.3guideai.com/logo.jpeg",
  email: "info@3guideai.com",
  sameAs: SAME_AS,
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.3guideai.com/#website",
  name: "3Guide",
  alternateName: ["3GuideAI", "GuideAI"],
  url: "https://www.3guideai.com",
  publisher: { "@id": "https://www.3guideai.com/#organization" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "3Guide",
  alternateName: ["3GuideAI", "3guideai", "GuideAI", "Guide AI"],
  applicationCategory: "BusinessApplication",
  description:
    "AI-First Product Adoption Platform. Build in-app guides in minutes, keep them current automatically with AI-powered onboarding, friction analytics, and browser Copilot.",
  url: "https://www.3guideai.com",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    // description: "Free tier available with up to 1,000 monthly active users",
  },
  provider: { "@id": "https://www.3guideai.com/#organization" },
  sameAs: SAME_AS,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-canvas">
        <Header />
        <HomeHero />
        <StatBand />
        <ProblemSection />
        <AudienceColumns />
        <TrainingFormats />
        <FeatureTabs />
        <AdoptionLoop />
        <CopilotSection />
        <GrowthJourney />
        <IndustriesSection />
        <UseCasesSection />
        <TrustSection />
        <FaqSection
          items={faqItems}
          description="The questions buyers actually ask before installing 3Guide."
        />
        <CtaBanner />
        <Footer />
      </main>
    </>
  );
}
