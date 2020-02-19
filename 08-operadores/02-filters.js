"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcular(funcion, numUno, numDos) {
    var valorInicial = 10;
    return funcion(numUno, numDos, valorInicial);
}
exports.calcular = calcular;
;
function sumar(numUno, numDos, valorInicial) {
    return numUno + numDos;
}
exports.sumar = sumar;
;
calcular(sumar, 1, 2); // 3
calcular(function (numUno, numDos, valorInicial) {
    return numUno - numDos;
}, 5, 3); // 2
function filter(arreglo, funcion) {
    var arregloFiltrado = [];
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i]);
        if (respuestaFuncion == true) {
            arregloFiltrado.push(arreglo[i]);
        }
        ;
    }
    ;
    return arregloFiltrado;
}
exports.filter = filter;
