import type { NextAuthOptions, User } from "next-auth"
import type { JWT } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"

import env from "@/lib/env"
import refreshAccessToken from "./refresh"

const BACKEND_ACCESS_TOKEN_LIFETIME = 45 * 60 // 45 minutes
const BACKEND_REFRESH_TOKEN_LIFETIME = 6 * 24 * 60 * 60 // 6 days

const getCurrentEpochTime = () => {
  return Math.floor(new Date().getTime() / 1000)
}

export const options: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: BACKEND_REFRESH_TOKEN_LIFETIME,
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
      if (user && account) {
        return {
          ...token,
          ...user,
          ref: getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME,
        }
      }
      if (getCurrentEpochTime() > Number(token.ref)) {
        const response = (await refreshAccessToken(token)) as JWT
        return {
          ...response,
          access_token: response.access,
          refresh_token: response.refresh,
          ref: getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME,
        }
      }
      return token
    },
    async session({ session, token }) {
      session.user = token.user as User
      session.access = token?.access_token as string | undefined
      return session
    },
  },
}
