"use client"

import { useFetchUserDetail } from "@/hooks/useFetchUserDetail"
import { useDetailStore } from "@/store/user.store"
import { useEffect } from "react"
import UserDetail from "@/app/components/UserDetail"

interface UserDetailProps {
  params: {
    id: string
  }
}

export default function UserDetailPage({ params }: UserDetailProps) {
  // Example of client side data fetching with Zustand store and react-query
  const { id } = params
  const { data, isLoading } = useFetchUserDetail(parseInt(id))
  const { setUser } = useDetailStore()
  useEffect(() => {
    setUser(data)
  }, [setUser, data])

  return (
    <div className="my-4 text-center">
      <h1 className="text-center text-2xl font-semibold mb-5">User Detail</h1>
      {isLoading ? <p>Client side fetching...</p> : <UserDetail />}
    </div>
  )
}
