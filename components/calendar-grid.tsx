"use client"

import { Clock } from "lucide-react"
import type { Meeting } from "@/lib/meeting-data"
import { teamMembers } from "@/lib/meeting-data"

interface CalendarGridProps {
  meetings: Meeting[]
  selectedDate: string
  onMeetingClick: (meeting: Meeting) => void
}

const hours = Array.from({ length: 11 }, (_, i) => i + 7)

export function CalendarGrid({
  meetings,
  selectedDate,
  onMeetingClick,
}: CalendarGridProps) {
  const dayMeetings = meetings.filter((m) => m.date === selectedDate)

  const getTimeOffset = (time: string) => {
    const [h, m] = time.split(":").map(Number)
    return (h - 7) * 80 + (m / 60) * 80
  }

  const getDuration = (start: string, end: string) => {
    const [sh, sm] = start.split(":").map(Number)
    const [eh, em] = end.split(":").map(Number)
    return ((eh * 60 + em - (sh * 60 + sm)) / 60) * 80
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="relative min-h-full">
        {/* Time slots */}
        {hours.map((hour) => (
          <div key={hour} className="flex h-20 border-b border-border/50">
            <div className="flex w-20 shrink-0 items-start justify-end px-3 pt-1">
              <span className="text-xs text-muted-foreground">
                {hour.toString().padStart(2, "0")}:00
              </span>
            </div>
            <div className="flex-1 border-l border-border/30" />
          </div>
        ))}

        {/* Meetings */}
        {dayMeetings.map((meeting) => {
          const top = getTimeOffset(meeting.startTime)
          const height = getDuration(meeting.startTime, meeting.endTime)
          const participants = meeting.participants
            .map((id) => teamMembers.find((m) => m.id === id))
            .filter(Boolean)

          return (
            <button
              key={meeting.id}
              type="button"
              onClick={() => onMeetingClick(meeting)}
              className="absolute left-20 right-4 cursor-pointer"
              style={{ top: `${top}px`, height: `${height}px` }}
            >
              <div
                className={`flex h-full flex-col rounded-lg ${meeting.color} p-3 text-left text-primary-foreground shadow-lg transition-all hover:opacity-90`}
              >
                <span className="text-sm font-semibold leading-tight">
                  {meeting.title}
                </span>
                <span className="mt-1 flex items-center gap-1 text-xs opacity-80">
                  <Clock className="h-3 w-3" />
                  {meeting.startTime} - {meeting.endTime}
                </span>
                <div className="mt-auto flex items-center gap-1">
                  {participants.slice(0, 3).map((p) => (
                    <div
                      key={p!.id}
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-background/20 text-[10px] font-semibold"
                      title={p!.name}
                    >
                      {p!.avatar}
                    </div>
                  ))}
                  {participants.length > 3 && (
                    <span className="text-[10px] opacity-70">
                      +{participants.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
