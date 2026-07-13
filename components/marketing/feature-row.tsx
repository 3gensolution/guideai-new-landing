import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Accent,
  ArrowLink,
  CheckItem,
  Eyebrow,
  PillBadge,
} from "./primitives";

export interface FeatureRowProps {
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  image: string;
  imageAlt: string;
  /** Small proof chip shown under the bullets, e.g. "↓ 30% fewer how-do-I tickets" */
  stat?: string;
  link?: { href: string; label: string };
  reverse?: boolean;
  badges?: string[];
  accent?: Accent;
}

export function FeatureRow({
  eyebrow,
  title,
  description,
  bullets = [],
  image,
  imageAlt,
  stat,
  link,
  reverse = false,
  badges = [],
  accent = "indigo",
}: FeatureRowProps) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div data-reveal className={cn(reverse && "lg:order-2")}>
        {eyebrow && <Eyebrow accent={accent}>{eyebrow}</Eyebrow>}
        <h3 className="mt-4 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h3>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-slate-600">
          {description}
        </p>
        {bullets.length > 0 && (
          <ul className="mt-7 space-y-4">
            {bullets.map((b) => (
              <CheckItem key={b} accent={accent}>
                {b}
              </CheckItem>
            ))}
          </ul>
        )}
        {badges.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-2">
            {badges.map((b) => (
              <PillBadge key={b} accent={accent}>
                {b}
              </PillBadge>
            ))}
          </div>
        )}
        {stat && (
          <p className="mt-7 inline-flex items-center gap-2 rounded-lg bg-emerald-100 px-4 py-2.5 font-mono text-base font-bold text-emerald-700">
            {stat}
          </p>
        )}
        {link && (
          <div className="mt-7">
            <ArrowLink href={link.href} accent={accent}>
              {link.label}
            </ArrowLink>
          </div>
        )}
      </div>
      <div
        data-reveal
        data-reveal-delay="0.12"
        className={cn("relative", reverse && "lg:order-1")}
      >
        <div className="overflow-hidden rounded-2xl border-2 border-purple-100 bg-white shadow-2xl shadow-purple-900/10">
          <Image
            src={image}
            alt={imageAlt}
            width={1200}
            height={750}
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
