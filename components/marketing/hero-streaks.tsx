/**
 * The thin colour strokes that float above every hero headline. Positions are
 * hand-placed so they read as scattered rather than gridded, and the band is
 * pushed clear of the fixed header. Shared by the homepage hero and PageHero.
 */
const streaks = [
  { top: "20%", left: "22%", width: "7rem", from: "#e08a4f" },
  { top: "14%", left: "40%", width: "10rem", from: "#c98a5e" },
  { top: "13%", left: "57%", width: "8rem", from: "#d9557f" },
  { top: "19%", left: "67%", width: "7rem", from: "#e0a15f" },
  { top: "27%", left: "26%", width: "9rem", from: "#4f9e86" },
  { top: "26%", left: "48%", width: "7rem", from: "#4a63c4" },
  { top: "25%", left: "72%", width: "8rem", from: "#4a63c4" },
  { top: "33%", left: "31%", width: "6rem", from: "#4a63c4" },
  { top: "32%", left: "59%", width: "11rem", from: "#4f9e86" },
  { top: "39%", left: "43%", width: "10rem", from: "#d9557f" },
  { top: "38%", left: "64%", width: "9rem", from: "#c9a06a" },
];

export function HeroStreaks({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={
        "pointer-events-none absolute inset-x-0 top-0 z-0 h-[26rem] " +
        (className ?? "")
      }
    >
      {streaks.map((s, i) => (
        <span
          key={i}
          data-hero="streak"
          className="absolute hidden h-px origin-left sm:block"
          style={{
            top: s.top,
            left: s.left,
            width: s.width,
            background: `linear-gradient(90deg, ${s.from}, ${s.from}00)`,
          }}
        />
      ))}
    </div>
  );
}
