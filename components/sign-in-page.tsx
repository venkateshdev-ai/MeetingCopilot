"use client"

import { useState } from "react"
import { Eye, EyeOff, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface SignInPageProps {
  onSignIn: () => void
  onBack: () => void
}

export function SignInPage({ onSignIn, onBack }: SignInPageProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <button
          type="button"
          onClick={onBack}
          className="mb-10 flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Zap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-heading text-xl font-bold text-foreground">
            MeetPilot
          </span>
        </button>

        <div className="rounded-2xl border border-border bg-card p-8">
          <h1 className="mb-8 font-heading text-2xl font-bold text-foreground">
            Sign In
          </h1>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              onSignIn()
            }}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="username" className="text-foreground">
                User Name
              </Label>
              <Input
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-border bg-secondary text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="password" className="text-foreground">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-border bg-secondary pr-10 text-foreground placeholder:text-muted-foreground"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="button"
              className="self-end text-sm text-primary hover:underline"
            >
              Forgot Password
            </button>

            <Button type="submit" size="lg" className="mt-2 w-full">
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
