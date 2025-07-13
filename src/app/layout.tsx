import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://cristdev.vercel.app"),
  title: {
    default: "Cristian Manco | Full Stack Developer",
    template: "%s | Cristian Manco",
  },
  description:
    "Passionate Full Stack Developer specializing in React, Node.js, and modern web technologies. Creating innovative digital solutions that make a difference.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Cristian Manco",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Cristian Manco", url: "https://cristdev.vercel.app" }],
  creator: "Cristian Manco",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cristdev.vercel.app",
    title: "Cristian Manco | Full Stack Developer",
    description:
      "Passionate Full Stack Developer creating innovative digital solutions. Specializing in React, Node.js, and modern web technologies.",
    siteName: "Cristian Manco Portfolio",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Cristian Manco - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristian Manco | Full Stack Developer",
    description:
      "Passionate Full Stack Developer creating innovative digital solutions. Specializing in React, Node.js, and modern web technologies.",
    images: ["/img/logo.png"],
    creator: "@cristiandev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen bg-slate-950">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
