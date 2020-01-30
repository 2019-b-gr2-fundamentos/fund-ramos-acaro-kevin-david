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
var id = 1;
var colegios = [];
function crearDatosColegios() {
    return __awaiter(this, void 0, void 0, function () {
        var preguntas, respuestaPreguntas, nuevoRegistroColegio;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    preguntas = [
                        {
                            type: 'text',
                            name: 'nombre',
                            message: 'Inserte el nombre delcolegio'
                        },
                        {
                            type: 'text',
                            name: 'apodo',
                            message: 'Inserte el apodo de su colegio'
                        },
                        {
                            type: 'text',
                            name: 'sector',
                            message: 'Inserte el sector del colegio '
                        },
                        {
                            type: 'number',
                            name: 'fundacion',
                            message: 'Ingrese el año de fundacion'
                        },
                        {
                            type: 'number',
                            name: 'numeroEstudiantes',
                            message: 'Ingrese el numero de estudiantes'
                        }
                    ];
                    return [4 /*yield*/, prompts(preguntas)];
                case 1:
                    respuestaPreguntas = _a.sent();
                    nuevoRegistroColegio = {
                        Aid: id,
                        nombre: respuestaPreguntas.nombre,
                        apodo: respuestaPreguntas.apodo,
                        sector: respuestaPreguntas.sector,
                        fundacion: respuestaPreguntas.fundacion,
                        numeroEstudiantes: respuestaPreguntas.numeroEstudiantes,
                    };
                    id = id + 1;
                    colegios.push(nuevoRegistroColegio);
                    posibilidades().then().catch();
                    return [2 /*return*/];
            }
        });
    });
}
;
function posibilidades() {
    return __awaiter(this, void 0, void 0, function () {
        var preguntas, respuesta1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'respuestas',
                        message: '¿Que quieres hacer? \n 1-Crear un colegio \n 2-Ver los colegios  \n 3-Actualizar colegios \n 4-Eliminar colegios \n 5-Salir'
                    })];
                case 1:
                    preguntas = _a.sent();
                    respuesta1 = preguntas.respuestas;
                    if (respuesta1 == 1) {
                        crearDatosColegios().then().catch();
                    }
                    else if (respuesta1 == 2) {
                        leerRegistros().then().catch();
                    }
                    else if (respuesta1 == 3) {
                        editarColegio().then().catch();
                    }
                    else if (respuesta1 == 4) {
                        eliminarRegistro().then().catch();
                    }
                    else if (respuesta1 == 5) {
                        console.log('ADIOS');
                    }
                    else {
                        console.log('Elija una opcion valida');
                        posibilidades().then().catch();
                    }
                    ;
                    return [2 /*return*/, preguntas.respuestas];
            }
        });
    });
}
;
function leerRegistros() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('Los colegios son:', colegios);
            posibilidades().then().catch();
            return [2 /*return*/];
        });
    });
}
;
function editarColegio() {
    return __awaiter(this, void 0, void 0, function () {
        var AidAEditar, AidEncontrado, colegioAeditar, respuestaCampo, nuevoColegio1, nuevoApodos, nuevoSector1, nuevaFundacion1, nuevosEstudiantes1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'Aid',
                        message: 'Ingresa el aid del colegio disponible'
                    })];
                case 1:
                    AidAEditar = _a.sent();
                    AidEncontrado = colegios.findIndex(function (valorActual) {
                        return valorActual.Aid == AidAEditar.Aid;
                    });
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'campoAEditar',
                            message: '¿Que cosa quiere editar?'
                        })];
                case 2:
                    colegioAeditar = _a.sent();
                    respuestaCampo = colegioAeditar.campoAEditar;
                    if (!(respuestaCampo == 'nombre' || '1' || '1.nombre')) return [3 /*break*/, 4];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevoColegio',
                            message: 'Ingrese el nuevo colegio'
                        })];
                case 3:
                    nuevoColegio1 = _a.sent();
                    colegios[AidEncontrado].nombre = nuevoColegio1.nuevoColegio;
                    return [3 /*break*/, 13];
                case 4:
                    if (!(respuestaCampo == 'apodo')) return [3 /*break*/, 6];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevoApodo',
                            message: 'Ingrese el nuevo apodo del colegio'
                        })];
                case 5:
                    nuevoApodos = _a.sent();
                    colegios[AidEncontrado].apodo = nuevoApodos.nuevoApodo;
                    return [3 /*break*/, 13];
                case 6:
                    if (!(respuestaCampo == 'sector')) return [3 /*break*/, 8];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevoSector',
                            message: 'Ingrese el nuevo '
                        })];
                case 7:
                    nuevoSector1 = _a.sent();
                    colegios[AidEncontrado].sector = nuevoSector1.nuevoSector;
                    return [3 /*break*/, 13];
                case 8:
                    if (!(respuestaCampo == 'fundacion')) return [3 /*break*/, 10];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevaFundacion',
                            message: 'Ingrese la nueva fundacion del colegio'
                        })];
                case 9:
                    nuevaFundacion1 = _a.sent();
                    colegios[AidEncontrado].fundacion = nuevaFundacion1.nuevaFundacion;
                    return [3 /*break*/, 13];
                case 10:
                    if (!(respuestaCampo == 'numeroEstudiantes')) return [3 /*break*/, 12];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'estudiantes',
                            message: 'Ingrese el nuevo numero de estudiantes'
                        })];
                case 11:
                    nuevosEstudiantes1 = _a.sent();
                    colegios[AidEncontrado].numeroEstudiantes = nuevosEstudiantes1.estudiantes;
                    return [3 /*break*/, 13];
                case 12:
                    console.log('Ingrese una opcion valida');
                    _a.label = 13;
                case 13:
                    ;
                    console.log('El registro de colegios actualizado es:', colegios);
                    posibilidades().then().catch();
                    return [2 /*return*/, colegios];
            }
        });
    });
}
;
function eliminarRegistro() {
    return __awaiter(this, void 0, void 0, function () {
        var AidAEliminar, AidEncontrado;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'Aid',
                        message: 'Ingrese el Aid del colegio  que quiere eliminar'
                    })];
                case 1:
                    AidAEliminar = _a.sent();
                    AidEncontrado = colegios.findIndex(function (valorActual) {
                        return valorActual.Aid == AidAEliminar.Aid;
                    });
                    colegios.splice(AidEncontrado, 1);
                    console.log('El nuevo registro de colegios es:', colegios);
                    posibilidades().then().catch();
                    return [2 /*return*/, colegios];
            }
        });
    });
}
function main() {
    crearDatosColegios().then().catch();
}
main();
