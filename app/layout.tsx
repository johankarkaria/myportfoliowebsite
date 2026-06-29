import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Johan Karkaria — ML Engineer & AI Builder",
  description:
    "Johan Karkaria is an ML Engineer specialising in production-grade MLOps pipelines, NLP, and cloud deployment. B.Tech Chemical Engineering @ NIT Hamirpur.",
  keywords: [
    "Johan Karkaria",
    "ML Engineer",
    "MLOps",
    "Machine Learning",
    "AI Engineer",
    "Python",
    "NLP",
    "AWS",
    "Docker",
    "NIT Hamirpur",
  ],
  openGraph: {
    title: "Johan Karkaria — ML Engineer & AI Builder",
    description:
      "ML Engineer building production-grade pipelines from model training to cloud deployment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
