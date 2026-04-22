import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sharad Prasoon | Java & GCP Developer",
  description: "Portfolio of a Java & Google Cloud Platform Developer specializing in building scalable backend systems and cloud-native applications.",
  keywords: ["Java Developer", "GCP", "Google Cloud", "Backend Engineer", "Cloud Native", "Spring Boot", "Kubernetes"],
  openGraph: {
    title: "Sharad Prasoon | Java & GCP Developer",
    description: "Portfolio of a Java & Google Cloud Platform Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">{children}</body>
    </html>
  );
}
