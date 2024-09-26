import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface Review {
  username: string
  timeAgo: string
  rating: number
  content: string
}

const UserReviewCard = ({ review }: { review: Review }) => (
  <Card className="bg-gray-700 border-none mb-3">
    <CardContent className="p-6">
      <div className="flex items-center mb-2">
        <Avatar className="h-10 w-10 mr-4">
          <AvatarImage
            src="/placeholder.svg?height=40&width=40"
            alt={review.username}
          />
          <AvatarFallback>{review.username[0]}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold text-white">{review.username}</div>
          <div className="text-sm text-gray-400">{review.timeAgo}</div>
        </div>
      </div>
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < review.rating
                ? "text-purple-500 fill-purple-500"
                : "text-gray-600"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-300">{review.content}</p>
    </CardContent>
  </Card>
)

export default UserReviewCard
