import api from "@/services/api.service"
import { useQuery } from "@tanstack/react-query"

interface User {
  id: number
  name: string
  username: string
  email: string
}

async function fetchUserDetail(userId: number) {
  const { data, status } = await api.get<User>(`/users/${userId}`)

  if (status !== 200) {
    throw new Error("Failed to fetch user detail")
  }

  return data
}

export function useFetchUserDetail(userId: number) {
  return useQuery(["userDetail", userId], () => fetchUserDetail(userId))
}
