"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import { ContactFormDialog } from "@/components/contact-form-dialog";
import { DemoEmbed } from "@/components/marketing/demo-embed";
import { Container } from "@/components/marketing/primitives";
import { HeroStreaks } from "@/components/marketing/hero-streaks";
import { DASHBOARD_URL } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";

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
          <p
            data-hero="sub"
            className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[#e8a56d]"
          >
            The digital adoption agent
          </p>

          <h1 className="font-display mt-7 text-display text-white">
            <span className="block overflow-hidden pb-[0.1em]">
              <span data-hero="line" className="block text-[#f0c9a0]">
                An expert beside
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.1em]">
              <span data-hero="line" className="block text-[#f0c9a0]">
                every user.
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.1em]">
              <span data-hero="line" className="block">
                In every product.
              </span>
            </span>
          </h1>

          <p
            data-hero="sub"
            className="mx-auto mt-8 max-w-2xl text-pretty text-lead text-slate-300"
          >
            3Guide is an AI agent that knows your software inside out. It shows
            your customers and staff how, does the task when they&apos;d rather
            not learn, and tells you where they struggle.
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
              Start free
            </Link>
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center justify-center border border-white/25 px-9 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition duration-300 hover:border-white/50 hover:bg-white/5"
            >
              Book a demo
            </button>
          </div>

          {/* The product chain, like a capture → video → guide strip: the four
              products in the order a problem travels through them. */}
          <div data-hero="rating" className="mt-12">
            <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 xl:-mx-28 xl:flex-nowrap">
              {PRODUCTS.map((p, i) => (
                <li key={p.key} className="flex items-center gap-2">
                  <Link
                    href={p.href}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-slate-200 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
                  >
                    <p.icon className="h-4 w-4 text-[#f0c9a0]" />
                    <span className="font-medium">{p.name}</span>
                    <span className="hidden text-slate-400 xl:inline">
                      · {p.job}
                    </span>
                  </Link>
                  {i < PRODUCTS.length - 1 && (
                    <ArrowRight
                      aria-hidden
                      className="h-4 w-4 shrink-0 text-slate-500 max-sm:hidden"
                    />
                  )}
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm text-slate-400">
              Use one, or all four. Free to start.
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
