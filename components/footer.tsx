import Image from "next/image";
import Link from "next/link";

const navigation = {
  product: [
    { name: "In-App Guides", href: "/guides" },
    { name: "Browser Copilot", href: "/copilot" },
    { name: "Friction Analytics", href: "/analytics" },
    { name: "Support Desk", href: "/support-desk" },
    { name: "Pricing", href: "/pricing" },
  ],
  solutions: [
    { name: "User Onboarding", href: "/use-cases/user-onboarding" },
    {
      name: "Support Ticket Reduction",
      href: "/use-cases/support-ticket-reduction",
    },
  ],
  company: [
    { name: "Contact", href: "mailto:info@3guideai.com" },
    { name: "Privacy Policy", href: "/policy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.jpeg"
                alt="3Guide logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg"
              />
              <span className="text-lg font-semibold text-white">3Guide</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              The AI-first product adoption platform. Guide, answer, and act —
              directly inside your product.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16">
            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Product
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Solutions
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} 3Guide, by 3gensolution. All rights
            reserved.
          </p>
          <p className="text-sm text-slate-500">info@3guideai.com</p>
        </div>
      </div>
    </footer>
  );
}
