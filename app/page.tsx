import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HomeHero } from "@/components/home/hero";
import { FeatureTabs } from "@/components/home/feature-tabs";
import { AdoptionLoop } from "@/components/home/adoption-loop";
import { ProblemSection, WhoItsFor } from "@/components/home/sections";
import { FaqSection } from "@/components/marketing/faq";
import { CtaBanner } from "@/components/marketing/cta-banner";

const faqItems = [
  {
    question: "What does 3Guide do for my business?",
    answer:
      "It gets more of your customers and staff actually using your software. People who would have got stuck are shown how, or have the task done for them. You see where people struggle and whether your fixes worked. And your product can sell itself through interactive demos.",
  },
  {
    question: "Do we need developers?",
    answer:
      "Only to add one line to your website. After that, your team builds everything without code. For tools you didn't build, like Salesforce, there's a browser extension instead.",
  },
  {
    question: "Do we have to use all four products?",
    answer:
      "No. Each one works on its own, and every one is on the Free plan. Start with the problem you have today and add the others when you're ready.",
  },
  {
    question: "How is 3Guide different from other tools?",
    answer:
      "Most tools do one job: an analytics tool shows where people drop off, a tour tool shows them around. 3Guide does both, and closes the loop. It spots the problem, helps fix it, and shows you whether the fix worked.",
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
    "Digital adoption agent. Find where users struggle with product analytics, teach them with self-healing in-app guides, do tasks for them with an AI assistant, and sell and train with interactive demos — then prove each fix worked with a holdout group.",
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
    "Product analytics: funnels, retention, paths, web analytics",
    "Session replay, error tracking, feature flags and experiments",
    "Automatic problem detection with holdout-tested fixes",
    "Self-healing in-app guides, help hints and announcements",
    "AI assistant that calls your APIs and acts on the page",
    "Interactive product demos with lead capture and SOP export",
    "Browser extension for third-party apps",
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
        <ProblemSection />
        <FeatureTabs />
        <AdoptionLoop />
        <WhoItsFor />
        <FaqSection items={faqItems} />
        <CtaBanner />
        <Footer />
      </main>
    </>
  );
}
