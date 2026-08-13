"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Play } from "lucide-react";

const DEMO_SHARE_URL =
  "https://demo.3guideai.com/share/5SGvcEhR1xlLOvDUE-OudA?embed=1&autostart=1";
const DEMO_THUMBNAIL =
  "https://res.cloudinary.com/dulfwgfga/image/upload/v1783284390/guideai/demos/demo_7fb05626c9ba.jpg";

export function DemoEmbed() {
  const [demoStarted, setDemoStarted] = useState(false);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label="View interactive product demo"
        onClick={() => setDemoStarted(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setDemoStarted(true);
        }}
        className="group relative w-full cursor-pointer overflow-hidden rounded-[1.75rem]"
      >
        {/* Fake browser chrome */}
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="mx-auto flex items-center gap-2 rounded-full bg-white px-4 py-1 text-xs font-medium text-slate-400 ring-1 ring-slate-200">
            demo.3guideai.com
          </span>
        </div>

        {/* Thumbnail with overlay */}
        <div
          className="relative"
          style={{ paddingBottom: "62.5%", height: 0 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            style={{ backgroundImage: `url('${DEMO_THUMBNAIL}')` }}
          />
          {/* Readability gradient */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(46,16,74,0.72) 0%, rgba(46,16,74,0.25) 45%, rgba(46,16,74,0.35) 100%)",
            }}
          />
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center">
            <p className="kicker text-purple-100/90">Interactive product tour</p>
            <p className="max-w-[80%] font-display text-2xl font-bold leading-tight text-white sm:text-4xl">
              See 3Guide in action
            </p>
            <span className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-wider text-plum shadow-xl shadow-plum/30 transition-transform duration-300 group-hover:scale-105">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-white">
                <Play className="h-3 w-3 fill-current" />
              </span>
              View demo
            </span>
          </div>
        </div>
      </div>

      {demoStarted &&
        createPortal(
          <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setDemoStarted(false);
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-900/60 p-6 backdrop-blur-sm"
        >
          <div
            className="relative aspect-[16/10]"
            style={{ width: "min(880px, 94vw, calc(82vh * 1.6))" }}
          >
            <button
              type="button"
              onClick={() => setDemoStarted(false)}
              aria-label="Close demo"
              className="absolute -top-10 right-0 cursor-pointer text-3xl leading-none text-white drop-shadow"
            >
              &times;
            </button>
            <iframe
              src={DEMO_SHARE_URL}
              title="3Guide Demo"
              allow="fullscreen"
              allowFullScreen
              frameBorder="0"
              className="h-full w-full rounded-2xl border-0 bg-white shadow-2xl"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
