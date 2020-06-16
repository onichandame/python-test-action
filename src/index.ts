import { exec } from "@actions/exec"
import { info, error, setFailed } from "@actions/core"

import { setUpVenv, pythonPath } from "./venv"
import { options } from "./execOptions"
;(async () => {
  try {
    info("starting test")
    await setUpVenv()
    info("dependencies installed")
    if ((await exec(pythonPath, ["-m", "unittest"], options)) !== 0)
      throw new Error(`test failed`)
  } catch (e) {
    error(`testing failed due to ${JSON.stringify(e.message || e)}`)
    setFailed(e)
  }
})()
