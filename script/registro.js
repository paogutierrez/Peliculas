alert("Se parte de nosotros");

//definir variables
let miNombre = "";
let apellido = "";
let telefono = "";
let direccion = "";
let observaciones ="";

//Prevenir que se realice la accion SUBMIT
document.getElementById('form')
.addEventListener(
    'submit', 
    function formSubmit(event){
        event.preventDefault();
    }
);

//Agregar un evento al boton enviar "btnEnviar"

let buttonEnviar = document.getElementById('btn');
buttonEnviar.addEventListener('click', capturarDatos);
function capturarDatos() {
    console.log("El evento CLICK esta funcionando");
    //Captura la informacion del input relacionado con el nombre
    miNombre = document.getElementById("inputNombre").value;
    apellido = document.getElementById("inputApellido").value;
    telefono = document.getElementById("inputTelefono").value;
    direccion = document.getElementById("inputDireccion").value;
    observaciones = document.getElementById("text-area").value;


console.log(miNombre, apellido, telefono, direccion, observaciones);

//invocar a la funcion para guardar informacion en local storage

guardarInformacionEnLocalStorage(miNombre, apellido, telefono, direccion, observaciones);

}

//funcion para almacenar en local storage las variables del formularios

function guardarInformacionEnLocalStorage(MiNombre, Apellido, Telefono, Direccion, Observaciones){

    localStorage.setItem('Nombre' , MiNombre);
    localStorage.setItem('Apellido' , Apellido);
    localStorage.setItem('Telefono' , Telefono);
    localStorage.setItem('Direccion' , Direccion);
    localStorage.setItem('Observaciones' , Observaciones);

    mostrarInformacionEnHtml()
}

