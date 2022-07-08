let pizzas = [
    {id:1, nombre:"muzarella", ingredientes:["salsa", "muzarrella", "aceitunas"], Precio:500},
    {id:2, nombre:"fugazeta", ingredientes:["cebolla", "salsa", "muzarella", "aceitunas"], Precio:600},
    {id:3, nombre:"calabreza", ingredientes:["longaniza", "salsa", "muzarrella", "aceitunas"], Precio:700},
    {id:4, nombre:"anchoas", ingredientes:["salsa", "muzarrella", "aceitunas", "anchoas"], Precio:600},
    {id:5, nombre:"napolitana", ingredientes:["salsa", "muzarrella", "aceitunas", "ajo", "tomate"], Precio:700},
    {id:6, nombre:"provolone", ingredientes:["salsa", "provolone", "aceitunas"], Precio:750},
];

let h2 = document.getElementById("h2")
let h4 = document.getElementById("h4")
let input = document.getElementById("input")
let btn = document.getElementById("btn")

btn.addEventListener("click", datos);

function datos () {

h2.innerHTML = ""
h4.innerHTML = ""

let nroPizza = input.value

pizzas.forEach((pizza) => {if (pizza.id == nroPizza) {h2.innerHTML = `la pizza sabor ${pizza.nombre}`; h4.innerHTML = `tiene un precio de $ ${pizza.Precio}`}

})

if (nroPizza>6 || nroPizza<0) {
    msjerror ("No existe esa pizza!!")
}
    

    function msjerror (msj) { 
        let error = document.createElement ("p")

            error.textContent = msj;

        h2.appendChild(error)
    }
}