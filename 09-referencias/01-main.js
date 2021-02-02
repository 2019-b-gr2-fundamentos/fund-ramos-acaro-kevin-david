var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function main() {
    var uno = 1;
    var dos = uno; // valor
    var tres = dos; // valor
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    uno = 5;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    var arregluito = [1, 2, 3];
    var miOtroArregluito = [];
    var a = arregluito[0];
    var b = arregluito[1];
    console.log(arregluito);
    console.log('a', a);
    console.log('b', b);
    miOtroArregluito = __spreadArrays(arregluito); // ref -> Direccion Memoria
    //Asignar a mi otro arregluito una nueva direccion de memoria 
    // 1 -> For llenamos un nuevo arreglo
    // 2 -> Filter-> Siempre true -> Nuevo arreglo
    //3 -> Map -> Nuevo arreglo
    // INMUTABILIDAD
    //JS -> Arreglos u Objetos -> Clon!
    //CLON DEL ARREGLO -> CLON TRABAJAR
    miOtroArregluito.push(2);
    arregluito[0] = 9;
    arregluito[1] = 10;
    console.log('arregluito', arregluito);
    console.log('miOtroArregluito', miOtroArregluito);
    console.log('a', a);
    console.log('b', b);
    var adrian = {
        id: 1,
        nombre: 'Adrian',
        sueldo: 1.12
    };
    var soloElNombre = adrian;
    console.log('adrian', adrian),
        console.log('soloElNombre', soloElNombre);
    delete adrian.nombre; //Eliminar el nombre del objeto
    soloElNombre['edad'] = 22;
    console.log('adrian', adrian);
    console.log('soloElNombre', soloElNombre);
}
main();
