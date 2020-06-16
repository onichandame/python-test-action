import { ExecOptions } from "@actions/exec"

import { path } from "./path"

const getOptions = (): ExecOptions => {
  const opts: ExecOptions = {}
  opts.cwd = path
  opts.silent = false
  return opts
}

export const options = getOptions()
