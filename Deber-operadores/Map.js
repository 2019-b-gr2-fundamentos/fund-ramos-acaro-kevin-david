"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function map(notas, funcion) {
    var nuevoArreglo = [];
    for (var i = 0; i < notas.length; i++) {
        nuevoArreglo.push(funcion(notas[i]));
    }
    return nuevoArreglo;
}
exports.map = map;
