"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  ThumbsUp,
  ThumbsDown,
  MoreHorizontal,
  Upload,
} from "lucide-react"

const agentData = {
  name: "ImageMaster AI",
  description: "Advanced Image Generation Agent",
  avatar: "/placeholder.svg?height=50&width=50",
  longDescription:
    "ImageMaster AI is a cutting-edge image generation agent capable of creating high-quality, diverse images based on textual descriptions. It excels in various styles and can handle complex prompts with ease.",
  tags: ["Productivity", "AI", "Translation"],
  rating: 4.8,
  reviewCount: 214,
}

const generationHistory = [
  {
    id: 1,
    date: "2025-03-15 10:30 AM",
    description: "Data analysis completed for Q1 2025 report",
    liked: false,
  },
  {
    id: 2,
    date: "2025-03-14 3:45 PM",
    description: 'Blog post draft generated: "AI Trends in 2025"',
    liked: true,
  },
  {
    id: 3,
    date: "2025-03-13 11:20 AM",
    description: "Code review completed for new feature",
    liked: true,
  },
]

export default function ImageMasterAIPage() {
  const [imageStyle, setImageStyle] = useState("")
  const [outputSize, setOutputSize] = useState("")
  const [imageDescription, setImageDescription] = useState("")
  const [generatedImage, setGeneratedImage] = useState("")

  const handleGenerateImage = () => {
    // In a real application, this would call an API to generate the image
    console.log("Generating image with:", {
      imageStyle,
      outputSize,
      imageDescription,
    })
    setGeneratedImage("/placeholder.svg?height=400&width=600")
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 bg-gray-800 px-8 py-6">
          <div className="flex items-center mb-4">
            <Image
              src={"/agent.png"}
              alt={agentData.name}
              width={50}
              height={50}
              className="rounded-full mr-4"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">
                {agentData.name}
              </h1>
              <p className="text-gray-400">{agentData.description}</p>
            </div>
          </div>
          <p className="text-gray-400 mb-4">{agentData.longDescription}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {agentData.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-purple-400 hover:bg-purple-500 text-white"
              >
                #{tag}
              </Badge>
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
            <span className="ml-2 text-purple-700 text-sm font-semibold">
              ({agentData.reviewCount} reviews)
            </span>
          </div>
          <Link href="#" className="text-gray-300 text-sm">
            View creator profile
          </Link>
        </div>

        <Card className="bg-gray-800 border-gray-700 mb-8 rounded-none border-0">
          <CardHeader>
            <CardTitle className="text-white">Execute Agent</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label
                htmlFor="image-style"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Image Style
              </label>
              <Select onValueChange={setImageStyle}>
                <SelectTrigger
                  id="image-style"
                  className="bg-gray-700 border-gray-600 text-gray-200"
                >
                  <SelectValue placeholder="Select image style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="photorealistic">Photorealistic</SelectItem>
                  <SelectItem value="cartoon">Cartoon</SelectItem>
                  <SelectItem value="abstract">Abstract</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label
                htmlFor="output-size"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Output Size
              </label>
              <Input
                id="output-size"
                placeholder="e.g., 512x512"
                value={outputSize}
                onChange={(e) => setOutputSize(e.target.value)}
                className="bg-gray-700 border-gray-600 text-gray-200"
              />
            </div>
            <div>
              <label
                htmlFor="image-description"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Image Description
              </label>
              <Textarea
                id="image-description"
                placeholder="Describe the image you want to generate..."
                value={imageDescription}
                onChange={(e) => setImageDescription(e.target.value)}
                className="bg-gray-700 border-gray-600 text-gray-200"
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Source Images
              </label>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-400">
                  Upload an image or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              onClick={handleGenerateImage}
            >
              Generate Image
            </Button>
          </CardFooter>
        </Card>

        {!generatedImage && (
          <Card className="bg-gray-800 border-gray-700 mb-8 rounded-none border-0">
            <CardHeader>
              <CardTitle className="text-white">Generated Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-700 rounded-lg p-4 flex items-center justify-center">
                <Image
                  src={"place.svg"}
                  alt="Generated image"
                  width={600}
                  height={400}
                  className="max-w-full h-auto rounded"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-gray-400">Rate this result:</div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-purple-400 hover:text-purple-300 border-purple-400 hover:border-purple-300"
                >
                  <ThumbsUp className="h-4 w-4 mr-1" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-purple-400 hover:text-purple-300 border-purple-400 hover:border-purple-300"
                >
                  <ThumbsDown className="h-4 w-4 mr-1" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        )}

        <Card className="bg-gray-800 border-gray-700 rounded-none border-0">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white">Generation History</CardTitle>
            <Link
              href="#"
              className="text-sm text-purple-400 hover:text-purple-300"
            >
              View all
            </Link>
          </CardHeader>
          <CardContent>
            {generationHistory.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-4 border-b border-gray-700 last:border-0"
              >
                <div>
                  <p className="text-sm text-gray-400">{item.date}</p>
                  <p className="text-gray-200">{item.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={item.liked ? "text-purple-400" : "text-gray-400"}
                  >
                    <ThumbsUp className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <div className="flex justify-center items-center space-x-2 w-full">
              <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 p-0 text-gray-400 border-gray-600"
              >
                &lt;
              </Button>
              {[1, 2, 3].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? "default" : "outline"}
                  size="icon"
                  className={`w-8 h-8 p-0 ${
                    page === 1
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "text-gray-400 hover:text-white border-gray-600"
                  }`}
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 p-0 text-gray-400 border-gray-600"
              >
                &gt;
              </Button>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
