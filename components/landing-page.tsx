"use client"

import React from "react"

import { ArrowRight, BarChart3, Brain, ListChecks, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LandingPageProps {
  onSignIn: () => void
  onSignUp: () => void
}

export function LandingPage({ onSignIn, onSignUp }: LandingPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Nav */}
      <header className="flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Zap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-heading text-xl font-bold text-foreground">
            MeetPilot
          </span>
        </div>
        <nav className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
            onClick={onSignIn}
          >
            Sign In
          </Button>
          <Button onClick={onSignUp}>Sign Up</Button>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
            <Brain className="h-4 w-4 text-primary" />
            AI-Powered Meeting Intelligence
          </div>
          <h1 className="font-heading text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Welcome to{" "}
            <span className="text-primary">MeetPilot</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Your AI-powered meeting copilot that transforms verbal discussions
            into structured action items, automated tickets, and data-driven
            insights.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2 px-8" onClick={onSignUp}>
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 bg-transparent"
              onClick={onSignIn}
            >
              Sign In
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="mx-auto mt-24 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<ListChecks className="h-6 w-6 text-primary" />}
            title="Auto-Sync Tasks"
            description="Action items flow directly into Jira, Asana, and Linear without manual data entry."
          />
          <FeatureCard
            icon={<Brain className="h-6 w-6 text-primary" />}
            title="AI Summaries"
            description="Get executive summaries, key decisions, and participant insights instantly."
          />
          <FeatureCard
            icon={<BarChart3 className="h-6 w-6 text-primary" />}
            title="Meeting Analytics"
            description="Visualize meeting efficiency, engagement scores, and team dynamics."
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="px-8 py-6 text-center text-sm text-muted-foreground">
        <p>Explore to learn more...</p>
      </footer>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 text-left transition-colors hover:border-primary/30">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
        {icon}
      </div>
      <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}
