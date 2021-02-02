"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var some_any_1 = require("./some-any");
var Map_1 = require("./Map");
var Filter_1 = require("./Filter");
var Reduce_1 = require("./Reduce");
var forEach_1 = require("./forEach");
var Every_1 = require("./Every");
//
function main() {
    var notasEstudiantes = [
        { id: 1, nombre: "David", nota: 9.6 },
        { id: 2, nombre: "Carlos", nota: 7 },
        { id: 3, nombre: "Sebastian", nota: 5.2 },
        { id: 4, nombre: "Mayu", nota: 6.8 },
        { id: 5, nombre: "Erick", nota: 8.2 },
        { id: 6, nombre: "Daniela", nota: 4 },
    ];
    console.log('Las notas de cada estudiante son: \n', notasEstudiantes, '\n');
    //OPERADOR FOR EACH
    console.log('\nOPERADOR foreach: ', forEach_1.foreach(notasEstudiantes));
    //OPERADOR some
    console.log('\nOPERADOR some: Hay al menos un estudiante con nota mayor a 7?: ', some_any_1.some(notasEstudiantes));
    //OPERADOR every
    console.log('\nOPERADOR every: Todos los estudiantes tienen su nota mayor a 7? ', Every_1.every(notasEstudiantes));
    //OPERADOR REDUCE
    console.log('\nOPERADOR REDUCE: ', Reduce_1.reduce(notasEstudiantes));
    //OPERADOR map
    var nuevasnotasMapeadas = Map_1.map(notasEstudiantes, function (valorActual) {
        var nuevoObjeto = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            notaportres: (valorActual.nota * 3).toFixed(2)
        };
        return nuevoObjeto;
    });
    console.log('\nOPERADOR map: \n', nuevasnotasMapeadas);
    //OPERADOR filter
    var nuevasNotasfiltradas = Filter_1.filter(notasEstudiantes, function (valorActual) {
        var notasMayoresSiete = valorActual.nota >= 7;
        return notasMayoresSiete;
    });
    console.log('\nOPERADOR filter: \n', nuevasNotasfiltradas);
    console.log('\n\n', notasEstudiantes);
}
main();
