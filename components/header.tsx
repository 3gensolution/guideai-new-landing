"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Bot,
  ChevronDown,
  Inbox,
  Menu,
  MousePointerClick,
  Rocket,
  TicketX,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DASHBOARD_URL } from "@/lib/site";

interface NavItem {
  name: string;
  description: string;
  href: string;
  icon: typeof Bot;
  image: string;
  imageAlt: string;
}

const menus: Record<"product" | "solutions", { label: string; items: NavItem[] }> = {
  product: {
    label: "Product",
    items: [
      {
        name: "In-App Guides",
        description:
          "Click-by-click walkthroughs built visually — published in one click, healed automatically.",
        href: "/guides",
        icon: MousePointerClick,
        image: "/story-2.png",
        imageAlt: "The 3Guide guides dashboard",
      },
      {
        name: "Browser Copilot",
        description:
          "An AI agent that clicks, types, and navigates on your users' behalf — it completes the task.",
        href: "/copilot",
        icon: Bot,
        image: "/copilot.png",
        imageAlt: "The Autonomous Copilot running browser tasks",
      },
      {
        name: "Friction Analytics",
        description:
          "Funnels, session drill-downs, and friction signals that show exactly where users get stuck.",
        href: "/analytics",
        icon: BarChart3,
        image: "/funnel.png",
        imageAlt: "The visitors explorer with sessions and sources",
      },
      {
        name: "Support Desk",
        description:
          "A full support inbox with assignment, automation rules, and AI-drafted replies.",
        href: "/support-desk",
        icon: Inbox,
        image: "/docs/bubble-on-live-site.png",
        imageAlt: "The 3Guide support widget on a live product",
      },
    ],
  },
  solutions: {
    label: "Solutions",
    items: [
      {
        name: "User Onboarding",
        description:
          "Turn signups into activated users with guided first-run experiences per segment.",
        href: "/use-cases/user-onboarding",
        icon: Rocket,
        image: "/docs/guide-running-live.png",
        imageAlt: "A guided onboarding tour running live",
      },
      {
        name: "Support Ticket Reduction",
        description:
          "Deflect repetitive how-do-I questions with AI answers and live walkthroughs.",
        href: "/use-cases/support-ticket-reduction",
        icon: TicketX,
        image: "/docs/copilot-chat-open.png",
        imageAlt: "The AI assistant answering a support question",
      },
    ],
  },
};

