import { BeakerIcon } from "@heroicons/react/24/solid"
import { getServerSession } from "next-auth/next"
import { User } from "next-auth"
import { options } from "./api/auth/[...nextauth]/options"

import ThemeSwitcher from "./components/themeSwitcher"
import CounterReducer from "./components/counterReducer"
import Logout from "./components/logout"

export default async function Home() {
  const session = await getServerSession(options)
  const user = session?.user as User

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex-col items-center space-y-2">
        <BeakerIcon className="mx-auto h-16 w-1h-16 text-blue-500" />
        <h1 className="text-3xl font-medium dark:text-white text-slate-800">
          Grudget Frontend
        </h1>
      </div>

      <div className="bg-sky-100 p-4 rounded-md text-sky-700">
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>

      <CounterReducer />
      <div className="text-center">
        <ThemeSwitcher />
        <Logout />
      </div>
    </main>
  )
}
