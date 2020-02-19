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
//-------------------
var prompts = require("prompts");
var leer_1 = require("../arreglo/leer");
var escribir_1 = require("../arreglo/escribir");
//-------------------
// logo
console.log();
// bienvenida
console.log();
var archivoLeido = leer_1.leer('./formato-base.txt');
var archivoParseado = JSON.parse(archivoLeido);
var copia = archivoParseado;
var arregloFinal = JSON.stringify(copia);
escribir_1.escribir('./arreglo.txt', arregloFinal);
function gato() {
    var empieza = 0;
    var yaGano = 0;
    juego();
    function juego() {
        return __awaiter(this, void 0, void 0, function () {
            var rempate, yaGano, residuo, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        rempate = empate();
                        yaGano = rempate;
                        console.log('yaGano vale ahora', yaGano);
                        _b.label = 1;
                    case 1:
                        empieza = empieza + 1;
                        console.log(empieza);
                        residuo = 0;
                        _a = residuo;
                        switch (_a) {
                            case 0: return [3 /*break*/, 2];
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        jugadorX();
                        return [4 /*yield*/, jugadorX];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        ;
                        return [4 /*yield*/, empate()];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        if (yaGano = 1) return [3 /*break*/, 1];
                        _b.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    ;
    /*
        function setermino(){
            console.log('termino el juego');
        }
        function fin(){
            return 0;
        };
    */
    function empate() {
        var archivoLeido = leer_1.leer('./arreglo.txt');
        var archivoParseado = JSON.parse(archivoLeido);
        var formatoCargado = archivoParseado;
        var respuestaFilter = formatoCargado.filter(function (valorActual) {
            var valor = valorActual.valor < 1;
            return valor;
        });
        var jugadaDisponible = respuestaFilter.length;
        console.log('jugadas disponibles', jugadaDisponible);
        if (jugadaDisponible = 0) {
            console.log('vale ahora uno');
            return 1;
        }
        else {
            console.log('vale ahora cero');
            return 0;
        }
        ;
    }
    function jugadorX() {
        return __awaiter(this, void 0, void 0, function () {
            var archivoLeido, archivoParseado, formatoCargado, respuestaFilter, respuestaMap, posicionGato, marca, a, arregloFinal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('jugador X');
                        archivoLeido = leer_1.leer('./arreglo.txt');
                        archivoParseado = JSON.parse(archivoLeido);
                        formatoCargado = archivoParseado;
                        respuestaFilter = formatoCargado.filter(function (valorActual) {
                            var valor = valorActual.valor < 1;
                            return valor;
                        });
                        respuestaMap = respuestaFilter.map(function (valorACtual) {
                            var nuevoObjeto = {
                                posicion: valorACtual.posicion,
                            };
                            return nuevoObjeto;
                        });
                        //const formatoMap: estructura2[] = respuestaMap;
                        console.log('respuesta map', respuestaMap);
                        return [4 /*yield*/, prompts({
                                type: 'number',
                                name: 'posicion',
                                message: 'ingresa la posicion que desea marcar'
                            })];
                    case 1:
                        posicionGato = _a.sent();
                        console.log('posicionGato', posicionGato.posicion);
                        marca = respuestaMap.findIndex(function (valorActual) {
                            return valorActual.posicion == posicionGato.posicion;
                        });
                        console.log('valor de marca que da el finindex', marca);
                        if (marca > 0) {
                            console.log('no leee el numero');
                            juego();
                        }
                        a = 1;
                        formatoCargado[posicionGato.posicion - 1].valor = a;
                        arregloFinal = JSON.stringify(formatoCargado);
                        console.log('arreglo modificado', formatoCargado);
                        escribir_1.escribir('./arreglo.txt', arregloFinal);
                        juego();
                        return [2 /*return*/];
                }
            });
        });
    }
    function jugadorO() {
        return __awaiter(this, void 0, void 0, function () {
            var archivoLeido, archivoParseado, formatoCargado, respuestaFilter, formatofilter, respuestaMap, formatoMap, posicionGato, numero, marca, a, arregloFinal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('jugador O');
                        archivoLeido = leer_1.leer('./arreglo.txt');
                        archivoParseado = JSON.parse(archivoLeido);
                        formatoCargado = archivoParseado;
                        respuestaFilter = formatoCargado.filter(function (valorActual) {
                            var valor = valorActual.valor < 1;
                            return valor;
                        });
                        formatofilter = respuestaFilter;
                        respuestaMap = formatofilter.map(function (valorACtual) {
                            var nuevoObjeto = {
                                posicion: valorACtual.posicion,
                            };
                            return nuevoObjeto;
                        });
                        formatoMap = respuestaMap;
                        console.log(respuestaMap);
                        return [4 /*yield*/, prompts({
                                type: 'number',
                                name: 'posicion',
                                message: 'ingresa la posicion que desea marcar'
                            })];
                    case 1:
                        posicionGato = _a.sent();
                        numero = Number(posicionGato.posicion);
                        marca = formatoMap.findIndex(function (valorActual) {
                            return valorActual.posicion == numero;
                        });
                        console.log('valor de marca que da el finindex', marca);
                        if (marca > 0) {
                            juego();
                        }
                        a = 2;
                        formatoCargado[marca].valor = a;
                        arregloFinal = JSON.stringify(formatoCargado);
                        console.log(formatoCargado);
                        escribir_1.escribir('./arreglo.txt', arregloFinal);
                        juego();
                        return [2 /*return*/];
                }
            });
        });
    }
    ;
}
gato();
/*
// filter para buscar los iguales a cero y luego
// necesitamos un map para imprimir solo los que se pueden modificar

en la validadacion de ganador tendremos las posiciones de ganador || y otra || etc

llamamos a txt gandor o || x

verificacion de espacios libres()
// .filter ---> filtrar el arreglo (condicion ---> devuelve un arreglo con valores filtrados)
    const respuestaFilter = arregloEstudiante
    .filter(
        function(valorActual,i,arreglo){
            const condicion = valorActual.nota0 = 0;

            return condicion

        }

    );
//.map ---> transformamos el arreglo (mutamos el arreglo)
    
    const respuestaMap =  respuestaFilter.map(
        function(valorACtual,i,arreglo){
            const nuevoObjeto = {
                id: valorACtual.id,
            };
            return nuevoObjeto;
        }
    );

    respuesta map

    let posicion = await prompts(
        {
            type: 'number',
            nombre: 'posicionGato',
            message: 'ingresa la posicion donde desea marcar'

        }
    );

    const idModificar = archivoConEstructura.findIndex( // identificamos
        function (valorActual){
            return valorActual.id == idBuscar.id;
        }
    );
     posicion
     |
     |
     |
     |
     °
     pasamos a las funciones añadir

añadirX(){
    recibimos = posicion;
    arregloGato[posicion] = 1

}

añadir0(){
    recibimos = posicion;
    arregloGato[posicion] = 2

}



// uso leer un txt
y despues lo guardo en una dirrecion la cual voy a modificar y despues
con escribir lo guardo en un nuevo archivo
solamente uso en primer txt como un formato para el inico de la programa
*/ 
