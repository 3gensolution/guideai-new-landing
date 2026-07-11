"use client";

import { useRef, useState } from "react";
import Link from "next/link";
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
          .timeline({ defaults: { ease: "power3.out" } })
          .fromTo(
            "[data-hero='title']",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.9 }
          )
          .fromTo(
            "[data-hero='sub']",
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, duration: 0.7 },
            "-=0.55"
          )
          .fromTo(
            "[data-hero='ctas'] > *",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.55, stagger: 0.1 },
            "-=0.45"
          )
          .fromTo(
            "[data-hero='note']",
            { opacity: 0 },
            { opacity: 1, duration: 0.5 },
            "-=0.25"
          )
          .fromTo(
            "[data-hero='demo']",
            { opacity: 0, y: 56, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, duration: 1 },
            "-=0.4"
          );
      });
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      className="relative overflow-hidden bg-white pb-20 pt-36 sm:pt-44"
    >
      {/* Faint dot texture, flat — no gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(147,51,234,0.14) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(60rem 30rem at 40% 0%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(60rem 30rem at 40% 0%, black, transparent 75%)",
        }}
      />

      <Container className="relative">
        <div className="max-w-3xl">
          <h1
            data-hero="title"
            className="text-balance text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
          >
            Turn every user into a{" "}
            <span className="text-purple-600">power user</span>
          </h1>

          <p
            data-hero="sub"
            className="mt-8 max-w-2xl text-pretty text-xl leading-relaxed text-slate-600"
          >
            3Guide is the AI-first product adoption platform for B2B SaaS.
            Build click-by-click guides in minutes, answer questions with AI
            trained on your product, and let a copilot complete tasks for your
            users — right in the browser.
          </p>

          <div
            data-hero="ctas"
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href={DASHBOARD_URL}
              target="_blank"
              className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-9 py-4 text-base font-bold text-white shadow-lg shadow-purple-600/25 transition hover:-translate-y-0.5 hover:bg-purple-500 hover:shadow-xl hover:shadow-purple-600/30"
            >
              Start free
            </Link>
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-9 py-4 text-base font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-purple-200 hover:bg-purple-50"
            >
              Talk to us
            </button>
          </div>

          <p data-hero="note" className="mt-6 text-base text-slate-500">
            Free up to 1,000 monthly active users · One-snippet install · No
            credit card required
          </p>
        </div>
      </Container>

      {/* Demo — same width as the floating navbar */}
      <div data-hero="demo" className="relative mt-16 px-4">
        <div className="mx-auto max-w-6xl rounded-2xl border-2 border-purple-100 bg-white p-2 shadow-2xl shadow-purple-900/15">
          <DemoEmbed />
        </div>
      </div>

      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
    </section>
  );
}
