"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, Loader2 } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactFormDialog } from "@/components/contact-form-dialog";
import { FaqSection } from "@/components/marketing/faq";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { Container, PillBadge } from "@/components/marketing/primitives";
import { DASHBOARD_URL } from "@/lib/site";

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
    answer:
      "An MAU is any unique user who interacts with at least one 3Guide feature (guide, Copilot, or tracked event) within a calendar month.",
  },
  {
    question: "Can I use 3Guide for free forever?",
    answer:
      "Yes! The Starter tier is not a trial—it's a permanent option for small teams. You get full access to all core features.",
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer:
      "We'll notify you when you're approaching your limits. Depending on your plan's overage policy, you can upgrade or overages will be billed at the plan rate.",
  },
  {
    question: "Do you offer discounts for startups or nonprofits?",
    answer:
      "Yes! Reach out to our team and we'll work with you on special pricing for qualified startups and nonprofit organizations.",
  },
];

const comparisonRows: {
  label: string;
  render: (plan: SubscriptionPlan) => React.ReactNode;
}[] = [
  {
    label: "Monthly sessions",
    render: (p) => formatLimit(p.monthly_session_limit),
  },
  { label: "Monthly events", render: (p) => formatLimit(p.monthly_event_limit) },
  { label: "AI credits", render: (p) => formatLimit(p.monthly_credits) },
  {
    label: "Sites",
    render: (p) => (p.max_sites === -1 ? "Unlimited" : p.max_sites),
  },
  { label: "Team seats", render: (p) => p.max_seats },
  { label: "Data retention", render: (p) => `${p.data_retention_days} days` },
  {
    label: "SSO",
    render: (p) =>
      p.features.includes("SSO") ? (
        <Check className="mx-auto h-4 w-4 text-purple-600" />
      ) : (
        <span className="text-slate-300">—</span>
      ),
  },
  {
    label: "Custom integrations",
    render: (p) =>
      p.features.includes("Custom integrations") ? (
        <Check className="mx-auto h-4 w-4 text-purple-600" />
      ) : (
        <span className="text-slate-300">—</span>
      ),
  },
  {
    label: "SLA guarantee",
    render: (p) =>
      p.features.includes("SLA guarantee") ? (
        <Check className="mx-auto h-4 w-4 text-purple-600" />
      ) : (
        <span className="text-slate-300">—</span>
      ),
  },
  {
    label: "Free trial",
    render: (p) => (p.trial_days > 0 ? `${p.trial_days} days` : "—"),
  },
  {
    label: "Event overage policy",
    render: (p) =>
      p.event_overage_policy === "hard_block"
        ? "Hard block"
        : `Overage ($${(p.event_overage_price_cents / 100).toFixed(2)}/unit)`,
  },
  {
    label: "BYOK (Bring Your Own Key)",
    render: (p) =>
      p.byok_allowed ? (
        <Check className="mx-auto h-4 w-4 text-purple-600" />
      ) : (
        <span className="text-slate-300">—</span>
      ),
  },
];

export default function PricingPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPlans = () => {
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
  };

  useEffect(fetchPlans, []);

  const getCtaText = (plan: SubscriptionPlan) => {
    if (plan.price_cents === 0) return "Get started free";
    if (plan.trial_days > 0) return `Start ${plan.trial_days}-day free trial`;
    return "Get started";
  };

  const isHighlighted = (index: number) => index === 1;

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />

      {/* Hero */}
      <section className="relative overflow-hidden pb-4 pt-32 sm:pt-40">
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <PillBadge>Pricing</PillBadge>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Start free.{" "}
              <span className="text-purple-600">Scale when ready.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600">
              Everything you need to build great product adoption is included in
              our generous free tier. No credit card required.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing cards */}
      <section className="py-16">
        <Container>
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
            </div>
          ) : error ? (
            <div className="mx-auto max-w-md py-20 text-center">
              <p className="text-slate-500">{error}</p>
              <button
                type="button"
                onClick={fetchPlans}
                className="mt-4 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                Retry
              </button>
            </div>
          ) : (
            <div data-stagger className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
              {plans.map((plan, index) => {
                const highlighted = isHighlighted(index);
                return (
                  <div
                    key={plan.id}
                    className={`relative rounded-3xl p-8 ${
                      highlighted
                        ? "border-2 border-purple-600 bg-white shadow-xl shadow-purple-600/10"
                        : "border border-slate-200 bg-white shadow-sm"
                    }`}
                  >
                    {highlighted && (
                      <span className="bg-purple-600 absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-md">
                        Most popular
                      </span>
                    )}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {plan.name}
                      </h3>
                      <div className="mt-4">
                        <span className="text-4xl font-semibold tracking-tight text-slate-900">
                          {formatPrice(plan.price_cents)}
                        </span>
                        <span className="text-slate-500">
                          /{plan.billing_interval === "yearly" ? "year" : "mo"}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-600">
                        {plan.description}
                      </p>
                    </div>

                    <ul className="mb-8 space-y-3">
                      {[
                        ...plan.features,
                        `${formatLimit(plan.monthly_credits)} credits/mo`,
                        `${formatLimit(plan.monthly_event_limit)} events/mo`,
                        `${formatLimit(plan.monthly_session_limit)} sessions/mo`,
                        `${plan.max_sites === -1 ? "Unlimited" : plan.max_sites} site${plan.max_sites !== 1 ? "s" : ""}`,
                        `${plan.max_seats} team seat${plan.max_seats !== 1 ? "s" : ""}`,
                        `${plan.data_retention_days}-day data retention`,
                        ...(plan.trial_days > 0
                          ? [`${plan.trial_days}-day free trial`]
                          : []),
                        ...(plan.byok_allowed
                          ? ["Bring Your Own Key (BYOK)"]
                          : []),
                      ].map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-600">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          <span className="text-sm text-slate-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {plan.slug === "business" ? (
                      <button
                        type="button"
                        onClick={() => setContactOpen(true)}
                        className={`w-full rounded-xl px-5 py-3 text-sm font-semibold transition ${
                          highlighted
                            ? "bg-purple-600 text-white shadow-md shadow-purple-600/25 hover:bg-purple-500"
                            : "border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50"
                        }`}
                      >
                        {getCtaText(plan)}
                      </button>
                    ) : (
                      <Link
                        href={DASHBOARD_URL}
                        target="_blank"
                        className={`block w-full rounded-xl px-5 py-3 text-center text-sm font-semibold transition ${
                          highlighted
                            ? "bg-purple-600 text-white shadow-md shadow-purple-600/25 hover:bg-purple-500"
                            : "border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50"
                        }`}
                      >
                        {getCtaText(plan)}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </Container>
      </section>

      {/* Feature comparison */}
      {!loading && !error && plans.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Compare plans
              </h2>
            </div>

            <div className="mx-auto mt-14 max-w-4xl overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[560px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/60">
                    <th className="px-6 py-4 text-left font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Feature
                    </th>
                    {plans.map((plan) => (
                      <th
                        key={plan.id}
                        className="px-6 py-4 text-center text-sm font-semibold text-slate-900"
                      >
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {row.label}
                      </td>
                      {plans.map((plan) => (
                        <td
                          key={plan.id}
                          className="px-6 py-4 text-center text-sm text-slate-700"
                        >
                          {row.render(plan)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>
      )}

      <FaqSection items={faqs} title="Pricing, answered" />
      <CtaBanner
        title="Ready to improve your product adoption?"
        // description="Get started for free today — no credit card required."
      />
      <Footer />
    </main>
  );
}
