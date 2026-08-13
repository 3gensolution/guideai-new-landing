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
    <section className="bg-background py-20 sm:py-24">
      <Container>
        <div
          data-reveal
          className="relative overflow-hidden rounded-3xl bg-purple-700 px-8 py-20 text-center sm:px-16"
        >
          {/* Depth blobs on the purple block */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-purple-500/40 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -right-20 h-96 w-96 rounded-full bg-purple-900/50 blur-3xl"
          />

          <h2 className="font-display display-tight text-gradient-light relative mx-auto max-w-3xl text-balance text-4xl tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl text-pretty text-xl text-purple-100/90">
            {description}
          </p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={DASHBOARD_URL}
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-white px-9 py-4 text-base font-semibold tracking-tight text-purple-700 transition-colors duration-300 hover:bg-purple-50"
            >
              Start free
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-9 py-4 text-base font-semibold tracking-tight text-white transition-colors duration-300 hover:bg-white/10"
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
