import { createApp, ref } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.10/vue.esm-browser.prod.min.js"

const API_URL = "https://stark-ravine-77496.herokuapp.com/modelos"

function myApp() {
  return {
    setup() {
      const modelo = ref("")
      const marca = ref("")
      const motor = ref("")
      const piloto = ref("")
      const carros = ref([])

      async function registrarCarro() {
        const carro = {
          modelo: modelo.value,
          marca: marca.value,
          motor: motor.value,
          piloto: piloto.value
        }
        const password = prompt("Senha")
        
        try {
          const response = await fetch(API_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              password,
              data: carro
            })
          })

          if (response.ok) location.reload()
          else throw(response)
        }
        catch (err) {
          if (err.status === 401)
            alert("Senha incorreta!")
            
          console.error(err)
        }
      }

      async function deletaCarro(id) {
        try {
          const password = prompt("Senha")
          const response = await fetch(`${ API_URL }/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              password
            })
          })

          if (response.ok) location.reload()
          else throw(response)
        }
        catch (err) {
          if (err.status === 401)
            alert("Senha incorreta!")
            
          console.error(err)
        }
      }

      async function modificaCarro(carro) {
        try {
          const password = prompt("Senha")
          const response = await fetch(`${ API_URL }/${carro.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              password,
              data: carro
            })
          })

          if (response.ok) location.reload()
          else throw(response)
        }
        catch (err) {
          if (err.status === 401) {
            alert("Senha incorreta!")
            location.reload()
          }

          console.error(err)
        }
      }

      fetch(API_URL)
        .then(res => res.json())
        .then(res => carros.value = res)

      return {
        modelo,
        marca,
        motor,
        piloto,
        registrarCarro,
        deletaCarro,
        modificaCarro,
        carros
      }
    }
  }
}

createApp(myApp()).mount("#app")
