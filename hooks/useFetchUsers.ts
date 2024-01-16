import { useQuery } from "@tanstack/react-query"

interface User {
  id: number
  name: string
  username: string
  email: string
}

async function fetchUsers() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)

  if (!response.ok) {
    throw new Error("Failed to fetch user detail")
  }

  const data: User[] = await response.json()

  return data
}

export function useFetchUsers() {
  return useQuery({ queryKey: ["users"], queryFn: fetchUsers })
}
