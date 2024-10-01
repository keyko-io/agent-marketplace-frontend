// QueryProvider.tsx
"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// Create a new instance of QueryClient
const queryClient = new QueryClient()

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
