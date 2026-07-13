import Image from "next/image";
import {
  Bot,
  CircleDot,
  Inbox,
  MessageSquare,
  Sparkles,
  Tags,
  Timer,
  UserCheck,
  Workflow,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/marketing/page-hero";
import { FeatureRow } from "@/components/marketing/feature-row";
import { FaqSection } from "@/components/marketing/faq";
import { CtaBanner } from "@/components/marketing/cta-banner";
import {
  Container,
  Section,
  SectionHeading,
  accentCycle,
  accents,
} from "@/components/marketing/primitives";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    icon: Inbox,
    title: "Shared inbox",
    description:
      "Every conversation in one place, with full user context: plan, activity, and guide history.",
  },
  {
    icon: UserCheck,
    title: "Assignment & ownership",
    description:
      "Route conversations to the right agent with clear ownership and internal notes.",
  },
  {
    icon: Workflow,
    title: "Automation rules",
    description:
      "Auto-route, tag, prioritize, and escalate based on the rules you define.",
  },
  {
    icon: Sparkles,
    title: "AI-drafted replies",
    description:
      "Suggested responses grounded in your knowledge base — agents review, edit, and send.",
  },
  {
    icon: Tags,
    title: "Tagging & views",
    description:
      "Slice the queue by topic, urgency, or team with saved views and filters.",
  },
  {
    icon: Timer,
    title: "SLAs & analytics",
    description:
      "Response-time targets and resolution metrics so quality stays measurable.",
  },
];

const faqItems = [
  {
    question: "Does this replace my existing help desk?",
    answer:
      "It can. 3Guide's support desk covers the core help desk workflow — shared inbox, assignment, automation rules, and reporting — with the advantage that AI deflection and in-app guides live in the same platform.",
  },
  {
    question: "How much does the AI actually deflect?",
    answer:
      "The assistant answers repetitive how-do-I questions from your knowledge base before they become tickets, and can walk users through flows directly. What reaches your team is the smaller set of questions that genuinely need a human.",
  },
  {
    question: "Can agents see what the AI already told the user?",
    answer:
      "Yes. When a conversation escalates, the full AI conversation history and the user's product context come with it — no 'can you repeat your question?'",
  },
  {
    question: "Do automation rules require code?",
    answer:
      "No. Rules are built visually: choose a trigger (new conversation, keyword, segment), add conditions, and pick actions like routing, tagging, or priority.",
  },
];

/* A stylized product mock of the support inbox */
function InboxMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-purple-950/10 ring-1 ring-slate-900/5">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
        <span className="ml-3 text-xs font-medium text-slate-400">
          3Guide · Support Desk
        </span>
      </div>
      <div className="grid sm:grid-cols-[240px_1fr]">
        {/* Conversation list */}
        <div className="hidden border-r border-slate-100 sm:block">
          {[
            {
              name: "Amara O.",
              preview: "How do I invite my team?",
              tag: "Onboarding",
              active: false,
              ai: true,
            },
            {
              name: "Jonas K.",
              preview: "CSV export is missing columns",
              tag: "Bug",
              active: true,
              ai: false,
            },
            {
              name: "Priya S.",
              preview: "Upgrade to annual billing?",
              tag: "Billing",
              active: false,
              ai: false,
            },
          ].map((c) => (
            <div
              key={c.name}
              className={`border-b border-slate-100 px-4 py-3 ${
                c.active ? "bg-purple-50/60" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-900">{c.name}</p>
                {c.ai ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-600">
                    <Bot className="h-2.5 w-2.5" />
                    AI resolved
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">
                    <CircleDot className="h-2.5 w-2.5" />
                    {c.tag}
                  </span>
                )}
              </div>
              <p className="mt-1 truncate text-xs text-slate-500">{c.preview}</p>
            </div>
          ))}
        </div>
        {/* Active conversation */}
        <div className="p-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700">
                J
              </span>
              <div>
                <p className="text-xs font-semibold text-slate-900">Jonas K.</p>
                <p className="text-[10px] text-slate-400">
                  Pro plan · 42 sessions this month
                </p>
              </div>
            </div>
            <span className="rounded-full bg-purple-50 px-2 py-0.5 text-[10px] font-semibold text-purple-600">
              Assigned to you
            </span>
          </div>
          <div className="space-y-3 py-4">
            <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-slate-100 px-3 py-2 text-xs text-slate-700">
              The CSV export is missing the "source" column that shows in the
              dashboard. Am I doing something wrong?
            </div>
            <div className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-purple-600 px-3 py-2 text-xs text-white">
              Thanks Jonas — checking your workspace now. Which report are you
              exporting from?
            </div>
          </div>
          <div className="rounded-xl border border-purple-100 bg-purple-50/60 p-3">
            <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-purple-600">
              <Sparkles className="h-3 w-3" />
              AI-suggested reply
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
              The "source" column is included when exporting from Visitors →
              Sessions, not the Overview page. Here's a walkthrough I can send
              them…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SupportDeskPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <PageHero
        badge="Support Desk"
        title={
          <>
            AI answers first.{" "}
            <span className="text-purple-600">Humans finish strong.</span>
          </>
        }
        description="A full support inbox built into your adoption platform. The AI assistant deflects the repetitive questions; your team gets the rest — with assignment, automation rules, and every user's product context attached."
      >
        <div data-reveal data-reveal-delay="0.15" className="mx-auto mt-16 max-w-4xl">
          <InboxMock />
        </div>
      </PageHero>

      <Section>
        <Container className="space-y-24">
          <FeatureRow
            eyebrow="Deflect"
            accent="violet"
            title="Most questions never become tickets"
            description="The in-app assistant answers how-do-I questions instantly from your knowledge base, and can walk users through the flow — or complete it for them with the copilot. Your queue only sees what truly needs a person."
            bullets={[
              "AI answers grounded in your own docs and site",
              "Guided walkthroughs offered as answers",
              "Seamless handoff with full conversation history",
            ]}
            image="/docs/copilot-chat-open.png"
            imageAlt="The 3Guide assistant resolving a question before it becomes a ticket"
          />
          <FeatureRow
            eyebrow="Resolve"
            accent="emerald"
            title="A real help desk, not a chat widget"
            description="Behind the assistant is a complete support workflow: shared inbox, assignment, internal notes, tags, saved views, and automation rules that keep the queue moving without babysitting."
            bullets={[
              "Assignment, ownership, and internal notes",
              "Visual automation rules for routing and SLAs",
              "User context — plan, sessions, guide history — on every ticket",
            ]}
            image="/docs/bubble-on-live-site.png"
            imageAlt="The 3Guide support widget embedded on a live product"
            reverse
          />
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Everything a support team actually uses"
            align="center"
          />
          <div data-stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-950/10"
              >
                <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl", accents[accentCycle[i % accentCycle.length]].tile)}>
                  <cap.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FaqSection items={faqItems} title="Support desk, answered" />
      <CtaBanner
        title="Give your support team superpowers"
        description="Deflect the repetitive, resolve the rest — with AI and humans working the same queue."
      />
      <Footer />
    </main>
  );
}
