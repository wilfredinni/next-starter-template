import Link from "next/link"
import { getUsers } from "@/services/user.service"

interface User {
  id: number
  name: string
  username: string
  email: string
}
export default async function Users() {
  // Example of server side data fetching.
  // For data that is always dynamic prefer client side data fetching
  // using react-query or swr and a store like Zustand or Jotai.
  const users = await getUsers()

  return (
    <div className="my-4">
      <h1 className="text-2xl mb-4">Users from API</h1>
      <ul className="flex gap-4">
        {users?.slice(0, 4).map((user: User) => (
          <Link href={`/user/${user.id}`} key={user.id}>
            <li
              className="p-3 rounded-md bg-sky-300 dark:bg-sky-500 shadow"
              key={user.id}
            >
              {user.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
