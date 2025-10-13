import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Gokhan Sigircik • Senior Software Engineer",
    template: "%s • Gokhan Sigircik",
  },
  description:
    "Senior Software Engineer portfolio of Gokhan Sigircik. Projects, experience, and contact.",
  keywords: [
    "Gokhan Sigircik",
    "Senior Software Engineer",
    "Full Stack",
    "React",
    "Next.js",
    "TypeScript",
  ],
  openGraph: {
    title: "Gokhan Sigircik • Senior Software Engineer",
    description:
      "Senior Software Engineer portfolio of Gokhan Sigircik. Projects, experience, and contact.",
    url: "https://example.com",
    type: "website",
    images: [
      {
        url: "/images/profile/homegokhan.jpeg",
        width: 800,
        height: 800,
        alt: "Gokhan Sigircik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gokhan Sigircik • Senior Software Engineer",
    description:
      "Senior Software Engineer portfolio of Gokhan Sigircik. Projects, experience, and contact.",
    images: ["/images/profile/homegokhan.jpeg"],
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
