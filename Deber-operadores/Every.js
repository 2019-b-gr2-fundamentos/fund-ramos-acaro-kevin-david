"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function every(notas) {
    var vOF = false;
    for (var i = 0; i < notas.length; i++) {
        if (notas[i].nota < 7) {
            vOF = false;
        }
    }
    return vOF;
}
exports.every = every;
