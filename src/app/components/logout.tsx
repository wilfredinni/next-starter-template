"use client"

import { signOut } from "next-auth/react"

export default function logout() {
  return (
    <>
      <button
        className="text-slate-700 font-semibold dark:text-slate-300 border border-slate-400 px-2 py-1 rounded-md"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </>
  )
}
