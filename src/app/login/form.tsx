"use client"

import { signIn } from "next-auth/react"
import { useSearchParams, useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"

export const LoginForm = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/"

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoading(true)
      const formData = new FormData(e.currentTarget)
      const res = await signIn("credentials", {
        redirect: false,
        email: formData.get("email"),
        password: formData.get("password"),
        callbackUrl,
      })

      if (res?.error) {
        setError("invalid email or password")
      }
      router.push(callbackUrl)
      setLoading(false)
    } catch (error: any) {
      setLoading(false)
      setError(error)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      {error && (
        <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
      )}
      <div className="mb-6">
        <input
          required
          type="email"
          name="email"
          placeholder="Email address"
          className="block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white dark:bg-slate-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div className="mb-6">
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          className="block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white dark:bg-slate-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        style={{ backgroundColor: `${loading ? "#ccc" : "#3446eb"}` }}
        className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        disabled={loading}
      >
        {loading ? "loading..." : "Sign In"}
      </button>
    </form>
  )
}
