import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { FeaturesSection } from "@/components/features-section";
import { AgentCanvasSection } from "@/components/agent-canvas-section";
import { SmartInsightsSection } from "@/components/smart-insights-section";
import { VoiceSection } from "@/components/voice-section";
import { CaseStudySection } from "@/components/case-study-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '3Guide',
  applicationCategory: 'BusinessApplication',
  description:
    'AI-First Product Adoption Platform. Build in-app guides in minutes, keep them current automatically with AI-powered onboarding, friction analytics, and browser Copilot.',
  url: 'https://3guideai.com',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free tier available with up to 1,000 monthly active users',
  },
  provider: {
    '@type': 'Organization',
    name: '3Guide',
    url: 'https://3guideai.com',
    email: 'info@3guideai.com',
  },
  featureList: [
    'AI-powered in-app guides',
    'Auto-healing product tours',
    'Browser Copilot with RAG-powered Q&A',
    'Friction analytics and user behavior tracking',
    'Video guide generation',
    'User segmentation and targeting',
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <AgentCanvasSection />
        <SmartInsightsSection />
        <VoiceSection />
        {/* <CaseStudySection /> */}
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
