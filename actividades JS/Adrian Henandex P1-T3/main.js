

let miembros = data.results[0].members;



let tabla = document.querySelector('#politicos tbody');


function mostrarTabla(array) {
    tabla.innerHTML = ""
    array.forEach(miembro => {
        let nombre = `${miembro.first_name}, ${miembro.last_name}, ${miembro.middle_name !== null ? miembro.middle_name : ""}`
        tabla.innerHTML += `
        <tr>
            <td><a href="${miembro.url}"target="_blank">${nombre}</a></td>
            <td class="text-center">${miembro.party}</td>
            <td class="text-center">${miembro.state}</td>   
            <td class="text-center">${miembro.seniority}</td>
            <td class="text-center">${miembro.votes_with_party_pct} &percnt; </td>
        </tr>
        `
    });
}

mostrarTabla(miembros)



function noRepetirEstados(array) {
    let verEstados = []

    array.forEach(miembro => {
        if (!verEstados.includes(miembro.state)) {

            verEstados.push(miembro.state)
        }
    })
    return verEstados
}

let select = document.querySelector(`#select`);
let states = noRepetirEstados(miembros).sort();



function verEstados(array) {
    states.forEach(state => {
        select.innerHTML += `<option>${state}</option>`
    })
}
verEstados(miembros)

//Crear evento para que el select escuche ( interactue)

select.addEventListener('change', filtrarEstado)



function filtrarEstado() {
    let div = document.querySelector("#alert")
    let estadoFiltrado;
    if (select.value != "ALL") {
        estadoFiltrado = miembros.filter(miembro => miembro.state == select.value)

    } else {
        estadoFiltrado = miembros
    }
    estadoFiltrado = estadoFiltrado.filter(miembro => partido.includes(miembro.party))

    if (estadoFiltrado.length) {
        div.innerHTML = ""
        mostrarTabla(estadoFiltrado)
    } else {
        tabla.innerHTML = ""
        div.innerHTML += `<div class="alert alert-warning alert-dismissible fade show" id="alert" role="alert">
        <strong>Eyyyyy!</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
    }
}



let partido = ["R", "D", "ID"]

let chequeado = document.querySelectorAll("input[type='checkbox']")

let arraycheck = Array.from(chequeado)

arraycheck.forEach(chequeado => {
    chequeado.addEventListener("change", evento => {
        let seleccion = evento.target.value
        let selecto = evento.target.checked
        if (partido.includes(seleccion) && !selecto) {
            partido = partido.filter(element => element != seleccion)
        } else {
            partido.push(seleccion)
        }
        filtrarEstado()
    })
})





