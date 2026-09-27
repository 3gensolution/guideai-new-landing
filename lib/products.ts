import {
  BarChart3,
  Bot,
  Inbox,
  MonitorPlay,
  MousePointerClick,
  Presentation,
} from "lucide-react";

/**
 * The four products and how the site talks about each one. Header, footer,
 * the product strip and the homepage all read from here, so a product's name,
 * job and one-liner never drift apart between pages.
 *
 * Order is the platform order (see / problem → teach → do → show). The
 * adoption-funnel order used by the homepage loop is Guide Pro → Guidance →
 * Assistant → Analytics, and lives in that component.
 */
export type ProductKey = "analytics" | "guidance" | "assistant" | "guide-pro";

export interface Product {
  key: ProductKey;
  name: string;
  href: string;
  icon: typeof Bot;
  /** The job it does in adoption, as a short verb phrase. */
  job: string;
  /** One sentence on what it does and why it matters. */
  tagline: string;
}

export const PRODUCTS: Product[] = [
  {
    key: "analytics",
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
    job: "See the problem",
    tagline:
      "Shows you where customers get stuck, and whether your fixes worked.",
  },
  {
    key: "guidance",
    name: "Guidance",
    href: "/guides",
    icon: MousePointerClick,
    job: "Teach the user",
    tagline:
      "Walks users through your product, step by step, right on the screen.",
  },
  {
    key: "assistant",
    name: "AI Assistant",
    href: "/assistant",
    icon: Bot,
    job: "Do it for them",
    tagline:
      "Does the task for users who'd rather not learn how.",
  },
  {
    key: "guide-pro",
    name: "Guide Pro",
    href: "/guide-pro",
    icon: Presentation,
    job: "Show the product",
    tagline:
      "Interactive demos that win customers and train teams.",
  },
];

/** Supporting tools that sit alongside the four products. */
export const MORE_TOOLS = [
  {
    name: "Guide Studio",
    href: "/studio",
    icon: MonitorPlay,
    tagline: "Polished product videos from a screen recording.",
  },
  {
    name: "Support Desk",
    href: "/support-desk",
    icon: Inbox,
    tagline: "A shared inbox for questions that need a person.",
  },
];
