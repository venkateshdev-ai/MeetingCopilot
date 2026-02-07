"use client"

import { ArrowLeft, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AgendaTab } from "./agenda-tab"
import { TicketsTab } from "./tickets-tab"
import { SummaryTab } from "./summary-tab"
import { AnalysisTab } from "./analysis-tab"

interface InformationHubProps {
  onBack: () => void
}

export function InformationHub({ onBack }: InformationHubProps) {
  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-border px-6 py-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <div className="h-6 w-px bg-border" />
        <h1 className="font-heading text-xl font-bold text-foreground">
          Information Hub
        </h1>
        <div className="ml-auto flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          01 / 02 / 2026
        </div>
      </div>

      {/* Tabs */}
      <div className="flex-1 overflow-y-auto px-6 py-5">
        <Tabs defaultValue="agenda" className="w-full">
          <TabsList className="mb-6 w-full justify-start gap-1 bg-secondary/50">
            <TabsTrigger
              value="agenda"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Agenda
            </TabsTrigger>
            <TabsTrigger
              value="summary"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Summary
            </TabsTrigger>
            <TabsTrigger
              value="tickets"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Tickets Created
            </TabsTrigger>
            <TabsTrigger
              value="analysis"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Analysis Report
            </TabsTrigger>
          </TabsList>

          <TabsContent value="agenda">
            <AgendaTab />
          </TabsContent>
          <TabsContent value="summary">
            <SummaryTab />
          </TabsContent>
          <TabsContent value="tickets">
            <TicketsTab />
          </TabsContent>
          <TabsContent value="analysis">
            <AnalysisTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
