"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Star } from "lucide-react";
import { ContactFormDialog } from "@/components/contact-form-dialog";
import { DemoEmbed } from "@/components/marketing/demo-embed";
import { Container } from "@/components/marketing/primitives";
import { HeroStreaks } from "@/components/marketing/hero-streaks";
import { DASHBOARD_URL } from "@/lib/site";

export function HomeHero() {
  const [contactOpen, setContactOpen] = useState(false);
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .fromTo(
            "[data-hero='streak']",
            { opacity: 0, scaleX: 0.4 },
            { opacity: 1, scaleX: 1, duration: 1.1, stagger: 0.05 }
          )
          .fromTo(
            "[data-hero='line']",
            { opacity: 0, yPercent: 110 },
            { opacity: 1, yPercent: 0, duration: 1, stagger: 0.11 },
            "-=0.8"
          )
          .fromTo(
            "[data-hero='sub']",
            { opacity: 0, y: 22 },
            { opacity: 1, y: 0, duration: 0.8 },
            "-=0.6"
          )
          .fromTo(
            "[data-hero='ctas'] > *",
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.09 },
            "-=0.5"
          )
          .fromTo(
            "[data-hero='rating']",
            { opacity: 0 },
            { opacity: 1, duration: 0.7 },
            "-=0.35"
          )
          .fromTo(
            "[data-hero='stage']",
            { opacity: 0, y: 60, scale: 0.97 },
            { opacity: 1, y: 0, scale: 1, duration: 1.1 },
            "-=0.45"
          );
      });
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      className="relative overflow-hidden bg-ink pb-24 pt-36 sm:pt-44"
    >
      {/* Warm bloom bleeding in from the lower corners, as on the reference. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 32rem at 12% 96%, rgba(176,74,66,0.30), transparent 62%), radial-gradient(56rem 30rem at 88% 88%, rgba(150,60,80,0.24), transparent 62%)",
        }}
      />

      <HeroStreaks />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-display text-white">
            <span className="block overflow-hidden pb-[0.1em]">
              <span data-hero="line" className="block text-[#f0c9a0]">
                Software that
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.1em]">
              <span data-hero="line" className="block text-[#f0c9a0]">
                explains itself.
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.1em]">
              <span data-hero="line" className="block">
                And then operates itself.
              </span>
            </span>
          </h1>

          <p
            data-hero="sub"
            className="mx-auto mt-8 max-w-2xl text-pretty text-lead text-slate-300"
          >
            One line of code puts an AI helper inside your product. It{" "}
            <span className="font-medium text-white">shows people how</span>,{" "}
            <span className="font-medium text-white">answers their questions</span>, and{" "}
            <span className="font-medium text-white">completes the task for them</span>{" "}
            — so you ship fewer tickets, faster onboarding, and hard data on
            exactly where your product confuses people.
          </p>

          <div
            data-hero="ctas"
            className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href={DASHBOARD_URL}
              target="_blank"
              className="inline-flex items-center justify-center bg-[#e8a56d] px-9 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#2b1420] transition duration-300 hover:bg-[#efb684]"
            >
              Get started
            </Link>
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center justify-center border border-white/25 px-9 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition duration-300 hover:border-white/50 hover:bg-white/5"
            >
              Talk to us
            </button>
          </div>

          <div
            data-hero="rating"
            className="mt-9 flex flex-col items-center justify-center gap-2"
          >
            <span className="flex items-center gap-2.5">
              <span className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
            </span>
            <p className="text-sm font-medium text-slate-300">
              Loved by product, success &amp; support teams
            </p>
          </div>
        </div>
      </Container>

      {/* Product stage sits on the dark ground, lifted off it by its own glow. */}
      <Container className="relative mt-20">
        <div data-hero="stage" className="relative">
          <div
            aria-hidden
            className="absolute -inset-x-8 -top-6 bottom-8 rounded-[2.5rem] bg-white/[0.06] blur-2xl"
          />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/50">
            <DemoEmbed />
          </div>
        </div>
      </Container>

      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
    </section>
  );
}
