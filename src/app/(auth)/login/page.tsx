"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useMutation } from "@tanstack/react-query"
import { useUser } from "@/app/context/userContext"
import { useRouter } from "next/navigation"

async function postLogin(credentials: { email: string; password: string }) {
  const response = await fetch("http://localhost:8001/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })

  if (!response.ok) {
    throw new Error("Login failed")
  }

  return response.json() // Return the response data if needed
}

export default function LoginPage() {
  const { setUser } = useUser()

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const mutation = useMutation({
    mutationFn: postLogin,
    onSuccess: (data) => {
      console.log("Login successful", data)
      // Handle success (e.g., store token, redirect, etc.)
      localStorage.setItem("userInfo", JSON.stringify(data.user))
      localStorage.setItem("authToken", data.token)
      setUser(data.user)
      router.push("/")
    },
    onError: (error) => {
      console.error("Login failed", error)
      // Handle error (e.g., show notification)
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate({ email, password })
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <Card className="w-[400px] text-gray-100 rounded-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Sign in to your account
          </CardTitle>
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
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox
                    id="remember-me"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked as boolean)
                    }
                    className="border-gray-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-sm text-purple-400 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Button type="submit" className="w-full text-white">
                Sign in
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-gray-400 text-center">
            Don&apos;t have an account yet?{" "}
            <Link href="/signup" className="text-purple-400 hover:underline">
              Sign up
            </Link>
          </div>
          <div className="flex items-center">
            <hr className="flex-grow border-gray-600" />
            <span className="px-3 text-gray-400">or</span>
            <hr className="flex-grow border-gray-600" />
          </div>
          <Button
            variant="outline"
            className="w-full bg-white text-gray-900 hover:bg-gray-100"
          >
            {/* Google Sign-In Button */}
            Sign in with Google
          </Button>
          <Button
            variant="outline"
            className="w-full bg-white text-gray-900 hover:bg-gray-100"
          >
            {/* GitHub Sign-In Button */}
            Sign in with GitHub
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
