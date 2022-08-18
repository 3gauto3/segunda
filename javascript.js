// variables glabales

const formularioUsuario = document.getElementById("formularioUsuario")
const listaActividadesUsuario = document.getElementById("listaActividades")
let arrayActividades = []

// funciones

const CrearItem = (actividad) => {
    let item = {
        lectura: actividad,
        estado: false
    }

    arrayActividades.push(item);
    return item
}

const GuardarDB = () => {
    localStorage.setItem("rutina", JSON.stringify(arrayActividades))
    PintarDB()

}

const PintarDB = () => {

    listaActividadesUsuario.innerHTML = "";
    arrayActividades = JSON.parse(localStorage.getItem("rutina"));
    if (arrayActividades === null) {
        arrayActividades = [];
    } else {
    arrayActividades.forEach(elemento => {
        listaActividadesUsuario.innerHTML += `
        <div class="alert alert-primary my-3" role="alert">
            <span class="float-end">
            <button class="btn btn-success">
                Realizado
            </button>
            <button class="btn btn-danger">
                Descartar
            </button>
            </span>
                <b>${elemento.actividad}</b> - ${elemento.estado}
            </div>
        </div>
        `
    
    })
    }
}

// addEventListener

formularioUsuario.addEventListener("submit", (e) => {

    e.preventDefault();
    let actividadUsuario = document.getElementById("actividadUsuario").value

    CrearItem(actividadUsuario);
    GuardarDB()

    formularioUsuario.reset();

})

document.addEventListener("DOMContentLoaded", PintarDB)
listaActividadesUsuario.addEventListener("click", (e) =>{

e.preventDefault();
console.log(e.path[2].childNodes[3].innerHTML);

})