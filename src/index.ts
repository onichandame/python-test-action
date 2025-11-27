import { exec } from "@actions/exec"
import { info, error, setFailed, getInput } from "@actions/core"

import { setUpVenv, pythonPath } from "./venv"
import { options } from "./execOptions"
;(async () => {
  try {
    info("starting test")
    await setUpVenv()
    info("dependencies installed")
    const args = getInput(`args`).split(` `).filter(Boolean)
    if ((await exec(pythonPath, ["-m", "unittest", ...args], options)) !== 0)
      throw new Error(`test failed`)
  } catch (e) {
    error(`testing failed due to ${JSON.stringify(e.message || e)}`)
    setFailed(e)
  }
})()
