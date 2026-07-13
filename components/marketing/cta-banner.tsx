import Link from "next/link";
import { Container } from "./primitives";
import { DASHBOARD_URL } from "@/lib/site";

export function CtaBanner({
  title = "Ready to turn friction into activation?",
  description = "Ship your first guide in minutes, answer questions automatically, and let the copilot handle the rest.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div
          data-reveal
          className="relative overflow-hidden rounded-3xl bg-purple-600 px-8 py-20 text-center sm:px-16"
        >
          {/* Flat decorative rings — no gradients */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border-[3rem] border-purple-500/40"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full border-[3rem] border-purple-500/40"
          />

          <h2 className="relative mx-auto max-w-3xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl text-pretty text-xl text-purple-100">
            {description}
          </p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={DASHBOARD_URL}
              target="_blank"
              className="inline-flex items-center justify-center rounded-xl bg-white px-9 py-4 text-base font-bold text-purple-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-purple-50"
            >
              Start free
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/40 px-9 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              See pricing
            </Link>
          </div>
          <p className="relative mt-7 text-base text-purple-200">
            No credit card required · Set up with one snippet
          </p>
        </div>
      </Container>
    </section>
  );
}
