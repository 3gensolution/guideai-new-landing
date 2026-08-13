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
  credit_rate_multiplier: number;
  credit_overage_policy: string;
  byok_allowed: boolean;
  country_code: string;
  base_currency: string;
  currency: string;
  currency_minor_units: number;
  localized_price_minor: number;
  localized_event_overage_price_minor: number;
  exchange_rate: number;
  exchange_rate_date: string | null;
}

/**
 * Resolve a fallback country from the browser locale (e.g. "en-NG" -> "NG").
 * Used only when IP geolocation is unavailable. Returns "US" if nothing resolves.
 */
function countryFromLocale(): string {
  if (typeof navigator === "undefined") return "US";
  const languages =
    navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language];
  for (const lang of languages) {
    if (!lang) continue;
    try {
      const region = new Intl.Locale(lang).region;
      if (region) return region.toUpperCase();
    } catch {
      const parts = lang.split(/[-_]/);
      if (parts.length > 1 && parts[1].length === 2) {
        return parts[1].toUpperCase();
      }
    }
  }
  return "US";
}

/**
 * Detect the visitor's country from their IP address via BigDataCloud's keyless
 * client-side reverse-geocode endpoint. This reflects the user's actual physical
 * location (the browser UserAgent carries no geolocation). Falls back to the
 * browser locale, then "US", if the lookup fails.
 */
async function detectCountry(): Promise<string> {
  try {
    const res = await fetch(
      "https://api-bdc.net/data/reverse-geocode-client?localityLanguage=en",
    );
    if (res.ok) {
      const data = (await res.json()) as { countryCode?: string };
      if (data.countryCode) return data.countryCode.toUpperCase();
    }
  } catch {
    // Network/geo lookup failed — fall through to locale-based guess.
  }
  return countryFromLocale();
}

/**
 * Format a price expressed in the currency's minor units (e.g. cents) using the
 * plan's own currency + minor-unit metadata. No currency is hardcoded — the code,
 * symbol and decimal precision all come from the API response.
 */
function formatPrice(plan: SubscriptionPlan): string {
  const amount = plan.localized_price_minor / 10 ** plan.currency_minor_units;
  try {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: plan.currency,
      currencyDisplay: "narrowSymbol",
      minimumFractionDigits: amount % 1 === 0 ? 0 : plan.currency_minor_units,
      maximumFractionDigits: plan.currency_minor_units,
    }).format(amount);
  } catch {
    return `${plan.currency} ${amount.toFixed(plan.currency_minor_units)}`;
  }
}

/**
 * Format an overage price (minor units) in the plan's currency.
 */
function formatOverage(plan: SubscriptionPlan): string {
  const amount =
    plan.localized_event_overage_price_minor / 10 ** plan.currency_minor_units;
  try {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: plan.currency,
      currencyDisplay: "narrowSymbol",
      minimumFractionDigits: plan.currency_minor_units,
      maximumFractionDigits: plan.currency_minor_units,
    }).format(amount);
  } catch {
    return `${plan.currency} ${amount.toFixed(plan.currency_minor_units)}`;
  }
}

