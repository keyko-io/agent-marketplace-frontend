"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { PlusCircle } from "lucide-react"
import { LineChart, Line, ResponsiveContainer } from "recharts"
import AgentCard from "@/components/common/agent-card"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const data = [
  { name: "Mon", value: 4 },
  { name: "Tue", value: 3 },
  { name: "Wed", value: 5 },
  { name: "Thu", value: 7 },
  { name: "Fri", value: 5 },
  { name: "Sat", value: 4 },
  { name: "Sun", value: 6 },
]

const mostSubscribedAgents = [
  { name: "Data Analyst Pro", subtitle: "Agent subtitle 1", subscriptions: 52 },
  {
    name: "Content Writer AI",
    subtitle: "Agent subtitle 2",
    subscriptions: 37,
  },
  { name: "Code Assistant", subtitle: "Agent subtitle 3", subscriptions: 32 },
]

const agents = [
  {
    id: 1,
    name: "Data Analyzer Pro",
    description: "Powerful data analysis tool for complex datasets",
    rating: 4.8,
    reviews: 120,
    tags: ["dataanalysis", "ai", "productivity"],
  },
  {
    id: 2,
    name: "Content Creator AI",
    description: "Generate engaging content for various platforms",
    rating: 4.6,
    reviews: 85,
    tags: ["contentcreation", "ai", "writing"],
  },
  {
    id: 3,
    name: "Task Automator",
    description: "Streamline your workflow with intelligent automation",
    rating: 4.7,
    reviews: 150,
    tags: ["automation", "ai", "productivity"],
  },
]

export default function CreatorDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Creator Dashboard</h1>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Create new agent
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="flex flex-col justify-center items-center">
            <div className="text-4xl font-bold text-white text-center">182</div>
            <div className="text-sm font-medium text-gray-400">
              Total active subscriptions
            </div>
          </Card>
          <Card className="">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Agent Interactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white">1590</div>
              <p className="text-xs text-green-500 mt-4">
                +15 Interactions this week
              </p>
            </CardContent>
          </Card>
          <Card className="">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                This week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white">10</div>
              <p className="text-xs text-gray-400">new subscriptions</p>
              <div className="h-[80px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#C026D3"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className=" md:col-span-2">
            <CardHeader>
              <CardTitle className="text-white">
                Most subscribed agents
              </CardTitle>
            </CardHeader>
            <CardContent>
              {mostSubscribedAgents.map((agent, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-gray-700 mt-2 rounded-sm"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-700 rounded-md mr-4"></div>
                    <div>
                      <div className="font-semibold text-white">
                        {agent.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {agent.subtitle}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-200">
                    {agent.subscriptions} subscriptions
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="">
            <CardHeader>
              <CardTitle className="text-white">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>{/* Add recent activity content here */}</CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-white">My Agents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {agents.map((agent) => (
            <AgentCard {...agent} key={agent.id} />
          ))}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem className="rounded-tl-md rounded-bl-md">
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem className="border-r border-gray-700">
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="border-r border-gray-700">
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem className="border-r border-gray-700">
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem className="rounded-tr-md rounded-br-md">
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
