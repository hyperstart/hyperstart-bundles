import { writeFileSync } from "fs"
import { join } from "path"
import { bundle } from "./bundle"
import { sanitize } from "./utils"

type ToBundle =
  | string
  | {
      pkg: string
      version?: string
    }

const bundles: ToBundle[] = [
  "hyperapp",
  "@hyperapp/html",
  "@hyperapp/fx",
  "@hyperapp/router"
]

bundles.forEach(b => {
  console.log(`Bundling ${JSON.stringify(b)}...`)

  const pkg = typeof b === "string" ? b : b.pkg
  const version = typeof b === "string" ? undefined : b.version

  bundle(pkg, version).then(bundle => {
    console.log(`Bundle created for ${JSON.stringify(b)}, writing file...`)
    writeFileSync(
      join(__dirname, `../bundles/${sanitize(pkg)}@${bundle.version}.json`),
      JSON.stringify(bundle)
    )
    console.log(`Done bundling ${JSON.stringify(b)}.`)
  })
})
