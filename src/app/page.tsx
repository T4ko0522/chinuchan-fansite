"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import anime from "animejs"
import { Calendar, Heart, Video } from "lucide-react"
import SchedulePreview from "../components/SchedulePreview"

export default function Home() {
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
    <div className="space-y-16">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-10 relative rounded-xl overflow-hidden">
        {/* 背景画像 */}
        {/* 権利的な問題で削除；； */}
        {/* <div className="hero-bg" style={{ backgroundImage: 'url("/background.png")' }}></div> */}
        {/* オーバーレイ */}
        {/* <div className="hero-overlay"></div> */}

        <div className="md:w-1/2 space-y-6 relative z-10" ref={animationRef}>
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 animate-item">ふぁんさいとへようこそ！</h1>
          <p className="text-lg text-gray-700 animate-item">
            見るエナドリ系Vtuberのちーぬちゃん!!! <br />
            ⚠️ちーぬちゃんの<strong className="text-pink-600">非公式</strong>ファンサイトです。<br />
            このページは<strong className="text-pink-600">開発中です。</strong>現在バックエンドは出来ていません。<br />
            タコの画像は<strong className="text-pink-600">仮の画像です。</strong>画像の用意が出来次第置き換えます。
          </p>
          <div className="flex flex-wrap gap-4 animate-item">
            <Link href="/profile" className="btn-primary rounded-full flex items-center gap-2">
              <Heart size={18} />
              プロフィールを見る
            </Link>
            <Link href="/schedule" className="btn-secondary rounded-full flex items-center gap-2">
              <Calendar size={18} />
              配信スケジュール
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center animate-float relative z-10">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image src="/temp.png" alt="ちーぬちゃん立ち絵" fill className="object-contain" priority />
          </div>
        </div>
      </section>

      {/* Latest Stream */}
      <section className="py-10">
        <h2 className="section-title">最新の配信</h2>
        <div className="card p-6">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/s5XqSASlXhc?si=LFFSNAfOFrczmVgG"
              title="最新の配信"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800">
              【シリーズ未履修だから色々教えてほしいLimbus Company実況配信その１
            </h3>
            <p className="text-gray-600 mt-2">
              ロボトミーコーポレーションみたいなやつはかなり昔にちょこっとやったけど
              <br />
              ストーリースキップしちゃった記憶。。。(;o;)
              <br />
              ...
            </p>
            <Link href="/archive" className="inline-flex items-center mt-4 text-pink-600 hover:text-pink-700">
              <Video size={18} className="mr-2" />
              もっと見る
            </Link>
          </div>
        </div>
      </section>

      {/* Schedule Preview */}
      <section className="py-10">
        <h2 className="section-title">
          今後の配信予定(バックエンドがまだなのでダミーデータ)
          </h2>
        <SchedulePreview />
        <div className="text-center mt-8">
          <Link href="/schedule" className="btn-primary rounded-full inline-flex items-center">
            <Calendar size={18} className="mr-2" />
            スケジュール詳細
          </Link>
        </div>
      </section>
    </div>
  )
}

