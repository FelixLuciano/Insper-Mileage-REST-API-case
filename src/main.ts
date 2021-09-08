import express, { Application } from "express"
import cors from "cors"
import useRoutes from "./routes/index"

const app: Application = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.static("public"))
useRoutes(app)

app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`)
})
