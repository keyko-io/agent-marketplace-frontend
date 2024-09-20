"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle password reset logic here
    console.log("Password reset requested for:", email)
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <Card className="w-[400px] bg-gray-800 text-gray-100 border-0 rounded-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Forgot your password?
          </CardTitle>
          <CardDescription className="text-gray-400">
            Don't fret! Just type in your email and we will send you a code to
            reset your password!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Your email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                Send Recovery Instructions
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="bg-gray-700 p-4 rounded-md mt-4 w-full">
            <h3 className="text-lg font-semibold mb-2">
              Recovery Instructions:
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
              <li>Enter the email address associated with your account.</li>
              <li>Click the "Send Recovery Instructions" button.</li>
              <li>
                Check your email inbox for a message from AgentMarketplace.ai.
              </li>
              <li>Follow the link in the email to reset your password.</li>
              <li>Create a new, secure password for your account.</li>
            </ol>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
