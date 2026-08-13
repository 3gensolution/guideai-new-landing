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
    <section className="relative overflow-hidden bg-background pb-16 pt-32 sm:pt-40">
      {/* Quiet grid backdrop + ambient glow */}
      <div
        aria-hidden
        className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[36rem]"
        style={{
          maskImage:
            "radial-gradient(55rem 26rem at 50% 0%, black, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(55rem 26rem at 50% 0%, black, transparent 72%)",
        }}
      />
      <div
        aria-hidden
        className="glow left-1/2 top-[-4rem] h-[26rem] w-[42rem] -translate-x-1/2 opacity-60"
      />
      <Container className="relative">
        <div data-reveal className="mx-auto max-w-4xl text-center">
          <PillBadge>{badge}</PillBadge>
          <h1 className="font-display display-tight text-gradient mt-7 text-balance text-5xl tracking-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-xl leading-relaxed text-slate-600">
            {description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={primaryCta.href}
              target={primaryCta.external ? "_blank" : undefined}
              className="inline-flex items-center justify-center rounded-full bg-purple-600 px-9 py-4 text-base font-semibold tracking-tight text-white transition-colors duration-300 hover:bg-purple-700"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              target={secondaryCta.external ? "_blank" : undefined}
              className="glass inline-flex items-center justify-center rounded-full px-9 py-4 text-base font-semibold tracking-tight text-slate-900 transition-colors duration-300"
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
