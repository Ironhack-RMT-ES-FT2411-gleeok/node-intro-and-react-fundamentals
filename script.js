// tengo acceso a todas las variables de React

// React (la libreria principal)
// ReactDOM (donde está los elementos para generar dom virtual)

console.log("probando")

const myPageNode = document.querySelector("#my-page")
const root = ReactDOM.createRoot(myPageNode) // crear el dom virtual

let nombre = "Jorge"

// const someInfoNode = React.createElement("div", {
//   children: [
//     React.createElement("h1", {
//       children: `Hola mi nombre es ${nombre}, bienvenidos a mi página`
//     }),
//     React.createElement("p", {
//       children: `Aqui aprendemos react`
//     }),
//     React.createElement("p", {
//       children: `Derechos de autor, no lo comparto con nadie`
//     })
//   ]
// }) // un elemento del dom virtual

// JSX => JS + XML

// const someInfoJSX = (
//   <div>
//     <h1>Hola mi nombre es {nombre}, bienvenidos a mi página</h1>
//     <p>Aqui aprendemos react</p>
//     <p>Derechos de autor, no lo comparto con nadie</p>
//   </div>
// )


// Componentes 
// una funcion que SIEMPRE retorna un JSX que es lo que generará la modificación del DOM
// react nos pide que estas funciones componentes se escriban PascalCasing

function Copyright() {
  return (
    <p>Derechos de autor, no lo comparto con nadie</p>
  )
}

function UnComponente() {
  return (
    <div>
      <h1>Hola mi nombre es {nombre}, bienvenidos a mi página</h1>
      <p>Aqui aprendemos react</p>
      <Copyright />
    </div>
  )
}

// como nosotros las invocamos
// root.render( UnComponente() ) // invocar el componente
root.render( <UnComponente /> )  // invocar el componente (como nos pide React hacerlo)