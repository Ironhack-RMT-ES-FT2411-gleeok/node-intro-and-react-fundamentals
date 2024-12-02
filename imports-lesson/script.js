console.log("probando codigo desde node") // 1

let number = 10;
console.log(number) // 2

// const dataImportada = require("./data.js")
import dataImportada from "./data.js"
// por si solo, require busca otro modulo y ejecuta todo el código que hay dentro
// (opcionalmente nos puede traer una data de ese modulo)

console.log("data en script.js", dataImportada) // 4

number += 20
console.log(number) // 5