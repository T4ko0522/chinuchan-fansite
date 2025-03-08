"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import anime from "animejs"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // ローディングアニメーション
    anime({
      targets: ".loading-logo",
      scale: [0, 1],
      opacity: [0, 1],
      rotate: [0, 360],
      duration: 1000,
      easing: "easeInOutQuad",
    })

    anime({
      targets: ".loading-text",
      opacity: [0, 1],
      translateY: [20, 0],
      delay: 500,
      duration: 800,
      easing: "easeOutQuad",
    })

    // 3秒後にローディング画面を非表示
    const timer = setTimeout(() => {
      anime({
        targets: ".loading-screen",
        opacity: [1, 0],
        duration: 800,
        easing: "easeOutQuad",
        complete: () => {
          setLoading(false)
        },
      })
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="loading-screen fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="loading-logo relative w-32 h-32 mb-6">
        <Image
          src="/logo.png"
          alt="ちーぬちゃんロゴ"
          fill
          className="object-contain rounded-full p-2 bg-white shadow-lg"
        />
      </div>
      <h1 className="loading-text text-3xl font-bold text-pink-600 mb-2">ちーぬちゃんふぁんさいと！</h1>
      <div className="loading-text flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
        <div className="w-3 h-3 rounded-full bg-pink-500 animate-bounce" style={{ animationDelay: "200ms" }}></div>
        <div className="w-3 h-3 rounded-full bg-pink-600 animate-bounce" style={{ animationDelay: "400ms" }}></div>
      </div>
    </div>
  )
}

