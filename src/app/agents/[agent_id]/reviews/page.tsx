"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"
import UserReviewCard from "@/components/common/user-review-card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const agentData = {
  name: "LinguAgent",
  description: "Advanced Translation Agent",
  longDescription:
    "LinguaGenius AI is a state-of-the-art translation agent capable of translating text between multiple languages with high accuracy. It understands context, idioms, and cultural nuances to provide natural-sounding translations.",
  tags: ["Productivity", "AI", "Translation"],
  rating: 4.8,
  reviewCount: 214,
}

const ratingData = [
  { stars: 5, percentage: 70 },
  { stars: 4, percentage: 20 },
  { stars: 3, percentage: 5 },
  { stars: 2, percentage: 3 },
  { stars: 1, percentage: 2 },
]

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
export default function LinguAgentPage() {
  const [userRating, setUserRating] = useState(0)
  const [reviewTitle, setReviewTitle] = useState("")
  const [reviewContent, setReviewContent] = useState("")

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle review submission logic here
    console.log("Review submitted:", { userRating, reviewTitle, reviewContent })
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-800 p-6">
          <div className="flex items-center mb-8 ">
            <Image
              src="/agent.png"
              alt={agentData.name}
              width={80}
              height={80}
              className="rounded-full mr-4"
            />
            <div>
              <h1 className="text-3xl font-bold">{agentData.name}</h1>
              <p className="text-gray-400">{agentData.description}</p>
            </div>
          </div>

          <p className="text-gray-300 mb-4">{agentData.longDescription}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {agentData.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(agentData.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-600"
                }`}
              />
            ))}
            <span className="ml-2 text-yellow-400 font-bold">
              {agentData.rating}
            </span>
            <span className="ml-2 text-gray-400">
              ({agentData.reviewCount} reviews)
            </span>
          </div>

          <Link href="#" className="text-gray-400 hover:underline">
            View creator profile
          </Link>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">
          User Ratings & Reviews
        </h2>

        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Rating Summary</CardTitle>
          </CardHeader>
          <CardContent>
            {ratingData.map((data) => (
              <div key={data.stars} className="flex items-center mb-2">
                <div className="w-16 text-gray-400">{data.stars} stars</div>
                <div className="flex-grow bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-purple-500 h-full"
                    style={{ width: `${data.percentage}%` }}
                  ></div>
                </div>
                <div className="w-16 text-right text-gray-400">
                  {data.percentage}%
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mb-4">Write a Review</h2>
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmitReview}>
              <div className="mb-4">
                <div className="text-gray-400 mb-2">Your Rating</div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-8 w-8 cursor-pointer ${
                        star <= userRating
                          ? "text-purple-400 fill-current"
                          : "text-gray-600"
                      }`}
                      onClick={() => setUserRating(star)}
                    />
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="review-title"
                  className="block text-gray-400 mb-2"
                >
                  Review Title
                </label>
                <Input
                  id="review-title"
                  value={reviewTitle}
                  onChange={(e) => setReviewTitle(e.target.value)}
                  className=" border-gray-600 text-white"
                  placeholder="Summarize your experience"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="review-content"
                  className="block text-gray-400 mb-2"
                >
                  Your Review
                </label>
                <Textarea
                  id="review-content"
                  value={reviewContent}
                  onChange={(e) => setReviewContent(e.target.value)}
                  className=" border-gray-600 text-white"
                  placeholder="What did you like or dislike about LinguAgent?"
                  rows={5}
                />
              </div>
              <Button type="submit" className="max-w-fit">
                Submit Review
              </Button>
            </form>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
        {reviews.map((review, index) => (
          <UserReviewCard key={index} review={review} />
        ))}

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
      </div>
    </div>
  )
}
