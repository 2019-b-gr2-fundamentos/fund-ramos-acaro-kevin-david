"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompts = require("prompts");
var _02_leer_archivos_1 = require("C:/Users/Kevin Ramos/Documents/GitHub/fund-ramos-acaro-kevin-david/07-archivos/02-leer-archivos");
var _03_escribir_archivo_1 = require("C:/Users/Kevin Ramos/Documents/GitHub/fund-ramos-acaro-kevin-david/07-archivos/03-escribir-archivo");
var id = 0;
var contenidoArchivo = _02_leer_archivos_1.leerArchivo('./colegios.txt');
var arregloColegiosCargadoDeArchivo = JSON.parse(contenidoArchivo);
var minimoAid = 0;
arregloColegiosCargadoDeArchivo
    .forEach(function (valorActual) {
    var idActual = valorActual.Pid;
    if (idActual > minimoAid) {
        minimoAid = idActual;
    }
});
minimoAid = minimoAid + 1;
id = minimoAid;
var colegios = arregloColegiosCargadoDeArchivo;
function crearDatosColegios() {
    return __awaiter(this, void 0, void 0, function () {
        var preguntaColegios, respuestaPreguntas, nuevoRegistroColegios, ColegiosStringeado;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    preguntaColegios = [
                        {
                            type: 'text',
                            name: 'nombre',
                            message: 'Inserte el nombre del colegio'
                        },
                        {
                            type: 'text',
                            name: 'apodo',
                            message: 'Inserte el apodo del colegio'
                        },
                        {
                            type: 'text',
                            name: 'sector',
                            message: 'Inserte el sector del colegior'
                        },
                        {
                            type: 'text',
                            name: 'fundacion',
                            message: 'Inserte la fecha de fundacion del colegio'
                        },
                        {
                            type: 'text',
                            name: 'numeroEstudiantes',
                            message: 'Inserte numero de estudiantes'
                        }
                    ];
                    return [4 /*yield*/, prompts(preguntaColegios)];
                case 1:
                    respuestaPreguntas = _a.sent();
                    nuevoRegistroColegios = {
                        id: id,
                        nombre: respuestaPreguntas.nombre,
                        apodo: respuestaPreguntas.apodo,
                        sector: respuestaPreguntas.sector,
                        fundacion: respuestaPreguntas.fundacion,
                        numeroEstudiantes: respuestaPreguntas.numeroEstudiantes,
                    };
                    id = id + 1;
                    colegios.push(nuevoRegistroColegios);
                    ColegiosStringeado = JSON.stringify(colegios);
                    _03_escribir_archivo_1.escribirArchivo('./colegios.txt', ColegiosStringeado);
                    opciones().then().catch();
                    return [2 /*return*/];
            }
        });
    });
}
;
function opciones() {
    return __awaiter(this, void 0, void 0, function () {
        var preguntas, respuesta1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'respuestas',
                        message: 'Opciones: \n 1-crear  un colegio \n 2-leer los los colegios \n 3-actualizar colegios \n 4-eliminar colegios \n 5-Salir'
                    })];
                case 1:
                    preguntas = _a.sent();
                    respuesta1 = preguntas.respuestas;
                    if (respuesta1 == 1) {
                        crearDatosColegios().then().catch();
                    }
                    else if (respuesta1 == 2) {
                        leerColegios().then().catch();
                    }
                    else if (respuesta1 == 3) {
                        editarColegios().then().catch();
                    }
                    else if (respuesta1 == 4) {
                        eliminarColegios().then().catch();
                    }
                    else if (respuesta1 == 5) {
                        console.log('Adios');
                    }
                    else {
                        console.log('Opcion no valida');
                        opciones().then().catch();
                    }
                    ;
                    return [2 /*return*/, preguntas.respuestas];
            }
        });
    });
}
;
function leerColegios() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('Registro de Perros:', colegios);
            opciones().then().catch();
            return [2 /*return*/];
        });
    });
}
;
function editarColegios() {
    return __awaiter(this, void 0, void 0, function () {
        var ColegiosIdAEditar, idEncontrado, queDeseaEditar, respuestaOpciones, nuevonombre, nuevoapodo, nuevosector, nuevaFundacion, nuevonumeroEstudiantes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'id',
                        message: 'Ingrese el id del colegio que quiere editar'
                    })];
                case 1:
                    ColegiosIdAEditar = _a.sent();
                    idEncontrado = colegios.findIndex(function (valorActual) {
                        return valorActual.id == ColegiosIdAEditar.id;
                    });
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'opcionAEditar',
                            message: '¿Que opcion quiere cambiar?'
                        })];
                case 2:
                    queDeseaEditar = _a.sent();
                    respuestaOpciones = queDeseaEditar.opcionAEditar;
                    if (!(respuestaOpciones == 'nombre')) return [3 /*break*/, 4];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevosnombres',
                            message: 'Ingrese el nombre del nuevo colegio'
                        })];
                case 3:
                    nuevonombre = _a.sent();
                    colegios[idEncontrado].nombre = nuevonombre.nuevosnombres;
                    return [3 /*break*/, 13];
                case 4:
                    if (!(respuestaOpciones == 'apodo')) return [3 /*break*/, 6];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevosApodos',
                            message: 'Ingrese el apodo del colegio'
                        })];
                case 5:
                    nuevoapodo = _a.sent();
                    colegios[idEncontrado].apodo = nuevoapodo.nuevosApodos;
                    return [3 /*break*/, 13];
                case 6:
                    if (!(respuestaOpciones == 'sector')) return [3 /*break*/, 8];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevosSector',
                            message: 'Ingrese el sector del colegio'
                        })];
                case 7:
                    nuevosector = _a.sent();
                    colegios[idEncontrado].sector = nuevosector.nuevosSector;
                    return [3 /*break*/, 13];
                case 8:
                    if (!(respuestaOpciones == 'fundacion')) return [3 /*break*/, 10];
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'nuevaFechaFundacion',
                            message: 'Ingrese la fecha de fundacion'
                        })];
                case 9:
                    nuevaFundacion = _a.sent();
                    colegios[idEncontrado].fundacion = nuevaFundacion.nuevaFechaFundacion;
                    return [3 /*break*/, 13];
                case 10:
                    if (!(respuestaOpciones == 'numeroEstudiantes')) return [3 /*break*/, 12];
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'nuevosnumeroEstudiantes',
                            message: 'Ingrese el nuevo newnumeroEstudiantes'
                        })];
                case 11:
                    nuevonumeroEstudiantes = _a.sent();
                    colegios[idEncontrado].numeroEstudiantes = nuevonumeroEstudiantes.nuevosnumeroEstudiantes;
                    return [3 /*break*/, 13];
                case 12:
                    console.log('Ingrese un campo valido');
                    _a.label = 13;
                case 13:
                    ;
                    console.log('El registro de los colegios nuevo es :', colegios);
                    opciones().then().catch();
                    return [2 /*return*/, colegios];
            }
        });
    });
}
;
function eliminarColegios() {
    return __awaiter(this, void 0, void 0, function () {
        var ColegiosidAEliminar, idEncontrado, registroBorrado;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'id',
                        message: 'Ingrese el id del colegios que quiere eliminar'
                    })];
                case 1:
                    ColegiosidAEliminar = _a.sent();
                    idEncontrado = colegios.findIndex(function (valorActual) {
                        return valorActual.id == ColegiosidAEliminar.id;
                    });
                    colegios.splice(idEncontrado, 1);
                    registroBorrado = JSON.stringify(colegios);
                    _03_escribir_archivo_1.escribirArchivo('./colegios.txt', registroBorrado);
                    console.log('El nuevo registro de Perros es:', colegios);
                    opciones().then().catch();
                    return [2 /*return*/, colegios];
            }
        });
    });
}
function main() {
    crearDatosColegios().then().catch();
}
main();
