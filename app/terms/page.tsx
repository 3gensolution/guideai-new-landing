import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container, PillBadge } from "@/components/marketing/primitives";

const sections: { title: string; body: string[] }[] = [
  {
    title: "1. Acceptance of terms",
    body: [
      "By accessing or using 3Guide's website, SDKs, dashboards, browser extension, or related services (collectively, the “Services”), you agree to be bound by these Terms of Service. If you are using the Services on behalf of an organization, you represent that you have authority to bind that organization.",
    ],
  },
  {
    title: "2. The services",
    body: [
      "3Guide provides a product adoption platform including in-app guides, an AI assistant, friction analytics, a support desk, and a browser copilot. We may add, change, or remove features over time. Features marked as beta or under development are provided as-is and may change without notice.",
    ],
  },
  {
    title: "3. Your account",
    body: [
      "You are responsible for safeguarding your account credentials and for all activity under your account. Notify us immediately at info@3guideai.com if you suspect unauthorized access.",
    ],
  },
  {
    title: "4. Acceptable use",
    body: [
      "You agree not to misuse the Services — including attempting to access other customers' data, reverse-engineering the platform, using the Services to violate applicable law, or deploying the browser copilot to automate actions on websites you do not own or have permission to operate on.",
    ],
  },
  {
    title: "5. Customer data",
    body: [
      "You retain ownership of the data you submit to the Services, including knowledge base content and end-user interaction data. You grant us the rights needed to operate the Services on your behalf. Our handling of personal data is described in our Privacy Policy.",
    ],
  },
  {
    title: "6. Subscriptions and billing",
    body: [
      "Paid plans are billed in advance on a recurring basis according to the plan you select. Plan limits, overage policies, and trial periods are described on the pricing page. You may cancel at any time; cancellation takes effect at the end of the current billing period.",
    ],
  },
  {
    title: "7. Disclaimers",
    body: [
      "The Services are provided “as is” without warranties of any kind. AI-generated content — including assistant answers, generated guides, and copilot actions — may contain errors; you are responsible for reviewing configuration and supervising automated actions in your environment.",
    ],
  },
  {
    title: "8. Limitation of liability",
    body: [
      "To the maximum extent permitted by law, 3Guide will not be liable for indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, or data, arising from your use of the Services.",
    ],
  },
  {
    title: "9. Changes to these terms",
    body: [
      "We may update these terms from time to time. If we make material changes, we will notify you by email or through the Services before the changes take effect.",
    ],
  },
  {
    title: "10. Contact",
    body: [
      "Questions about these terms? Contact us at info@3guideai.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative overflow-hidden pb-12 pt-32 sm:pt-40">
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <PillBadge>Legal</PillBadge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-base text-slate-500">
              <span className="font-semibold text-slate-700">
                Effective Date:
              </span>{" "}
              July 10, 2026
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <article className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-10">
            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-lg font-semibold text-slate-900">
                    {section.title}
                  </h2>
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="mt-3 text-base leading-relaxed text-slate-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </article>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
