"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  LineChart,
  Line,
} from "recharts"

const engagementData = [
  { name: "Tony Stark", score: 92, color: "hsl(217, 91%, 60%)" },
  { name: "Hulk", score: 78, color: "hsl(160, 60%, 45%)" },
  { name: "Spider-Man", score: 85, color: "hsl(0, 84%, 60%)" },
  { name: "Thanos", score: 65, color: "hsl(263, 50%, 55%)" },
  { name: "Black Widow", score: 88, color: "hsl(30, 80%, 55%)" },
]

const timeDistribution = [
  { name: "Discussion", value: 40, color: "hsl(217, 91%, 60%)" },
  { name: "Decision Making", value: 25, color: "hsl(160, 60%, 45%)" },
  { name: "Action Planning", value: 20, color: "hsl(30, 80%, 55%)" },
  { name: "Off-Topic", value: 15, color: "hsl(0, 0%, 40%)" },
]

const meetingHealthData = [
  { metric: "Clarity", value: 85 },
  { metric: "Engagement", value: 78 },
  { metric: "Decision Rate", value: 90 },
  { metric: "Follow-up", value: 72 },
  { metric: "Time Efficiency", value: 88 },
  { metric: "Participation", value: 80 },
]

const efficiencyTrend = [
  { meeting: "Week 1", efficiency: 65 },
  { meeting: "Week 2", efficiency: 72 },
  { meeting: "Week 3", efficiency: 68 },
  { meeting: "Week 4", efficiency: 80 },
  { meeting: "Week 5", efficiency: 85 },
  { meeting: "Week 6", efficiency: 82 },
  { meeting: "Week 7", efficiency: 90 },
]

export function AnalysisTab() {
  return (
    <div className="flex flex-col gap-8">
      {/* Summary Stats */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard label="Meeting ROI" value="87%" trend="+5%" />
        <StatCard label="Avg. Engagement" value="82%" trend="+12%" />
        <StatCard label="Tasks Generated" value="8" trend="+3" />
        <StatCard label="Decision Rate" value="90%" trend="+8%" />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Engagement Bar Chart */}
        <div className="rounded-xl border border-border bg-secondary/30 p-5">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Participant Engagement Scores
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={engagementData} barSize={32}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(222, 20%, 18%)"
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 100]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(222, 47%, 9%)",
                    border: "1px solid hsl(222, 20%, 18%)",
                    borderRadius: "8px",
                    color: "hsl(210, 40%, 96%)",
                  }}
                />
                <Bar dataKey="score" radius={[6, 6, 0, 0]}>
                  {engagementData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Time Distribution Pie Chart */}
        <div className="rounded-xl border border-border bg-secondary/30 p-5">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Time Distribution
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={timeDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {timeDistribution.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(222, 47%, 9%)",
                    border: "1px solid hsl(222, 20%, 18%)",
                    borderRadius: "8px",
                    color: "hsl(210, 40%, 96%)",
                  }}
                  formatter={(value: number) => [`${value}%`, "Time"]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            {timeDistribution.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-muted-foreground">
                  {item.name} ({item.value}%)
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Meeting Health Radar */}
        <div className="rounded-xl border border-border bg-secondary/30 p-5">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Meeting Health Score
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={meetingHealthData}>
                <PolarGrid stroke="hsl(222, 20%, 18%)" />
                <PolarAngleAxis
                  dataKey="metric"
                  tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 11 }}
                />
                <Radar
                  dataKey="value"
                  stroke="hsl(217, 91%, 60%)"
                  fill="hsl(217, 91%, 60%)"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(222, 47%, 9%)",
                    border: "1px solid hsl(222, 20%, 18%)",
                    borderRadius: "8px",
                    color: "hsl(210, 40%, 96%)",
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Efficiency Trend */}
        <div className="rounded-xl border border-border bg-secondary/30 p-5">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Meeting Efficiency Trend
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={efficiencyTrend}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(222, 20%, 18%)"
                  vertical={false}
                />
                <XAxis
                  dataKey="meeting"
                  tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  domain={[50, 100]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(222, 47%, 9%)",
                    border: "1px solid hsl(222, 20%, 18%)",
                    borderRadius: "8px",
                    color: "hsl(210, 40%, 96%)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="efficiency"
                  stroke="hsl(217, 91%, 60%)"
                  strokeWidth={2}
                  dot={{ fill: "hsl(217, 91%, 60%)", r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({
  label,
  value,
  trend,
}: {
  label: string
  value: string
  trend: string
}) {
  return (
    <div className="rounded-xl border border-border bg-secondary/30 p-4">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 font-heading text-2xl font-bold text-foreground">
        {value}
      </p>
      <p className="mt-1 text-xs font-medium text-emerald-400">{trend}</p>
    </div>
  )
}
