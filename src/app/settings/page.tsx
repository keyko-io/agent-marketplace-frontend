"use client"

import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const quickAccessItems = [
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
    title: "Quick Actions",
    items: [
      "Browse Agents",
      "Manage Subscriptions",
      "View Usage Statistics",
      "Invite Friends",
    ],
  },
]

const recentActivity = [
  {
    date: "2025-03-15",
    action: "Subscribed to Agent",
    details: "AI Writing Assistant",
  },
  {
    date: "2025-03-14",
    action: "Updated Profile",
    details: "Changed email address",
  },
  {
    date: "2025-03-12",
    action: "Contacted Support",
    details: "Billing inquiry",
  },
]

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Quick Access</h1>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {quickAccessItems.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-blue-600 hover:underline">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <Card>
          <CardContent>
            <Table>
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
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
