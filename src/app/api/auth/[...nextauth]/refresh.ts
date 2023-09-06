import jwtDecode from "jwt-decode"
import type { JWT } from "next-auth/jwt"

import env from "@/lib/env"

interface RefreshedToken {
  access: string
  refresh: string
}

async function refreshAccessToken(token: JWT): Promise<JWT | null> {
  try {
    const res = await fetch(`${env.BACKEND_URL}/rest-auth/token/refresh/`, {
      method: "POST",
      body: JSON.stringify({ refresh: token.refresh_token }),
      headers: { "Content-Type": "application/json" },
    })
    const refreshedToken: RefreshedToken = await res.json()
    if (res.status !== 200) throw refreshedToken
    const { exp } = jwtDecode(refreshedToken.access) as any

    return {
      ...token,
      ...refreshedToken,
      exp,
    }
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    }
  }
}

export default refreshAccessToken
