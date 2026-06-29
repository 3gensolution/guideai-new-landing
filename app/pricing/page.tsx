"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, Loader2 } from "lucide-react";
import { ContactFormDialog } from "@/components/contact-form-dialog";

interface SubscriptionPlan {
  id: string;
  name: string;
  slug: string;
  description: string;
  price_cents: number;
  billing_interval: string;
  monthly_event_limit: number;
  monthly_ai_token_limit: number;
  monthly_session_limit: number;
  max_sites: number;
  max_seats: number;
  data_retention_days: number;
  event_overage_policy: string;
  event_overage_price_cents: number;
  features: string[];
  trial_days: number;
  display_order: number;
  monthly_credits: number;
  credit_overage_policy: string;
  byok_allowed: boolean;
}

function formatPrice(priceCents: number): string {
  if (priceCents === 0) return "$0";
  return `$${(priceCents / 100).toFixed(0)}`;
}

function formatLimit(value: number): string {
  if (value === -1) return "Unlimited";
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(0)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(0).replace(/\.0$/, "")}k`;
  return value.toLocaleString();
}

const faqs = [
  {
    question: "What counts as a Monthly Active User (MAU)?",
    answer: "An MAU is any unique user who interacts with at least one GuideAI feature (guide, Copilot, or tracked event) within a calendar month.",
  },
  {
    question: "Can I use GuideAI for free forever?",
    answer: "Yes! The Starter tier is not a trial—it's a permanent option for small teams. You get full access to all core features.",
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer: "We'll notify you when you're approaching your limits. Depending on your plan's overage policy, you can upgrade or overages will be billed at the plan rate.",
  },
  {
    question: "Do you offer discounts for startups or nonprofits?",
    answer: "Yes! Reach out to our team and we'll work with you on special pricing for qualified startups and nonprofit organizations.",
  },
];

export default function PricingPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPlans() {
      try {
        const res = await fetch("https://api.3guideai.com/api/v1/subscription-plans");
        if (!res.ok) throw new Error("Failed to fetch plans");
        const data: SubscriptionPlan[] = await res.json();
        data.sort((a, b) => a.display_order - b.display_order);
        setPlans(data);
      } catch {
        setError("Unable to load pricing plans. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchPlans();
  }, []);

  const getCtaText = (plan: SubscriptionPlan) => {
    if (plan.price_cents === 0) return "Get started free";
    if (plan.trial_days > 0) return `Start ${plan.trial_days}-day free trial`;
    return "Get started";
  };

  const isHighlighted = (index: number) => {
    return index === 1;
  };

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
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-violet-400" />
            </div>
          ) : error ? (
            <div className="mx-auto max-w-md text-center py-20">
              <p className="text-zinc-400">{error}</p>
              <Button
                className="mt-4 bg-zinc-800 text-white hover:bg-zinc-700"
                onClick={() => {
                  setError(null);
                  setLoading(true);
                  fetch("https://api.3guideai.com/api/v1/subscription-plans")
                    .then((res) => {
                      if (!res.ok) throw new Error("Failed to fetch plans");
                      return res.json();
                    })
                    .then((data: SubscriptionPlan[]) => {
                      data.sort((a, b) => a.display_order - b.display_order);
                      setPlans(data);
                      setLoading(false);
                    })
                    .catch(() => {
                      setError("Unable to load pricing plans. Please try again later.");
                      setLoading(false);
                    });
                }}
              >
                Retry
              </Button>
            </div>
          ) : (
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
              {plans.map((plan, index) => {
                const highlighted = isHighlighted(index);
                return (
                  <div
                    key={plan.id}
                    className={`relative rounded-2xl p-8 ${
                      highlighted
                        ? "border-2 border-violet-500 bg-zinc-900"
                        : "border border-zinc-800 bg-zinc-900/50"
                    }`}
                  >
                    {highlighted && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-3 py-1 text-xs font-semibold text-white">
                        Most Popular
                      </span>
                    )}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-white">
                          {formatPrice(plan.price_cents)}
                        </span>
                        <span className="text-zinc-400">/{plan.billing_interval === "yearly" ? "year" : "mo"}</span>
                      </div>
                      <p className="mt-2 text-sm text-zinc-400">{plan.description}</p>
                    </div>

                    <ul className="mb-8 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="h-5 w-5 shrink-0 text-violet-400" />
                          <span className="text-sm text-zinc-300">{feature}</span>
                        </li>
                      ))}
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 shrink-0 text-violet-400" />
                        <span className="text-sm text-zinc-300">
                          {formatLimit(plan.monthly_credits)} credits/mo
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 shrink-0 text-violet-400" />
                        <span className="text-sm text-zinc-300">
                          {formatLimit(plan.monthly_event_limit)} events/mo
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 shrink-0 text-violet-400" />
                        <span className="text-sm text-zinc-300">
                          {formatLimit(plan.monthly_session_limit)} sessions/mo
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 shrink-0 text-violet-400" />
                        <span className="text-sm text-zinc-300">
                          {plan.max_sites === -1 ? "Unlimited" : plan.max_sites} site{plan.max_sites !== 1 ? "s" : ""}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 shrink-0 text-violet-400" />
                        <span className="text-sm text-zinc-300">
                          {plan.max_seats} team seat{plan.max_seats !== 1 ? "s" : ""}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 shrink-0 text-violet-400" />
                        <span className="text-sm text-zinc-300">
                          {plan.data_retention_days}-day data retention
                        </span>
                      </li>
                      {plan.trial_days > 0 && (
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 shrink-0 text-violet-400" />
                          <span className="text-sm text-zinc-300">
                            {plan.trial_days}-day free trial
                          </span>
                        </li>
                      )}
                      {plan.byok_allowed && (
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 shrink-0 text-violet-400" />
                          <span className="text-sm text-zinc-300">
                            Bring Your Own Key (BYOK)
                          </span>
                        </li>
                      )}
                    </ul>

                    <Button
                      className={`w-full ${
                        highlighted
                          ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:from-cyan-600 hover:to-violet-600"
                          : "bg-zinc-800 text-white hover:bg-zinc-700"
                      }`}
                      onClick={
                        plan.slug === "business"
                          ? () => setContactOpen(true)
                          : undefined
                      }
                    >
                      {getCtaText(plan)}
                    </Button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Feature Comparison */}
      {!loading && !error && plans.length > 0 && (
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
                    {plans.map((plan) => (
                      <th key={plan.id} className="px-6 py-4 text-center text-sm font-medium text-zinc-400">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr className="bg-zinc-900/50">
                    <td className="px-6 py-4 text-sm text-zinc-300">Monthly Sessions</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center text-sm text-zinc-300">
                        {formatLimit(plan.monthly_session_limit)}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-zinc-900/50">
                    <td className="px-6 py-4 text-sm text-zinc-300">Monthly Events</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center text-sm text-zinc-300">
                        {formatLimit(plan.monthly_event_limit)}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-zinc-900/50">
                    <td className="px-6 py-4 text-sm text-zinc-300">AI Credits</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center text-sm text-zinc-300">
                        {formatLimit(plan.monthly_credits)}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-zinc-900/50">
                    <td className="px-6 py-4 text-sm text-zinc-300">Sites</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center text-sm text-zinc-300">
                        {plan.max_sites === -1 ? "Unlimited" : plan.max_sites}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-zinc-900/50">
                    <td className="px-6 py-4 text-sm text-zinc-300">Team Seats</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center text-sm text-zinc-300">
                        {plan.max_seats}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-zinc-900/50">
                    <td className="px-6 py-4 text-sm text-zinc-300">Data Retention</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center text-sm text-zinc-300">
                        {plan.data_retention_days} days
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-zinc-900/50">
                    <td className="px-6 py-4 text-sm text-zinc-300">SSO</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center">
                        {plan.features.includes("SSO") ? (
                          <Check className="mx-auto h-5 w-5 text-violet-400" />
                        ) : (
                          <span className="text-zinc-600">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-zinc-900/50">
                    <td className="px-6 py-4 text-sm text-zinc-300">Custom Integrations</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center">
                        {plan.features.includes("Custom integrations") ? (
                          <Check className="mx-auto h-5 w-5 text-violet-400" />
                        ) : (
                          <span className="text-zinc-600">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-zinc-900/50">
                    <td className="px-6 py-4 text-sm text-zinc-300">SLA Guarantee</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center">
                        {plan.features.includes("SLA guarantee") ? (
                          <Check className="mx-auto h-5 w-5 text-violet-400" />
                        ) : (
                          <span className="text-zinc-600">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-zinc-900/50">
                    <td className="px-6 py-4 text-sm text-zinc-300">Free Trial</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center text-sm text-zinc-300">
                        {plan.trial_days > 0 ? `${plan.trial_days} days` : "—"}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-zinc-900/50">
                    <td className="px-6 py-4 text-sm text-zinc-300">Event Overage Policy</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center text-sm text-zinc-300">
                        {plan.event_overage_policy === "hard_block" ? "Hard block" : `Overage ($${(plan.event_overage_price_cents / 100).toFixed(2)}/unit)`}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-zinc-900/50">
                    <td className="px-6 py-4 text-sm text-zinc-300">BYOK (Bring Your Own Key)</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center">
                        {plan.byok_allowed ? (
                          <Check className="mx-auto h-5 w-5 text-violet-400" />
                        ) : (
                          <span className="text-zinc-600">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

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
