let user = {
  name: "bob",
  profesion: "atrapar medusas"
}

let user2 = {
  name: "patricio",
  profesion: "molestar a bob"
}

// console.log(user) // 3

// identificamos la data a exportar
// module.exports = user

// module.exports = user2

// let dataToExport = [user, user2 ]
let dataToExport = {
  user: user,
  user2: user2
}

// console.log("data en data.js", dataToExport) // 3

// module.exports = dataToExport

// como exportamos con ES6?
export default dataToExport

// el default lo usamos cuando tenemos la variable definida
