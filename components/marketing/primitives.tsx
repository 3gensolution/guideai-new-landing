import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Accent system — monochrome purple + white (Supademo-style).         */
/* All brand accent keys resolve to purple; emerald and rose remain    */
/* only for success/failure semantics. No gradients anywhere.          */
/* ------------------------------------------------------------------ */

export type Accent =
  | "indigo"
  | "violet"
  | "cyan"
  | "emerald"
  | "amber"
  | "rose";

type AccentStyles = {
  text: string;
  textDark: string;
  tile: string;
  tileDark: string;
  check: string;
  checkDark: string;
  pill: string;
  numberBadge: string;
};

const purple: AccentStyles = {
  text: "text-purple-600",
  textDark: "text-purple-300",
  tile: "bg-purple-100 text-purple-700",
  tileDark: "bg-purple-500/20 text-purple-300",
  check: "bg-purple-100 text-purple-700",
  checkDark: "bg-purple-500/20 text-purple-300",
  pill: "border-purple-200 bg-purple-50 text-purple-700",
  numberBadge: "border-purple-200 bg-purple-100 text-purple-700",
};

const emerald: AccentStyles = {
  text: "text-emerald-600",
  textDark: "text-emerald-300",
  tile: "bg-emerald-100 text-emerald-700",
  tileDark: "bg-emerald-500/20 text-emerald-300",
  check: "bg-emerald-100 text-emerald-700",
  checkDark: "bg-emerald-500/20 text-emerald-300",
  pill: "border-emerald-200 bg-emerald-50 text-emerald-700",
  numberBadge: "border-emerald-200 bg-emerald-100 text-emerald-700",
};

const rose: AccentStyles = {
  text: "text-rose-600",
  textDark: "text-rose-300",
  tile: "bg-rose-100 text-rose-700",
  tileDark: "bg-rose-500/20 text-rose-300",
  check: "bg-rose-100 text-rose-700",
  checkDark: "bg-rose-500/20 text-rose-300",
  pill: "border-rose-200 bg-rose-50 text-rose-700",
  numberBadge: "border-rose-200 bg-rose-100 text-rose-700",
};

export const accents: Record<Accent, AccentStyles> = {
  indigo: purple,
  violet: purple,
  cyan: purple,
  amber: purple,
  emerald,
  rose,
};

/* Uniform purple — no hue cycling in the monochrome system */
export const accentCycle: Accent[] = ["indigo"];

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Typography                                                          */
/* ------------------------------------------------------------------ */

export function Eyebrow({
  children,
  dark = false,
  accent = "indigo",
}: {
  children: React.ReactNode;
  dark?: boolean;
  accent?: Accent;
}) {
  return (
    <p
      className={cn(
        "font-mono text-sm font-semibold uppercase tracking-[0.2em]",
        dark ? accents[accent].textDark : accents[accent].text
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  align = "left",
  accent = "indigo",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  accent?: Accent;
  className?: string;
}) {
  return (
    <div
      data-reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Eyebrow dark={dark} accent={accent}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl",
          dark ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-pretty text-xl leading-relaxed",
            dark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Small pieces                                                        */
/* ------------------------------------------------------------------ */

export function CheckItem({
  children,
  dark = false,
  accent = "indigo",
}: {
  children: React.ReactNode;
  dark?: boolean;
  accent?: Accent;
}) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={cn(
          "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
          dark ? accents[accent].checkDark : accents[accent].check
        )}
      >
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
      <span
        className={cn(
          "text-base leading-relaxed",
          dark ? "text-slate-300" : "text-slate-600"
        )}
      >
        {children}
      </span>
    </li>
  );
}

export function PillBadge({
  children,
  accent = "indigo",
  className,
}: {
  children: React.ReactNode;
  accent?: Accent;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-semibold",
        accents[accent].pill,
        className
      )}
    >
      {children}
    </span>
  );
}

export function ArrowLink({
  href,
  children,
  dark = false,
  accent = "indigo",
  className,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
  accent?: Accent;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-base font-bold transition",
        dark ? accents[accent].textDark : accents[accent].text,
        className
      )}
    >
      {children}
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
