import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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

const workflowSteps = [
  {
    title: "User Inputs",
    description:
      "Users provide input data or instructions to the intelligent agent.",
    icon: "📥",
  },
  {
    title: "Agent Processes",
    description:
      "The intelligent agent follows predefined steps to analyze and manipulate the input data.",
    icon: "⚙️",
  },
  {
    title: "Agent Generates Output",
    description:
      "The intelligent agent produces results or performs actions based on the processed input data.",
    icon: "📤",
  },
]

const reviews = [
  {
    id: 1,
    name: "Sarah123",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2 days ago",
    rating: 5,
    comment:
      "This AI agent has been a game-changer for my marketing team! Highly recommend it for automating repetitive tasks and data analysis.",
  },
  {
    id: 2,
    name: "JohnDoe",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "1 week ago",
    rating: 5,
    comment:
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
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white text-xl mr-4 z-10">
                    {step.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-purple-600 -z-10" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 bg-gray-800 text-white border-0 rounded-sm">
          <CardHeader>
            <CardTitle>User Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="border-b border-gray-700 pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-center mb-2">
                    <Avatar className="w-10 h-10 mr-3">
                      <AvatarImage src={"/agent.png"} alt={review.name} />
                      <AvatarFallback>{review.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-gray-400">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-gray-300">{review.comment}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center space-x-2 mt-4">
              <Button variant="outline" size="icon" className="text-gray-400">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-gray-700 text-white"
              >
                1
              </Button>
              <Button variant="outline" size="sm" className="text-gray-400">
                2
              </Button>
              <Button variant="outline" size="sm" className="text-gray-400">
                3
              </Button>
              <Button variant="outline" size="icon" className="text-gray-400">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
