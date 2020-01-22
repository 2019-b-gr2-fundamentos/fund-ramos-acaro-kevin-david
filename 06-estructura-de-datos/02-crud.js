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
//02-cruds.ts create read update delete
//const prompts = require('prompts')
var prompts = require("prompts");
function main() {
    //npm uninstall -g tsc -> WINDOWS
    //npm install -g typescript -> WINDOWS
    //npm uninstall -g tsc -> WINDOWS
    //obtenerDatosAnimalPerrito(); //Asincrona
    // Sincrona
    obtenerDatosAnimalPerritoSincrono()
        .then()
        .catch(); //-> Promesa// sincrona
}
function obtenerDatosAnimalPerritoSincrono() {
    return __awaiter(this, void 0, void 0, function () {
        var preguntas, RespuestaEdad;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    //Paradigma de programacion 
                    //SINCRONO VS ASINCRONO
                    console.log('Inicio');
                    preguntas = [
                        {
                            type: 'number',
                            name: 'edad',
                            message: 'Puedes darme tu edad?'
                        },
                        {
                            type: 'text',
                            name: 'nombre',
                            message: 'Puedes darme tu nombre?'
                        },
                        {
                            type: 'text',
                            name: 'cedula',
                            message: 'Puedes darme tu cedula?'
                        }
                    ];
                    return [4 /*yield*/, prompts(preguntas)];
                case 1:
                    RespuestaEdad = _a.sent();
                    console.log('respuesta', RespuestaEdad);
                    console.log('Fin');
                    return [2 /*return*/];
            }
        });
    });
}
function obtenerDatosAnimalPerrito() {
    //Paradigma de programacion 
    //SINCRONO VS ASINCRONO
    console.log('Inicio');
    var promesaEdad = prompts({
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
    });
    console.log(promesaEdad);
    promesaEdad
        .then(//ok
    function (datos) {
        console.log('datos', datos); //Aqui puedo seguir
        ///
        var promesaNombre = prompts({
            type: 'text',
            name: 'nombre',
            message: 'Puedes darme tu nombre?'
        });
        promesaNombre
            .then(//ok
        function (datos) {
            console.log('Nombre', datos); //Aqui puedo seguir
        })
            .catch(// =(
        function (error) {
            console.log('Error', error);
        });
        ///
    })
        .catch(// =(
    function (error) {
        console.log('Error', error);
    });
    console.log('Fin');
}
main();
console.log('s\* *');
