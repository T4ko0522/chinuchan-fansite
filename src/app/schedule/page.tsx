"use client"

import { useEffect, useRef, useState } from "react"
import anime from "animejs"
import { CalendarIcon, ChevronLeft, ChevronRight, Clock, Gamepad2, MessageCircle, Music } from "lucide-react"

// 配信スケジュールダミーデータ
// APIから取得するデータを想定
const scheduleData = [
  {
    id: 1,
    title: "Temp title 雑談てきな？",
    date: "2025-03-10",
    time: "20:00",
    duration: "2時間",
    type: "chat",
    description: "ざつだんはいしんてきな？！",
  },
  {
    id: 2,
    title: "Temp title VRC ざつだん！",
    date: "2025-03-17",
    time: "19:00",
    duration: "3時間",
    type: "game",
    description: "VRCでざつだんするよ！！",
  },
  {
    id: 3,
    title: "temp title うたはいしん！ないとおもうけど一応想定として！",
    date: "2025-03-20",
    time: "21:00",
    duration: "1.5時間",
    type: "music",
    description: "いつか歌枠してみてほしいよね。。。",
  },
  {
    id: 4,
    title: "temp title Valo",
    date: "2025-03-22",
    time: "22:00",
    duration: "2時間",
    type: "game",
    description: "Valo配信まってます。。。",
  },
  {
    id: 5,
    title: "temp title 思いつかなかったよね",
    date: "2025-03-25",
    time: "20:00",
    duration: "2時間",
    type: "chat",
    description: "そろそろアイデアがつきてきた",
  },
  {
    id: 6,
    title: "temp title ",
    date: "2025-03-28",
    time: "19:00",
    duration: "3時間",
    type: "game",
    description: "なむなむ",
  },
  {
    id: 7,
    title: "temp title ",
    date: "2025-03-30",
    time: "20:00",
    duration: "3時間",
    type: "game",
    description: "なむなむー",
  },
]

// 月の日数を取得する関数
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}

// 月の最初の日の曜日を取得する関数
const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay()
}

export default function SchedulePage() {
  const animationRef = useRef<HTMLDivElement>(null)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const daysInMonth = getDaysInMonth(year, month)
  const firstDayOfMonth = getFirstDayOfMonth(year, month)

  const monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]

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

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  // 日付をYYYY-MM-DD形式に変換する関数
  const formatDate = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
  }

  // 特定の日付の配信スケジュールを取得する関数
  const getScheduleForDate = (date: string) => {
    return scheduleData.filter((schedule) => schedule.date === date)
  }

  // 特定の日付に配信があるかチェックする関数
  const hasSchedule = (date: string) => {
    return scheduleData.some((schedule) => schedule.date === date)
  }

  // 配信タイプに応じたアイコンを返す関数
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "game":
        return <Gamepad2 size={18} className="text-green-600" />
      case "chat":
        return <MessageCircle size={18} className="text-blue-600" />
      case "music":
        return <Music size={18} className="text-purple-600" />
      default:
        return <CalendarIcon size={18} className="text-gray-600" />
    }
  }

  return (
    <div className="space-y-12" ref={animationRef}>
      <section className="animate-item">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">配信スケジュール</h1>
        <p className="text-lg text-gray-700 mb-8">
          ちーぬちゃんの配信スケジュールをいれるところ！apiとかからの自動化は難しいからどうしようかな。。。というところ
        </p>
      </section>

      <section className="animate-item">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <button onClick={prevMonth} className="p-2 rounded-full hover:bg-gray-100" aria-label="前月">
              <ChevronLeft size={24} />
            </button>
            <h2 className="text-2xl font-semibold">
              {year}年{monthNames[month]}
            </h2>
            <button onClick={nextMonth} className="p-2 rounded-full hover:bg-gray-100" aria-label="次月">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-4">
            {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
              <div key={day} className="text-center font-medium py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {/* 前月の日付 */}
            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
              <div key={`prev-${index}`} className="text-center py-2 text-gray-400">
                {getDaysInMonth(year, month - 1) - firstDayOfMonth + index + 1}
              </div>
            ))}

            {/* 当月の日付 */}
            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1
              const dateString = formatDate(year, month, day)
              const isToday = new Date().toDateString() === new Date(year, month, day).toDateString()
              const isSelected = selectedDate === dateString
              const hasEvent = hasSchedule(dateString)

              return (
                <div
                  key={`current-${index}`}
                  onClick={() => setSelectedDate(dateString)}
                  className={`
                    text-center py-2 rounded-lg cursor-pointer relative
                    ${isToday ? "bg-pink-100 text-pink-800" : ""}
                    ${isSelected ? "bg-pink-500 text-white" : ""}
                    ${!isToday && !isSelected ? "hover:bg-gray-100" : ""}
                  `}
                >
                  {day}
                  {hasEvent && (
                    <span
                      className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full ${isSelected ? "bg-white" : "bg-pink-500"}`}
                    ></span>
                  )}
                </div>
              )
            })}

            {/* 翌月の日付 */}
            {Array.from({ length: 42 - (firstDayOfMonth + daysInMonth) }).map((_, index) => (
              <div key={`next-${index}`} className="text-center py-2 text-gray-400">
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedDate && (
        <section className="animate-item">
          <h2 className="section-title">{selectedDate} の配信</h2>
          <div className="space-y-4">
            {getScheduleForDate(selectedDate).length > 0 ? (
              getScheduleForDate(selectedDate).map((schedule) => (
                <div key={schedule.id} className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-pink-100 p-3 rounded-full">{getTypeIcon(schedule.type)}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800">{schedule.title}</h3>
                      <div className="flex items-center gap-6 mt-2 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          <span>
                            {schedule.time} ({schedule.duration})
                          </span>
                        </div>
                      </div>
                      <p className="mt-3 text-gray-700">{schedule.description}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="card p-6 text-center">
                <p className="text-gray-600">この日の配信予定はありません。</p>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="animate-item">
        <h2 className="section-title">配信についての注意事項</h2>
        <div className="card p-6">
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>配信についての注意事項ってあるのかな</li>
            <li>とりあえずつくってみったけどいらなかったら</li>
            <li>消すかも？</li>
          </ul>
        </div>
      </section>
    </div>
  )
}