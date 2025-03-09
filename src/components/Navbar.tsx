"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "ホーム", href: "/" },
  { name: "プロフィール", href: "/profile" },
  { name: "配信スケジュール", href: "/schedule" },
  { name: "アーカイブ", href: "/archive" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white">
                <Image src="/logo.png" alt="ちーぬちゃんロゴ" fill className="object-contain" />
              </div>
              <span className="font-bold text-xl text-pink-600">ちーぬちゃんふぁんさいと！</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-pink-600 relative group transition-colors duration-300"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}
              <a
                href="https://www.youtube.com/@chinu_ch"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-full"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-pink-50 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">メニューを開く</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-600 relative group"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
            <a
              href="https://www.youtube.com/@chinu_ch"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-full text-base font-medium text-white bg-pink-600 hover:bg-pink-700"
              onClick={() => setIsOpen(false)}
            >
              チャンネル登録
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}