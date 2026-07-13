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
} from "@/components/marketing/primitives";

const painSections = [
  {
    quote:
      "“Prospects bounce off our website before they ever see what the product does.”",
    accent: "violet" as const,
    eyebrow: "Website conversion",
    title: "Let buyers play with the product on your homepage",
    description:
      "Embed an interactive Guide Pro demo right where visitors land. Instead of reading about features, they click through them — and the ones who engage arrive at your form already sold.",
    bullets: [
      "Inline, overlay, or popup embeds for any page",
      "Personalize the demo per campaign with tokens",
      "Capture leads inside the demo with a built-in form",
    ],
    image: "/story-2.png",
    imageAlt: "An interactive product demo embedded on a website",
    link: { href: "/guide-pro", label: "Explore Guide Pro" },
  },
  {
    quote:
      "“Every demo takes an SE, a staging environment, and a week of back-and-forth.”",
    accent: "cyan" as const,
    eyebrow: "Demo at scale",
    title: "Build a demo once. Reuse it in every deal.",
    description:
      "Record a few clicks through your product and Guide Pro turns them into a polished, self-contained demo — no live access, no engineering. AI writes the narration and picks the zoom, so a rep can ship a demo in an afternoon.",
    bullets: [
      "No live product or staging environment needed",
      "AI-written tooltips, voiceover, and zoom per screen",
      "Send as a link, or leave it behind after the call",
    ],
    image: "/guide-pro-img.png",
    imageAlt: "Building a reusable interactive demo",
    link: { href: "/guide-pro", label: "See how Guide Pro works" },
    reverse: true,
  },
  {
    quote:
      "“Our launch videos look like a screen grab someone recorded on a Tuesday.”",
    accent: "indigo" as const,
    eyebrow: "Product video",
    title: "Ship product videos that look produced",
    description:
      "Guide Studio turns a raw screen recording into a finished video — automatic zoom, smooth cursor, clean backgrounds, captions, and AI voiceover — then exports an MP4 or GIF ready for your site, a launch post, or a training library.",
    bullets: [
      "Automatic zoom and cursor polish, no editing skills",
      "AI voiceover and on-device captions",
      "Export MP4 or GIF for web, social, and docs",
    ],
    image: "/guide-studio-img.png",
    imageAlt: "A polished product video made in Guide Studio",
    link: { href: "/studio", label: "Explore Guide Studio" },
  },
];

const faqItems = [
  {
    question: "Do prospects need access to our real product?",
    answer:
      "No. Guide Pro demos are self-contained copies built from screenshots and page snapshots. Prospects click through a realistic replica without ever touching your live app or needing a login.",
  },
  {
    question: "Can we personalize a demo for a specific account?",
    answer:
      "Yes. Personalization tokens fill from the share-link parameters or a lead form, so the same demo can greet each prospect by name or company and tailor the copy to their use case.",
  },
  {
    question: "What's the difference between an interactive demo and a video?",
    answer:
      "An interactive Guide Pro demo lets buyers click through the product themselves — great for websites and self-serve exploration. A Guide Studio video is a finished MP4 or GIF you'd post to your site, a launch, or a training library. Most teams use both.",
  },
  {
    question: "Can we capture leads from a demo?",
    answer:
      "Yes. Drop a lead-form step into any Guide Pro demo to capture viewer details mid-flow — and use what they enter to personalize the rest of the demo.",
  },
];

export default function SalesMarketingDemosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <PageHero
        badge="Use case · Sales & Marketing Demos"
        title={
          <>
            Let buyers experience your product{" "}
            <span className="text-purple-600">before the first call</span>
          </>
        }
        description="The fastest way to sell software is to let people use it. 3Guide turns your product into interactive demos and polished videos that lift website conversion, qualify leads, and shorten sales cycles."
      />

      <Section className="pt-0">
        <Container className="space-y-24">
          {painSections.map((section) => (
            <div key={section.title}>
              <blockquote
                data-reveal
                className="mx-auto mb-10 max-w-2xl text-center text-xl font-medium italic leading-relaxed text-slate-500 sm:text-2xl"
              >
                {section.quote}
              </blockquote>
              <FeatureRow
                eyebrow={section.eyebrow}
                accent={section.accent}
                title={section.title}
                description={section.description}
                bullets={section.bullets}
                image={section.image}
                imageAlt={section.imageAlt}
                link={section.link}
                reverse={section.reverse}
              />
            </div>
          ))}
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <SectionHeading
            eyebrow="The value"
            title="Demos that pull their weight in the funnel"
            description="Interactive product experiences move the numbers that matter to sales and marketing teams."
            align="center"
          />
          <div
            data-stagger
            className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3"
          >
            {[
              {
                step: "01",
                title: "Convert on the website",
                text: "Visitors who play with a demo arrive at your form already convinced.",
              },
              {
                step: "02",
                title: "Qualify before the call",
                text: "Self-serve demos let buyers pre-qualify, so reps spend time on real deals.",
              },
              {
                step: "03",
                title: "Shorten the cycle",
                text: "A leave-behind demo keeps the deal moving between meetings.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-950/10"
              >
                <p className="text-purple-600 font-mono text-sm font-bold">
                  {item.step}
                </p>
                <h3 className="mt-3 text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FaqSection items={faqItems} title="Sales & marketing demos, answered" />
      <CtaBanner
        title="Turn your product into your best sales rep"
        description="Build an interactive demo or a polished product video today."
      />
      <Footer />
    </main>
  );
}
