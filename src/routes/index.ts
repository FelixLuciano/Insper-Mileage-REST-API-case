import fs from "fs"
import snakeCase from "lodash/snakeCase"
import { Application, Router } from "express"

export default function routerIndex(app: Application) {
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === "index.ts") return

    const router = Router()
    const modulePath = require("path").join(__dirname, file)
    const routeModule = require(modulePath).default
    let path = routeModule.path || "/"

    if (file !== "root.ts")
      path += snakeCase(file.replace(".ts", ""))

    const route = routeModule.config ? routeModule.config(router) : routeModule(router)

    app.use(path, route)
  })
}
