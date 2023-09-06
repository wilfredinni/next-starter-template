"use client"

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"
import { useState, useEffect } from "react"
import { Switch } from "@headlessui/react"
import { useTheme } from "next-themes"

export default function ThemeSwitcher() {
  const [enabled, setEnabled] = useState(false)
  const { theme, setTheme } = useTheme()

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
  }

  const changeTheme = () => {
    setEnabled(!enabled)
    setTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    setEnabled(theme === "dark")
  }, [theme])

  return (
    <div className="py-16">
      <Switch
        checked={enabled}
        onChange={changeTheme}
        className={classNames(
          enabled ? "bg-slate-800" : "bg-sky-500",
          "relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
        )}
      >
        <span className="sr-only">Use setting</span>
        <span
          className={classNames(
            enabled ? "translate-x-7" : "translate-x-0",
            "pointer-events-none relative inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          )}
        >
          <span
            className={classNames(
              enabled
                ? "opacity-0 duration-100 ease-out"
                : "opacity-100 duration-200 ease-in",
              "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
            )}
            aria-hidden="true"
          >
            <SunIcon className="h-4 w-4 text-sky-600" />
          </span>
          <span
            className={classNames(
              enabled
                ? "opacity-100 duration-200 ease-in"
                : "opacity-0 duration-100 ease-out",
              "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
            )}
            aria-hidden="true"
          >
            <MoonIcon className="h-4 w-4 text-gray-800" />
          </span>
        </span>
      </Switch>
    </div>
  )
}
