"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Global scroll effects, driven by data attributes so page sections can stay
 * server components:
 *
 *   data-reveal            — fade-up when the element enters the viewport
 *   data-reveal-delay="…"  — optional delay in seconds
 *   data-stagger           — children fade-up one after another
 *   data-parallax="0.15"   — element drifts vertically while scrolling (speed)
 *   data-parallax-img      — image inside an overflow-hidden frame gets a
 *                            slow scrub drift (pre-scaled to avoid gaps)
 */
export function ScrollFx() {
  const pathname = usePathname();

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: parseFloat(el.dataset.revealDelay || "0"),
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        gsap.fromTo(
          group.children,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.09,
            scrollTrigger: { trigger: group, start: "top 86%", once: true },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.15");
        gsap.fromTo(
          el,
          { y: () => speed * 120 },
          {
            y: () => -speed * 120,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax-img]").forEach((el) => {
        gsap.set(el, { scale: 1.12 });
        gsap.fromTo(
          el,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      });
    });

    // Recalculate trigger positions once images settle the layout.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 1200);

    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(t);
      mm.revert();
    };
  }, [pathname]);

  return null;
}
