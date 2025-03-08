import Link from "next/link"
import { Heart, Youtube, Twitter, Twitch } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-pink-600">ちーぬちゃん</h2>
            <p className="text-gray-600 mt-2">
            2024/10/19から活動を始めました！<br />
            見るエナドリ系Vtuberのちーぬちゃんです！！！！！！！！！<br />
            主に#VRChat 内で3Dモデルを使っての配信活動を行っています！<br />
            <br />
            X(旧Twitter)でほぼ毎日可愛すぎる写真をあげているのでそちらも合わせてよろしくおねがいします！！<br />

              </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">リンク</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-pink-600 transition-colors">
                    ホーム
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="text-gray-600 hover:text-pink-600 transition-colors">
                    プロフィール
                  </Link>
                </li>
                <li>
                  <Link href="/schedule" className="text-gray-600 hover:text-pink-600 transition-colors">
                    配信スケジュール
                  </Link>
                </li>
                <li>
                  <Link href="/archive" className="text-gray-600 hover:text-pink-600 transition-colors">
                    アーカイブ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">SNS</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.youtube.com/@chinu_ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-600 transition-colors flex items-center gap-2"
                  >
                    <Youtube size={16} />
                    <span>YouTube</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/dahukokko_H"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-600 transition-colors flex items-center gap-2"
                  >
                    <Twitter size={16} />
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitch.tv/chinuchaaaaan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-600 transition-colors flex items-center gap-2"
                  >
                    <Twitch size={16} />
                    <span>Twitch</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} ちーぬちゃんふぁんさいと！ All rights reserved.
            </p>
          <p className="text-gray-500 text-xs mt-2 flex items-center justify-center">
            Maid with <Heart size={12} className="text-pink-500 mx-1" /> by{" "}
            <a
              href="https://x.com/T4ko_VRC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800 transition-colors flex items-center ml-1"
            >
              <Twitter size={12} className="mr-1" />
              タコ
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}