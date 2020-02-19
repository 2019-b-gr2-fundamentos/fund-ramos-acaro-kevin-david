"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcular(funcion, numUno, NumDos) {
    var valorInicial = 10;
    return funcion(numUno, NumDos, valorInicial);
}
exports.calcular = calcular;
function sumar(numUno, NumDos, valorInicial) {
    return numUno + NumDos;
}
exports.sumar = sumar;
function restar(numUno, NumDos, valorInicial) {
    return numUno - NumDos;
}
exports.restar = restar;
calcular(sumar, 1, 2);
calcular(function restar(numUno, NumDos, valorInicial) {
    return numUno - NumDos;
}, 5, 3);
function filter(arreglo, funcion) {
    var arregloFiltrado = [];
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], i, arreglo);
        if (respuestaFuncion == true) {
            arregloFiltrado.push(arreglo[i]);
        }
    }
    return arregloFiltrado;
}
exports.filter = filter;
