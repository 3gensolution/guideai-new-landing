"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Bot,
  ChevronDown,
  GraduationCap,
  Menu,
  MessageCircleQuestion,
  MonitorPlay,
  MousePointerClick,
  Presentation,
  Rocket,
  Sparkles,
  TicketX,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DASHBOARD_URL } from "@/lib/site";

/* Legal/utility pages keep a plain light top instead of the plum hero. */
const LIGHT_HERO_ROUTES = ["/policy", "/terms", "/docs"];

function hasDarkHero(pathname: string) {
  return !LIGHT_HERO_ROUTES.some(
    (r) => pathname === r || pathname.startsWith(r + "/")
  );
}

interface NavItem {
  name: string;
  description: string;
  href: string;
  icon: typeof Bot;
}

interface MenuDef {
  label: string;
  // A short line shown above the columns in the mega-menu.
  intro: string;
  columns: { heading: string; items: NavItem[] }[];
  // The featured tile on the right of the mega-menu.
  feature: {
    eyebrow: string;
    title: string;
    description: string;
    href: string;
    image: string;
    imageAlt: string;
  };
}

/* Use-case-first IA: Solutions leads (outcomes), Product second (capabilities). */
const menus: Record<"solutions" | "product", MenuDef> = {
  solutions: {
    label: "Solutions",
    intro: "Start from the outcome you're after — 3Guide maps to it.",
    columns: [
      {
        heading: "By use case",
        items: [
          {
            name: "User Onboarding",
            description: "Turn signups into activated users.",
            href: "/use-cases/user-onboarding",
            icon: Rocket,
          },
          {
            name: "Support Deflection",
            description: "Answer how-do-I before it's a ticket.",
            href: "/use-cases/support-ticket-reduction",
            icon: TicketX,
          },
          {
            name: "Feature Adoption",
            description: "Launch features contextually, in-app.",
            href: "/use-cases/user-onboarding",
            icon: Sparkles,
          },
          {
            name: "Client & Employee Training",
            description: "Teach people where the work happens.",
            href: "/use-cases/client-and-employee-training",
            icon: GraduationCap,
          },
        ],
      },
      {
        heading: "By outcome",
        items: [
          {
            name: "Reduce time-to-value",
            description: "Get users to their first win faster.",
            href: "/use-cases/user-onboarding",
            icon: MousePointerClick,
          },
          {
            name: "Cut support volume",
            description: "Deflect repetitive questions with AI.",
            href: "/use-cases/support-ticket-reduction",
            icon: MessageCircleQuestion,
          },
          {
            name: "Understand friction",
            description: "See exactly where users get stuck.",
            href: "/analytics",
            icon: BarChart3,
          },
        ],
      },
    ],
    feature: {
      eyebrow: "The whole loop",
      title: "One platform, every stage of adoption",
      description:
        "Guide, understand, answer, and act — installed with a single snippet.",
      href: "/#platform",
      image: "/assistant-img.png",
      imageAlt: "A guided onboarding tour running live",
    },
  },
  product: {
    label: "Product",
    intro: "Everything the 3Guide SDK runs on your product.",
    columns: [
      {
        heading: "Guide & train",
        items: [
          {
            name: "In-App Guides",
            description: "Visual walkthroughs that heal themselves.",
            href: "/guides",
            icon: MousePointerClick,
          },
          {
            name: "Guide Pro",
            description: "Interactive, shareable product demos.",
            href: "/guide-pro",
            icon: Presentation,
          },
          {
            name: "Guide Studio",
            description: "Screen recording to polished video.",
            href: "/studio",
            icon: MonitorPlay,
          },
        ],
      },
      {
        heading: "Answer & act",
        items: [
          {
            name: "AI Assistant",
            description: "Answers trained on your product.",
            href: "/copilot",
            icon: Bot,
          },
          {
            name: "Browser Copilot",
            description: "An AI that completes the task for users.",
            href: "/copilot",
            icon: Sparkles,
          },
          {
            name: "Friction Analytics",
            description: "Funnels, sessions, and friction signals.",
            href: "/analytics",
            icon: BarChart3,
          },
        ],
      },
    ],
    feature: {
      eyebrow: "Beyond guidance",
      title: "An AI that acts, not just points",
      description:
        "The Browser Copilot clicks, fills, and navigates — with the user watching every step.",
      href: "/copilot",
      image: "/co-pilot.png",
      imageAlt: "The 3Guide Browser Copilot running tasks",
    },
  },
};

