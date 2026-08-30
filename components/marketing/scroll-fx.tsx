"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* Niteon's reveal curve — a long, soft settle rather than a bounce. */
const EASE = "cubic-bezier(0.22, 0.61, 0.36, 1)";
const GSAP_EASE = "power3.out";

/**
 * Global scroll effects, driven by data attributes so page sections can stay
 * server components:
 *
 *   data-reveal            — fade-up when the element enters the viewport
 *   data-reveal-delay="…"  — optional delay in seconds
 *   data-stagger           — children fade-up one after another
 *   data-mask-reveal       — headline wipes up behind a clip-path mask
 *   data-counter="1200"    — number counts up to the target on enter
 *   data-counter-suffix    — text appended after the counted value
 *   data-parallax="0.15"   — element drifts vertically while scrolling
 *   data-parallax-img      — image inside an overflow-hidden frame drifts
 *   data-pin-scene         — section pins while its panels cross-fade
 *
 * The `.fx-ready` class on <html> is what actually hides reveal targets
 * (see globals.css). It is added only once GSAP is live, so if this script
 * fails or never runs, every element stays visible.
 */
/* Below this width every effect is off. Reveal animations hide their target
   with `fx-ready` before fading it back in, and on phones that hide lands
   after first paint — content appears, blanks, then fades. Scrub effects made
   it worse by repainting on every scroll frame while the URL bar resized.
   Desktop keeps the motion; phones and tablets render plain static content. */
const DESKTOP = "(min-width: 1024px)";

export function ScrollFx() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const desktop = window.matchMedia(DESKTOP).matches;

    /* Never add fx-ready on mobile: it is the class that hides reveal
       targets, so skipping it leaves everything visible from first paint. */
    if (!reduced && desktop) root.classList.add("fx-ready");

    /* On phones the URL bar collapsing fires a resize with a changed height
       but the same width. Recalculating there yanks positions mid-scroll, so
       only refresh when the width actually changes. */
    ScrollTrigger.config({
      ignoreMobileResize: true,
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    });

    const mm = gsap.matchMedia();
    let rewire: (() => void) | null = null;

    mm.add(`${DESKTOP} and (prefers-reduced-motion: no-preference)`, () => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: GSAP_EASE,
            delay: parseFloat(el.dataset.revealDelay || "0"),
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
            onStart: () => gsap.set(el, { willChange: "transform, opacity" }),
            onComplete: () => gsap.set(el, { willChange: "auto" }),
          }
        );
      });

      /* Runs again whenever new nodes appear, so groups that mount after an
         async fetch (the pricing plans) still animate. Children already wired
         are flagged, so re-running never double-tweens them. */
      const wireStaggers = () => {
        gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
          const fresh = Array.from(group.children).filter(
            (c) => !(c as HTMLElement).dataset.fxWired
          ) as HTMLElement[];
          if (!fresh.length) return;
          fresh.forEach((c) => (c.dataset.fxWired = "1"));

          gsap.fromTo(
            fresh,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: GSAP_EASE,
              stagger: 0.09,
              scrollTrigger: { trigger: group, start: "top 86%", once: true },
              onStart: () =>
                gsap.set(fresh, { willChange: "transform, opacity" }),
              onComplete: () => gsap.set(fresh, { willChange: "auto" }),
            }
          );
        });
      };
      wireStaggers();
      rewire = wireStaggers;

      /* Headline wipe — the one flourish reserved for section titles. */
      gsap.utils.toArray<HTMLElement>("[data-mask-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, clipPath: "inset(0 0 100% 0)", y: 18 },
          {
            opacity: 1,
            clipPath: "inset(0 0 0% 0)",
            y: 0,
            duration: 1.05,
            ease: GSAP_EASE,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });

      /* Stat count-ups — Whatfix's metrics band trick. */
      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
        const target = parseFloat(el.dataset.counter || "0");
        const decimals = (el.dataset.counter || "").split(".")[1]?.length ?? 0;
        const prefix = el.dataset.counterPrefix || "";
        const suffix = el.dataset.counterSuffix || "";
        const obj = { v: 0 };

        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            el.textContent =
              prefix +
              obj.v.toLocaleString("en-US", {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
              }) +
              suffix;
          },
        });
      });

    });

    /* The single cinematic moment: one pinned section whose visual panels
       cross-fade as you scroll through it. Desktop only — pinning on
       touch devices fights native scrolling. */
    /* Scrub-driven effects are desktop-only. On mobile they repaint a scaled
       bitmap on every scroll frame, which reads as flicker, and they fight the
       URL-bar show/hide that fires resize mid-scroll. */
    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
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

        gsap.utils
          .toArray<HTMLElement>("[data-pin-scene]")
          .forEach((scene) => {
            const panels = gsap.utils.toArray<HTMLElement>(
              "[data-pin-panel]",
              scene
            );
            const steps = gsap.utils.toArray<HTMLElement>(
              "[data-pin-step]",
              scene
            );
            if (panels.length < 2) return;

            const setActive = (index: number) => {
              panels.forEach((p, i) =>
                gsap.to(p, {
                  opacity: i === index ? 1 : 0,
                  scale: i === index ? 1 : 0.97,
                  duration: 0.5,
                  ease: GSAP_EASE,
                  overwrite: true,
                })
              );
              steps.forEach((s, i) =>
                s.setAttribute("data-active", String(i === index))
              );
            };

            gsap.set(panels, { opacity: 0, scale: 0.97 });
            setActive(0);

            ScrollTrigger.create({
              trigger: scene,
              start: "top top",
              end: () => `+=${panels.length * 60}%`,
              pin: true,
              scrub: true,
              onUpdate: (self) => {
                const idx = Math.min(
                  panels.length - 1,
                  Math.floor(self.progress * panels.length)
                );
                setActive(idx);
              },
            });
          });
      }
    );

    /* Nothing below this point matters when no triggers exist — refreshing
       and observing the DOM on mobile is pure cost with no effect. Still
       revert the matchMedia context so a resize past 1024px re-wires cleanly. */
    if (!desktop) {
      return () => {
        mm.revert();
        root.classList.remove("fx-ready");
      };
    }

    // Recalculate trigger positions once images settle the layout.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 1200);

    /* Some sections (pricing plans) render only after an async fetch
       resolves, which can be long after that timeout. Without this their
       triggers are measured against a stale layout and the content never
       fades in. Watching the DOM keeps late arrivals animating. */
    let raf = 0;
    const observer = new MutationObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        rewire?.();
        refresh();
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(t);
      cancelAnimationFrame(raf);
      observer.disconnect();
      mm.revert();
      root.classList.remove("fx-ready");
    };
  }, [pathname]);

  return null;
}

export { EASE };
