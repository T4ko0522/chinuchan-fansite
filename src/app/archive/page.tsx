"use client"

import { useEffect, useRef, useState } from "react"
import anime from "animejs"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileImageIcon as Photo, Video } from "lucide-react"
import Script from "next/script"

// 配信アーカイブのダミーデータ
// APIから取得するデータを想定
const videoArchives = [
  {
    id: "video1",
    title: "シリーズ未履修だから色々教えてほしいLimbus Company実況配信その１",
    date: "2025-03-06",
    embedId: "s5XqSASlXhc?si=2WiLB3iOZj9nTAD9",
  },
  {
    id: "video2",
    title: "【3D雑談】今夜はもう言いたいことを言いまくる【VRChat】",
    date: "2025-03-05",
    embedId: "bo95gZTZOrE?si=bRp1Sdte3lOPljEm",
  },
  {
    id: "video3",
    title: "【12時間生存中】超初心者！ぼっち！ハードコア！エンダードラゴン？よくわかんないけどよゆーでしょｗｗ配信　その６【minecraft】",
    date: "2025-03-03",
    embedId: "EkEWky-9b4Q?si=8T5J9lIHfsKRGTF",
  },
  {
    id: "video4",
    title: "【詳しい人助けて】超初心者！ぼっち！ハードコア！エンダードラゴン？よくわかんないけどよゆーでしょｗｗ配信　その６【minecraft】",
    date: "2025-03-02",
    embedId: "YWHzbKX7WJU?si=MwuTSM4oeS6Qty9o",
  },
  {
    id: "video5",
    title: "【詳しい人助けて】超初心者！ぼっち！ハードコア！エンダードラゴン？よくわかんないけどよゆーでしょｗｗ配信　その５【minecraft】",
    date: "2025-03-01",
    embedId: "hwDgJXRXUEI?si=lTE0olDo5jbqb10y",
  },
  {
    id: "video6",
    title: "【詳しい人助けて】超初心者！ぼっち！ハードコア！エンダードラゴン？よくわかんないけどよゆーでしょｗｗ配信　その４【minecraft】",
    date: "2025-02-26",
    embedId: "avnDWqjv4wI?si=ksdRLR7VOjAPCTdX",
  },
]

export default function ArchivePage() {
  const animationRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState("videos")
  const [twitterLoaded, setTwitterLoaded] = useState(false)

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

  useEffect(() => {
    // Twitter ウィジェットが読み込まれたときに実行
    if (activeTab === "photos" && !twitterLoaded) {
      // @ts-ignore
      if (window.twttr && window.twttr.widgets) {
        // @ts-ignore
        window.twttr.widgets.load()
        setTwitterLoaded(true)
      }
    }
  }, [activeTab, twitterLoaded])

  return (
    <div className="space-y-12" ref={animationRef}>
      <section className="animate-item">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">アーカイブ</h1>
        <p className="text-lg text-gray-700 mb-8">
          過去の配信アーカイブと写真を見ることができます。
          「動画」タブでは過去の配信のアーカイブを、「写真」タブではTwitterに投稿した写真を見ることができます。
        </p>
      </section>

      <section className="animate-item">
        <Tabs defaultValue="videos" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video size={18} />
              <span>YouTubeアーカイブ</span>
            </TabsTrigger>
            <TabsTrigger value="photos" className="flex items-center gap-2">
              <Photo size={18} />
              <span>Twitter</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoArchives.map((video) => (
                <div key={video.id} className="card overflow-hidden">
                  <div className="aspect-video relative">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 line-clamp-2">{video.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{video.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://www.youtube.com/@chinu_ch"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-full inline-flex items-center"
              >
                <Video size={18} className="mr-2" />
                YouTubeで見る
              </a>
            </div>
          </TabsContent>

          <TabsContent value="photos">
            <div className="card p-6">
              <Script
                src="https://platform.twitter.com/widgets.js"
                strategy="lazyOnload"
                onLoad={() => setTwitterLoaded(true)}
              />
              <div className="twitter-timeline-container">
                <a
                  className="twitter-timeline"
                  data-height="800"
                  data-theme="light"
                  href="https://twitter.com/dahukokko_h?ref_src=twsrc%5Etfw"
                >
                  ちーぬちゃんのツイート
                </a>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}