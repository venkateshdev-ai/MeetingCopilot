"use client"

import { ChevronRight, FileText, BarChart3, ListChecks, ClipboardList } from "lucide-react"

interface InfoPanelProps {
  onOpenHub: () => void
}

export function InfoPanel({ onOpenHub }: InfoPanelProps) {
  const tabs = [
    { label: "Agenda", icon: FileText },
    { label: "Summary", icon: ClipboardList },
    { label: "Action Items", icon: ListChecks },
    { label: "Tickets Created", icon: ClipboardList },
    { label: "Analysis Report", icon: BarChart3 },
  ]

  return (
    <aside className="flex w-64 flex-col border-l border-border bg-card">
      <div className="border-b border-border px-5 py-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Information Tab
        </h2>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            type="button"
            onClick={onOpenHub}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <tab.icon className="h-4 w-4 shrink-0" />
            <span className="flex-1">{tab.label}</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        ))}
        <p className="mt-3 px-3 text-xs text-muted-foreground">
          Click to view
        </p>
      </div>
    </aside>
  )
}
