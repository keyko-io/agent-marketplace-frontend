import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const subscribedAgents = [
  {
    name: "Data Analyst Pro",
    lastUsed: "2 hours ago",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Content Writer AI",
    lastUsed: "Yesterday",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Code Assistant",
    lastUsed: "3 days ago",
    image: "/placeholder.svg?height=50&width=50",
  },
]

const notifications = [
  { message: "New agent available: Image Generator Pro", time: "2 hours ago" },
  { message: "Data Analyst Pro update available", time: "1 day ago" },
  { message: "Subscription renewal: Content Writer AI", time: "3 days ago" },
]

const recentInteractions = [
  {
    date: "2025-03-15 10:30 AM",
    description: "Data analysis completed for Q1 2025 report",
  },
  {
    date: "2025-03-14 3:45 PM",
    description: 'Blog post draft generated: "AI Trends in 2025"',
  },
  {
    date: "2025-03-13 11:20 AM",
    description: "Code review completed for new feature",
  },
]

const quickAccess = [
  {
    title: "Settings",
    items: [
      "Account Settings",
      "Notification Preferences",
      "Billing Information",
      "Security & Privacy",
    ],
  },
  {
    title: "Support",
    items: ["Help Center", "FAQs", "Contact Support", "Submit Feedback"],
  },
  {
    title: "Quick actions",
    items: [
      "Browse Agents",
      "Manage Subscriptions",
      "View Usage Statistics",
      "Invite Friends",
    ],
  },
]

const recentActivity = [
  { date: "2023-10-01", action: "Subscribed to agent", details: "Agent Smith" },
  {
    date: "2023-10-02",
    action: "Updated Profile",
    details: "Changed profile picture",
  },
  { date: "2023-10-03", action: "Subscribed to agent", details: "Agent Eve" },
  {
    date: "2023-10-04",
    action: "Updated Notification Settings",
    details: "Enabled email notifications",
  },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Hello, John Doe!</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="md:col-span-2 bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Subscribed Agents</CardTitle>
            </CardHeader>
            <CardContent>
              {subscribedAgents.map((agent, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-2 last:mb-0 border-gray-600 border py-2 px-2"
                >
                  <div className="flex items-center">
                    <Image
                      src={"place.svg"}
                      alt={agent.name}
                      width={50}
                      height={50}
                      className="rounded mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-400">
                        {agent.name}
                      </h3>
                      <p className="text-xs text-gray-400">
                        Last used: {agent.lastUsed}
                      </p>
                    </div>
                  </div>
                  <Button>Launch</Button>
                </div>
              ))}
              <Link
                href="/agents"
                className="text-sm text-white hover:text-purple-300 mt-4 block"
              >
                View all subscribed agents
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Notifications</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col">
              <ul className="space-y-4 flex-1">
                {notifications.map((notification, index) => (
                  <li
                    key={index}
                    className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-400"
                  >
                    <p className="text-gray-200">{notification.message}</p>
                    <p className="text-sm text-gray-400">{notification.time}</p>
                  </li>
                ))}
              </ul>

              <Link
                href="/notifications"
                className="text-sm text-gray-200 hover:text-gray-100 block mt-8"
              >
                View all notifications
              </Link>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Interactions</CardTitle>
          </CardHeader>
          <CardContent>
            {recentInteractions.map((interaction, index) => (
              <div
                key={index}
                className={`bg-gray-600 p-2 py-3 px-4 last:mb-0 ${
                  index !== 0 ? "border-t border-gray-400" : ""
                }`}
              >
                <p className="text-sm text-gray-400">{interaction.date}</p>
                <p className="text-sm text-gray-400">
                  {interaction.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mb-4">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {quickAccess.map((section, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 text-white"
            >
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link href="#" className="text-gray-200">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Table className="mb-8">
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentActivity.map((activity, index) => (
              <TableRow key={index}>
                <TableCell>{activity.date}</TableCell>
                <TableCell>{activity.action}</TableCell>
                <TableCell>{activity.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  )
}
