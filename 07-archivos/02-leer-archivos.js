"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function leerArchivo() {
    console.log('Leer archivo');
    var resultado = fs.readFileSync('./ejemplo.txt', //PATH
    'utf-8' //CODIFICACION
    );
    console.log(resultado); // Hola amigos
    return resultado;
}
exports.leerArchivo = leerArchivo;
