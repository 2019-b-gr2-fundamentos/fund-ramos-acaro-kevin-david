"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function some(notas) {
    var vOF = false;
    for (var i = 0; i < notas.length; i++) {
        if (notas[i].nota >= 7) {
            vOF = true;
        }
    }
    return vOF;
}
exports.some = some;
