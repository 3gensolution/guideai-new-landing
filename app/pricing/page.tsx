"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, Loader2, X } from "lucide-react";
import { Header } from "@/components/header";
import { HeroStreaks } from "@/components/marketing/hero-streaks";
import { Footer } from "@/components/footer";
import { ContactFormDialog } from "@/components/contact-form-dialog";
import { FaqSection } from "@/components/marketing/faq";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { Container } from "@/components/marketing/primitives";
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
  max_voice_clones: number;
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
  /* Quote-on-request plans (Enterprise, Pay as you go). These come back with
     localized_price_minor === 0, so price alone can't tell them apart from the
     genuinely free Starter plan — always branch on contact_sales. */
  contact_sales: boolean;
  min_topup_cents: number;
  credit_price_cents_per_1000: number;
  entitlements: Record<string, boolean>;
  quotas: Record<string, number>;
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

// Countries we bill in their own local currency. Everyone else is priced in USD.
// (NG -> NGN, GB -> GBP; the "?country=" endpoint infers the currency from this.)
const LOCALIZED_COUNTRIES = new Set(["NG", "GB"]);

/**
 * Map a detected country to the country we actually query pricing with. Nigeria
 * and the UK keep their own currency; every other country defaults to "US" (USD).
 */
function pricingCountry(detected: string): string {
  return LOCALIZED_COUNTRIES.has(detected) ? detected : "US";
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

/** Format an arbitrary minor-unit amount using a plan's currency metadata. */
function formatMinorPrice(plan: SubscriptionPlan, minor: number): string {
  const amount = minor / 10 ** plan.currency_minor_units;
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

/** How many credits the minimum top-up buys on a pay-as-you-go plan. */
function creditsPerTopUp(plan: SubscriptionPlan): number {
  if (!plan.credit_price_cents_per_1000) return 0;
  return Math.round(
    (plan.min_topup_cents / plan.credit_price_cents_per_1000) * 1000,
  );
}

/** Human labels for the entitlement flags we surface on a card. */
const ENTITLEMENT_LABELS: Record<string, string> = {
  voice_clone: "Voice cloning",
  live_voice_chat: "Live voice chat",
  custom_integrations: "Custom integrations",
  multilanguage: "Translation and multi-language",
  demo_video_export: "Demo video export",
  demo_sandbox: "Demo sandboxes",
  priority_support: "Priority support",
};

/** What a few common actions cost, so PAYG buyers can judge the rate. */
const CREDIT_COSTS: { label: string; credits: number }[] = [
  { label: "Create announcement or survey", credits: 40 },
  { label: "Generate a demo SOP PDF", credits: 4 },
  { label: "Voice Mode reply (speech in + out)", credits: 4 },
];

/** True only for the genuinely free plan — not for quote-on-request tiers. */
function isFreePlan(plan: SubscriptionPlan): boolean {
  return plan.localized_price_minor === 0 && !plan.contact_sales;
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
function creditRateLabel(multiplier: number): {
  text: string;
  isBest: boolean;
  multiplier: string;
} {
  const rounded = Number.isInteger(multiplier)
    ? multiplier.toString()
    : multiplier.toFixed(1).replace(/\.0$/, "");
  const isBest = multiplier <= 1;
  return {
    text: isBest ? `Best ${rounded}× credit rate` : `${rounded}× credit usage rate`,
    isBest,
    multiplier: rounded,
  };
}

const faqs = [
  // {
  //   question: "What counts as a Monthly Active User (MAU)?",
  //   answer:
  //     "An MAU is any unique user who interacts with at least one 3Guide feature (guide, Copilot, or tracked event) within a calendar month.",
  // },
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

// Only the details that actually affect a plan choice — all from real API fields.
const comparisonRows: {
  label: string;
  render: (plan: SubscriptionPlan) => React.ReactNode;
}[] = [
  {
    label: "Price",
    render: (p) => {
      if (p.contact_sales) {
        return p.min_topup_cents > 0
          ? `From ${formatMinorPrice(p, p.min_topup_cents * (p.exchange_rate || 1))}`
          : "Custom";
      }
      return isFreePlan(p) ? "Free" : formatPrice(p);
    },
  },
  {
    label: "Monthly credits",
    render: (p) =>
      /* PAYG has no monthly allowance — you buy credits instead. */
      p.monthly_credits === 0 && p.credit_price_cents_per_1000 > 0
        ? "Pay as you go"
        : formatLimit(p.monthly_credits),
  },
  {
    label: "Credit rate",
    render: (p) => `${creditRateLabel(p.credit_rate_multiplier).multiplier}×`,
  },
  {
    label: "Sites",
    render: (p) => (p.max_sites === -1 ? "Unlimited" : p.max_sites),
  },
  {
    label: "Team seats",
    render: (p) => (p.max_seats === -1 ? "Unlimited" : p.max_seats),
  },
  {
    label: "Voice clones",
    render: (p) =>
      p.entitlements?.voice_clone
        ? p.max_voice_clones === -1 || p.max_voice_clones === 0
          ? "Unlimited"
          : p.max_voice_clones
        : <span className="text-slate-300">—</span>,
  },
  {
    label: "Video & sandbox exports",
    render: (p) =>
      !p.entitlements?.demo_video_export ? (
        <span className="text-slate-300">—</span>
      ) : p.quotas?.video_exports === -1 ? (
        "Unlimited"
      ) : (
        `${p.quotas?.video_exports ?? 0}/mo`
      ),
  },
  {
    label: "Priority support",
    render: (p) =>
      p.entitlements?.priority_support ? (
        "Included"
      ) : (
        <span className="text-slate-300">—</span>
      ),
  },
  { label: "Data retention", render: (p) => `${p.data_retention_days} days` },
  {
    label: "Bring your own AI key",
    render: (p) =>
      p.byok_allowed ? (
        "Available"
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
      const country = pricingCountry(await detectCountry());
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
    if (plan.contact_sales) return "Talk to sales";
    if (isFreePlan(plan)) return "Get started";
    if (plan.trial_days > 0) return `Start ${plan.trial_days}-day free trial`;
    return "Get started";
  };

  const isHighlighted = (plan: SubscriptionPlan) => plan.slug === "pro";

  return (
    <main className="min-h-screen bg-canvas">
      <Header />
      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink pb-24 pt-36 sm:pt-44">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(56rem 28rem at 12% 96%, rgba(176,74,66,0.28), transparent 62%), radial-gradient(52rem 26rem at 88% 88%, rgba(150,60,80,0.22), transparent 62%)",
          }}
        />
        <HeroStreaks />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-[#f0c9a0]">
              Pricing
            </span>
            <h1 data-mask-reveal className="font-display mt-8 text-balance text-title text-white">
              Find the right plan{" "}
              <span className="text-[#f0c9a0]">for your team</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lead text-slate-300">
              Get started free and scale when you're ready. Every plan includes what
              you need to drive product adoption, with no credit card required to
              begin.
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
            <div data-stagger className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan, index) => {
                const highlighted = isHighlighted(plan);
                const isFree = isFreePlan(plan);
                const rate = creditRateLabel(plan.credit_rate_multiplier);
                /* PAYG has no monthly allowance — it sells credits outright,
                   so its credits block reads as "what the top-up buys". */
                const isPayg =
                  plan.monthly_credits === 0 &&
                  plan.credit_price_cents_per_1000 > 0;
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
                        {plan.contact_sales ? (
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                            <span className="text-2xl font-semibold tracking-tight text-slate-900 xl:text-3xl">
                              Custom
                            </span>
                            <span className="text-sm text-slate-500">
                              {plan.min_topup_cents > 0
                                ? `from ${formatMinorPrice(
                                    plan,
                                    plan.min_topup_cents * (plan.exchange_rate || 1),
                                  )} — book a demo`
                                : "tailored to your team"}
                            </span>
                          </div>
                        ) : isFree ? (
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                            <span className="text-2xl font-semibold tracking-tight text-slate-900 xl:text-3xl">
                              Free
                            </span>
                            <span className="text-sm text-slate-500">
                              No card required
                            </span>
                          </div>
                        ) : (
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                            <span className="text-2xl font-semibold tracking-tight text-slate-900 xl:text-3xl">
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
                        <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1.5">
                          <div className="text-2xl font-semibold tracking-tight text-slate-900">
                            {isPayg
                              ? creditsPerTopUp(plan).toLocaleString("en-US")
                              : formatLimit(plan.monthly_credits)}
                          </div>
                          <span
                            className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${
                              rate.isBest
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-amber-50 text-amber-700"
                            }`}
                          >
                            {rate.text}
                          </span>
                        </div>
                        <div className="mt-0.5 text-sm text-slate-500">
                          {isPayg
                            ? `credits for ${formatMinorPrice(
                                plan,
                                plan.min_topup_cents * (plan.exchange_rate || 1),
                              )} — top up any time`
                            : "credits every month"}
                        </div>

                        {isPayg && (
                          <dl className="mt-4 space-y-1.5 border-t border-slate-200 pt-4 text-sm">
                            {CREDIT_COSTS.map((c) => (
                              <div
                                key={c.label}
                                className="flex flex-wrap items-baseline justify-between gap-x-3"
                              >
                                <dt className="text-slate-600">{c.label}</dt>
                                <dd className="font-semibold text-slate-900">
                                  {c.credits} credits
                                </dd>
                              </div>
                            ))}
                          </dl>
                        )}
                      </div>

                      {/* Key specs */}
                      <dl className="mt-6 space-y-3 text-sm">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                          <dt className="text-slate-600">Sites</dt>
                          <dd className="font-semibold text-slate-900">
                            {plan.max_sites === -1 ? "Unlimited" : plan.max_sites}
                          </dd>
                        </div>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                          <dt className="text-slate-600">Team seats</dt>
                          <dd className="font-semibold text-slate-900">
                            {plan.max_seats === -1 ? "Unlimited" : plan.max_seats}
                          </dd>
                        </div>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                          <dt className="text-slate-600">Data retention</dt>
                          <dd className="font-semibold text-slate-900">
                            {plan.data_retention_days} days
                          </dd>
                        </div>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
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

                      {/* Not included — derived from the API's entitlement
                          flags so it can't drift from what the plan grants. */}
                      {(() => {
                        const missing = Object.entries(ENTITLEMENT_LABELS)
                          .filter(([key]) => plan.entitlements?.[key] === false)
                          .map(([, label]) => label);
                        if (!missing.length) return null;
                        return (
                          <div className="mt-6 border-t border-slate-100 pt-6">
                            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                              Not included
                            </p>
                            <ul className="mt-4 space-y-3">
                              {missing.map((label) => (
                                <li
                                  key={label}
                                  className="flex items-start gap-2.5 text-sm text-slate-500"
                                >
                                  <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                                  <span>{label}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })()}

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
            <div className="mx-auto max-w-7xl overflow-x-auto">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Compare credits and access
              </h2>
              <p className="mt-2 text-slate-600">
                Only the details that affect your plan choice.
              </p>

              <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full min-w-[560px]">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/60">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                        Plan details
                      </th>
                      {plans.map((plan, index) => (
                        <th
                          key={plan.id}
                          className="px-6 py-4 text-center text-sm font-semibold text-slate-900"
                        >
                          <span className="inline-flex items-baseline gap-2">
                            {plan.name}
                            {isHighlighted(plan) && (
                              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-purple-600">
                                Recommended
                              </span>
                            )}
                          </span>
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
                            className="px-6 py-4 text-center text-sm font-medium text-slate-900"
                          >
                            {row.render(plan)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
