import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cristian Dev',
  description: 'Software developer and UI/UX expert',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-slate-950 to-gray-900 text-pink-600">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

