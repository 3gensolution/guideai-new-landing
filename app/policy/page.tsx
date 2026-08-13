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
    <main className="min-h-screen bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-zinc-900"
      >
        Skip to content
      </a>

      <Header />

      <section className="relative overflow-hidden pt-32 pb-12">
        <div className="absolute inset-0 bg-purple-50/60" />
        <div className="relative mx-auto max-w-[960px] px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-purple-600 ring-1 ring-inset ring-purple-200">
              Legal
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base text-slate-500">
              <span className="font-semibold text-slate-700">Effective Date:</span>{" "}
              May 10, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-[960px] px-6 lg:px-8">
          <article
            id="main"
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-700 shadow-sm sm:p-10"
          >
            <div className="space-y-10 text-base leading-relaxed text-slate-600">
              <p>
                3Guide is built to help product teams understand user friction,
                improve onboarding, and deliver in-app guidance that drives
                activation and adoption.
              </p>
              <p>
                Your privacy matters to us at 3Guide. This Privacy Policy
                explains how we collect, use, share, and protect your
                information when you use our website, SDKs, dashboards, guides,
                analytics tools, and related services.
              </p>
              <p>
                By using 3Guide, you agree to the practices described in this
                Privacy Policy.
              </p>

              <h2
                id="information-we-collect"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-slate-900"
              >
                1. Information We Collect
              </h2>
              <p>We collect the following types of information:</p>

              <h3 className="text-lg font-semibold text-slate-900/90">
                a. Account &amp; Business Information
              </h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Name</li>
                <li>Email address</li>
                <li>Company or organization name</li>
                <li>Job title or role</li>
                <li>Billing and payment information (when applicable)</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900/90">
                b. Product &amp; Usage Data
              </h3>
              <p>When 3Guide is integrated into a product, we may collect:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>User interaction events</li>
                <li>Session activity and timelines</li>
                <li>Funnel and workflow activity</li>
                <li>Feature usage and adoption metrics</li>
                <li>Device, browser, operating system, and IP address</li>
                <li>Pages visited and interaction timestamps</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900/90">
                c. Technical &amp; Diagnostic Information
              </h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>SDK performance logs</li>
                <li>Error reports and debugging information</li>
                <li>API usage data</li>
                <li>Access logs and security monitoring information</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900/90">
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
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-slate-900"
              >
                2. How We Use Your Information
              </h2>
              <p>We use your information to:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Create and manage your 3Guide account</li>
                <li>Provide analytics, onboarding, and workflow services</li>
                <li>Improve product performance and usability</li>
                <li>Monitor product adoption and onboarding effectiveness</li>
                <li>Deliver in-app guides, announcements, and contextual help</li>
                <li>Respond to support requests and feedback</li>
                <li>Maintain platform security and prevent misuse</li>
                <li>Communicate updates, releases, or important notices</li>
                <li>Send marketing communications where permitted</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900/90">
                Lawful basis for processing
              </h3>
              <p>
                Under the Nigeria Data Protection Act (NDPA) 2023, we process
                personal data only where a lawful basis applies:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <span className="font-semibold text-slate-800">Consent</span>{" "}
                  — for analytics cookies and marketing communications, which you
                  may withdraw at any time.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    Performance of a contract
                  </span>{" "}
                  — to create your account and deliver the services you request.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    Legitimate interests
                  </span>{" "}
                  — to secure, maintain, and improve the platform, balanced
                  against your rights and freedoms.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    Legal obligation
                  </span>{" "}
                  — where processing is required to comply with applicable law.
                </li>
              </ul>

              <h2
                id="how-we-share"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-slate-900"
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
                  3Guide
                </li>
              </ul>
              <p>
                All third parties are expected to handle information securely
                and only for authorized purposes.
              </p>

              <h2
                id="security"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-slate-900"
              >
                4. Data Storage &amp; Security
              </h2>
              <p>
                3Guide uses industry-standard security measures to protect your
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
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-slate-900"
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
                  className="text-purple-600 underline underline-offset-4 hover:text-purple-700"
                  href="mailto:info@3guideai.com"
                >
                  info@3guideai.com
                </a>
                .
              </p>

              <h2
                id="your-rights"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-slate-900"
              >
                6. Your Rights
              </h2>
              <p>
                Under the NDPA 2023, and depending on your location, you have
                the right to:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <span className="font-semibold text-slate-800">Access</span>{" "}
                  the personal data we hold about you
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    Rectify
                  </span>{" "}
                  inaccurate or incomplete information
                </li>
                <li>
                  <span className="font-semibold text-slate-800">Erase</span>{" "}
                  your data (&ldquo;right to be forgotten&rdquo;)
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    Data portability
                  </span>{" "}
                  — receive your data in a structured, machine-readable format
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    Restrict or object
                  </span>{" "}
                  to certain processing activities
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    Withdraw consent
                  </span>{" "}
                  at any time, without affecting prior lawful processing
                </li>
                <li>
                  Lodge a complaint with the{" "}
                  <span className="font-semibold text-slate-800">
                    Nigeria Data Protection Commission (NDPC)
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900/90">
                How to make a Data Subject Access Request (DSAR)
              </h3>
              <p>
                To exercise any of the rights above, email our Data Protection
                Officer at{" "}
                <a
                  className="text-purple-600 underline underline-offset-4 hover:text-purple-700"
                  href="mailto:privacy@3guideai.com?subject=Data%20Subject%20Access%20Request"
                >
                  privacy@3guideai.com
                </a>{" "}
                with the subject line &ldquo;Data Subject Access Request.&rdquo;
                We will verify your identity and respond within{" "}
                <span className="font-semibold text-slate-800">30 days</span> as
                required by the NDPA. There is no fee for a standard request.
              </p>

              <h3 className="text-lg font-semibold text-slate-900/90">
                Data Protection Officer
              </h3>
              <p>
                3Guide has designated a Data Protection Officer (DPO)
                responsible for overseeing compliance with the NDPA 2023. You
                can reach our DPO at{" "}
                <a
                  className="text-purple-600 underline underline-offset-4 hover:text-purple-700"
                  href="mailto:info@3guideai.com"
                >
                  info@3guideai.com
                </a>
                .
              </p>

              <h2
                id="cookies"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-slate-900"
              >
                7. Cookies &amp; Analytics
              </h2>
              <p>3Guide uses two categories of cookies:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <span className="font-semibold text-slate-800">
                    Essential cookies
                  </span>{" "}
                  — required to maintain sessions, authentication, security, and
                  core site functionality. These are always active.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    Analytics cookies
                  </span>{" "}
                  — used to understand how the website is used so we can improve
                  onboarding and navigation. These load{" "}
                  <span className="font-semibold text-slate-800">
                    only after you opt in
                  </span>{" "}
                  via our cookie banner.
                </li>
              </ul>
              <p>
                In line with the Nigeria Data Protection Act (NDPA) 2023 and the
                Nigeria Data Protection Regulation (NDPR), we do not set
                non-essential cookies without your explicit, freely given
                consent. You can withdraw your consent at any time using the{" "}
                <span className="font-semibold text-slate-800">
                  &ldquo;Cookie settings&rdquo;
                </span>{" "}
                link in the footer, or by clearing cookies in your browser.
                Withdrawing consent does not affect processing carried out
                before withdrawal.
              </p>

              <h2
                id="integrations"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-slate-900"
              >
                8. Third-Party Integrations
              </h2>
              <p>
                3Guide may integrate with third-party platforms, APIs, or
                analytics providers. Use of those services may also be subject
                to their respective privacy policies.
              </p>
              <p>
                We encourage users to review the privacy practices of any
                connected third-party services.
              </p>

              <h2
                id="children"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-slate-900"
              >
                9. Children&apos;s Privacy
              </h2>
              <p>
                3Guide is not intended for children under the age of 13, and we
                do not knowingly collect personal information from children.
              </p>
              <p>
                If we become aware that such information has been collected, we
                will take steps to delete it promptly.
              </p>

              <h2
                id="transfers"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-slate-900"
              >
                10. International Data Transfers
              </h2>
              <p>
                Because 3Guide serves customers globally, personal data may be
                transferred to and processed in countries outside Nigeria where
                our infrastructure and sub-processors operate. Our principal
                sub-processors and their processing locations are:
              </p>
              <div className="overflow-x-auto">
                <table className="mt-2 w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500">
                      <th className="py-2 pr-4 font-semibold">Provider</th>
                      <th className="py-2 pr-4 font-semibold">Purpose</th>
                      <th className="py-2 font-semibold">Location</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="border-b border-slate-100">
                      <td className="py-2 pr-4">Cloud hosting &amp; storage</td>
                      <td className="py-2 pr-4">
                        Application hosting, database, backups
                      </td>
                      <td className="py-2">United States / EU</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-2 pr-4">Vercel</td>
                      <td className="py-2 pr-4">
                        Website hosting &amp; privacy-friendly analytics
                      </td>
                      <td className="py-2">United States</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Payment processor</td>
                      <td className="py-2 pr-4">Billing (where applicable)</td>
                      <td className="py-2">United States / EU</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Where we transfer personal data outside Nigeria, we rely on a
                lawful transfer mechanism under NDPA Sections 41&ndash;43 —
                namely an adequacy decision by the Nigeria Data Protection
                Commission, or an approved transfer instrument such as Standard
                Contractual Clauses combined with appropriate technical and
                organisational safeguards, or your explicit consent after being
                informed of the risks.
              </p>
              <p>
                We take reasonable steps to ensure that any appropriate safeguards are in place for international transfers, and that your personal data is treated securely and in accordance with this Privacy Policy.
              </p>

              <h2
                id="updates"
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-slate-900"
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
                className="scroll-mt-28 text-2xl font-semibold tracking-tight text-slate-900"
              >
                12. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or how your
                information is handled, please contact us:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>3Guide</strong>
                </li>
                <li>Lagos, Nigeria</li>
                <li>
                  Email:{" "}
                  <a
                    className="text-purple-600 underline underline-offset-4 hover:text-purple-700"
                    href="mailto:info@3guideai.com"
                  >
                    info@3guideai.com
                  </a>
                </li>
              </ul>

              <hr className="border-slate-200" />
              <p className="text-sm text-slate-500">
                Looking for other resources? Visit{" "}
                <Link
                  className="text-purple-600 underline underline-offset-4 hover:text-purple-700"
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
