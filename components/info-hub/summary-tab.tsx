"use client"

import { CheckCircle2, Clock, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { sampleSummary } from "@/lib/meeting-data"

export function SummaryTab() {
  return (
    <div className="flex flex-col gap-6">
      {/* Meeting Info */}
      <div className="flex flex-col gap-4">
        <div>
          <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Meeting Title
          </label>
          <h2 className="mt-1 font-heading text-xl font-semibold text-foreground">
            {sampleSummary.title}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>
              Meeting Duration:{" "}
              <span className="font-medium text-foreground">
                {sampleSummary.duration}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>Participants:</span>
            <div className="flex flex-wrap gap-1">
              {sampleSummary.participants.map((p) => (
                <Badge key={p} variant="secondary" className="bg-secondary text-foreground">
                  {p}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="rounded-xl border border-border bg-secondary/50 p-5">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Executive Summary
        </h3>
        <p className="leading-relaxed text-foreground">
          {sampleSummary.executiveSummary}
        </p>
      </div>

      {/* Key Decisions */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Key Decisions Made
        </h3>
        <div className="flex flex-col gap-3">
          {sampleSummary.keyDecisions.map((decision, i) => (
            <div
              key={i}
              className="flex gap-3 rounded-xl border border-border bg-secondary/30 p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h4 className="font-medium text-foreground">
                  {decision.title}
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {decision.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