type MenuKey = keyof typeof menus | null;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [scrolled, setScrolled] = useState(false);
  /* Which mobile accordion is expanded. A single value rather than a set is
     the whole accordion rule: opening one necessarily closes the other. */
  const [mobileSection, setMobileSection] = useState<MenuKey>(null);
  const pathname = usePathname();

  /* Every page now opens on the dark plum hero, so the bar starts
     transparent everywhere and turns into a solid light bar once you
     scroll off it. Pages without a dark hero opt out via DARK_HERO. */
  const overHero = hasDarkHero(pathname) && !scrolled && !mobileMenuOpen;

  /* Two separate thresholds on purpose. With a single 24px line, the tiniest
     scroll jitter around it flips `scrolled` back and forth, and every flip
     toggles backdrop-blur — which Safari and Brave repaint by rebuilding the
     whole backdrop layer. That rebuild is the flicker. Turning the bar solid
     at 64px and clear again only below 8px leaves a dead zone that jitter
     cannot cross. Reads are also coalesced into one rAF per frame, and state
     is set only on a real change so scrolling stops re-rendering the header. */
  useEffect(() => {
    let frame = 0;
    const read = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled((prev) => (prev ? y > 8 : y > 64));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenMenu(null);
    setMobileSection(null);
  }, [pathname]);

  const activeMenu = openMenu ? menus[openMenu] : null;

  const toggleMenu = (key: Exclude<MenuKey, null>) =>
    setOpenMenu((current) => (current === key ? null : key));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="relative"
        onMouseLeave={() => setOpenMenu(null)}
      >
        {/* Full-bleed bar, level with the hero — no island, no border.
            The blurred surface is a permanent sibling layer that only fades
            its opacity. Adding and removing backdrop-blur made Safari build
            and tear down the backdrop layer on every scroll-state change,
            which flickered; a layer that always exists is rasterized once. */}
        {/* No horizontal padding here: the open mobile menu is a child and
            must run edge to edge. The bar's own inset lives on <nav>.
            While the menu is open the whole block takes the hero ink so the
            bar and the panel below it are one continuous surface. */}
        <div
          className={cn(
            "relative transition-colors duration-500 ease-in-out",
            mobileMenuOpen ? "bg-ink" : "bg-transparent"
          )}
        >
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-0 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl transition-opacity duration-500",
              /* Hidden entirely while the mobile menu is open, otherwise a
                 half-opaque white sheet sits over the ink panel and reads as
                 a grey band across the top. */
              overHero || mobileMenuOpen ? "opacity-0" : "opacity-100"
            )}
          />
          <nav className="relative mx-auto flex h-20 max-w-[100rem] items-center justify-between px-6 lg:px-10">
            <div className="flex items-center gap-x-10">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.jpeg"
                  alt="3Guide logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-lg"
                />
                <span className={cn("font-display text-xl font-semibold tracking-tight transition-colors duration-500 ease-in-out", overHero || mobileMenuOpen ? "text-white" : "text-slate-900")}>
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
                      onMouseEnter={() => setOpenMenu(key)}
                      aria-expanded={openMenu === key}
                      className={cn(
                        /* The open item becomes a block that visually joins
                           the panel below it, capped by an amber rule. */
                        "relative flex h-20 items-center gap-1 px-5 text-sm font-medium transition",
                        "before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-[#e8a56d] before:opacity-0",
                        openMenu === key && "before:opacity-100",
                        openMenu === key
                          ? overHero
                            ? "bg-white/[0.07] text-white"
                            : "bg-slate-900/[0.04] text-purple-700"
                          : overHero
                            ? "text-slate-200 hover:text-white"
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
                  className={cn("rounded-lg px-3 py-2 text-sm transition", overHero ? "text-slate-200 hover:text-white" : "text-slate-600 hover:text-slate-900")}
                >
                  Pricing
                </Link>
                <Link
                  href="/docs"
                  onMouseEnter={() => setOpenMenu(null)}
                  className={cn("rounded-lg px-3 py-2 text-sm transition", overHero ? "text-slate-200 hover:text-white" : "text-slate-600 hover:text-slate-900")}
                >
                  Docs
                </Link>
              </div>
            </div>

            <div className="hidden items-center gap-x-3 lg:flex">
              <Link
                href={DASHBOARD_URL}
                target="_blank"
                className={cn("rounded-lg px-3 py-2 text-sm transition", overHero ? "text-slate-200 hover:text-white" : "text-slate-600 hover:text-slate-900")}
              >
                Sign in
              </Link>
              <Link
                href={DASHBOARD_URL}
                target="_blank"
                className={cn(
                  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition duration-300",
                  overHero
                    ? "bg-[#e8a56d] text-[#2b1420] hover:bg-[#efb684]"
                    : "bg-purple-600 text-white shadow-md shadow-purple-600/20 hover:bg-purple-500"
                )}
              >
                Get started
              </Link>
            </div>

            <button
              type="button"
              className={cn("lg:hidden transition-colors duration-500 ease-in-out", overHero || mobileMenuOpen ? "text-white" : "text-slate-900")}
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

          {/* Mobile menu (inside the island).
              `relative` lifts it above the absolutely-positioned blur layer,
              which spans the whole wrapper and would otherwise paint over it.
              It also carries its own opaque background: the blur layer is
              transparent over the dark hero, and the panel overlays page
              content either way. */}
          {/* Always mounted so the panel can ease closed as well as open —
              unmounting on close would snap it away. The grid 0fr/1fr pair
              animates to the content's real height, and `invisible` at rest
              keeps closed links out of the tab order. */}
          <div
            className={cn(
              "grid overflow-hidden transition-all duration-500 ease-in-out lg:hidden",
              mobileMenuOpen
                ? "grid-rows-[1fr] opacity-100"
                : "invisible grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="min-h-0">
            {/* Height follows the content. The panel only scrolls if an open
                section actually overflows the viewport, so a collapsed menu is
                a short card rather than a full-height column. */}
            <div className="relative max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-ink">
              {(Object.keys(menus) as Array<Exclude<MenuKey, null>>).map(
                (key) => {
                  const expanded = mobileSection === key;
                  return (
                    <div key={key} className="border-b border-white/10">
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={`mobile-section-${key}`}
                        /* Assigning the key (not toggling a set) is what keeps
                           a second section from opening alongside the first. */
                        onClick={() =>
                          setMobileSection((cur) => (cur === key ? null : key))
                        }
                        className="flex w-full items-center justify-between px-6 py-4 text-left text-lg font-medium text-white"
                      >
                        {menus[key].label}
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300",
                            expanded && "rotate-180"
                          )}
                        />
                      </button>

                      {/* Grid-rows trick: animates cleanly from 0 to the
                          content's natural height, which max-height cannot do
                          without hard-coding a guess. */}
                      <div
                        id={`mobile-section-${key}`}
                        className={cn(
                          "grid transition-all duration-300 ease-out",
                          expanded
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        )}
                      >
                        {/* `invisible` when collapsed removes the links from
                            the tab order and the accessibility tree — the grid
                            collapse alone hides them visually but leaves them
                            focusable, so keyboard users land on nothing. */}
                        <div
                          className={cn(
                            "overflow-hidden",
                            !expanded && "invisible"
                          )}
                        >
                          <div className="space-y-5 px-6 pb-5">
                            {menus[key].columns.map((col) => (
                              <div key={col.heading}>
                                <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                                  {col.heading}
                                </p>
                                <div className="mt-2 space-y-1">
                                  {col.items.map((item) => (
                                    <Link
                                      key={item.name + item.href}
                                      href={item.href}
                                      className="flex items-center gap-3 rounded-xl py-2.5 text-base font-medium text-slate-200"
                                    >
                                      <item.icon className="h-5 w-5 shrink-0 text-purple-400" />
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}

              {/* Flat links sit at the same level as the accordion triggers so
                  the whole menu reads as one list. */}
              <Link
                href="/#customers"
                className="block border-b border-white/10 px-6 py-4 text-lg font-medium text-white"
              >
                Customers
              </Link>
              <Link
                href="/pricing"
                className="block border-b border-white/10 px-6 py-4 text-lg font-medium text-white"
              >
                Pricing
              </Link>
              <Link
                href="/docs"
                className="block border-b border-white/10 px-6 py-4 text-lg font-medium text-white"
              >
                Docs
              </Link>
              <Link
                href={DASHBOARD_URL}
                target="_blank"
                className="block px-6 py-4 text-lg font-medium text-white"
              >
                Sign in
              </Link>

              <div className="px-6 pb-6 pt-2">
                <Link
                  href={DASHBOARD_URL}
                  target="_blank"
                  className="flex w-full items-center justify-center rounded-full bg-purple-600 px-5 py-3.5 text-base font-medium text-white shadow-md shadow-purple-600/25"
                >
                  Get started
                </Link>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Full-width mega dropdown */}
        <div
          className={cn(
            "absolute inset-x-0 top-full hidden transition-all duration-300 ease-out lg:block",
            activeMenu
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          )}
        >
          {activeMenu && (
            <div className="border-b border-white/10 bg-ink/98 shadow-2xl shadow-black/40 backdrop-blur-xl">
             <div className="mx-auto max-w-[100rem] px-6 py-10 lg:px-10">
              <p className="mb-7 max-w-[76rem] font-mono text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                {activeMenu.intro}
              </p>
              <div className="grid max-w-[76rem] gap-10 lg:grid-cols-[1.5fr_1fr]">
                {/* Grouped link columns */}
                <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
                  {activeMenu.columns.map((col) => (
                    <div key={col.heading}>
                      <p className="mb-3 px-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#e8a56d]">
                        {col.heading}
                      </p>
                      <div className="grid gap-1">
                        {col.items.map((item) => (
                          <Link
                            key={item.name + item.href}
                            href={item.href}
                            onClick={() => setOpenMenu(null)}
                            className="group flex items-start gap-3 rounded-xl p-3 transition hover:bg-white/[0.06]"
                          >
                            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-purple-200 transition group-hover:bg-[#e8a56d] group-hover:text-[#2b1420]">
                              <item.icon className="h-4.5 w-4.5" />
                            </span>
                            <span>
                              <span className="block text-sm font-medium text-white">
                                {item.name}
                              </span>
                              <span className="mt-0.5 block text-xs leading-relaxed text-slate-400">
                                {item.description}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Featured tile */}
                <Link
                  href={activeMenu.feature.href}
                  onClick={() => setOpenMenu(null)}
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#e8a56d]/50"
                >
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#e8a56d]">
                    {activeMenu.feature.eyebrow}
                  </p>
                  <h4 className="mt-2 text-base font-medium text-white">
                    {activeMenu.feature.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                    {activeMenu.feature.description}
                  </p>
                  <div className="mt-4 overflow-hidden rounded-lg border border-white/10 shadow-lg">
                    <Image
                      src={activeMenu.feature.image}
                      alt={activeMenu.feature.imageAlt}
                      width={900}
                      height={540}
                      className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>
              </div>
             </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
