//02-cruds.ts create read update delete
//const prompts = require('prompts')
var prompts = require('prompts');
function main() {
    obtenerDatosAnimalPerrito();
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
        .then(function (datos) {
        console.log('datos', datos); //Aqui puedo seguir
        ///
        var promesaNombre = prompts({
            type: 'text',
            name: 'nombre',
            message: 'Puedes darme tu nombre?'
        });
        promesaNombre
            .then(function (datos) {
            console.log('Nombre', datos); //Aqui puedo seguir
        })
            .catch(function (error) {
            console.log('Error', error);
        });
        ///
    })
        .catch(function (error) {
        console.log('Error', error);
    });
    console.log('Fin');
}
main();
