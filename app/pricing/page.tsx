"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { ContactFormDialog } from "@/components/contact-form-dialog";

const tiers = [
  {
    name: "Free",
    id: "free",
    price: "$0",
    description: "Everything you need to get started with product adoption.",
    features: [
      "Unlimited in-app guides",
      "Browser Copilot extension",
      "Friction analytics dashboard",
      "Auto-healing guides",
      "Up to 1,000 MAU",
      "Community support",
    ],
    cta: "Get started free",
    highlighted: true,
  },
  {
    name: "Pro",
    id: "pro",
    price: "Coming Soon",
    description: "For growing teams that need more power and customization.",
    features: [
      "Everything in Free",
      "Unlimited MAU",
      "Video guide generation",
      "Advanced segmentation",
      "API access",
      "Priority support",
      "Custom branding",
    ],
    cta: "Join waitlist",
    highlighted: false,
  },
  {
    name: "Enterprise",
    id: "enterprise",
    price: "Custom",
    description: "For organizations with advanced security and scale needs.",
    features: [
      "Everything in Pro",
      "SSO / SAML",
      "Dedicated success manager",
      "Custom integrations",
      "SLA guarantee",
      "On-premise option",
      "Audit logs",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "What counts as a Monthly Active User (MAU)?",
    answer: "An MAU is any unique user who interacts with at least one GuideAI feature (guide, Copilot, or tracked event) within a calendar month.",
  },
  {
    question: "Can I use GuideAI for free forever?",
    answer: "Yes! The Free tier is not a trial—it's a permanent option for teams with up to 1,000 MAU. You get full access to all core features.",
  },
  {
    question: "What happens if I exceed 1,000 MAU on Free?",
    answer: "We'll notify you when you're approaching the limit. You can upgrade to Pro anytime, or we'll simply stop tracking new users for that month.",
  },
  {
    question: "Do you offer discounts for startups or nonprofits?",
    answer: "Yes! Reach out to our team and we'll work with you on special pricing for qualified startups and nonprofit organizations.",
  },
];

export default function PricingPage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />
      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Start free.{" "}
              <span className="text-violet-400">Scale when ready.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Everything you need to build great product adoption—included in our generous free tier.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-2xl p-8 ${
                  tier.highlighted
                    ? "border-2 border-violet-500 bg-zinc-900"
                    : "border border-zinc-800 bg-zinc-900/50"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    {tier.price !== "Custom" && tier.price !== "Coming Soon" && (
                      <span className="text-zinc-400">/month</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">{tier.description}</p>
                </div>

                <ul className="mb-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 shrink-0 text-violet-400" />
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    tier.highlighted
                      ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:from-cyan-600 hover:to-violet-600"
                      : "bg-zinc-800 text-white hover:bg-zinc-700"
                  }`}
                  onClick={
                    tier.id === "enterprise"
                      ? () => setContactOpen(true)
                      : undefined
                  }
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Compare plans
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-zinc-800">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900">
                  <th className="px-6 py-4 text-left text-sm font-medium text-zinc-400">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-zinc-400">Free</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-zinc-400">Pro</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-zinc-400">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {[
                  { feature: "In-App Guides", free: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
                  { feature: "Browser Copilot", free: true, pro: true, enterprise: true },
                  { feature: "Friction Analytics", free: true, pro: true, enterprise: true },
                  { feature: "Auto-Healing", free: true, pro: true, enterprise: true },
                  { feature: "Video Guides", free: false, pro: true, enterprise: true },
                  { feature: "API Access", free: false, pro: true, enterprise: true },
                  { feature: "SSO / SAML", free: false, pro: false, enterprise: true },
                  { feature: "MAU Limit", free: "1,000", pro: "Unlimited", enterprise: "Unlimited" },
                ].map((row) => (
                  <tr key={row.feature} className="bg-zinc-900/50">
                    <td className="px-6 py-4 text-sm text-zinc-300">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.free === "boolean" ? (
                        row.free ? (
                          <Check className="mx-auto h-5 w-5 text-violet-400" />
                        ) : (
                          <span className="text-zinc-600">—</span>
                        )
                      ) : (
                        <span className="text-sm text-zinc-300">{row.free}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.pro === "boolean" ? (
                        row.pro ? (
                          <Check className="mx-auto h-5 w-5 text-violet-400" />
                        ) : (
                          <span className="text-zinc-600">—</span>
                        )
                      ) : (
                        <span className="text-sm text-zinc-300">{row.pro}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? (
                          <Check className="mx-auto h-5 w-5 text-violet-400" />
                        ) : (
                          <span className="text-zinc-600">—</span>
                        )
                      ) : (
                        <span className="text-sm text-zinc-300">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-3xl divide-y divide-zinc-800">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                <p className="mt-2 text-zinc-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to improve your product adoption?
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Get started for free today. No credit card required.
            </p>
            <Button size="lg" className="mt-8 bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:from-cyan-600 hover:to-violet-600">
              Start your free account
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
