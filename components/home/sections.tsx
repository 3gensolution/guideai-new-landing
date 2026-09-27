import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Landmark,
  Rocket,
  Users,
  X,
} from "lucide-react";
import {
  CheckItem,
  Container,
  Section,
  SectionHeading,
} from "@/components/marketing/primitives";

/* ------------------------------------------------------------------ */
/* Problem                                                             */
/* ------------------------------------------------------------------ */

const oldWay = [
  "Customers sign up, get confused, and quietly leave",
  "Support answers the same questions every week",
  "Training new staff and clients takes weeks of calls",
];

const newWay = [
  "Users are guided to their first win inside the product",
  "Common questions are answered, or simply done for them",
  "Clients and new hires learn by doing, on their own time",
];

export function ProblemSection() {
  return (
    <Section className="bg-canvas">
      <Container>
        <SectionHeading
          eyebrow="The problem"
          title="People sign up. Then they get stuck."
          description="Every customer who gives up on your software is revenue lost. 3Guide makes sure they don't."
          align="center"
        />
        <div
          data-stagger
          className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-2"
        >
          <div className="rounded-2xl border-2 border-rose-100 bg-rose-50/50 p-8">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
              Without 3Guide
            </p>
            <ul className="mt-7 space-y-5">
              {oldWay.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                    <X className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-base leading-relaxed text-slate-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-purple-300 bg-white p-8 shadow-xl shadow-purple-900/10">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
              With 3Guide
            </p>
            <ul className="mt-7 space-y-5">
              {newWay.map((item) => (
                <CheckItem key={item} accent="emerald">
                  {item}
                </CheckItem>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Who it's for — by kind of business                                  */
/* ------------------------------------------------------------------ */

const businesses = [
  {
    icon: Rocket,
    name: "SaaS & software companies",
    value:
      "Turn more sign-ups into paying, long-term customers, and answer fewer support tickets.",
    href: "/use-cases/user-onboarding",
  },
  {
    icon: Building2,
    name: "Businesses rolling out new software",
    value:
      "Get staff productive on tools like Salesforce, HR or finance systems without weeks of training.",
    href: "/use-cases/client-and-employee-training",
  },
  {
    icon: Landmark,
    name: "Fintech & financial services",
    value:
      "Guide customers through complex sign-ups and forms, so fewer give up halfway.",
    href: "/guides",
  },
  {
    icon: Users,
    name: "B2B sales & customer success teams",
    value:
      "Let prospects try the product before a call, and onboard new clients without live sessions.",
    href: "/guide-pro",
  },
];

export function WhoItsFor() {
  return (
    <Section className="bg-canvas-deep">
      <Container>
        <SectionHeading
          eyebrow="Who it's for"
          title="Built for businesses whose customers live in software"
          align="center"
        />
        <div
          data-stagger
          className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2"
        >
          {businesses.map((b) => (
            <Link
              key={b.name}
              href={b.href}
              className="group flex gap-5 rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-900/5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700 ring-1 ring-purple-100">
                <b.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-medium text-slate-900">{b.name}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  {b.value}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-purple-700">
                  See how
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
