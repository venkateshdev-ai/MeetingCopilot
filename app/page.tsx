"use client"

import { useState } from "react"
import { LandingPage } from "@/components/landing-page"
import { SignInPage } from "@/components/sign-in-page"
import { CalendarSidebar } from "@/components/calendar-sidebar"
import { CalendarGrid } from "@/components/calendar-grid"
import { InfoPanel } from "@/components/info-panel"
import { CreateMeetingModal } from "@/components/create-meeting-modal"
import { InformationHub } from "@/components/info-hub/information-hub"
import { sampleMeetings } from "@/lib/meeting-data"
import type { Meeting } from "@/lib/meeting-data"

type AppView = "landing" | "signin" | "home" | "info-hub"

export default function Page() {
  const [view, setView] = useState<AppView>("landing")
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState("2026-02-01")
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null)

  if (view === "landing") {
    return (
      <LandingPage
        onSignIn={() => setView("signin")}
        onSignUp={() => setView("signin")}
      />
    )
  }

  if (view === "signin") {
    return (
      <SignInPage
        onSignIn={() => setView("home")}
        onBack={() => setView("landing")}
      />
    )
  }

  if (view === "info-hub") {
    return (
      <div className="flex h-screen">
        <CalendarSidebar
          onCreateMeeting={() => setCreateModalOpen(true)}
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
        <div className="flex-1">
          <InformationHub onBack={() => setView("home")} />
        </div>
        <CreateMeetingModal
          open={createModalOpen}
          onClose={() => setCreateModalOpen(false)}
        />
      </div>
    )
  }

  // Home / Calendar view
  return (
    <div className="flex h-screen">
      <CalendarSidebar
        onCreateMeeting={() => setCreateModalOpen(true)}
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
      />
      <main className="flex flex-1 flex-col">
        {/* Top Bar */}
        <header className="flex items-center justify-between border-b border-border px-6 py-3">
          <h1 className="font-heading text-lg font-semibold text-foreground">
            Home
          </h1>
          {selectedMeeting && (
            <div className="flex items-center gap-3 rounded-lg border border-border bg-secondary/50 px-4 py-2">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  {selectedMeeting.title}
                </span>
                <span className="text-xs text-muted-foreground">
                  {selectedMeeting.startTime} - {selectedMeeting.endTime}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setView("info-hub")}
                className="text-xs text-primary hover:underline"
              >
                Click for More info
              </button>
            </div>
          )}
        </header>
        <CalendarGrid
          meetings={sampleMeetings}
          selectedDate={selectedDate}
          onMeetingClick={(meeting) => {
            setSelectedMeeting(meeting)
          }}
        />
      </main>
      <InfoPanel onOpenHub={() => setView("info-hub")} />
      <CreateMeetingModal
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
      />
    </div>
  )
}
