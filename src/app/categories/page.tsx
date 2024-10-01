"use client"
import CategoryCard from "@/components/common/category-card"
import { useQuery } from "@tanstack/react-query"

const fetchCategories = async () => {
  const response = await fetch("http://localhost:8001/categories")
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  return response.json()
}

export default function CategoriesPage() {
  const { data: categories } = useQuery({
    queryKey: ["featuredCategories"],
    queryFn: fetchCategories,
  })

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Explore Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories?.map((category: any) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              image={category.imageUrl}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
