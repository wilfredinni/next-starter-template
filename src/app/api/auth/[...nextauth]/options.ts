import type { NextAuthOptions, User } from "next-auth"
import type { JWT } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"

import env from "@/lib/env"
import refreshAccessToken from "./refresh"
import { start } from "repl"

export const options: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "carlos@carlos.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "myverystrongpassword",
        },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(`${env.BACKEND_URL}/rest-auth/login/`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-type": "application/json" },
          })
          if (!res.ok) throw await res.json()
          const data = await res.json()
          return data.user ? data : null
        } catch (e) {
          console.log(e)
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user && account) return { ...token, ...user }
      if (Date.now() < (token.exp as number) * 1000) return token
      return (await refreshAccessToken(token)) as JWT
    },
    async session({ session, token }) {
      session.user = token.user as User
      return session
    },
  },
}
