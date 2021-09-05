const express = require("express")
const pool = require("./db.js")

app = express()

app.use(express.json())

app.get("/home", (req, res) => {
  console.log(req)

  res.send("oi")
})

app.route("/modelos")
  .get(async (req, res) => {
    try {
      const modelos = await pool.query("SELECT * FROM Carros")

      res.json(modelos.rows)
    }
    catch (err) {
      console.error(err.message)
    }
  })
  .post(async (req, res) => {
    try {
      const { modelo } = req.body
      const newModelo = await pool.query("INSERT INTO Carros (modelo) VALUES ($1)", [modelo])

      res.json(newModelo)
    }
    catch (err) {
      console.error(err.message)
    }
  })

app.route("/modelos/:id")
  .get(async (req, res) => {
    try {
      const { id } = req.params
      const modelo = await pool.query("SELECT * FROM Carros WHERE id = $1", [id])

      res.json(modelo.rows[0])
    }
    catch (err) {
      console.error(err.message)
    }
  })
  .put(async (req, res) => {
    try {
      const { id } = req.params
      const { modelo } = req.body
      const newModelo = await pool.query("UPDATE carros SET modelo = $2 WHERE id = $1", [id, modelo])

      res.send(200)
    }
    catch (err) {
      console.error(err.message)
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params
      const newModelo = await pool.query("DELETE FROM Carros WHERE id = $1", [id])

      res.send(200)
    }
    catch (err) {
      console.error(err.message)
    }
  })

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`)
})
