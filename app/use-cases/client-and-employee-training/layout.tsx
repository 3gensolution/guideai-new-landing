import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client & Employee Training",
  description:
    "Train clients and employees by letting them do it. In-app walkthroughs, interactive demos, and polished training videos that ramp people faster and cut repeat questions.",
  openGraph: {
    title: "Client & Employee Training | 3Guide",
    description:
      "In-app walkthroughs, interactive demos, and training videos that get clients and employees productive faster.",
    url: "https://3guideai.com/use-cases/client-and-employee-training",
  },
  alternates: {
    canonical: "https://3guideai.com/use-cases/client-and-employee-training",
  },
};

export default function ClientEmployeeTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
