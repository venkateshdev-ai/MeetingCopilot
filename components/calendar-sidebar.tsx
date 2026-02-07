"use client"

import { useState } from "react"
import { Plus, Search, Zap } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { teamMembers } from "@/lib/meeting-data"

interface CalendarSidebarProps {
  onCreateMeeting: () => void
  selectedDate: string
  onDateChange: (date: string) => void
}

export function CalendarSidebar({
  onCreateMeeting,
  selectedDate,
  onDateChange,
}: CalendarSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCalendars, setSelectedCalendars] = useState<string[]>([
    "1",
    "2",
    "3",
  ])

  const filteredMembers = teamMembers.filter((m) =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleCalendar = (id: string) => {
    setSelectedCalendars((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  return (
    <aside className="flex h-full w-64 flex-col border-r border-border bg-card">
      {/* Logo */}
      <div className="flex items-center gap-2 px-5 py-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <Zap className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="font-heading text-lg font-bold text-foreground">
          MeetPilot
        </span>
      </div>

      {/* Create + Date */}
      <div className="flex flex-col gap-3 px-4">
        <Button className="w-full gap-2" onClick={onCreateMeeting}>
          <Plus className="h-4 w-4" />
          Create
        </Button>
        <Input
          type="date"
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
          className="border-border bg-secondary text-foreground"
        />
      </div>

      {/* Search Team */}
      <div className="mt-6 px-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search Team"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-border bg-secondary pl-9 text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* My Calendars */}
      <div className="mt-5 flex-1 overflow-y-auto px-4">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          My Calendars
        </h3>
        <div className="flex flex-col gap-2">
          {filteredMembers.slice(0, 5).map((member) => (
            <label
              key={member.id}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-secondary"
            >
              <Checkbox
                checked={selectedCalendars.includes(member.id)}
                onCheckedChange={() => toggleCalendar(member.id)}
              />
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-foreground ${member.color}`}
              >
                {member.avatar}
              </div>
              <span className="text-sm text-foreground">{member.name}</span>
            </label>
          ))}
        </div>

        {/* Add other Calendars */}
        <h3 className="mb-3 mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Add other Calendar
        </h3>
        <div className="flex flex-col gap-2">
          <button
            type="button"
            className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded bg-secondary">
              <span className="text-xs">G</span>
            </div>
            Google Calendar
          </button>
          <button
            type="button"
            className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded bg-secondary">
              <span className="text-xs">M</span>
            </div>
            MS Calendar
          </button>
        </div>
      </div>
    </aside>
  )
}
