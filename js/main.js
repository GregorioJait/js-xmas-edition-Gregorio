
const $form = document.querySelector("#carta-a-santa");

const  nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value

function validarNombre(nombre) {
    if(nombre.length === 0){
      return "Este campo debe tener al menos 1 caracter";  
    }

    if(nombre.length >= 50){
        return "Este campo debe tener menos de 50 caracteres";

        
    }

}

function validarCiudad(ciudad) {
    if(ciudad === ''){
        return "Selecciona una Ciudad"
    }
}

function validarDescripcionRegalo(descripcionRegalo) {
    if(descripcionRegalo === ''){
        return "Describi tu Regalo"
    }
}












