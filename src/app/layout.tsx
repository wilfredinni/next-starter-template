import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Providers as ThemeProvider } from "@/providers/ThemeProvider"
import { Providers as ReactQueryProvider } from "@/providers/ReactQueryProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next Starter Template",
  description: "Opinionated Next.js 13 Starter Template",
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-50 dark:bg-gray-900`}>
        <ThemeProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
