// Ejercicio 1


// A nuestro cliente le cuesta mucho decidir qué comer y ha delegado la decisión de cada mediodía a la tecnología.
// Para eso, contrató a un desarrollador front-end que realizó el diseño de una web y a un desarrollador mobile para crear una aplicación móvil.

// Lo que falta para completar el proyecto es el endpoint responsable de la lógica de la decisión. Entre los tres se pusieron de acuerdo, y tú serás quien desarrolle dicho endpoint.

// Para el MVP, se solicita que el endpoint (elige el método adecuado) devuelva el nombre de una comida aleatoria entre 3 opciones ya definidas en el código.

// También queda a tu criterio el formato de la respuesta. Puede ser un JSON, texto plano, implementalo como mejor te parezca.



const PORT = 8000

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const variedFood = ['Chocolate', 'Sushi', 'Cheese Burger']

app.get('/food', (req, res) => {
    const randomFood = getRandomInt(3)

    res.status(200).send(variedFood[randomFood])
})



app.listen(PORT, () => {
    console.log(`App is boot in port:${PORT}`)
})



// Ejercicio 2
// Implementa el siguiente endpoint:

// POST /minmax

// REQUEST:
// {
//     number: int
// }
// RESPONSE:
// {
//     min: int,
//     max: int
// }
// Este endpoint /minmax deberá recibir un numero via body param, almacenarlo en un array en memoria y devolver el número mínimo y máximo del array.

// Algunos ejemplos de llamadas consecutivas:

// POST /minmax {number: 7}
// {
//     min: 7,
//     max: 7
// }
// POST /minmax {number: 2}
// {
//     min: 2,
//     max: 7
// }
// POST /minmax {number: 9}
// {
//     min: 2,
//     max: 9
// }
// POST /minmax {number: 12}
// {
//     min: 2,
//     max: 12
// }


let arrayNum = []

app.post('/minmax', (req, res) => {
    const numberUser = req.body.number

    let maxNumber = 0
    let minNumber = 0


    arrayNum.push(numberUser)


    maxNumber = Math.max(...arrayNum)
    minNumber = Math.min(...arrayNum)

    res.status(200).send(`Min number is: ${minNumber},Max number is: ${maxNumber}`)
})




// Ejercicio 3
// Encuentra los errores en el siguiente fragmento de código para eliminar usuarios. Puedes reescribirlo si te resulta más sencillo:

// ...

// app.put('/users', (res, req) => {
//     const userId = req.params.id;
//     const sql = `DELETE FROM users WHERE id=${userID}`;
//     db.query(sql, (error, result) => {
//         if(error) throw error;
//         res.send(`User ${userId} deleted from the db.`);
//     })
// })

// ...