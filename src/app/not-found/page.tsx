import Link from "next/link"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Page not found</h1>
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="md:w-1/2 mt-20">
            <h2 className="text-2xl font-semibold mb-2">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-400 mb-4">
              The AI agents are taking a break. Please try again later or
              contact support for assistance.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/error.png"
              alt="AI agents on break"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-4">Return to Home</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Homepage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Explore popular AI agents and key categories.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/">
                <Button className="w-full">
                  Back to Home
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">User Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Manage your subscriptions and settings easily.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard">
                <Button className="w-full">
                  Go to Dashboard
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Agent Search Page</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Explore detailed agent functionalities and ratings.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/agents">
                <Button className="w-full">
                  View Agents
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
