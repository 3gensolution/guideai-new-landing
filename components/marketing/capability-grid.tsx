import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Optional small label under the title, e.g. the fix a problem maps to. */
  tag?: string;
}

/** The icon-card grid used on every product page. */
export function CapabilityGrid({
  items,
  columns = 3,
  className,
}: {
  items: Capability[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  return (
    <div
      data-stagger
      className={cn(
        "grid gap-6 sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
        columns === 4 && "lg:grid-cols-4",
        className
      )}
    >
      {items.map((cap) => (
        <div
          key={cap.title}
          className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-950/10"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-700 ring-1 ring-purple-100">
            <cap.icon className="h-5 w-5" />
          </span>
          <h3 className="mt-4 text-base font-semibold text-slate-900">
            {cap.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
            {cap.description}
          </p>
          {cap.tag && (
            <p className="mt-4 border-t border-slate-100 pt-3 text-xs font-medium text-purple-700">
              {cap.tag}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
