function main() {
    const arregloEstudiantes = [
        { id: 1, nombre: 'Adrian', nota: 7 },
        { id: 2, nombre: 'Vicente', nota: 9 },
        { id: 3, nombre: 'Wendy', nota: 4 },
        { id: 4, nombre: 'Carolina', nota: 10 },
        { id: 5, nombre: 'Carlos', nota: 6.5 },
    ];
    // OPERADOR - FOREACH
    //ENVIAMOS -> NADA
    //RECIBIMOS -> NADA
    const respuestaForeach = arregloEstudiantes
        .forEach(function (valorActual, indice, arreglo) {
        console.log(valorActual.nota);
    });
    console.log(respuestaForeach); // undefined 
    //Map -> Transformar el arreglo (Mutas el arreglo)
    //ENVIAMOS -> valorActual modificado
    //Recibir -> Nuevo arreglo con valores modificados
    const respuestaMap = arregloEstudiantes
        .map(function (valorActual, i, arreglo) {
        const nuevoObjeto = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota20: valorActual.nota * 2
        };
        return nuevoObjeto;
    });
    console.log('Respuesta MAP', respuestaMap);
    console.log('arreglo estudiantes', arregloEstudiantes);
    //Filter -> filtra el arreglo
    //ENVIAMOS -> CONDICION
    //RECIBIR -> Nuevo arreglo con valores filtrados
    const respuestaFilter = arregloEstudiantes
        .filter(function (valorActual, i, arreglo) {
        const condicion7 = valorActual.nota >= 7;
        const condicion5 = valorActual.nota < 5;
        //condicion es un truty
        return condicion7 || condicion5;
    });
    console.log('respuestaFilter,', respuestaFilter);
    console.log('arregloEstudiantes', arregloEstudiantes);
}
main();
