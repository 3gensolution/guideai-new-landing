"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  // {
  //   id: 1,
  //   title: "Record the workflow",
  //   description:
  //     "Use our Chrome extension to capture any product flow. The AI identifies key steps, UI elements, and decision points automatically.",
  //   image: "/story-1.png",
  // },
  {
    id: 1,
    title: "Generate the guide",
    description:
      "AI transforms your recording into a polished in-app guide with contextual tooltips, highlights, and step-by-step instructions.",
    image: "/story-2.png",
  },
  {
    id: 2,
    title: "Publish instantly",
    description:
      "Deploy guides to your product in one click. Target by user segment, page, or workflow to personalize the experience.",
    image: "/story-3.png",
  },
  {
    id: 3,
    title: "Measure adoption",
    description:
      "Track completion rates, drop-off points, and time to value. See exactly where users succeed or struggle.",
    image: "/story-4.png",
  },
  {
    id: 4,
    title: "Auto-heal as UI changes",
    description:
      "GuideAI detects when your product UI changes and updates guides automatically. No manual maintenance required.",
    image: "/story-5.png",
  },
];

const STEP_DURATION = 5000;

export function AgentCanvasSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto reveal logic
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }

        return prev + 2;
      });
    }, STEP_DURATION / 50);

    const stepInterval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev === steps.length - 1) {
          return 0;
        }

        return prev + 1;
      });

      setProgress(0);
    }, STEP_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [activeStep]);

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-28 text-white">
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <div className="mb-4 inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1">
              <span className="text-sm font-medium text-violet-300">
                Story-driven onboarding
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Watch GuideAI turn friction into guided product adoption.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-400">
              Instead of static documentation, GuideAI creates living onboarding
              experiences that evolve with your product automatically.
            </p>

            {/* <Button className="mt-8 gap-2 rounded-xl bg-white px-6 text-zinc-900 hover:bg-zinc-200">
              Explore Guide Builder
              <ArrowRight className="h-4 w-4" />
            </Button> */}

            {/* STORY STEPS */}
            <div className="mt-14 space-y-5">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const isPast = index < activeStep;

                return (
                  <motion.button
                    key={step.id}
                    onClick={() => {
                      setActiveStep(index);
                      setProgress(0);
                    }}
                    layout
                    className={`relative w-full overflow-hidden rounded-2xl border transition-all duration-500 ${
                      isActive
                        ? "border-violet-500/30 bg-white/5"
                        : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"
                    }`}
                  >
                    {/* Progress bar */}
                    {isActive && (
                      <motion.div
                        className="absolute left-0 top-0 h-1 bg-gradient-to-r from-violet-500 to-cyan-400"
                        style={{
                          width: `${progress}%`,
                        }}
                      />
                    )}

                    <div className="p-5">
                      <div className="flex items-start gap-4">
                        {/* Number */}
                        <div
                          className={`mt-1 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                            isActive
                              ? "bg-violet-500 text-white"
                              : isPast
                                ? "bg-violet-500/20 text-violet-300"
                                : "bg-zinc-800 text-zinc-500"
                          }`}
                        >
                          {isPast ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            step.id
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-left">
                          <h3
                            className={`text-lg font-semibold transition-colors ${
                              isActive ? "text-white" : "text-zinc-400"
                            }`}
                          >
                            {step.title}
                          </h3>

                          <AnimatePresence mode="wait">
                            {isActive && (
                              <motion.p
                                key={step.description}
                                initial={{
                                  opacity: 0,
                                  y: 10,
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                exit={{
                                  opacity: 0,
                                  y: -10,
                                }}
                                transition={{
                                  duration: 0.35,
                                }}
                                className="mt-3 max-w-md text-sm leading-7 text-zinc-400"
                              >
                                {step.description}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center">
            {/* Glow */}
            <div className="absolute h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={steps[activeStep].image}
                initial={{
                  opacity: 0,
                  x: 60,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: -60,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900 shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
              >
                {/* Browser top */}
                <div className="flex items-center gap-2 border-b border-white/5 bg-zinc-900 px-5 py-4">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />

                  <div className="ml-4 rounded-full bg-white/5 px-4 py-1 text-xs text-zinc-500">
                    guideai.app
                  </div>
                </div>

                {/* Image */}
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    fill
                    className="object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-6 left-6 max-w-sm rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-xl"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-violet-300">
                      Step {steps[activeStep].id}
                    </p>

                    <h4 className="mt-2 text-xl font-semibold text-white">
                      {steps[activeStep].title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-zinc-300">
                      {steps[activeStep].description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
