import React from "react"

import Image from "next/image"
import { Card, CardContent } from "../ui/card"

const testimonials = [
  {
    quote:
      "AgentMarketplace.ai has truly revolutionized how we handle our workflow. The AI agents are efficient and easy to integrate, saving us valuable time and resources.",
    author: "John Smith",
    role: "CEO",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    quote:
      "I can't imagine managing our marketing campaigns without the diverse range of AI agents available on AgentMarketplace.ai. It has taken our productivity to new heights.",
    author: "Jane Doe",
    role: "Marketing Manager",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    quote:
      "The AI agents on AgentMarketplace.ai have exceeded our expectations. They are reliable, customizable, and have drastically improved our development processes.",
    author: "Alex Johnson",
    role: "Tech Lead",
    avatar: "/placeholder.svg?height=64&width=64",
  },
]

const Testimonials = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-center mt-12">
        What others say about us
      </h2>
      <div className="grid md:grid-cols-3 gap-4 mb-16 mx-14">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.author}
            className="bg-transparent border-none shadow-none"
          >
            <CardContent className="pt-6">
              <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={"/agent.png"}
                  alt={testimonial.author}
                  width={64}
                  height={64}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Testimonials
