import Link from "next/link";
import { ArrowRight, GraduationCap, LifeBuoy, Rocket } from "lucide-react";
import { Container, Section } from "./primitives";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Pillar strip — the connective tissue across every product page.     */
/* Adoption · Training · Support. Shows which pillar this page serves,  */
/* and links to the other two so the whole site reads as one system.   */
/* ------------------------------------------------------------------ */

export type Pillar = "adoption" | "training" | "support";

interface PillarDef {
  key: Pillar;
  label: string;
  icon: typeof Rocket;
  tagline: string;
  href: string;
}

const PILLARS: PillarDef[] = [
  {
    key: "adoption",
    label: "Adoption",
    icon: Rocket,
    tagline: "Guide users to their first win, and every one after.",
    href: "/guides",
  },
  {
    key: "training",
    label: "Training",
    icon: GraduationCap,
    tagline: "Teach clients and staff inside the product itself.",
    href: "/use-cases/client-and-employee-training",
  },
  {
    key: "support",
    label: "Support",
    icon: LifeBuoy,
    tagline: "Answer questions before they become tickets.",
    href: "/support-desk",
  },
];

export function PillarStrip({ active }: { active: Pillar }) {
  return (
    <Section className="border-y border-slate-200/70 bg-canvas-deep py-16 sm:py-20">
      <Container>
        <p className="text-center font-mono text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
          One platform · Three jobs
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-balance text-center font-display text-sub font-semibold text-slate-900">
          Adoption, training, and support — working together
        </h2>
        <div
          data-stagger
          className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-3"
        >
          {PILLARS.map((p) => {
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
                    You're here
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
                <h3 className="mt-5 text-xl font-medium text-slate-900">
                  {p.label}
                </h3>
                <p className="mt-2 flex-1 text-base leading-relaxed text-slate-600">
                  {p.tagline}
                </p>
                {!isActive && (
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-purple-600">
                    Explore {p.label.toLowerCase()}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
