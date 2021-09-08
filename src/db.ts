import dotenv from "dotenv"
import { Pool } from "pg"

dotenv.config()

let poolConfig

if (process.env.NODE_ENV !== "production") {
  poolConfig = {
    connectionString: process.env.DATABASE_URL,
  }
}
else {
  poolConfig = {
    connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
  }
}

const pool = new Pool(poolConfig)

export default pool
