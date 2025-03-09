import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Analytics } from "../components/Analytics"
import LoadingScreen from "../components/LoadingScreen"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ちーぬちゃんふぁんさいと！",
  description: "ちーぬちゃんの魅力を伝えるファンサイト",
  openGraph: {
    title: "ちーぬちゃんファンサイト",
    description: "ちーぬちゃんの魅力を伝えるファンサイトです",
    url: "https://chinu-chan.vercel.app",
    siteName: "ちーぬちゃんふぁんさいと！",
    locale: "ja_JP",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-gradient-to-br from-pink-50 to-purple-50 min-h-screen`}>
        <LoadingScreen />
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

