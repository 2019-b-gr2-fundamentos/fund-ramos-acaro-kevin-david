"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _02_leer_archivos_1 = require("./02-leer-archivos");
var _03_escribir_archivo_1 = require("./03-escribir-archivo");
function main() {
    var textoLeido = _02_leer_archivos_1.leerArchivo();
    var nuevoContenido = 'TENGO HAMBRE :( \n';
    _03_escribir_archivo_1.escribirArchivo('');
    console.log(textoLeido + nuevoContenido);
}
main();
