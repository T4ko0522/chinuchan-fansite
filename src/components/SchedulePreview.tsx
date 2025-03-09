import { Calendar, Clock, Gamepad2, MessageCircle, Music } from "lucide-react"

// 配信スケジュールのデータ（プレビュー用）
const schedulePreviewData = [
  {
    id: 1,
    title: "Title1 Chat",
    date: "2025-03-09",
    time: "20:00",
    type: "chat",
  },
  {
    id: 2,
    title: "Title2 Game",
    date: "2025-03-10",
    time: "19:00",
    type: "game",
  },
  {
    id: 3,
    title: "Title3 Music",
    date: "2025-03-11",
    time: "21:00",
    type: "music",
  },
]

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
      return <Calendar size={18} className="text-gray-600" />
  }
}

export default function SchedulePreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {schedulePreviewData.map((schedule) => (
        <div key={schedule.id} className="card p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-pink-100 p-3 rounded-full">{getTypeIcon(schedule.type)}</div>
            <div>
              <p className="text-sm text-gray-600">{schedule.date}</p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock size={14} />
                <span>{schedule.time}</span>
              </div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-800">{schedule.title}</h3>
        </div>
      ))}
    </div>
  )
}