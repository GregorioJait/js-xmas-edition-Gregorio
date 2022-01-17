function probarValidarNombre() {
    const muchosCaracteres = '1111111111111111111111111111111111111111111111111111111111111111';
    console.assert(
      validarNombre('') === "Este campo debe tener al menos 1 caracter",
      'Validar nombre no validó que el nombre no sea vacío',
  );
  
    console.assert(
      validarNombre(muchosCaracteres) === 'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
    
}

function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === "Selecciona una Ciudad", 
        "validarCiudad no funciona correctamente",
    );
}


function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === "Describi tu Regalo",
        "validarDescripcionRegalo no funciona correctamente",
    );
}



probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();

