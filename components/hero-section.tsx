"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactFormDialog } from "@/components/contact-form-dialog";

export function HeroSection() {
  const [contactOpen, setContactOpen] = useState(false);
  const [demoStarted, setDemoStarted] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-zinc-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-mountains.jpg"
          alt="Mountain landscape"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/60 to-zinc-950" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-[1440px] px-6 pb-24 pt-32 lg:px-8 lg:pt-40">
        {/* Announcement Badge */}
        <div className="mb-8 flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm transition hover:bg-white/20"
          >
            <span className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-2 py-0.5 text-xs font-semibold text-white">
              NEW
            </span>
            GUIDEAI LAUNCHES BROWSER COPILOT FOR TASK COMPLETION
          </Link>
        </div>

        {/* Main Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Build guides in minutes.
            </span>
            <br />
            <span className="text-white/90">
              Keep them current automatically.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            AI-first product adoption platform for B2B SaaS
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white px-8 text-zinc-900 hover:bg-white/90"
                onClick={() => setContactOpen(true)}
              >
                Talk to us
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              >
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}`} target="_blank">
                  Get Started
                </Link>
              </Button>
            </div>
            <div className="mt-6 inline-block">
              <button
                type="button"
                onClick={() => setDemoStarted(true)}
                style={{
                  background: "#6E70E7",
                  color: "#FFFFFF",
                  font: "700 15px system-ui,-apple-system,sans-serif",
                  letterSpacing: "0.04em",
                  padding: "14px 30px",
                  borderRadius: "10px",
                  border: 0,
                  cursor: "pointer",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                }}
              >
                VIEW DEMO
              </button>
            </div>
          </div>

          {demoStarted && (
            <div
              onClick={(e) => {
                if (e.target === e.currentTarget) setDemoStarted(false);
              }}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 99999,
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
              }}
            >
              <div style={{ position: "relative", width: "100%", maxWidth: "1100px", aspectRatio: "16 / 10" }}>
                <button
                  type="button"
                  onClick={() => setDemoStarted(false)}
                  aria-label="Close demo"
                  style={{
                    position: "absolute",
                    top: "-38px",
                    right: 0,
                    background: "none",
                    border: 0,
                    color: "#fff",
                    fontSize: "30px",
                    lineHeight: 1,
                    cursor: "pointer",
                    textShadow: "0 1px 4px rgba(15,23,42,0.6)",
                  }}
                >
                  &times;
                </button>
                <iframe
                  src="https://demo.3guideai.com/share/5SGvcEhR1xlLOvDUE-OudA?embed=1&autostart=1"
                  title="GuideAI Demo"
                  allow="fullscreen"
                  allowFullScreen
                  frameBorder="0"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: 0,
                    borderRadius: "12px",
                    boxShadow: "0 24px 60px rgba(15,23,42,0.35)",
                  }}
                />
              </div>
            </div>
          )}

          <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
        </div>

        {/* <div className="relative mt-20 flex justify-center overflow-visible">
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative"
          >
            {!openVideo ? (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setOpenVideo(true)}
                className="group relative flex w-[320px] items-center gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition"
              >
                <div className="relative h-20 w-32 overflow-hidden rounded-2xl">
                  <Image
                    src="/video-thumbnail.jpg"
                    alt="Video preview"
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition group-hover:scale-110">
                      <svg
                        className="ml-1 h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="text-left">
                  <p className="text-sm font-medium text-white">
                    See GuideAI in action
                  </p>

                  <p className="mt-1 text-xs text-white/60">
                    Watch demo • 2 mins
                  </p>
                </div>
              </motion.button>
            ) : (
              <AnimatePresence>
                <motion.div
                  initial={{
                    width: 250,
                    opacity: 0,
                    x: -40,
                  }}
                  animate={{
                    width:
                      typeof window !== "undefined" &&
                      window.innerWidth >= 1024
                        ? 500
                        : 250,
                    height: 280,
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl"
                >
                  <button
                    onClick={() => setOpenVideo(false)}
                    className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-black"
                  >
                    ✕
                  </button>

                  <video
                    controls
                    autoPlay
                    className="h-full w-full"
                  >
                    <source src="/demo-video.mp4" type="video/mp4" />
                  </video>
                </motion.div>
              </AnimatePresence>
            )}
          </motion.div>
        </div> */}
      </div>
    </section>
  );
}