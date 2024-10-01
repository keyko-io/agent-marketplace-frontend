"use client"
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
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`h-5 w-5 ${
          star <= rating ? "text-primary fill-current" : "text-gray-400"
        }`}
      />
    ))}
  </div>
)

const fetchAgentDetails = async () => {
  const response = await fetch(
    "http://localhost:8001/agents/details/0037bd57-139e-4b00-aa4d-1ff64ab0ba3f"
  )
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  return response.json()
}

export default function LinguAgentPage() {
  const { data: agentDetail } = useQuery({
    queryKey: ["agentDetail"],
    queryFn: fetchAgentDetails,
  })

  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 2 // Set the number of items to display per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(
    agentDetail?.agent?.reviews.length / itemsPerPage
  )

  // Get the current reviews to display based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentReviews = agentDetail?.agent?.reviews.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-8">
        <Card className="bg-gray-800 text-white border-0 rounded-none">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <Image
                  src={agentDetail?.agent?.imageUrl}
                  alt="LinguAgent"
                  width={300}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h1 className="text-3xl font-bold mb-2">
                  {agentDetail?.agent?.title}
                </h1>
                <div className="flex items-center mb-2">
                  <StarRating rating={agentDetail?.agent?.avgRating} />
                  <span className="ml-2 text-sm text-primary">
                    {agentDetail?.agent?.reviewCount} reviews
                  </span>

                  <div className="ml-auto">
                    <div className="mb-1">Tags:</div>
                    {agentDetail?.agent?.tags.map((tag: any) => (
                      <Badge key={tag} className="mr-2">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <Badge className="mr-2">
                    {agentDetail?.agent?.category?.name}
                  </Badge>
                </div>
                <p className="mb-4 text-gray-300">
                  {agentDetail?.agent?.description}
                </p>
                <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
                <ul className="list-disc list-inside mb-4 text-gray-300">
                  {agentDetail?.agent?.keyFeatures}
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
              {currentReviews?.map((review: any) => (
                <UserReviewCard key={review.id} review={review} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Pagination className="mt-10">
          <PaginationContent>
            <PaginationItem className="rounded-tl-md rounded-bl-md">
              <PaginationPrevious onClick={handlePrevious} />
            </PaginationItem>
            {totalPages &&
              [...Array(totalPages)].map((_, index) => (
                <PaginationItem
                  key={index}
                  className="border-r border-gray-700"
                >
                  <PaginationLink
                    isActive={currentPage === index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
            <PaginationItem className="rounded-tr-md rounded-br-md">
              <PaginationNext onClick={handleNext} />
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
