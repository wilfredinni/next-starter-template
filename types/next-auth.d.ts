import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User & DefaultSession["user"]
    access: string | undefined
  }

  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    id: number
    username: string
    first_name: string
    last_name: string
    is_staff: boolean
    exp: number
  }

  interface JWT {
    user: User
    access_token: string
    exp: number
    ref: number
    [key: string]: any
  }
}
