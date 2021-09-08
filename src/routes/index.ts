import fs from "fs"
import snakeCase from "lodash/snakeCase"
import { Application, Router } from "express"

export default function routerIndex(app: Application) {
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === "index.js") return

    const router = Router()
    const modulePath = require("path").join(__dirname, file)
    const routeModule = require(modulePath).default
    let path = routeModule.path || "/"

    if (file !== "root.js")
      path += snakeCase(file.replace(".js", ""))

    const route = routeModule.config ? routeModule.config(router) : routeModule(router)

    app.use(path, route)
  })
}
