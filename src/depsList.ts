import { getInput } from "@actions/core"
import { resolve } from "path"

import { path } from "./path"

export const depsList = resolve(
  path,
  getInput("deps_list") || "requirements.txt"
)
