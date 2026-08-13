"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Centered-peek card carousel built on Embla (existing dependency).
 * Accessible: arrow buttons, dot pagination with current position, keyboard
 * (Embla focuses slides), swipe, and reduced-motion (no glide animation).
 */
export function CardCarousel({
  children,
  ariaLabel,
  tone = "dark",
}: {
  children: React.ReactNode[];
  ariaLabel: string;
  tone?: "dark" | "light";
}) {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [emblaRef, embla] = useEmblaCarousel({
    align: "center",
    loop: true,
    containScroll: false,
    duration: reduce ? 0 : 24,
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (embla) setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    setSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla, onSelect]);

  const controls =
    tone === "dark"
      ? "border-white/25 bg-white/5 text-white hover:bg-white hover:text-purple-700"
      : "border-slate-300 bg-white text-slate-700 hover:bg-purple-600 hover:text-white hover:border-purple-600";
  const dotOn = tone === "dark" ? "bg-white" : "bg-purple-600";
  const dotOff =
    tone === "dark" ? "bg-white/40 hover:bg-white/60" : "bg-slate-300 hover:bg-slate-400";

  return (
    <div role="group" aria-roledescription="carousel" aria-label={ariaLabel}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {children.map((child, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${children.length}`}
              className={cn(
                "min-w-0 shrink-0 grow-0 basis-[86%] px-3 transition-[opacity,filter,transform] duration-500 sm:basis-[70%] lg:basis-[58%]",
                selected === i
                  ? "opacity-100"
                  : "opacity-45 blur-[3px] [transform:scale(0.92)]"
              )}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => embla?.scrollPrev()}
          aria-label="Previous slide"
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300",
            controls
          )}
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => embla?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={selected === i}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                selected === i ? cn("w-8", dotOn) : cn("w-2", dotOff)
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => embla?.scrollNext()}
          aria-label="Next slide"
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300",
            controls
          )}
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
