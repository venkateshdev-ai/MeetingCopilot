"use client"

import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { sampleTickets } from "@/lib/meeting-data"

const statusColors: Record<string, string> = {
  "To-Do": "bg-muted text-muted-foreground",
  "In-Progress": "bg-primary/20 text-primary",
  Done: "bg-emerald-500/20 text-emerald-400",
  Backlog: "bg-amber-500/20 text-amber-400",
}

const platformColors: Record<string, string> = {
  Jira: "bg-blue-500/20 text-blue-400",
  Asana: "bg-orange-500/20 text-orange-400",
  Linear: "bg-indigo-500/20 text-indigo-400",
}

export function TicketsTab() {
  const platforms = ["Jira", "Asana", "Linear"] as const

  return (
    <div className="flex flex-col gap-8">
      {platforms.map((platform) => {
        const tickets = sampleTickets.filter((t) => t.platform === platform)
        if (tickets.length === 0) return null

        return (
          <div key={platform}>
            <div className="mb-3 flex items-center gap-2">
              <Badge className={platformColors[platform]}>
                {platform}
              </Badge>
            </div>

            <div className="overflow-hidden rounded-xl border border-border">
              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="text-muted-foreground">
                      Issue Type
                    </TableHead>
                    <TableHead className="text-muted-foreground">
                      TaskID
                    </TableHead>
                    <TableHead className="text-muted-foreground">
                      Title
                    </TableHead>
                    <TableHead className="text-muted-foreground">
                      Reporter
                    </TableHead>
                    <TableHead className="text-muted-foreground">
                      Assignee
                    </TableHead>
                    <TableHead className="text-muted-foreground">
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tickets.map((ticket) => (
                    <TableRow
                      key={ticket.taskId}
                      className="border-border hover:bg-secondary/50"
                    >
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="border-border text-foreground"
                        >
                          {ticket.issueType}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-mono text-xs text-muted-foreground">
                        {ticket.taskId}
                      </TableCell>
                      <TableCell className="font-medium text-foreground">
                        {ticket.title}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {ticket.reporter}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {ticket.assignee}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={
                            statusColors[ticket.status] || statusColors["To-Do"]
                          }
                        >
                          {ticket.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )
      })}
    </div>
  )
}
