export const getUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const data = await response.json()
  return data
}
