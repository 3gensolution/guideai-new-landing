import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero-mountains.jpg"
          alt="Mountain landscape"
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Get started free
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to turn friction into activation?
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <p className="max-w-md text-zinc-400 lg:text-right">
              See how GuideAI helps B2B SaaS teams ship onboarding in days,
              reduce support load, and improve trial-to-paid conversion with
              AI-powered in-app guidance.
            </p>
            <Link
              href={`${process.env.NEXT_PUBLIC_BASE_URL}`}
              target="_blank"
              className="bg-white px-8 text-zinc-900 hover:bg-white/90 py-3 rounded-md"
            >
              Start free trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
