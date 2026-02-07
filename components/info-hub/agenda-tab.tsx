"use client"

import { CheckCircle2, ExternalLink, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { sampleAgenda } from "@/lib/meeting-data"

export function AgendaTab() {
  return (
    <div className="flex flex-col gap-6">
      {/* Meeting Header */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Meeting Title
        </label>
        <h2 className="font-heading text-lg font-semibold text-foreground">
          Which LLM we can use for better response and why?
        </h2>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>Participants: Tony Stark, Hulk, Spider-Man, Thanos</span>
        </div>
      </div>

      {/* Agenda Items */}
      <div>
        <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          <FileText className="h-4 w-4" />
          Agenda
        </h3>
        <div className="flex flex-col gap-4">
          {sampleAgenda.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-secondary/50 p-4"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div className="flex-1">
                  <p className="font-medium text-foreground">{item.topic}</p>
                  {item.previousMeetDate && (
                    <button
                      type="button"
                      className="mt-2 flex items-center gap-1 text-xs text-primary hover:underline"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Previous meet on {item.previousMeetDate} - Click to view
                    </button>
                  )}
                  {item.details.length > 0 && (
                    <div className="mt-3 flex flex-col gap-1.5">
                      <span className="text-xs font-medium uppercase text-muted-foreground">
                        Discussed:
                      </span>
                      {item.details.map((detail, j) => (
                        <p
                          key={j}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                          {detail}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Items */}
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
        <h3 className="mb-2 text-sm font-semibold text-primary">
          Action Items
        </h3>
        <p className="text-sm text-foreground">
          Testing and providing the analysis and feasibility on the discussed
          items
        </p>
        <div className="mt-3 flex items-center gap-3">
          <Badge
            variant="secondary"
            className="bg-primary/20 text-primary"
          >
            Status: Done
          </Badge>
          <button
            type="button"
            className="text-xs text-primary hover:underline"
          >
            Click to view ticket
          </button>
        </div>
      </div>
    </div>
  )
}
