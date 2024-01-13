import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Counter from "@/components/counter"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 flex w-full max-w-5xl items-center justify-between text-sm">
        <Button>Shadcn Button</Button>
        <ThemeToggle />
      </div>
      <Counter />
      <div></div>
    </main>
  )
}
