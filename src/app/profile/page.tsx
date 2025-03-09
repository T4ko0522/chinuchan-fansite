"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import anime from "animejs"
import { Gamepad2, Headphones, Heart, MessageCircle, Tv } from "lucide-react"

export default function ProfilePage() {
  const animationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (animationRef.current) {
      anime({
        targets: animationRef.current.querySelectorAll(".animate-item"),
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(200),
        easing: "easeOutQuad",
        duration: 800,
      })
    }
  }, [])

  return (
    <div className="space-y-16" ref={animationRef}>
      <section className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/3 animate-float">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <Image src="/temp.png" alt="ちーぬちゃんプロフィール画像" fill className="object-contain" />
          </div>
        </div>
        <div className="md:w-2/3 space-y-6 animate-item">
          <h1 className="text-4xl font-bold text-pink-600">ちーぬちゃん</h1>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">ゲーム実況</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">雑談</span>
          </div>
          <p className="text-lg text-gray-700">
            {/* 自己紹介挿入場所 */}
            こんちーぬ！
            <br />
            自己紹介テキストをここに
          </p>
          <div className="flex items-center gap-2">
            <Heart className="text-pink-500" />
            <span className="font-medium">誕生日: 12月14日</span>
          </div>
        </div>
      </section>

      <section className="animate-item">
        <h2 className="section-title">配信歴</h2>
        <div className="space-y-6">
          <div className="card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-pink-100 p-3 rounded-full">
                <Tv className="text-pink-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">配信開始</h3>
                <p className="text-gray-600">2024年10月19日～</p>
              </div>
            </div>
            <p className="text-gray-700">
              {/* 配信開始経緯てきな所 */}
              世界一かわいいちーぬちゃん！！！
            </p>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Gamepad2 className="text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">ゲーム配信</h3>
                <p className="text-gray-600">いろんなジャンルのゲームをプレイ！</p>
              </div>
            </div>
            <p className="text-gray-700">
              {/* ゲーム配信 */}
              どういうゲームやっているか～とか！
            </p>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <MessageCircle className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">雑談配信</h3>
                <p className="text-gray-600">世界一かわいいちーぬちゃんを見てって！</p>
              </div>
            </div>
            <p className="text-gray-700">
              {/* 雑談配信 */}
              雑談枠でどういうの話してるか～とか！！
            </p>
          </div>
        </div>
      </section>

      <section className="animate-item">
        <h2 className="section-title">好きなもの</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-pink-100 p-3 rounded-full">
                <Gamepad2 className="text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold">ゲーム</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>すきなゲームいれるとこ！</li>
              <li>ちーぬちゃん</li>
              <li>だいすきっ！</li>
              <li>♡</li>
            </ul>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Headphones className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">音楽</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>好きな音楽いれるとこ！</li>
              <li>音楽以外になにも</li>
              <li>思いつかなかった...</li>
              <li>全然他のものに変えれる！</li>
            </ul>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <MessageCircle className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">趣味</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>趣味をいれるとこ！</li>
              <li>ちーぬちゃんかわいいー！</li>
              <li>ちゅ！</li>
              <li>♡</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="animate-item">
        <h2 className="section-title">メッセージ</h2>
        <div className="card p-8">
          <p className="text-lg text-gray-700 italic">
            （もしちーぬちゃんからメッセージをもらえたらそれを入れる場所。。。）<br />
            「こんちーぬ！」
          </p>
          <p className="text-right font-semibold text-pink-600 mt-4">- ちーぬちゃん</p>
        </div>
      </section>
    </div>
  )
}