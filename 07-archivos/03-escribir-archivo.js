"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function escribirArchivo(contenido) {
    fs.writeFileSync('./ejemplo.txt', contenido, //CONTENIDO
    'utf8' // CODIFICACION
    );
}
exports.escribirArchivo = escribirArchivo;