function formatLimit(value: number): string {
  if (value === -1) return "Unlimited";
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(0)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(0).replace(/\.0$/, "")}k`;
  return value.toLocaleString();
}

/**
 * A short multiplier label for how fast credits are spent, derived from the
 * plan's credit_rate_multiplier (e.g. 2.0 -> "2×", 1.0 -> "1×"). "1×" is the
 * best (cheapest) rate. Nothing hardcoded — the number comes straight from the API.
 */
function creditRateLabel(multiplier: number): { text: string; isBest: boolean } {
  const rounded = Number.isInteger(multiplier)
    ? multiplier.toString()
    : multiplier.toFixed(1).replace(/\.0$/, "");
  const isBest = multiplier <= 1;
  return {
    text: isBest ? `Best ${rounded}× credit rate` : `${rounded}× credit usage rate`,
    isBest,
  };
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
        : `Overage (${formatOverage(p)}/unit)`,
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

  const fetchPlans = async () => {
    setError(null);
    setLoading(true);
    try {
      const country = await detectCountry();
      const res = await fetch(
        `https://dashboard.3guideai.com/api/v1/subscription-plans?country=${encodeURIComponent(country)}`,
      );
      if (!res.ok) throw new Error("Failed to fetch plans");
      const data = (await res.json()) as SubscriptionPlan[];
      data.sort((a, b) => a.display_order - b.display_order);
      setPlans(data);
    } catch {
      setError("Unable to load pricing plans. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCtaText = (plan: SubscriptionPlan) => {
    if (plan.localized_price_minor === 0) return "Get started free";
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
            <div data-stagger className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-8 lg:grid-cols-3">
              {plans.map((plan, index) => {
                const highlighted = isHighlighted(index);
                const isFree = plan.localized_price_minor === 0;
                const rate = creditRateLabel(plan.credit_rate_multiplier);
                return (
                  <div
                    key={plan.id}
                    className={`relative flex flex-col overflow-hidden rounded-3xl ${
                      highlighted
                        ? "border-2 border-purple-600 bg-white shadow-xl shadow-purple-600/10"
                        : "border border-slate-200 bg-white shadow-sm"
                    }`}
                  >
                    {highlighted && (
                      <div className="bg-purple-600 py-2.5 text-center text-xs font-semibold text-white">
                        Recommended · credits last longer
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-8">
                      {/* Header: name + description */}
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">
                          {plan.name}
                        </h3>
                        <p className="mt-1.5 text-sm text-slate-600">
                          {plan.description}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="mt-6">
                        {isFree ? (
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-semibold tracking-tight text-slate-900">
                              Free
                            </span>
                            <span className="text-sm text-slate-500">
                              No card required
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-semibold tracking-tight text-slate-900">
                              {formatPrice(plan)}
                            </span>
                            <span className="text-sm text-slate-500">
                              per{" "}
                              {plan.billing_interval === "yearly"
                                ? "year"
                                : "month"}
                            </span>
                          </div>
                        )}
                        {plan.trial_days > 0 && (
                          <p className="mt-2 text-sm font-medium text-purple-600">
                            Includes a {plan.trial_days}-day free trial
                          </p>
                        )}
                      </div>

                      {/* Credits block */}
                      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div className="text-2xl font-semibold tracking-tight text-slate-900">
                            {formatLimit(plan.monthly_credits)}
                          </div>
                          <span
                            className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${
                              rate.isBest
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-amber-50 text-amber-700"
                            }`}
                          >
                            {rate.text}
                          </span>
                        </div>
                        <div className="mt-0.5 text-sm text-slate-500">
                          credits every month
                        </div>
                      </div>

                      {/* Key specs */}
                      <dl className="mt-6 space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <dt className="text-slate-600">Sites</dt>
                          <dd className="font-semibold text-slate-900">
                            {plan.max_sites === -1 ? "Unlimited" : plan.max_sites}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between">
                          <dt className="text-slate-600">Team seats</dt>
                          <dd className="font-semibold text-slate-900">
                            {plan.max_seats}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between">
                          <dt className="text-slate-600">Data retention</dt>
                          <dd className="font-semibold text-slate-900">
                            {plan.data_retention_days} days
                          </dd>
                        </div>
                        <div className="flex items-center justify-between">
                          <dt className="text-slate-600">Bring your own AI key</dt>
                          <dd className="font-semibold text-slate-900">
                            {plan.byok_allowed ? "Available" : "—"}
                          </dd>
                        </div>
                      </dl>

                      {/* Also included */}
                      {plan.features.length > 0 && (
                        <div className="mt-7 border-t border-slate-100 pt-6">
                          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Also included
                          </p>
                          <ul className="mt-4 space-y-3">
                            {plan.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-3"
                              >
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-600">
                                  <Check className="h-3 w-3" strokeWidth={3} />
                                </span>
                                <span className="text-sm text-slate-600">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* CTA */}
                      <div className="mt-8 pt-2">
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
                        <p className="mt-4 text-center text-xs text-slate-400">
                          Credit-based actions pause when the balance reaches zero.
                        </p>
                      </div>
                    </div>
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
