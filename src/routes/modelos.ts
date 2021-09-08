import dotenv from "dotenv"
import { Router } from "express"
import cors from "cors"
import pool from "../db"

dotenv.config()

const corsOptions = {
  origin: "*",
}

export default function modelos(router: Router) {
  router.route("/")
    .get(async (req, res) => {
      try {
        const modelos = await pool.query("SELECT * FROM Carros")
  
        res.json(modelos.rows)
      }
      catch (err: any) {
        console.error(err.message)
      }
    })
    .post(cors(corsOptions), async (req, res) => {
      try {
        const { password, data } = req.body

        if (password === process.env.API_PASS) {
          const { modelo, marca, motor, piloto } = data
          const newModelo = await pool.query("INSERT INTO Carros (modelo, marca, motor, piloto) VALUES ($1, $2, $3, $4)", [modelo, marca, motor, piloto])
    
          res.json(newModelo).sendStatus(202)
        }
        else {
          res.sendStatus(401)
        }
      }
      catch (err: any) {
        console.error(err.message)
      }
    })

  router.route("/:motor")
    .get(async (req, res) => {
      try {
        const { motor } = req.params
        const modelo = await pool.query("SELECT * FROM Carros WHERE motor = $1", [motor])
  
        res.json(modelo.rows)
      }
      catch (err: any) {
        console.error(err.message)
      }
    })

  router.route("/:id")
    .put(async (req, res) => {
      try {
        const { password, data } = req.body
        
        if (password === process.env.API_PASS) {
          const { id } = req.params
          const { modelo, marca, motor, piloto } = data

          await pool.query("UPDATE carros SET modelo = $2, marca = $3, motor = $4, piloto = $5 WHERE id = $1", [id, modelo, marca, motor, piloto])
          res.sendStatus(200)
        }
        else {
          res.sendStatus(401)
        }
      }
      catch (err: any) {
        console.error(err.message)
      }
    })
    .delete(cors(corsOptions), async (req, res) => {
      try {
        const { password } = req.body
        
        if (password === process.env.API_PASS) {
          const { id } = req.params

          await pool.query("DELETE FROM Carros WHERE id = $1", [id])
          res.sendStatus(200)
        }
        else {
          res.sendStatus(401)
        }
      }
      catch (err: any) {
        console.error(err.message)
      }
    })

  return router
}
