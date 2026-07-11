import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'User Onboarding',
  description:
    'Turn signups into activated users with AI-built guided tours, in-context answers, and analytics that show exactly where new users drop off.',
  openGraph: {
    title: 'User Onboarding | 3Guide',
    description:
      'Turn signups into activated users with AI-built guided tours and friction analytics.',
    url: 'https://3guideai.com/use-cases/user-onboarding',
  },
  alternates: {
    canonical: 'https://3guideai.com/use-cases/user-onboarding',
  },
}

export default function UserOnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
