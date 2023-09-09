import { BeakerIcon } from "@heroicons/react/24/solid"
import { getServerSession } from "next-auth/next"
import { User } from "next-auth"
import { options } from "./api/auth/[...nextauth]/options"
import { Suspense } from "react"

import Counter from "./components/Counter"
import ThemeSwitcher from "./components/ThemeSwitcher"
import Logout from "./components/Logout"
import Users from "./components/Users"

export default async function Home() {
  const session = await getServerSession(options)
  const user = session?.user as User

  return (
    <main className="flex flex-col items-center justify-between p-4">
      <div className="flex-col items-center space-y-2">
        <BeakerIcon className="mx-auto h-16 w-1h-16 text-blue-500" />
        <h1 className="text-3xl font-medium dark:text-white text-slate-800">
          Next.js 13 Starter Template
        </h1>
      </div>

      <div className="bg-sky-100 p-4 rounded-md text-sky-700 mt-4">
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>

      <div className="text-center">
        <Suspense
          fallback={
            <div className="text-2xl mb-4 my-4">
              Server side fetching from API...
            </div>
          }
        >
          <Users />
        </Suspense>
      </div>

      <div className="text-center">
        <Counter />
        <ThemeSwitcher />
        <Logout />
      </div>
    </main>
  )
}
