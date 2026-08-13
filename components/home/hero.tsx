"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ContactFormDialog } from "@/components/contact-form-dialog";
import { DemoEmbed } from "@/components/marketing/demo-embed";
import { Container } from "@/components/marketing/primitives";
import { DASHBOARD_URL } from "@/lib/site";

export function HomeHero() {
  const [contactOpen, setContactOpen] = useState(false);
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power2.out" } })
          .fromTo(
            "[data-hero='note']",
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.7 }
          )
          .fromTo(
            "[data-hero='title']",
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 1.1 },
            "-=0.4"
          )
          .fromTo(
            "[data-hero='sub']",
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.9 },
            "-=0.7"
          )
          .fromTo(
            "[data-hero='ctas'] > *",
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
            "-=0.55"
          )
          .fromTo(
            "[data-hero='demo']",
            { opacity: 0, y: 40, scale: 0.985 },
            { opacity: 1, y: 0, scale: 1, duration: 1.2 },
            "-=0.5"
          );
      });
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      className="relative overflow-hidden bg-plum pt-36 sm:pt-44"
    >
      {/* Depth: soft light streaks + radial glow on the plum canvas */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 h-[26rem] w-[26rem] rounded-full bg-purple-500/25 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/20 blur-[110px]"
      />
      <div
        aria-hidden
        className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-40"
        style={{
          maskImage:
            "radial-gradient(60rem 30rem at 50% 0%, black, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(60rem 30rem at 50% 0%, black, transparent 72%)",
        }}
      />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <p
            data-hero="note"
            className="kicker mx-auto inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-purple-100 backdrop-blur"
          >
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-purple-300" />
            AI-first product adoption
          </p>

          <h1
            data-hero="title"
            className="font-display display-tight mx-auto mt-8 max-w-4xl text-balance text-[3.2rem] font-bold text-white sm:text-6xl lg:text-[5.25rem]"
          >
            Turn Every User
            <br />
            Into A <span className="text-purple-300">Power User.</span>
          </h1>

          <p
            data-hero="sub"
            className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-purple-100/85 sm:text-xl"
          >
            3Guide is the AI-first product adoption platform for B2B SaaS. Build
            guides in minutes, answer questions with AI trained on your product,
            and let a copilot complete tasks right in the browser.
          </p>

          <div
            data-hero="ctas"
            className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href={DASHBOARD_URL}
              target="_blank"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-9 py-4 text-base font-semibold tracking-tight text-plum transition-colors duration-300 hover:bg-purple-50"
            >
              Start free
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                →
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-9 py-4 text-base font-semibold tracking-tight text-white transition-colors duration-300 hover:bg-white/10"
            >
              Talk to us
            </button>
          </div>

          {/* Proof / rating row */}
          <div
            data-hero="note"
            className="mx-auto mt-10 flex flex-col items-center gap-2 text-purple-100/80"
          >
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-purple-300 text-purple-300"
                />
              ))}
              <span className="ml-2 text-sm font-semibold text-white">
                Loved by product & support teams
              </span>
            </div>
            <p className="text-sm">
              Install with one snippet · No credit card required
            </p>
          </div>
        </div>
      </Container>

      {/* Demo sits on a white base that the plum curves into */}
      <div className="relative mt-20">
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 top-24 bg-background"
        />
        <div data-hero="demo" className="relative px-4 pb-20">
          <div className="glass mx-auto max-w-6xl wave-card p-2 shadow-2xl shadow-plum/30">
            <DemoEmbed />
          </div>
        </div>
      </div>

      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
    </section>
  );
}
