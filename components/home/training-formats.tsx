import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Film,
  MonitorPlay,
  MousePointerClick,
  Users,
} from "lucide-react";
import {
  Container,
  Section,
  SectionHeading,
} from "@/components/marketing/primitives";

/**
 * Sits directly before the platform tabs so the Guide Pro tab lands in an
 * audience the reader has already accepted: people teaching employees and
 * clients, not selling to prospects.
 *
 * One recording, five formats. The split matters because the two audiences
 * consume training differently — staff practise in something clickable, and
 * clients want a link or an attachment they can keep.
 */
const formats = [
  {
    icon: MousePointerClick,
    name: "Interactive demo",
    body: "A self-paced walkthrough of the real workflow. People learn by clicking through it, not by watching someone else do it.",
    best: "New-hire ramp and client onboarding",
  },
  {
    icon: Users,
    name: "Sandbox",
    body: "A self-contained copy of your product built from page snapshots. No login, no live access, no risk to real data — so staff can practise the risky workflow safely.",
    best: "Practice runs before touching production",
  },
  {
    icon: MonitorPlay,
    name: "Polished MP4",
    body: "A rendered video with voiceover and zoom baked in, in whatever aspect ratio your LMS or intranet expects.",
    best: "Course modules and training libraries",
  },
  {
    icon: Film,
    name: "Autoplay GIF",
    body: "A short, silent loop of one task that plays inline anywhere — a wiki page, a Slack message, an onboarding email.",
    best: "Quick answers in the flow of work",
  },
  {
    icon: FileText,
    name: "Step-by-step PDF",
    body: "The same walkthrough as a numbered document people can print, annotate, or attach to a client handover pack.",
    best: "Compliance records and offline reference",
  },
];

/* AudienceColumns above is also canvas-deep, so the hairline top border keeps
   the two from reading as one endless block without breaking the palette. */
export function TrainingFormats() {
  return (
    <Section className="border-t border-slate-200/60 bg-canvas-deep">
      <Container>
        <SectionHeading
          eyebrow="For users and employees"
          title="Record the workflow once. Hand it over in five formats."
          description="Your employees and your clients both need to learn the same software — but they don't learn it the same way. Click through the task once and 3Guide produces every format from that single recording, so nothing has to be rebuilt when the audience changes."
          align="center"
          className="mx-auto text-center"
        />

        <div data-stagger className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {formats.map(({ icon: Icon, ...f }) => (
            <div
              key={f.name}
              className="group flex flex-col rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-900/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50 text-purple-700 ring-1 ring-purple-100">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-slate-900">
                {f.name}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-slate-600">
                {f.body}
              </p>
              <p className="mt-6 border-t border-slate-100 pt-4 text-sm font-medium text-slate-500">
                Best for: {f.best}
              </p>
            </div>
          ))}

          {/* The grid leaves one cell open on desktop — use it to move on
              rather than padding it with a sixth format. */}
          <Link
            href="/guide-pro"
            className="group flex flex-col justify-between rounded-3xl border border-purple-200 bg-purple-50/60 p-8 transition duration-500 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-900/5"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-slate-900">
                One recording, every format
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-slate-600">
                Capture the workflow in the Chrome extension and export it
                however each audience needs it — no re-recording, no editing
                suite.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 font-medium text-purple-700">
              Explore Guide Pro
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
