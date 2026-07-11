"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container, Section, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection({
  items,
  title = "Frequently asked questions",
  description,
}: {
  items: FaqItem[];
  title?: string;
  description?: string;
}) {
  const [open, setOpen] = useState<number>(0);

  return (
    <Section className="bg-purple-50/60">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title={title}
          description={description}
          align="center"
        />
        <div
          data-reveal
          data-reveal-delay="0.1"
          className="mx-auto mt-14 max-w-3xl space-y-4"
        >
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.question}
                className={cn(
                  "overflow-hidden rounded-2xl border-2 bg-white transition-all duration-300",
                  isOpen
                    ? "border-purple-300 shadow-lg shadow-purple-900/10"
                    : "border-slate-200 hover:border-purple-200 hover:bg-purple-50/40"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-7 py-6 text-left"
                >
                  <span className="text-lg font-bold text-slate-900">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                      isOpen
                        ? "rotate-180 bg-purple-600 text-white"
                        : "bg-purple-100 text-purple-700"
                    )}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-7 pr-16 text-base leading-relaxed text-slate-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