type MenuKey = keyof typeof menus | null;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [preview, setPreview] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  const activeMenu = openMenu ? menus[openMenu] : null;
  const previewItem = activeMenu?.items[Math.min(preview, activeMenu.items.length - 1)];

  const toggleMenu = (key: Exclude<MenuKey, null>) => {
    setPreview(0);
    setOpenMenu((current) => (current === key ? null : key));
  };

  const openMenuOnHover = (key: Exclude<MenuKey, null>) => {
    if (openMenu !== key) setPreview(0);
    setOpenMenu(key);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div
        className="relative mx-auto max-w-6xl"
        onMouseLeave={() => setOpenMenu(null)}
      >
        {/* Floating island bar */}
        <div className="rounded-2xl border border-slate-200 bg-white/95 px-5 shadow-lg shadow-purple-900/5 backdrop-blur-md">
          <nav className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-x-8">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.jpeg"
                  alt="3Guide logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-lg"
                />
                <span className="text-lg font-bold tracking-tight text-slate-900">
                  3Guide
                </span>
              </Link>

              <div className="hidden items-center lg:flex">
                {(Object.keys(menus) as Array<Exclude<MenuKey, null>>).map(
                  (key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => toggleMenu(key)}
                      onMouseEnter={() => openMenuOnHover(key)}
                      aria-expanded={openMenu === key}
                      className={cn(
                        "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition",
                        openMenu === key
                          ? "text-purple-700"
                          : "text-slate-600 hover:text-slate-900"
                      )}
                    >
                      {menus[key].label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          openMenu === key && "rotate-180"
                        )}
                      />
                    </button>
                  )
                )}
                <Link
                  href="/pricing"
                  onMouseEnter={() => setOpenMenu(null)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
                >
                  Pricing
                </Link>
                <Link
                  href="/docs"
                  onMouseEnter={() => setOpenMenu(null)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
                >
                  Docs
                </Link>
              </div>
            </div>

            <div className="hidden items-center gap-x-3 lg:flex">
              <Link
                href={DASHBOARD_URL}
                target="_blank"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
              >
                Sign in
              </Link>
              <Link
                href={DASHBOARD_URL}
                target="_blank"
                className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-purple-600/25 transition hover:bg-purple-500"
              >
                Start free
              </Link>
            </div>

            <button
              type="button"
              className="text-slate-900 lg:hidden"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </nav>

          {/* Mobile menu (inside the island) */}
          {mobileMenuOpen && (
            <div className="max-h-[calc(100vh-8rem)] overflow-y-auto border-t border-slate-200 py-6 lg:hidden">
              {(Object.keys(menus) as Array<Exclude<MenuKey, null>>).map(
                (key) => (
                  <div key={key} className="mb-6">
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {menus[key].label}
                    </p>
                    <div className="mt-2 space-y-1">
                      {menus[key].items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-base font-medium text-slate-700"
                        >
                          <item.icon className="h-5 w-5 text-purple-700" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              )}
              <div className="space-y-1 border-t border-slate-200 pt-4">
                <Link
                  href="/pricing"
                  className="block rounded-xl px-2 py-2.5 text-base font-medium text-slate-700"
                >
                  Pricing
                </Link>
                <Link
                  href="/docs"
                  className="block rounded-xl px-2 py-2.5 text-base font-medium text-slate-700"
                >
                  Docs
                </Link>
                <Link
                  href={DASHBOARD_URL}
                  target="_blank"
                  className="block rounded-xl px-2 py-2.5 text-base font-medium text-slate-700"
                >
                  Sign in
                </Link>
              </div>
              <Link
                href={DASHBOARD_URL}
                target="_blank"
                className="mt-4 flex w-full items-center justify-center rounded-xl bg-purple-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-purple-600/25"
              >
                Start free
              </Link>
            </div>
          )}
        </div>

        {/* Full-width mega dropdown */}
        <div
          className={cn(
            "absolute inset-x-0 top-[calc(100%+0.5rem)] hidden transition-all duration-300 ease-out lg:block",
            activeMenu
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          )}
        >
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl shadow-purple-900/10">
            {activeMenu && previewItem && (
              <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
                {/* Items with descriptions */}
                <div className="grid content-start gap-1">
                  {activeMenu.items.map((item, i) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onMouseEnter={() => setPreview(i)}
                      onClick={() => setOpenMenu(null)}
                      style={{ transitionDelay: activeMenu ? `${i * 40}ms` : "0ms" }}
                      className={cn(
                        "flex items-start gap-4 rounded-xl p-4 transition-all duration-300",
                        preview === i ? "bg-purple-50" : "hover:bg-slate-50"
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition",
                          preview === i
                            ? "bg-purple-600 text-white"
                            : "bg-purple-100 text-purple-700"
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-base font-bold text-slate-900">
                          {item.name}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-slate-500">
                          {item.description}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Live preview of the hovered item */}
                <div className="relative overflow-hidden rounded-xl border border-purple-100 bg-purple-50/60 p-4">
                  <div
                    key={previewItem.href}
                    className="duration-300 animate-in fade-in"
                  >
                    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
                      <Image
                        src={previewItem.image}
                        alt={previewItem.imageAlt}
                        width={900}
                        height={540}
                        className="h-auto w-full"
                      />
                    </div>
                    <p className="mt-3 text-sm font-medium text-slate-600">
                      {previewItem.imageAlt}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
