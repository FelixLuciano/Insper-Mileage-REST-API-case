require('dotenv').config()
const { Pool } = require('pg')

let poolConfig;

if (process.env.NODE_ENV !== "production") {
  poolConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
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

module.exports = pool
