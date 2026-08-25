"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

const STORAGE_KEY = "3guide.consent.analytics";

type Choice = "granted" | "denied";

/**
 * NDPA 2023 (§§25–26) requires prior, freely given, opt-in consent before
 * setting non-essential cookies or running analytics. So:
 *   - nothing is loaded until the visitor actively accepts;
 *   - declining is exactly as easy as accepting (no dark pattern);
 *   - the choice is recorded and can be withdrawn at any time.
 * <Analytics /> is mounted ONLY after an explicit "granted".
 */
export function CookieConsent() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "granted" || stored === "denied") setChoice(stored);
    } catch {
      /* private mode / storage blocked — treat as no consent yet */
    }
    setReady(true);
  }, []);

  const decide = (next: Choice) => {
    setChoice(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* non-fatal: consent simply won't persist across sessions */
    }
  };

  return (
    <>
      {choice === "granted" && process.env.NODE_ENV === "production" && (
        <Analytics />
      )}

      {ready && choice === null && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed bottom-4 left-4 right-4 z-[100] rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:left-auto sm:right-6 sm:max-w-sm sm:p-6"
        >
          <p className="text-sm leading-relaxed text-slate-700">
            We use optional analytics cookies to understand how the site is
            used. They&apos;re off until you accept. See our{" "}
            <Link
              href="/policy"
              className="font-medium text-purple-700 underline underline-offset-4"
            >
              privacy policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => decide("granted")}
              className="inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-purple-500"
            >
              Accept analytics
            </button>
            <button
              type="button"
              onClick={() => decide("denied")}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-medium text-slate-800 transition hover:border-slate-400"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/** Lets the policy page offer a genuine withdrawal path. */
export function resetCookieConsent() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* nothing to clear */
  }
}
