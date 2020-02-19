"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reduce(notas) {
    var acumulador = 100;
    for (var i = 0; i < notas.length; i++) {
        acumulador -= notas[i].nota;
    }
    return acumulador;
}
exports.reduce = reduce;
