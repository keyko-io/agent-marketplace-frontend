"use client"

import { useState } from "react"

import { Book, FileText, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const helpCenterItems = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Learn the basics of using AgentMarketplace.ai",
  },
  {
    icon: FileText,
    title: "Tutorials",
    description: "Step-by-step guides for common tasks",
  },
  {
    icon: Zap,
    title: "Troubleshooting",
    description: "Solutions for common issues",
  },
]

const faqItems = [
  {
    question: "How do I subscribe to an agent?",
    answer:
      'To subscribe to an agent, navigate to the agent\'s detail page and click the "Subscribe" button. Follow the prompts to complete the subscription process.',
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      'Yes, you can cancel your subscription at any time. Go to your dashboard, find the agent you want to unsubscribe from, and click the "Cancel Subscription" button.',
  },
  {
    question: "How do I contact support?",
    answer:
      "You can contact our support team by using the contact form below or by emailing support@agentmarketplace.ai.",
  },
]

export default function SupportPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the support request to your API
    console.log("Support request submitted:", { name, email, message })
    // Reset form after submission
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Support Center</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Help Center</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {helpCenterItems.map((item) => (
            <Card key={item.title}>
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="bg-gray-100 p-2 rounded-full">
                  <item.icon className="h-6 w-6" />
                </div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mt-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
