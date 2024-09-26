import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import UserReviewCard from "@/components/common/user-review-card"

const agentData = {
  name: "LinguAgent",
  rating: 5,
  reviewCount: 2,
  category: "AI Marketplace",
  tags: ["Productivity", "AI", "Translation"],
  description:
    "AgentMarketplace.ai is a cutting-edge online platform that streamlines access to a diverse array of intelligent agents designed to automate tasks, enhance productivity, and deliver advanced analytics. This user-friendly marketplace empowers professionals from various industries to discover and subscribe to AI solutions that align with their needs—from creative assistants to data analyzers.",
  keyFeatures: [
    "Wide range of AI agents for various tasks",
    "User-friendly interface for easy agent discovery",
    "Detailed agent profiles with capabilities and use cases",
    "Flexible subscription options",
    "Integration support for seamless workflow incorporation",
  ],
}

const reviews = [
  {
    username: "Sarah123",
    timeAgo: "2 days ago",
    rating: 5,
    content:
      "This AI agent has been a game-changer for my marketing team! Highly recommend it for automating repetitive tasks and data analysis.",
  },
  {
    username: "JohnDoe",
    timeAgo: "1 week ago",
    rating: 4,
    content:
      "Impressive range of agents available on this platform. The subscription process was smooth and the results are fantastic!",
  },
]

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`h-5 w-5 ${
          star <= rating ? "text-yellow-400 fill-current" : "text-gray-400"
        }`}
      />
    ))}
  </div>
)

export default function LinguAgentPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-8">
        <Card className="bg-gray-800 text-white border-0 rounded-none">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <Image
                  src="/agent.png"
                  alt="LinguAgent"
                  width={300}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h1 className="text-3xl font-bold mb-2">{agentData.name}</h1>
                <div className="flex items-center mb-2">
                  <StarRating rating={agentData.rating} />
                  <span className="ml-2 text-sm text-primary">
                    {agentData.reviewCount} reviews
                  </span>

                  <div className="ml-auto">
                    <div className="mb-1">Tags:</div>
                    {agentData.tags.map((tag) => (
                      <Badge key={tag} className="mr-2">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <Badge className="mr-2">{agentData.category}</Badge>
                </div>
                <p className="mb-4 text-gray-300">{agentData.description}</p>
                <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
                <ul className="list-disc list-inside mb-4 text-gray-300">
                  {agentData.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Button className="w-full">Subscribe Now</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 bg-gray-800 text-white border-0 rounded-sm">
          <CardHeader>
            <CardTitle>Agent Workflow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <svg
                className="absolute left-3 top-0 h-full w-0.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="100%"
                  stroke="#374151"
                  strokeWidth="2"
                />
              </svg>
              <div className="space-y-6">
                <WorkflowStep
                  icon="⚪"
                  title="User Inputs"
                  description="Users provide input data or instructions to the intelligent agent."
                  type="Input"
                />
                <WorkflowStep
                  icon="⚪"
                  title="Agent Processes"
                  description="The intelligent agent follows predefined steps to analyze and manipulate the input data."
                  type="Processing"
                />
                <WorkflowStep
                  icon="⚪"
                  title="Agent Generates Output"
                  description="The intelligent agent produces results or performs actions based on the processed input data."
                  type="Output"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 bg-gray-800 text-white border-0 rounded-sm">
          <CardHeader>
            <CardTitle>User Reviews</CardTitle>
          </CardHeader>
          <CardContent className="mb-4">
            <div className="space-y-2 mb-4">
              {reviews.map((review, index) => (
                <UserReviewCard key={index} review={review} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Pagination className="mt-10">
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

function WorkflowStep({
  icon,
  title,
  description,
  type,
}: {
  icon: string
  title: string
  description: string
  type: string
}) {
  return (
    <div className="flex items-start">
      <div className="flex flex-col items-center mr-4">
        <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-sm z-10 relative">
          {icon}
        </div>
      </div>
      <div>
        <div className="text-sm text-gray-400 mb-1">{type}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  )
}
