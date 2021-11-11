let miembros = data.results[0].members

let datos = {
    democrats: [],
    republicans: [],
    independents: []
}

datos.democrats = miembros.filter( miembro => miembro.party === "D")
datos.republicans = miembros.filter( miembro => miembro.party === "R")
datos.independents = miembros.filter( miembro => miembro.party === "ID" )

function promedio(array, propiedad) {
    let promedio = 0;
    let suma = 0;
    array.forEach(element => {
        suma += element[propiedad]
    });
    cantidad = array.length
    promedio = suma / cantidad;
    return promedio
}
//funcion primera tabla
function estadisticas(array,id){
    let tabla = document.querySelector(`#${id} tbody`)

    tabla.innerHTML += `<tr><td>Democrats</td><td>${array.democrats.length}</td><td>${promedio(datos.democrats,"votes_with_party_pct")}</td></tr>
                        <tr><td>Republicans</td><td>${array.republicans.length}</td><td>${promedio(datos.republicans,"votes_with_party_pct")}</td></tr>
                        <tr><td>Independents</td><td>${array.independents.length}</td><td>${promedio(datos.independents ,"votes_with_party_pct")}</td></tr>
                        
`
}
estadisticas(datos,"tablaGla")

//funciones generales 

function menosVotos(array){
    let arrayAux = []

    let copiaMiembros = [...miembros]

    let orden = copiaMiembros.sort( ( a, b)=> {
        if(b.missed_votes < a.missed_votes){
        
        return -1
        }
        if(b.missed_votes > a.missed_votes){
        return 1
        }
        return 0
    })

    let indiceOrdenado = Math.round((orden.length * 10)/100)-1
    console.log(indiceOrdenado)

    let limite = copiaMiembros[indiceOrdenado].missed_votes

    arrayAux = copiaMiembros.filter(miembro => miembro.missed_votes >= limite)

    return arrayAux
}
let resultado = menosVotos(miembros)
// function menosVotos(array){
//     let arrayAux = []

//     let copiaMiembros = [...miembros]

//     let orden = copiaMiembros.sort( ( a, b)=> {
//         if(a.missed_votes < b.missed_votes){
        
//         return -1
//         }
//         if(b.missed_votes > a.missed_votes){
//         return 1
//         }
//         return 0
//     })

//     let indiceOrdenado = Math.round((orden.length * 10)/100)-1
//     console.log(indiceOrdenado)

//     let limite = copiaMiembros[indiceOrdenado].missed_votes

//     arrayAux = copiaMiembros.filter(miembro => miembro.missed_votes >= limite)

//     return arrayAux
// }



//Funcion para llenar tablas

function pintarTabla(resultado,id){
    let tabla = document.querySelector(`#${id} tbody`)

    tabla.innerHTML = ""

    resultado.map( miembro =>{
        tabla.innerHTML +=`
        <tr>
            <td> ${miembro.first_name} ${miembro.last_name} </td>
            <td> ${miembro.missed_votes}</td>
            <td> ${miembro.missed_votes_pct}</td>
        </tr>
        
        `
    })
}
pintarTabla(resultado,"missed-votes")

// function menosVotos(array){
//     let arrayAux = []

//     let copiaMiembros = [...miembros]

//     let orden = copiaMiembros.sort( ( a, b)=> {
//         if(b.missed_votes < a.missed_votes){
        
//         return -1
//         }
//         if(b.missed_votes > a.missed_votes){
//         return 1
//         }
//         return 0
//     })

//     let indiceOrdenado = Math.round((orden.length * 10)/100)-1
//     console.log(indiceOrdenado)

//     let limite = copiaMiembros[indiceOrdenado].missed_votes

//     arrayAux = copiaMiembros.filter(miembro => miembro.missed_votes >= limite)

//     return arrayAux
// }

let resultado = menosVotos(miembros)

// let copiaData = [...data.results[0].members]
// let estadisticas = {
// leastEngaged : [],
// mostEngaged  : [],
// leastLoyal   : [],
// mostLoyal    : []
// }

// estadisticas.leastEngaged= menosComprometidos(members)
// estadisticas.mostEngaged= masComprometidos(members)
// estadisticas.leastLoyal= menosleales(members)
// estadisticas.mostLoyal= masLeales(members)
// //mostrar tablas
// function mostrarTablas(array,idTabla) {
//     let cuerpoTabla = document.querySelector(`#${idTabla} tbody`)
//     if(cuerpoTabla) {
//     array.forEach(miembro => {
//         let fila = document.createElement("tr")
//         let nombre = ` ${miembro.first_name} ${miembro.last_name} ${miembro.middle_name !==null? miembro.middle_name:""}`
//         fila.innerHTML = `<td>${nombre}</td><td>${miembro.missed_votes_pct}</td><td>${miembro.missed_votes_pct}</td>`
//         cuerpoTabla.appendChild(fila)
//     })
// }  
// }

