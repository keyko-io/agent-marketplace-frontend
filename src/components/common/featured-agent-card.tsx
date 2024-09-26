import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Button } from "../ui/button"

interface Props {
  name: string
  description: string
  image?: string
}

const FeaturedAgentCard = ({ name, description }: Props) => {
  return (
    <Card key={name} className="bg-gray-700 rounded-sm border-0">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4">
          <Image
            src={"/agent.png"}
            alt={name}
            width={60}
            height={60}
            className="rounded-lg"
          />
        </div>
        <CardTitle className="text-xl font-semibold text-white">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 text-sm mt-2 font-normal text-center">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Try Now</Button>
      </CardFooter>
    </Card>
  )
}

export default FeaturedAgentCard
