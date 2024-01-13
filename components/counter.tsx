"use client"

import { useCounter } from "@/store/counter-store"
import { Button } from "@/components/ui/button"

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter()

  return (
    <div className="space-y-4">
      <h2 className="text-lg">Count: {count}</h2>
      <div className="flex space-x-4">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  )
}
