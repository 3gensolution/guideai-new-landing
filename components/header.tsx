"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight - 100); // Small buffer for smooth transition
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-x-12">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpeg"
              alt="GuideAI Logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg"
            />
            <span className={`text-xl font-semibold transition-colors duration-300 ${
              isScrolled ? "text-zinc-900" : "text-white"
            }`}>GuideAI</span>
          </Link>
          <div className="hidden lg:flex lg:gap-x-8">
            <Link
              href="/guides"
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-zinc-600 hover:text-zinc-900" : "text-white/80 hover:text-white"
              }`}
            >
              In-App Guides
            </Link>
            <Link
              href="/copilot"
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-zinc-600 hover:text-zinc-900" : "text-white/80 hover:text-white"
              }`}
            >
              Browser Copilot
            </Link>
            <Link
              href="/analytics"
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-zinc-600 hover:text-zinc-900" : "text-white/80 hover:text-white"
              }`}
            >
              Analytics
            </Link>
            <Link
              href="/pricing"
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-zinc-600 hover:text-zinc-900" : "text-white/80 hover:text-white"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-zinc-600 hover:text-zinc-900" : "text-white/80 hover:text-white"
              }`}
            >
              Docs
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}`}
            target="_blank"
            className={`text-sm font-medium transition-colors duration-300 ${
              isScrolled ? "text-zinc-600 hover:text-zinc-900" : "text-white/80 hover:text-white"
            }`}
          >
            Get Started
          </Link>
          {/* <Button className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:from-cyan-600 hover:to-violet-600">
            Start free trial
          </Button> */}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`transition-colors duration-300 ${
              isScrolled ? "text-zinc-900" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className={`space-y-1 px-6 py-4 backdrop-blur-lg transition-colors duration-300 ${
            isScrolled ? "bg-white/95" : "bg-zinc-900/95"
          }`}>
            <Link
              href="/guides"
              className={`block py-2 text-base font-medium transition-colors duration-300 ${
                isScrolled ? "text-zinc-600" : "text-white/80"
              }`}
            >
              In-App Guides
            </Link>
            <Link
              href="/copilot"
              className={`block py-2 text-base font-medium transition-colors duration-300 ${
                isScrolled ? "text-zinc-600" : "text-white/80"
              }`}
            >
              Browser Copilot
            </Link>
            <Link
              href="/analytics"
              className={`block py-2 text-base font-medium transition-colors duration-300 ${
                isScrolled ? "text-zinc-600" : "text-white/80"
              }`}
            >
              Analytics
            </Link>
            <Link
              href="/pricing"
              className={`block py-2 text-base font-medium transition-colors duration-300 ${
                isScrolled ? "text-zinc-600" : "text-white/80"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className={`block py-2 text-base font-medium transition-colors duration-300 ${
                isScrolled ? "text-zinc-600" : "text-white/80"
              }`}
            >
              Docs
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_BASE_URL}`}
              target="_blank"
              className={`block py-2 text-base font-medium transition-colors duration-300 ${
                isScrolled ? "text-zinc-600" : "text-white/80"
              }`}
            >
              Get Started
            </Link>
            <Button className="mt-4 w-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:from-cyan-600 hover:to-violet-600">
              Start free trial
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
