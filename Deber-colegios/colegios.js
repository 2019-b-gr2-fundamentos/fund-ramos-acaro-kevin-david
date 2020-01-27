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
exports.__esModule = true;
var prompts = require("prompts");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        function agregarColegios() {
            return __awaiter(this, void 0, void 0, function () {
                var cole;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts(preguntas)];
                        case 1:
                            cole = _a.sent();
                            arregloColegios.push(cole);
                            decidir();
                            return [2 /*return*/];
                    }
                });
            });
        }
        function editarColegios() {
            return __awaiter(this, void 0, void 0, function () {
                var indice, colegioEditado, nuevovalor, colegioSeleccionado;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'number',
                                name: 'indice',
                                message: 'Inserte el indice del colegio que quiera editar'
                            })];
                        case 1:
                            indice = _a.sent();
                            if (!(indice.indice < arregloColegios.length)) return [3 /*break*/, 6];
                            return [4 /*yield*/, prompts({
                                    type: 'text',
                                    name: 'caracteristica',
                                    message: '¿Qué es lo que desea editar?'
                                })];
                        case 2:
                            colegioEditado = _a.sent();
                            if (!(colegioEditado.caracteristica == 'nombre'
                                || colegioEditado.caracteristica == 'apodo'
                                || colegioEditado.caracteristica == 'sector'
                                || colegioEditado.caracteristica == 'fundacion'
                                || colegioEditado.caracteristica == 'numeroEstudiantes')) return [3 /*break*/, 4];
                            return [4 /*yield*/, prompts({
                                    type: 'text',
                                    name: 'valor',
                                    message: '¿Que desea insertar?'
                                })];
                        case 3:
                            nuevovalor = _a.sent();
                            colegioSeleccionado = arregloColegios[indice.indice];
                            switch (colegioEditado.caracteristica) {
                                case 'Nombre':
                                    colegioSeleccionado.nombre = nuevovalor.valor;
                                    break;
                                case 'Pais':
                                    colegioSeleccionado.apodo = nuevovalor.valor;
                                    break;
                                case 'Liga':
                                    colegioSeleccionado.sector = nuevovalor.valor;
                                    break;
                                case 'Presupuesto':
                                    colegioSeleccionado.fundacion = nuevovalor.valor;
                                    break;
                                case 'Presupuesto':
                                    colegioSeleccionado.numeroEstudiantes = nuevovalor.valor;
                                    break;
                            }
                            decidir();
                            return [3 /*break*/, 5];
                        case 4:
                            console.log('la edicion no existe');
                            editarColegios();
                            _a.label = 5;
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            console.log('No existe el indice');
                            editarColegios();
                            _a.label = 7;
                        case 7: return [2 /*return*/];
                    }
                });
            });
        }
        function decidir() {
            return __awaiter(this, void 0, void 0, function () {
                var decision;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'text',
                                name: 'eleccion',
                                message: 'Insertar nuevo colegio --> 1 \n Editar colegio --> 2 \n Salir --> 3'
                            })];
                        case 1:
                            decision = _a.sent();
                            switch (decision.eleccion) {
                                case '1':
                                    agregarColegios();
                                    break;
                                case '2':
                                    editarColegios();
                                    break;
                                case '3':
                                    console.log('Estos son tus colegios:');
                                    console.log(arregloColegios);
                                    break;
                                default:
                                    console.log('La opción elegida no es válida');
                                    decidir();
                                    break;
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        var arregloColegios, preguntas;
        return __generator(this, function (_a) {
            arregloColegios = [];
            preguntas = [
                {
                    type: 'string',
                    name: 'nombre',
                    message: 'Inserte el nombre delcolegio'
                },
                {
                    type: 'string',
                    name: 'apodo',
                    message: 'Inserte el apodo de su colegio'
                },
                {
                    type: 'string',
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
            agregarColegios();
            return [2 /*return*/];
        });
    });
}
main();
