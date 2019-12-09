//Para que sea un arreglo de multiples dimensiones cada elemento del arreglo es un arreglo (arreglo dentro de un arreglo);
/*
arregloDosDimensiones[0][0]; //1
arregloDosDimensiones[0][1]; //2
*/
/*
1) definir el tamaño
2) repetir el calculo N veces (N=tamaño)
3.1) acceder al primer elemento del primer elemento
3.2) acceder al ultimo elemento del segundo arreglo
3.3) sumar los elementos
3.4) acceder al primer elemento + 1 = segundo elemento del primer arreglo
3.5) acceder al ultimo elemento - 1 = penultimo elemento del segundo arreglo
3.6) sumar los elementos
TIENE QUE DEVOLVER (RETURN [0,0, 1*7 + 2*6 + 3*5 + 4*4])
*/
var arregloDosDimensiones = [
    [1, 2, 3, 4],
    [4, 5, 6, 7]
];
function multiplicarArreglos(arregloDosDimensiones, tamañoArreglo, indiceArreglo) {
    var tamañoArreglo1 = arregloDosDimensiones[0].length;
    var n = tamañoArreglo1;
    var m = 0;
    var indiceArreglo1 = arregloDosDimensiones[0][m];
    var suma = 0;
    var producto = 0;
    for (tamañoArreglo; tamañoArreglo1 >= 0 && indiceArreglo1 <= 4; n-- && m++) {
        m * n;
        multiplicarArreglos(arregloDosDimensiones, tamañoArreglo);
    }
    producto = m * n;
    producto = producto + producto;
    suma = suma + producto;
    return [0, 0, suma];
}
function main() {
    multiplicarArreglos(arregloDosDimensiones, 4);
}
