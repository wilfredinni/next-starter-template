import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Providers } from "@/redux/provider"
import { Providers as ThemeProvider } from "@/app/providers/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next Starter Template",
  description: "Opinionated Next.js 13 Starter Template",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-50 dark:bg-gray-900`}>
        <ThemeProvider>
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
