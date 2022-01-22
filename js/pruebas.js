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
   
  console.assert(
      validarNombre('jorge') === '', 
      "validarNombre no funciona correctamente con un nombre valido"

  );

  console.assert(
      validarNombre('12345') === "El nombre debe ser uno solo y contener solo letras",
      'validarNombre no funciona correctamente con un nombre con numeros',
  );
}

function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === "Una ciudad tiene que estar seleccionada", 
        "validarCiudad no funciona correctamente cuando no hay ciudad seleccionada",
    );

    console.assert(
        validarCiudad('Mendoza') === '',
        "validarCiudad no funciona correctamente con una ciudad valida seleccionada",
    );
}


function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === "El campo descripcion no puede estar vacio" ,
        "validarDescripcionRegalo no funciona correctamente con un campo vacio",
    );

    console.assert(
        validarDescripcionRegalo('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')
        === "La descripcion debe tener menos de 100 caracteres",
        "validarDescripcionRegalo no funciona correctamente con mas de 100 caracteres",
    );

    console.assert(
        validarDescripcionRegalo('Una bicicleta') === '',
        "validarDescripcionRegalo no funciona correctamente con una descripcion valida",
    );

    console.assert(
        validarDescripcionRegalo('la bici que sale 400$.') === "La descripcion solo acepta letras y numeros",
        "validarDescripcionRegalo no funciona correctamente con una descripcion con caracteres que no son letras o numeros",
    );
}



probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();










