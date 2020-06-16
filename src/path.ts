import { getEnv } from "./envHelper"

const path = getEnv("GITHUB_WORKSPACE") || ""

if (!path)
  throw new Error(
    "repository not found. use https://github.com/actions/checkout/ before running test"
  )

export { path }
