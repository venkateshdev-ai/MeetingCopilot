export interface TeamMember {
  id: string
  name: string
  avatar: string
  color: string
}

export interface Meeting {
  id: string
  title: string
  date: string
  startTime: string
  endTime: string
  participants: string[]
  color: string
}

export interface AgendaItem {
  topic: string
  discussed: boolean
  previousMeetDate?: string
  details: string[]
}

export interface Ticket {
  platform: "Jira" | "Asana" | "Linear"
  issueType: string
  taskId: string
  title: string
  reporter: string
  assignee: string
  status: string
}

export interface MeetingSummary {
  title: string
  duration: string
  participants: string[]
  executiveSummary: string
  keyDecisions: { title: string; description: string }[]
}

export const teamMembers: TeamMember[] = [
  { id: "1", name: "Hulk", avatar: "H", color: "bg-green-600" },
  { id: "2", name: "Batman", avatar: "B", color: "bg-gray-700" },
  { id: "3", name: "Ironman", avatar: "I", color: "bg-red-600" },
  { id: "4", name: "Spider-Man", avatar: "S", color: "bg-red-500" },
  { id: "5", name: "Thanos", avatar: "T", color: "bg-indigo-600" },
  { id: "6", name: "Black Widow", avatar: "BW", color: "bg-gray-800" },
  { id: "7", name: "Captain America", avatar: "CA", color: "bg-blue-700" },
  { id: "8", name: "Thor", avatar: "Th", color: "bg-yellow-600" },
  { id: "9", name: "Ant-Man", avatar: "AM", color: "bg-gray-600" },
  { id: "10", name: "Black Panther", avatar: "BP", color: "bg-gray-900" },
]

export const sampleMeetings: Meeting[] = [
  {
    id: "1",
    title: "CoPilot meeting review on Automation",
    date: "2026-02-01",
    startTime: "10:00",
    endTime: "10:30",
    participants: ["1", "2", "3"],
    color: "bg-primary",
  },
  {
    id: "2",
    title: "Sprint Planning - Q1 Goals",
    date: "2026-02-01",
    startTime: "14:00",
    endTime: "15:00",
    participants: ["1", "4", "5"],
    color: "bg-emerald-600",
  },
  {
    id: "3",
    title: "Design Review Session",
    date: "2026-02-02",
    startTime: "11:00",
    endTime: "11:45",
    participants: ["2", "3", "6"],
    color: "bg-amber-600",
  },
]

export const sampleAgenda: AgendaItem[] = [
  {
    topic: "Choosing the color palette",
    discussed: true,
    details: [
      "Reviewed brand guidelines",
      "Selected primary blue (#3B82F6) for consistency",
    ],
  },
  {
    topic: "Making it available in other languages like French, English, other",
    discussed: true,
    previousMeetDate: "12/12/2025",
    details: [
      "High level requirement",
      "Resource, why factor, what, & how",
      "Timeline and beta version",
    ],
  },
  {
    topic:
      "Providing answers to user by crawling through the company info",
    discussed: true,
    details: [
      "Testing and providing the analysis and feasibility on the discussed items",
    ],
  },
]

export const sampleTickets: Ticket[] = [
  {
    platform: "Jira",
    issueType: "Task",
    taskId: "MEET001",
    title: "Wireframe High Fidelity",
    reporter: "Tony Stark",
    assignee: "Hulk",
    status: "To-Do",
  },
  {
    platform: "Jira",
    issueType: "Story",
    taskId: "AUTO234",
    title: "Platform feasibility for end user",
    reporter: "Tony Stark",
    assignee: "Spider-Man",
    status: "In-Progress",
  },
  {
    platform: "Jira",
    issueType: "Epic",
    taskId: "ML9801",
    title: "Accessibility",
    reporter: "Tony Stark",
    assignee: "Thanos",
    status: "In-Progress",
  },
  {
    platform: "Asana",
    issueType: "Task",
    taskId: "AS-101",
    title: "Social Media Launch Assets",
    reporter: "Tony Stark",
    assignee: "Black Widow",
    status: "To-Do",
  },
  {
    platform: "Asana",
    issueType: "Milestone",
    taskId: "AS-102",
    title: "Finalize Copilot Brand Guidelines",
    reporter: "Tony Stark",
    assignee: "Captain America",
    status: "In-Progress",
  },
  {
    platform: "Asana",
    issueType: "Approval",
    taskId: "AS-103",
    title: "Review POC Demo Video",
    reporter: "Tony Stark",
    assignee: "Thor",
    status: "In-Progress",
  },
  {
    platform: "Linear",
    issueType: "Bug",
    taskId: "LN-42",
    title: "Fix OAuth callback latency",
    reporter: "Tony Stark",
    assignee: "Ant-Man",
    status: "Backlog",
  },
  {
    platform: "Linear",
    issueType: "Feature",
    taskId: "LN-43",
    title: "Transcript parser",
    reporter: "Tony Stark",
    assignee: "Black Panther",
    status: "Done",
  },
]

export const sampleSummary: MeetingSummary = {
  title: 'Project "Meeting Copilot" Sync',
  duration: "45 min",
  participants: [
    "Tony Stark",
    "Hulk",
    "Spider-Man",
    "Thanos",
    "Black Widow",
  ],
  executiveSummary:
    'The team discussed the technical feasibility of integrating Jira, Asana, and Linear APIs for the upcoming POC. The primary goal is to ensure a "Single Source of Truth" where meeting action items are automatically synced to the user\'s preferred task manager.',
  keyDecisions: [
    {
      title: "Unified API Strategy",
      description:
        "Confirmed the use of a unified API layer to handle Jira, Asana, and Linear to reduce initial development time by approximately 40%.",
    },
    {
      title: "Authentication",
      description:
        "Settled on OAuth 2.0 as the standard for all external user connections to ensure data security.",
    },
    {
      title: "MVP Scope",
      description:
        "Decided to prioritize Linear for the first functional demo due to its high-speed GraphQL API.",
    },
  ],
}
