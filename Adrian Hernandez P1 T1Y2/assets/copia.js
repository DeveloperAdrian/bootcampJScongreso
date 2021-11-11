
// const members = data.results[0].members

// //function para extraer lista de Json.

// function tablaMiembros(miembros, id) {
//     const cuerpoTabla = document.querySelector(`#${id} tbody`)
//     cuerpoTabla.innerHTML = ""

//     miembros.forEach(miembro => {
//         let fila = document.createElement("tr")
//         let nombre = `${miembro.first_name}, ${miembro.last_name}, ${miembro.middle_name !== null ? miembro.middle_name : ""}`
//         fila.innerHTML += `
//         <td><a href="${miembro.url}"target="_blank">${nombre}</a></td>
//         <td class="text-center">${miembro.party}</td>
//         <td class="text-center">${miembro.state}</td>   
//         <td class="text-center">${miembro.seniority}</td>
//         <td class="text-center">${miembro.votes_with_party_pct}</td>
//     `

//         cuerpoTabla.appendChild(fila)
//     });
// }
// //funcion traer estados
// const estados = document.querySelector(`#state`) //agarrarrando el select
// let arrayState = [];

// function traerEstados(miembros) {
//     miembros.forEach(miembro => {
//         if (!arrayState.includes(miembro.state)) {
//             arrayState.push(miembro.state)
//         }
//     })
//     arrayState.sort();
// }



// traerEstados(members)

// function llenarEstados(arrayEstados) {
//     arrayEstados.forEach(cadaEstado => {
//         let opciones = document.createElement("option")
//         opciones.value = cadaEstado
//         opciones.innerText = cadaEstado
//         estados.appendChild(opciones)
//     })
// }
// llenarEstados(arrayState)

// //Funtion miembros
// tablaMiembros(members, "senadores")



// function filterParty(array, party) {
//     let arrAux = [];
//     for (let i = 0; i < party.length; i++) {
//         arrAux = arrAux.concat(array.filter(partido => partido.party == party[i])) // Concatenar el resultado anterior con el siguiente 
//     }
//     return arrAux
// }

// let boxes = document.querySelectorAll(".caja");
// boxes.forEach(box => box.addEventListener("change", checkBox))


// /* Function escuchar checkBox */
// function checkBox() {

//     let arrayAux = []
//     boxes.forEach(box => {
//         if (box.checked) {
//             arrayAux.push(box.value)
//         }
//     })
//     console.log(arrayAux)

//     return arrayAux
// }
// // console.log(boxes[0])
// let select = document.querySelector(`#state`)
// function chequeado(){
//     tablaMiembros(filterParty(traerEstados(members,select.value),checkBox()),"senadores")
// };
// chequeado();

