"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Facebook, Linkedin, Mail, X } from "lucide-react";
import { ContactFormDialog } from "@/components/contact-form-dialog";
import { DASHBOARD_URL } from "@/lib/site";

const navigation = {
  product: [
    { name: "In-App Guides", href: "/guides" },
    { name: "Guide Pro", href: "/guide-pro" },
    { name: "Guide Studio", href: "/studio" },
    { name: "GuideAI CoPilot", href: "/copilot" },
    { name: "Friction Analytics", href: "/analytics" },
    { name: "Pricing", href: "/pricing" },
  ],
  solutions: [
    { name: "User Onboarding", href: "/use-cases/user-onboarding" },
    {
      name: "Support Ticket Reduction",
      href: "/use-cases/support-ticket-reduction",
    },
  ],
  company: [
    { name: "Contact", href: "mailto:info@3guideai.com" },
    { name: "Privacy Policy", href: "/policy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "X", href: "https://x.com/3guideai", icon: X },
  { name: "Facebook", href: "https://facebook.com/3guideai", icon: Facebook },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/3guideai",
    icon: Linkedin,
  },
];

export function Footer() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <footer className="relative isolate overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute -left-16 top-40 hidden h-[28rem] w-[28rem] opacity-70 lg:block">
          <span className="absolute left-20 top-2 h-64 w-64 rounded-full border-[28px] border-purple-500/20 border-b-transparent border-r-transparent" />
          <span className="absolute left-0 top-32 h-64 w-64 rotate-90 rounded-full border-[28px] border-purple-500/15 border-b-transparent border-r-transparent" />
          <span className="absolute left-56 top-36 h-64 w-64 -rotate-90 rounded-full border-[28px] border-purple-500/15 border-b-transparent border-r-transparent" />
          <span className="absolute left-20 top-68 h-64 w-64 rotate-180 rounded-full border-[28px] border-purple-500/10 border-b-transparent border-r-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <h2 className="mx-auto max-w-4xl text-center text-4xl font-bold leading-[1.05] tracking-normal text-slate-100 sm:text-5xl lg:text-6xl">
            Together, we can make product adoption feel effortless.
          </h2>

          <div className="mt-20 grid gap-12 lg:grid-cols-[1.15fr_2fr] lg:gap-20">
            <div className="max-w-sm">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/logo.jpeg"
                  alt="3Guide logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-xl"
                />
                <span className="text-2xl font-bold tracking-normal text-white">
                  3Guide
                </span>
              </Link>
              <p className="mt-6 text-base font-medium leading-relaxed text-slate-300">
                The AI-first product adoption platform. Guide, answer, and act
                directly inside your product.
              </p>
              <Link
                href="mailto:info@3guideai.com"
                className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-slate-200 underline underline-offset-4 transition hover:text-white"
              >
                <Mail className="h-5 w-5" />
                info@3guideai.com
              </Link>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href={DASHBOARD_URL}
                  className="inline-flex items-center justify-center rounded-md bg-purple-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-purple-950/30 transition hover:bg-purple-500"
                >
                  Start free
                </Link>
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="inline-flex items-center justify-center rounded-md border border-purple-200/70 px-6 py-4 text-base font-bold text-slate-100 transition hover:border-white hover:bg-white hover:text-purple-700"
                >
                  Request a demo
                </button>
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-3 lg:pt-16">
              <div>
                <h3 className="text-sm font-bold text-slate-300">Product</h3>
                <ul className="mt-5 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base font-semibold text-slate-400 transition hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-300">Solutions</h3>
                <ul className="mt-5 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base font-semibold text-slate-400 transition hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-300">Company</h3>
                <ul className="mt-5 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base font-semibold text-slate-400 transition hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-100">
                Stay in touch!
              </h3>
              <p className="mt-1 text-base font-medium text-slate-400">
                Get the latest from the 3Guide newsletter.
              </p>
              <Link
                href="mailto:info@3guideai.com?subject=Subscribe%20to%203Guide%20newsletter"
                className="mt-6 inline-flex rounded-md border border-purple-200/70 px-7 py-4 text-base font-bold text-slate-100 transition hover:border-white hover:bg-white hover:text-purple-700"
              >
                Subscribe to our newsletter
              </Link>
            </div>

            <div className="flex gap-5 md:pt-12">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-label={item.name}
                    className="text-slate-500 transition hover:text-white"
                  >
                    <Icon className="h-7 w-7" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="relative mt-16 min-h-48 overflow-hidden sm:min-h-72 lg:min-h-96">
            <p
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[30vw] font-black leading-none tracking-normal text-purple-100/[0.075] sm:text-[22vw] lg:text-[15rem]"
            >
              3Guide
            </p>
          </div>

          <p className="text-center text-sm font-semibold text-slate-500">
            © {new Date().getFullYear()} 3Guide, by 3gensolution. All Rights
            Reserved
          </p>
        </div>
      </footer>
      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
}
