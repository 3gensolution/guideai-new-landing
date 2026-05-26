"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-zinc-900"
      >
        Skip to content
      </a>

      <Header />

      <section className="relative overflow-hidden pt-32 pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-[960px] px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-400 ring-1 ring-inset ring-violet-500/20">
              Legal
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base text-zinc-400">
              <span className="font-semibold text-zinc-200">Effective Date:</span>{" "}
              May 10, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-[960px] px-6 lg:px-8">
          <article
            id="main"
            className="rounded-2xl border border-zinc-800/70 bg-zinc-900/30 p-6 text-zinc-200 shadow-sm backdrop-blur sm:p-10"
          >
            <div className="space-y-10 text-base leading-relaxed text-zinc-300">
              <p>
                GuideAI is built to help product teams understand user friction,
                improve onboarding, and deliver in-app guidance that drives
                activation and adoption.
              </p>
              <p>
                Your privacy matters to us at GuideAI. This Privacy Policy
                explains how we collect, use, share, and protect your
                information when you use our website, SDKs, dashboards, guides,
                analytics tools, and related services.
              </p>
              <p>
                By using GuideAI, you agree to the practices described in this
                Privacy Policy.
              </p>

              <h2
                id="information-we-collect"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-white"
              >
                1. Information We Collect
              </h2>
              <p>We collect the following types of information:</p>

              <h3 className="text-lg font-semibold text-white/90">
                a. Account &amp; Business Information
              </h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Name</li>
                <li>Email address</li>
                <li>Company or organization name</li>
                <li>Job title or role</li>
                <li>Billing and payment information (when applicable)</li>
              </ul>

              <h3 className="text-lg font-semibold text-white/90">
                b. Product &amp; Usage Data
              </h3>
              <p>When GuideAI is integrated into a product, we may collect:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>User interaction events</li>
                <li>Session activity and timelines</li>
                <li>Funnel and workflow activity</li>
                <li>Feature usage and adoption metrics</li>
                <li>Device, browser, operating system, and IP address</li>
                <li>Pages visited and interaction timestamps</li>
              </ul>

              <h3 className="text-lg font-semibold text-white/90">
                c. Technical &amp; Diagnostic Information
              </h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>SDK performance logs</li>
                <li>Error reports and debugging information</li>
                <li>API usage data</li>
                <li>Access logs and security monitoring information</li>
              </ul>

              <h3 className="text-lg font-semibold text-white/90">
                d. Communication Information
              </h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Emails and support conversations</li>
                <li>Feedback submissions</li>
                <li>Early access or waitlist requests</li>
                <li>Marketing preferences and opt-ins</li>
              </ul>

              <h2
                id="how-we-use"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-white"
              >
                2. How We Use Your Information
              </h2>
              <p>We use your information to:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Create and manage your GuideAI account</li>
                <li>Provide analytics, onboarding, and workflow services</li>
                <li>Improve product performance and usability</li>
                <li>Monitor product adoption and onboarding effectiveness</li>
                <li>Deliver in-app guides, announcements, and contextual help</li>
                <li>Respond to support requests and feedback</li>
                <li>Maintain platform security and prevent misuse</li>
                <li>Communicate updates, releases, or important notices</li>
                <li>Send marketing communications where permitted</li>
              </ul>

              <h2
                id="how-we-share"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-white"
              >
                3. How We Share Information
              </h2>
              <p>We do not sell your personal information.</p>
              <p>We may share information with:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Trusted cloud and infrastructure providers</li>
                <li>Analytics and monitoring service providers</li>
                <li>Payment processors (where applicable)</li>
                <li>
                  Professional advisers and legal authorities when required by
                  law
                </li>
                <li>
                  Service providers who help us operate, maintain, and improve
                  GuideAI
                </li>
              </ul>
              <p>
                All third parties are expected to handle information securely
                and only for authorized purposes.
              </p>

              <h2
                id="security"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-white"
              >
                4. Data Storage &amp; Security
              </h2>
              <p>
                GuideAI uses industry-standard security measures to protect your
                information, including:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Encrypted data transmission</li>
                <li>Secure cloud infrastructure</li>
                <li>Access controls and authentication</li>
                <li>Monitoring and logging for unauthorized access attempts</li>
              </ul>
              <p>
                While we work hard to protect your information, no method of
                transmission or storage is completely secure.
              </p>

              <h2
                id="retention"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-white"
              >
                5. Data Retention
              </h2>
              <p>We retain information only for as long as necessary to:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Provide our services</li>
                <li>Improve and maintain the platform</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
              </ul>
              <p>
                You may request deletion of your account or associated data by
                contacting us at{" "}
                <a
                  className="text-violet-300 underline underline-offset-4 hover:text-violet-200"
                  href="mailto:info@3guideai.com"
                >
                  info@3guideai.com
                </a>
                .
              </p>

              <h2
                id="your-rights"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-white"
              >
                6. Your Rights
              </h2>
              <p>
                Depending on your location and applicable laws, you may have
                the right to:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Object to certain processing activities</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
              <p>
                To exercise these rights, contact us at{" "}
                <a
                  className="text-violet-300 underline underline-offset-4 hover:text-violet-200"
                  href="mailto:info@3guideai.com"
                >
                  info@3guideai.com
                </a>
                .
              </p>

              <h2
                id="cookies"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-white"
              >
                7. Cookies &amp; Analytics
              </h2>
              <p>GuideAI may use cookies and similar technologies to:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Maintain sessions and authentication</li>
                <li>Understand product and website usage</li>
                <li>Improve onboarding and navigation</li>
                <li>Analyze platform performance</li>
              </ul>
              <p>You can manage cookie settings through your browser preferences.</p>

              <h2
                id="integrations"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-white"
              >
                8. Third-Party Integrations
              </h2>
              <p>
                GuideAI may integrate with third-party platforms, APIs, or
                analytics providers. Use of those services may also be subject
                to their respective privacy policies.
              </p>
              <p>
                We encourage users to review the privacy practices of any
                connected third-party services.
              </p>

              <h2
                id="children"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-white"
              >
                9. Children&apos;s Privacy
              </h2>
              <p>
                GuideAI is not intended for children under the age of 13, and we
                do not knowingly collect personal information from children.
              </p>
              <p>
                If we become aware that such information has been collected, we
                will take steps to delete it promptly.
              </p>

              <h2
                id="transfers"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-white"
              >
                10. International Data Transfers
              </h2>
              <p>
                Your information may be processed or stored in countries outside
                your own jurisdiction where our infrastructure or service
                providers operate.
              </p>
              <p>
                We take reasonable steps to ensure appropriate safeguards are in
                place for international data transfers.
              </p>

              <h2
                id="updates"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-white"
              >
                11. Updates to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes to our services, legal requirements, or business
                operations.
              </p>
              <p>
                When significant updates are made, we may notify users through
                email, dashboard notifications, or our website.
              </p>

              <h2
                id="contact"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-white"
              >
                12. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or how your
                information is handled, please contact us:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>GuideAI</strong>
                </li>
                <li>Lagos, Nigeria</li>
                <li>
                  Email:{" "}
                  <a
                    className="text-violet-300 underline underline-offset-4 hover:text-violet-200"
                    href="mailto:info@3guideai.com"
                  >
                    info@3guideai.com
                  </a>
                </li>
              </ul>

              <hr className="border-zinc-800/70" />
              <p className="text-sm text-zinc-400">
                Looking for other resources? Visit{" "}
                <Link
                  className="text-violet-300 underline underline-offset-4 hover:text-violet-200"
                  href="/docs"
                >
                  Docs
                </Link>
                .
              </p>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
