import { Lock, ServerCog, ShieldCheck } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/marketing/primitives";

/**
 * Every competitor carries a security block (Pendo: "Enterprise-grade
 * security. Zero exceptions."). Written for a non-technical buyer — what
 * it means, not which protocol it uses.
 */
const guarantees = [
  {
    icon: Lock,
    title: "Encrypted end to end",
    body: "Traffic between your product, your users, and 3Guide is encrypted the whole way. Nothing travels in the clear.",
  },
  {
    icon: ShieldCheck,
    title: "Locked to your domain",
    body: "The system verifies the widget is running on a site that's actually allowed to use it. Copy the embed code onto another site and every request is refused.",
  },
  {
    icon: ServerCog,
    title: "The intelligence stays server-side",
    body: "The smartest parts run on our servers, not in the browser. That's security — and it means a competitor can't lift the logic out of your page.",
  },
];

export function TrustSection() {
  return (
    <Section className="bg-canvas-deep">
      <Container>
        <SectionHeading
          eyebrow="Trust & safety"
          title="Enterprise-grade by default. No exceptions."
          description="A tool that can act inside your product has to be worth trusting. Here is what that means in practice."
          align="center"
          className="mx-auto text-center"
        />

        <div data-stagger className="mt-16 grid gap-6 lg:grid-cols-3">
          {guarantees.map(({ icon: Icon, ...g }) => (
            <div
              key={g.title}
              className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50 text-purple-700 ring-1 ring-purple-100">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display mt-6 text-xl font-semibold text-slate-900">
                {g.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {g.body}
              </p>
            </div>
          ))}
        </div>

        {/* The mode-safety point — a genuine differentiator, not boilerplate. */}
        <div
          data-reveal
          className="mt-8 rounded-3xl border border-purple-200/70 bg-purple-50/50 p-8 lg:p-10"
        >
          <h3 className="font-display text-xl font-semibold text-slate-900">
            “Tell me how” and “do it for me” are deliberately kept apart
          </h3>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
            The widget always signals which mode you're in — a coloured badge in
            the header, and a different prompt in the box (“Ask how to do
            something…” versus “Tell me what to do for you…”). That's a safety
            feature, not decoration: nobody should ask a how-to question and
            have their account cancelled.
          </p>
        </div>
      </Container>
    </Section>
  );
}
