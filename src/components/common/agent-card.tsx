"use client"

import Image from "next/image"
import { Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

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

interface Props {
  id: number
  title: string
  description: string
  avgRating: number
  reviewCount: number
  tags: string[]
  img_url: string
}

const AgentCard = ({
  id,
  title,
  description,
  avgRating,
  reviewCount,
  tags,
  img_url,
}: Props) => {
  return (
    <Card key={id} className="flex flex-col h-full">
      <CardHeader className="p-0 pb-6">
        <Image
          src={img_url}
          alt={name}
          width={500}
          height={200}
          className="rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <CardTitle className="text-white">{title}</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white -mt-1"
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>
        <p className="text-gray-400 mb-2">{description}</p>
        <div className="flex items-center mb-2">
          <StarRating rating={avgRating} />
          <span className="text-gray-400 ml-2">({reviewCount} reviews)</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag}>#{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full">Subscribe</Button>
      </CardFooter>
    </Card>
  )
}

export default AgentCard
