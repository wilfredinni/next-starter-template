"use client"

import { useCounterStore } from "@/store/counter"

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div className="p-4 mt-4 rounded-md shadow bg-sky-300 dark:bg-sky-600 dark:text-gray-200 text-gray-800">
      <h2 className="text-2xl font-semibold">Zustand Counter</h2>
      <div className="text-2xl font-medium my-4">{count}</div>

      <div className="flex items-center justify-between w-full gap-x-3">
        <button
          className="px-4 py-2 rounded-md shadow bg-sky-500 hover:bg-sky-600 dark:bg-sky-700 dark:hover:bg-sky-800 text-gray-50"
          onClick={increment}
        >
          Increment
        </button>

        <button
          className="px-4 py-2 rounded-md shadow bg-sky-500 hover:bg-sky-600 dark:bg-sky-700 dark:hover:bg-sky-800 text-gray-50"
          onClick={decrement}
        >
          Decrement
        </button>

        <button
          className="px-4 py-2 rounded-md shadow bg-sky-500 hover:bg-sky-600 dark:bg-sky-700 dark:hover:bg-sky-800 text-gray-50"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}
