// Ejercicio 1


// A nuestro cliente le cuesta mucho decidir qué comer y ha delegado la decisión de cada mediodía a la tecnología.
// Para eso, contrató a un desarrollador front-end que realizó el diseño de una web y a un desarrollador mobile para crear una aplicación móvil.

// Lo que falta para completar el proyecto es el endpoint responsable de la lógica de la decisión. Entre los tres se pusieron de acuerdo, y tú serás quien desarrolle dicho endpoint.

// Para el MVP, se solicita que el endpoint (elige el método adecuado) devuelva el nombre de una comida aleatoria entre 3 opciones ya definidas en el código.

// También queda a tu criterio el formato de la respuesta. Puede ser un JSON, texto plano, implementalo como mejor te parezca.






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