// mostrarTablas(estadisticas.leastEngaged,"Least-Engaged")
// mostrarTablas(estadisticas.mostEngaged,"Most-Engaged")
// mostrarTablas(estadisticas.leastLoyal,"Least-Loyal")
// mostrarTablas(estadisticas.mostLoyal,"Most-Loyal")
// //mas y menos comprometidos
// function masComprometidos(miembros) {

//     let arrayAuxiliar = []
//     let copiaMiembros = [...miembros]
//     copiaMiembros.sort((miembroA,miembroB) => miembroB.missed_votes_pct - miembroA.missed_votes_pct)

//     let indiceLimite = (copiaMiembros.length * 10 / 100) - 1

//     let limite = copiaMiembros [indiceLimite].missed_votes_pct

//     arrayAuxiliar = copiaMiembros.filter(miembro => miembro.missed_votes_pct >= limite)
//     return arrayAuxiliar

// }

// function menosComprometidos(miembros) {

//     let arrayAuxiliar = []
//     let copiaMiembros = [...miembros]
//     copiaMiembros.sort((miembroA,miembroB) => miembroA.missed_votes_pct - miembroB.missed_votes_pct)

//     let indiceLimite = (copiaMiembros.length * 10 / 100) - 1

//     let limite = copiaMiembros [indiceLimite].missed_votes_pct

//     arrayAuxiliar = copiaMiembros.filter(miembro => miembro.missed_votes_pct <= limite)
//     return arrayAuxiliar

// }

// //mas y menos leales
// function masLeales(miembros) {

//     let arrayAuxiliar = []
//     let copiaMiembros = [...miembros]
//     copiaMiembros.sort((miembroA,miembroB) => miembroB.missed_votes_pct - miembroA.missed_votes_pct)

//     let indiceLimite = (copiaMiembros.length * 10 / 100) - 1

//     let limite = copiaMiembros [indiceLimite].missed_votes_pct

//     arrayAuxiliar = copiaMiembros.filter(miembro => miembro.missed_votes_pct >= limite)
//     return arrayAuxiliar

// }

// function menosleales(miembros) {

//     let arrayAuxiliar = []
//     let copiaMiembros = [...miembros]
//     copiaMiembros.sort((miembroA,miembroB) => miembroA.missed_votes_pct - miembroB.missed_votes_pct)

//     let indiceLimite = (copiaMiembros.length * 10 / 100) - 1

//     let limite = copiaMiembros [indiceLimite].missed_votes_pct

//     arrayAuxiliar = copiaMiembros.filter(miembro => miembro.missed_votes_pct <= limite)
//     return arrayAuxiliar

// }
// // TABLAS INFERIORES


// let copiaMiembros = [...data.results[0].members]


// function ordenarMiembro(array) {
//     let copiaMiembros = [...array];

//     let data1 = [...copiaMiembros]
//         .sort((a, b) => b.missed_votes_pct - a.missed_votes_pct)
//         .filter((e) => e.total_votes > 1);
//     let data2 = [...copiaMiembros]
//         .sort((a, b) => a.missed_votes_pct - b.missed_votes_pct)
//         .filter((e) => e.total_votes > 1);

//     let data3 = [...copiaMiembros]
//         .sort((a, b) => b.votes_with_party_pct - a.votes_with_party_pct)
//         .filter((e) => e.total_votes > 1);
//     let data4 = [...copiaMiembros]
//         .sort((a, b) => a.votes_with_party_pct - b.votes_with_party_pct)
//         .filter((e) => e.total_votes > 1);

//     let porcentaje = Math.round((copiaMiembros.length * 10) / 100) - 1;

//     for (let i = 0; i < porcentaje; i++) {
//         statistics.mostLoyal.push(data1[i]);
//         statistics.leastLoyal.push(data2[i]);
//         statistics.mostEngaged.push(data3[i]);
//         statistics.leastEngaged.push(data4[i]);
//     }
// }

// ordenarMiembro(copiaMiembros);

// function renderTable(array, propiedad, propiedad2, idTabla) {
//     let table = document.querySelector(`#${idTabla} tbody`)

//     array.forEach((element) => {
//         let row = document.createElement("tr");
//         let name = `${element.first_name}, ${element.last_name}, ${element.middle_name !== null ? element.middle_name : ""
//             }`;

//         if (table) {
//             row.innerHTML += `
//         <tr>
//         <td>${name}</td>
//         <td>${element[propiedad]}</td>
//         <td>${element[propiedad2].toFixed(2)}%</td>
//         </tr>
      
//       `;
//             table.appendChild(row);
//         }
//     });
// }

// renderTable(
//     statistics.mostLoyal,
//     "missed_votes",
//     "missed_votes_pct",
//     "leastLoyal"
// );
// renderTable(
//     statistics.leastLoyal,
//     "missed_votes",
//     "missed_votes_pct",
//     "mostLoyal"
// );
// renderTable(
//     statistics.mostEngaged,
//     "total_votes",
//     "votes_with_party_pct",
//     "leastEngaged"
// );
// renderTable(
//     statistics.leastEngaged,
//     "total_votes",
//     "votes_with_party_pct",
//     "mostEngaged"
// );





