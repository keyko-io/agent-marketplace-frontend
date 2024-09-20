"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

interface Props {
  id: number
  name: string
  description: string
  rating: number
  reviews: number
  tags: string[]
}

const AgentCard = ({ id, name, description, rating, reviews, tags }: Props) => {
  return (
    <Card key={id} className="bg-gray-800 border-gray-700">
      <CardHeader className="p-0 pb-6">
        <Image
          src="/place.svg"
          alt={name}
          width={400}
          height={200}
          className="rounded-t-lg"
        />
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-white">{name}</CardTitle>
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
          <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
          <span className="text-gray-400 font-bold mr-1">{rating}</span>
          <span className="text-gray-400">({reviews} reviews)</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-purple-300">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Subscribe</Button>
      </CardFooter>
    </Card>
  )
}

export default AgentCard
