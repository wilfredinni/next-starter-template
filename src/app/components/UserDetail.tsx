import { useDetailStore } from "@/store/user.store"

export default function UserDetail() {
  const { user } = useDetailStore()

  return (
    <div>
      {user && (
        <div className="text-center">
          <p>Id: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  )
}
