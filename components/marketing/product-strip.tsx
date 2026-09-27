import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "./primitives";
import { PRODUCTS, type ProductKey } from "@/lib/products";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Product strip: the connective tissue across every product page.     */
/* Shows the four products, marks the one this page is about, and     */
/* says what each adds, so the site reads as one system.               */
/* ------------------------------------------------------------------ */

export function ProductStrip({ active }: { active?: ProductKey }) {
  return (
    <Section className="border-y border-slate-200/70 bg-canvas-deep py-16 sm:py-20">
      <Container>
        <p className="text-center font-mono text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
          Use one, or all four
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-balance text-center font-display text-sub font-semibold text-slate-900">
          Each works on its own. Together, they cover the whole customer journey.
        </h2>
        <div
          data-stagger
          className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PRODUCTS.map((p) => {
            const isActive = p.key === active;
            return (
              <Link
                key={p.key}
                href={p.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group relative flex flex-col rounded-2xl border-2 p-6 transition duration-300",
                  isActive
                    ? "border-purple-400 bg-white shadow-xl shadow-purple-900/10"
                    : "border-purple-100 bg-white/60 hover:-translate-y-1 hover:border-purple-300 hover:bg-white hover:shadow-lg hover:shadow-purple-900/10"
                )}
              >
                {isActive && (
                  <span className="absolute right-4 top-4 rounded-full bg-purple-600 px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-wider text-white">
                    You&apos;re here
                  </span>
                )}
                <span
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl transition group-hover:scale-110",
                    isActive
                      ? "bg-purple-600 text-white"
                      : "bg-purple-100 text-purple-700"
                  )}
                >
                  <p.icon className="h-6 w-6" />
                </span>
                <p className="mt-5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  {p.job}
                </p>
                <h3 className="mt-1 text-xl font-medium text-slate-900">
                  {p.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {p.tagline}
                </p>
                {!isActive && (
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-purple-600">
                    Explore {p.name}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </Link>
            );
          })}
        </div>
        <p className="mt-10 text-center">
          <Link
            href="/#together"
            className="inline-flex items-center gap-1.5 text-base font-medium text-purple-700 underline-offset-4 hover:underline"
          >
            See how they drive adoption together
            <ArrowRight className="h-4 w-4" />
          </Link>
        </p>
      </Container>
    </Section>
  );
}
