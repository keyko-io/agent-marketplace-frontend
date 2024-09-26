import CategoryCard from "@/components/common/category-card"

const categories = [
  {
    name: "Creative Assistant",
    domain: "AI Solutions",
    image: "",
  },
  {
    name: "Data Analyzer",
    domain: "Data Analytics",
    image: "",
  },
  {
    name: "Productivity",
    domain: "Data Analytics",
    image: "",
  },
  {
    name: "Creative Assistant",
    domain: "AI Solutions",
    image: "",
  },
  {
    name: "Data Analyzer",
    domain: "Data Analytics",
    image: "",
  },
  {
    name: "Productivity",
    domain: "Data Analytics",
    image: "",
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Explore Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              name={category.name}
              image={category.image}
              category={category.domain}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
