"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeaderComponent() {
  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="sr-only">AgentMarketplace.ai</span>
          <span className="text-xl text-white font-bold">
            AgentMarketplace.ai
          </span>
        </Link>
        <div className="flex items-center">
          <div className="flex items-center space-x-4 mr-16">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/agents" className="text-gray-300 hover:text-white">
              Agents
            </Link>
            <Link href="/dashboard" className="text-gray-300 hover:text-white">
              Dashboard
            </Link>
            <Link href="/support" className="text-gray-300 hover:text-white">
              Support
            </Link>
          </div>

          <Button className="rounded-3xl">
            <span className="mr-4 font-semibold">+</span> Sign Up
          </Button>
        </div>
      </nav>
    </header>
  )
}
