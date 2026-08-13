"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "./primitives";
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
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full bg-purple-700/30 blur-3xl"
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left column — bold title (Everstage layout) */}
          <div data-reveal>
            <p className="kicker inline-flex items-center gap-2.5 text-purple-300">
              <span aria-hidden className="h-px w-6 bg-white/30" />
              FAQ
            </p>
            <h2 className="font-display display-tight text-gradient-light mt-6 text-balance text-4xl font-bold sm:text-5xl">
              {title}
            </h2>
            {description && (
              <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-purple-100/70">
                {description}
              </p>
            )}
          </div>

          {/* Right column — bold accordion divided by hairlines */}
          <div data-reveal data-reveal-delay="0.1">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={item.question}
                  className="border-b border-white/10 first:border-t"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className={cn(
                        "text-lg font-bold tracking-tight transition-colors sm:text-xl",
                        isOpen ? "text-white" : "text-purple-50"
                      )}
                    >
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-6 w-6 shrink-0 transition-transform duration-300",
                        isOpen
                          ? "rotate-180 text-purple-300"
                          : "text-purple-300/60"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-7 pr-10 text-base leading-relaxed text-purple-100/75">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
