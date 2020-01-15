//02-cruds.ts create read update delete
//const prompts = require('prompts')
import * as prompts from 'prompts';

function main(){
obtenerDatosAnimalPerrito();
}
function obtenerDatosAnimalPerrito(){
//Paradigma de programacion 
//SINCRONO VS ASINCRONO
console.log('Inicio');
const promesaEdad = prompts({
    type: 'number',
    name: 'edad',
    message: 'Puedes darme tu edad?'
})
console.log(promesaEdad);
promesaEdad
    .then( //ok
        (datos)=>{
            console.log('datos',datos); //Aqui puedo seguir
            ///
            const promesaNombre = prompts({
                type: 'text',
                name: 'nombre',
                message: 'Puedes darme tu nombre?'
            });
            promesaNombre
            .then( //ok
                (datos)=>{
                    console.log('Nombre',datos); //Aqui puedo seguir
                }
                )
                .catch( // =(
                    (error)=>{
                        console.log('Error',error)
                    }
                )
            ///
        }
    )
    .catch( // =(
        (error)=>{
            console.log('Error',error)
        }
    )

console.log('Fin');
}

main();


