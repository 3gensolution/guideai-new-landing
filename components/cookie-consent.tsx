"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

/**
 * NDPR / NDPA-compliant cookie consent.
 *
 * - Analytics (non-essential) does NOT load until the visitor opts in.
 * - Consent is explicit (Accept / Reject), never pre-selected.
 * - The choice is stored and can be withdrawn at any time via the footer
 *   "Cookie settings" link, which dispatches `open-cookie-settings`.
 */

const STORAGE_KEY = "3guide-cookie-consent";
type Consent = "accepted" | "rejected";

function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "accepted" || v === "rejected" ? v : null;
}

export function CookieConsent() {
  // undefined = not yet read (SSR); null = no choice made
  const [consent, setConsent] = useState<Consent | null | undefined>(undefined);

  useEffect(() => {
    setConsent(readConsent());
    const reopen = () => setConsent(null);
    window.addEventListener("open-cookie-settings", reopen);
    return () => window.removeEventListener("open-cookie-settings", reopen);
  }, []);

  const choose = (value: Consent) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  };

  const analyticsOn =
    consent === "accepted" && process.env.NODE_ENV === "production";

  // Show the banner only once the client has read storage and no choice exists.
  const showBanner = consent === null;

  return (
    <>
      {analyticsOn && <Analytics />}

      {showBanner && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-[9998] px-4 pb-4 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md sm:px-0"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl shadow-plum/20">
            <h2 className="font-display text-lg font-bold tracking-tight text-slate-900">
              We value your privacy
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              We use cookies to run 3Guide and, with your consent, to understand
              how the site is used. You can withdraw consent anytime. Read our{" "}
              <Link
                href="/policy"
                className="font-semibold text-purple-600 underline underline-offset-2 hover:text-purple-700"
              >
                Privacy &amp; Cookie Policy
              </Link>
              .
            </p>

            {/* Explicit cookie categories */}
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 px-3 py-2">
                <span className="font-medium text-slate-700">
                  Essential cookies
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Always on
                </span>
              </li>
              <li className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 px-3 py-2">
                <span className="font-medium text-slate-700">
                  Analytics cookies
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-purple-600">
                  Optional
                </span>
              </li>
            </ul>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold tracking-tight text-white transition-colors duration-300 hover:bg-purple-700"
              >
                Accept Cookies
              </button>
              <button
                type="button"
                onClick={() => choose("rejected")}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold tracking-tight text-slate-800 transition-colors duration-300 hover:bg-slate-50"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
