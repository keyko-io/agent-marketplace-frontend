import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface Props {
  name: string
  image: string
  category: string
}

const CategoryCard = ({ name, category }: Props) => {
  return (
    <Card key={name}>
      <CardHeader className="text-white">
        <p className="text-sm">{category}</p>
        <CardTitle className="text-lg">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={"/category.png"}
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
