import Link from "next/link";

const DOWNLOADS = [
  {
    label: "Download for macOS",
    sub: "Apple Silicon & Intel",
    href: "https://drive.google.com/drive/folders/1cGz1XE6AreAUOxP3eHMSfgX0giP0nCP7?usp=drive_link",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.9-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.89 2.65 3.24 2.6 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.39.81 1.4-.03 2.28-1.27 3.14-2.53.99-1.45 1.4-2.86 1.42-2.93-.03-.02-2.72-1.05-2.75-4.17M14.53 4.42c.71-.87 1.2-2.06 1.06-3.26-1.03.04-2.28.69-3.02 1.55-.66.76-1.24 1.98-1.09 3.15 1.15.09 2.33-.58 3.05-1.44" />
      </svg>
    ),
  },
  {
    label: "Download for Windows",
    sub: "Windows 10+",
    href: "https://drive.google.com/drive/folders/1VJo9yMt2zNlg4uHOic2pW6RgUrQ_qDVJ?usp=sharing",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3 5.4 10.2 4.4v6.9H3V5.4M3 12.6h7.2v6.9L3 18.6v-6M11 4.25 21 3v8.3H11V4.25M11 12.7h10V21l-10-1.3v-7z" />
      </svg>
    ),
  },
  {
    label: "Download for Linux",
    sub: "AppImage",
    href: "https://drive.google.com/drive/folders/1gyoN5gRJLaDLmMSCNiwSm9A9-b-dE1gt?usp=sharing",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.5 2c-1.6 0-2.7 1.4-2.7 3.2 0 .9.1 1.7-.1 2.4-.2.7-.7 1.3-1.2 2-.9 1.1-2 2.3-2.6 3.8-.3.8-.5 1.7-.3 2.5-.3.2-.5.5-.8.6-.6.3-1.3.4-1.7.9-.2.3-.3.6-.1.9.1.3.1.6.1.9 0 .4.2.7.6.8.7.2 1.6.1 2.4.4.5.2.9.6 1.4.7.4.1.9 0 1.2-.3.6.3 1.2.5 1.9.6.9.1 1.9.1 2.8 0 .7-.1 1.3-.3 1.9-.6.3.3.8.4 1.2.3.5-.1.9-.5 1.4-.7.8-.3 1.7-.2 2.4-.4.4-.1.6-.4.6-.8 0-.3 0-.6.1-.9.2-.3.1-.6-.1-.9-.4-.5-1.1-.6-1.7-.9-.3-.1-.5-.4-.8-.6.2-.8 0-1.7-.3-2.5-.6-1.5-1.7-2.7-2.6-3.8-.5-.7-1-1.3-1.2-2-.2-.7-.1-1.5-.1-2.4C15.2 3.4 14.1 2 12.5 2m-1.3 4.1c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9m2.6 0c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9m-1.3 2.5c.9 0 1.9.5 2.3 1.2.1.2 0 .3-.2.4-.6.3-1.4.5-2.1.5s-1.5-.2-2.1-.5c-.2-.1-.3-.2-.2-.4.4-.7 1.4-1.2 2.3-1.2z" />
      </svg>
    ),
  },
];

export function DownloadButtons() {
  return (
    <div
      data-reveal
      className="mx-auto mt-12 grid max-w-4xl gap-4 rounded-3xl bg-ink p-5 sm:grid-cols-3"
    >
      {DOWNLOADS.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-left transition hover:-translate-y-0.5 hover:border-purple-400/40 hover:bg-white/[0.08]"
        >
          <span className="h-9 w-9 shrink-0 text-slate-200 transition group-hover:text-white">
            {item.icon}
          </span>
          <span>
            <span className="block text-base font-bold text-white">
              {item.label}
            </span>
            <span className="mt-0.5 block text-sm text-slate-400">
              {item.sub}
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
