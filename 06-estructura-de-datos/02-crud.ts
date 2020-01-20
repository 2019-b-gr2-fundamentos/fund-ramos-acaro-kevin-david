//02-cruds.ts create read update delete
//const prompts = require('prompts')
import * as prompts from 'prompts';
import { RespuestaEdad } from './respuesta-edad.interface';
import { RespuestaNombre } from './respuesta-nombre.interface';
 
function main(){
    //npm uninstall -g tsc -> WINDOWS
    //npm install -g typescript -> WINDOWS
    //npm uninstall -g tsc -> WINDOWS

//obtenerDatosAnimalPerrito(); //Asincrona
                            // Sincrona
obtenerDatosAnimalPerritoSincrono() 
.then()
.catch(); //-> Promesa// sincrona


}
async function obtenerDatosAnimalPerritoSincrono(){
    //Paradigma de programacion 
    //SINCRONO VS ASINCRONO
    console.log('Inicio');
    const preguntas = [
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
    ]
    const RespuestaEdad = await prompts(preguntas);
    console.log('respuesta',RespuestaEdad);
       console.log('Fin');
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


