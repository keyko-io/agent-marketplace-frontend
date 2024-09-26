"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import AgentCard from "@/components/common/agent-card"

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
  {
    id: 4,
    name: "Image Generator AI",
    description: "Create stunning images with advanced AI algorithms",
    rating: 4.9,
    reviews: 200,
    tags: ["imagegeneration", "ai", "creativity"],
  },
  {
    id: 5,
    name: "Code Assistant",
    description: "AI-powered coding helper for developers",
    rating: 4.5,
    reviews: 95,
    tags: ["coding", "ai", "development"],
  },
  {
    id: 6,
    name: "Market Predictor",
    description: "Analyze market trends and make accurate predictions",
    rating: 4.4,
    reviews: 75,
    tags: ["finance", "ai", "analysis"],
  },
]

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("")
  const [rating, setRating] = useState("")
  const [price, setPrice] = useState("")
  const [agentType, setAgentType] = useState("")

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Search for Agents</h1>

        <div className="flex mb-8">
          <Input
            type="text"
            placeholder="Search for AI agents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow mr-2 bg-gray-800 text-white border-gray-700"
          />
          <Button>
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Filter by</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select onValueChange={setCategory}>
              <SelectTrigger className="bg-gray-700 border-gray-600">
                <SelectValue placeholder="All categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All categories</SelectItem>
                <SelectItem value="productivity">Productivity</SelectItem>
                <SelectItem value="analysis">Analysis</SelectItem>
                <SelectItem value="creativity">Creativity</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={setRating}>
              <SelectTrigger className="bg-gray-700 border-gray-600">
                <SelectValue placeholder="All ratings" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All ratings</SelectItem>
                <SelectItem value="4+">4+ stars</SelectItem>
                <SelectItem value="3+">3+ stars</SelectItem>
                <SelectItem value="2+">2+ stars</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={setPrice}>
              <SelectTrigger className="bg-gray-700 border-gray-600">
                <SelectValue placeholder="All prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All prices</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="subscription">Subscription</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={setAgentType}>
              <SelectTrigger className="bg-gray-700 border-gray-600">
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All types</SelectItem>
                <SelectItem value="chatbot">Chatbot</SelectItem>
                <SelectItem value="analyzer">Analyzer</SelectItem>
                <SelectItem value="generator">Generator</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Search results</h2>
          <p className="text-gray-400">Showing 1-6 of 42 results</p>
        </div>

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
      </main>
    </div>
  )
}
