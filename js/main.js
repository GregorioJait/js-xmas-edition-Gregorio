
const $form = document.querySelector("#carta-a-santa");

const nombre = $form.nombre.value;
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

    if(!/^[a-zñ]+$/i.test(nombre)){
        return "El nombre debe ser uno solo y contener solo letras";
    }

    return '';
}

function validarCiudad(ciudad) {
    if(ciudad === ''){
        return "Una ciudad tiene que estar seleccionada"
    }

    return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
    if(descripcionRegalo === ''){
        return "El campo descripcion no puede estar vacio"
    }

    if(descripcionRegalo.length >= 100){
        return "La descripcion debe tener menos de 100 caracteres"
    }

    if(!/^[A-z0-9 ]+$/.test(descripcionRegalo)){
        return "La descripcion solo acepta letras y numeros"
    }

    return '';
    
}

function validarFormulario(event){
    event.preventDefault();
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);
    
    const errores = {

        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo,


    };
    
    manejarErrores(errores)

    
}

function manejarErrores(errores){
   
    const keys = Object.keys(errores);
    const $errores = document.querySelector("#errores")
    $errores.innerText = '';
    keys.forEach( function(key){
        const error = errores[key];
        if(error){
            $form[key].className = "error"
            const $error = document.createElement('li');
            $error.innerText = error;
            $error.id = `${key}Error`
            $errores.appendChild($error);
        } else {
            $form[key].className = ""
            
        }

    }

    );

    // if(errores.nombre) {
    //     $form.nombre.className = "error";

    // } else {
    //     $form.nombre.className = "";
    // }

    // if(errores.ciudad) {
    //     $form.ciudad.className = "error";
    // } else {
    //     $form.ciudad.className = "";
    // }

    // if(errores.descripcionRegalo){
    //     $form["descripcion-regalo"].className = "error";
    // } else {
    //     $form["descripcion-regalo"].className = "";
    // }

}

$form.onsubmit = validarFormulario;








