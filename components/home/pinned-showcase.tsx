import Image from "next/image";
import { Container } from "@/components/marketing/primitives";

/**
 * The single cinematic moment on the page. On desktop the section pins and
 * the panels cross-fade as you scroll (see `data-pin-scene` in scroll-fx).
 * On mobile and under reduced-motion it degrades to a plain stacked list —
 * no pinning, nothing hidden.
 */
const scenes = [
  {
    step: "01",
    title: "It recognises a button six ways at once",
    body: "Its ID, its text, its position, its surroundings, its appearance. If one clue disappears, the others still find it — like recognising a friend who changed their haircut.",
    image: "/guidance.png",
    alt: "A 3Guide walkthrough running live in a product",
  },
  {
    step: "02",
    title: "When a tour breaks, an AI repairs it",
    body: "The system looks at the changed page, works out where the button went, and fixes the walkthrough itself. Nobody gets paged at 2am.",
    image: "/assistant-img.png",
    alt: "The 3Guide AI assistant answering a question in-app",
  },
  {
    step: "03",
    title: "It finds the parts of your UI that are hidden",
    body: "A reveal engine learns how your product opens up behind menus and dropdowns, so guides can point at things that aren't on screen yet.",
    image: "/friction-img.png",
    alt: "The 3Guide friction analytics dashboard",
  },
];

export function PinnedShowcase() {
  return (
    <section
      data-pin-scene
      className="relative overflow-hidden bg-ink py-24 text-white lg:h-screen lg:py-0"
    >
      {/* Fine grid — Niteon's 60px lattice, dialled well down. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Container className="relative lg:flex lg:h-full lg:items-center">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: the narrative steps */}
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-purple-300">
              Why it doesn't rot
            </p>
            <h2 className="font-display mt-5 text-balance text-section font-semibold text-white">
              Any tool can put a tooltip on a button.{" "}
              <span className="text-[#f0c9a0]">
                The hard part is that software changes.
              </span>
            </h2>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-slate-300">
              A developer renames a button, moves a menu, redesigns a page — and
              every tour pointing at the old layout breaks. Most tools in this
              market silently rot. 3Guide attacks that three ways.
            </p>

            <div className="mt-10 space-y-2">
              {scenes.map((s, i) => (
                <div
                  key={s.step}
                  data-pin-step
                  data-active={i === 0 ? "true" : "false"}
                  className="group rounded-2xl border border-white/10 p-5 transition-all duration-500 data-[active=true]:border-purple-400/40 data-[active=true]:bg-white/[0.06]"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-purple-300/70">
                      {s.step}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300/90">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: cross-fading panels (stacked on desktop, listed on mobile) */}
          <div className="relative lg:h-[30rem]">
            {scenes.map((s) => (
              <div
                key={s.step}
                data-pin-panel
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/40 max-lg:mb-6 lg:absolute lg:inset-0"
              >
                <Image
                  src={s.image}
                  alt={s.alt}
                  width={1100}
                  height={700}
                  className="h-full w-full object-cover object-top-left"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
