import Image from "next/image"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { Check } from "lucide-react"
import Testimonials from "@/components/testimonials"

const pricingPlans = [
  {
    name: "Basic",
    price: "$9.99/month",
    description: "Great for personal use",
    features: [
      "Access to 5 AI agents",
      "Custom notifications",
      "Basic support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19.99/month",
    description: "Ideal for small businesses",
    features: [
      "Access to 15 AI agents",
      "Custom notifications",
      "Prioritized support",
    ],
    cta: "Upgrade Now",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited AI agents",
      "Custom notifications",
      "Dedicated account manager",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Plans & Pricing
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-gray-800 border-gray-700 overflow-hidden text-white ${
                plan.highlighted ? "border-purple-500 border-2" : ""
              }`}
            >
              {plan.highlighted && (
                <div className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 text-center">
                  most popular
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                <div className="text-3xl font-bold mt-2">{plan.price}</div>
                <p className="text-sm text-gray-400 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <Check className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  className={`w-full max-w-[200px] ${
                    plan.highlighted
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/price.png"
                alt="Office space illustration"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Plans & Pricing</h2>
              <p className="text-gray-400">
                Choose the perfect plan to access AI agents tailored for your
                needs. Discover the capabilities of each tier to boost your
                productivity.
              </p>
            </div>
          </div>
        </div>

        <Testimonials />
      </div>
    </div>
  )
}
