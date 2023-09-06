"use client"

import { decrement, increment, reset } from "@/redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

export default function CounterReducer() {
  const count = useAppSelector((state) => state.counterReducer.value)
  const dispatch = useAppDispatch()

  return (
    <main className="p-4 border rounded-md text-center shadow">
      <div className="space-x-2 space-y-2">
        <h2 className="text-2xl font-medium text-slate-700 dark:text-slate-300">
          Redux Toolkit
        </h2>
        <h4 className="text-2xl mb-2 font-medium text-slate-700 dark:text-slate-300">
          {count}
        </h4>
        <button
          className="bg-slate-400 text-white rounded px-2 py-1 hover:bg-slate-500"
          onClick={() => dispatch(increment())}
        >
          increment
        </button>
        <button
          className="bg-slate-400 text-white rounded px-2 py-1 hover:bg-slate-500"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
        <button
          className="bg-slate-400 text-white rounded px-2 py-1 hover:bg-slate-500"
          onClick={() => dispatch(reset())}
        >
          reset
        </button>
      </div>
    </main>
  )
}
