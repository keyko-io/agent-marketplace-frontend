"use client"
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react"

// User arayüzü
interface User {
  id: string
  username: string | null
  email: string
  name: string | null
  role: string
  imageUrl: string | null
  description: string | null
  disabled: boolean
  twitter: string | null
  facebook: string | null
  linkedin: string | null
  github: string | null
  instagram: string | null
  isCreator: boolean
}

// UserContext tipi
interface UserContextType {
  user: User | null
  setUser: Dispatch<SetStateAction<User | null>>
}

const defaultUserContext: UserContextType = {
  user: null,
  setUser: () => {},
}

const UserContext = createContext<UserContextType>(defaultUserContext)

interface UserProviderProps {
  children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

// useUser hook'u ile UserContext'e erişim
export function useUser() {
  return useContext(UserContext)
}
