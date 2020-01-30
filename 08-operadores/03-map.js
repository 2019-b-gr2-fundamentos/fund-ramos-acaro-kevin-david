"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function map(arreglo, numero, funcion) {
    var arregloMapeado = [];
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], i, arreglo);
        if (respuestaFuncion == true) {
            arregloMapeado.push(arreglo[i]) * (numero);
        }
    }
    return arregloMapeado;
}
exports.map = map;
