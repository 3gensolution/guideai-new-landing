import Link from "next/link";
import { Container, PillBadge } from "./primitives";
import { DASHBOARD_URL } from "@/lib/site";

export function PageHero({
  badge,
  title,
  description,
  primaryCta = { href: DASHBOARD_URL, label: "Start free", external: true },
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
    <section className="relative overflow-hidden bg-white pb-16 pt-32 sm:pt-40">
      {/* Faint dot texture, flat — no gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(147,51,234,0.14) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(55rem 24rem at 50% 0%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(55rem 24rem at 50% 0%, black, transparent 75%)",
        }}
      />
      <Container className="relative">
        <div data-reveal className="mx-auto max-w-4xl text-center">
          <PillBadge>{badge}</PillBadge>
          <h1 className="mt-7 text-balance text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-xl leading-relaxed text-slate-600">
            {description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={primaryCta.href}
              target={primaryCta.external ? "_blank" : undefined}
              className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-9 py-4 text-base font-bold text-white shadow-lg shadow-purple-600/25 transition hover:-translate-y-0.5 hover:bg-purple-500 hover:shadow-xl hover:shadow-purple-600/30"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              target={secondaryCta.external ? "_blank" : undefined}
              className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-9 py-4 text-base font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-purple-200 hover:bg-purple-50"
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
