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

/* Light-theme accent tokens. "Light" variant targets the white canvas;
   "*Dark" variant targets dark/purple sections (footer, copilot). */
const purple: AccentStyles = {
  text: "text-purple-600",
  textDark: "text-purple-200",
  tile: "bg-purple-100 text-purple-700",
  tileDark: "bg-white/10 text-purple-100 ring-1 ring-white/15",
  check: "bg-purple-100 text-purple-700",
  checkDark: "bg-white/10 text-purple-100",
  pill: "border-purple-200 bg-purple-50 text-purple-700",
  numberBadge: "border-purple-200 bg-purple-100 text-purple-700",
};

const emerald: AccentStyles = {
  text: "text-emerald-600",
  textDark: "text-emerald-200",
  tile: "bg-emerald-100 text-emerald-700",
  tileDark: "bg-white/10 text-emerald-100 ring-1 ring-white/15",
  check: "bg-emerald-100 text-emerald-700",
  checkDark: "bg-white/10 text-emerald-100",
  pill: "border-emerald-200 bg-emerald-50 text-emerald-700",
  numberBadge: "border-emerald-200 bg-emerald-100 text-emerald-700",
};

const rose: AccentStyles = {
  text: "text-rose-600",
  textDark: "text-rose-200",
  tile: "bg-rose-100 text-rose-700",
  tileDark: "bg-white/10 text-rose-100 ring-1 ring-white/15",
  check: "bg-rose-100 text-rose-700",
  checkDark: "bg-white/10 text-rose-100",
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
        "inline-flex items-center gap-2.5 kicker",
        dark ? accents[accent].textDark : accents[accent].text
      )}
    >
      <span
        aria-hidden
        className={cn("h-px w-6", dark ? "bg-white/30" : "bg-purple-400/50")}
      />
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
          "font-display display-tight mt-6 text-balance text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-6xl",
          dark ? "text-gradient-light" : "text-gradient"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-pretty text-lg leading-relaxed sm:text-xl",
            dark ? "text-slate-300" : "text-slate-600",
            align === "center" && "mx-auto"
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
        "group inline-flex items-center gap-2 text-base font-semibold tracking-tight transition",
        dark ? accents[accent].textDark : accents[accent].text,
        className
      )}
    >
      <span className="link-underline">{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5" />
    </Link>
  );
}
