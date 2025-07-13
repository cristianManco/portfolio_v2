import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
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
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
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
    google: "your-google-verification-code",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#8b5cf6" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen bg-slate-950">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
