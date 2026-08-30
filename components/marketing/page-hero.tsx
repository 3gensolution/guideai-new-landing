import Link from "next/link";
import { Container } from "./primitives";
import { HeroStreaks } from "./hero-streaks";
import { DASHBOARD_URL } from "@/lib/site";

/**
 * Shared hero for every sub-page. Same dark-plum treatment as the homepage
 * hero so the whole site opens on one ground: warm bloom, floating streaks,
 * bold Figtree headline, solid amber primary CTA.
 */
export function PageHero({
  badge,
  title,
  description,
  primaryCta = { href: DASHBOARD_URL, label: "Get started", external: true },
  secondaryCta = { href: "/pricing", label: "See pricing" },
  children,
}: {
  badge: string;
  title: React.ReactNode;
  description: string;
  primaryCta?: { href: string; label: string; external?: boolean };
  secondaryCta?: { href: string; label: string; external?: boolean };
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-36 sm:pt-44">
      {/* Warm bloom from the lower corners, as on the homepage hero. */}
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
        <div data-reveal className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-[#f0c9a0]">
            {badge}
          </span>
          <h1
            data-mask-reveal
            className="font-display mt-8 text-balance text-title text-white"
          >
            {title}
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-lead text-slate-300">
            {description}
          </p>
          <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={primaryCta.href}
              target={primaryCta.external ? "_blank" : undefined}
              className="inline-flex items-center justify-center bg-[#e8a56d] px-9 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#2b1420] transition duration-300 hover:bg-[#efb684]"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              target={secondaryCta.external ? "_blank" : undefined}
              className="inline-flex items-center justify-center border border-white/25 px-9 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition duration-300 hover:border-white/50 hover:bg-white/5"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
        {children}
      </Container>
    </section>
  );
}
