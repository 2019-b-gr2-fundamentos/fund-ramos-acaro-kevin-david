import { leerArchivo } from "./02-leer-archivos";
import { escribirArchivo } from "./03-escribir-archivo";
import { Estudiante } from "./interfaces/estudiante.inteface";
import * as prompts from 'prompts';
async function main(){

    
    const contenidoArchivo = leerArchivo(
        './ejemplo.txt'
    );
    console.log('contenidoArchivo', contenidoArchivo);
//PARSEAR -> TEXTO -> Estructura de memoria
/*
{
    "nombre: "Adrian"
}
<universidad>
*/
let arregloCagadoDeArchivo; // undefined

try{
    arregloCagadoDeArchivo = JSON
                .parse(contenidoArchivo);
}catch(error){
    arregloCagadoDeArchivo = [];
    console.error('Error parseando archivo');
    
}

let contador = 1;

//OPERADORES
let minimoId = -1;
arregloCagadoDeArchivo
    .foreach( // NO ENVIAN NADA Y NO SE DEVUELVE NADA
        //ITERAR
        function(valorActual){
            const idActual = valorActual.id;
            if(idActual > minimoId){
                minimoId = idActual
            }
        }
    );  
    minimoId = minimoId +1;
    contador = minimoId;  

/*
try{
    console.log('1');
    console.log('2');
    console.log('3');
    console.log(0/0);
    console.log(""/0);
    //***; error sintaxis
    //var a = b; 
    //let = a;
    //let = a; // ta mal

    throw new ReferenceError("EL ARCHIVO ESTA MAL PARSEADO");
    console.log('4');
    console.log('5');
}catch(error){
    console.log(error)
    console.log(':3');
}
*/
    
    const arregloEstudiantes: Estudiante[] = arregloCagadoDeArchivo;
    const arregloPreguntas = [
        {
            type: 'text',
            name: 'nombre',
            message: 'Ingresa tu nombre'
        }
    ];
    const respuestaEstudianteUno = await prompts(arregloPreguntas);
   

    const nuevoRegistroUno = {
        id: contador,
        nombre: respuestaEstudianteUno.nombre
    };
    contador = contador +1;
    arregloEstudiantes.push(nuevoRegistroUno);

    const respuestaEstudianteDos = await prompts(arregloPreguntas);
    const nuevoRegistroDos = {
        id: contador,
        nombre: respuestaEstudianteDos.nombre
    };
    contador = contador +1;
    arregloEstudiantes.push(nuevoRegistroDos);

    console.log(arregloEstudiantes);

    console.log('\nCual usuario quieres editar?');
    console.log(arregloEstudiantes);

    //OPERADORES!!! -> REEMPLAZAR AL 'FOR'

    const idABuscar = await prompts({
        type: 'text',
        name: 'id',
        message: 'Ingresa el ID del registro a Editar'
    })

    const indiceEncontrado = arregloEstudiantes.findIndex( //return  CONDICION -> 
        function(valorActual, indice, arreglo){
            console.log(valorActual);
            //console.log(indice);
            //console.log(arreglo);
            return valorActual.id == idABuscar.id; // Nos devuelve el INDICE
        } //Si encuentra nos devuelve el indice
        //No encoentra
    )
        console.log('Indice encontrado:', indiceEncontrado);
        const nombreAEditar = await prompts({
            type: 'text',
            name: 'nombre',
            message: 'Ingresa el nuevo nombre'
        })

        arregloEstudiantes[indiceEncontrado].nombre = nombreAEditar.nombre;
        console.log(arregloEstudiantes);


        const buscar = await prompts({
            type: 'text',
            name: 'nombre',
            message: 'Buscar por ID o por Nombre'
        });

        const estudianteEncontrado = arregloEstudiantes
            .find( //Return CONDICION
                function(valorActual){
                    return valorActual.nombre == buscar.nombre;
                }
            );
        console.log(estudianteEncontrado)
        
    const arregloTexto = JSON.stringify(arregloEstudiantes);
    console.log(arregloTexto);
    escribirArchivo(
        './ejemplo.txt',
    arregloTexto
    );





    /*
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'TENGO HAMBRE :(\n';
    escribirArchivo('./ejemplo.txt', '');
    
   
   console.log(textoLeido+ nuevoContenido);
   */

}

main().then().catch();






