"use client"

import React from "react"

import { useState } from "react"
import { MapPin, Video, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface CreateMeetingModalProps {
  open: boolean
  onClose: () => void
}

export function CreateMeetingModal({ open, onClose }: CreateMeetingModalProps) {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [participants, setParticipants] = useState("")
  const [location, setLocation] = useState("")
  const [googleMeet, setGoogleMeet] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="border-border bg-card text-foreground sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-lg font-semibold text-foreground">
            Create Meeting
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="meeting-title" className="text-foreground">
              Meeting title
            </Label>
            <Input
              id="meeting-title"
              placeholder="CoPilot meeting review on Automation"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-border bg-secondary text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-foreground">Select date and time</Label>
            <div className="flex gap-3">
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="flex-1 border-border bg-secondary text-foreground"
              />
              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-32 border-border bg-secondary text-foreground"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="participants" className="text-foreground">
              Add participants
            </Label>
            <Input
              id="participants"
              placeholder="Search by name or email"
              value={participants}
              onChange={(e) => setParticipants(e.target.value)}
              className="border-border bg-secondary text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => setGoogleMeet(!googleMeet)}
              className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-colors ${
                googleMeet
                  ? "border-primary bg-primary/10 text-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              <Video className="h-4 w-4" />
              Join with Google Meet
            </button>

            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Add location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border-border bg-secondary pl-9 text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <Button type="submit" className="mt-2 w-full">
            Send Invite
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
