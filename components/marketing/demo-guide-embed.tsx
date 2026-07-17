"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Play } from "lucide-react";

const DEMO_SHARE_URL =
  "https://demo.3guideai.com/share/zt5XLm5K3h3P-0wZ0MV56A?embed=1";
const DEMO_THUMBNAIL =
  "https://res.cloudinary.com/dulfwgfga/image/upload/v1783284390/guideai/demos/demo_7fb05626c9ba.jpg";

export function DemoGuideProEmbed() {
  const [demoStarted, setDemoStarted] = useState(false);

  return (
    <>
      <div
        className="relative w-full"
        style={{ paddingBottom: "calc(62.5% + 52px)", height: 0 }}
      >
        <div
          role="button"
          tabIndex={0}
          aria-label="View interactive product demo"
          onClick={() => setDemoStarted(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setDemoStarted(true);
          }}
          className="group absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-5 overflow-hidden rounded-xl"
          style={{
            background: `linear-gradient(rgba(15,23,42,0.5),rgba(15,23,42,0.5)),url('${DEMO_THUMBNAIL}') center/cover no-repeat`,
          }}
        >
          <p className="max-w-[80%] px-6 text-center text-xl font-bold leading-snug text-white sm:text-3xl">
            Take a tour of Product Tour
          </p>
          <span className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-8 py-4 text-base font-bold uppercase tracking-wider text-white shadow-lg shadow-purple-950/30 transition group-hover:scale-105 group-hover:bg-purple-500">
            <Play className="h-5 w-5 fill-current" />
            View demo
          </span>
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
              <div
                className="guideai-embed h-full w-full"
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <iframe
                  loading="lazy"
                  src={DEMO_SHARE_URL}
                  title="Product showcase"
                  allow="fullscreen"
                  allowFullScreen
                  frameBorder="0"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "1px solid rgba(63,95,172,0.28)",
                    boxShadow: "0 0 18px rgba(26,19,72,0.12)",
                    borderRadius: "12px",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
