import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface Props {
  name: string
  image: string
}

const CategoryCard = ({ name, image }: Props) => {
  return (
    <Card key={name}>
      <CardHeader className="text-white">
        {/* <p className="text-sm">{category}</p> */}
        <CardTitle className="text-lg">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="rounded-none"
        />
      </CardContent>
    </Card>
  )
}

export default CategoryCard
