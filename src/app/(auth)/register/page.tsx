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

export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign-up logic here
    console.log("Sign-up attempt", {
      email,
      password,
      confirmPassword,
      acceptTerms,
    })
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <Card className="w-[400px] bg-gray-800 text-gray-100 border-0 rounded-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Create an account
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
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-300"
                >
                  Confirm password
                </label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                  required
                />
              </div>
              <div className="flex items-center">
                <Checkbox
                  id="accept-terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) =>
                    setAcceptTerms(checked as boolean)
                  }
                  className="border-gray-500"
                />
                <label
                  htmlFor="accept-terms"
                  className="ml-2 block text-sm text-gray-300"
                >
                  I accept the{" "}
                  <Link
                    href="/terms"
                    className="text-purple-400 hover:underline"
                  >
                    Terms and Conditions
                  </Link>
                </label>
              </div>
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                Create an account
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-gray-400 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-purple-400 hover:underline">
              Login here
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
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_13183_10121)">
                <path
                  d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
                  fill="#3F83F8"
                />
                <path
                  d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
                  fill="#34A853"
                />
                <path
                  d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
                  fill="#FBBC04"
                />
                <path
                  d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_13183_10121">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            Sign up with Google
          </Button>
          <Button
            variant="outline"
            className="w-full bg-white text-gray-900 hover:bg-gray-100"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_13183_29163)">
                <path
                  d="M10.1543 0C4.6293 0 0.154298 4.475 0.154298 10C0.153156 12.0993 0.813993 14.1456 2.04051 15.8487C3.26702 17.5517 5.00251 18.8251 6.9923 19.488C7.4923 19.575 7.6793 19.275 7.6793 19.012C7.6793 18.775 7.6663 17.988 7.6663 17.15C5.1543 17.613 4.5043 16.538 4.3043 15.975C4.1913 15.687 3.7043 14.8 3.2793 14.562C2.9293 14.375 2.4293 13.912 3.2663 13.9C4.0543 13.887 4.6163 14.625 4.8043 14.925C5.7043 16.437 7.1423 16.012 7.7163 15.75C7.8043 15.1 8.0663 14.663 8.3543 14.413C6.1293 14.163 3.8043 13.3 3.8043 9.475C3.8043 8.387 4.1913 7.488 4.8293 6.787C4.7293 6.537 4.3793 5.512 4.9293 4.137C4.9293 4.137 5.7663 3.875 7.6793 5.163C8.49336 4.93706 9.33447 4.82334 10.1793 4.825C11.0293 4.825 11.8793 4.937 12.6793 5.162C14.5913 3.862 15.4293 4.138 15.4293 4.138C15.9793 5.513 15.6293 6.538 15.5293 6.788C16.1663 7.488 16.5543 8.375 16.5543 9.475C16.5543 13.313 14.2173 14.163 11.9923 14.413C12.3543 14.725 12.6673 15.325 12.6673 16.263C12.6673 17.6 12.6543 18.675 12.6543 19.013C12.6543 19.275 12.8423 19.587 13.3423 19.487C15.3273 18.8168 17.0574 17.541 18.2771 15.8392C19.4968 14.1373 20.1543 12.0951 20.1543 10C20.1543 4.475 15.6793 0 10.1543 0Z"
                  fill="#333333"
                />
              </g>
              <defs>
                <clipPath id="clip0_13183_29163">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.154298)"
                  />
                </clipPath>
              </defs>
            </svg>
            Sign up with GitHub
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
