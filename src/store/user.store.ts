import { create } from "zustand"

interface User {
  id: number
  name: string
  username: string
  email: string
}

interface DetailStore {
  user?: User
  setUser: (user: User | undefined) => void
}

export const useDetailStore = create<DetailStore>((set) => ({
  user: undefined,
  setUser: (user) => set({ user }),
}))
