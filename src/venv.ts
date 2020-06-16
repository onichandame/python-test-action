import { exec } from "@actions/exec"
import { resolve } from "path"

import { path } from "./path"
import { depsList } from "./depsList"
import { options } from "./execOptions"

const venvPath = resolve(path, ".env")

const binPath = resolve(venvPath, "bin")
const pipPath = resolve(binPath, "pip")

export const pythonPath = resolve(binPath, "python")

export const setUpVenv = async () => {
  await exec("python3", ["-m", "venv", ".env"], options)
  await exec(pipPath, ["install", "-r", depsList], options)
}
