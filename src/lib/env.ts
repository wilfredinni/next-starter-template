import { cleanEnv, str } from "envalid"

const env = cleanEnv(process.env, {
  BACKEND_URL: str(),
})

export default env
