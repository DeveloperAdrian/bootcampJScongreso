function general(data){
    let miembros = data.results[0].members;

let estadisticas = {
    democratas : [],
    republicanos: [],
    independientes: [],
    
    }

estadisticas.democratas = miembros.filter( miembro => miembro.party === "D")
estadisticas.republicanos = miembros.filter( miembro => miembro.party === "R")
estadisticas.independientes = miembros.filter( miembro => miembro.party === "ID")



function calcularPromedio(miembros,propiedades) {

    let promedio = 0;

    let suma = 0;

    miembros.forEach(miembro => {
        suma = suma + miembro[propiedades]
    });
    let cantidad = miembros.length;

    promedio = suma / cantidad;

    return isNaN(promedio) ? 0 : promedio.toFixed(2)
}

let promedioD = calcularPromedio(estadisticas.democratas, "votes_with_party_pct")
let promedioR = calcularPromedio(estadisticas.republicanos, "votes_with_party_pct")
let promedioID = calcularPromedio(estadisticas.independientes , "votes_with_party_pct")

function renderTable(array, id){

    const cuerpoTabla = document.querySelector(`#${id} tbody`)

    let total = (array.democratas.length + array.republicanos.length + array.independientes.length)

    let totalPromedio = calcularPromedio(miembros,"votes_with_party_pct")
    cuerpoTabla.innerHTML +=`
    
    <tr>
    <td>Democrats</td>
    <td>${array.democratas.length}</td>
    <td>${promedioD}&percnt;</td>
    </tr>

    <tr>
    <td>Republicans</td>
    <td>${array.republicanos.length}</td>
    <td>${promedioR}&percnt;</td>
    </tr>

    <tr><td>Independents</td>
    <td>${array.independientes.length }</td>
    <td>${promedioID}&percnt;</td></tr>

    <tr>
    <td>Total</td>
    <td>${total}</td>
    <td>${totalPromedio}&percnt;</td>

    `
}
    renderTable(estadisticas,`table-${chamber}`);


//funcion para crear el porcentaje y redondea al numero superior

function crearPorcentaje(array){ 

    let largoArray = array.length * 0.10

    return largoArray
}

let resultadoCrear = Math.round(crearPorcentaje(miembros))


//funcion para imprimir las tablas y a su vez las ordena
function filtrarTablas(array,propiedad,booleano){

    let copiaMiembros = [...array];

    copiaMiembros = copiaMiembros.filter( miembro => miembro.total_votes > 0)

    let resultado = copiaMiembros.sort((miembroA,miembroB) =>{

    return booleano ? miembroB[propiedad] - miembroA[propiedad] : miembroA[propiedad] - miembroB[propiedad] 

    })
    
    return resultado.slice(0,resultadoCrear)


}
let mostEngaged = filtrarTablas(miembros,"missed_votes_pct",false)
let leastEngaged = filtrarTablas(miembros,"missed_votes_pct",true)
let mostLoyal = filtrarTablas(miembros,"votes_with_party_pct", true)
let leastLoyal = filtrarTablas(miembros,"votes_with_party_pct", false)


function llenarTablas(array,id,parametro1,parametro2){

    let cuerpoTabla = document.querySelector(`#${id} tbody`)
    if(cuerpoTabla){
        cuerpoTabla.innerHTML = ""
        array.forEach(miembro => {

            let nombre = `${miembro.first_name}, ${miembro.last_name}, ${miembro.middle_name !== null ? miembro.middle_name : ""}`
            cuerpoTabla.innerHTML += `
            
            <tr>
            <td><a href="${miembro.url}"target="_blank">${nombre}</a></td>
            <td>${miembro[parametro1]}</td>
            <td>${miembro[parametro2]}&percnt;</td>
            </tr>
            `
        })
    }   
}

llenarTablas(mostLoyal,"masLeales","total_votes","votes_with_party_pct")
llenarTablas(leastLoyal, "menosLeales","total_votes","votes_with_party_pct")
llenarTablas(mostEngaged,"masEngaged","missed_votes","votes_with_party_pct")
llenarTablas(leastEngaged,"menosEngaged","missed_votes","votes_with_party_pct")
}
let chamber = document.querySelector("#table-senate") ? "senate" : "house"
let endpoint = `https://api.propublica.org/congress/v1/113/${chamber}/members.json`

let init = {
    method: "GET",
    headers: 
    {"X-API-Key": "1dPJEAY7LzpYskVbLFP2XJ7wevhVse8qKbXQHSAU"}
}

fetch(endpoint, init)
    .then((res) => res.json())
    .then((data) => {

    general(data)

    })

    .catch(err => console.error(err))