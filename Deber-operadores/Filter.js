"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filter(notas, funcion) {
    var arregloNuevo = [];
    for (var i = 0; i < notas.length; i++) {
        if (funcion(notas[i])) {
            arregloNuevo.push(notas[i]);
        }
    }
    return arregloNuevo;
}
exports.filter = filter;
